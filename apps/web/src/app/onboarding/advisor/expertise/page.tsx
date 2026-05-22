"use client";

import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Sparkles,
  Target,
} from "lucide-react";

export default function AdvisorExpertisePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#eef2ff,white_40%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_80px_rgba(99,102,241,0.12)] backdrop-blur-xl sm:p-10 lg:p-14">
        {/* TOP */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT */}
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full bg-violet-100 px-4 py-1 text-sm font-semibold text-violet-700">
              Advisor Expertise
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
              Define Your Expertise
            </h1>

            <p className="mt-5 text-base leading-8 text-slate-500">
              Showcase your advisory strengths, startup experience and
              mentorship focus areas to help founders discover the
              right guidance.
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
                Startup Advisory
              </div>

              <div className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
                Founder Mentorship
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
                Step 2/5
              </span>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Expertise setup in progress
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="mt-14">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Expertise Details
            </h2>

            <p className="mt-3 text-base text-slate-500">
              Share your specialization, industries and mentorship
              capabilities
            </p>
          </div>

          {/* Inputs */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Expertise Areas */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Expertise Areas
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <Sparkles className="h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  placeholder="Ex: Product Strategy, Growth, Fundraising"
                  className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Industries */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Industries
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <BriefcaseBusiness className="h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  placeholder="Ex: SaaS, Fintech, AI, Healthcare"
                  className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Startup Stages */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Startup Stages Supported
              </label>

              <select className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm text-slate-700 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100">
                <option>Select startup stage</option>
                <option>Idea Stage</option>
                <option>MVP Stage</option>
                <option>Early Revenue</option>
                <option>Scaling Stage</option>
              </select>
            </div>

            {/* Mentorship Type */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Mentorship Type
              </label>

              <select className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm text-slate-700 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100">
                <option>Select mentorship type</option>
                <option>1:1 Advisory</option>
                <option>Group Mentorship</option>
                <option>Execution Guidance</option>
                <option>Strategic Consulting</option>
              </select>
            </div>

            {/* Skills */}
            <div className="md:col-span-2">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Key Skills & Strengths
              </label>

              <div className="flex min-h-[120px] rounded-[1.8rem] border border-slate-200 bg-white px-5 py-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <BadgeCheck className="mt-1 h-5 w-5 text-slate-400" />

                <textarea
                  placeholder="Mention your advisory strengths, startup execution skills, founder support areas and operational expertise..."
                  className="min-h-[90px] w-full resize-none bg-transparent px-3 text-sm leading-7 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Advisory Goal */}
            <div className="md:col-span-2">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Advisory Goal
              </label>

              <div className="flex min-h-[120px] rounded-[1.8rem] border border-slate-200 bg-white px-5 py-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <Target className="mt-1 h-5 w-5 text-slate-400" />

                <textarea
                  placeholder="Describe how you want to support founders and what kind of startup impact you want to create..."
                  className="min-h-[90px] w-full resize-none bg-transparent px-3 text-sm leading-7 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() =>
                router.push("/onboarding/advisor/profile")
              }
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
            >
              <ArrowLeft className="h-4 w-4" />

              Previous
            </button>

            <button
              onClick={() =>
                router.push("/onboarding/advisor/availability")
              }
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)] transition-all hover:scale-[1.02]"
            >
              Continue to Availability

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}