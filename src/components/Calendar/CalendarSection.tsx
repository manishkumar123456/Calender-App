import React from 'react';
import { CalendarHeader } from './CalendarHeader';
import { CalendarGrid } from './CalendarGrid';
import { Event } from '../../types/calendar';

interface CalendarSectionProps {
  currentDate: Date;
  events: Event[];
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onDateClick: (date: Date) => void;
}

export function CalendarSection({
  currentDate,
  events,
  onPrevMonth,
  onNextMonth,
  onDateClick,
}: CalendarSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={onPrevMonth}
        onNextMonth={onNextMonth}
      />
      <CalendarGrid
        currentDate={currentDate}
        events={events}
        onDateClick={onDateClick}
      />
    </div>
  );
}