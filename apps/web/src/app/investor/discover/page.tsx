"use client"

import { useMemo, useState } from "react"
import InvestorLayout from "@/components/investor/InvestorLayout";

import {
  Search,
  Sparkles,
} from "lucide-react"

import InvestorSelectionCard from "@/components/investor/InvestorSelectionCard"

const startupsData = [
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
    featured: true,
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
    featured: false,
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
    featured: true,
  },
  {
    id: 4,
    name: "SkillNova",
    category: "EdTech",
    stage: "Early Revenue",
    location: "Pune, India",
    match: "90%",
    traction: "18K+ Learners",
    description:
      "Career acceleration platform helping students build startup-ready skills.",
    featured: false,
  },
]

export default function InvestorDiscoverPage() {

  const [searchQuery, setSearchQuery] =
    useState("")

  const [selectedCategory, setSelectedCategory] =
    useState("All")

  const [savedStartups, setSavedStartups] =
    useState<number[]>([])

  const [interestedStartups, setInterestedStartups] =
    useState<number[]>([])

  const categories = [
    "All",
    "FinTech",
    "HealthTech",
    "ClimateTech",
    "EdTech",
  ]

  const filteredStartups = useMemo(() => {
    return startupsData.filter((startup) => {
      const matchesSearch =
        startup.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        startup.category
          .toLowerCase()
          .includes(searchQuery.toLowerCase())

      const matchesCategory =
        selectedCategory === "All" ||
        startup.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
  <InvestorLayout
    title="Discover Startups"
    subtitle="Explore curated investment opportunities"
  >

        {/* CONTENT */}
        <>
          {/* HERO */}
          <section className="rounded-[36px] border border-border bg-card p-6 shadow-sm lg:p-8">
            <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
              {/* LEFT */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-primary" />

                  <span className="text-sm font-semibold text-primary">
                    Curated Startup Matches
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-foreground lg:text-5xl">
                  Discover Startups Ready for Growth
                </h2>

                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  Browse investor-ready startups, evaluate traction, readiness scores, and funding opportunities.
                </p>
              </div>

              {/* SEARCH */}
              <div className="w-full xl:w-95">
                <div className="rounded-[30px] border border-border bg-muted/30 p-5">
                  <div className="flex h-14 items-center gap-3 rounded-2xl border border-border bg-card px-4">
                    <Search className="h-5 w-5 text-muted-foreground" />

                    <input
                      value={searchQuery}
                      onChange={(e) =>
                        setSearchQuery(
                          e.target.value
                        )
                      }
                      placeholder="Search startups..."
                      className="flex-1 bg-transparent text-sm outline-none"
                    />
                  </div>

                  <p className="mt-3 text-xs text-muted-foreground">
                    Search by startup name, industry, stage, or keywords.
                  </p>
                </div>
              </div>
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
                className={`h-11 rounded-2xl px-5 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </section>

          {/* RESULTS */}
          <div className="mt-6 flex items-center justify-between">
            <h2 className="text-2xl font-black text-foreground">
              Startup Opportunities
            </h2>

            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              {filteredStartups.length} Results
            </span>
          </div>

          {/* STARTUPS */}
          <section className="mt-8 grid grid-cols-1 gap-5 xl:grid-cols-2">
            {filteredStartups.map((startup) => (
              <InvestorSelectionCard
                key={startup.id}
                startup={startup}
                isSaved={savedStartups.includes(
                  startup.id
                )}
                isInterested={interestedStartups.includes(
                  startup.id
                )}
                onSave={() => {
                  if (
                    savedStartups.includes(
                      startup.id
                    )
                  ) {
                    setSavedStartups((prev) =>
                      prev.filter(
                        (id) =>
                          id !== startup.id
                      )
                    )
                  } else {
                    setSavedStartups((prev) => [
                      ...prev,
                      startup.id,
                    ])
                  }
                }}
                onInterested={() => {
                  if (
                    interestedStartups.includes(
                      startup.id
                    )
                  )
                    return

                  setInterestedStartups((prev) => [
                    ...prev,
                    startup.id,
                  ])
                }}
              />
            ))}

            {filteredStartups.length === 0 && (
              <div className="col-span-full rounded-[32px] border border-dashed border-border bg-card p-16 text-center">
                <h3 className="text-2xl font-black text-foreground">
                  No matching startups found
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  Try adjusting your search or selecting a different industry filter.
                </p>

                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-5 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>
            </>
  </InvestorLayout>
)
}