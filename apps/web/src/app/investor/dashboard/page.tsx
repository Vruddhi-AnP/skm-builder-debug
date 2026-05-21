"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

import {
  BarChart3,
  Bell,
  Bookmark,
  Briefcase,
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
  Check,
} from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/investor/dashboard",
    icon: BarChart3,
    active: true,
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

const startupData = [
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
]

export default function InvestorDashboardPage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  const [savedStartups, setSavedStartups] =
    useState<number[]>([])

  const [interestedStartups, setInterestedStartups] =
    useState<number[]>([])

  const featuredStartups = useMemo(() => {
    return startupData.filter(
      (item) => item.featured
    )
  }, [])

  return (
    <div className="min-h-screen bg-[#f6f8fc] flex">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="w-[280px] bg-white h-full border-r border-[#edf1f7] flex flex-col">
            {/* LOGO */}
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

            {/* NAV */}
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
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all ${
                      item.active
                        ? "bg-violet-50 text-violet-600"
                        : "text-gray-600 hover:bg-[#f8fafc]"
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
        {/* LOGO */}
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

        {/* NAV */}
        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all ${
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

        {/* CARD */}
        <div className="p-4">
          <div className="rounded-[30px] border border-violet-200 bg-[#fafbff] p-5">
            <p className="text-[11px] uppercase tracking-wider font-semibold text-violet-500">
              Investment Opportunities
            </p>

            <h3 className="mt-4 text-4xl font-bold text-[#0f172a]">
              128
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Curated startups matching your interests
            </p>

            <div className="mt-5 h-2 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
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
                Investor Dashboard
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Explore high-potential startup opportunities
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <button className="relative h-12 w-12 rounded-2xl border border-[#edf1f7] bg-white flex items-center justify-center hover:bg-[#fafafa] transition">
              <Bell className="w-5 h-5 text-gray-700" />
            </button>

            <Link
              href="/investor/profile"
              className="h-12 px-3 rounded-2xl border border-[#edf1f7] bg-white flex items-center gap-3 hover:bg-[#fafafa] transition"
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
                    Investor Ecosystem
                  </span>
                </div>

                <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-[#0f172a]">
                  Discover Startup Investment Opportunities
                </h2>

                <p className="mt-5 text-base leading-relaxed text-gray-500">
                  Explore verified founders, discover curated startups and build strategic ecosystem investments.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/investor/discover"
                    className="h-12 px-5 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition"
                  >
                    <Rocket className="w-4 h-4" />
                    Discover Startups
                  </Link>

                  <Link
                    href="/investor/saved"
                    className="h-12 px-5 rounded-2xl border border-[#e8edf5] bg-white text-sm font-semibold text-[#0f172a] hover:bg-[#fafafa] transition"
                  >
                    View Saved
                  </Link>
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="w-full xl:w-[340px] rounded-[32px] border border-violet-200 bg-[#fafbff] p-6">
                <p className="text-[11px] uppercase tracking-wider font-semibold text-violet-500">
                  Investment Readiness
                </p>

                <h2 className="mt-5 text-6xl font-bold text-[#0f172a]">
                  92%
                </h2>

                <p className="mt-3 text-sm text-gray-500">
                  Startup-investor alignment score
                </p>

                <div className="mt-6 h-3 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm text-violet-600 font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  +18% better matches this month
                </div>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="rounded-[30px] border border-[#e8edf5] bg-white p-6">
              <Rocket className="w-6 h-6 text-violet-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                128
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Startup Matches
              </p>
            </div>

            <div className="rounded-[30px] border border-[#e8edf5] bg-white p-6">
              <Bookmark className="w-6 h-6 text-fuchsia-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                24
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Saved Startups
              </p>
            </div>

            <div className="rounded-[30px] border border-[#e8edf5] bg-white p-6">
              <Users className="w-6 h-6 text-emerald-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                14
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Founder Connections
              </p>
            </div>

            <div className="rounded-[30px] border border-[#e8edf5] bg-white p-6">
              <Star className="w-6 h-6 text-orange-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                4.9
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Investor Rating
              </p>
            </div>
          </section>

          {/* FEATURED STARTUPS */}
          <section className="mt-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-3xl font-bold text-[#0f172a]">
                  Featured Startups
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Curated startups aligned with your interests
                </p>
              </div>

              <Link
                href="/investor/discover"
                className="text-sm font-semibold text-violet-600"
              >
                View All
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-5">
              {featuredStartups.map((startup) => (
                <div
                  key={startup.id}
                  className="rounded-[32px] border border-[#e8edf5] bg-white p-6 hover:shadow-sm transition"
                >
                  {/* TOP */}
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-2xl font-bold text-[#0f172a]">
                          {startup.name}
                        </h3>

                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                          {startup.match} Match
                        </span>

                        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                          Featured
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
                    </div>

                    {/* SAVE */}
                    <button
                      onClick={() => {
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
                      className={`h-12 w-12 rounded-2xl flex items-center justify-center transition ${
                        savedStartups.includes(
                          startup.id
                        )
                          ? "bg-violet-500"
                          : "bg-violet-50"
                      }`}
                    >
                      <Star
                        className={`w-5 h-5 ${
                          savedStartups.includes(
                            startup.id
                          )
                            ? "text-white"
                            : "text-violet-600"
                        }`}
                      />
                    </button>
                  </div>

                  {/* DESC */}
                  <p className="mt-6 text-sm leading-relaxed text-gray-500">
                    {startup.description}
                  </p>

                  {/* FOOTER */}
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href={`/investor/startup/${startup.id}`}
                      className="h-11 px-5 rounded-2xl border border-[#e8edf5] bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center justify-center"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() => {
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
                      disabled={interestedStartups.includes(
                        startup.id
                      )}
                      className={`h-11 px-5 rounded-2xl text-sm font-semibold transition ${
                        interestedStartups.includes(
                          startup.id
                        )
                          ? "bg-emerald-500 text-white"
                          : "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90"
                      }`}
                    >
                      {interestedStartups.includes(
                        startup.id
                      ) ? (
                        <span className="flex items-center gap-2">
                          <Check className="w-4 h-4" />
                          Interested
                        </span>
                      ) : (
                        "Show Interest"
                      )}
                    </button>

                    <Link
                      href={`/investor/startup/${startup.id}`}
                      className="h-11 px-4 rounded-2xl border border-[#e8edf5] bg-white flex items-center justify-center hover:bg-[#fafafa] transition"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}