"use client"

import Link from "next/link"

import {
  ArrowRight,
  CheckCircle2,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react"

export default function InvestorSuccessPage() {
  return (
    <div className="min-h-screen bg-[#f6f8fc] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl">
        <div className="rounded-[40px] border border-[#e8edf5] bg-white p-8 lg:p-12">
          {/* ICON */}
          <div className="h-20 w-20 rounded-[28px] bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white shadow-lg shadow-violet-200">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          {/* CONTENT */}
          <div className="mt-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">
              <Sparkles className="w-4 h-4 text-violet-600" />

              <span className="text-sm font-semibold text-violet-700">
                Investor Profile Completed
              </span>
            </div>

            <h1 className="mt-6 text-4xl lg:text-5xl font-bold tracking-tight text-[#0f172a] leading-[1.1]">
              Welcome To Startup Ka Mall
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-500">
              Your investor onboarding is complete. You
              can now discover curated startup investment
              opportunities, connect with founders and
              explore ecosystem growth opportunities.
            </p>
          </div>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="rounded-[28px] border border-[#edf1f7] bg-[#fafbff] p-6">
              <div className="h-12 w-12 rounded-2xl bg-violet-100 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-violet-600" />
              </div>

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                500+
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Verified Startups
              </p>
            </div>

            <div className="rounded-[28px] border border-[#edf1f7] bg-[#fafbff] p-6">
              <div className="h-12 w-12 rounded-2xl bg-fuchsia-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-fuchsia-600" />
              </div>

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                120+
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Active Investors
              </p>
            </div>

            <div className="rounded-[28px] border border-[#edf1f7] bg-[#fafbff] p-6">
              <div className="h-12 w-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                ₹50Cr+
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Ecosystem Funding
              </p>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/onboarding/investor-preferences"
              className="h-12 px-6 rounded-2xl border border-[#e8edf5] bg-white text-sm font-semibold text-[#0f172a] flex items-center justify-center"
            >
              Back
            </Link>

            <Link
              href="/investor/dashboard"
              className="h-12 px-6 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              Go To Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}