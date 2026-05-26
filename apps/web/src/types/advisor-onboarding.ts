export interface AdvisorOnboardingData {
  // PROFILE
  fullName: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  currentRole: string;
  company: string;
  experience?: string;

  // EXPERTISE
  expertiseAreas: string;
  industries: string;
  startupStages: string;
  mentorshipType: string;
  skills: string;
  advisoryGoal: string;

  // AVAILABILITY
  weeklyAvailability: string;
  preferredTime: string;
  sessionMode: string;
  timezone: string;
  languages: string;
  founderPreferences: string;

  // PRICING
  pricingModel: string;
  sessionPricing: string;
  monthlyRetainer: string;
  equityInterest: string;
  consultationType: string;
  pricingNotes: string;
}