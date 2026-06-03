import api from "@/lib/axios";

export interface CreateStartupPayload {
  name: string;
  industry: string;
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