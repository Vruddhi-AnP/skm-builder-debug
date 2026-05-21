"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Building2,
  Globe,
  HeartPulse,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react"

const focusAreas = [
  {
    id: "fintech",
    title: "FinTech",
    icon: TrendingUp,
  },
  {
    id: "healthtech",
    title: "HealthTech",
    icon: HeartPulse,
  },
  {
    id: "saas",
    title: "SaaS",
    icon: Globe,
  },
  {
    id: "ai",
    title: "AI & Automation",
    icon: Brain,
  },
  {
    id: "climate",
    title: "ClimateTech",
    icon: ShieldCheck,
  },
  {
    id: "enterprise",
    title: "Enterprise",
    icon: Building2,
  },
  {
    id: "consumer",
    title: "Consumer",
    icon: Rocket,
  },
]

export default function InvestorFocusPage() {
  const router = useRouter()

  const [selectedFocus, setSelectedFocus] =
    useState<string[]>([
      "fintech",
      "ai",
    ])

  const toggleFocus = (id: string) => {
    if (selectedFocus.includes(id)) {
      setSelectedFocus((prev) =>
        prev.filter((item) => item !== id)
      )
    } else {
      setSelectedFocus((prev) => [
        ...prev,
        id,
      ])
    }
  }

  const handleContinue = () => {
    router.push(
      "/onboarding/investor/investor-preferences"
    )
  }

  return (
    <div className="min-h-screen bg-[#f6f8fc] px-4 py-10">
      <div className="max-w-5xl mx-auto">
        {/* TOP */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">
            <Sparkles className="w-4 h-4 text-violet-600" />

            <span className="text-sm font-semibold text-violet-700">
              Investment Focus
            </span>
          </div>

          <h1 className="mt-6 text-4xl lg:text-5xl font-bold tracking-tight text-[#0f172a] leading-[1.1]">
            Select Investment Interests
          </h1>

          <p className="mt-4 text-base text-gray-500 max-w-2xl">
            Choose industries and startup categories
            you are interested in investing in.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {focusAreas.map((item) => {
            const Icon = item.icon

            const active =
              selectedFocus.includes(item.id)

            return (
              <button
                key={item.id}
                onClick={() =>
                  toggleFocus(item.id)
                }
                className={`rounded-[32px] border p-6 text-left transition-all duration-200 ${
                  active
                    ? "border-violet-500 bg-violet-50"
                    : "border-[#e8edf5] bg-white hover:border-violet-200"
                }`}
              >
                <div
                  className={`h-14 w-14 rounded-2xl flex items-center justify-center ${
                    active
                      ? "bg-violet-500 text-white"
                      : "bg-[#f6f8fc] text-violet-600"
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#0f172a]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  Explore curated startup opportunities
                  in {item.title} ecosystem.
                </p>

                <div
                  className={`mt-6 h-2 rounded-full overflow-hidden ${
                    active
                      ? "bg-violet-200"
                      : "bg-[#eef2f7]"
                  }`}
                >
                  <div
                    className={`h-full rounded-full ${
                      active
                        ? "w-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                        : "w-0"
                    }`}
                  />
                </div>
              </button>
            )
          })}
        </div>

        {/* ACTIONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/onboarding/investor-profile"
            className="h-12 px-6 rounded-2xl border border-[#e8edf5] bg-white text-sm font-semibold text-[#0f172a] flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <button
            onClick={handleContinue}
            className="h-12 px-6 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}