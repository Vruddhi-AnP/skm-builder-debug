"use client";

import { AuthUser } from "@/types/auth";

export function useLocalUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  
  try {
    const raw = localStorage.getItem("user");
    if (!raw) return null;
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export function getUserInitial(name?: string | null): string {
  if (!name) return "U";
  return name.trim().charAt(0).toUpperCase();
}

export function getUserDisplayName(name?: string | null): string {
  if (!name) return "User";
  return name.trim();
}