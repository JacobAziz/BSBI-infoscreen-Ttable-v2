'use client';

import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  VStack,
  Input,
} from '@chakra-ui/react';
import { Session, SessionTime } from '@/types/timetable';

interface SessionSelectorProps {
  session: Session;
  time: SessionTime;
  date: string;
  onSessionChange: (session: Session) => void;
  onTimeChange: (time: SessionTime) => void;
  onDateChange: (date: string) => void;
}

export const SessionSelector: React.FC<SessionSelectorProps> = ({
  session,
  time,
  date,
  onSessionChange,
  onTimeChange,
  onDateChange,
}) => {
  const handleSessionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSession = e.target.value as Session;
    onSessionChange(newSession);
    
    // Automatically set time based on session
    switch (newSession) {
      case 'Morning':
        onTimeChange('08:00');
        break;
      case 'Noon':
        onTimeChange('12:00');
        break;
      case 'Afternoon':
        onTimeChange('16:00');
        break;
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <FormControl>
        <FormLabel>Session</FormLabel>
        <Select value={session} onChange={handleSessionChange}>
          <option value="Morning">Morning</option>
          <option value="Noon">Noon</option>
          <option value="Afternoon">Afternoon</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Time</FormLabel>
        <Select value={time} onChange={(e) => onTimeChange(e.target.value as SessionTime)}>
          <option value="08:00">08:00</option>
          <option value="12:00">12:00</option>
          <option value="16:00">16:00</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Date</FormLabel>
        <Input
          type="date"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
        />
      </FormControl>
    </VStack>
  );
}; 