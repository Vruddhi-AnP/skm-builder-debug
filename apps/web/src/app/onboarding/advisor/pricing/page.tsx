"use client";

import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  BadgeIndianRupee,
  BriefcaseBusiness,
  CreditCard,
  WalletCards,
} from "lucide-react";

const pricingPlans = [
  {
    title: "Free Mentorship",
    description:
      "Provide free guidance and support to early-stage founders.",
  },

  {
    title: "Paid Sessions",
    description:
      "Charge founders for structured consultation sessions.",
  },

  {
    title: "Monthly Advisory",
    description:
      "Offer long-term startup advisory retainers.",
  },

  {
    title: "Equity Based",
    description:
      "Support startups in exchange for equity opportunities.",
  },
];

export default function AdvisorPricingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#eef2ff,white_40%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_80px_rgba(99,102,241,0.12)] backdrop-blur-xl sm:p-10 lg:p-14">
        {/* TOP */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT */}
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full bg-violet-100 px-4 py-1 text-sm font-semibold text-violet-700">
              Advisor Pricing
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
              Setup Your Advisory Pricing
            </h1>

            <p className="mt-5 text-base leading-8 text-slate-500">
              Configure your mentorship pricing structure, consultation
              preferences and startup engagement model.
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
                Advisory Monetization
              </div>

              <div className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
                Founder Engagement
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
                Step 4/5
              </span>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Pricing setup in progress
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="mt-14">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Pricing & Advisory Setup
            </h2>

            <p className="mt-3 text-base text-slate-500">
              Define how founders can engage and collaborate with you
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pricingPlans.map((item) => (
              <button
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 text-left transition-all hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_10px_30px_rgba(99,102,241,0.12)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg">
                  <WalletCards className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-800">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </button>
            ))}
          </div>

          {/* Inputs */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Session Pricing */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Session Pricing
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <BadgeIndianRupee className="h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  placeholder="Ex: ₹2,000 per session"
                  className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Monthly Advisory */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Monthly Advisory Retainer
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <CreditCard className="h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  placeholder="Ex: ₹25,000 monthly"
                  className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Equity Interest */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Equity Interest
              </label>

              <select className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm text-slate-700 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100">
                <option>Select preference</option>
                <option>Open to Equity Advisory</option>
                <option>Only Paid Advisory</option>
                <option>Flexible Engagement</option>
              </select>
            </div>

            {/* Consultation Type */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Consultation Type
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <BriefcaseBusiness className="h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  placeholder="Ex: Strategy, GTM, Product Scaling"
                  className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Pricing Notes */}
            <div className="md:col-span-2">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Advisory Notes & Expectations
              </label>

              <textarea
                placeholder="Describe your pricing expectations, collaboration style, founder engagement model and any additional mentorship guidelines..."
                className="min-h-[140px] w-full rounded-[1.8rem] border border-slate-200 bg-white px-5 py-4 text-sm leading-7 outline-none transition-all placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() =>
                router.push("/onboarding/advisor/availability")
              }
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
            >
              <ArrowLeft className="h-4 w-4" />

              Previous
            </button>

            <button
              onClick={() =>
                router.push("/onboarding/advisor/success")
              }
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)] transition-all hover:scale-[1.02]"
            >
              Complete Onboarding

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}