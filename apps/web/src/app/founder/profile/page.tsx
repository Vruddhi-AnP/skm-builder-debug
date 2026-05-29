"use client";

import { useRouter } from "next/navigation";

import {
  Crown,
  CreditCard,
  LogOut,
  Settings,
} from "lucide-react";

import ProfileForm from "@/components/founder/profile/profile-form";
import ProfileHero from "@/components/founder/profile/profile-hero";
import ProfileSecurity from "@/components/founder/profile/profile-security";
import ProfileStartupCard from "@/components/founder/profile/profile-startup-card";

export default function FounderProfilePage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();

    sessionStorage.clear();

    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-[#f8fbff]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* HERO */}
        <ProfileHero />

        {/* QUICK ACTIONS */}
        <section className="rounded-[32px] border border-[#E8EDF5] bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT */}
            <div>
              <h2 className="text-2xl font-black text-[#16214A]">
                Account Controls
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#64748B]">
                Manage founder subscription,
                billing, profile settings and
                startup ecosystem access.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-wrap gap-3">
              {/* UPGRADE */}
              <button
                onClick={() =>
                  router.push(
                    "/onboarding/founder/package"
                  )
                }
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#16214A] px-5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <Crown className="h-4 w-4" />

                Upgrade Plan
              </button>

              {/* BILLING */}
              <button
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#E8EDF5] bg-white px-5 text-sm font-semibold text-[#16214A] transition hover:bg-[#F8FAFC]"
              >
                <CreditCard className="h-4 w-4" />

                Billing
              </button>

              {/* SETTINGS */}
              <button
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#E8EDF5] bg-white px-5 text-sm font-semibold text-[#16214A] transition hover:bg-[#F8FAFC]"
              >
                <Settings className="h-4 w-4" />

                Settings
              </button>

              {/* LOGOUT */}
              <button
                onClick={handleLogout}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-red-100 bg-red-50 px-5 text-sm font-semibold text-red-600 transition hover:bg-red-100"
              >
                <LogOut className="h-4 w-4" />

                Logout
              </button>
            </div>
          </div>
        </section>

        {/* PROFILE FORM */}
        <ProfileForm />

        {/* STARTUP */}
        <ProfileStartupCard />

        {/* SECURITY */}
        <ProfileSecurity />
      </div>
    </main>
  );
}