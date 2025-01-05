import React from 'react';
import { NotificationWithStatus } from '../../hooks/useNotifications';

interface NotificationItemProps {
  notification: NotificationWithStatus;
}

export function NotificationItem({ notification }: NotificationItemProps) {
  const statusStyles = {
    overdue: {
      container: 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20',
      badge: 'text-red-700 bg-red-100 dark:text-red-200 dark:bg-red-900/40',
      text: 'Overdue'
    },
    due: {
      container: 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20',
      badge: 'text-yellow-700 bg-yellow-100 dark:text-yellow-200 dark:bg-yellow-900/40',
      text: 'Due Soon'
    },
    upcoming: {
      container: 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20',
      badge: 'text-blue-700 bg-blue-100 dark:text-blue-200 dark:bg-blue-900/40',
      text: 'Upcoming'
    }
  };

  const style = statusStyles[notification.status];

  return (
    <div className={`p-3 rounded-lg border ${style.container}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium dark:text-white">{notification.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Due: {notification.dueDate.toLocaleString()}
          </p>
        </div>
        <span className={`text-sm font-medium px-2 py-1 rounded ${style.badge}`}>
          {style.text}
        </span>
      </div>
    </div>
  );
}