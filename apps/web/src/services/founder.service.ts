import api from "@/lib/axios";

export const createFounderProfile = async (data: {
  phoneNumber?: string;
  location?: string;
  founderRole?: string;
  startupExperience?: string;
  linkedinUrl?: string;
  founderGoal?: string;
  bio?: string;
}) => {
  const response = await api.post("/founder/profile", data);
  return response.data.data;
};

export const getFounderProfile = async () => {
  const response = await api.get("/founder/profile");
  return response.data.data;
};

export const updateFounderProfile = async (data: Record<string, unknown>) => {
  const response = await api.patch("/founder/profile", data);
  return response.data.data;
};