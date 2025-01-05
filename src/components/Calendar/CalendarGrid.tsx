import React from 'react';
import { Event } from '../../types/calendar';

interface CalendarGridProps {
  currentDate: Date;
  events: Event[];
  onDateClick: (date: Date) => void;
}

export function CalendarGrid({ currentDate, events, onDateClick }: CalendarGridProps) {
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const days: Date[] = [];
    const startPadding = firstDay.getDay();
    
    // Add padding days from previous month
    for (let i = startPadding - 1; i >= 0; i--) {
      days.push(new Date(year, month, -i));
    }
    
    // Add days of current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="grid grid-cols-7 gap-1">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <div key={day} className="p-2 text-center font-semibold text-gray-600 dark:text-gray-300">
          {day}
        </div>
      ))}
      {days.map((date, index) => {
        const dayEvents = events.filter(
          (event) => event.date.toDateString() === date.toDateString()
        );
        
        const isCurrentMonth = date.getMonth() === currentDate.getMonth();
        
        return (
          <div
            key={index}
            onClick={() => onDateClick(date)}
            className={`min-h-[100px] p-2 border border-gray-200 dark:border-gray-700 cursor-pointer
              ${isCurrentMonth 
                ? 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700' 
                : 'bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500'
              } transition-colors`}
          >
            <div className="text-sm font-medium dark:text-gray-300">{date.getDate()}</div>
            <div className="mt-1">
              {dayEvents.map((event) => (
                <div
                  key={event.id}
                  className="text-xs p-1 mb-1 rounded"
                  style={{ backgroundColor: event.color || '#E2E8F0' }}
                >
                  {event.title}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}