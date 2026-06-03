"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import {
  ArrowUpRight,
  Bell,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CreditCard,
  Download,
  IndianRupee,
  LayoutDashboard,
  Menu,
  Search,
  Sparkles,
  TrendingUp,
  User,
  Wallet,
  X,
} from "lucide-react"

import AdvisorStatCard from "@/components/advisor/AdvisorStatCard"

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
    amount: 25000,
    date: "18 May 2026",
    status: "Paid",
  },

  {
    id: 2,
    startup: "HealthSync",
    session: "Fundraising Guidance",
    amount: 18000,
    date: "16 May 2026",
    status: "Pending",
  },

  {
    id: 3,
    startup: "GreenByte",
    session: "Mentorship Call",
    amount: 12000,
    date: "14 May 2026",
    status: "Paid",
  },
]

export default function AdvisorEarningsPage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  const [selectedFilter, setSelectedFilter] =
    useState("All")

  const filters = [
    "All",
    "Paid",
    "Pending",
  ]

  const filteredEarnings = useMemo(() => {
    return earningsData.filter((item) => {
      if (selectedFilter === "All")
        return true

      return (
        item.status === selectedFilter
      )
    })
  }, [selectedFilter])

  const totalEarnings = useMemo(() => {
    return earningsData.reduce(
      (acc, item) => acc + item.amount,
      0
    )
  }, [])

  const paidEarnings = useMemo(() => {
    return earningsData
      .filter(
        (item) => item.status === "Paid"
      )
      .reduce(
        (acc, item) => acc + item.amount,
        0
      )
  }, [])

  const pendingEarnings = useMemo(() => {
    return earningsData
      .filter(
        (item) =>
          item.status === "Pending"
      )
      .reduce(
        (acc, item) => acc + item.amount,
        0
      )
  }, [])

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
                  Monthly Revenue
                </p>

                <h3 className="mt-3 text-4xl font-black tracking-tight text-foreground">
                  ₹2.4L
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Advisor earnings this month
                </p>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-primary/10">
                  <div className="h-full w-[84%] rounded-full bg-primary" />
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

        {/* REVENUE CARD */}
        <div className="p-4">
          <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Monthly Revenue
            </p>

            <h3 className="mt-3 text-4xl font-black tracking-tight text-foreground">
              ₹2.4L
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Advisor earnings this month
            </p>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-primary/10">
              <div className="h-full w-[84%] rounded-full bg-primary" />
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
                Earnings
              </h1>

              <p className="mt-1 text-sm text-muted-foreground">
                Track mentorship revenue &
                advisor payouts
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
                    Revenue Overview
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-black tracking-tight text-foreground lg:text-5xl">
                  Advisor Revenue Dashboard
                </h2>

                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  Track mentorship earnings,
                  startup consultations,
                  payouts and advisor income
                  analytics across the
                  ecosystem.
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex h-12 items-center gap-2 rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                  <Download className="h-4 w-4" />
                  Download Report
                </button>

                <button className="inline-flex h-12 items-center gap-2 rounded-2xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition hover:bg-muted">
                  <CreditCard className="h-4 w-4" />
                  Withdraw Funds
                </button>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <AdvisorStatCard
              icon={IndianRupee}
              title={`₹${(
                totalEarnings / 1000
              ).toFixed(0)}K`}
              subtitle="Total Earnings"
              iconBg="bg-primary/10"
              iconColor="text-primary"
            />

            <AdvisorStatCard
              icon={CheckCircle2}
              title={`₹${(
                paidEarnings / 1000
              ).toFixed(0)}K`}
              subtitle="Paid Earnings"
              iconBg="bg-emerald-100"
              iconColor="text-emerald-600"
            />

            <AdvisorStatCard
              icon={Clock3}
              title={`₹${(
                pendingEarnings / 1000
              ).toFixed(0)}K`}
              subtitle="Pending Payouts"
              iconBg="bg-orange-100"
              iconColor="text-orange-500"
            />

            <AdvisorStatCard
              icon={TrendingUp}
              title="+18%"
              subtitle="Monthly Growth"
              iconBg="bg-fuchsia-100"
              iconColor="text-fuchsia-600"
            />
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
                    : "border border-border bg-card text-muted-foreground hover:bg-muted"
                }`}
              >
                {filter}
              </button>
            ))}
          </section>

          {/* EARNINGS LIST */}
          <section className="mt-7 space-y-5">
            {filteredEarnings.map(
              (earning) => (
                <div
                  key={earning.id}
                  className="rounded-[32px] border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                    {/* LEFT */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-black tracking-tight text-foreground">
                          {earning.startup}
                        </h3>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            earning.status ===
                            "Paid"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {earning.status}
                        </span>
                      </div>

                      <p className="mt-4 text-sm text-muted-foreground">
                        {earning.session}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span>
                          {earning.date}
                        </span>

                        <span>•</span>

                        <span>
                          Advisor Mentorship
                          Session
                        </span>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-4 xl:items-end">
                      <h2 className="text-3xl font-black tracking-tight text-foreground">
                        ₹
                        {earning.amount.toLocaleString()}
                      </h2>

                      <div className="flex flex-wrap gap-3">
                        <button className="h-11 rounded-2xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition hover:bg-muted">
                          Download Invoice
                        </button>

                        <button className="inline-flex h-11 items-center gap-2 rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                          View Details

                          <ArrowUpRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}

            {filteredEarnings.length ===
              0 && (
              <div className="rounded-[32px] border border-dashed border-border bg-card p-16 text-center">
                <h3 className="text-2xl font-black text-foreground">
                  No earnings found
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
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