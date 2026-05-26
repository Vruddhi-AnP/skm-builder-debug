import { AdvisorOnboardingData } from "@/types/advisor-onboarding";

const STORAGE_KEY =
  "advisorOnboarding";

export const getAdvisorOnboarding =
  (): Partial<AdvisorOnboardingData> => {
    if (typeof window === "undefined")
      return {};

    const data =
      localStorage.getItem(STORAGE_KEY);

    return data
  ? (JSON.parse(
      data
    ) as Partial<AdvisorOnboardingData>)
  : {};
  };

export const saveAdvisorOnboarding =
  (
    data: Partial<AdvisorOnboardingData>
  ) => {
    const existing =
      getAdvisorOnboarding();

    const updated = {
      ...existing,
      ...data,
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );
  };

export const clearAdvisorOnboarding =
  () => {
    localStorage.removeItem(
      STORAGE_KEY
    );
  };