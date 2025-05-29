// Simple test cases for our parsing functions
const testSummaries = [
  // Example 1
  'F25-Berlin-Oct 23-BA (Hons) Tourism and Hospitality Management G1-UCA-BA-Y2-T5-PW Y2 T&EM: Front Office Operations and Reservation Systems',
  // Example 2
  'F25-Berlin-Feb 25-BSc (Hons) International Business and Management G1-UCA-BA-Y1-T1-International Business Administration',
  // Example 3
  'F25-Berlin-Feb 25-Global MBA G1-UCA-MBA-Y1-T1-Marketing and Business Environment',
  // Example 4
  'F25-Berlin-Feb 25-MSc Data Analytics G2-UCA-MSc -Y1-T1-Predictive Analytics and Machine Learning using Python',
  // Example with no G followed by number
  'F25-Berlin-Feb 25-MSc Sports Management-UCA-MSc -Y1-T1-Corporate Finance in Sports Management',
  // Example with long names
  'F25-Berlin-Oct 22-Oct 24-BSc (Hons) International Business and Management - Pathway One-Strategic Leadership - G1-UCA-BSc-Y3-T8-Pathway One-Strategic Leadership:Intersectoral Management: Government, Business and Non profits (Top Up)',
];

const testStaff = [
  'Dr. Jan Vero (Dr.JVero)',
  'olufunke popoola (Miss olufunke popoola)',
  'Dr.Safia Anjum (Dr.SAnjum)',
  'Dr. Lawrence Ibeh (LIbeh)',
  'Rabia Luqman (Dr.RLuqman)',
  'Dr. Kamyar EsmaeiliNasrabadi (Dr. KEsmaeiliNasrabadi)'
];

// Copy these from your parseExcel.ts file
const extractProgram = (summary) => {
  const programRegex = /(BAF|MA|MSc|BSc|MBA|BA|Global).*?(?=\s+-?\s*G\d+|$|-UCA|-UNINNETTUNO)/;
  const match = summary.match(programRegex);
  if (!match) return summary;

  let program = match[0].trim();
  program = program.replace(/\s*-\s*Pathway.*$/, '');
  program = program.replace(/\s*\(International Route\)/, '');
  return program;
};

const extractModule = (summary) => {
  // First, check if the summary contains a G followed by a number
  const gPattern = /G\d+/;
  const hasGPattern = gPattern.test(summary);
  
  let moduleName = '';
  
  if (hasGPattern) {
    // Case 1: G pattern exists - find everything after the technical codes
    // Look for patterns like G1-UCA-BA-Y2-T5- or G2-UNINNETTUNO-MSc-Y1-T1-
    const moduleRegex = /G\d+[-\s]+((?:UCA|UNINNETTUNO)[-\s]+(?:MSc|BA|BSc|MBA|MA)?[-\s]*(?:Y\d+)?[-\s]*(?:T\d+)?[-\s]*(?:PW[^:]*)?:?\s*)(.*)/;
    const match = summary.match(moduleRegex);
    
    if (match && match[2]) {
      moduleName = match[2].trim();
    }
  } else {
    // Case 2: No G pattern - try to find module after UCA or UNINNETTUNO
    const altModuleRegex = /(?:UCA|UNINNETTUNO)[-\s]+(?:MSc|BA|BSc|MBA|MA)?[-\s]*(?:Y\d+)?[-\s]*(?:T\d+)?[-\s]+(.*)/;
    const match = summary.match(altModuleRegex);
    
    if (match && match[1]) {
      moduleName = match[1].trim();
    }
  }
  
  // Simplify long module names
  if (moduleName) {
    // If module contains a colon, take only the part before it to simplify
    if (moduleName.includes(':')) {
      moduleName = moduleName.split(':')[0].trim();
    }
    // If module contains a comma, take only the first part to simplify
    if (moduleName.includes(',')) {
      moduleName = moduleName.split(',')[0].trim();
    }
  }
  
  return moduleName;
};

const extractIntake = (summary) => {
  const intakeRegex = /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[\s-](\d{2})/i;
  const match = summary.match(intakeRegex);
  if (match) {
    return `${match[1]}-${match[2]}`;
  }
  return '';
};

const cleanProfessorName = (professor) => {
  if (!professor) return '';
  return professor.replace(/\s*\([^)]*\)/, '').trim();
};

// Test the functions
console.log('==== PROGRAM TESTS ====');
testSummaries.forEach((summary, i) => {
  console.log(`Example ${i+1}:`);
  console.log(`  Summary: ${summary.substring(0, 50)}...`);
  console.log(`  Extracted Program: ${extractProgram(summary)}`);
});

console.log('\n==== MODULE TESTS ====');
testSummaries.forEach((summary, i) => {
  console.log(`Example ${i+1}:`);
  console.log(`  Summary: ${summary.substring(0, 50)}...`);
  console.log(`  Extracted Module: ${extractModule(summary)}`);
});

console.log('\n==== INTAKE TESTS ====');
testSummaries.forEach((summary, i) => {
  console.log(`Example ${i+1}:`);
  console.log(`  Summary: ${summary.substring(0, 50)}...`);
  console.log(`  Extracted Intake: ${extractIntake(summary)}`);
});

console.log('\n==== PROFESSOR NAME TESTS ====');
testStaff.forEach((staff, i) => {
  console.log(`Example ${i+1}:`);
  console.log(`  Original: ${staff}`);
  console.log(`  Cleaned: ${cleanProfessorName(staff)}`);
}); 