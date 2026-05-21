"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

import {
  BarChart3,
  Bell,
  Briefcase,
  CalendarDays,
  Check,
  Clock3,
  Filter,
  Search,
  User,
  Wallet,
  X,
  Menu,
  Sparkles,
  Globe,
  MapPin,
} from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/advisor/dashboard",
    icon: BarChart3,
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
  ]

  const filteredRequests = useMemo(() => {
    return requestsData.filter((item) => {
      const matchesSearch =
        item.startup
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        item.founder
          .toLowerCase()
          .includes(searchQuery.toLowerCase())

      const currentStatus =
        acceptedRequests.includes(item.id)
          ? "Accepted"
          : rejectedRequests.includes(item.id)
          ? "Rejected"
          : item.status

      const matchesStatus =
        selectedStatus === "All" ||
        currentStatus === selectedStatus

      return matchesSearch && matchesStatus
    })
  }, [
    searchQuery,
    selectedStatus,
    acceptedRequests,
    rejectedRequests,
  ])

  return (
    <div className="min-h-screen bg-[#f6f8fc] flex">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="w-[270px] bg-white h-full border-r border-[#edf1f7] flex flex-col">
            {/* TOP */}
            <div className="h-20 border-b border-[#edf1f7] flex items-center justify-between px-5">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-[#0f172a]">
                  Startup Ka Mall
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Advisor Workspace
                </p>
              </div>

              <button
                onClick={() =>
                  setSidebarOpen(false)
                }
                className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center"
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
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200 ${
                      item.active
                        ? "bg-[#eef2ff] text-violet-600"
                        : "text-gray-600 hover:bg-[#f8fafc]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />

                    <span className="font-semibold text-[14px]">
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
      <aside className="hidden lg:flex w-[270px] bg-[#fcfcfd] border-r border-[#e9eef5] flex-col">
        {/* LOGO */}
        <div className="h-24 border-b border-[#edf1f7] flex items-center px-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-xl font-bold">
              A
            </div>

            <div>
              <h2 className="text-[24px] font-bold tracking-tight text-[#0f172a] leading-none">
                Startup Ka Mall
              </h2>

              <p className="text-xs text-gray-500 mt-2">
                Advisor Workspace
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
                className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200 ${
                  item.active
                    ? "bg-[#eef2ff] text-violet-600"
                    : "text-gray-600 hover:bg-white"
                }`}
              >
                <Icon className="w-5 h-5" />

                <span className="font-semibold text-[14px]">
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>

        {/* CARD */}
        <div className="p-4">
          <div className="rounded-[28px] border border-violet-200 bg-white p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-violet-500">
              Active Requests
            </p>

            <h3 className="mt-3 text-4xl font-bold text-[#0f172a]">
              34
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Founder mentorship opportunities
            </p>

            <div className="mt-5 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
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
              <h1 className="text-[28px] font-bold tracking-tight text-[#0f172a] leading-none">
                Advisor Requests
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Manage founder mentorship requests
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative h-12 w-12 rounded-2xl border border-[#edf1f7] bg-white flex items-center justify-center hover:bg-[#fafafa] transition">
              <Bell className="w-5 h-5 text-gray-700" />
            </button>

            <Link
              href="/advisor/profile"
              className="h-12 px-3 rounded-2xl border border-[#edf1f7] bg-white flex items-center gap-3 hover:bg-[#fafafa] transition"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">
                K
              </div>

              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-[#0f172a]">
                  Krishna Shah
                </p>

                <p className="text-xs text-gray-500">
                  Platinum Advisor
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
                    Founder Requests
                  </span>
                </div>

                <h2 className="mt-6 text-4xl lg:text-5xl font-bold tracking-tight text-[#0f172a] leading-[1.1]">
                  Manage Advisory Requests
                </h2>

                <p className="mt-5 text-base leading-relaxed text-gray-500">
                  Review founder applications, accept
                  mentorship opportunities and manage
                  advisory relationships.
                </p>
              </div>

              {/* SEARCH */}
              <div className="w-full xl:w-[380px]">
                <div className="rounded-[28px] border border-[#e8edf5] bg-[#fafbff] p-5">
                  <div className="flex items-center gap-3 rounded-2xl border border-[#edf1f7] bg-white px-4 h-14">
                    <Search className="w-5 h-5 text-gray-400" />

                    <input
                      value={searchQuery}
                      onChange={(e) =>
                        setSearchQuery(e.target.value)
                      }
                      placeholder="Search requests..."
                      className="flex-1 bg-transparent outline-none text-sm"
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {statuses.map((status) => (
                      <button
                        key={status}
                        onClick={() =>
                          setSelectedStatus(status)
                        }
                        className={`h-11 px-5 rounded-2xl text-sm font-semibold transition ${
                          selectedStatus === status
                            ? "bg-violet-500 text-white"
                            : "bg-white border border-[#edf1f7] text-gray-700"
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

          {/* REQUESTS */}
          <section className="mt-7 space-y-5">
            {filteredRequests.map((request) => {
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
                  className="rounded-[32px] border border-[#e8edf5] bg-white p-6"
                >
                  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                    {/* LEFT */}
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-2xl font-bold tracking-tight text-[#0f172a]">
                          {request.startup}
                        </h3>

                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                          {request.match} Match
                        </span>

                        {isAccepted && (
                          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                            Accepted
                          </span>
                        )}

                        {isRejected && (
                          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                            Rejected
                          </span>
                        )}
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          {request.category}
                        </span>

                        <span>•</span>

                        <span>{request.stage}</span>

                        <span>•</span>

                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {request.location}
                        </span>

                        <span>•</span>

                        <span>
                          Founder: {request.founder}
                        </span>
                      </div>

                      <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                        <Clock3 className="w-4 h-4" />
                        Applied 2 hours ago
                      </div>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        className="h-11 px-5 rounded-2xl border border-[#e8edf5] bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center justify-center"
                      >
                        View Profile
                      </button>

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
                                  id !== request.id
                              )
                          )
                        }}
                        disabled={
                          isAccepted || isRejected
                        }
                        className={`h-11 px-5 rounded-2xl text-sm font-semibold transition ${
                          isAccepted
                            ? "bg-emerald-500 text-white"
                            : isRejected
                            ? "bg-gray-200 text-gray-500"
                            : "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90"
                        }`}
                      >
                        {isAccepted ? (
                          <span className="flex items-center gap-2">
                            <Check className="w-4 h-4" />
                            Accepted
                          </span>
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
                          isAccepted || isRejected
                        }
                        className={`h-11 px-5 rounded-2xl text-sm font-semibold transition ${
                          isRejected
                            ? "bg-red-500 text-white"
                            : isAccepted
                            ? "bg-gray-200 text-gray-500"
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
            })}

            {filteredRequests.length === 0 && (
              <div className="rounded-[32px] border border-dashed border-[#dbe2ea] bg-white p-16 text-center">
                <h3 className="text-2xl font-bold text-[#0f172a]">
                  No requests found
                </h3>

                <p className="mt-3 text-sm text-gray-500">
                  Try changing filters or search query.
                </p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}