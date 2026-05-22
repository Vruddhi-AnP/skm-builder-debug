export interface Resource {
  id: string;

  title: string;

  category: string;

  description: string;

  format: string;

  accessType: string;

  readTime?: string;

  founderCount?: number;

  availabilityStatus?: string;
}