export interface InvestorOnboardingData {
  fullName: string;

  firmName: string;

  location: string;

  linkedinUrl: string;

  shortBio: string;

  experienceLevel: string;

  investorType: string;

  investmentFocus: string[];

  preferredStartupStages: string[];

  investmentTicketSizes: string[];

  geographyPreferences: string[];

  interestedInFounderMentorship: boolean;
}

const STORAGE_KEY = "investorOnboarding";

export function getInvestorOnboarding(): Partial<InvestorOnboardingData> {
  if (typeof window === "undefined") return {};
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch { return {}; }
}

export function saveInvestorOnboarding(
  data: Partial<InvestorOnboardingData>
): void {
  const existing = getInvestorOnboarding();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...existing, ...data })
  );
}

export function clearInvestorOnboarding(): void {
  localStorage.removeItem(STORAGE_KEY);
}