import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}

export interface SectionTitleProps {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center';
}

// Data Models
export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconPath?: string;
  iconType?: string;
}

export interface WorkItem {
  id: string;
  name: string;
  category: string;
  description: string;
  imagePath?: string;
  stats: { label: string; value: string; suffix?: string };
}

export interface StrengthItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconPath?: string;
}

export interface PricePlan {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
