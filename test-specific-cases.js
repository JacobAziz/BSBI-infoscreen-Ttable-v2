// Test for the specific cases mentioned in the feedback
// We'll bypass TypeScript for direct testing

// Example test cases from the user's feedback
const testCases = [
  {
    name: "Case 1 - F-Y1-T2 prefix in module name",
    summary: "F25-Berlin-Oct 24-BSc (Hons) International Business and Management (International Route) G2-UCA-BAF-Y1-T2-Introduction to Creative Business and Management",
    staff: "Akua Bobson"
  },
  {
    name: "Case 2 - F-Y1-T1 prefix in module name with research and skills",
    summary: "F25-Berlin-Feb 25-BSc (Hons) International Business and Management (International Route) G3-UCA-BAF-Y1-T1-English for Academic Purposes, Research and Study Skills",
    staff: "Sahar Shekaliu"
  },
  {
    name: "Case 3 - F-Y1-T2 prefix with G3 group",
    summary: "F25-Berlin-Oct 24-BSc (Hons) International Business and Management (International Route) G3-UCA-BAF-Y1-T2-Introduction to Creative Business and Management",
    staff: "Hani Elagamawy"
  }
];

// Import parsing functions
// Copy implementation from parseExcel.ts for direct testing

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

// Extract module with fixed implementation
function extractModule(summary) {
  // Check for the F-Y1-T1, F-Y1-T2 pattern followed by the actual module name
  const fPrefixPattern = /(?:F-Y\d+-T\d+-)([\w\s&,]+)/i;
  const fPrefixMatch = summary.match(fPrefixPattern);
  if (fPrefixMatch && fPrefixMatch[1]) {
    return fPrefixMatch[1].trim();
  }
  
  // Try to find content after Y1-T1, Y2-T5, etc. patterns
  const yearTermPattern = /Y\d+-T\d+[-\s]+([\w\s&:,]+)/;
  const yearTermMatch = summary.match(yearTermPattern);
  if (yearTermMatch && yearTermMatch[1]) {
    // Clean up the result
    let result = yearTermMatch[1].trim();
    // Remove any F-Y1-T1 or similar prefixes from the result
    result = result.replace(/^F-Y\d+-T\d+-/i, '');
    if (result.includes(':')) {
      result = result.split(':')[1].trim();
    }
    return result;
  }
  
  // If all else fails, try the original approach but improve it
  const gPattern = /G\d+/;
  const hasGPattern = gPattern.test(summary);
  
  if (hasGPattern) {
    // More aggressive pattern for finding the module after the course codes
    const moduleRegex = /G\d+[-\s]+(?:UCA|UNINNETTUNO)[-\s]+(?:MSc|BA|BSc|MBA|MA|BAF)?[-\s]*(?:Y\d+)?[-\s]*(?:T\d+)?[-\s]*(.*)/;
    const match = summary.match(moduleRegex);
    if (match && match[1] && match[1].trim()) {
      // Remove any F-Y1-T1 or similar prefixes from the module name
      let moduleName = match[1].trim();
      moduleName = moduleName.replace(/^F-Y\d+-T\d+-/i, '');
      return moduleName;
    }
  }
  
  // For entries missing module info, return a placeholder based on the year and term if possible
  const placeholderRegex = /Y(\d+)-T(\d+)/;
  const placeholderMatch = summary.match(placeholderRegex);
  if (placeholderMatch) {
    return `Module Y${placeholderMatch[1]} T${placeholderMatch[2]}`;
  }
  
  return "Module Information";
}

// Extract intake
function extractIntake(summary) {
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