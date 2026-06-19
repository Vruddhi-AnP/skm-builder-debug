"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import {
  Bell,
  Briefcase,
  CalendarDays,
  Check,
  Clock3,
  Globe,
  LayoutDashboard,
  MapPin,
  Menu,
  Search,
  Sparkles,
  User,
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
    active: true,
  },
  {
    name: "Sessions",
    href: "/advisor/sessions",
    icon: CalendarDays,
  },
  {
    name: "Profile",
    href: "/advisor/profile",
    icon: User,
  },
]

const requestsData = [
  {
    id: 1,
    startup: "FinVerse AI",
    founder: "Aarav Mehta",
    category: "FinTech",
    stage: "Seed Stage",
    location: "Mumbai, India",
    status: "Pending",
    match: "96%",
  },

  {
    id: 2,
    startup: "HealthSync",
    founder: "Riya Kapoor",
    category: "HealthTech",
    stage: "Pre-Series A",
    location: "Bangalore, India",
    status: "Pending",
    match: "92%",
  },

  {
    id: 3,
    startup: "GreenByte",
    founder: "Kabir Shah",
    category: "ClimateTech",
    stage: "MVP Ready",
    location: "Delhi, India",
    status: "Accepted",
    match: "89%",
  },
]

export default function AdvisorRequestsPage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  const [searchQuery, setSearchQuery] =
    useState("")

  const [selectedStatus, setSelectedStatus] =
    useState("All")

  const [acceptedRequests, setAcceptedRequests] =
    useState<number[]>([3])

  const [rejectedRequests, setRejectedRequests] =
    useState<number[]>([])

const statuses = [
  "All",
  "Pending",
  "Accepted",
  "Rejected",
]

  const filteredRequests = useMemo(() => {
    return requestsData.filter((item) => {
      const matchesSearch =
        item.startup
          .toLowerCase()
          .includes(
            searchQuery.toLowerCase()
          ) ||
        item.founder
          .toLowerCase()
          .includes(
            searchQuery.toLowerCase()
          )

      const currentStatus =
        acceptedRequests.includes(item.id)
          ? "Accepted"
          : rejectedRequests.includes(
              item.id
            )
          ? "Rejected"
          : item.status

      const matchesStatus =
        selectedStatus === "All" ||
        currentStatus === selectedStatus

      return (
        matchesSearch && matchesStatus
      )
    })
  }, [
    searchQuery,
    selectedStatus,
    acceptedRequests,
    rejectedRequests,
  ])

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
                  Advisor Match Rate
                </p>

                <h3 className="mt-3 text-4xl font-black tracking-tight text-foreground">
                  92%
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Average founder-advisor compatibility
                </p>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-primary/10">
                  <div className="h-full w-[72%] rounded-full bg-primary" />
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
      <aside className="hidden w-70 flex-col border-r border-border bg-card lg:flex">
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
              className="h-auto w-47.5 object-contain"
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
              Advisor Match Rate
            </p>

            <h3 className="mt-3 text-4xl font-black tracking-tight text-foreground">
              92%
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Average founder-advisor compatibility
            </p>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-primary/10">
              <div className="h-full w-[72%] rounded-full bg-primary" />
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
                Advisor Requests
              </h1>

              <p className="mt-1 text-sm text-muted-foreground">
                Manage founder mentorship
                requests
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
                    Founder Requests
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-black tracking-tight text-foreground lg:text-5xl">
                  Manage Advisory Requests
                </h2>

                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  Review founder
                  applications, accept
                  mentorship opportunities
                  and manage advisory
                  relationships.
                </p>
              </div>

              {/* SEARCH */}
              <div className="w-full xl:w-95">
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
                      placeholder="Search requests..."
                      className="flex-1 bg-transparent text-sm outline-none"
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {statuses.map((status) => (
                      <button
                        key={status}
                        onClick={() =>
                          setSelectedStatus(
                            status
                          )
                        }
                        className={`h-11 rounded-2xl px-5 text-sm font-semibold transition ${
                          selectedStatus ===
                          status
                            ? "bg-primary text-primary-foreground"
                            : "border border-border bg-card text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

        <section className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

  <div className="rounded-[28px] border border-border bg-card p-5">
    <h3 className="text-3xl font-black text-foreground">
      34
    </h3>

    <p className="mt-2 text-sm text-muted-foreground">
      Total Requests
    </p>
  </div>

  <div className="rounded-[28px] border border-border bg-card p-5">
    <h3 className="text-3xl font-black text-primary">
      {acceptedRequests.length}
    </h3>

    <p className="mt-2 text-sm text-muted-foreground">
      Accepted Requests
    </p>
  </div>

  <div className="rounded-[28px] border border-border bg-card p-5">
    <h3 className="text-3xl font-black text-red-500">
      {rejectedRequests.length}
    </h3>

    <p className="mt-2 text-sm text-muted-foreground">
      Rejected Requests
    </p>
  </div>

  <div className="rounded-[28px] border border-border bg-card p-5">
    <h3 className="text-3xl font-black text-emerald-600">
      92%
    </h3>

    <p className="mt-2 text-sm text-muted-foreground">
      Average Match Score
    </p>
  </div>

</section>

          {/* REQUESTS */}
          <section className="mt-7 space-y-5">
            {filteredRequests.map(
              (request) => {
                const isAccepted =
                  acceptedRequests.includes(
                    request.id
                  )

                const isRejected =
                  rejectedRequests.includes(
                    request.id
                  )

                return (
                  <div
                    key={request.id}
                    className="rounded-[32px] border border-border bg-card p-6 shadow-sm"
                  >
                    <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                      {/* LEFT */}
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-black tracking-tight text-foreground">
                            {request.startup}
                          </h3>

                          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                            {request.match} Match
                          </span>

                          {isAccepted && (
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                              Accepted
                            </span>
                          )}

                          {isRejected && (
                            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                              Rejected
                            </span>
                          )}
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Globe className="h-4 w-4" />
                            {request.category}
                          </span>

                          <span>•</span>

                          <span>
                            {request.stage}
                          </span>

                          <span>•</span>

                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {request.location}
                          </span>

                          <span>•</span>

                          <span>
                            Founder:{" "}
                            {
                              request.founder
                            }
                          </span>
                        </div>

                        <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock3 className="h-4 w-4" />
                          Applied: 14 Jun 2026
                        </div>
                      </div>

                      {/* ACTIONS */}
                      <div className="flex flex-wrap gap-3">
                       <Link
                        href={`/advisor/discover/${request.id}`}
                        className="h-11 rounded-2xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition hover:bg-muted flex items-center justify-center"
                      >
                        View Startup
                      </Link>

                        <button
                          onClick={() => {
                            setAcceptedRequests(
                              (prev) => [
                                ...prev,
                                request.id,
                              ]
                            )

                            setRejectedRequests(
                              (prev) =>
                                prev.filter(
                                  (id) =>
                                    id !==
                                    request.id
                                )
                            )
                          }}
                          disabled={
                            isAccepted ||
                            isRejected
                          }
                          className={`h-11 rounded-2xl px-5 text-sm font-semibold transition ${
                            isAccepted
                              ? "bg-blue-600 text-white"
                              : isRejected
                              ? "bg-muted text-muted-foreground"
                              : "bg-primary text-primary-foreground hover:opacity-90"
                          }`}
                        >
                         {isAccepted ? (
                          "Schedule Session"
                        ) : (
                          "Accept"
                        )}
                        </button>

                        <button
                          onClick={() => {
                            setRejectedRequests(
                              (prev) => [
                                ...prev,
                                request.id,
                              ]
                            )
                          }}
                          disabled={
                            isAccepted ||
                            isRejected
                          }
                          className={`h-11 rounded-2xl px-5 text-sm font-semibold transition ${
                            isRejected
                              ? "bg-red-500 text-white"
                              : isAccepted
                              ? "bg-muted text-muted-foreground"
                              : "border border-red-200 bg-red-50 text-red-600 hover:bg-red-100"
                          }`}
                        >
                          {isRejected
                            ? "Rejected"
                            : "Reject"}
                        </button>
                      </div>
                    </div>
                  </div>
                )
              }
            )}

            {filteredRequests.length ===
              0 && (
              <div className="rounded-[32px] border border-dashed border-border bg-card p-16 text-center">
                <h3 className="text-2xl font-black text-foreground">
                  No requests found
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  Try changing filters
                  or search query.
                </p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}