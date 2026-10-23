import axios from "axios";

import type { CreateAdvisorProfilePayload } from "./advisor.service";

export interface AdvisorProfileData {
  phoneNumber?: string | null;
  currentRole?: string | null;
  organization?: string | null;
  linkedinUrl?: string | null;
  experienceLevel?: string | null;
}

interface AdvisorProfileEnvelope {
  data?: AdvisorProfileData | null;
}

interface AdvisorProfileClient {
  getProfile(): Promise<unknown>;

  createProfile(
    data: CreateAdvisorProfilePayload,
  ): Promise<unknown>;

  updateProfile(
    data: Partial<CreateAdvisorProfilePayload>,
  ): Promise<unknown>;
}

function unwrapAdvisorProfile(
  response: unknown,
): AdvisorProfileData | null {
  if (!response || typeof response !== "object") {
    return null;
  }

  const envelope = response as AdvisorProfileEnvelope;

  if ("data" in envelope) {
    return envelope.data ?? null;
  }

  return response as AdvisorProfileData;
}

export async function loadAdvisorProfile(
  client: Pick<AdvisorProfileClient, "getProfile">,
): Promise<AdvisorProfileData | null> {
  try {
    const response = await client.getProfile();

    return unwrapAdvisorProfile(response);
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response?.status === 404
    ) {
      return null;
    }

    throw error;
  }
}

export async function saveAdvisorProfile(
  client: AdvisorProfileClient,
  payload: CreateAdvisorProfilePayload,
): Promise<"created" | "updated"> {
  try {
    await client.getProfile();

    await client.updateProfile(payload);

    return "updated";
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response?.status === 404
    ) {
      await client.createProfile(payload);

      return "created";
    }

    throw error;
  }
}
