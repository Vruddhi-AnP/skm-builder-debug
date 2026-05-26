"use client";

import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import OnboardingLayout from "@/components/onboarding/OnboardingLayout";

const onboardingSteps = [
  {
    title: "Founder Profile",
    description:
      "Founder identity & experience",
  },

  {
    title: "Startup Profile",
    description:
      "Startup information & stage",
  },

  {
    title: "Programs",
    description:
      "Packages & ecosystem support",
  },

  {
    title: "Complete",
    description:
      "Access founder workspace",
  },
];

export default function FounderProfilePage() {
  const router = useRouter();

  return (
    <OnboardingLayout
      title="Setup Your Founder Profile"
      subtitle="Tell us about yourself and your founder journey to personalize your startup-building experience inside Startup Ka Mall."
      currentStep={1}
      steps={onboardingSteps}
    >
      <div className="space-y-10">

        {/* TAGS */}
        <div className="flex flex-wrap gap-3">

          <div className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Founder Identity
          </div>

          <div className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Startup Journey
          </div>

          <div className="rounded-full border border-border bg-muted px-5 py-2 text-sm font-semibold text-muted-foreground">
            Ecosystem Personalization
          </div>

        </div>

        {/* HEADER */}
        <div>

          <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            Founder Details
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Share your experience, background and
            startup goals to personalize your founder
            workspace.
          </p>

        </div>

        {/* FORM */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* EXPERIENCE */}
          <div>

            <label className="mb-3 block text-sm font-semibold text-foreground">
              Experience Level
            </label>

            <select className="h-14 w-full rounded-2xl border border-border bg-card px-5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10">

              <option>
                Select Experience Level
              </option>

              <option>
                Student Founder
              </option>

              <option>
                First-time Founder
              </option>

              <option>
                Serial Entrepreneur
              </option>

            </select>
          </div>

          {/* DOMAIN */}
          <div>

            <label className="mb-3 block text-sm font-semibold text-foreground">
              Domain Expertise
            </label>

            <input
              type="text"
              placeholder="Ex: Fintech, SaaS, AI, Healthcare"
              className="h-14 w-full rounded-2xl border border-border bg-card px-5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
            />

          </div>

          {/* LOCATION */}
          <div>

            <label className="mb-3 block text-sm font-semibold text-foreground">
              Location
            </label>

            <input
              type="text"
              placeholder="City, State, Country"
              className="h-14 w-full rounded-2xl border border-border bg-card px-5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
            />

          </div>

          {/* LINKEDIN */}
          <div>

            <label className="mb-3 block text-sm font-semibold text-foreground">
              LinkedIn URL
            </label>

            <input
              type="text"
              placeholder="https://linkedin.com/in/yourprofile"
              className="h-14 w-full rounded-2xl border border-border bg-card px-5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
            />

          </div>

          {/* GOAL */}
          <div className="md:col-span-2">

            <label className="mb-3 block text-sm font-semibold text-foreground">
              Founder Goal
            </label>

            <select className="h-14 w-full rounded-2xl border border-border bg-card px-5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10">

              <option>
                Select Founder Goal
              </option>

              <option>
                Validate Startup Idea
              </option>

              <option>
                Build MVP
              </option>

              <option>
                Raise Funding
              </option>

              <option>
                Scale Startup
              </option>

            </select>
          </div>
        </div>

        {/* INFO CARD */}
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6">

          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

            <div className="max-w-2xl">

              <h3 className="text-lg font-black text-foreground">
                Founder Personalization
              </h3>

              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Your founder profile helps us
                personalize startup recommendations,
                advisor matching, investor readiness
                insights and execution workflows.
              </p>

            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-card text-xl font-black text-primary shadow-sm">
              01
            </div>

          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">

          {/* PREVIOUS */}
          <button className="inline-flex h-14 items-center justify-center rounded-2xl border border-border bg-card px-8 text-sm font-semibold text-foreground transition hover:bg-muted">

            <ArrowLeft className="mr-2 h-4 w-4" />

            Previous

          </button>

          {/* NEXT */}
          <button
            onClick={() =>
              router.push(
                "/onboarding/founder/startup"
              )
            }
            className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-8 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Continue to Startup Profile

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

          </button>
        </div>
      </div>
    </OnboardingLayout>
  );
}