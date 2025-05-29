# BSBI Timetable Formatter App — Product Requirements Document (PRD)

---

## 1. Purpose & Problem Statement
- **Purpose:** Transform raw, unpresentable Excel timetables from the BSBI school system into clean, professional, info-screen-ready sheets.
- **Problem:** The current Excel downloads are messy and not suitable for public display. Manual formatting is time-consuming and error-prone.
- **Goal:** Automate the process, ensuring consistent, branded, and easily downloadable outputs (PDF, PNG, Excel).

---

## 2. Target Users
- BSBI reception staff
- School administrators
- IT support staff
- Anyone responsible for preparing and displaying class timetables

---

## 3. User Stories & Flow
- **As a user, I want to:**
  - Upload a raw Excel timetable and have it automatically cleaned and formatted.
  - Select the session (Morning, Noon, Afternoon), time, and date for the timetable.
  - Download the formatted timetable as PDF, PNG, or Excel.
  - Edit the formatted Excel and re-upload for further changes.
  - See the timetable in a design that matches the school's branding and info screen requirements.

**User Flow:**
1. Upload Excel file (raw or formatted)
2. Select session, time, and date
3. App processes and displays formatted timetable preview
4. User downloads as PDF, PNG, or Excel
5. (Optional) User edits Excel and re-uploads for further formatting

---

## 4. Functional Requirements
- **File Upload:**
  - Accept both raw and formatted Excel files
- **Data Extraction & Cleaning:**
  - Parse Excel and extract Program, Module, Intake, Professor, Room using detailed rules
  - Clean and simplify long or complex names for display
- **Session & Details Selection:**
  - User selects session (Morning/Noon/Afternoon), time, and date
- **Template Generation:**
  - Generate a timetable matching the provided design (logo, colors, layout)
  - Color code by session (Blue, Yellow/Gold, Dark Blue)
- **Output Options:**
  - Download as PDF, PNG, or formatted Excel
- **Preview:**
  - Show a live preview before download
- **Re-upload:**
  - Allow re-upload of formatted Excel for further editing

---

## 5. Non-Functional Requirements
- **Performance:** Fast processing for typical Excel files (<5 seconds)
- **Reliability:** Accurate extraction and formatting for all supported input formats
- **Security:** No persistent storage of user files; all processing in-browser or via secure serverless functions
- **Accessibility:** UI meets accessibility standards (WCAG 2.1 AA)
- **Responsiveness:** Works on desktop and tablet screens

---

## 6. Tech Stack & Deployment
- **Frontend:** Next.js (React)
- **UI Library:** Chakra UI or Material-UI
- **Excel Parsing & Output:** SheetJS (xlsx)
- **PDF Generation:** pdf-lib or jsPDF
- **PNG Generation:** html-to-image
- **Backend (if needed):** Next.js API routes (Node.js, serverless)
- **Hosting:** Vercel (optimized for Next.js, serverless)

---

## 7. UI/UX & Branding
- **Design:**
  - Matches provided template (logo, layout, fonts, color scheme)
  - Session, time, and date in correct positions
  - Table columns: Program, Module, Intake, Professor, Room
- **Branding:**
  - BSBI logo at top center
  - Color-coded backgrounds by session
- **User Experience:**
  - Simple, step-by-step workflow
  - Clear error messages for invalid files or missing data

---

## 8. Output Formats
- **PDF:** For printing or direct display
- **PNG:** For info screens or image use
- **Formatted Excel:** For easy editing and re-upload

---

## 9. Future Enhancements
- Web-based table editor before download
- Google Sheets integration for collaborative editing
- User authentication for saved templates
- Multi-language support

---

## 10. Acceptance Criteria
- User can upload a raw Excel file and receive a formatted, downloadable timetable in all three formats
- Output matches the provided design template (logo, colors, layout)
- Data extraction rules handle all provided edge cases
- App deploys and runs smoothly on Vercel
- No persistent storage of user data
- All major browsers supported

--- 