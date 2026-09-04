export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  estimatedDeliveryTime: string;
  startingPrice: string;
  popularFor: string;
  badge?: string;
  imageUrl: string;
}

export interface TrackingStep {
  status: string;
  location: string;
  timestamp: string;
  completed: boolean;
  active?: boolean;
  description: string;
}

export interface TrackingDetails {
  trackingId: string;
  senderName: string;
  recipientName: string;
  origin: string;
  destination: string;
  currentStatus: 'Order Booked' | 'Picked Up' | 'In Transit' | 'Out for Delivery' | 'Delivered';
  estimatedDelivery: string;
  weight: string;
  serviceType: string;
  courierName?: string;
  courierPhone?: string;
  courierRating?: number;
  steps: TrackingStep[];
}

export interface QuoteFormState {
  originCity: string;
  destinationCity: string;
  weightKg: number;
  packageType: 'Document' | 'Parcel (Standard)' | 'Cold Chain / Food' | 'Bulk Freight' | 'Fragile / High-Value';
  speedLevel: 'Same Day Express' | 'Standard Express (24h)' | 'Scheduled Economy (48h)';
  declaredValue: number;
  isFragile: boolean;
  needsInsurance: boolean;
}

export interface QuoteEstimate {
  basePrice: number;
  speedMultiplier: number;
  insuranceCost: number;
  fuelSurcharge: number;
  tax: number;
  totalCost: number;
  estimatedDeliveryHours: string;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Booking & Quotes' | 'Business & SMEs' | 'Tracking & Safety';
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  category: 'SME' | 'Enterprise' | 'E-commerce' | 'Individual' | 'Corporate';
  quote: string;
  rating: number;
  avatarUrl: string;
  location: string;
}

export interface CompanyStat {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface PartnerApplicationForm {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  industry: string;
  averageWeeklyDeliveries: string;
  additionalNotes: string;
}

export interface ContactFormState {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  inquiryType: 'General Inquiry' | 'Enterprise Partnership' | 'Shipment Issue' | 'Billing & Quotes';
  message: string;
}
