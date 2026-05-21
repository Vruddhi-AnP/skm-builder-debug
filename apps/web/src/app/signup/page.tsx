"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { signupUser } from "@/services/auth.service";
import type { SignupPayload } from "@/types/auth";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] =
  useState<SignupPayload>({
    name: "",
    email: "",
    password: "",
    role: "founder",
  });

  const [loading, setLoading] = useState(false);

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
      alert("Invalid email address");
      return;
    }

    try {
      setLoading(true);

      const response = await signupUser(formData);

      localStorage.setItem(
        "accessToken",
        response.accessToken
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );

      const role = response.user.role;

      if (role?.toLowerCase() === "founder") {
        router.push("/onboarding/founder")
      } else if (
        role?.toLowerCase() === "advisor"
      ) {
        router.push("/onboarding/advisor")
      } else if (
        role?.toLowerCase() === "investor"
      ) {
        router.push("/onboarding/investor")
      } else {
        alert("Invalid role")
      }
      
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      } else {
        alert("Signup failed")
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50 flex items-center justify-center px-6 py-10 relative overflow-hidden">
      {/* BLURS */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-indigo-200/40 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-fuchsia-200/30 blur-3xl rounded-full" />

      {/* CARD */}
      <div className="relative w-full max-w-md rounded-[32px] border border-white/40 bg-white/80 backdrop-blur-2xl p-8 sm:p-10 shadow-[0_25px_80px_rgba(99,102,241,0.15)]">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white flex items-center justify-center text-xl font-black shadow-xl shadow-indigo-200">
            S
          </div>

          <div>
            <h1 className="text-lg font-black text-slate-900">
              Startup Ka Mall
            </h1>

            <p className="text-sm text-slate-500">
              Founder Ecosystem
            </p>
          </div>
        </Link>

        {/* TOP */}
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Create Account
          </h1>

          <p className="mt-3 text-slate-500 leading-relaxed">
            Join the SKM startup ecosystem platform and start
            building your future.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSignup}
          className="space-y-5 mt-10"
        >
          {/* NAME */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full h-14 px-5 rounded-2xl border border-slate-200 bg-white/90 outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full h-14 px-5 rounded-2xl border border-slate-200 bg-white/90 outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-slate-700">
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
              className="w-full h-14 px-5 rounded-2xl border border-slate-200 bg-white/90 outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition"
            />
          </div>

          {/* ROLE */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-slate-700">
              Select Role
            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full h-14 px-5 rounded-2xl border border-slate-200 bg-white/90 outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition"
            >
              <option value="founder">
                Founder
              </option>

              <option value="advisor">
                Advisor
              </option>

              <option value="investor">
                Investor
              </option>

            </select>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-14 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white font-bold hover:scale-[1.01] transition shadow-xl shadow-indigo-200 disabled:opacity-70"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>
        </form>

        {/* LOGIN */}
        <p className="mt-8 text-center text-slate-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-700 transition"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}