export type Session = 'Morning' | 'Noon' | 'Afternoon';

export type SessionTime = '08:00' | '12:00' | '16:00';

export interface RawTimetableRow {
  Summary: string;
  Room: string;
  Staff: string;
}

export interface ProcessedTimetableRow {
  program: string;
  module: string;
  intake: string;
  professor: string;
  room: string;
}

export interface TimetableData {
  session: Session;
  time: SessionTime;
  date: string;
  rows: ProcessedTimetableRow[];
}

export interface TimetableTheme {
  backgroundColor: string;
  textColor: string;
  headerColor: string;
}

export interface DownloadOptions {
  format: 'pdf' | 'png' | 'excel';
  data: TimetableData;
} 