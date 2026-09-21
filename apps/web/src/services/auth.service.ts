import api from "@/lib/axios";

import {
  AuthApiResponse,
  ConsentApiResponse,
  ConsentPayload,
  LoginPayload,
  SignupPayload,
} from "@/types/auth";

export const signupUser = async (
  data: SignupPayload,
): Promise<AuthApiResponse> => {
  const response = await api.post<AuthApiResponse>("/auth/signup", data);
  return response.data;
};

export const loginUser = async (
  data: LoginPayload,
): Promise<AuthApiResponse> => {
  const response = await api.post<AuthApiResponse>("/auth/login", data);
  return response.data;
};

export const acceptConsent = async (
  data: ConsentPayload,
): Promise<ConsentApiResponse> => {
  const response = await api.patch<ConsentApiResponse>("/auth/consent", data);

  return response.data;
};
