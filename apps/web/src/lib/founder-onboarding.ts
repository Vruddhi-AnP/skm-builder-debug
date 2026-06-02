export interface FounderOnboardingData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  experience: string;
  founderGoal: string;
  bio: string;
  founderRole: string;
  startupName: string;
  startupIndustry: string;
  startupStage: string;
  startupDescription: string;
  startupWebsite: string;
  selectedPackage: string;
}

const STORAGE_KEY = "founderOnboarding";

export function getFounderOnboarding(): Partial<FounderOnboardingData> {
  if (typeof window === "undefined") return {};
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch { return {}; }
}

export function saveFounderOnboarding(
  data: Partial<FounderOnboardingData>
): void {
  const existing = getFounderOnboarding();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...existing, ...data })
  );
}

export function clearFounderOnboarding(): void {
  localStorage.removeItem(STORAGE_KEY);
}