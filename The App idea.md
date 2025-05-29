# BSBI Timetable Formatter App — Finalized Feature Summary

---

## 1. Purpose
Transform messy, raw Excel timetables from the BSBI school system into clean, presentable sheets for info screens, with options for easy editing and multiple download formats.

---

## 2. User Flow

### Step 1: Upload
- User uploads an Excel file.
- User selects the upload type:
  - **Raw Excel (from school system)**
  - **Formatted Excel (from this app)**

### Step 2: Session & Details
- User selects:
  - **Session:** Morning, Noon, or Afternoon
  - **Time:** 08:00, 12:00, or 16:00
  - **Date:** (Day-Month-Year)

### Step 3: Data Processing
- **If Raw Excel:**  
  App parses, cleans, and extracts the required fields (Program, Module, Intake, Professor, Room) using your detailed rules.
- **If Formatted Excel:**  
  App skips parsing and uses the data as-is for output.

### Step 4: Template Generation
- App generates a presentable timetable sheet:
  - **Design:** Matches your provided template (logo, layout, fonts, etc.)
  - **Color Coding:**  
    - Morning: Blue  
    - Noon: Yellow/Gold  
    - Afternoon: Dark Blue  
  - **Logo:** Placed in the center top, with session, time, and date in the correct positions.

### Step 5: Output Options
- User can download the timetable in three formats:
  - **PDF:** For printing or direct display.
  - **PNG:** For info screens or image use.
  - **Formatted Excel:** For easy editing and re-uploading if changes are needed.

---

## 3. Key Features

- **Flexible Input:** Handles both raw and formatted Excel files.
- **Editable Workflow:** Allows users to edit the formatted Excel and re-upload for final output.
- **Consistent, Professional Design:**  
  - Exact replica of your template, color-coded by session.
  - All key info (logo, session, time, date, table) in the right place.
- **User-Friendly:**  
  - Simple upload and selection process.
  - No need to edit PDFs directly.
- **Future-Proof:**  
  - Easy to update template or color schemes if needed.

---

## 4. Optional/Advanced (for future)
- Web-based table editor before download.
- Google Sheets integration for collaborative editing.

---

## 5. Next Steps
- Build the app logic for file upload, type selection, and data processing.
- Design the template in code (HTML/CSS or graphics library).
- Implement export to PDF, PNG, and Excel.
 