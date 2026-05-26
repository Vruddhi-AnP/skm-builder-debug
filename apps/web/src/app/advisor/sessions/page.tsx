"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import {
  BarChart3,
  Bell,
  Briefcase,
  CalendarDays,
  Check,
  Clock3,
  LayoutDashboard,
  MapPin,
  Menu,
  Search,
  Sparkles,
  User,
  Users,
  Video,
  Wallet,
  X,
} from "lucide-react"

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
    active: true,
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

const sessionsData = [
  {
    id: 1,
    startup: "FinVerse AI",
    founder: "Aarav Mehta",
    type: "Strategy Session",
    date: "Today",
    time: "5:00 PM",
    duration: "45 mins",
    location: "Google Meet",
    status: "Upcoming",
  },

  {
    id: 2,
    startup: "HealthSync",
    founder: "Riya Kapoor",
    type: "Fundraising Guidance",
    date: "Tomorrow",
    time: "11:30 AM",
    duration: "60 mins",
    location: "Zoom",
    status: "Upcoming",
  },

  {
    id: 3,
    startup: "GreenByte",
    founder: "Kabir Shah",
    type: "Growth Advisory",
    date: "Yesterday",
    time: "4:00 PM",
    duration: "50 mins",
    location: "Google Meet",
    status: "Completed",
  },
]

export default function AdvisorSessionsPage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  const [searchQuery, setSearchQuery] =
    useState("")

  const [selectedTab, setSelectedTab] =
    useState("All")

  const [joinedSessions, setJoinedSessions] =
    useState<number[]>([])

  const tabs = [
    "All",
    "Upcoming",
    "Completed",
  ]

  const filteredSessions = useMemo(() => {
    return sessionsData.filter(
      (session) => {
        const matchesSearch =
          session.startup
            .toLowerCase()
            .includes(
              searchQuery.toLowerCase()
            ) ||
          session.founder
            .toLowerCase()
            .includes(
              searchQuery.toLowerCase()
            )

        const matchesTab =
          selectedTab === "All" ||
          session.status === selectedTab

        return (
          matchesSearch && matchesTab
        )
      }
    )
  }, [searchQuery, selectedTab])

  return (
    <div className="flex min-h-screen bg-background">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="flex h-full w-[280px] flex-col border-r border-border bg-card">
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
                  className="h-auto w-[170px] object-contain"
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

            {/* NAVIGATION */}
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
                    className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
                      item.active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" />

                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>

            {/* CARD */}
            <div className="p-4">
              <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Sessions This Month
                </p>

                <h3 className="mt-3 text-4xl font-black tracking-tight text-foreground">
                  18
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Mentorship sessions
                  conducted
                </p>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-primary/10">
                  <div className="h-full w-[82%] rounded-full bg-primary" />
                </div>
              </div>
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
      <aside className="hidden w-[280px] flex-col border-r border-border bg-card lg:flex">
        {/* LOGO */}
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
              className="h-auto w-[190px] object-contain"
            />
          </Link>
        </div>

        {/* NAVIGATION */}
        <div className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
                  item.active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />

                <span>{item.name}</span>
              </Link>
            )
          })}
        </div>

        {/* CARD */}
        <div className="p-4">
          <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Sessions This Month
            </p>

            <h3 className="mt-3 text-4xl font-black tracking-tight text-foreground">
              18
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Mentorship sessions
              conducted
            </p>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-primary/10">
              <div className="h-full w-[82%] rounded-full bg-primary" />
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
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div>
              <h1 className="text-3xl font-black tracking-tight text-foreground">
                Advisor Sessions
              </h1>

              <p className="mt-1 text-sm text-muted-foreground">
                Manage mentorship meetings &
                advisory calls
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card">
              <Bell className="h-5 w-5 text-foreground" />
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
                    Mentorship Sessions
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-black tracking-tight text-foreground lg:text-5xl">
                  Manage Advisory Sessions
                </h2>

                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  Track upcoming meetings,
                  mentorship calls and
                  founder advisory sessions.
                </p>
              </div>

              {/* SEARCH */}
              <div className="w-full xl:w-[380px]">
                <div className="rounded-[28px] border border-border bg-muted/30 p-5">
                  <div className="flex h-14 items-center gap-3 rounded-2xl border border-border bg-card px-4">
                    <Search className="h-5 w-5 text-muted-foreground" />

                    <input
                      value={searchQuery}
                      onChange={(e) =>
                        setSearchQuery(
                          e.target.value
                        )
                      }
                      placeholder="Search sessions..."
                      className="flex-1 bg-transparent text-sm outline-none"
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() =>
                          setSelectedTab(tab)
                        }
                        className={`h-11 rounded-2xl px-5 text-sm font-semibold transition ${
                          selectedTab === tab
                            ? "bg-primary text-primary-foreground"
                            : "border border-border bg-card text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SESSION LIST */}
          <section className="mt-7 space-y-5">
            {filteredSessions.map(
              (session) => {
                const isJoined =
                  joinedSessions.includes(
                    session.id
                  )

                return (
                  <div
                    key={session.id}
                    className="rounded-[32px] border border-border bg-card p-6 shadow-sm"
                  >
                    <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                      {/* LEFT */}
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-black tracking-tight text-foreground">
                            {session.startup}
                          </h3>

                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {session.type}
                          </span>

                          {session.status ===
                            "Completed" && (
                            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                              Completed
                            </span>
                          )}
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {session.founder}
                          </span>

                          <span>•</span>

                          <span className="flex items-center gap-1">
                            <CalendarDays className="h-4 w-4" />
                            {session.date}
                          </span>

                          <span>•</span>

                          <span className="flex items-center gap-1">
                            <Clock3 className="h-4 w-4" />
                            {session.time}
                          </span>

                          <span>•</span>

                          <span>
                            {session.duration}
                          </span>

                          <span>•</span>

                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {session.location}
                          </span>
                        </div>
                      </div>

                      {/* ACTIONS */}
                      <div className="flex flex-wrap gap-3">
                        <button className="h-11 rounded-2xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition hover:bg-muted">
                          Founder Details
                        </button>

                        {session.status ===
                        "Completed" ? (
                          <button className="h-11 rounded-2xl bg-emerald-500 px-5 text-sm font-semibold text-white">
                            Session Completed
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setJoinedSessions(
                                (prev) => [
                                  ...prev,
                                  session.id,
                                ]
                              )
                            }}
                            disabled={isJoined}
                            className={`h-11 rounded-2xl px-5 text-sm font-semibold transition ${
                              isJoined
                                ? "bg-emerald-500 text-white"
                                : "bg-primary text-primary-foreground hover:opacity-90"
                            }`}
                          >
                            {isJoined ? (
                              <span className="flex items-center gap-2">
                                <Check className="h-4 w-4" />
                                Joined
                              </span>
                            ) : (
                              <span className="flex items-center gap-2">
                                <Video className="h-4 w-4" />
                                Join Session
                              </span>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              }
            )}

            {filteredSessions.length ===
              0 && (
              <div className="rounded-[32px] border border-dashed border-border bg-card p-16 text-center">
                <h3 className="text-2xl font-black text-foreground">
                  No sessions found
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  Try changing filters or
                  search query.
                </p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}