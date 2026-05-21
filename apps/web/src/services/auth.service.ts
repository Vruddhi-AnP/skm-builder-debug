import { api } from "@/lib/api";

import {
  AuthResponse,
  LoginPayload,
  SignupPayload,
} from "@/types/auth";

export const signupUser = async (
  data: SignupPayload
): Promise<AuthResponse> => {
  const response = await api.post("/auth/signup", data);

  return response.data;
};

export const loginUser = async (
  data: LoginPayload
): Promise<AuthResponse> => {
  const response = await api.post("/auth/login", data);

  return response.data;
};