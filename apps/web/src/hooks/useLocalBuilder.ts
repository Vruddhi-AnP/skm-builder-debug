"use client";

const BUILDER_KEY = "skmBuilderData";

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

const STEP_ORDER: BuilderStepKey[] = [
  "ideaDefinition",
  "problemDefinition",
  "marketResearch",
  "solutionDesign",
  "businessModel",
];

export function getBuilderData(): BuilderStepData {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(BUILDER_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveBuilderStep(
  step: BuilderStepKey,
  data: Record<string, string>
): void {
  const existing = getBuilderData();
  const updated = { ...existing, [step]: data };
  localStorage.setItem(BUILDER_KEY, JSON.stringify(updated));
}

export function getStepStatus(step: BuilderStepKey): StepStatus {
  const data = getBuilderData();
  const stepData = data[step];
  if (!stepData) return "Pending";
  const hasValues = Object.values(stepData).some((v) => v?.trim().length > 0);
  return hasValues ? "Completed" : "Pending";
}

export function getBuilderProgress(): number {
  const data = getBuilderData();
  const completed = STEP_ORDER.filter((step) => {
    const stepData = data[step];
    if (!stepData) return false;
    return Object.values(stepData).some((v) => v?.trim().length > 0);
  }).length;
  return Math.round((completed / STEP_ORDER.length) * 100);
}

export function getCompletedStepCount(): number {
  const data = getBuilderData();
  return STEP_ORDER.filter((step) => {
    const stepData = data[step];
    if (!stepData) return false;
    return Object.values(stepData).some((v) => v?.trim().length > 0);
  }).length;
}

export function clearBuilderData(): void {
  localStorage.removeItem(BUILDER_KEY);
}