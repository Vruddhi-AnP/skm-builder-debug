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
<section className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h2 className="text-xl font-black text-[#16214A]">
        Your Founder Profile
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Keep your profile updated to improve advisor matching and investor visibility.
      </p>
    </div>
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
      Profile Active
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