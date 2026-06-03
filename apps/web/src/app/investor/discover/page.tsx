"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

import {
  BarChart3,
  Bell,
  Bookmark,
  Briefcase,
  Flame,
  Menu,
  Search,
  Sparkles,
  TrendingUp,
  User,
  Users,
  X,
} from "lucide-react"

import InvestorSelectionCard from "@/components/investor/InvestorSelectionCard"

const navigation = [
  {
    name: "Dashboard",
    href: "/investor/dashboard",
    icon: BarChart3,
  },
  {
    name: "Discover",
    href: "/investor/discover",
    icon: Search,
    active: true,
  },
  {
    name: "Interested",
    href: "/investor/interested",
    icon: Flame,
  },
  {
    name: "Saved",
    href: "/investor/saved",
    icon: Bookmark,
  },
  {
    name: "Programs",
    href: "/investor/programs",
    icon: Briefcase,
  },
  {
    name: "Profile",
    href: "/investor/profile",
    icon: User,
  },
]

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
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

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
    <div className="flex min-h-screen bg-background">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="flex h-full w-70 flex-col border-r border-border bg-card">
            {/* TOP */}
            <div className="flex h-20 items-center justify-between border-b border-border px-5">
              <div>
                <h2 className="text-xl font-black text-foreground">
                  Startup Ka Mall
                </h2>

                <p className="mt-1 text-xs text-muted-foreground">
                  Investor Workspace
                </p>
              </div>

              <button
                onClick={() =>
                  setSidebarOpen(false)
                }
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* NAV */}
            <div className="flex-1 space-y-2 overflow-y-auto px-4 py-5">
              {navigation.map((item) => {
                const Icon = item.icon

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() =>
                      setSidebarOpen(false)
                    }
                    className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 transition ${
                      item.active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-5 w-5" />

                    <span className="text-sm font-semibold">
                      {item.name}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>

          <div
            className="flex-1 bg-black/20"
            onClick={() =>
              setSidebarOpen(false)
            }
          />
        </div>
      )}

      {/* SIDEBAR */}
      <aside className="hidden w-70 flex-col border-r border-border bg-card lg:flex">
        {/* LOGO */}
        <div className="flex h-24 items-center border-b border-border px-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-xl font-black text-primary-foreground">
              I
            </div>

            <div>
              <h2 className="text-[24px] font-black leading-none text-foreground">
                Startup Ka Mall
              </h2>

              <p className="mt-2 text-xs text-muted-foreground">
                Investor Workspace
              </p>
            </div>
          </div>
        </div>

        {/* NAV */}
        <div className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 transition ${
                  item.active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <Icon className="h-5 w-5" />

                <span className="text-sm font-semibold">
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>

        {/* CARD */}
        <div className="p-4">
          <div className="rounded-[30px] border border-primary/10 bg-primary/5 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
              Investor Network
            </p>

            <h3 className="mt-4 text-4xl font-black text-foreground">
              500+
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Verified startup opportunities
            </p>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-primary/10">
              <div className="h-full w-[88%] rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* HEADER */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-border bg-background/90 px-5 backdrop-blur-xl lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                setSidebarOpen(true)
              }
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div>
              <h1 className="text-[30px] font-black leading-none text-foreground">
                Discover Startups
              </h1>

              <p className="mt-1 text-sm text-muted-foreground">
                Explore curated investment opportunities
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card transition hover:bg-muted">
              <Bell className="h-5 w-5 text-foreground" />
            </button>

            <Link
              href="/investor/profile"
              className="flex h-12 items-center gap-3 rounded-2xl border border-border bg-card px-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-black text-primary-foreground">
                K
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-foreground">
                  Krishna Shah
                </p>

                <p className="text-xs text-muted-foreground">
                  Angel Investor
                </p>
              </div>
            </Link>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 overflow-x-hidden p-5 lg:p-7">
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
                  Explore High Potential Startups
                </h2>

                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  Discover verified founders,
                  investment-ready startups and
                  ecosystem growth opportunities.
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

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="flex h-11 items-center justify-center gap-2 rounded-2xl border border-border bg-card text-sm font-semibold text-foreground">
                      Search
                    </button>

                    <button className="h-11 rounded-2xl bg-primary text-sm font-semibold text-primary-foreground">
                      Explore
                    </button>
                  </div>
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

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-[30px] border border-border bg-card p-6 shadow-sm">
              <TrendingUp className="h-6 w-6 text-primary" />

              <h3 className="mt-5 text-3xl font-black text-foreground">
                128
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Startup Opportunities
              </p>
            </div>

            <div className="rounded-[30px] border border-border bg-card p-6 shadow-sm">
              <Users className="h-6 w-6 text-fuchsia-500" />

              <h3 className="mt-5 text-3xl font-black text-foreground">
                92%
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Match Accuracy
              </p>
            </div>

            <div className="rounded-[30px] border border-border bg-card p-6 shadow-sm">
              <TrendingUp className="h-6 w-6 text-orange-500" />

              <h3 className="mt-5 text-3xl font-black text-foreground">
                4.9
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Ecosystem Rating
              </p>
            </div>
          </section>

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
                  No startups found
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  Try changing filters or search
                  keywords.
                </p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}