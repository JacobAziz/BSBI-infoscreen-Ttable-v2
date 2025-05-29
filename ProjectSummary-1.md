# BSBI Timetable Formatter - Project Summary

## Project Overview
We've created a web application that transforms raw Excel timetables from the BSBI school system into clean, presentable formats for information screens. This is a proof-of-concept version that demonstrates the core functionality.

## Tech Stack
- **Frontend Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **UI Library**: Chakra UI
- **Data Processing**: XLSX (SheetJS)
- **Export Formats**: 
  - PNG (using html-to-image)
  - PDF (using pdf-lib)
  - Excel (using XLSX)

## Project Structure
```
info-scrn-proj/
├── app/                  # Next.js App Router structure
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with Chakra UI Provider
│   ├── page.tsx          # Main page component
│   └── providers.tsx     # Chakra UI providers setup
├── components/           # React components
│   ├── DownloadButtons.tsx  # Buttons for downloading in different formats
│   ├── FileUpload.tsx       # Excel file upload component
│   ├── SessionSelector.tsx  # Session, time, date selector component
│   └── TimetablePreview.tsx # Formatted timetable preview
├── lib/                  # Utility functions
│   └── parseExcel.ts     # Excel parsing logic
├── public/               # Static assets
│   └── logo-dark.png     # BSBI logo
├── styles/               # Style configurations
│   └── theme.ts          # Chakra UI theme customization
└── types/                # TypeScript type definitions
    └── timetable.d.ts    # Types for timetable data
```

## Core Features
1. **File Upload**: Users can upload an Excel file containing raw timetable data
2. **Data Extraction**: The app automatically extracts program, module, intake, professor, and room information
3. **Session Selection**: Users can choose between Morning, Noon, and Afternoon sessions
4. **Time & Date Selection**: Users can specify time and date for the timetable
5. **Visual Preview**: Real-time preview of the formatted timetable with BSBI logo
6. **Multiple Export Options**: Download the formatted timetable as PNG, PDF, or Excel

## Data Flow
1. **Input**: Raw Excel file with timetable data
2. **Processing**: 
   - Excel parsing using XLSX library
   - Extraction of data using regular expressions
   - Formatting based on session selection
3. **Output**: 
   - Visual display with appropriate styling
   - Downloadable files in multiple formats

## UI Components
- **FileUpload**: Drag-and-drop interface for Excel uploads
- **SessionSelector**: Form controls for selecting session, time, and date
- **TimetablePreview**: Visual display of the formatted timetable
- **DownloadButtons**: Buttons for downloading in different formats

## Styling
- **Theme**: Custom Chakra UI theme with BSBI brand colors
- **Session-Based Styling**:
  - Morning: Blue (#2B4B81)
  - Noon: Yellow (#F7B32B)
  - Afternoon: Dark Blue (#1A365D)
- **Responsive Design**: Adapts to different screen sizes

## Current Limitations
- No authentication system
- No backend database storage
- Limited to processing specific Excel format

## Next Steps
1. Add user authentication
2. Implement database storage for timetables
3. Expand parsing capabilities for different Excel formats
4. Add more customization options for output formats 