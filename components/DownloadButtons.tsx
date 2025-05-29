'use client';

import React, { useState } from 'react';
import { Button, HStack, useToast, Tooltip, Text, VStack } from '@chakra-ui/react';
import { toPng } from 'html-to-image';
import { PDFDocument } from 'pdf-lib';
import { utils, write } from 'xlsx';
import { TimetableData } from '@/types/timetable';

// 🔥 [Start: Interface Definitions]
interface DownloadButtonsProps {
  timetableRef: React.RefObject<HTMLDivElement>;
  data: TimetableData;
}

type DownloadType = 'pdf' | 'excel' | 'jpg' | null;
// 🔥 [End: Interface Definitions]

// 🔥 [Start: Session Color Utilities]
const getSessionColors = (session: string) => {
  const colors = {
    Morning: {
      background: '#4a7fcb', // Morning blue
      text: '#4a7fcb'       // Morning blue for cell text
    },
    Noon: {
      background: '#F7B32B', // Noon yellow
      text: '#2d4d7c'        // Noon blue for cell text
    },
    Afternoon: {
      background: '#1A365D', // Afternoon dark blue
      text: '#1a365d'       // Afternoon dark blue for cell text
    }
  };

  const defaultColors = colors.Morning;
  return colors[session as keyof typeof colors] || defaultColors;
};
// 🔥 [End: Session Color Utilities]

export const DownloadButtons: React.FC<DownloadButtonsProps> = ({
  timetableRef,
  data,
}) => {
  const toast = useToast();
  const [isDownloading, setIsDownloading] = useState<DownloadType>(null);

  // 🔥 [Start: Helper Functions]
  const getFileName = (extension: string): string => {
    return `timetable-${data.session.toLowerCase()}-${data.date}.${extension}`;
  };

  const createDownloadLink = (url: string, filename: string): void => {
    const link = document.createElement('a');
    link.download = filename;
    link.href = url;
    link.click();
  };

  const handleError = (title: string, error: unknown): void => {
    toast({
      title,
      description: error instanceof Error ? error.message : 'Unknown error',
      status: 'error',
      duration: 5000,
    });
    setIsDownloading(null);
  };
  // 🔥 [End: Helper Functions]

  // 🔥 [Start: JPG Export Logic]
  const downloadAsJPG = async (): Promise<void> => {
    if (!timetableRef.current) return;
    
    setIsDownloading('jpg');
    try {
      // Info screen dimensions (portrait mode)
      const infoScreenWidth = 1080;
      const infoScreenHeight = 1920;
      const sessionColors = getSessionColors(data.session);
      
      // Create a temporary div for exporting
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      tempDiv.style.top = '-9999px';
      tempDiv.style.width = `${infoScreenWidth}px`;
      document.body.appendChild(tempDiv);
      
      // Clone and prepare the timetable for export
      const clone = timetableRef.current.cloneNode(true) as HTMLElement;
      
      // Apply export styles
      clone.style.width = `${infoScreenWidth}px`;
      clone.style.height = 'auto';
      clone.style.overflow = 'visible';
      clone.style.backgroundColor = sessionColors.background;
      
      // Fix element styling for export
      styleCloneForExport(clone);
      
      tempDiv.appendChild(clone);
      
      // Capture the image
      const dataUrl = await captureImage(clone, infoScreenWidth, infoScreenHeight);
      
      // Process the captured image
      await processAndDownloadJpg(dataUrl, infoScreenWidth, infoScreenHeight, sessionColors.background, tempDiv);
      
    } catch (error) {
      handleError('Error downloading JPG', error);
    }
  };

  const styleCloneForExport = (clone: HTMLElement): void => {
    // Fix logo spacing
    const logoContainer = clone.querySelector('.logo-container') as HTMLElement;
    if (logoContainer) {
      logoContainer.style.margin = '0';
      logoContainer.style.padding = '0';
    }
    
    // Fix Image height
    const logoImage = clone.querySelector('img') as HTMLImageElement;
    if (logoImage) {
      logoImage.style.height = '200px';
      logoImage.style.maxHeight = '200px';
      logoImage.style.marginTop = '0';
      logoImage.style.marginBottom = '0';
    }
    
    // Ensure divider has proper spacing
    const divider = clone.querySelector('hr') as HTMLElement;
    if (divider) {
      divider.style.marginTop = '4px';
      divider.style.marginBottom = '4px';
    }
    
    // Ensure table header has proper spacing
    const tableHeader = clone.querySelector('.timetable-header') as HTMLElement;
    if (tableHeader) {
      tableHeader.style.paddingTop = '8px';
    }
  };

  const captureImage = async (element: HTMLElement, width: number, height: number): Promise<string> => {
    return await toPng(element, {
      quality: 1.0,
      pixelRatio: 2,
      width,
      height: element.offsetHeight > height ? element.offsetHeight : height,
      cacheBust: true,
      skipAutoScale: true,
      style: {
        margin: '0',
        padding: '0',
      }
    });
  };

  const processAndDownloadJpg = async (
    dataUrl: string, 
    width: number, 
    height: number, 
    backgroundColor: string,
    tempElement: HTMLElement
  ): Promise<void> => {
    // Create a canvas for the final image
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Could not get canvas context');
    }
    
    // Fill background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Load the captured image
    const img = new Image();
    
    // Set up image loading handlers
    return new Promise((resolve, reject) => {
      img.onload = () => {
        // Center content vertically
        const contentHeight = Math.min(img.height, height);
        const yPos = Math.max(0, (height - contentHeight) / 2);
        
        // Draw the image centered on the canvas
        ctx.drawImage(img, 0, yPos, width, contentHeight);
        
        // Create download link
        const finalDataUrl = canvas.toDataURL('image/jpeg', 0.9);
        createDownloadLink(finalDataUrl, getFileName('jpg'));
        
        // Cleanup
        document.body.removeChild(tempElement);
        
        toast({
          title: 'JPG downloaded successfully',
          description: 'Image sized to 1080x1920 for info screens',
          status: 'success',
          duration: 3000,
        });
        
        setIsDownloading(null);
        resolve();
      };
      
      img.onerror = () => {
        document.body.removeChild(tempElement);
        toast({
          title: 'Error creating JPG',
          description: 'Failed to process the image',
          status: 'error',
          duration: 5000,
        });
        setIsDownloading(null);
        reject(new Error('Failed to load image'));
      };
      
      img.src = dataUrl;
    });
  };
  // 🔥 [End: JPG Export Logic]

  // 🔥 [Start: PDF Export Logic]
  const downloadAsPDF = async (): Promise<void> => {
    if (!timetableRef.current) return;

    setIsDownloading('pdf');
    try {
      // Capture the timetable as an image
      const dataUrl = await toPng(timetableRef.current, {
        quality: 1.0,
        pixelRatio: 3,
        cacheBust: true,
        canvasWidth: timetableRef.current.scrollWidth,
        canvasHeight: timetableRef.current.scrollHeight,
        imagePlaceholder: '/images/BSBI-Logo.png',
        fetchRequestInit: { cache: 'no-cache' },
      });
      
      // Convert to array buffer
      const imageBytes = await fetch(dataUrl).then(res => res.arrayBuffer());
      
      // Create PDF document
      await createAndDownloadPdf(imageBytes);
      
      toast({
        title: 'PDF downloaded successfully',
        status: 'success',
        duration: 3000,
      });
    } catch (error) {
      handleError('Error downloading PDF', error);
    } finally {
      setIsDownloading(null);
    }
  };

  const createAndDownloadPdf = async (imageBytes: ArrayBuffer): Promise<void> => {
    if (!timetableRef.current) return;
    
    const pdfDoc = await PDFDocument.create();
    
    // Calculate dimensions
    const timetableWidth = timetableRef.current.scrollWidth;
    const timetableHeight = timetableRef.current.scrollHeight;
    
    const pageWidth = 842; // A4 width in points
    const pageHeight = Math.floor((pageWidth / timetableWidth) * timetableHeight);
    
    // Create page and embed image
    const page = pdfDoc.addPage([pageWidth, pageHeight]);
    const image = await pdfDoc.embedPng(imageBytes);
    
    // Calculate positioning
    const margin = 20;
    const maxWidth = pageWidth - (margin * 2);
    const maxHeight = pageHeight - (margin * 2);
    
    const scale = Math.min(
      maxWidth / image.width,
      maxHeight / image.height
    );
    
    const scaledWidth = image.width * scale;
    const scaledHeight = image.height * scale;
    
    const x = (pageWidth - scaledWidth) / 2;
    const y = (pageHeight - scaledHeight) / 2;
    
    // Draw image
    page.drawImage(image, {
      x,
      y,
      width: scaledWidth,
      height: scaledHeight,
    });
    
    // Save and download
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    
    createDownloadLink(url, getFileName('pdf'));
  };
  // 🔥 [End: PDF Export Logic]

  // 🔥 [Start: Excel Export Logic]
  const downloadAsExcel = (): void => {
    setIsDownloading('excel');
    try {
      // Create worksheet from data
      const worksheet = utils.json_to_sheet(data.rows);
      const workbook = utils.book_new();
      utils.book_append_sheet(workbook, worksheet, 'Timetable');
      
      // Generate Excel buffer
      const excelBuffer = write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      
      // Create blob and download
      const blob = new Blob([excelBuffer], { 
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
      });
      const url = URL.createObjectURL(blob);
      
      createDownloadLink(url, getFileName('xlsx'));

      toast({
        title: 'Excel file downloaded successfully',
        description: 'You can edit this file and re-upload it to the app',
        status: 'success',
        duration: 4000,
      });
    } catch (error) {
      handleError('Error downloading Excel file', error);
    } finally {
      setIsDownloading(null);
    }
  };
  // 🔥 [End: Excel Export Logic]

  // 🔥 [Start: Component Rendering]
  return (
    <VStack spacing={4}>
      <HStack spacing={4}>
        <Button 
          colorScheme="purple" 
          onClick={downloadAsJPG}
          isLoading={isDownloading === 'jpg'}
          loadingText="Downloading"
        >
          Download JPG
        </Button>
        <Button 
          colorScheme="green" 
          onClick={downloadAsPDF}
          isLoading={isDownloading === 'pdf'}
          loadingText="Downloading"
        >
          Download PDF
        </Button>
        <Tooltip 
          label="You can edit this Excel file and re-upload it to create new PDFs/PNGs" 
          hasArrow 
          placement="top"
        >
          <Button 
            colorScheme="teal" 
            onClick={downloadAsExcel}
            isLoading={isDownloading === 'excel'}
            loadingText="Downloading"
          >
            Download Excel
          </Button>
        </Tooltip>
      </HStack>
      <Text fontSize="sm" color="gray.600">
        Pro tip: Download Excel, make changes, then re-upload to create a new PDF or PNG
      </Text>
    </VStack>
  );
  // 🔥 [End: Component Rendering]
};