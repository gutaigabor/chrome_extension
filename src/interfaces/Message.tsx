export enum MessagePriority {
  normal = 'normal',
  high = 'high',
}

export interface Message {
  id: string;
  content: string;
  priority: MessagePriority;
  timestamp: string;
  read: boolean;
}

export interface UnreadCount {
  [key: string]: {
    newValue?: {
      lastUpdated: string,
      unreadCount: number},
    oldValue?: {
      lastUpdated: string,
      unreadCount: number}
  }
}