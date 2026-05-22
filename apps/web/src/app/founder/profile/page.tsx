"use client";

import ProfileForm from "@/components/founder/profile/profile-form";
import ProfileHero from "@/components/founder/profile/profile-hero";
import ProfileSecurity from "@/components/founder/profile/profile-security";
import ProfileStartupCard from "@/components/founder/profile/profile-startup-card";

export default function FounderProfilePage() {
  return (
    <main className="min-h-screen bg-[#f8fbff]">

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

        {/* HERO */}
        <ProfileHero />

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