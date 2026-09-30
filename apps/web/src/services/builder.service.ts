import api from "@/lib/axios";

export type BuilderSectionData = Record<string, unknown>;

export interface BuilderData {
  ideaDefinition: BuilderSectionData;
  problemDefinition: BuilderSectionData;
  marketResearch: BuilderSectionData;
  solutionDesign: BuilderSectionData;
  businessModel: BuilderSectionData;
}

export interface BuilderRecord {
  id: string;
  startupId: string;
  data: BuilderData;
  createdAt: string;
  updatedAt: string;
}

export interface SaveBuilderPayload {
  startupId: string;
  data: BuilderData;
}

export interface UpdateBuilderPayload {
  data: Partial<BuilderData>;
}

export const createEmptyBuilderData = (): BuilderData => ({
  ideaDefinition: {},
  problemDefinition: {},
  marketResearch: {},
  solutionDesign: {},
  businessModel: {},
});

export const saveBuilderData = async (
  payload: SaveBuilderPayload,
): Promise<BuilderRecord> => {
  const response = await api.post("/builder", payload);

  return response.data.data;
};

export const getBuilderDataByStartupId = async (
  startupId: string,
): Promise<BuilderRecord> => {
  const response = await api.get(`/builder/${startupId}`);

  return response.data.data;
};

export const updateBuilderData = async (
  startupId: string,
  payload: UpdateBuilderPayload,
): Promise<BuilderRecord> => {
  const response = await api.patch(`/builder/${startupId}`, payload);

  return response.data.data;
};