import React from 'react';
import { Bell } from 'lucide-react';
import { NotificationList } from './NotificationList';
import { Event } from '../../types/calendar';

interface NotificationCardProps {
  events: Event[];
}

export function NotificationCard({ events }: NotificationCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="w-5 h-5 text-blue-500" />
        <h2 className="text-lg font-semibold dark:text-white">Notifications</h2>
      </div>
      <NotificationList events={events} />
    </div>
  );
}