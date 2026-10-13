"use client";

const LEGACY_BUILDER_KEY = "skmBuilderData";
const BUILDER_KEY_PREFIX = "skmBuilderData";

export type BuilderStepKey =
  | "ideaDefinition"
  | "problemDefinition"
  | "marketResearch"
  | "solutionDesign"
  | "businessModel";

export type StepStatus = "Completed" | "In Progress" | "Pending";

export interface BuilderStepData {
  ideaDefinition?: Record<string, string>;
  problemDefinition?: Record<string, string>;
  marketResearch?: Record<string, string>;
  solutionDesign?: Record<string, string>;
  businessModel?: Record<string, string>;
}

interface StoredUser {
  id?: string | null;
}

const STEP_ORDER: BuilderStepKey[] = [
  "ideaDefinition",
  "problemDefinition",
  "marketResearch",
  "solutionDesign",
  "businessModel",
];

function getBuilderStorageKey(): string | null {
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

    const startupId = localStorage.getItem("startupId")?.trim() ?? "";

    if (startupId) {
      return `${BUILDER_KEY_PREFIX}:${userId}:${startupId}`;
    }

    return `${BUILDER_KEY_PREFIX}:${userId}`;
  } catch {
    return null;
  }
}

function removeLegacyBuilderData(): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(LEGACY_BUILDER_KEY);
}

function migrateUserDraftToStartupScope(storageKey: string): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      return;
    }

    const user = JSON.parse(storedUser) as StoredUser;
    const userId = typeof user.id === "string" ? user.id.trim() : "";
    const startupId = localStorage.getItem("startupId")?.trim() ?? "";

    if (!userId || !startupId) {
      return;
    }

    const userOnlyKey = `${BUILDER_KEY_PREFIX}:${userId}`;
    const startupScopedKey = `${BUILDER_KEY_PREFIX}:${userId}:${startupId}`;

    if (storageKey !== startupScopedKey) {
      return;
    }

    const userOnlyRaw = localStorage.getItem(userOnlyKey);

    if (!userOnlyRaw) {
      return;
    }

    const userOnlyData = JSON.parse(userOnlyRaw) as BuilderStepData;

    const startupScopedRaw = localStorage.getItem(startupScopedKey);

    const startupScopedData = startupScopedRaw
      ? (JSON.parse(startupScopedRaw) as BuilderStepData)
      : {};

    const migratedData: BuilderStepData = {};

    for (const step of STEP_ORDER) {
      const userOnlyStep = userOnlyData[step];
      const startupScopedStep = startupScopedData[step];

      if (userOnlyStep || startupScopedStep) {
        migratedData[step] = {
          ...(userOnlyStep ?? {}),
          ...(startupScopedStep ?? {}),
        };
      }
    }

    localStorage.setItem(startupScopedKey, JSON.stringify(migratedData));
    localStorage.removeItem(userOnlyKey);
  } catch {
    // Leave existing local drafts in place if migration cannot complete safely.
  }
}

export function getBuilderData(): BuilderStepData {
  if (typeof window === "undefined") {
    return {};
  }

  const storageKey = getBuilderStorageKey();

  if (!storageKey) {
    return {};
  }

  /*
   * The old global key was shared by every account in the browser.
   * It cannot be safely attributed to a founder, so never migrate it.
   * Backend data remains authoritative and will repopulate the
   * account-scoped draft after a successful API load.
   */
  removeLegacyBuilderData();
  migrateUserDraftToStartupScope(storageKey);

  try {
    const raw = localStorage.getItem(storageKey);

    return raw ? (JSON.parse(raw) as BuilderStepData) : {};
  } catch {
    return {};
  }
}

export function saveBuilderStep(
  step: BuilderStepKey,
  data: Record<string, string>,
): void {
  const storageKey = getBuilderStorageKey();

  if (!storageKey) {
    return;
  }

  removeLegacyBuilderData();

  const existing = getBuilderData();

  const updated = {
    ...existing,
    [step]: data,
  };

  localStorage.setItem(storageKey, JSON.stringify(updated));
}

export function getStepStatus(step: BuilderStepKey): StepStatus {
  const data = getBuilderData();
  const stepData = data[step];

  if (!stepData) {
    return "Pending";
  }

  const hasValues = Object.values(stepData).some(
    (value) => value?.trim().length > 0,
  );

  return hasValues ? "Completed" : "Pending";
}

export function getBuilderProgress(): number {
  const data = getBuilderData();

  const completed = STEP_ORDER.filter((step) => {
    const stepData = data[step];

    if (!stepData) {
      return false;
    }

    return Object.values(stepData).some((value) => value?.trim().length > 0);
  }).length;

  return Math.round((completed / STEP_ORDER.length) * 100);
}

export function getCompletedStepCount(): number {
  const data = getBuilderData();

  return STEP_ORDER.filter((step) => {
    const stepData = data[step];

    if (!stepData) {
      return false;
    }

    return Object.values(stepData).some((value) => value?.trim().length > 0);
  }).length;
}

export function clearBuilderData(): void {
  if (typeof window === "undefined") {
    return;
  }

  const storageKey = getBuilderStorageKey();

  if (storageKey) {
    localStorage.removeItem(storageKey);
  }

  removeLegacyBuilderData();
}
