"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import InvestorLayout from "@/components/investor/InvestorLayout";

import {
  Bookmark,
  ChevronRight,
  Globe,
  MapPin,
  Rocket,
  Sparkles,
  Star,
  Trash2,
  TrendingUp,
  Users,
} from "lucide-react"

const savedStartupsData = [
  {
    id: 1,
    name: "FinVerse AI",
    category: "FinTech",
    stage: "Seed Stage",
    location: "Mumbai, India",
    match: "96%",
    traction: "12K+ Users",
    description:
      "AI-powered financial infrastructure helping SMEs automate capital operations.",
  },
  {
    id: 2,
    name: "HealthSync",
    category: "HealthTech",
    stage: "Pre-Series A",
    location: "Bangalore, India",
    match: "92%",
    traction: "150+ Clinics",
    description:
      "Digital healthcare ecosystem improving patient engagement and hospital workflows.",
  },
  {
    id: 3,
    name: "GreenByte",
    category: "ClimateTech",
    stage: "MVP Ready",
    location: "Delhi, India",
    match: "89%",
    traction: "40+ Enterprises",
    description:
      "Sustainable energy optimization platform for industrial operations.",
  },
]

export default function InvestorSavedPage() {

  const [savedStartups, setSavedStartups] =
    useState(savedStartupsData)

  const [selectedCategory, setSelectedCategory] =
    useState("All")

  const categories = [
    "All",
    "FinTech",
    "HealthTech",
    "ClimateTech",
  ]

  const filteredStartups = useMemo(() => {
    if (selectedCategory === "All")
      return savedStartups

    return savedStartups.filter(
      (startup) =>
        startup.category === selectedCategory
    )
  }, [selectedCategory, savedStartups])

  const removeSavedStartup = (id: number) => {
    setSavedStartups((prev) =>
      prev.filter((startup) => startup.id !== id)
    )
  }

  return (
  <InvestorLayout
    title="Saved Startups"
    subtitle="Manage bookmarked investment opportunities"
  >
          {/* HERO */}
          <section className="rounded-[36px] border border-[#e8edf5] bg-[#F7F4EE]/95 p-6 lg:p-8">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">
                  <Sparkles className="w-4 h-4 text-violet-600" />

                  <span className="text-sm font-semibold text-violet-700">
                    Investor Watchlist
                  </span>
                </div>

                <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-[#0f172a]">
                  Saved Startups
                </h2>

                <p className="mt-5 text-base leading-relaxed text-gray-500">
                  Keep track of promising startups, compare opportunities, and move investment prospects into your active pipeline.                </p>
              </div>

              <Link
                href="/investor/discover"
                className="h-12 px-5 rounded-2xl bg-linear-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                <Rocket className="w-4 h-4" />
                Discover Startups
              </Link>
            </div>
          </section>

          {/* FILTERS */}
          <section className="mt-7 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`h-11 px-5 rounded-2xl text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-violet-500 text-white"
                    : "border border-[#e8edf5] bg-[#F7F4EE]/95 text-gray-700 hover:bg-[#fafafa]"
                }`}
              >
                {category}
              </button>
            ))}
          </section>

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-[30px] border border-[#e8edf5] bg-[#F7F4EE]/95 p-6">
              <Bookmark className="w-6 h-6 text-violet-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                {savedStartups.length}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Saved Startups
              </p>
            </div>

            <div className="rounded-[30px] border border-border bg-card p-6 shadow-sm">
              <Users className="w-6 h-6 text-fuchsia-500" />

              <h3 className="mt-5 text-3xl font-black text-foreground">
                92%
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Match Accuracy
              </p>
            </div>

            <div className="rounded-[30px] border border-[#e8edf5] bg-[#F7F4EE]/95 p-6">
              <TrendingUp className="w-6 h-6 text-emerald-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                2
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Ready To Review
              </p>
            </div>
          </section>

          {/* STARTUPS */}
          <section className="mt-8 space-y-5">
            {filteredStartups.map((startup) => (
              <div
                key={startup.id}
                className="rounded-[32px] border border-[#e8edf5] bg-[#F7F4EE]/95 p-6 hover:shadow-sm transition"
              >
                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                  {/* LEFT */}
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl font-bold text-[#0f172a]">
                        {startup.name}
                      </h3>

                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {startup.match} Match
                      </span>

                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        Readiness 82/100
                      </span>

                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        {startup.category}
                      </span>

                      <span>•</span>

                      <span>{startup.stage}</span>

                      <span>•</span>

                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {startup.location}
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-gray-500 max-w-3xl">
                      {startup.description}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f6f8fc] px-4 py-2">
                      <TrendingUp className="w-4 h-4 text-violet-600" />

                      <span className="text-sm font-semibold text-[#0f172a]">
                        {startup.traction}
                      </span>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() =>
                        removeSavedStartup(
                          startup.id
                        )
                      }
                      className="h-11 px-5 rounded-2xl border border-red-200 bg-red-50 text-red-600 text-sm font-semibold hover:bg-red-100 transition flex items-center gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>

                    <button
                      className="h-11 px-5 rounded-2xl bg-primary text-primary-foreground text-sm font-semibold"
                    >
                      Show Interest
                    </button>

                    <Link
                      href={`/investor/startup/${startup.id}`}
                      className="h-11 px-5 rounded-2xl border border-[#e8edf5] bg-[#F7F4EE]/95 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center justify-center"
                    >
                      View Startup
                    </Link>

                    <Link
                      href={`/investor/startup/${startup.id}`}
                      className="h-11 px-4 rounded-2xl border border-[#e8edf5] bg-[#F7F4EE]/95 flex items-center justify-center hover:bg-[#fafafa] transition"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {filteredStartups.length === 0 && (
              <div className="rounded-[32px] border border-dashed border-[#dbe2ea] bg-[#F7F4EE]/95 p-16 text-center">
                <Star className="w-12 h-12 text-violet-500 mx-auto" />

                <h3 className="mt-5 text-2xl font-bold text-[#0f172a]">
                  No saved startups
                </h3>

                <p className="mt-3 text-sm text-gray-500">
                  Browse startups and save the ones you want to review later.
                </p>

                <Link
                  href="/investor/discover"
                  className="mt-6 inline-flex h-12 px-6 rounded-2xl bg-linear-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold items-center justify-center"
                >
                  Explore Startups
                </Link>
              </div>
            )}
          </section>
  </InvestorLayout>
)
}