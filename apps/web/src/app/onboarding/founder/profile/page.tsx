"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import Image from "next/image";

import {
  Briefcase,
  LinkIcon,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  User,
} from "lucide-react";

import { useLocalUser } from "@/hooks/useLocalUser";
import {
  saveFounderOnboarding,
  getFounderOnboarding,
} from "@/lib/founder-onboarding";

const founderRoles = [
  "Solo Founder",
  "Technical Founder",
  "Business Founder",
  "Student Founder",
  "Serial Entrepreneur",
];

export default function FounderProfilePage() {
  const router = useRouter();

  const user = useLocalUser();

const [selectedRole, setSelectedRole] = useState(() => {
  const saved = getFounderOnboarding();
  return saved.founderRole ?? "Solo Founder";
});

const [formData, setFormData] = useState(() => {
  const saved = getFounderOnboarding();
  return {
    fullName: saved.fullName ?? "",
    email: saved.email ?? user?.email ?? "",
    phone: saved.phone ?? "",
    location: saved.location ?? "",
    linkedin: saved.linkedin ?? "",
    experience: saved.experience ?? "",
    bio: saved.bio ?? "",
    founderGoal: saved.founderGoal ?? "",
  };
});

  const handleContinue = () => {
  saveFounderOnboarding({
    ...formData,
    founderRole: selectedRole,
  });
  router.push("/onboarding/founder/startup");
};

  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto max-w-5xl">
        {/* TOP BAR */}
        <div className="mb-10 flex items-center justify-between">
          <Link
  href="/"
  className="flex items-center gap-4"
>
  <Image
    src="/logo.png"
    alt="Startup Ka Mall"
    width={190}
    height={60}
    priority
    className="h-auto w-42.5 object-contain sm:w-47.5"
  />

  <div>
    <p className="text-sm text-slate-500">
      Startup Ecosystem
    </p>
  </div>
</Link>

          <div className="hidden items-center gap-3 rounded-full border border-primary/10 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary sm:flex">
            Step 1 of 4
          </div>
        </div>

        {/* HERO */}
        <div className="mb-8 rounded-[36px] border border-border bg-card p-6 shadow-sm lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            {/* LEFT */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-primary" />

                  <span className="text-sm font-semibold text-primary">
                    Founder Onboarding
                  </span>
                </div>
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-foreground lg:text-5xl">
                Setup Your Founder Profile
              </h1>

              <p className="mt-4 max-w-2xl text-base text-muted-foreground">
                Build your founder identity and personalize
                your startup-building ecosystem experience.
              </p>
            </div>

            {/* RIGHT */}
            <div>
              {/* SECURITY */}
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-6 py-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />

                <p className="text-xs font-medium text-emerald-800">
                  Secure founder onboarding & encrypted workflows
                </p>
              </div>

              {/* STEP */}
              <div className="rounded-3xl border border-border bg-background px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Current Step
                </p>

                <h3 className="mt-2 text-xl font-black text-foreground">
                  Founder Profile
                </h3>
              </div>
            </div>
          </div>

          {/* PROGRESS */}
          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">
                Onboarding Progress
              </p>

              <span className="text-sm font-bold text-primary">
                25%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-1/4 rounded-full bg-primary" />
            </div>
          </div>

          {/* STEPS */}
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              "Founder Profile",
              "Startup Profile",
              "Programs",
              "Complete",
            ].map((step, index) => (
              <div
                key={step}
                className={`rounded-2xl border p-4 ${
                  index === 0
                    ? "border-primary bg-primary/5"
                    : "border-border bg-background"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${
                      index === 0
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {step}
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Builder workflow step
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className="rounded-[36px] border border-border bg-card p-6 shadow-sm lg:p-8">
          {/* HEADER */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground">
              Founder Details
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Share your founder identity and experience
              to personalize advisor recommendations,
              startup workflows and ecosystem access.
            </p>
          </div>

          {/* FORM GRID */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* FULL NAME */}
            <div>
              <label className="text-sm font-semibold text-foreground">
                Full Name
              </label>

              <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-border bg-background px-4 transition focus-within:border-primary/40 focus-within:ring-4 focus-within:ring-primary/10">
                <User className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fullName: e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-semibold text-foreground">
                Email Address
              </label>

              <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-border bg-background px-4 transition focus-within:border-primary/40 focus-within:ring-4 focus-within:ring-primary/10">
                <Mail className="h-5 w-5 text-muted-foreground" />

                <input
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm font-semibold text-foreground">
                Phone Number
              </label>

              <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-border bg-background px-4">
                <input
                  type="text"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* LOCATION */}
            <div>
              <label className="text-sm font-semibold text-foreground">
                Location
              </label>

              <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-border bg-background px-4">
                <MapPin className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  placeholder="Mumbai, India"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location: e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>
          </div>

          {/* ROLE */}
          <div className="mt-8">
            <label className="text-sm font-semibold text-foreground">
              Founder Role
            </label>

            <div className="mt-4 flex flex-wrap gap-3">
              {founderRoles.map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() =>
                    setSelectedRole(role)
                  }
                  className={`h-11 rounded-2xl px-5 text-sm font-semibold transition ${
                    selectedRole === role
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* EXPERIENCE + LINKEDIN */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* EXPERIENCE */}
            <div>
              <label className="text-sm font-semibold text-foreground">
                Startup Experience
              </label>

              <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-border bg-background px-4">
                <Briefcase className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  placeholder="First-time founder"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      experience: e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* LINKEDIN */}
            <div>
              <label className="text-sm font-semibold text-foreground">
                LinkedIn Profile
              </label>

              <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-border bg-background px-4">
                <LinkIcon className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  placeholder="LinkedIn profile URL"
                  value={formData.linkedin}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      linkedin: e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>
          </div>

          {/* GOAL */}
          <div className="mt-8">
            <label className="text-sm font-semibold text-foreground">
              Founder Goal
            </label>

            <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-border bg-background px-4">
              <Target className="h-5 w-5 text-muted-foreground" />

              <input
                type="text"
                placeholder="Raise funding, build MVP, scale startup..."
                value={formData.founderGoal}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    founderGoal: e.target.value,
                  })
                }
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* BIO */}
          <div className="mt-8">
            <label className="text-sm font-semibold text-foreground">
              Founder Bio
            </label>

            <textarea
              rows={5}
              placeholder="Tell us about your founder journey..."
              value={formData.bio}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  bio: e.target.value,
                })
              }
              className="mt-3 w-full resize-none rounded-[28px] border border-border bg-background px-5 py-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
            />
          </div>

          {/* INFO CARD */}
          <div className="mt-8 rounded-[28px] border border-primary/20 bg-primary/5 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-lg font-black text-foreground">
                  Founder Personalization
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Your founder profile helps us personalize
                  startup recommendations, advisor matching,
                  investor readiness insights and execution
                  workflows across the ecosystem.
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-background text-xl font-black text-primary shadow-sm">
                01
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-background px-6 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleContinue}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Continue

            </button>
          </div>
        </div>
      </div>
    </div>
  );
}