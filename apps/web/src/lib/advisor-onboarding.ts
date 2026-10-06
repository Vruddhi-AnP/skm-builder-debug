import { AdvisorOnboardingData } from "@/types/advisor-onboarding";

const LEGACY_STORAGE_KEY = "advisorOnboarding";
const STORAGE_KEY_PREFIX = "advisorOnboarding";

interface StoredUser {
  id?: string | null;
}

function getAdvisorStorageKey(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      return null;
    }

    const user = JSON.parse(storedUser) as StoredUser;

    const userId = typeof user.id === "string" ? user.id.trim() : "";

    if (!userId) {
      return null;
    }

    return `${STORAGE_KEY_PREFIX}:${userId}`;
  } catch {
    return null;
  }
}

function removeLegacyAdvisorOnboarding(): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(LEGACY_STORAGE_KEY);
}

export const getAdvisorOnboarding = (): Partial<AdvisorOnboardingData> => {
  if (typeof window === "undefined") {
    return {};
  }

  const storageKey = getAdvisorStorageKey();

  if (!storageKey) {
    return {};
  }

  /*
   * The legacy key was shared across advisor accounts.
   * It cannot be safely attributed to a user, so do not migrate it.
   */
  removeLegacyAdvisorOnboarding();

  try {
    const data = localStorage.getItem(storageKey);

    return data ? (JSON.parse(data) as Partial<AdvisorOnboardingData>) : {};
  } catch {
    return {};
  }
};

export const saveAdvisorOnboarding = (
  data: Partial<AdvisorOnboardingData>,
): void => {
  const storageKey = getAdvisorStorageKey();

  if (!storageKey) {
    return;
  }

  removeLegacyAdvisorOnboarding();

  const existing = getAdvisorOnboarding();

  const updated = {
    ...existing,
    ...data,
  };

  localStorage.setItem(storageKey, JSON.stringify(updated));
};

export const clearAdvisorOnboarding = (): void => {
  if (typeof window === "undefined") {
    return;
  }

  const storageKey = getAdvisorStorageKey();

  if (storageKey) {
    localStorage.removeItem(storageKey);
  }

  removeLegacyAdvisorOnboarding();
};
