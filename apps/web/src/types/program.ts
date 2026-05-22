export interface Program {
  id: string;

  title: string;

  category: string;

  description: string;

  duration: string;

  mode: string;

  level: string;

  mentorCount?: number;

  founderCount?: number;

  availabilityStatus?: string;
}