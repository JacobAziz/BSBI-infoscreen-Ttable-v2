'use client';

import { useCallback, useState } from 'react';
import { Box, Button, Text, useToast, VStack, Icon, Flex } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { parseExcelFile } from '@/lib/parseExcel';
import { ProcessedTimetableRow } from '@/types/timetable';

interface FileUploadProps {
  onFileProcessed: (rows: ProcessedTimetableRow[]) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileProcessed }) => {
  const toast = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setIsProcessing(true);
    try {
      const rows = await parseExcelFile(file);
      onFileProcessed(rows);
      toast({
        title: 'File uploaded successfully',
        status: 'success',
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: 'Error processing file',
        description: error instanceof Error ? error.message : 'Unknown error',
        status: 'error',
        duration: 5000,
      });
    } finally {
      setIsProcessing(false);
    }
  }, [onFileProcessed, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
    },
    maxFiles: 1,
    disabled: isProcessing,
  });

  return (
    <Box
      {...getRootProps()}
      p={6}
      border="2px dashed"
      borderColor={isDragActive ? 'blue.400' : isProcessing ? 'yellow.400' : 'gray.200'}
      borderRadius="lg"
      bg={isDragActive ? 'blue.50' : isProcessing ? 'yellow.50' : 'white'}
      cursor={isProcessing ? 'wait' : 'pointer'}
      opacity={isProcessing ? 0.7 : 1}
      transition="all 0.2s"
      _hover={{
        borderColor: isProcessing ? 'yellow.400' : 'blue.400',
        bg: isProcessing ? 'yellow.50' : 'blue.50',
      }}
    >
      <input {...getInputProps()} />
      <VStack spacing={2}>
        <Text fontSize="lg" fontWeight="medium">
          {isDragActive 
            ? 'Drop the file here' 
            : isProcessing 
              ? 'Processing file...' 
              : 'Drag & drop your Excel file here'}
        </Text>
        {!isProcessing && (
          <Text color="gray.500">or click to select a file</Text>
        )}
        <Flex direction="column" mt={2} fontSize="sm" color="gray.600" textAlign="center">
          <Text>Supports both original BSBI timetables</Text>
          <Text>and previously exported timetables</Text>
        </Flex>
      </VStack>
    </Box>
  );
}; 