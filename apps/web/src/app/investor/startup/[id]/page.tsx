"use client"

import { useState } from "react"
import Link from "next/link"

import {
  ArrowLeft,
  BarChart3,
  Bell,
  Bookmark,
  Briefcase,
  Building2,
  Check,
  Flame,
  Globe,
  IndianRupee,
  LinkIcon,
  MapPin,
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
  },
  {
    name: "Profile",
    href: "/investor/profile",
    icon: User,
  },
]

export default function InvestorStartupDetailsPage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  const [saved, setSaved] = useState(false)

  const [interested, setInterested] =
    useState(false)

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
                    className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-gray-600 hover:bg-[#fafafa] transition"
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
                className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-gray-600 hover:bg-[#fafafa] transition"
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
              Match Score
            </p>

            <h3 className="mt-4 text-5xl font-bold text-[#0f172a]">
              96%
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Investor-startup compatibility
            </p>

            <div className="mt-5 h-2 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
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

            <Link
              href="/investor/discover"
              className="h-11 w-11 rounded-2xl border border-[#edf1f7] bg-white flex items-center justify-center hover:bg-[#fafafa] transition"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </Link>

            <div>
              <h1 className="text-[30px] font-bold text-[#0f172a] leading-none">
                Startup Details
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Review startup investment opportunity
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
            <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">
              {/* LEFT */}
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">
                  <Sparkles className="w-4 h-4 text-violet-600" />

                  <span className="text-sm font-semibold text-violet-700">
                    Featured Startup
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <div className="h-20 w-20 rounded-[28px] bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-3xl font-bold">
                    F
                  </div>

                  <div>
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#0f172a] leading-none">
                      FinVerse AI
                    </h2>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        FinTech
                      </span>

                      <span>•</span>

                      <span>Seed Stage</span>

                      <span>•</span>

                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Mumbai, India
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-8 text-base leading-relaxed text-gray-500">
                  FinVerse AI is building AI-powered financial infrastructure helping SMEs automate capital operations, improve cashflow intelligence and simplify funding accessibility.
                </p>

                {/* ACTIONS */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={() =>
                      setInterested(true)
                    }
                    disabled={interested}
                    className={`h-12 px-6 rounded-2xl text-sm font-semibold transition ${
                      interested
                        ? "bg-emerald-500 text-white"
                        : "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90"
                    }`}
                  >
                    {interested ? (
                      <span className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        Interest Sent
                      </span>
                    ) : (
                      "Show Interest"
                    )}
                  </button>

                  <button
                    onClick={() =>
                      setSaved(!saved)
                    }
                    className={`h-12 px-6 rounded-2xl border text-sm font-semibold transition flex items-center gap-2 ${
                      saved
                        ? "border-violet-500 bg-violet-500 text-white"
                        : "border-[#e8edf5] bg-white text-gray-700 hover:bg-[#fafafa]"
                    }`}
                  >
                    <Star className="w-4 h-4" />

                    {saved
                      ? "Saved"
                      : "Save Startup"}
                  </button>

                  <button className="h-12 px-6 rounded-2xl border border-[#e8edf5] bg-white text-sm font-semibold text-gray-700 hover:bg-[#fafafa] transition flex items-center gap-2">
                    <LinkIcon className="w-4 h-4" />
                    Founder Profile
                  </button>
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-full xl:w-[340px] rounded-[32px] border border-[#e8edf5] bg-[#fafbff] p-6">
                <h3 className="text-xl font-bold text-[#0f172a]">
                  Investment Snapshot
                </h3>

                <div className="mt-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Funding Goal
                    </span>

                    <span className="text-sm font-semibold text-[#0f172a]">
                      ₹2 Crore
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Revenue
                    </span>

                    <span className="text-sm font-semibold text-[#0f172a]">
                      ₹35L ARR
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Users
                    </span>

                    <span className="text-sm font-semibold text-[#0f172a]">
                      12K+
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Team Size
                    </span>

                    <span className="text-sm font-semibold text-[#0f172a]">
                      18 Members
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Runway
                    </span>

                    <span className="text-sm font-semibold text-[#0f172a]">
                      16 Months
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="rounded-[30px] border border-[#e8edf5] bg-white p-6">
              <IndianRupee className="w-6 h-6 text-violet-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                ₹35L
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Annual Revenue
              </p>
            </div>

            <div className="rounded-[30px] border border-[#e8edf5] bg-white p-6">
              <Users className="w-6 h-6 text-fuchsia-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                12K+
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Active Users
              </p>
            </div>

            <div className="rounded-[30px] border border-[#e8edf5] bg-white p-6">
              <TrendingUp className="w-6 h-6 text-emerald-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                18%
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Monthly Growth
              </p>
            </div>

            <div className="rounded-[30px] border border-[#e8edf5] bg-white p-6">
              <Rocket className="w-6 h-6 text-orange-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                Seed
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Funding Stage
              </p>
            </div>
          </section>

          {/* DETAILS */}
          <section className="mt-7 grid grid-cols-1 xl:grid-cols-2 gap-5">
            {/* ABOUT */}
            <div className="rounded-[32px] border border-[#e8edf5] bg-white p-6">
              <h3 className="text-2xl font-bold text-[#0f172a]">
                About Startup
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-gray-500">
                FinVerse AI enables SMEs to automate financial intelligence, optimize funding decisions and simplify capital management through AI-driven workflows.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-violet-500" />

                  <span className="text-sm text-gray-700">
                    B2B SaaS Financial Infrastructure
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-violet-500" />

                  <span className="text-sm text-gray-700">
                    Operating Across India
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-violet-500" />

                  <span className="text-sm text-gray-700">
                    18 Member Core Team
                  </span>
                </div>
              </div>
            </div>

            {/* FOUNDERS */}
            <div className="rounded-[32px] border border-[#e8edf5] bg-white p-6">
              <h3 className="text-2xl font-bold text-[#0f172a]">
                Founder Information
              </h3>

              <div className="mt-6 flex items-center gap-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-xl font-bold">
                  A
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#0f172a]">
                    Aryan Mehta
                  </h4>

                  <p className="text-sm text-gray-500">
                    Founder & CEO
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-gray-500">
                Previously worked in fintech infrastructure and scaling startup operations across emerging markets.
              </p>

              <button className="mt-6 h-11 px-5 rounded-2xl border border-[#e8edf5] bg-white text-sm font-semibold text-gray-700 hover:bg-[#fafafa] transition flex items-center gap-2">
                <LinkIcon className="w-4 h-4" />
                View LinkedIn
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}