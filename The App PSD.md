# BSBI Timetable Formatter App — Product Specification Document (PSD)

---

## 1. Overview
- **App Name:** BSBI Timetable Formatter
- **Purpose:** Convert raw Excel timetables into clean, branded, downloadable sheets (PDF, PNG, Excel) for info screens.
- **Target Platform:** Web (Vercel-hosted, Next.js stack)
- **Primary Users:** BSBI staff, administrators, IT support

---

## 2. Detailed Features & Specifications
- **File Upload:**
  - Accepts both raw and formatted Excel files (.xlsx)
  - Drag-and-drop and file picker support
- **Session & Details Selection:**
  - Dropdowns for session (Morning, Noon, Afternoon)
  - Time picker (08:00, 12:00, 16:00)
  - Date picker (Day-Month-Year)
- **Data Extraction & Cleaning:**
  - Extracts Program, Module, Intake, Professor, Room using detailed parsing rules
  - Cleans and simplifies long names for display
- **Template Generation:**
  - Matches provided design (logo, color, layout)
  - Color-coded by session (Blue, Yellow/Gold, Dark Blue)
- **Preview:**
  - Live preview of formatted timetable before download
- **Download Options:**
  - PDF, PNG, and formatted Excel
- **Re-upload:**
  - Allows editing and re-uploading of formatted Excel
- **Accessibility:**
  - Keyboard navigation, screen reader support
- **Responsiveness:**
  - Works on desktop and tablet

---

## 3. Data Model & Extraction Rules
- **Input Columns:** Summary, Room, Staff
- **Output Columns:** Program, Module, Intake, Professor, Room
- **Extraction Logic:**
  - **Program:**
    - Starts with BAF, MA, MSc, BSc, MBA, BA, Global
    - Ends before G[1-9] or, if missing, before UCA/other strand
    - Remove extra descriptors (e.g., (International Route), Pathway Project Management)
  - **Module:**
    - Starts after G[1-9] strand (e.g., G1-UCA-BA-Y2-T5-)
    - Remove strand, keep concise module name
    - If long, simplify to main topic
  - **Intake:**
    - Extract Month-Year (e.g., Oct 23, Feb 25)
  - **Professor:**
    - Use Staff cell, remove text in brackets
  - **Room:**
    - Use Room cell as-is
- **Edge Cases:**
  - Handle missing G[1-9] by using UCA/other strand as delimiter
  - Simplify long names for display

---

## 4. UI/UX Specifications
- **Design Reference:** Matches provided images for Morning, Noon, Afternoon sessions
- **Layout:**
  - BSBI logo at top center
  - Date (left), Session (right), Time (right, below session)
  - Table with columns: Program, Module, Intake, Professor, Room
  - Color-coded background by session:
    - Morning: Blue
    - Noon: Yellow/Gold
    - Afternoon: Dark Blue
- **Fonts & Colors:**
  - Use fonts and color palette from provided images
- **Buttons:**
  - Upload, Download (PDF, PNG, Excel), Edit, Preview
- **Accessibility:**
  - High contrast, alt text for images, keyboard support

---

## 5. User Flow Diagrams
- **Step 1:** User uploads Excel file
- **Step 2:** User selects session, time, and date
- **Step 3:** App parses and displays formatted preview
- **Step 4:** User downloads as PDF, PNG, or Excel
- **Step 5 (Optional):** User edits Excel and re-uploads

---

## 6. API & Integration Points
- **Excel Parsing:** SheetJS (xlsx) in-browser
- **PDF Generation:** pdf-lib or jsPDF in-browser
- **PNG Generation:** html-to-image in-browser
- **Backend (optional):** Next.js API routes for heavy processing (if needed)
- **No persistent storage:** All processing is ephemeral

---

## 7. Error Handling & Edge Cases
- **Invalid File:**
  - Show clear error if file is not .xlsx or is corrupted
- **Missing Data:**
  - Warn user if required columns are missing
- **Extraction Failures:**
  - Fallback to manual entry or highlight problematic rows
- **Long/Complex Names:**
  - Auto-simplify and show preview for user confirmation

---

## 8. Security & Privacy
- **No persistent storage of user files**
- **All processing in-browser or via secure serverless functions**
- **No user authentication required (MVP)**
- **HTTPS enforced via Vercel**

---

## 9. Testing & QA
- **Unit Tests:**
  - Data extraction/parsing logic
  - File upload and download
- **Integration Tests:**
  - End-to-end user flow
- **Manual QA:**
  - Visual comparison to provided templates
  - Cross-browser and device testing
- **Accessibility Testing:**
  - Keyboard navigation, screen reader checks

---

## 10. Deployment & Maintenance
- **Deployment:**
  - Hosted on Vercel
  - CI/CD via GitHub integration
- **Maintenance:**
  - Update dependencies regularly
  - Monitor for parsing errors and user feedback
  - Easy update of template or color scheme as needed

--- 