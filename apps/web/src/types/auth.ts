export type UserRole = "founder" | "advisor" | "investor" | "admin" | "builder";

export interface AuthUser {
  id: string;
  email: string;
  name: string | null;
  role: UserRole;
  termsAccepted: boolean;
  termsAcceptedAt: string | null;
  termsVersion: string | null;
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
  termsAccepted: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface ConsentPayload {
  termsAccepted: boolean;
}

export interface ConsentResponseData {
  termsAccepted: boolean;
  termsAcceptedAt: string | null;
  termsVersion: string | null;
}

export interface ConsentApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  path: string;
  timestamp: string;
  data: ConsentResponseData;
}
