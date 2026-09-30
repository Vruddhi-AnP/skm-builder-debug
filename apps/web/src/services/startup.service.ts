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
  website?: string | null;
  teamSize?: number | null;
  startupStage?: string | null;
  industry: string | null;
  businessModel?: string | null;
  problemStatement?: string | null;
  solutionOverview?: string | null;
  description: string | null;
  founderId: string;
  createdAt: string;
  updatedAt: string;
}

export const createStartup = async (
  data: CreateStartupPayload,
): Promise<StartupResponse> => {
  const response = await api.post("/startup", data);
  return response.data.data;
};

export const getMyStartups = async (): Promise<StartupResponse[]> => {
  const response = await api.get("/startup");
  return response.data.data;
};

export const getStartupById = async (
  id: string,
): Promise<StartupResponse> => {
  const response = await api.get(`/startup/${id}`);
  return response.data.data;
};

export const updateStartup = async (
  id: string,
  data: Partial<CreateStartupPayload>,
): Promise<StartupResponse> => {
  const response = await api.patch(`/startup/${id}`, data);
  return response.data.data;
};

export const resolveFounderStartupId = async (): Promise<string> => {
  const startups = await getMyStartups();

  if (!startups.length) {
    throw new Error("No startup found for the authenticated founder.");
  }

  const storedStartupId =
    typeof window !== "undefined"
      ? localStorage.getItem("startupId")
      : null;

  const matchedStartup = storedStartupId
    ? startups.find((startup) => startup.id === storedStartupId)
    : undefined;

  const startupId = matchedStartup?.id ?? startups[0].id;

  if (typeof window !== "undefined") {
    localStorage.setItem("startupId", startupId);
  }

  return startupId;
};