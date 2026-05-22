"use client";

import { useRouter } from "next/navigation";

import {
  ArrowRight,
  Check,
  Sparkles,
  Users2,
  WalletCards,
} from "lucide-react";

const advisorJourney = [
  {
    id: "1",
    title: "Discover Startup Founders",
    description:
      "Explore founder profiles, startup ideas and high-potential startups seeking mentorship.",
  },

  {
    id: "2",
    title: "Accept Advisory Requests",
    description:
      "Manage consultation requests, mentorship sessions and founder collaborations.",
  },

  {
    id: "3",
    title: "Build Your Advisor Presence",
    description:
      "Showcase your expertise, credibility and startup impact across the ecosystem.",
  },
];

export default function AdvisorSuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#eef2ff,white_40%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_80px_rgba(99,102,241,0.12)] backdrop-blur-xl sm:p-10 lg:p-14">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-emerald-100 shadow-[0_10px_40px_rgba(16,185,129,0.18)]">
            <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-2xl" />

            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg">
              <Check className="h-10 w-10" />
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="mt-8 flex justify-center">
          <div className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Advisor Onboarding Completed
          </div>
        </div>

        {/* Heading */}
        <div className="mt-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
            Welcome to the
          </h1>

          <h2 className="mt-4 bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
            Advisor Ecosystem
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-500">
            Your advisor profile has been successfully created. You can
            now connect with startup founders, provide mentorship and
            contribute to startup growth across the platform.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-[1.8rem] border border-slate-100 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
              <Sparkles className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Advisor Profile
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Setup Completed
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-slate-100 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
              <Users2 className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Founder Access
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Connections Enabled
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-slate-100 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <WalletCards className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Advisory Setup
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Pricing Configured
            </p>
          </div>
        </div>

        {/* Journey */}
        <div className="mt-12 rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
          <h3 className="text-center text-2xl font-bold text-slate-800">
            Your Advisor Journey Starts Here
          </h3>

          <div className="mt-10 space-y-8">
            {advisorJourney.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-5"
              >
                {/* Number */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-sm font-bold text-white shadow-lg">
                  {item.id}
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-800">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={() =>
              router.push("/onboarding/advisor/pricing")
            }
            className="inline-flex h-14 items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
          >
            Previous
          </button>

          <button
            onClick={() =>
              router.push("/advisor/dashboard")
            }
            className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)] transition-all hover:scale-[1.02]"
          >
            Continue to Dashboard

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}