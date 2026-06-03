"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import AuthCard from "@/components/layout/AuthCard";
import { loginUser } from "@/services/auth.service";
import { ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email address");
      return;
    }

    try {
      setLoading(true);

      // loginUser returns the backend envelope: { success, statusCode, message, data: { accessToken, user } }
      const envelope = await loginUser(formData);

      // The actual auth payload is inside .data
      const { accessToken, user } = envelope.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));

      const role = user.role?.toLowerCase();

      if (role === "founder") {
        router.push("/founder/dashboard");
      } else if (role === "advisor") {
        router.push("/advisor/dashboard");
      } else if (role === "investor") {
        router.push("/investor/dashboard");
      } else if (role === "admin") {
        router.push("/admin/dashboard");
      } else {
        toast.error("Unrecognized role. Please contact support.");
      }
    } catch (error: unknown) {
      console.error("Login error:", error);

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
        toast.error("Login failed. Please try again.");
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
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-semibold text-slate-700">
                  Password
                </label>

                <button
                  type="button"
                  onClick={() =>
                    toast.info(
                      "Password reset coming soon. Contact support for help."
                    )
                  }
                  className="text-sm text-slate-500 transition hover:text-[#16214A]"
                >
                  Forgot password?
                </button>
              </div>

              <input
                type="password"
                name="password"
                required
                minLength={6}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="hover-transition mt-2 flex h-14 w-full items-center justify-center rounded-2xl bg-primary font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Logging In..." : "Login"}
            </button>

            <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                <p className="text-xs leading-6 text-emerald-800">
                  Your account credentials and founder activity are securely
                  protected through encrypted authentication and privacy-first
                  platform systems.
                </p>
              </div>
            </div>
          </form>
        </AuthCard>
      </div>
    </main>
  );
}