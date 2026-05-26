"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

import {
  BarChart3,
  Bell,
  Bookmark,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Flame,
  Globe,
  MapPin,
  Menu,
  Rocket,
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
  },
  {
    name: "Interested",
    href: "/investor/interested",
    icon: Flame,
    active: true,
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

const interestedData = [
  {
    id: 1,
    name: "FinVerse AI",
    category: "FinTech",
    stage: "Seed Stage",
    location: "Mumbai, India",
    status: "Founder Responded",
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
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  const [selectedFilter, setSelectedFilter] =
    useState("All")

  const filters = [
    "All",
    "Founder Responded",
    "Meeting Scheduled",
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
    <div className="flex min-h-screen bg-background">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="flex h-full w-[280px] flex-col border-r border-border bg-card">
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
      <aside className="hidden w-[280px] flex-col border-r border-border bg-card lg:flex">
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

        <div className="p-4">
          <div className="rounded-[30px] border border-primary/10 bg-primary/5 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
              Active Interests
            </p>

            <h3 className="mt-4 text-4xl font-black text-foreground">
              24
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Startup conversations in progress
            </p>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-primary/10">
              <div className="h-full w-[78%] rounded-full bg-primary" />
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
                Interested Startups
              </h1>

              <p className="mt-1 text-sm text-muted-foreground">
                Track startups where you showed
                investment interest
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card">
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
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-primary" />

                  <span className="text-sm font-semibold text-primary">
                    Investor Pipeline
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-foreground lg:text-5xl">
                  Startup Interest Pipeline
                </h2>

                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  Manage startups where you have
                  shown investment interest and
                  track ongoing founder
                  conversations.
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
                92%
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Match Quality
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

                    <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                      <TrendingUp className="h-4 w-4 text-primary" />

                      <span className="text-sm font-semibold text-foreground">
                        {startup.traction}
                      </span>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-wrap gap-3">
                    <button className="flex h-11 items-center gap-2 rounded-2xl bg-emerald-500 px-5 text-sm font-semibold text-white">
                      <CheckCircle2 className="h-4 w-4" />
                      Active
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
                  No startups found
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  Try changing filters.
                </p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}