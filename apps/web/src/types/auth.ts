export type UserRole =
  | "founder"
  | "advisor"
  | "investor"
  | "admin"
  | "builder";

export interface AuthUser {
  id: string;
  email: string;
  name: string | null;
  role: UserRole;
}

// The actual payload inside response.data
export interface AuthResponseData {
  accessToken: string;
  user: AuthUser;
}

// Full backend envelope shape (TransformResponseInterceptor wraps every response)
// { success, statusCode, message, path, timestamp, data: { accessToken, user } }
export interface AuthApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  path: string;
  timestamp: string;
  data: AuthResponseData;
}

export interface SignupPayload {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface LoginPayload {
  email: string;
  password: string;
}