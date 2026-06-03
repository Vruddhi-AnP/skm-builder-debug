"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import {
  Bell,
  Briefcase,
  CalendarDays,
  LayoutDashboard,
  Menu,
  Search,
  Sparkles,
  User,
  Wallet,
  X,
  Filter,
} from "lucide-react"

import AdvisorSelectionCard from "../../../components/advisor/AdvisorSelectionCard"

const navigation = [
  {
    name: "Dashboard",
    href: "/advisor/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Discover",
    href: "/advisor/discover",
    icon: Search,
    active: true,
  },
  {
    name: "Requests",
    href: "/advisor/requests",
    icon: Briefcase,
  },
  {
    name: "Sessions",
    href: "/advisor/sessions",
    icon: CalendarDays,
  },
  {
    name: "Earnings",
    href: "/advisor/earnings",
    icon: Wallet,
  },
  {
    name: "Profile",
    href: "/advisor/profile",
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
    description:
      "Career acceleration platform helping students build startup-ready skills.",
    featured: false,
  },
]

export default function AdvisorDiscoverPage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  const [searchQuery, setSearchQuery] =
    useState("")

  const [selectedCategory, setSelectedCategory] =
    useState("All")

  const [requestedAdvisory, setRequestedAdvisory] =
    useState<number[]>([])

  const [savedStartups, setSavedStartups] =
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
          .includes(
            searchQuery.toLowerCase()
          ) ||
        startup.category
          .toLowerCase()
          .includes(
            searchQuery.toLowerCase()
          )

      const matchesCategory =
        selectedCategory === "All" ||
        startup.category ===
          selectedCategory

      return (
        matchesSearch &&
        matchesCategory
      )
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="flex min-h-screen bg-background">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="flex h-full w-70 flex-col border-r border-border bg-card">
            {/* LOGO */}
            <div className="flex h-24 items-center justify-between border-b border-border px-5">
              <Link
                href="/advisor/dashboard"
                className="flex items-center"
              >
                <Image
                  src="/logo.png"
                  alt="Startup Ka Mall"
                  width={190}
                  height={50}
                  className="h-auto w-42.5 object-contain"
                />
              </Link>

              <button
                onClick={() =>
                  setSidebarOpen(false)
                }
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-muted"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* NAV */}
            <div className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
              {navigation.map((item) => {
                const Icon = item.icon

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() =>
                      setSidebarOpen(false)
                    }
                    className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 text-sm font-semibold transition ${
                      item.active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" />

                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>

          <div
            className="flex-1 bg-black/40 backdrop-blur-sm"
            onClick={() =>
              setSidebarOpen(false)
            }
          />
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden w-70 flex-col border-r border-border bg-card lg:flex">
        <div className="flex h-24 items-center border-b border-border px-6">
          <Link
            href="/advisor/dashboard"
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Startup Ka Mall"
              width={220}
              height={60}
              className="h-auto w-47.5 object-contain"
            />
          </Link>
        </div>

        <div className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 text-sm font-semibold transition ${
                  item.active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />

                {item.name}
              </Link>
            )
          })}
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
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div>
              <h1 className="text-3xl font-black tracking-tight text-foreground">
                Discover Startups
              </h1>

              <p className="mt-1 text-sm text-muted-foreground">
                Curated founder opportunities
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card">
              <Bell className="h-5 w-5" />
            </button>

            <Link
              href="/advisor/profile"
              className="flex h-12 items-center gap-3 rounded-2xl border border-border bg-card px-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                K
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-foreground">
                  Krishna Shah
                </p>

                <p className="text-xs text-muted-foreground">
                  Platinum Advisor
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
                    AI Curated Matches
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-black tracking-tight text-foreground lg:text-5xl">
                  Discover High Potential
                  Startups
                </h2>

                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  Find startups aligned with
                  your mentorship expertise,
                  advisory focus and startup
                  ecosystem experience.
                </p>
              </div>

              {/* SEARCH */}
              <div className="w-full xl:w-95">
                <div className="rounded-[28px] border border-border bg-muted/40 p-5">
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
                      <Filter className="h-4 w-4" />
                      Filters
                    </button>

                    <button className="h-11 rounded-2xl bg-primary text-sm font-semibold text-primary-foreground">
                      Search
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
                  setSelectedCategory(
                    category
                  )
                }
                className={`h-11 rounded-2xl px-5 text-sm font-semibold transition ${
                  selectedCategory ===
                  category
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </section>

          {/* STARTUP CARDS */}
          <section className="mt-7 grid grid-cols-1 gap-5 xl:grid-cols-2">
            {filteredStartups.map(
              (startup) => (
                <AdvisorSelectionCard
                  key={startup.id}
                  startup={startup}
                  requestedAdvisory={
                    requestedAdvisory
                  }
                  savedStartups={
                    savedStartups
                  }
                  setRequestedAdvisory={
                    setRequestedAdvisory
                  }
                  setSavedStartups={
                    setSavedStartups
                  }
                />
              )
            )}

            {filteredStartups.length ===
              0 && (
              <div className="col-span-full rounded-[32px] border border-dashed border-border bg-card p-16 text-center">
                <h3 className="text-2xl font-black text-foreground">
                  No startups found
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  Try changing filters
                  or search keywords.
                </p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}