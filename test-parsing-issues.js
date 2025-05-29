// Simplified test cases for direct testing
// We'll bypass TypeScript and module resolution for testing purposes

// Example test cases from the problematic entries
const testCases = [
  {
    name: "Missing intake - MA Tourism",
    summary: "F25-Berlin-MA Tourism, Hospitality and Event Management G1-UCA-BA-Y2-T5-Entrepreneurship in Tourism and Events",
    staff: "Zoegne Luyt"
  },
  {
    name: "MSc Health Management with Feb intake",
    summary: "F25-Berlin-Feb 25-MSc in International Health Management G1-UCA-MSc-Y1-T1-Health Policy and Management",
    staff: "Dr. Anastasios Fountis"
  },
  {
    name: "Missing module name",
    summary: "F25-Berlin-Oct 24-BSc (Hons) International Business and Management G1-UCA-BA-Y1-T2",
    staff: "Muhammad Aways Ilyas"
  },
  {
    name: "Incorrect module format Bsc-Y1-T2",
    summary: "F25-Berlin-Oct 24-BSc (Hons) Computer Sciences and Digitisation G1-UCA-BSc-Y1-T2-International Business Administration",
    staff: "Sandra Ejiofor"
  },
  {
    name: "Odd module format F-Y1-T1",
    summary: "F25-Berlin-Feb 25-BSc (Hons) International Business and Management G1-UCA-BSc-Y1-T1-English for Academic Purposes",
    staff: "Hani Elagamawy"
  },
  {
    name: "Incorrect module and professor with brackets",
    summary: "F25-Berlin-Feb 25-BSc (Hons) International Business and Management G1-UCA-BSc-Y1-T1-Introduction to Creative Business and Management",
    staff: "Dr. Ahmed ElBarawi (AElbarawi)"
  },
  {
    name: "F-Y1-T2-Marketing format",
    summary: "F25-Berlin-Oct 24-BSc (Hons) International Business and Management G1-UCA-BSc-Y1-T2-F-Y1-T2-Marketing",
    staff: "Farzad Karimi"
  }
];

// Copy implementation of extraction functions here for direct testing

// Extract program
function extractProgram(summary) {
  const programRegex = /(BAF|MA|MSc|BSc|MBA|BA|Global).*?(?=\s+-?\s*G\d+|$|-UCA|-UNINNETTUNO)/;
  const match = summary.match(programRegex);
  if (!match) return summary;

  let program = match[0].trim();
  program = program.replace(/\s*-\s*Pathway.*$/, '');
  program = program.replace(/\s*\(International Route\)/, '');
  return program;
}

// Extract module
function extractModule(summary) {
  // We'll test a new improved version here
  
  // Try to detect F-Y1-T1 or F-Y1-T2 patterns directly
  const modulePattern = /(F-Y\d+-T\d+[-\s]*[\w\s&]+)/i;
  const moduleMatch = summary.match(modulePattern);
  if (moduleMatch && moduleMatch[1]) {
    return moduleMatch[1].trim();
  }
  
  // Try to find content after Y1-T1, Y2-T5, etc. patterns
  const yearTermPattern = /Y\d+-T\d+[-\s]+([\w\s&:,]+)/;
  const yearTermMatch = summary.match(yearTermPattern);
  if (yearTermMatch && yearTermMatch[1]) {
    // Clean up the result
    let result = yearTermMatch[1].trim();
    if (result.includes(':')) {
      result = result.split(':')[1].trim();
    }
    return result;
  }
  
  // If all else fails, try the original approach but improve it
  const gPattern = /G\d+/;
  const hasGPattern = gPattern.test(summary);
  
  if (hasGPattern) {
    // More aggressive pattern for finding the module after Y1-T1, Y2-T2, etc.
    const moduleRegex = /G\d+[-\s]+(?:UCA|UNINNETTUNO)[-\s]+(?:MSc|BA|BSc|MBA|MA)?[-\s]*(?:Y\d+)?[-\s]*(?:T\d+)?[-\s]*(.*)/;
    const match = summary.match(moduleRegex);
    if (match && match[1]) {
      return match[1].trim();
    }
  }
  
  return "Unknown Module";
}

// Extract intake
function extractIntake(summary) {
  // Improved intake extraction to handle more cases
  
  // Standard pattern: Jan/Feb/etc + YY
  const intakeRegex = /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[\s-](\d{2})/i;
  
  // Try to find the month-year pattern
  const match = summary.match(intakeRegex);
  if (match) {
    // Ensure first letter is capitalized and rest is lowercase
    const month = match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase();
    // Format as Month-YY
    return `${month}-${match[2]}`;
  }
  
  // Fall back to looking for Berlin-MONTH pattern which often precedes program name
  const berlinMonthRegex = /Berlin-([A-Za-z]{3})\s+\d{2}/;
  const berlinMatch = summary.match(berlinMonthRegex);
  if (berlinMatch) {
    // Extract year from elsewhere in the string if possible
    const yearRegex = /\d{2}(?=\s*-|$)/;
    const yearMatch = summary.match(yearRegex);
    if (yearMatch) {
      return `${berlinMatch[1]}-${yearMatch[0]}`;
    }
    
    // If we can't find a year, use the current year
    const currentYear = new Date().getFullYear().toString().slice(2);
    return `${berlinMatch[1]}-${currentYear}`;
  }
  
  return "Current";
}

// Clean professor name
function cleanProfessorName(professor) {
  if (!professor) return '';
  // Remove any text in parentheses, including the parentheses
  return professor.replace(/\s*\([^)]*\)/g, '').trim();
}

// Test each function with the examples
testCases.forEach(testCase => {
  console.log(`\n=== ${testCase.name} ===`);
  console.log(`Summary: ${testCase.summary}`);
  console.log(`Program: ${extractProgram(testCase.summary)}`);
  console.log(`Module: ${extractModule(testCase.summary)}`);
  console.log(`Intake: ${extractIntake(testCase.summary)}`);
  console.log(`Professor: ${cleanProfessorName(testCase.staff)}`);
}); 