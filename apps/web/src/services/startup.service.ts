import api from "@/lib/axios";

export interface CreateStartupPayload {
  name: string;

  website?: string;

  teamSize?: number;

  startupStage?: string;

  industry?: string;

  businessModel?: string;

  problemStatement?: string;

  solutionOverview?: string;

  description?: string;
}

export interface StartupResponse {
  id: string;
  name: string;
  industry: string | null;
  description: string | null;
  founderId: string;
  createdAt: string;
  updatedAt: string;
}

export const createStartup = async (
  data: CreateStartupPayload
): Promise<StartupResponse> => {
  const response = await api.post("/startup", data);
  // Backend envelope: { success, statusCode, message, data: { ...startup } }
  return response.data.data;
};

export const getMyStartups = async () => {
  const response = await api.get("/startup");
  return response.data.data;
};

export const getStartupById = async (id: string) => {
  const response = await api.get(`/startup/${id}`);
  return response.data.data;
};

export const updateStartup = async (
  id: string,
  data: Record<string, unknown>
) => {
  const response = await api.patch(
    `/startup/${id}`,
    data
  );

  return response.data.data;
};