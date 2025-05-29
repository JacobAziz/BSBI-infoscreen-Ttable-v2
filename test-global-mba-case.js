// Test for Global MBA edge case
// We'll bypass TypeScript for direct testing

// Example test case
const specialCase = {
  name: "Special Case - Global MBA Project Management",
  summary: "F25-Berlin-May 24-July 24-Global MBA- PATHWAY TWO - PROJECT MANAGEMENT- G2-UCA-MBA-Y1-T3-PATHWAY TWO - PROJECT MANAGEMENT:Project Management and Leadership",
  staff: "Test Professor"
};

// Extract program with special case for Global MBA
function extractProgram(summary) {
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

// Extract module with special case for Global MBA Project Management
function extractModule(summary) {
  // Special case for Global MBA Project Management
  if (summary.includes('Global MBA- PATHWAY TWO - PROJECT MANAGEMENT')) {
    return 'Project Management';
  }
  
  // Special case for English for Academic Purposes - truncate the extended name
  if (summary.includes('English for Academic Purposes')) {
    return 'English for Academic Purposes';
  }

  // Special case for Cross-cultural Management
  if (summary.includes('Cross-cultural Management')) {
    return 'Cross-cultural Management';
  }

  // Special case for "Pathway One-Strategic Leadership" pattern
  const pathwayPattern = /BSc \(Hons\) International Business and Management - (Pathway One-Strategic Leadership)/i;
  const pathwayMatch = summary.match(pathwayPattern);
  if (pathwayMatch && pathwayMatch[1]) {
    return pathwayMatch[1].trim();
  }
  
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

// Test the special case
console.log(`\n=== ${specialCase.name} ===`);
console.log(`Summary: ${specialCase.summary}`);
console.log(`Program: ${extractProgram(specialCase.summary)}`);
console.log(`Module: ${extractModule(specialCase.summary)}`);
console.log(`Intake: ${extractIntake(specialCase.summary)}`); 