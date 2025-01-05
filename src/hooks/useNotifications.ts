import { useMemo } from 'react';
import { Event } from '../types/calendar';

export interface NotificationWithStatus extends Event {
  status: 'overdue' | 'due' | 'upcoming';
}

export function useNotifications(events: Event[]) {
  const notifications = useMemo(() => {
    const now = new Date();

    return events
      .filter((event): event is Event & { dueDate: Date } => !!event.dueDate)
      .map(event => {
        const timeLeft = event.dueDate.getTime() - now.getTime();
        const hoursLeft = timeLeft / (1000 * 60 * 60);

        let status: 'overdue' | 'due' | 'upcoming';
        if (timeLeft < 0) status = 'overdue';
        else if (hoursLeft <= 24) status = 'due';
        else status = 'upcoming';

        return { ...event, status };
      })
      .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
  }, [events]);

  return { notifications };
}