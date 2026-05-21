"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Coins,
  Globe,
  Handshake,
  MapPinned,
  Sparkles,
  Target,
} from "lucide-react"

const investmentStages = [
  "Idea Stage",
  "MVP Ready",
  "Early Revenue",
  "Seed Stage",
  "Pre-Series A",
]

const ticketSizes = [
  "₹5L - ₹10L",
  "₹10L - ₹25L",
  "₹25L - ₹50L",
  "₹50L+",
]

const geographies = [
  "India",
  "Global",
  "Middle East",
  "South East Asia",
]

export default function InvestorPreferencesPage() {
  const router = useRouter()

  const [selectedStages, setSelectedStages] =
    useState<string[]>([
      "Seed Stage",
    ])

  const [selectedTickets, setSelectedTickets] =
    useState<string[]>([
      "₹10L - ₹25L",
    ])

  const [selectedGeographies, setSelectedGeographies] =
    useState<string[]>(["India"])

  const [mentorshipInterest, setMentorshipInterest] =
    useState("Yes")

  const toggleSelection = (
    value: string,
    state: string[],
    setter: React.Dispatch<
      React.SetStateAction<string[]>
    >
  ) => {
    if (state.includes(value)) {
      setter((prev) =>
        prev.filter((item) => item !== value)
      )
    } else {
      setter((prev) => [...prev, value])
    }
  }

  const handleContinue = () => {
    router.push(
      "/onboarding/investor/investor-success"
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
              Investment Preferences
            </span>
          </div>

          <h1 className="mt-6 text-4xl lg:text-5xl font-bold tracking-tight text-[#0f172a] leading-[1.1]">
            Configure Investment Preferences
          </h1>

          <p className="mt-4 text-base text-gray-500 max-w-2xl">
            Setup startup stage, ticket size and
            geography preferences for better matches.
          </p>
        </div>

        <div className="space-y-6">
          {/* STAGES */}
          <div className="rounded-[32px] border border-[#e8edf5] bg-white p-6 lg:p-7">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-violet-50 flex items-center justify-center">
                <Target className="w-6 h-6 text-violet-600" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0f172a]">
                  Preferred Startup Stage
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Select startup maturity stages.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {investmentStages.map((stage) => {
                const active =
                  selectedStages.includes(stage)

                return (
                  <button
                    key={stage}
                    onClick={() =>
                      toggleSelection(
                        stage,
                        selectedStages,
                        setSelectedStages
                      )
                    }
                    className={`h-12 px-5 rounded-2xl text-sm font-semibold transition flex items-center gap-2 ${
                      active
                        ? "bg-violet-500 text-white"
                        : "border border-[#e8edf5] bg-white text-gray-700 hover:bg-[#fafafa]"
                    }`}
                  >
                    {active && (
                      <Check className="w-4 h-4" />
                    )}

                    {stage}
                  </button>
                )
              })}
            </div>
          </div>

          {/* TICKET SIZE */}
          <div className="rounded-[32px] border border-[#e8edf5] bg-white p-6 lg:p-7">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-fuchsia-50 flex items-center justify-center">
                <Coins className="w-6 h-6 text-fuchsia-600" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0f172a]">
                  Investment Ticket Size
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Choose your preferred investment range.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {ticketSizes.map((ticket) => {
                const active =
                  selectedTickets.includes(ticket)

                return (
                  <button
                    key={ticket}
                    onClick={() =>
                      toggleSelection(
                        ticket,
                        selectedTickets,
                        setSelectedTickets
                      )
                    }
                    className={`h-12 px-5 rounded-2xl text-sm font-semibold transition flex items-center gap-2 ${
                      active
                        ? "bg-fuchsia-500 text-white"
                        : "border border-[#e8edf5] bg-white text-gray-700 hover:bg-[#fafafa]"
                    }`}
                  >
                    {active && (
                      <Check className="w-4 h-4" />
                    )}

                    {ticket}
                  </button>
                )
              })}
            </div>
          </div>

          {/* GEOGRAPHY */}
          <div className="rounded-[32px] border border-[#e8edf5] bg-white p-6 lg:p-7">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                <MapPinned className="w-6 h-6 text-emerald-600" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0f172a]">
                  Geography Preferences
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Select startup operating regions.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {geographies.map((geo) => {
                const active =
                  selectedGeographies.includes(geo)

                return (
                  <button
                    key={geo}
                    onClick={() =>
                      toggleSelection(
                        geo,
                        selectedGeographies,
                        setSelectedGeographies
                      )
                    }
                    className={`h-12 px-5 rounded-2xl text-sm font-semibold transition flex items-center gap-2 ${
                      active
                        ? "bg-emerald-500 text-white"
                        : "border border-[#e8edf5] bg-white text-gray-700 hover:bg-[#fafafa]"
                    }`}
                  >
                    {active && (
                      <Check className="w-4 h-4" />
                    )}

                    {geo}
                  </button>
                )
              })}
            </div>
          </div>

          {/* MENTORSHIP */}
          <div className="rounded-[32px] border border-[#e8edf5] bg-white p-6 lg:p-7">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-orange-50 flex items-center justify-center">
                <Handshake className="w-6 h-6 text-orange-500" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0f172a]">
                  Founder Mentorship Interest
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Are you open to mentoring startups?
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {["Yes", "No"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    setMentorshipInterest(item)
                  }
                  className={`h-12 px-6 rounded-2xl text-sm font-semibold transition ${
                    mentorshipInterest === item
                      ? "bg-orange-500 text-white"
                      : "border border-[#e8edf5] bg-white text-gray-700 hover:bg-[#fafafa]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/onboarding/investor-focus"
            className="h-12 px-6 rounded-2xl border border-[#e8edf5] bg-white text-sm font-semibold text-[#0f172a] flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <button
            onClick={handleContinue}
            className="h-12 px-6 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            Complete Setup
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}