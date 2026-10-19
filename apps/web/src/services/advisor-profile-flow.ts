import axios from "axios";

import type { CreateAdvisorProfilePayload } from "./advisor.service";

interface AdvisorProfileClient {
  getProfile(): Promise<unknown>;

  createProfile(
    data: CreateAdvisorProfilePayload,
  ): Promise<unknown>;

  updateProfile(
    data: Partial<CreateAdvisorProfilePayload>,
  ): Promise<unknown>;
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
