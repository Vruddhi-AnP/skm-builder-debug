export interface InvestorOnboardingData {
  fullName: string;
  email: string;
  phone: string;
  firmName: string;
  role: string;
  linkedinUrl: string;
  location: string;
  bio: string;
  investmentStages: string[];
  industries: string[];
  ticketSize: string;
  geography: string;
  founderPreference: string;
  communicationStyle: string;
  decisionTimeline: string;
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