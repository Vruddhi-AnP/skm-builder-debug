"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function StartupProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#eef2ff,white_40%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_80px_rgba(99,102,241,0.12)] backdrop-blur-xl sm:p-10 lg:p-14">
        {/* TOP */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT */}
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full bg-violet-100 px-4 py-1 text-sm font-semibold text-violet-700">
              Startup Onboarding
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Setup Your Startup Profile
            </h1>

            <p className="mt-5 text-base leading-8 text-slate-500">
              Tell us about your startup, current stage and growth
              journey to personalize recommendations, programs and
              investor readiness.
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
                Startup Identity
              </div>

              <div className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
                Growth Journey
              </div>
            </div>
          </div>

          {/* RIGHT PROGRESS */}
          <div className="w-full max-w-sm rounded-[2rem] border border-violet-200 bg-white p-6 shadow-[0_10px_40px_rgba(99,102,241,0.08)]">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">
                Progress
              </span>

              <span className="text-sm font-bold text-violet-600">
                Step 2/4
              </span>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-2/4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Startup profile setup in progress
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="mt-14">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Startup Details
            </h2>

            <p className="mt-3 text-base text-slate-500">
              Share your startup information and current growth stage
            </p>
          </div>

          {/* Inputs */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Startup Name */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Startup Name
              </label>

              <input
                type="text"
                placeholder="Enter your startup name"
                className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </div>

            {/* Industry */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Industry
              </label>

              <select className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm text-slate-700 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100">
                <option>Select Industry</option>
                <option>SaaS</option>
                <option>Fintech</option>
                <option>AI</option>
                <option>Healthcare</option>
                <option>EdTech</option>
              </select>
            </div>

            {/* Startup Stage */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Startup Stage
              </label>

              <select className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm text-slate-700 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100">
                <option>Select Startup Stage</option>
                <option>Idea Stage</option>
                <option>MVP Stage</option>
                <option>Early Revenue</option>
                <option>Scaling</option>
              </select>
            </div>

            {/* Team Size */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Team Size
              </label>

              <select className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm text-slate-700 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100">
                <option>Select Team Size</option>
                <option>1 - 5</option>
                <option>6 - 10</option>
                <option>11 - 25</option>
                <option>25+</option>
              </select>
            </div>

            {/* Funding Stage */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Funding Stage
              </label>

              <select className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm text-slate-700 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100">
                <option>Select Funding Stage</option>
                <option>Bootstrapped</option>
                <option>Pre-Seed</option>
                <option>Seed</option>
                <option>Series A</option>
              </select>
            </div>

            {/* Traction */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Current Traction
              </label>

              <input
                type="text"
                placeholder="Users, revenue, pilots, traction etc."
                className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() =>
                router.push("/onboarding/founder/profile")
              }
              className="inline-flex h-14 items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
            >
              Previous
            </button>

            <button
              onClick={() =>
                router.push("/onboarding/founder/package")
              }
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)] transition-all hover:scale-[1.02]"
            >
              Continue to Package Selection

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}