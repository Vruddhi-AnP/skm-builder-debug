"use client"

import { useParams } from "next/navigation"
import Link from "next/link"

import {
  ArrowLeft,
  BarChart3,
  Bell,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Globe,
  Lightbulb,
  MapPin,
  Rocket,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  User,
  Users,
  Wallet,
} from "lucide-react"

const startups = [
  {
    id: "1",
    name: "FinVerse AI",
    founder: "Aarav Mehta",
    category: "FinTech",
    stage: "Seed Stage",
    location: "Mumbai, India",
    description:
      "AI-powered financial intelligence platform helping startups and SMEs automate forecasting, analytics and investment readiness.",
    problem:
      "SMEs struggle with fragmented financial insights and manual forecasting workflows.",
    solution:
      "Unified AI-driven dashboard for forecasting, analytics and investor reporting.",
    traction: "12K+ active users",
    funding: "Raising $500K",
    team: "14 Members",
    website: "www.finverseai.com",
  },
  {
    id: "2",
    name: "HealthSync",
    founder: "Riya Kapoor",
    category: "HealthTech",
    stage: "Pre-Series A",
    location: "Bangalore, India",
    description:
      "Digital healthcare infrastructure platform connecting clinics, diagnostics and patient records in one ecosystem.",
    problem:
      "Healthcare providers operate with disconnected systems and inefficient patient data management.",
    solution:
      "Centralized digital health infrastructure with smart patient workflows.",
    traction: "150+ clinics onboarded",
    funding: "Raising $1.2M",
    team: "22 Members",
    website: "www.healthsync.com",
  },
]

export default function StartupDetailsPage() {
  const params = useParams()

  const startup = startups.find(
    (item) => item.id === params.id
  )

  if (!startup) {
    return (
      <div className="min-h-screen bg-[#f6f8fc] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0f172a]">
            Startup Not Found
          </h2>

          <Link
            href="/advisor/discover"
            className="mt-6 inline-flex h-11 px-5 rounded-2xl bg-violet-500 text-white text-sm font-semibold items-center justify-center"
          >
            Back To Discover
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f6f8fc]">
      {/* HEADER */}
      <header className="sticky top-0 z-30 h-20 bg-[#f6f8fc]/90 backdrop-blur-xl border-b border-[#edf1f7] flex items-center justify-between px-5 lg:px-8">
        <div className="flex items-center gap-4">
          <Link
            href="/advisor/discover"
            className="h-11 w-11 rounded-2xl border border-[#edf1f7] bg-white flex items-center justify-center hover:bg-[#fafafa] transition"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </Link>

          <div>
            <h1 className="text-[28px] font-bold tracking-tight text-[#0f172a] leading-none">
              Startup Details
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Founder startup overview & insights
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative h-12 w-12 rounded-2xl border border-[#edf1f7] bg-white flex items-center justify-center">
            <Bell className="w-5 h-5 text-gray-700" />
          </button>

          <Link
            href="/advisor/profile"
            className="h-12 px-3 rounded-2xl border border-[#edf1f7] bg-white flex items-center gap-3"
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
      <main className="p-5 lg:p-7">
        {/* HERO */}
        <section className="rounded-[36px] border border-[#e8edf5] bg-white p-6 lg:p-8">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">
                <Sparkles className="w-4 h-4 text-violet-600" />

                <span className="text-sm font-semibold text-violet-700">
                  Startup Overview
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3 flex-wrap">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#0f172a]">
                  {startup.name}
                </h2>

                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                  {startup.stage}
                </span>
              </div>

              <p className="mt-5 text-base leading-relaxed text-gray-500">
                {startup.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {startup.founder}
                </span>

                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  {startup.category}
                </span>

                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {startup.location}
                </span>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-3">
              <button className="h-12 px-5 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold">
                Accept Request
              </button>

              <button className="h-12 px-5 rounded-2xl border border-[#e8edf5] bg-white text-sm font-semibold text-[#0f172a]">
                Schedule Session
              </button>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="rounded-[28px] border border-[#e8edf5] bg-white p-6">
            <TrendingUp className="w-6 h-6 text-violet-500" />

            <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
              {startup.traction}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Startup Traction
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e8edf5] bg-white p-6">
            <Wallet className="w-6 h-6 text-emerald-500" />

            <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
              {startup.funding}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Current Raise
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e8edf5] bg-white p-6">
            <Users className="w-6 h-6 text-fuchsia-500" />

            <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
              {startup.team}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Team Size
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e8edf5] bg-white p-6">
            <CheckCircle2 className="w-6 h-6 text-orange-500" />

            <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
              92%
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Advisor Match
            </p>
          </div>
        </section>

        {/* DETAILS */}
        <section className="mt-7 grid grid-cols-1 xl:grid-cols-[1.3fr_420px] gap-5">
          {/* LEFT */}
          <div className="space-y-5">
            {/* PROBLEM */}
            <div className="rounded-[32px] border border-[#e8edf5] bg-white p-6">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-violet-500" />

                <h3 className="text-2xl font-bold text-[#0f172a]">
                  Problem Statement
                </h3>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-gray-500">
                {startup.problem}
              </p>
            </div>

            {/* SOLUTION */}
            <div className="rounded-[32px] border border-[#e8edf5] bg-white p-6">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-fuchsia-500" />

                <h3 className="text-2xl font-bold text-[#0f172a]">
                  Solution
                </h3>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-gray-500">
                {startup.solution}
              </p>
            </div>

            {/* BUSINESS */}
            <div className="rounded-[32px] border border-[#e8edf5] bg-white p-6">
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-orange-500" />

                <h3 className="text-2xl font-bold text-[#0f172a]">
                  Growth Potential
                </h3>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-gray-500">
                Strong early-stage traction with scalable business model,
                expanding market opportunity and investor-ready positioning.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">
            {/* INFO */}
            <div className="rounded-[32px] border border-[#e8edf5] bg-white p-6">
              <h3 className="text-2xl font-bold text-[#0f172a]">
                Startup Information
              </h3>

              <div className="mt-6 space-y-4">
                <div className="rounded-[22px] border border-[#edf1f7] bg-[#fafbff] p-4">
                  <p className="text-xs text-gray-500">
                    Founder
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#0f172a]">
                    {startup.founder}
                  </p>
                </div>

                <div className="rounded-[22px] border border-[#edf1f7] bg-[#fafbff] p-4">
                  <p className="text-xs text-gray-500">
                    Industry
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#0f172a]">
                    {startup.category}
                  </p>
                </div>

                <div className="rounded-[22px] border border-[#edf1f7] bg-[#fafbff] p-4">
                  <p className="text-xs text-gray-500">
                    Website
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#0f172a]">
                    {startup.website}
                  </p>
                </div>

                <div className="rounded-[22px] border border-[#edf1f7] bg-[#fafbff] p-4">
                  <p className="text-xs text-gray-500">
                    Startup Stage
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#0f172a]">
                    {startup.stage}
                  </p>
                </div>
              </div>
            </div>

            {/* MATCH */}
            <div className="rounded-[32px] border border-violet-200 bg-white p-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-violet-500" />

                <h3 className="text-xl font-bold text-[#0f172a]">
                  Advisor Match
                </h3>
              </div>

              <h2 className="mt-6 text-6xl font-bold text-[#0f172a]">
                92%
              </h2>

              <p className="mt-3 text-sm text-gray-500">
                High alignment with advisor expertise & mentorship goals
              </p>

              <div className="mt-6 h-3 w-full rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-[32px] border border-[#e8edf5] bg-white p-6">
              <h3 className="text-2xl font-bold text-[#0f172a]">
                Interested In Mentoring?
              </h3>

              <p className="mt-3 text-sm text-gray-500">
                Accept mentorship request and begin startup advisory journey.
              </p>

              <button className="mt-6 w-full h-12 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold">
                Accept Startup Request
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}