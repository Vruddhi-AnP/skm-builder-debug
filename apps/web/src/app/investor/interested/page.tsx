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
  Star,
  TrendingUp,
  User,
  Users,
  X,
} from "lucide-react"

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
    if (selectedFilter === "All")
      return interestedData

    return interestedData.filter(
      (item) => item.status === selectedFilter
    )
  }, [selectedFilter])

  return (
    <div className="min-h-screen bg-[#f6f8fc] flex">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="w-[280px] bg-white h-full border-r border-[#edf1f7] flex flex-col">
            <div className="h-20 border-b border-[#edf1f7] flex items-center justify-between px-5">
              <div>
                <h2 className="text-xl font-bold text-[#0f172a]">
                  Startup Ka Mall
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Investor Workspace
                </p>
              </div>

              <button
                onClick={() =>
                  setSidebarOpen(false)
                }
                className="h-10 w-10 rounded-xl bg-[#f6f8fc] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 px-4 py-5 space-y-2 overflow-y-auto">
              {navigation.map((item) => {
                const Icon = item.icon

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() =>
                      setSidebarOpen(false)
                    }
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition ${
                      item.active
                        ? "bg-violet-50 text-violet-600"
                        : "text-gray-600 hover:bg-[#fafafa]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />

                    <span className="font-semibold text-sm">
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
      <aside className="hidden lg:flex w-[280px] bg-white border-r border-[#edf1f7] flex-col">
        <div className="h-24 border-b border-[#edf1f7] flex items-center px-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-xl font-bold">
              I
            </div>

            <div>
              <h2 className="text-[24px] font-bold text-[#0f172a] leading-none">
                Startup Ka Mall
              </h2>

              <p className="text-xs text-gray-500 mt-2">
                Investor Workspace
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition ${
                  item.active
                    ? "bg-violet-50 text-violet-600"
                    : "text-gray-600 hover:bg-[#fafafa]"
                }`}
              >
                <Icon className="w-5 h-5" />

                <span className="font-semibold text-sm">
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>

        <div className="p-4">
          <div className="rounded-[30px] border border-violet-200 bg-[#fafbff] p-5">
            <p className="text-[11px] uppercase tracking-wider font-semibold text-violet-500">
              Active Interests
            </p>

            <h3 className="mt-4 text-4xl font-bold text-[#0f172a]">
              24
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Startup conversations in progress
            </p>

            <div className="mt-5 h-2 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* HEADER */}
        <header className="sticky top-0 z-30 h-20 bg-[#f6f8fc]/90 backdrop-blur-xl border-b border-[#edf1f7] flex items-center justify-between px-5 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                setSidebarOpen(true)
              }
              className="lg:hidden h-11 w-11 rounded-xl bg-white border border-[#edf1f7] flex items-center justify-center"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div>
              <h1 className="text-[30px] font-bold text-[#0f172a] leading-none">
                Interested Startups
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Track startups where you showed investment interest
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="h-12 w-12 rounded-2xl border border-[#edf1f7] bg-white flex items-center justify-center">
              <Bell className="w-5 h-5 text-gray-700" />
            </button>

            <Link
              href="/investor/profile"
              className="h-12 px-3 rounded-2xl border border-[#edf1f7] bg-white flex items-center gap-3"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">
                K
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-[#0f172a]">
                  Krishna Shah
                </p>

                <p className="text-xs text-gray-500">
                  Angel Investor
                </p>
              </div>
            </Link>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 p-5 lg:p-7 overflow-x-hidden">
          {/* HERO */}
          <section className="rounded-[36px] border border-[#e8edf5] bg-white p-6 lg:p-8">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">
                  <Sparkles className="w-4 h-4 text-violet-600" />

                  <span className="text-sm font-semibold text-violet-700">
                    Investor Pipeline
                  </span>
                </div>

                <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-[#0f172a]">
                  Startup Interest Pipeline
                </h2>

                <p className="mt-5 text-base leading-relaxed text-gray-500">
                  Manage startups where you have shown investment interest and track ongoing founder conversations.
                </p>
              </div>

              <Link
                href="/investor/discover"
                className="h-12 px-5 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                <Rocket className="w-4 h-4" />
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
                className={`h-11 px-5 rounded-2xl text-sm font-semibold transition ${
                  selectedFilter === filter
                    ? "bg-violet-500 text-white"
                    : "border border-[#e8edf5] bg-white text-gray-700 hover:bg-[#fafafa]"
                }`}
              >
                {filter}
              </button>
            ))}
          </section>

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-[30px] border border-[#e8edf5] bg-white p-6">
              <Flame className="w-6 h-6 text-violet-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                24
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Active Interests
              </p>
            </div>

            <div className="rounded-[30px] border border-[#e8edf5] bg-white p-6">
              <Users className="w-6 h-6 text-fuchsia-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                8
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Founder Meetings
              </p>
            </div>

            <div className="rounded-[30px] border border-[#e8edf5] bg-white p-6">
              <TrendingUp className="w-6 h-6 text-emerald-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                92%
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Match Quality
              </p>
            </div>
          </section>

          {/* LIST */}
          <section className="mt-8 space-y-5">
            {filteredData.map((startup) => (
              <div
                key={startup.id}
                className="rounded-[32px] border border-[#e8edf5] bg-white p-6 hover:shadow-sm transition"
              >
                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                  {/* LEFT */}
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl font-bold text-[#0f172a]">
                        {startup.name}
                      </h3>

                      <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                        {startup.status}
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
                    <button className="h-11 px-5 rounded-2xl bg-emerald-500 text-white text-sm font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Active
                    </button>

                    <Link
                      href={`/investor/startup/${startup.id}`}
                      className="h-11 px-5 rounded-2xl border border-[#e8edf5] bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center justify-center"
                    >
                      View Startup
                    </Link>

                    <Link
                      href={`/investor/startup/${startup.id}`}
                      className="h-11 px-4 rounded-2xl border border-[#e8edf5] bg-white flex items-center justify-center hover:bg-[#fafafa] transition"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {filteredData.length === 0 && (
              <div className="rounded-[32px] border border-dashed border-[#dbe2ea] bg-white p-16 text-center">
                <h3 className="text-2xl font-bold text-[#0f172a]">
                  No startups found
                </h3>

                <p className="mt-3 text-sm text-gray-500">
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