import React from 'react';

export type ViewState = 'LOGIN' | 'PUBLIC' | 'ADMIN';

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  category: 'worship' | 'youth' | 'community' | 'social';
  isFeatured?: boolean;
  status?: 'published' | 'draft' | 'archived';
  attendees?: number;
  waitlist?: number;
  tags?: string[];
  description?: string;
}

export interface StatCard {
  label: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon: React.ComponentType<any>;
  progress?: number; // 0-100
}