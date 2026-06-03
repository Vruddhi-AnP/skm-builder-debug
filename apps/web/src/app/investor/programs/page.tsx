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
  Menu,
  Rocket,
  Search,
  Sparkles,
  TrendingUp,
  User,
 Users,
  X,
  Trophy,
  ShieldCheck,
  Mic2,
  Building2,
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
    if (selectedFilter === "All") {
      return programsData
    }

    return programsData.filter(
      (program) =>
        program.type === selectedFilter
    )
  }, [selectedFilter])

  return (
    <div className="flex min-h-screen bg-background">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="flex h-full w-70 flex-col border-r border-border bg-card">
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
      <aside className="hidden w-70 flex-col border-r border-border bg-card lg:flex">
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
              Active Programs
            </p>

            <h3 className="mt-4 text-4xl font-black text-foreground">
              12
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Ecosystem programs available
            </p>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-primary/10">
              <div className="h-full w-[80%] rounded-full bg-primary" />
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
                Investor Programs
              </h1>

              <p className="mt-1 text-sm text-muted-foreground">
                Explore ecosystem events & investor
                communities
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
                    Ecosystem Programs
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-foreground lg:text-5xl">
                  Connect Through Investor Programs
                </h2>

                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  Join curated networking events,
                  founder showcases and investor
                  communities designed to accelerate
                  startup ecosystem growth.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                    <Trophy className="h-4 w-4 text-primary" />

                    <span className="text-sm font-semibold text-foreground">
                      Premium Investor Access
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />

                    <span className="text-sm font-semibold text-foreground">
                      Verified Ecosystem
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full xl:w-[320px]">
                <div className="rounded-[30px] border border-primary/10 bg-primary/5 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                    Program Engagement
                  </p>

                  <h2 className="mt-5 text-6xl font-black text-foreground">
                    92%
                  </h2>

                  <p className="mt-3 text-sm text-muted-foreground">
                    Investor participation growth
                  </p>

                  <div className="mt-6 h-3 overflow-hidden rounded-full bg-primary/10">
                    <div className="h-full w-[92%] rounded-full bg-primary" />
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                    <TrendingUp className="h-4 w-4" />
                    +18% ecosystem engagement
                  </div>
                </div>
              </div>
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
              <Briefcase className="h-6 w-6 text-primary" />

              <h3 className="mt-5 text-3xl font-black text-foreground">
                12
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Active Programs
              </p>
            </div>

            <div className="rounded-[30px] border border-border bg-card p-6 shadow-sm">
              <Users className="h-6 w-6 text-primary" />

              <h3 className="mt-5 text-3xl font-black text-foreground">
                2.4K+
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Ecosystem Members
              </p>
            </div>

            <div className="rounded-[30px] border border-border bg-card p-6 shadow-sm">
              <TrendingUp className="h-6 w-6 text-emerald-500" />

              <h3 className="mt-5 text-3xl font-black text-foreground">
                92%
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Investor Engagement
              </p>
            </div>
          </section>

          {/* PROGRAMS */}
          <section className="mt-8 space-y-5">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="rounded-[32px] border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                  {/* LEFT */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-black text-foreground">
                        {program.title}
                      </h3>

                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {program.type}
                      </span>

                      {program.featured && (
                        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {program.date}
                      </span>

                      <span>•</span>

                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {program.participants}
                      </span>
                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                      {program.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                        <Mic2 className="h-4 w-4 text-primary" />

                        <span className="text-sm font-semibold text-foreground">
                          Live Sessions
                        </span>
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                        <Building2 className="h-4 w-4 text-primary" />

                        <span className="text-sm font-semibold text-foreground">
                          Founder Access
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => {
                        if (
                          joinedPrograms.includes(
                            program.id
                          )
                        ) {
                          return
                        }

                        setJoinedPrograms((prev) => [
                          ...prev,
                          program.id,
                        ])
                      }}
                      disabled={joinedPrograms.includes(
                        program.id
                      )}
                      className={`h-11 rounded-2xl px-5 text-sm font-semibold transition ${
                        joinedPrograms.includes(
                          program.id
                        )
                          ? "bg-emerald-500 text-white"
                          : "bg-primary text-primary-foreground hover:opacity-90"
                      }`}
                    >
                      {joinedPrograms.includes(
                        program.id
                      ) ? (
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4" />
                          Joined
                        </span>
                      ) : (
                        "Join Program"
                      )}
                    </button>

                    <button className="flex h-11 items-center gap-2 rounded-2xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition hover:bg-muted">
                      Learn More
                      <ArrowUpRight className="h-4 w-4" />
                    </button>

                    <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card transition hover:bg-muted">
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredPrograms.length === 0 && (
              <div className="rounded-[32px] border border-dashed border-border bg-card p-16 text-center">
                <h3 className="text-2xl font-black text-foreground">
                  No programs found
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  Try changing filters.
                </p>
              </div>
            )}
          </section>

          {/* CTA */}
          <section className="mt-8 rounded-[36px] border border-primary/10 bg-primary/5 p-8">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-black text-foreground">
                  Build Your Investor Network
                </h2>

                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Access premium founder communities,
                  curated startup showcases and
                  high-quality networking opportunities.
                </p>
              </div>

              <Link
                href="/investor/discover"
                className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                <Rocket className="h-4 w-4" />
                Explore Opportunities
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}