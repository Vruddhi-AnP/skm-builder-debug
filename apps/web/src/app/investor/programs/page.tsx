"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

import {
  ArrowUpRight,
  BarChart3,
  Bell,
  Bookmark,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Flame,
  Globe,
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
    active: true,
  },
  {
    name: "Profile",
    href: "/investor/profile",
    icon: User,
  },
]

const programsData = [
  {
    id: 1,
    title: "Startup Investor Connect",
    type: "Networking",
    date: "24 May 2026",
    participants: "120+ Investors",
    description:
      "Connect with curated founders and discover early-stage investment opportunities.",
    featured: true,
  },
  {
    id: 2,
    title: "Demo Day Showcase",
    type: "Pitch Event",
    date: "28 May 2026",
    participants: "45 Startups",
    description:
      "Live startup pitching event featuring ecosystem-ready ventures.",
    featured: false,
  },
  {
    id: 3,
    title: "Investor Ecosystem Roundtable",
    type: "Community",
    date: "2 June 2026",
    participants: "80+ Members",
    description:
      "Strategic investor discussions around emerging startup sectors.",
    featured: true,
  },
]

export default function InvestorProgramsPage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  const [joinedPrograms, setJoinedPrograms] =
    useState<number[]>([])

  const [selectedFilter, setSelectedFilter] =
    useState("All")

  const filters = [
    "All",
    "Networking",
    "Pitch Event",
    "Community",
  ]

  const filteredPrograms = useMemo(() => {
    if (selectedFilter === "All")
      return programsData

    return programsData.filter(
      (program) =>
        program.type === selectedFilter
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
              Active Programs
            </p>

            <h3 className="mt-4 text-4xl font-bold text-[#0f172a]">
              12
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Ecosystem programs available
            </p>

            <div className="mt-5 h-2 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
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
                Investor Programs
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Explore ecosystem events & investor programs
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
                    Ecosystem Programs
                  </span>
                </div>

                <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-[#0f172a]">
                  Connect Through Investor Programs
                </h2>

                <p className="mt-5 text-base leading-relaxed text-gray-500">
                  Join curated investor networking events, startup showcases and ecosystem growth programs.
                </p>
              </div>

              <Link
                href="/investor/discover"
                className="h-12 px-5 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                <Rocket className="w-4 h-4" />
                Discover Startups
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
              <Briefcase className="w-6 h-6 text-violet-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                12
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Active Programs
              </p>
            </div>

            <div className="rounded-[30px] border border-[#e8edf5] bg-white p-6">
              <Users className="w-6 h-6 text-fuchsia-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                2.4K+
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Ecosystem Members
              </p>
            </div>

            <div className="rounded-[30px] border border-[#e8edf5] bg-white p-6">
              <TrendingUp className="w-6 h-6 text-emerald-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                92%
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Investor Engagement
              </p>
            </div>
          </section>

          {/* PROGRAMS */}
          <section className="mt-8 space-y-5">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="rounded-[32px] border border-[#e8edf5] bg-white p-6 hover:shadow-sm transition"
              >
                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                  {/* LEFT */}
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl font-bold text-[#0f172a]">
                        {program.title}
                      </h3>

                      <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                        {program.type}
                      </span>

                      {program.featured && (
                        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        {program.date}
                      </span>

                      <span>•</span>

                      <span>{program.participants}</span>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-gray-500 max-w-3xl">
                      {program.description}
                    </p>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => {
                        if (
                          joinedPrograms.includes(
                            program.id
                          )
                        )
                          return

                        setJoinedPrograms((prev) => [
                          ...prev,
                          program.id,
                        ])
                      }}
                      disabled={joinedPrograms.includes(
                        program.id
                      )}
                      className={`h-11 px-5 rounded-2xl text-sm font-semibold transition ${
                        joinedPrograms.includes(
                          program.id
                        )
                          ? "bg-emerald-500 text-white"
                          : "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90"
                      }`}
                    >
                      {joinedPrograms.includes(
                        program.id
                      ) ? (
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          Joined
                        </span>
                      ) : (
                        "Join Program"
                      )}
                    </button>

                    <button className="h-11 px-5 rounded-2xl border border-[#e8edf5] bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center gap-2">
                      Learn More
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <button className="h-11 px-4 rounded-2xl border border-[#e8edf5] bg-white flex items-center justify-center hover:bg-[#fafafa] transition">
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredPrograms.length === 0 && (
              <div className="rounded-[32px] border border-dashed border-[#dbe2ea] bg-white p-16 text-center">
                <h3 className="text-2xl font-bold text-[#0f172a]">
                  No programs found
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