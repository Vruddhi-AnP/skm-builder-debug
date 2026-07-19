import api from "@/lib/axios";

export interface CreateAdvisorProfilePayload {
  phoneNumber?: string;
  currentRole?: string;
  organization?: string;
  linkedinUrl?: string;
  experienceLevel?: string;

  expertiseArea?: string;
  industry?: string;
  startupStage?: string;
  mentorshipType?: string;
  keySkills?: string;
  advisoryGoal?: string;

  weeklyAvailability?: string;
  preferredTimeSlot?: string;
  sessionMode?: string;
  preferredTimezone?: string;
  languages?: string;
  founderEngagementPreference?: string;

  advisoryPricingModel?: string;
  sessionPrice?: number;
  monthlyRetainer?: number;
  equityInterest?: string;
  consultationType?: string;
  advisoryNotes?: string;
}

export const advisorService = {
  async createProfile(data: CreateAdvisorProfilePayload) {
    const response = await api.post(
      "/advisor/profile",
      data
    );

    return response.data;
  },

  async getProfile() {
    const response = await api.get(
      "/advisor/profile"
    );

    return response.data;
  },

  async updateProfile(
    data: Partial<CreateAdvisorProfilePayload>
  ) {
    const response = await api.patch(
      "/advisor/profile",
      data
    );

    return response.data;
  },
};