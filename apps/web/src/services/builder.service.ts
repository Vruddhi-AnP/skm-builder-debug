import api from "@/lib/axios";

export interface SaveBuilderPayload {
  startupId: string;
  data: Record<string, unknown>;
}

export const saveBuilderData = async (payload: SaveBuilderPayload) => {
  const response = await api.post("/builder", payload);
  return response.data.data;
};