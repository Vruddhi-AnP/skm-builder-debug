import api from "@/lib/axios";

export type ConsultationStatus =
  | "NEW"
  | "CONTACTED"
  | "SCHEDULED"
  | "CLOSED"
  | "REJECTED";

export interface CreateConsultationPayload {
  advisorId: string;
  startupId: string;
  message: string;
}

export interface ConsultationRequest {
  id: string;
  advisorId: string;
  startupId: string | null;
  message: string | null;
  status: ConsultationStatus;
  createdAt: string;
  updatedAt: string;
}

export const createConsultation = async (
  payload: CreateConsultationPayload,
): Promise<ConsultationRequest> => {
  const response = await api.post("/consultations", payload);

  return response.data.data;
};

export const getMyConsultations = async (): Promise<ConsultationRequest[]> => {
  const response = await api.get("/consultations/mine");

  return response.data.data;
};
