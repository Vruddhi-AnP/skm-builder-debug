"use client"

import { useMemo, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useLocalUser, getUserInitial, getUserDisplayName } from "@/hooks/useLocalUser";

import {
  ArrowRight,
  BarChart3,
  Bell,
  Briefcase,
  CalendarDays,
  Clock3,
  Menu,
  Search,
  Sparkles,
  Star,
  User,
  Users,
  Wallet,
  X,
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
    stage: "Seed Stage",
    founder: "Aarav Mehta",
    score: "96%",
    category: "FinTech",
  },
  {
    id: 2,
    startup: "HealthSync",
    stage: "Pre-Series A",
    founder: "Riya Kapoor",
    score: "92%",
    category: "HealthTech",
  },
  {
    id: 3,
    startup: "GreenByte",
    stage: "MVP Ready",
    founder: "Kabir Shah",
    score: "89%",
    category: "ClimateTech",
  },
]

const sessions = [
  {
    id: 1,
    startup: "FinVerse AI",
    time: "Today • 5:00 PM",
  },
  {
    id: 2,
    startup: "GreenByte",
    time: "Tomorrow • 11:30 AM",
  },
]

export default function AdvisorDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [acceptedRequests, setAcceptedRequests] = useState<number[]>([])
  const [joinedSessions, setJoinedSessions] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] =
    useState("All")

  const user = useLocalUser();
  const pathname = usePathname();

  const categories = [
    "All",
    "FinTech",
    "HealthTech",
    "ClimateTech",
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

      const matchesCategory =
        selectedCategory === "All" ||
        item.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-[#f6f8fc] flex">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="w-67.5 bg-[#F7F4EE]/95 h-full border-r border-[#edf1f7] flex flex-col">
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
                onClick={() => setSidebarOpen(false)}
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
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200 ${
                      pathname === item.href
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
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* SIDEBAR */}
      <aside className="hidden lg:flex w-67.5 bg-[#fcfcfd] border-r border-[#e9eef5] flex-col">
        {/* Logo */}
        <div className="h-24 border-b border-[#edf1f7] flex items-center px-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-xl font-bold">
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

        {/* NAVIGATION */}
        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200 ${
                  pathname === item.href
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

        {/* BOTTOM CARD */}
        <div className="p-4">
          <div className="rounded-[28px] border border-violet-200 bg-[#F7F4EE]/95 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-violet-500">
              Advisor Impact
            </p>

            <h3 className="mt-3 text-4xl font-bold text-[#0f172a]">
              91
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Top ecosystem advisor
            </p>

            <div className="mt-5 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full w-[91%] rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500" />
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
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden h-11 w-11 rounded-xl bg-[#F7F4EE]/95 border border-[#edf1f7] flex items-center justify-center"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div>
              <h1 className="text-[28px] font-bold tracking-tight text-[#0f172a] leading-none">
                Advisor Dashboard
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Mentorship & ecosystem workspace
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
                href="/advisor/notifications"
                className="relative h-12 w-12 rounded-2xl border border-[#edf1f7] bg-[#F7F4EE]/95 flex items-center justify-center hover:bg-[#fafafa] transition"
              >
              <Bell className="w-5 h-5 text-gray-700" />

              <span className="absolute top-3 right-3 h-2.5 w-2.5 rounded-full bg-red-500" />
            </Link>

            <Link
              href="/advisor/profile"
              className="h-12 px-3 rounded-2xl border border-[#edf1f7] bg-[#F7F4EE]/95 flex items-center gap-3 hover:bg-[#fafafa] transition"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-fuchsia-500 text-sm font-bold text-white">
                {getUserInitial(user?.name)}
              </div>

              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-[#0f172a]">
                  {getUserDisplayName(user?.name)}
                </p>
                <p className="text-xs text-gray-500 capitalize">
                  {user?.role ?? "Advisor"}
                </p>
              </div>
            </Link>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 p-5 lg:p-7 overflow-x-hidden space-y-7">
          {/* HERO */}
          <section className="rounded-[36px] border border-[#e8edf5] bg-[#F7F4EE]/95 p-6 lg:p-8">
            <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_360px] gap-8 items-center">
              {/* LEFT */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />

                  <span className="text-sm font-semibold text-emerald-700">
                    Advisor Workspace Active
                  </span>
                </div>

                <h1 className="mt-6 text-4xl lg:text-5xl font-bold tracking-tight text-[#0f172a] leading-[1.05]">
                  Welcome Back,
                  <br />
                  <span className="text-violet-600">
                    {user?.name?.split(" ")[0] ?? "Advisor"}
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-500">
                  Continue mentoring startups, improve founder
                  readiness, conduct strategic sessions and grow
                  your advisor ecosystem presence.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/advisor/discover"
                    className="h-11 px-5 rounded-2xl bg-linear-to-r from-violet-500 to-fuchsia-500 text-sm font-semibold text-white flex items-center justify-center"
                  >
                    Discover Startups
                  </Link>

                  <Link
                    href="/advisor/sessions"
                    className="h-11 px-5 rounded-2xl border border-[#e8edf5] bg-[#F7F4EE]/95 text-sm font-semibold text-gray-700 flex items-center justify-center"
                  >
                    View Sessions
                  </Link>
                </div>
              </div>

              {/* SCORE */}
              <div className="rounded-[30px] border-2 border-violet-500 bg-[#F7F4EE]/95 p-6">
                <p className="text-base font-semibold text-[#0f172a]">
                  Advisor Impact
                </p>

                <h2 className="mt-5 text-6xl font-bold tracking-tight text-[#0f172a]">
                  91
                </h2>

                <p className="mt-4 text-base text-gray-500">
                  Top ecosystem mentor
                </p>

                <div className="mt-7 h-3 w-full rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full w-[91%] rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500" />
                </div>
              </div>
            </div>
          </section>

          {/* SEARCH + FILTER */}
          <section className="rounded-[32px] border border-[#e8edf5] bg-[#F7F4EE]/95 p-5">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
              {/* SEARCH */}
              <div className="relative w-full lg:max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                <input
                  type="text"
                  placeholder="Search startups or founders..."
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  className="w-full h-12 rounded-2xl border border-[#edf1f7] bg-[#fafbff] pl-12 pr-4 text-sm outline-none focus:border-violet-400"
                />
              </div>

              {/* FILTERS */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() =>
                      setSelectedCategory(category)
                    }
                    className={`h-11 px-5 rounded-2xl text-sm font-semibold transition ${
                      selectedCategory === category
                        ? "bg-violet-500 text-white"
                        : "border border-[#e8edf5] bg-[#F7F4EE]/95 text-gray-700 hover:bg-[#fafafa]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="rounded-[28px] border border-[#e8edf5] bg-[#F7F4EE]/95 p-6">
              <div className="flex items-center justify-between">
                <Briefcase className="w-6 h-6 text-violet-500" />

                <span className="text-sm font-semibold text-emerald-600">
                  +12%
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-bold tracking-tight text-[#0f172a]">
                34
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Advisory Requests
              </p>
            </div>

            <div className="rounded-[28px] border border-[#e8edf5] bg-[#F7F4EE]/95 p-6">
              <div className="flex items-center justify-between">
                <CalendarDays className="w-6 h-6 text-blue-500" />

                <span className="text-sm font-semibold text-emerald-600">
                  +8%
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-bold tracking-tight text-[#0f172a]">
                18
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Sessions Conducted
              </p>
            </div>

            <div className="rounded-[28px] border border-[#e8edf5] bg-[#F7F4EE]/95 p-6">
              <div className="flex items-center justify-between">
                <Wallet className="w-6 h-6 text-fuchsia-500" />

                <span className="text-sm font-semibold text-emerald-600">
                  +24%
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-bold tracking-tight text-[#0f172a]">
                ₹2L
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Monthly Earnings
              </p>
            </div>

            <div className="rounded-[28px] border border-[#e8edf5] bg-[#F7F4EE]/95 p-6">
              <div className="flex items-center justify-between">
                <Users className="w-6 h-6 text-orange-500" />

                <span className="text-sm font-semibold text-emerald-600">
                  +17%
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-bold tracking-tight text-[#0f172a]">
                22
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Active Founders
              </p>
            </div>
          </section>

          {/* CONTENT */}
          <section className="grid grid-cols-1 xl:grid-cols-[1.4fr_360px] gap-5">
            {/* REQUESTS */}
            <div className="rounded-[32px] border border-[#e8edf5] bg-[#F7F4EE]/95 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-[#0f172a]">
                    Advisor Requests
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Founders requesting mentorship
                  </p>
                </div>

                <Link
                  href="/advisor/requests"
                  className="hidden md:flex items-center gap-2 text-sm font-semibold text-violet-600"
                >
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-6 space-y-4">
                {filteredRequests.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-[26px] border border-[#edf1f7] bg-[#fafbff] p-5"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl font-bold tracking-tight text-[#0f172a]">
                            {item.startup}
                          </h3>

                          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                            {item.score} Match
                          </span>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-500">
                          <span>{item.stage}</span>

                          <span>•</span>

                          <span>{item.category}</span>

                          <span>•</span>

                          <span>{item.founder}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <button
                          className="h-11 px-4 rounded-2xl border border-[#e8edf5] bg-[#F7F4EE]/95 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center justify-center"
                        >
                          View Profile
                        </button>

                        <button
                          onClick={() => {
                            setAcceptedRequests((prev) => [...prev, item.id])
                          }}
                          disabled={acceptedRequests.includes(item.id)}
                          className={`h-11 px-5 rounded-2xl text-sm font-semibold transition ${
                            acceptedRequests.includes(item.id)
                              ? "bg-emerald-500 text-white"
                              : "bg-linear-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90"
                          }`}
                        >
                          {acceptedRequests.includes(item.id)
                            ? "Accepted"
                            : "Accept Request"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredRequests.length === 0 && (
                  <div className="rounded-[24px] border border-dashed border-[#dbe2ea] bg-[#fafbff] p-10 text-center">
                    <p className="text-sm text-gray-500">
                      No startup requests found.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-5"></div>
              {/* SESSIONS */}
              <div className="rounded-[32px] border border-[#e8edf5] bg-[#F7F4EE]/95 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold tracking-tight text-[#0f172a]">
                    Upcoming Sessions
                  </h3>

                  <CalendarDays className="w-5 h-5 text-gray-400" />
                </div>

                <div className="mt-6 space-y-4">
                  {sessions.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-[24px] border border-[#edf1f7] bg-[#fafbff] p-5"
                    >
                      <h4 className="text-lg font-bold text-[#0f172a]">
                        {item.startup}
                      </h4>

                      <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                        <Clock3 className="w-4 h-4" />

                        {item.time}
                      </div>

                      <button
                        onClick={() => {
                          setJoinedSessions((prev) => [...prev, item.id])
                        }}
                        disabled={joinedSessions.includes(item.id)}
                        className={`mt-5 h-10 w-full rounded-2xl text-sm font-semibold transition ${
                          joinedSessions.includes(item.id)
                            ? "bg-emerald-500 text-white"
                            : "bg-[#0f172a] text-white hover:opacity-90"
                        }`}
                      >
                        {joinedSessions.includes(item.id)
                          ? "Joined"
                          : "Join Session"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* QUICK ACTIONS */}
              <div className="rounded-[32px] border border-[#e8edf5] bg-[#F7F4EE]/95 p-6">
                <h3 className="text-2xl font-bold tracking-tight text-[#0f172a]">
                  Quick Actions
                </h3>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <Link
                      href="/advisor/earnings"
                      className="rounded-[22px] border border-[#edf1f7] bg-[#fafbff] p-5 hover:bg-[#F7F4EE]/95 transition"
                    >
                      <Wallet className="w-5 h-5 text-fuchsia-500 mx-auto" />
                      <p className="mt-3 text-sm font-semibold text-[#0f172a] text-center">
                        Earnings
                      </p>
                    </Link>

                    <Link
                      href="/advisor/profile"
                      className="rounded-[22px] border border-[#edf1f7] bg-[#fafbff] p-5 hover:bg-[#F7F4EE]/95 transition"
                    >
                      <Star className="w-5 h-5 text-orange-500 mx-auto" />
                      <p className="mt-3 text-sm font-semibold text-[#0f172a] text-center">
                        Reviews
                      </p>
                    </Link>
                  </div>
              </div>
          </section>
        </main>
      </div>
    </div>  
  )
}