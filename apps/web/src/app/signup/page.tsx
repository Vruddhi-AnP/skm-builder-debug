"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import AuthCard from "@/components/layout/AuthCard";

import { signupUser } from "@/services/auth.service";

import type { SignupPayload } from "@/types/auth";
import { ShieldCheck } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] =
    useState<SignupPayload>({
      name: "",
      email: "",
      password: "",
      role: "founder",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email address");
      return;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      toast.error(
        "Password must contain minimum 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
      );
      return;
    }

    try {
      setLoading(true);

      // signupUser returns the backend envelope: { success, statusCode, message, data: { accessToken, user } }
      const envelope = await signupUser(formData);

      // The actual auth payload is inside .data
      const { accessToken, user } = envelope.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));

      const role = user.role?.toLowerCase();

      if (role === "founder") {
        router.push("/onboarding/founder/profile");
      } else if (role === "advisor") {
        router.push("/onboarding/advisor/profile");
      } else if (role === "investor") {
        router.push("/onboarding/investor/investor-profile");
      } else {
        toast.error("Invalid role");
      }
    } catch (error: unknown) {
      console.error("Signup error:", error);

      // Axios wraps the backend error response — surface the backend message if present
      const axiosError = error as {
        response?: { data?: { message?: string | string[] } };
        message?: string;
      };

      const backendMessage =
        axiosError?.response?.data?.message;

      if (Array.isArray(backendMessage)) {
        toast.error(backendMessage[0]);
      } else if (typeof backendMessage === "string") {
        toast.error(backendMessage);
      } else if (axiosError?.message) {
        toast.error(axiosError.message);
      } else {
        toast.error("Signup failed. Please try again.");
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
          title="Create Account"
          subtitle="Join the Startup Ka Mall ecosystem and start building your startup journey."
          footerText="Already have an account?"
          footerLink="/login"
          footerLinkText="Login"
        >
          <form
            onSubmit={handleSignup}
            className="space-y-5"
          >
            {/* NAME */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
              />
            </div>

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
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                required
                minLength={6}
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a secure password"
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
              />
            </div>

            {/* ROLE */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Select Role
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
              >
                <option value="founder">Founder</option>
                <option value="advisor">Advisor</option>
                <option value="investor">Investor</option>
              </select>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="hover-transition mt-2 flex h-14 w-full items-center justify-center rounded-2xl bg-primary font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            <div className="mt-4 rounded-2xl border border-cyan-100 bg-cyan-50 px-4 py-3">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />

                <p className="text-xs leading-6 text-cyan-900">
                  Startup Ka Mall securely protects founder information, startup
                  workflows and platform activity through encrypted systems and
                  controlled access infrastructure.
                </p>
              </div>
            </div>
          </form>
        </AuthCard>
      </div>
    </main>
  );
}