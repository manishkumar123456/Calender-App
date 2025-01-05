export interface Event {
  id: string;
  title: string;
  description?: string;
  date: Date;
  dueDate?: Date;
  color?: string;
}

export type ViewMode = 'month' | 'week' | 'day';

export interface Notification {
  id: string;
  eventId: string;
  title: string;
  dueDate: Date;
  status: 'upcoming' | 'due' | 'overdue';
}