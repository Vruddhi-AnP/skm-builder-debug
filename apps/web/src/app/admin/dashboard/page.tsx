"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

import {
  Activity,
  BarChart3,
  Bell,
  Briefcase,
  CalendarDays,
  FileText,
  Flame,
  FolderOpen,
  LayoutDashboard,
  Menu,
  Search,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
  X,
} from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    name: "Consultations",
    href: "/admin/consultations",
    icon: CalendarDays,
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

const stats = [
  {
    title: "Founders",
    value: "248",
    growth: "+12%",
    icon: Users,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Advisors",
    value: "64",
    growth: "+8%",
    icon: UserCheck,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Interests",
    value: "91",
    growth: "+16%",
    icon: Wallet,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Requests",
    value: "37",
    growth: "+5%",
    icon: Briefcase,
    color: "bg-fuchsia-100 text-fuchsia-600",
  },
  {
    title: "Applications",
    value: "14",
    growth: "+4%",
    icon: FileText,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Meetings",
    value: "22",
    growth: "+11%",
    icon: CalendarDays,
    color: "bg-indigo-100 text-indigo-600",
  },
]

const activities = [
  {
    title:
      "Founder submitted consultation request",
    time: "1h ago",
  },
  {
    title:
      "Investor showed interest in FinEdge AI",
    time: "2h ago",
  },
  {
    title: "Advisor meeting scheduled",
    time: "3h ago",
  },
  {
    title:
      "Program application approved",
    time: "5h ago",
  },
]

export default function AdminDashboardPage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  const [searchQuery, setSearchQuery] =
    useState("")

  const filteredActivities = useMemo(() => {
  return activities.filter((item) =>
    item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  )
}, [searchQuery])


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
                Admin Dashboard
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Manage ecosystem operations
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
          <div>
            <h2 className="text-[38px] font-bold tracking-tight text-[#0f172a]">
              Operations Dashboard
            </h2>

            <p className="mt-2 text-[15px] text-[#64748b]">
              Monitor ecosystem activity and operational workflows.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="mt-6 flex flex-col xl:flex-row xl:items-center gap-4">
            {/* SEARCH */}
            <div className="h-12 w-full xl:w-[280px] rounded-full border border-[#e2e8f0] bg-white px-5 flex items-center gap-3">
              <Search className="w-4 h-4 text-[#94a3b8]" />

              <input
                type="text"
                placeholder="Search activity..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-[#94a3b8]"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-3">
              <button className="h-12 px-5 rounded-full border border-[#e2e8f0] bg-white text-[#0f172a] text-sm font-semibold hover:bg-[#fafafa] transition">
                Export Report
              </button>

              <button className="h-12 px-5 rounded-full bg-[#071133] text-white text-sm font-semibold hover:bg-[#0b173f] transition">
                Generate Insights
              </button>
            </div>
          </div>

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {stats.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-[#e8edf5] bg-white p-5"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`h-12 w-12 rounded-2xl flex items-center justify-center ${item.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                      ↗ {item.growth}
                    </div>
                  </div>

                  <p className="mt-5 text-sm text-[#64748b]">
                    {item.title}
                  </p>

                  <h3 className="mt-2 text-4xl font-bold text-[#0f172a]">
                    {item.value}
                  </h3>
                </div>
              )
            })}
          </section>

          {/* BOTTOM */}
          <section className="mt-7 grid grid-cols-1 2xl:grid-cols-[1.5fr_1fr] gap-5">
            {/* ACTIVITY */}
            <div className="rounded-[30px] border border-[#e8edf5] bg-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a]">
                    Recent Activity
                  </h3>

                  <p className="mt-1 text-sm text-[#64748b]">
                    Latest platform updates
                  </p>
                </div>

                <div className="h-11 w-11 rounded-2xl bg-cyan-50 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-cyan-600" />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                
            {filteredActivities.length === 0 && (
              <div className="rounded-2xl border border-dashed border-[#dbe2ea] bg-[#fcfdff] px-6 py-10 text-center">
                <p className="text-sm font-medium text-[#64748b]">
                  No activity found
                </p>
              </div>
            )}

                {filteredActivities.map((activity) => (
                  <div
                    key={activity.title}
                    className="rounded-2xl border border-[#edf1f7] bg-[#fcfdff] px-4 py-4 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-cyan-500" />

                      <p className="text-sm font-medium text-[#0f172a]">
                        {activity.title}
                      </p>
                    </div>

                    <span className="text-xs text-[#94a3b8] whitespace-nowrap">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* PIPELINE */}
            <div className="rounded-[30px] border border-[#e8edf5] bg-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a]">
                    Request Pipeline
                  </h3>

                  <p className="mt-1 text-sm text-[#64748b]">
                    Workflow overview
                  </p>
                </div>

                <div className="h-11 w-11 rounded-2xl bg-violet-50 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-violet-600" />
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#0f172a]">
                      Pending
                    </p>

                    <span className="text-sm font-bold text-[#0f172a]">
                      72%
                    </span>
                  </div>

                  <div className="mt-3 h-2 rounded-full bg-[#e9eef5] overflow-hidden">
                    <div className="h-full w-[72%] rounded-full bg-amber-400" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#0f172a]">
                      Under Review
                    </p>

                    <span className="text-sm font-bold text-[#0f172a]">
                      48%
                    </span>
                  </div>

                  <div className="mt-3 h-2 rounded-full bg-[#e9eef5] overflow-hidden">
                    <div className="h-full w-[48%] rounded-full bg-cyan-500" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#0f172a]">
                      Scheduled
                    </p>

                    <span className="text-sm font-bold text-[#0f172a]">
                      36%
                    </span>
                  </div>

                  <div className="mt-3 h-2 rounded-full bg-[#e9eef5] overflow-hidden">
                    <div className="h-full w-[36%] rounded-full bg-violet-500" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#0f172a]">
                      Completed
                    </p>

                    <span className="text-sm font-bold text-[#0f172a]">
                      92%
                    </span>
                  </div>

                  <div className="mt-3 h-2 rounded-full bg-[#e9eef5] overflow-hidden">
                    <div className="h-full w-[92%] rounded-full bg-emerald-500" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}