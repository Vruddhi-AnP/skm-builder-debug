"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import AuthCard from "@/components/layout/AuthCard";
import { loginUser } from "@/services/auth.service";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleLogin = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email)) {
    alert("Invalid email address");
    return;
  }

  try {
    setLoading(true);

    const response =
      await loginUser(formData);

    const authData =
      response.data;

    localStorage.setItem(
      "accessToken",
      authData.accessToken
    );

    localStorage.setItem(
      "user",
      JSON.stringify(authData.user)
    );

    const role =
      authData.user.role;

    if (
      role?.toLowerCase() ===
      "founder"
    ) {
      router.push(
        "/founder/dashboard"
      );
    } else if (
      role?.toLowerCase() ===
      "advisor"
    ) {
      router.push(
        "/advisor/dashboard"
      );
    } else if (
      role?.toLowerCase() ===
      "investor"
    ) {
      router.push(
        "/investor/dashboard"
      );
    } else if (
      role?.toLowerCase() ===
      "admin"
    ) {
      router.push(
        "/admin/dashboard"
      );
    } else {
      alert("Invalid user role");
    }
  } catch (error) {
    console.log(error);

    if (error instanceof Error) {
      alert(error.message);
    } else {
      alert("Login failed");
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-10 sm:px-6">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.04),transparent_40%)]" />

      <div className="relative z-10 flex w-full items-center justify-center">
        <AuthCard
          title="Welcome Back"
          subtitle="Login to continue building inside the Startup Ka Mall ecosystem platform."
          footerText="Don't have an account?"
          footerLink="/signup"
          footerLinkText="Signup"
        >
          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >
            {/* EMAIL */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="h-14 w-full rounded-2xl border border-border/60 bg-white px-5 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-semibold text-slate-700">
                  Password
                </label>

                <Link
                  href="#"
                  className="text-sm text-slate-500 transition hover:text-slate-800"
                >
                  Forgot password?
                </Link>
              </div>

              <input
                type="password"
                name="password"
                required
                minLength={6}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="h-14 w-full rounded-2xl border border-border/60 bg-white px-5 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="hover-transition mt-2 flex h-14 w-full items-center justify-center rounded-2xl bg-primary font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading
                ? "Logging In..."
                : "Login"}
            </button>
          </form>
        </AuthCard>
      </div>
    </main>
  );
}