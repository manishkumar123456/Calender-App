import React from 'react';
import { Event } from '../../types/calendar';
import { NotificationCard } from '../Notifications/NotificationCard';
import { CalendarSection } from '../Calendar/CalendarSection';

interface MainContentProps {
  events: Event[];
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onDateClick: (date: Date) => void;
}

export function MainContent({ 
  events, 
  currentDate, 
  onPrevMonth, 
  onNextMonth, 
  onDateClick 
}: MainContentProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-8">
      <div className="space-y-6">
        <NotificationCard events={events} />
        <CalendarSection
          currentDate={currentDate}
          events={events}
          onPrevMonth={onPrevMonth}
          onNextMonth={onNextMonth}
          onDateClick={onDateClick}
        />
      </div>
    </div>
  );
}