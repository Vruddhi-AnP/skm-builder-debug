import api from "@/lib/axios";

export const investorService = {
  createProfile: async (data: Record<string, unknown>) => {
    const response = await api.post("/investor/profile", data);
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get("/investor/profile");
    return response.data;
  },

  updateProfile: async (data: Record<string, unknown>) => {
    const response = await api.patch("/investor/profile", data);
    return response.data;
  },
};