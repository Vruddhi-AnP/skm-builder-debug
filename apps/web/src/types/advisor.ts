export interface Advisor {
  id: string;

  fullName: string;

  headline: string;

  expertise: string[];

  category: string;

  yearsExperience?: number;

  availabilityStatus?: string;

  rating?: number;

  totalSessions?: number;

  startupCount?: number;
}