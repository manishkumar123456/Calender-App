import React from 'react';
import { Bell } from 'lucide-react';
import { Event } from '../../types/calendar';

interface NotificationPanelProps {
  events: Event[];
}

export function NotificationPanel({ events }: NotificationPanelProps) {
  const now = new Date();

  const getEventStatus = (event: Event) => {
    if (!event.dueDate) return null;
    
    const dueDate = new Date(event.dueDate);
    const timeLeft = dueDate.getTime() - now.getTime();
    const hoursLeft = timeLeft / (1000 * 60 * 60);

    if (timeLeft < 0) return 'overdue';
    if (hoursLeft <= 24) return 'due';
    return 'upcoming';
  };

  const notifications = events
    .filter(event => event.dueDate)
    .map(event => ({
      ...event,
      status: getEventStatus(event)
    }))
    .filter(event => event.status)
    .sort((a, b) => {
      if (!a.dueDate || !b.dueDate) return 0;
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    });

  if (notifications.length === 0) return null;

  return (
    <div className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="w-5 h-5 text-blue-500" />
        <h2 className="text-lg font-semibold dark:text-white">Notifications</h2>
      </div>
      <div className="space-y-3">
        {notifications.map((event) => (
          <div
            key={event.id}
            className={`p-3 rounded-lg border ${
              event.status === 'overdue'
                ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20'
                : event.status === 'due'
                ? 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20'
                : 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium dark:text-white">{event.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Due: {event.dueDate?.toLocaleString()}
                </p>
              </div>
              <span
                className={`text-sm font-medium px-2 py-1 rounded ${
                  event.status === 'overdue'
                    ? 'text-red-700 bg-red-100 dark:text-red-200 dark:bg-red-900/40'
                    : event.status === 'due'
                    ? 'text-yellow-700 bg-yellow-100 dark:text-yellow-200 dark:bg-yellow-900/40'
                    : 'text-blue-700 bg-blue-100 dark:text-blue-200 dark:bg-blue-900/40'
                }`}
              >
                {event.status === 'overdue'
                  ? 'Overdue'
                  : event.status === 'due'
                  ? 'Due Soon'
                  : 'Upcoming'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}