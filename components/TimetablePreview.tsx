'use client';

import React, { forwardRef, useRef, useEffect, useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Center,
  Grid,
  GridItem,
  Divider,
  Image,
} from '@chakra-ui/react';
import { TimetableData } from '@/types/timetable';
import { BSBILogo } from './BSBILogo';

interface TimetablePreviewProps {
  data: TimetableData;
}

const getSessionColors = (session: string) => {
  switch (session) {
    case 'Morning':
      return { 
        bg: 'sessions.morning.bg', 
        text: 'sessions.morning.text',
        evenRow: 'rgba(255, 255, 255, 0.9)',
        oddRow: 'rgba(220, 220, 220, 0.9)',
        cellText: '#4a7fcb', // Morning blue for cell text
      };
    case 'Noon':
      return { 
        bg: 'sessions.noon.bg', 
        text: 'sessions.noon.text',
        evenRow: 'rgba(255, 255, 255, 0.9)',
        oddRow: 'rgba(220, 220, 220, 0.9)',
        cellText: '#2d4d7c', // Noon blue for cell text
      };
    case 'Afternoon':
      return { 
        bg: 'sessions.afternoon.bg', 
        text: 'sessions.afternoon.text',
        evenRow: 'rgba(255, 255, 255, 0.9)',
        oddRow: 'rgba(220, 220, 220, 0.9)',
        cellText: '#1a365d', // Afternoon dark blue for cell text
      };
    default:
      return { 
        bg: 'gray.500', 
        text: 'white',
        evenRow: 'rgba(255, 255, 255, 0.9)',
        oddRow: 'rgba(220, 220, 220, 0.9)',
        cellText: '#4a7fcb', // Default to morning blue
      };
  }
};

// Grid template columns for the timetable - adjusted to give more space to Intake
const gridTemplateColumns = "27% 27% 12% 24% 10%";

export const TimetablePreview = forwardRef<HTMLDivElement, TimetablePreviewProps>(
  ({ data }, ref) => {
    const colors = getSessionColors(data.session);
    const isLightBackground = data.session === 'Noon';
    const [logoError, setLogoError] = useState(false);
    
    // Format date from YYYY-MM-DD to DD.MM.YYYY
    const formattedDate = data.date ? 
      data.date.split('-').reverse().join('.') : 
      '';

    return (
      <Box
        ref={ref}
        bg={colors.bg}
        color={colors.text}
        p={0}
        borderRadius="lg"
        width="100%"
        maxW="1200px"
        height="auto"
        display="flex"
        flexDirection="column"
        className="timetable-container"
      >
        {/* Header section with date, logo, session info */}
        <Box py={1} px={8} mb={0}>
          <Flex justify="space-between" align="center">
            {/* Left - Date */}
            <Flex direction="column" textAlign="left" width="25%">
              <Text fontSize="3xl" fontWeight="bold">
                Date
              </Text>
              <Text fontSize="2xl">
                {formattedDate}
              </Text>
            </Flex>
            
            {/* Center - Logo */}
            <Center width="50%" my={0} position="relative" zIndex={1} overflow="visible" className="logo-container">
              {logoError ? (
                <Text fontSize="5xl" fontWeight="bold" color="white">
                  BSBI
                </Text>
              ) : (
                <Image 
                  src="/images/BSBI-Logo.png" 
                  alt="BSBI Logo" 
                  height={["150px", "180px", "200px"]} 
                  width="auto"
                  objectFit="contain"
                  filter={isLightBackground ? "none" : "brightness(0) invert(1)"}
                  onError={() => setLogoError(true)}
                />
              )}
            </Center>
            
            {/* Right - Session info */}
            <Flex direction="column" textAlign="right" width="25%">
              <Text fontSize="3xl" fontWeight="bold">
                {data.session}
              </Text>
              <Text fontSize="2xl">
                {data.time}
              </Text>
            </Flex>
          </Flex>
        </Box>
        
        {/* Horizontal divider between header and table */}
        <Box px={6} my={1}>
          <Divider 
            borderWidth="2px" 
            borderColor={isLightBackground ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.2)"} 
            opacity={0.8}
          />
        </Box>

        {/* Timetable section */}
        <Box px={6} pb={6} pt={2}>
          {/* Header Row */}
          <Grid 
            templateColumns={gridTemplateColumns}
            bg={colors.bg}
            color={colors.text}
            fontWeight="bold"
            borderTopRadius="md"
            textTransform="uppercase"
            letterSpacing="wider"
            p={0}
            mb={0}
            className="timetable-header"
          >
            <GridItem p={4} borderRight="2px solid" borderColor={colors.bg} display="flex" alignItems="center" justifyContent="center" textAlign="center" fontSize="2xl" fontWeight="bold" whiteSpace="nowrap">
              Program
            </GridItem>
            <GridItem p={4} borderRight="2px solid" borderColor={colors.bg} display="flex" alignItems="center" justifyContent="center" textAlign="center" fontSize="2xl" fontWeight="bold" whiteSpace="nowrap">
              Module
            </GridItem>
            <GridItem p={4} borderRight="2px solid" borderColor={colors.bg} display="flex" alignItems="center" justifyContent="center" textAlign="center" fontSize="2xl" fontWeight="bold" whiteSpace="nowrap">
              Intake
            </GridItem>
            <GridItem p={4} borderRight="2px solid" borderColor={colors.bg} display="flex" alignItems="center" justifyContent="center" textAlign="center" fontSize="2xl" fontWeight="bold" whiteSpace="nowrap">
              Professor
            </GridItem>
            <GridItem p={4} display="flex" alignItems="center" justifyContent="center" textAlign="center" fontSize="2xl" fontWeight="bold" whiteSpace="nowrap">
              Room
            </GridItem>
          </Grid>
          
          {/* Table Rows */}
          {data.rows.map((row, index) => (
            <Grid
              key={index}
              templateColumns={gridTemplateColumns}
              bg={index % 2 === 0 ? colors.evenRow : colors.oddRow}
              color="black"
              p={0}
              borderBottomRadius={index === data.rows.length - 1 ? "md" : 0}
              borderTop={index > 0 ? "none" : undefined}
            >
              <GridItem p={4} borderRight="2px solid" borderColor={colors.bg} display="flex" alignItems="center" justifyContent="center" textAlign="center" fontSize="xl" fontWeight="semibold" color={colors.cellText}>
                {row.program}
              </GridItem>
              <GridItem p={4} borderRight="2px solid" borderColor={colors.bg} display="flex" alignItems="center" justifyContent="center" textAlign="center" fontSize="xl" fontWeight="semibold" color={colors.cellText}>
                {row.module}
              </GridItem>
              <GridItem p={4} borderRight="2px solid" borderColor={colors.bg} display="flex" alignItems="center" justifyContent="center" textAlign="center" fontSize="xl" fontWeight="semibold" color={colors.cellText}>
                {row.intake}
              </GridItem>
              <GridItem p={4} borderRight="2px solid" borderColor={colors.bg} display="flex" alignItems="center" justifyContent="center" textAlign="center" fontSize="xl" fontWeight="semibold" color={colors.cellText}>
                {row.professor}
              </GridItem>
              <GridItem p={4} display="flex" alignItems="center" justifyContent="center" textAlign="center" fontSize="xl" fontWeight="semibold" color={colors.cellText}>
                {row.room}
              </GridItem>
            </Grid>
          ))}
        </Box>
      </Box>
    );
  }
);

TimetablePreview.displayName = 'TimetablePreview'; 