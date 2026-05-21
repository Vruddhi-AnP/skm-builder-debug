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
  CreditCard,
  Download,
  IndianRupee,
  Menu,
  Search,
  Sparkles,
  TrendingUp,
  User,
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
    active: true,
  },
  {
    name: "Profile",
    href: "/advisor/profile",
    icon: User,
  },
]

const earningsData = [
  {
    id: 1,
    startup: "FinVerse AI",
    session: "Growth Strategy Session",
    amount: "₹25,000",
    date: "18 May 2026",
    status: "Paid",
  },
  {
    id: 2,
    startup: "HealthSync",
    session: "Fundraising Guidance",
    amount: "₹18,000",
    date: "16 May 2026",
    status: "Pending",
  },
  {
    id: 3,
    startup: "GreenByte",
    session: "Mentorship Call",
    amount: "₹12,000",
    date: "14 May 2026",
    status: "Paid",
  },
]

export default function AdvisorEarningsPage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  const [selectedFilter, setSelectedFilter] =
    useState("All")

  const filters = ["All", "Paid", "Pending"]

  const filteredEarnings = useMemo(() => {
    return earningsData.filter((item) => {
      if (selectedFilter === "All") return true

      return item.status === selectedFilter
    })
  }, [selectedFilter])

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
              Monthly Revenue
            </p>

            <h3 className="mt-3 text-4xl font-bold text-[#0f172a]">
              ₹2.4L
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Advisor earnings this month
            </p>

            <div className="mt-5 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
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
              <h1 className="text-[28px] font-bold tracking-tight text-[#0f172a] leading-none">
                Earnings
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Track payments & mentorship revenue
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
                    Revenue Overview
                  </span>
                </div>

                <h2 className="mt-6 text-4xl lg:text-5xl font-bold tracking-tight text-[#0f172a] leading-[1.1]">
                  Track Advisor Earnings
                </h2>

                <p className="mt-5 text-base leading-relaxed text-gray-500">
                  Monitor mentorship payments, payouts
                  and monthly advisor income performance.
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-wrap gap-3">
                <button className="h-12 px-5 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Report
                </button>

                <button className="h-12 px-5 rounded-2xl border border-[#e8edf5] bg-white text-sm font-semibold text-[#0f172a] flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Withdraw Funds
                </button>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="rounded-[28px] border border-[#e8edf5] bg-white p-6">
              <IndianRupee className="w-6 h-6 text-violet-500" />

              <h3 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a]">
                ₹2.4L
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Total Earnings
              </p>
            </div>

            <div className="rounded-[28px] border border-[#e8edf5] bg-white p-6">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />

              <h3 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a]">
                ₹1.8L
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Paid Earnings
              </p>
            </div>

            <div className="rounded-[28px] border border-[#e8edf5] bg-white p-6">
              <Clock3 className="w-6 h-6 text-orange-500" />

              <h3 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a]">
                ₹60K
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Pending Payouts
              </p>
            </div>

            <div className="rounded-[28px] border border-[#e8edf5] bg-white p-6">
              <TrendingUp className="w-6 h-6 text-fuchsia-500" />

              <h3 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a]">
                +18%
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Monthly Growth
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
                className={`h-11 px-5 rounded-2xl text-sm font-semibold transition ${
                  selectedFilter === filter
                    ? "bg-violet-500 text-white"
                    : "border border-[#e8edf5] bg-white text-gray-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </section>

          {/* TABLE */}
          <section className="mt-7 space-y-5">
            {filteredEarnings.map((earning) => (
              <div
                key={earning.id}
                className="rounded-[32px] border border-[#e8edf5] bg-white p-6"
              >
                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                  {/* LEFT */}
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl font-bold tracking-tight text-[#0f172a]">
                        {earning.startup}
                      </h3>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          earning.status === "Paid"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {earning.status}
                      </span>
                    </div>

                    <p className="mt-4 text-sm text-gray-500">
                      {earning.session}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <span>{earning.date}</span>

                      <span>•</span>

                      <span>
                        Advisor Mentorship Session
                      </span>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col items-start xl:items-end gap-4">
                    <h2 className="text-3xl font-bold tracking-tight text-[#0f172a]">
                      {earning.amount}
                    </h2>

                    <div className="flex flex-wrap gap-3">
                      <button className="h-11 px-5 rounded-2xl border border-[#e8edf5] bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition">
                        Download Invoice
                      </button>

                      <button className="h-11 px-5 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold flex items-center gap-2">
                        View Details
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filteredEarnings.length === 0 && (
              <div className="rounded-[32px] border border-dashed border-[#dbe2ea] bg-white p-16 text-center">
                <h3 className="text-2xl font-bold text-[#0f172a]">
                  No earnings found
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