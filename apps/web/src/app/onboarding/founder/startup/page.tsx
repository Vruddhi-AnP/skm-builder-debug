"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import OnboardingLayout from "@/components/onboarding/OnboardingLayout";

const onboardingSteps = [
  {
    title: "Founder Profile",
    description: "Founder identity & experience",
  },
  {
    title: "Startup Profile",
    description: "Startup information & stage",
  },
  {
    title: "Programs",
    description: "Packages & ecosystem support",
  },
  {
    title: "Complete",
    description: "Access founder workspace",
  },
];

export default function StartupProfilePage() {
  const router = useRouter();

  return (
    <OnboardingLayout
      title="Setup Your Startup Profile"
      subtitle="Tell us about your startup, growth stage and execution journey to personalize recommendations, programs and investor readiness."
      currentStep={2}
      steps={onboardingSteps}
    >
      <div className="space-y-10">
        {/* TAGS */}
        <div className="flex flex-wrap gap-3">
          <div className="rounded-full border border-primary/10 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Startup Identity
          </div>

          <div className="rounded-full border border-sky-100 bg-sky-50 px-5 py-2 text-sm font-semibold text-sky-700">
            Growth Journey
          </div>

          <div className="rounded-full border border-border/60 bg-muted px-5 py-2 text-sm font-semibold text-slate-600">
            Investor Readiness
          </div>
        </div>

        {/* HEADER */}
        <div>
          <h2 className="text-2xl font-black tracking-tight text-slate-800 sm:text-3xl">
            Startup Details
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Share your startup information and current
            growth stage to personalize your founder
            dashboard and ecosystem experience.
          </p>
        </div>

        {/* FORM */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* STARTUP NAME */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-700">
              Startup Name
            </label>

            <input
              type="text"
              placeholder="Enter your startup name"
              className="h-14 w-full rounded-2xl border border-border/60 bg-white px-5 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
            />
          </div>

          {/* INDUSTRY */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-700">
              Industry
            </label>

            <select className="h-14 w-full rounded-2xl border border-border/60 bg-white px-5 text-sm text-slate-700 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10">
              <option>Select Industry</option>

              <option>SaaS</option>

              <option>Fintech</option>

              <option>AI</option>

              <option>Healthcare</option>

              <option>EdTech</option>

              <option>E-commerce</option>
            </select>
          </div>

          {/* STAGE */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-700">
              Startup Stage
            </label>

            <select className="h-14 w-full rounded-2xl border border-border/60 bg-white px-5 text-sm text-slate-700 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10">
              <option>Select Startup Stage</option>

              <option>Idea Stage</option>

              <option>MVP Stage</option>

              <option>Early Revenue</option>

              <option>Growth Stage</option>

              <option>Scaling Stage</option>
            </select>
          </div>

          {/* TEAM SIZE */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-700">
              Team Size
            </label>

            <select className="h-14 w-full rounded-2xl border border-border/60 bg-white px-5 text-sm text-slate-700 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10">
              <option>Select Team Size</option>

              <option>1 - 5</option>

              <option>6 - 10</option>

              <option>11 - 25</option>

              <option>25+</option>
            </select>
          </div>

          {/* FUNDING */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-700">
              Funding Stage
            </label>

            <select className="h-14 w-full rounded-2xl border border-border/60 bg-white px-5 text-sm text-slate-700 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10">
              <option>Select Funding Stage</option>

              <option>Bootstrapped</option>

              <option>Pre-Seed</option>

              <option>Seed</option>

              <option>Series A</option>

              <option>Series B+</option>
            </select>
          </div>

          {/* WEBSITE */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-700">
              Website
            </label>

            <input
              type="text"
              placeholder="https://yourstartup.com"
              className="h-14 w-full rounded-2xl border border-border/60 bg-white px-5 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
            />
          </div>

          {/* TRACTION */}
          <div className="md:col-span-2">
            <label className="mb-3 block text-sm font-semibold text-slate-700">
              Current Traction
            </label>

            <textarea
              rows={5}
              placeholder="Describe users, pilots, revenue, traction or startup progress..."
              className="w-full rounded-3xl border border-border/60 bg-white px-5 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>

        {/* INFO CARD */}
        <div className="rounded-3xl border border-primary/10 bg-primary/5 p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-lg font-bold text-slate-800">
                Startup Personalization
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Your startup profile helps personalize
                ecosystem recommendations, investor
                readiness scoring, founder workflows and
                advisor matching inside the platform.
              </p>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-xl font-black text-primary shadow-sm">
              02
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          {/* PREVIOUS */}
          <button
            onClick={() =>
              router.push(
                "/onboarding/founder/profile"
              )
            }
            className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-border/60 bg-white px-8 text-sm font-semibold text-slate-700 transition hover:bg-muted"
          >

            Previous
          </button>

          {/* NEXT */}
          <button
            onClick={() =>
              router.push(
                "/onboarding/founder/package"
              )
            }
            className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-8 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Continue to Packages

          </button>
        </div>
      </div>
    </OnboardingLayout>
  );
}