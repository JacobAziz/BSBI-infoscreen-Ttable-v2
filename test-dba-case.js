// Test for DBA edge case
// We'll bypass TypeScript for direct testing

// Example test cases
const testCases = [
  {
    name: "DBA Case 1",
    summary: "F25-Berlin-DBA G1-UCA-DBA-Y1-T1-Research Methods in Business",
    staff: "Test Professor"
  },
  {
    name: "DBA Case 2",
    summary: "DBA Student Supervision",
    staff: "Test Professor"
  },
  {
    name: "DBA Case 3",
    summary: "F25-Berlin-Feb 25-DBA G1-UCA-DBA-Y1-T1-Research Methods",
    staff: "Test Professor"
  }
];

// Extract program with special case for DBA
function extractProgram(summary) {
  // Special case for DBA program
  if (summary.includes('DBA')) {
    return 'DBA';
  }

  // Special case for Global MBA - PATHWAY
  if (summary.includes('Global MBA- PATHWAY')) {
    return 'Global MBA';
  }

  // Regular program extraction
  const programRegex = /(BAF|MA|MSc|BSc|MBA|BA|Global).*?(?=\s+-?\s*G\d+|$|-UCA|-UNINNETTUNO)/;
  const match = summary.match(programRegex);
  if (!match) return summary;

  let program = match[0].trim();
  program = program.replace(/\s*-\s*Pathway.*$/, '');
  program = program.replace(/\s*\(International Route\)/, '');
  return program;
}

// Extract module with special case for DBA
function extractModule(summary) {
  // Special case for DBA program
  if (summary.includes('DBA')) {
    return '--';
  }

  // Special case for Global MBA Project Management
  if (summary.includes('Global MBA- PATHWAY TWO - PROJECT MANAGEMENT')) {
    return 'Project Management';
  }
  
  // Other special cases...
  if (summary.includes('English for Academic Purposes')) {
    return 'English for Academic Purposes';
  }
  if (summary.includes('Cross-cultural Management')) {
    return 'Cross-cultural Management';
  }
  
  // Regular extraction logic...
  return "Module Information";
}

// Extract intake with special case for DBA
function extractIntake(summary) {
  // Special case for DBA program
  if (summary.includes('DBA')) {
    return '--';
  }
  
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

// Test each case
testCases.forEach(testCase => {
  console.log(`\n=== ${testCase.name} ===`);
  console.log(`Summary: ${testCase.summary}`);
  console.log(`Program: ${extractProgram(testCase.summary)}`);
  console.log(`Module: ${extractModule(testCase.summary)}`);
  console.log(`Intake: ${extractIntake(testCase.summary)}`);
}); 