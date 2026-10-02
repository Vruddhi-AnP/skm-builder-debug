export interface Advisor {
  id: string;

  fullName: string;
  headline: string;

  expertise: string[];
  category: string;

  organization: string | null;
  experienceLevel: string | null;

  startupStage: string | null;
  mentorshipType: string | null;

  advisoryGoal: string | null;

  availabilityStatus: string | null;
  preferredTimeSlot: string | null;
  sessionMode: string | null;
  preferredTimezone: string | null;

  languages: string[];

  founderEngagementPreference:
    | string
    | null;

  advisoryPricingModel:
    | string
    | null;

  consultationType: string | null;
}