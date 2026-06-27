"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import InvestorLayout from "@/components/investor/InvestorLayout";

import {
  CheckCircle2,
  ChevronRight,
  Globe,
  Flame,
  MapPin,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react"

const interestedData = [
  {
    id: 1,
    name: "FinVerse AI",
    category: "FinTech",
    stage: "Seed Stage",
    location: "Mumbai, India",
    status: "Interest Submitted",
    traction: "12K+ Users",
    description:
      "AI-powered financial infrastructure helping SMEs automate capital operations.",
    featured: true,
  },
  {
    id: 2,
    name: "HealthSync",
    category: "HealthTech",
    stage: "Pre-Series A",
    location: "Bangalore, India",
    status: "Meeting Scheduled",
    traction: "150+ Clinics",
    description:
      "Digital healthcare ecosystem improving patient engagement and hospital workflows.",
    featured: false,
  },
]

export default function InvestorInterestedPage() {

  const [selectedFilter, setSelectedFilter] =
    useState("All")

  const filters = [
      "All",
      "Interest Submitted",
      "Under Review",
      "Introduction Approved",
      "Meeting Scheduled",
      "Connected",
    ]

  const filteredData = useMemo(() => {
    if (selectedFilter === "All") {
      return interestedData
    }

    return interestedData.filter(
      (item) => item.status === selectedFilter
    )
  }, [selectedFilter])

  return (
  <InvestorLayout
    title="Interested Startups"
    subtitle="Track startups where you showed investment interest"
  >
        {/* CONTENT */}
          {/* HERO */}
          <section className="rounded-[36px] border border-border bg-card p-6 shadow-sm lg:p-8">
            <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-primary" />

                  <span className="text-sm font-semibold text-primary">
                    Investor Pipeline
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-foreground lg:text-5xl">
                  Investment Pipeline
                </h2>

                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  Track startup introductions, founder responses, meetings, and investment conversations from one place.
                </p>
              </div>

              <Link
                href="/investor/discover"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                <Rocket className="h-4 w-4" />
                Discover More
              </Link>
            </div>
          </section>

          {/* FILTERS */}
          <section className="mt-7 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() =>
                  setSelectedFilter(filter)
                }
                className={`h-11 rounded-2xl px-5 text-sm font-semibold transition ${
                  selectedFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-foreground hover:bg-muted"
                }`}
              >
                {filter}
              </button>
            ))}
          </section>

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-[30px] border border-border bg-card p-6 shadow-sm">
              <Flame className="h-6 w-6 text-primary" />

              <h3 className="mt-5 text-3xl font-black text-foreground">
                24
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Active Interests
              </p>
            </div>

            <div className="rounded-[30px] border border-border bg-card p-6 shadow-sm">
              <Users className="h-6 w-6 text-fuchsia-500" />

              <h3 className="mt-5 text-3xl font-black text-foreground">
                8
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Founder Meetings
              </p>
            </div>

            <div className="rounded-[30px] border border-border bg-card p-6 shadow-sm">
              <TrendingUp className="h-6 w-6 text-emerald-500" />

              <h3 className="mt-5 text-3xl font-black text-foreground">
                3
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Approved Introductions
              </p>
            </div>
          </section>

          {/* LIST */}
          <section className="mt-8 space-y-5">
            {filteredData.map((startup) => (
              <div
                key={startup.id}
                className="rounded-[32px] border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                  {/* LEFT */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-black text-foreground">
                        {startup.name}
                      </h3>

                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {startup.status}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Globe className="h-4 w-4" />
                        {startup.category}
                      </span>

                      <span>•</span>

                      <span>{startup.stage}</span>

                      <span>•</span>

                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {startup.location}
                      </span>
                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground">
                      {startup.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        Interest Submitted
                      </span>

                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        Under Review
                      </span>

                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                        Introduction Approved
                      </span>
                    </div>

                    <div className="mt-5">
                      <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                        <TrendingUp className="h-4 w-4 text-primary" />

                        <span className="text-sm font-semibold text-foreground">
                          {startup.traction}
                        </span>
                      </div>

                      <p className="mt-2 text-xs text-muted-foreground">
                        Interest submitted on 24 Jun 2026
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-wrap gap-3">
                    <button className="flex h-11 items-center gap-2 rounded-2xl bg-emerald-500 px-5 text-sm font-semibold text-white">
                      <CheckCircle2 className="h-4 w-4" />
                      {startup.status}
                    </button>

                    <Link
                      href={`/investor/startup/${startup.id}`}
                      className="flex h-11 items-center justify-center rounded-2xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition hover:bg-muted"
                    >
                      View Startup
                    </Link>

                    <Link
                      href={`/investor/startup/${startup.id}`}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card transition hover:bg-muted"
                    >
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {filteredData.length === 0 && (
              <div className="rounded-[32px] border border-dashed border-border bg-card p-16 text-center">
                <h3 className="text-2xl font-black text-foreground">
                  No matching opportunities found
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  Try changing filters.
                </p>

                <button
                  onClick={() => setSelectedFilter("All")}
                  className="mt-5 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Show All Interests
                </button>

              </div>
            )}
          </section>
  </InvestorLayout>
)
}