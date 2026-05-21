"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

import {
  ArrowUpRight,
  BarChart3,
  Bell,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Clock3,
  LayoutDashboard,
  Menu,
  MessageSquare,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
  Wallet,
  X,
  Flame,
  FileText,
  FolderOpen,
} from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Consultations",
    href: "/admin/consultations",
    icon: CalendarDays,
    active: true,
  },
  {
    name: "Investor Interests",
    href: "/admin/investor-interests",
    icon: Briefcase,
  },
  {
    name: "Program Applications",
    href: "/admin/program-applications",
    icon: FileText,
  },
  {
    name: "Founders",
    href: "/admin/founders",
    icon: Users,
  },
  {
    name: "Advisors",
    href: "/admin/advisors",
    icon: UserCheck,
  },
  {
    name: "Investors",
    href: "/admin/investors",
    icon: Flame,
  },
  {
    name: "Programs",
    href: "/admin/programs",
    icon: BarChart3,
  },
  {
    name: "Resources",
    href: "/admin/resources",
    icon: FolderOpen,
  },
  {
    name: "Profile",
    href: "/admin/profile",
    icon: ShieldCheck,
  },
]

const consultationData = [
  {
    id: 1,
    startup: "FinVerse AI",
    founder: "Aarav Mehta",
    advisor: "Riya Kapoor",
    topic: "Fundraising Strategy",
    date: "20 May 2026",
    time: "5:00 PM",
    status: "Scheduled",
  },
  {
    id: 2,
    startup: "HealthSync",
    founder: "Neha Sharma",
    advisor: "Kunal Verma",
    topic: "Go To Market Planning",
    date: "21 May 2026",
    time: "11:30 AM",
    status: "Pending",
  },
  {
    id: 3,
    startup: "GreenByte",
    founder: "Rahul Jain",
    advisor: "Aditi Rao",
    topic: "Product Scaling",
    date: "18 May 2026",
    time: "3:00 PM",
    status: "Completed",
  },
]

export default function AdminConsultationsPage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  const [selectedFilter, setSelectedFilter] =
    useState("All")

  const [searchQuery, setSearchQuery] = 
    useState("")

  const filters = [
    "All",
    "Scheduled",
    "Pending",
    "Completed",
  ]

  const filteredConsultations = useMemo(() => {
  return consultationData.filter((item) => {
    const matchesFilter =
      selectedFilter === "All" ||
      item.status === selectedFilter

    const matchesSearch =
      item.startup
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      item.founder
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      item.advisor
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      item.topic
        .toLowerCase()
        .includes(searchQuery.toLowerCase())

    return matchesFilter && matchesSearch
  })
}, [selectedFilter, searchQuery])

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="w-[280px] bg-white border-r border-[#e9eef5] h-full flex flex-col">
            {/* TOP */}
            <div className="h-20 border-b border-[#edf1f7] px-5 flex items-center justify-between">
              <div>
                <h2 className="text-[24px] font-bold text-[#0f172a] leading-none">
                  Startup Ka Mall
                </h2>

                <p className="text-xs text-gray-500 mt-2">
                  Admin Workspace
                </p>
              </div>

              <button
                onClick={() =>
                  setSidebarOpen(false)
                }
                className="h-10 w-10 rounded-xl bg-[#f5f7fb] flex items-center justify-center"
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
                    className={`h-12 px-4 rounded-2xl flex items-center gap-3 transition ${
                      item.active
                        ? "bg-gradient-to-r from-sky-500 to-blue-500 text-white"
                        : "text-[#475569] hover:bg-[#f8fafc]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />

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
      <aside className="hidden lg:flex w-[270px] bg-white border-r border-[#e9eef5] flex-col">
        {/* TOP */}
        <div className="h-20 border-b border-[#edf1f7] px-6 flex items-center">
          <div>
            <h2 className="text-[26px] font-bold text-[#0f172a] leading-none">
              Startup Ka Mall
            </h2>

            <p className="text-xs text-gray-500 mt-2">
              Admin Workspace
            </p>
          </div>
        </div>

        {/* NAV */}
        <div className="flex-1 px-4 py-5 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`h-12 px-4 rounded-2xl flex items-center gap-3 transition ${
                  item.active
                    ? "bg-gradient-to-r from-sky-500 to-blue-500 text-white"
                    : "text-[#475569] hover:bg-[#f8fafc]"
                }`}
              >
                <Icon className="w-4 h-4" />

                <span className="font-semibold text-sm">
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* HEADER */}
        <header className="h-20 border-b border-[#edf1f7] bg-[#f5f7fb]/90 backdrop-blur-xl px-5 lg:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                setSidebarOpen(true)
              }
              className="lg:hidden h-10 w-10 rounded-xl border border-[#e9eef5] bg-white flex items-center justify-center"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div>
              <h1 className="text-[28px] font-bold tracking-tight text-[#0f172a] leading-none">
                Consultations
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Manage founder-advisor consultation workflows
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <button className="h-11 w-11 rounded-2xl border border-[#edf1f7] bg-white flex items-center justify-center">
              <Bell className="w-5 h-5 text-[#475569]" />
            </button>

            <Link
              href="/admin/profile"
              className="h-11 w-11 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 flex items-center justify-center text-white font-bold"
            >
              A
            </Link>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 p-5 lg:p-7 overflow-x-hidden">
          {/* TOP */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
            <div>
              <h2 className="text-[38px] font-bold tracking-tight text-[#0f172a]">
                Consultation Management
              </h2>

              <p className="mt-2 text-[15px] text-[#64748b]">
                Track meetings, mentorship requests and advisor sessions.
              </p>
            </div>

            {/* SEARCH */}
            <div className="h-12 w-full xl:w-[280px] rounded-full border border-[#e2e8f0] bg-white px-5 flex items-center gap-3">
              <Search className="w-4 h-4 text-[#94a3b8]" />

              <input
                type="text"
                placeholder="Search consultations..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-[#94a3b8]"
              />
            </div>
          </div>

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="rounded-[28px] border border-[#e8edf5] bg-white p-5">
              <CalendarDays className="w-6 h-6 text-sky-500" />

              <h3 className="mt-5 text-4xl font-bold text-[#0f172a]">
                37
              </h3>

              <p className="mt-1 text-sm text-[#64748b]">
                Total Consultations
              </p>
            </div>

            <div className="rounded-[28px] border border-[#e8edf5] bg-white p-5">
              <Clock3 className="w-6 h-6 text-orange-500" />

              <h3 className="mt-5 text-4xl font-bold text-[#0f172a]">
                11
              </h3>

              <p className="mt-1 text-sm text-[#64748b]">
                Pending Sessions
              </p>
            </div>

            <div className="rounded-[28px] border border-[#e8edf5] bg-white p-5">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />

              <h3 className="mt-5 text-4xl font-bold text-[#0f172a]">
                26
              </h3>

              <p className="mt-1 text-sm text-[#64748b]">
                Completed Sessions
              </p>
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
                className={`h-11 px-5 rounded-full text-sm font-semibold transition ${
                  selectedFilter === filter
                    ? "bg-[#071133] text-white"
                    : "bg-white border border-[#e8edf5] text-[#475569]"
                }`}
              >
                {filter}
              </button>
            ))}
          </section>

          {/* LIST */}
          <section className="mt-7 space-y-5">
            {filteredConsultations.map(
              (consultation) => (
                <div
                  key={consultation.id}
                  className="rounded-[30px] border border-[#e8edf5] bg-white p-6"
                >
                  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                    {/* LEFT */}
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-2xl font-bold text-[#0f172a]">
                          {consultation.startup}
                        </h3>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            consultation.status ===
                            "Completed"
                              ? "bg-emerald-100 text-emerald-700"
                              : consultation.status ===
                                "Pending"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-sky-100 text-sky-700"
                          }`}
                        >
                          {consultation.status}
                        </span>
                      </div>

                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-[#94a3b8]">
                            Founder
                          </p>

                          <p className="mt-1 font-semibold text-[#0f172a]">
                            {consultation.founder}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-wider text-[#94a3b8]">
                            Advisor
                          </p>

                          <p className="mt-1 font-semibold text-[#0f172a]">
                            {consultation.advisor}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-wider text-[#94a3b8]">
                            Topic
                          </p>

                          <p className="mt-1 font-semibold text-[#0f172a]">
                            {consultation.topic}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-wider text-[#94a3b8]">
                            Schedule
                          </p>

                          <p className="mt-1 font-semibold text-[#0f172a]">
                            {consultation.date} •{" "}
                            {consultation.time}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-wrap gap-3">
                      <button className="h-11 px-5 rounded-full border border-[#e8edf5] bg-white text-sm font-semibold text-[#475569] hover:bg-[#fafafa] transition flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Message
                      </button>

                      <button className="h-11 px-5 rounded-full bg-[#071133] text-white text-sm font-semibold hover:bg-[#0b173f] transition flex items-center gap-2">
                        View Details
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </section>
        </main>
      </div>
    </div>
  )
}