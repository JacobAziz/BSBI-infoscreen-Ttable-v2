# BSBI Timetable Formatter — Folder Structure

## Root Directory: `info-scrn-proj/`

This is the main project folder. Below is the complete folder structure with explanations for each directory and file.

```plaintext
info-scrn-proj/
│
├── public/                  
│   ├── logo.png
│   ├── session-bg/         
│   └── ...                  
│
├── src/                    
│   ├── pages/              
│   │   ├── index.tsx       
│   │   ├── api/            
│   │   │   └── process.ts  
│   │   └── _app.tsx        
│   │
│   ├── components/         
│   │   ├── FileUpload.tsx
│   │   ├── TimetablePreview.tsx
│   │   ├── SessionSelector.tsx
│   │   ├── DownloadButtons.tsx
│   │   └── ...              
│   │
│   ├── lib/                
│   │   ├── parseExcel.ts
│   │   ├── exportPDF.ts
│   │   ├── exportPNG.ts
│   │   └── ...              
│   │
│   ├── styles/             
│   │   ├── globals.css
│   │   └── theme.ts        
│   │
│   └── types/              
│       └── timetable.d.ts
│
├── .env.local              
├── .gitignore
├── next.config.js          
├── package.json
├── README.md
└── tsconfig.json           
```

## Directory Explanations

### `/public`
- Static files served directly by Next.js/Vercel
- **`logo.png`**: BSBI logo for the timetable header
- **`session-bg/`**: Background images/assets for different sessions (Morning, Noon, Afternoon)
- Perfect for other static assets like favicons, fonts, etc.

### `/src`
Main source code directory, following Next.js best practices.

#### `/src/pages`
- Next.js pages directory (handles routing automatically)
- **`index.tsx`**: Main application page/UI
- **`_app.tsx`**: Global app wrapper (styles, providers)
- **`api/`**: Serverless API routes
  - **`process.ts`**: (Optional) Heavy processing endpoints

#### `/src/components`
Reusable React components:
- **`FileUpload.tsx`**: Excel file upload component
- **`TimetablePreview.tsx`**: Formatted timetable preview
- **`SessionSelector.tsx`**: Session/time/date selector
- **`DownloadButtons.tsx`**: PDF/PNG/Excel download buttons

#### `/src/lib`
Utility functions and business logic:
- **`parseExcel.ts`**: Excel parsing and data extraction
- **`exportPDF.ts`**: PDF generation logic
- **`exportPNG.ts`**: PNG generation logic
- Other utility functions as needed

#### `/src/styles`
Styling-related files:
- **`globals.css`**: Global CSS styles
- **`theme.ts`**: Theme configuration (if using Chakra UI or Material-UI)

#### `/src/types`
TypeScript type definitions:
- **`timetable.d.ts`**: Types for timetable data structures

### Root Files
- **`.env.local`**: Local environment variables (not committed to git)
- **`.gitignore`**: Git ignore patterns
- **`next.config.js`**: Next.js configuration
- **`package.json`**: Project dependencies and scripts
- **`README.md`**: Project documentation
- **`tsconfig.json`**: TypeScript configuration

## Vercel Deployment Benefits

This structure is optimized for Vercel deployment:
1. **Zero Configuration**: Vercel automatically recognizes the Next.js structure
2. **Automatic Routing**: Based on `/pages` directory
3. **Static Asset Optimization**: Via `/public` directory
4. **API Routes**: Through `/pages/api`
5. **TypeScript Support**: Built-in, no extra setup needed

## Development Workflow

1. All React components go in `/src/components`
2. All page routes go in `/src/pages`
3. All business logic goes in `/src/lib`
4. All static assets go in `/public`
5. All styles go in `/src/styles`

This structure ensures:
- Clear separation of concerns
- Easy maintenance and scaling
- Smooth Vercel deployment
- Optimal development experience 