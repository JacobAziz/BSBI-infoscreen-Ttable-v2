# BSBI Timetable Formatter

## 📋 Overview
A web application that transforms raw Excel timetables from the BSBI school system into clean, presentable sheets for info screens. Built with Next.js and optimized for Vercel deployment on the free tier (single region).

## ✨ Features

### Core Functionality
- 📤 Upload raw Excel timetables
- 🔄 Automatic data extraction and formatting
- 🎨 Session-based color themes:
  - **Morning**: Bright blue theme
  - **Noon**: Yellow theme
  - **Afternoon**: Dark blue theme
- 📅 European-style date format (DD.MM.YYYY)
- 🔤 Session-specific cell text colors for improved readability

### Export Options
- 📥 Download formatted timetables as:
  - PDF (for printing)
  - JPG (for info screens, 1080x1920 portrait format)
  - Excel (for editing)

### Special Case Handling
The application includes intelligent parsing for various course format patterns:

- **DBA courses**: Uses placeholder values and specialized formatting
- **Global MBA programs**: Extracts "Global MBA" as program and "Project Management" as module
- **Pathway One-Strategic Leadership**: Pattern recognition for proper formatting
- **Cross-cultural Management**: Proper hyphenation handling
- **English for Academic Purposes courses**: Truncates extended titles
- **F-Y1-T1/F-Y1-T2 prefixes**: Removes these from module names
- **Professor names**: Special parentheses handling

## 🛠️ Tech Stack

- **Frontend**: Next.js (React) with TypeScript
- **UI Library**: Chakra UI for responsive design
- **Data Processing**: XLSX (SheetJS) for Excel handling
- **Export Utilities**:
  - pdf-lib for PDF generation
  - html-to-image for image conversion

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd info-scrn-proj
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Click "Upload" or drag-and-drop an Excel file
2. Select session (Morning/Noon/Afternoon)
3. Enter the date
4. Preview the formatted timetable
5. Download in your preferred format

## Development

### Project Structure

```plaintext
info-scrn-proj/
├── public/                  # Static assets
├── src/
│   ├── components/         # React components
│   ├── lib/               # Utility functions
│   ├── pages/             # Next.js pages
│   ├── styles/            # CSS styles
│   └── types/             # TypeScript types
```

### Building for Production

```bash
npm run build
```

## Deployment

This project is optimized for Vercel deployment on the free tier with a single region configuration (Frankfurt - fra1).

### Deployment Steps

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. During setup, ensure the following settings:
   - Framework Preset: Next.js
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

### Region Configuration

This project is configured to deploy to a single region (Frankfurt - fra1) as specified in the `vercel.json` file, which is optimal for the Vercel free tier.

### Environment Variables

No environment variables are required for the basic setup.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 