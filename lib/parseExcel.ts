import { read, utils } from 'xlsx';
import { RawTimetableRow, ProcessedTimetableRow } from '@/types/timetable';

// Extract program name from summary
export const extractProgram = (summary: string): string => {
  // Special case for DBA program
  if (summary.includes('DBA')) {
    return 'DBA';
  }
  
  // Special case for Global MBA - PATHWAY
  if (summary.includes('Global MBA- PATHWAY')) {
    return 'Global MBA';
  }
  
  // Find the program part that starts with known prefixes and ends before G followed by number
  const programRegex = /(BAF|MA|MSc|BSc|MBA|BA|Global).*?(?=\s+-?\s*G\d+|$|-UCA|-UNINNETTUNO)/;
  const match = summary.match(programRegex);
  if (!match) return summary;

  // Clean up program name by removing extra descriptors
  let program = match[0].trim();
  program = program.replace(/\s*-\s*Pathway.*$/, '');
  program = program.replace(/\s*\(International Route\)/, '');
  return program;
};

// Extract module name from summary
export const extractModule = (summary: string): string => {
  // Special case for DBA program
  if (summary.includes('DBA')) {
    return '--';
  }
  
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
  
  // For entries missing module info, return a placeholder based on the year and term if possible
  const placeholderRegex = /Y(\d+)-T(\d+)/;
  const placeholderMatch = summary.match(placeholderRegex);
  if (placeholderMatch) {
    return `Module Y${placeholderMatch[1]} T${placeholderMatch[2]}`;
  }
  
  return "Module Information";
};

// Extract intake from summary
export const extractIntake = (summary: string): string => {
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
  
  // Fall back to looking for Berlin-MONTH pattern which often precedes program name
  const berlinMonthRegex = /Berlin-([A-Za-z]{3})\s+\d{2}/;
  const berlinMatch = summary.match(berlinMonthRegex);
  if (berlinMatch) {
    // Extract year from elsewhere in the string if possible
    const yearRegex = /\d{2}(?=\s*-|$)/;
    const yearMatch = summary.match(yearRegex);
    if (yearMatch) {
      const month = berlinMatch[1].charAt(0).toUpperCase() + berlinMatch[1].slice(1).toLowerCase();
      return `${month}-${yearMatch[0]}`;
    }
    
    // If we can't find a year, use the current year
    const currentYear = new Date().getFullYear().toString().slice(2);
    const month = berlinMatch[1].charAt(0).toUpperCase() + berlinMatch[1].slice(1).toLowerCase();
    return `${month}-${currentYear}`;
  }
  
  // If we can't determine an intake, use a default
  return "Current";
};

// Clean professor name by removing content in brackets
export const cleanProfessorName = (professor: string): string => {
  if (!professor) return '';
  // Remove any text in parentheses, including the parentheses - use global flag to remove all occurrences
  return professor.replace(/\s*\([^)]*\)/g, '').trim();
};

// This function parses raw BSBI Excel files with Summary, Room, Staff columns
export const parseRawExcelFile = (data: Uint8Array): Promise<ProcessedTimetableRow[]> => {
  return new Promise((resolve, reject) => {
    try {
      const workbook = read(data, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = utils.sheet_to_json<RawTimetableRow>(firstSheet);

      // Check if this is a raw BSBI Excel file (has Summary, Room, and Staff columns)
      if (rows.length === 0 || !('Summary' in rows[0])) {
        reject(new Error('This does not appear to be a raw BSBI Excel file.'));
        return;
      }

      const processedRows = rows.map(row => ({
        program: extractProgram(row.Summary),
        module: extractModule(row.Summary),
        intake: extractIntake(row.Summary),
        professor: cleanProfessorName(row.Staff),
        room: row.Room,
      }));

      resolve(processedRows);
    } catch (error) {
      reject(new Error('Failed to parse raw BSBI Excel file. Please check the format.'));
    }
  });
};

// This function parses app-exported Excel files with program, module, intake, professor, room columns
export const parseExportedExcelFile = (data: Uint8Array): Promise<ProcessedTimetableRow[]> => {
  return new Promise((resolve, reject) => {
    try {
      const workbook = read(data, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = utils.sheet_to_json<ProcessedTimetableRow>(firstSheet);

      // Check if this is an app-exported Excel file (has all the processed columns)
      if (rows.length === 0 || !('program' in rows[0])) {
        reject(new Error('This does not appear to be an app-exported Excel file.'));
        return;
      }

      // No need for further processing as the columns already match what we need
      resolve(rows);
    } catch (error) {
      reject(new Error('Failed to parse app-exported Excel file. Please check the format.'));
    }
  });
};

export const parseExcelFile = async (file: File): Promise<ProcessedTimetableRow[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        
        // Try to parse as raw BSBI Excel file first
        try {
          const rows = await parseRawExcelFile(data);
          resolve(rows);
          return;
        } catch (rawError) {
          // If parsing as raw file fails, try as app-exported file
          try {
            const rows = await parseExportedExcelFile(data);
            resolve(rows);
            return;
          } catch (exportedError) {
            // If both parsing methods fail, throw a more general error
            reject(new Error('Failed to parse Excel file. Please make sure it\'s either a raw BSBI timetable or an app-exported timetable.'));
          }
        }
      } catch (error) {
        reject(new Error('Failed to read the Excel file. Please try again.'));
      }
    };

    reader.onerror = () => {
      reject(new Error('Failed to read the file. Please try again.'));
    };

    reader.readAsArrayBuffer(file);
  });
}; 