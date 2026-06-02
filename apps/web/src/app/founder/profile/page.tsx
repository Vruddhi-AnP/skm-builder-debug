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

        {/* PROFILE COMPLETION */}
        <section className="rounded-[32px] border border-[#F4C542] bg-[#FFF8E7] p-6 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#9A6A00]">
                Profile Completion
              </p>

              <h2 className="mt-2 text-4xl font-black text-[#16214A]">
                78%
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-7 text-[#6B7280]">
                Complete your founder profile to improve advisor
                recommendations, startup visibility and investor
                readiness.
              </p>
            </div>

            <div className="rounded-2xl border border-[#F4C542]/40 bg-white/70 p-5">
              <p className="text-sm font-semibold text-[#16214A]">
                Remaining Tasks
              </p>

              <ul className="mt-3 space-y-2 text-sm text-[#475569]">
                <li>• Founder Bio</li>
                <li>• Startup Website</li>
                <li>• Pitch Deck Upload</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROFILE + STARTUP PREVIEW */}
        <section className="grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <ProfileForm />
          </div>

          <div>
            <ProfileStartupCard />
          </div>
        </section>

        {/* SECURITY */}
        <ProfileSecurity />

        {/* FOUNDER WORKSPACE */}
        <section className="rounded-[32px] border border-[#E8EDF5] bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}
            <div>
              <h2 className="text-2xl font-black text-[#16214A]">
                Founder Workspace
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#64748B]">
                Manage your founder identity, startup visibility,
                subscription access and platform preferences.
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
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#E8EDF5] bg-white px-5 text-sm font-semibold text-[#16214A] transition hover:bg-[#F8FAFC]">
                <CreditCard className="h-4 w-4" />
                Billing
              </button>

              {/* SETTINGS */}
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#E8EDF5] bg-white px-5 text-sm font-semibold text-[#16214A] transition hover:bg-[#F8FAFC]">
                <Settings className="h-4 w-4" />
                Settings
              </button>

              {/* SIGN OUT */}
              <button
                onClick={handleLogout}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-red-100 bg-red-50 px-5 text-sm font-semibold text-red-600 transition hover:bg-red-100"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}