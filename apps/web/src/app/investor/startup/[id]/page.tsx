"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"

import {
  ArrowUpRight,
  BarChart3,
  Bell,
  Bookmark,
  Briefcase,
  Building2,
  CalendarDays,
  ChevronRight,
  CircleDollarSign,
  Flame,
  Globe,
  LinkIcon,
  Mail,
  MapPin,
  Menu,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
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

const startups = [
  {
    id: "1",
    name: "FinVerse AI",
    category: "FinTech",
    stage: "Seed Stage",
    location: "Mumbai, India",
    match: "96%",
    traction: "12K+ Users",
    valuation: "₹12 Cr",
    fundingAsk: "₹2 Cr",
    revenue: "₹45L ARR",
    team: "14 Members",
    founded: "2024",
    founder: "Aarav Mehta",
    founderRole: "Founder & CEO",
    description:
      "AI-powered financial infrastructure helping SMEs automate capital operations and streamline business banking workflows.",
    problem:
      "Small and medium businesses struggle with fragmented financial systems, delayed reporting and inefficient capital management.",
    solution:
      "FinVerse AI provides a unified AI-powered finance operating system for SMEs with automation, forecasting and real-time insights.",
  },
  {
    id: "2",
    name: "HealthSync",
    category: "HealthTech",
    stage: "Pre-Series A",
    location: "Bangalore, India",
    match: "92%",
    traction: "150+ Clinics",
    valuation: "₹22 Cr",
    fundingAsk: "₹4 Cr",
    revenue: "₹1.2 Cr ARR",
    team: "26 Members",
    founded: "2023",
    founder: "Priya Sharma",
    founderRole: "Founder & CEO",
    description:
      "Digital healthcare ecosystem improving patient engagement and hospital workflows.",
    problem:
      "Hospitals and clinics operate on disconnected systems causing poor patient experiences and operational inefficiencies.",
    solution:
      "HealthSync creates a connected digital healthcare infrastructure for hospitals, doctors and patients.",
  },
]

export default function InvestorStartupDetailsPage() {
  const params = useParams()

  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  const [saved, setSaved] = useState(false)

  const [interested, setInterested] =
    useState(false)

  const startup =
    startups.find(
      (item) => item.id === params.id
    ) || startups[0]

  return (
    <div className="flex min-h-screen bg-background">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="flex h-full w-[280px] flex-col border-r border-border bg-card">
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
                    className="flex items-center gap-4 rounded-2xl px-4 py-3.5 text-muted-foreground transition hover:bg-muted"
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
      <aside className="hidden w-[280px] flex-col border-r border-border bg-card lg:flex">
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
                className="flex items-center gap-4 rounded-2xl px-4 py-3.5 text-muted-foreground transition hover:bg-muted"
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
              Startup Match
            </p>

            <h3 className="mt-4 text-5xl font-black text-foreground">
              {startup.match}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              AI investment compatibility
            </p>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-primary/10">
              <div className="h-full w-[96%] rounded-full bg-primary" />
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
                Startup Details
              </h1>

              <p className="mt-1 text-sm text-muted-foreground">
                Investment opportunity overview
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
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-primary" />

                  <span className="text-sm font-semibold text-primary">
                    Verified Startup
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <h2 className="text-4xl font-black tracking-tight text-foreground lg:text-5xl">
                    {startup.name}
                  </h2>

                  <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                    {startup.match} Match
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    {startup.category}
                  </span>

                  <span>•</span>

                  <span>{startup.stage}</span>

                  <span>•</span>

                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {startup.location}
                  </span>
                </div>

                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  {startup.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    onClick={() =>
                      setInterested(true)
                    }
                    className={`flex h-12 items-center gap-2 rounded-2xl px-6 text-sm font-semibold transition ${
                      interested
                        ? "bg-emerald-500 text-white"
                        : "bg-primary text-primary-foreground hover:opacity-90"
                    }`}
                  >
                    <Rocket className="h-4 w-4" />

                    {interested
                      ? "Interest Sent"
                      : "Show Interest"}
                  </button>

                  <button
                    onClick={() =>
                      setSaved(!saved)
                    }
                    className={`flex h-12 items-center gap-2 rounded-2xl border px-6 text-sm font-semibold transition ${
                      saved
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-foreground hover:bg-muted"
                    }`}
                  >
                    <Bookmark className="h-4 w-4" />

                    {saved
                      ? "Saved"
                      : "Save Startup"}
                  </button>

                  <button className="flex h-12 items-center gap-2 rounded-2xl border border-border bg-card px-6 text-sm font-semibold text-foreground transition hover:bg-muted">
                    <Mail className="h-4 w-4" />
                    Contact Founder
                  </button>
                </div>
              </div>

              <div className="w-full xl:w-[340px]">
                <div className="rounded-[32px] border border-primary/10 bg-primary/5 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                    Startup Metrics
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-background p-4">
                      <p className="text-xs text-muted-foreground">
                        Revenue
                      </p>

                      <h4 className="mt-2 text-xl font-black text-foreground">
                        {startup.revenue}
                      </h4>
                    </div>

                    <div className="rounded-2xl bg-background p-4">
                      <p className="text-xs text-muted-foreground">
                        Team
                      </p>

                      <h4 className="mt-2 text-xl font-black text-foreground">
                        {startup.team}
                      </h4>
                    </div>

                    <div className="rounded-2xl bg-background p-4">
                      <p className="text-xs text-muted-foreground">
                        Funding Ask
                      </p>

                      <h4 className="mt-2 text-xl font-black text-foreground">
                        {startup.fundingAsk}
                      </h4>
                    </div>

                    <div className="rounded-2xl bg-background p-4">
                      <p className="text-xs text-muted-foreground">
                        Valuation
                      </p>

                      <h4 className="mt-2 text-xl font-black text-foreground">
                        {startup.valuation}
                      </h4>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                    <TrendingUp className="h-4 w-4" />
                    Strong growth trajectory
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-4">
            <div className="rounded-[30px] border border-border bg-card p-6 shadow-sm">
              <Users className="h-6 w-6 text-primary" />

              <h3 className="mt-5 text-3xl font-black text-foreground">
                {startup.traction}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Platform Traction
              </p>
            </div>

            <div className="rounded-[30px] border border-border bg-card p-6 shadow-sm">
              <CircleDollarSign className="h-6 w-6 text-emerald-500" />

              <h3 className="mt-5 text-3xl font-black text-foreground">
                {startup.fundingAsk}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Funding Requirement
              </p>
            </div>

            <div className="rounded-[30px] border border-border bg-card p-6 shadow-sm">
              <CalendarDays className="h-6 w-6 text-orange-500" />

              <h3 className="mt-5 text-3xl font-black text-foreground">
                {startup.founded}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Founded Year
              </p>
            </div>

            <div className="rounded-[30px] border border-border bg-card p-6 shadow-sm">
              <Star className="h-6 w-6 text-primary" />

              <h3 className="mt-5 text-3xl font-black text-foreground">
                {startup.match}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                AI Match Score
              </p>
            </div>
          </section>

          {/* DETAILS */}
          <section className="mt-8 grid grid-cols-1 gap-5 xl:grid-cols-3">
            {/* LEFT */}
            <div className="space-y-5 xl:col-span-2">
              <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-primary" />

                  <h3 className="text-2xl font-black text-foreground">
                    Problem Statement
                  </h3>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {startup.problem}
                </p>
              </div>

              <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Rocket className="h-6 w-6 text-primary" />

                  <h3 className="text-2xl font-black text-foreground">
                    Startup Solution
                  </h3>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {startup.solution}
                </p>
              </div>

              <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-primary" />

                  <h3 className="text-2xl font-black text-foreground">
                    Investment Highlights
                  </h3>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-background p-5">
                    <ShieldCheck className="h-5 w-5 text-emerald-500" />

                    <h4 className="mt-4 font-bold text-foreground">
                      Verified Startup
                    </h4>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Startup profile verified by
                      ecosystem team.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-5">
                    <TrendingUp className="h-5 w-5 text-primary" />

                    <h4 className="mt-4 font-bold text-foreground">
                      Growing Traction
                    </h4>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Strong traction indicators
                      and user adoption.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-5">
                    <Building2 className="h-5 w-5 text-orange-500" />

                    <h4 className="mt-4 font-bold text-foreground">
                      Scalable Model
                    </h4>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Expansion-ready operational
                      structure and business model.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-5">
                    <Trophy className="h-5 w-5 text-primary" />

                    <h4 className="mt-4 font-bold text-foreground">
                      High Match Score
                    </h4>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Strong alignment with your
                      investment profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-5">
              <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
                <h3 className="text-2xl font-black text-foreground">
                  Founder Details
                </h3>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-black text-primary-foreground">
                    {startup.founder[0]}
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-foreground">
                      {startup.founder}
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      {startup.founderRole}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                    <Mail className="h-4 w-4" />
                    Connect Founder
                  </button>

                  <button className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card text-sm font-semibold text-foreground transition hover:bg-muted">
                    <LinkIcon className="h-4 w-4" />
                    View LinkedIn
                  </button>
                </div>
              </div>

              <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
                <h3 className="text-2xl font-black text-foreground">
                  Startup Overview
                </h3>

                <div className="mt-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Industry
                    </span>

                    <span className="text-sm font-semibold text-foreground">
                      {startup.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Stage
                    </span>

                    <span className="text-sm font-semibold text-foreground">
                      {startup.stage}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Headquarters
                    </span>

                    <span className="text-sm font-semibold text-foreground">
                      {startup.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Founded
                    </span>

                    <span className="text-sm font-semibold text-foreground">
                      {startup.founded}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-primary/10 bg-primary/5 p-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />

                  <h3 className="text-xl font-black text-foreground">
                    AI Recommendation
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  This startup aligns strongly
                  with your investment interests
                  in scalable founder-led ventures
                  and early-stage growth
                  opportunities.
                </p>

                <button className="mt-6 flex h-11 items-center gap-2 rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                  Explore Investment
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}