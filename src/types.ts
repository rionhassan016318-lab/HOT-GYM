export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  price: number;
  originalPrice?: number;
  period: string;
  breakdown?: string;
  description: string;
  features: string[];
  popular?: boolean;
  savings?: string;
}

export interface GymShift {
  id: string;
  name: string;
  time: string;
  startHour: number;
  startMin: number;
  endHour: number;
  endMin: number;
  specialNote?: string;
  description: string;
  recommendedFor: string;
}

export interface GymFacility {
  id: string;
  title: string;
  highlight: string;
  description: string;
  iconName: string;
  items: string[];
}
