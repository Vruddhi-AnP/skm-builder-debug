"use client";

import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Globe2,
  Languages,
  Video,
} from "lucide-react";

export default function AdvisorAvailabilityPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#eef2ff,white_40%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_80px_rgba(99,102,241,0.12)] backdrop-blur-xl sm:p-10 lg:p-14">
        {/* TOP */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT */}
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full bg-violet-100 px-4 py-1 text-sm font-semibold text-violet-700">
              Advisor Availability
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
              Setup Your Availability
            </h1>

            <p className="mt-5 text-base leading-8 text-slate-500">
              Configure your mentorship schedule, preferred session
              formats and communication preferences for founders.
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
                Session Scheduling
              </div>

              <div className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
                Founder Accessibility
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
                Step 3/5
              </span>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Availability setup in progress
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="mt-14">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Availability Details
            </h2>

            <p className="mt-3 text-base text-slate-500">
              Share your schedule preferences and session setup
            </p>
          </div>

          {/* Inputs */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Weekly Availability */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Weekly Availability
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <CalendarDays className="h-5 w-5 text-slate-400" />

                <select className="h-full w-full bg-transparent px-3 text-sm text-slate-700 outline-none">
                  <option>Select availability</option>
                  <option>1 - 5 Hours / Week</option>
                  <option>5 - 10 Hours / Week</option>
                  <option>10 - 20 Hours / Week</option>
                  <option>20+ Hours / Week</option>
                </select>
              </div>
            </div>

            {/* Preferred Time */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Preferred Time Slots
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <Clock3 className="h-5 w-5 text-slate-400" />

                <select className="h-full w-full bg-transparent px-3 text-sm text-slate-700 outline-none">
                  <option>Select preferred timing</option>
                  <option>Morning Sessions</option>
                  <option>Afternoon Sessions</option>
                  <option>Evening Sessions</option>
                  <option>Flexible Timing</option>
                </select>
              </div>
            </div>

            {/* Session Mode */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Session Mode
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <Video className="h-5 w-5 text-slate-400" />

                <select className="h-full w-full bg-transparent px-3 text-sm text-slate-700 outline-none">
                  <option>Select session mode</option>
                  <option>Virtual Only</option>
                  <option>In-Person Only</option>
                  <option>Hybrid Sessions</option>
                </select>
              </div>
            </div>

            {/* Timezone */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Preferred Timezone
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <Globe2 className="h-5 w-5 text-slate-400" />

                <select className="h-full w-full bg-transparent px-3 text-sm text-slate-700 outline-none">
                  <option>Select timezone</option>
                  <option>IST (India)</option>
                  <option>PST (US Pacific)</option>
                  <option>EST (US Eastern)</option>
                  <option>GMT (Europe)</option>
                </select>
              </div>
            </div>

            {/* Languages */}
            <div className="md:col-span-2">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Languages Spoken
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <Languages className="h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  placeholder="Ex: English, Hindi, Marathi"
                  className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Founder Preferences */}
            <div className="md:col-span-2">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Founder Engagement Preferences
              </label>

              <textarea
                placeholder="Describe how you prefer to mentor founders, session expectations, communication style and collaboration approach..."
                className="min-h-[140px] w-full rounded-[1.8rem] border border-slate-200 bg-white px-5 py-4 text-sm leading-7 outline-none transition-all placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() =>
                router.push("/onboarding/advisor/expertise")
              }
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
            >
              <ArrowLeft className="h-4 w-4" />

              Previous
            </button>

            <button
              onClick={() =>
                router.push("/onboarding/advisor/pricing")
              }
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)] transition-all hover:scale-[1.02]"
            >
              Continue to Pricing

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}