import React from 'react';
import { NotificationItem } from './NotificationItem';
import { Event } from '../../types/calendar';
import { useNotifications } from '../../hooks/useNotifications';

interface NotificationListProps {
  events: Event[];
}

export function NotificationList({ events }: NotificationListProps) {
  const { notifications } = useNotifications(events);

  if (notifications.length === 0) {
    return (
      <p className="text-gray-500 dark:text-gray-400 text-center py-4">
        No notifications at this time
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
}