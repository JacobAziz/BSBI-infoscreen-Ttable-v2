'use client';

import { useState, useRef } from 'react';
import { Container, VStack, Box, Heading, Divider, Text, useColorModeValue } from '@chakra-ui/react';
import { FileUpload } from '@/components/FileUpload';
import { SessionSelector } from '@/components/SessionSelector';
import { TimetablePreview } from '@/components/TimetablePreview';
import { DownloadButtons } from '@/components/DownloadButtons';
import { ProcessedTimetableRow, TimetableData } from '@/types/timetable';

export default function Home() {
  const [timetableData, setTimetableData] = useState<TimetableData>({
    session: 'Morning',
    time: '08:00',
    date: '',
    rows: [],
  });

  const timetableRef = useRef<HTMLDivElement>(null);
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleFileProcessed = (rows: ProcessedTimetableRow[]) => {
    setTimetableData(prev => ({
      ...prev,
      rows,
    }));
  };

  const isTimetableConfigured = timetableData.rows.length > 0 && timetableData.date !== '';

  return (
    <Box minH="100vh" py={10}>
      <Container maxW="container.xl" py={8}>
        <VStack spacing={10} align="stretch">
          <Heading as="h1" size="xl" textAlign="center" className="app-title" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            BSBI Info Screen Timetable
          </Heading>
          
          <Box 
            w="100%" 
            maxW="700px" 
            mx="auto" 
            p={6} 
            bg={bgColor} 
            shadow="xl" 
            borderRadius="xl" 
            borderWidth="1px" 
            borderColor={borderColor}
          >
            <Text mb={4} textAlign="center" fontWeight="medium" color="gray.600">
              Upload your BSBI timetable file to begin formatting
            </Text>
            <FileUpload onFileProcessed={handleFileProcessed} />
          </Box>

          {timetableData.rows.length > 0 && (
            <>
              <Divider />
              <Box 
                w="100%" 
                maxW="600px" 
                mx="auto" 
                p={6} 
                bg={bgColor} 
                shadow="lg" 
                borderRadius="xl" 
                borderWidth="1px" 
                borderColor={borderColor}
              >
                <Heading as="h2" size="md" textAlign="center" mb={6}>Timetable Configuration</Heading>
                
                <SessionSelector
                  session={timetableData.session}
                  time={timetableData.time}
                  date={timetableData.date}
                  onSessionChange={(session) =>
                    setTimetableData(prev => ({ ...prev, session }))
                  }
                  onTimeChange={(time) =>
                    setTimetableData(prev => ({ ...prev, time }))
                  }
                  onDateChange={(date) =>
                    setTimetableData(prev => ({ ...prev, date }))
                  }
                />
              </Box>

              {isTimetableConfigured && (
                <>
                  <Divider />
                  <Box 
                    w="100%" 
                    maxW="container.lg" 
                    mx="auto" 
                    p={6} 
                    bg={bgColor} 
                    shadow="lg" 
                    borderRadius="xl" 
                    borderWidth="1px" 
                    borderColor={borderColor}
                  >
                    <Heading as="h2" size="md" textAlign="center" mb={6}>Timetable Preview</Heading>
                    
                    <TimetablePreview
                      ref={timetableRef}
                      data={timetableData}
                    />

                    <Box textAlign="center" mt={8}>
                      <DownloadButtons
                        timetableRef={timetableRef as React.RefObject<HTMLDivElement>}
                        data={timetableData}
                      />
                    </Box>
                  </Box>
                </>
              )}
            </>
          )}
        </VStack>
      </Container>
    </Box>
  );
} 