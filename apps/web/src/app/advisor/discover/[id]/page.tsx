"use client"

import Link from "next/link"
import { useParams } from "next/navigation"

import {
  ArrowLeft,
  BarChart3,
  Bell,
  CheckCircle2,
  Globe,
  Lightbulb,
  MapPin,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  User,
  Users,
  Wallet,
} from "lucide-react"

import InvestorStatCard from "@/components/investor/InvestorStatCard"

const startups = [
  {
    id: "1",
    name: "FinVerse AI",
    founder: "Aarav Mehta",
    category: "FinTech",
    stage: "Seed Stage",
    location: "Mumbai, India",
    description:
      "AI-powered financial intelligence platform helping startups automate forecasting, analytics and investor readiness.",

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
      "Digital healthcare infrastructure platform connecting clinics, diagnostics and patient records.",

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
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-3xl font-black text-foreground">
            Startup Not Found
          </h2>

          <Link
            href="/advisor/discover"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground"
          >
            Back To Discover
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-border bg-background/90 px-5 backdrop-blur-xl lg:px-8">
        <div className="flex items-center gap-4">
          <Link
            href="/advisor/discover"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <div>
            <h1 className="text-3xl font-black tracking-tight text-foreground">
              Startup Details
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              Founder overview &
              startup insights
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card">
            <Bell className="h-5 w-5" />
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
      <main className="p-5 lg:p-7">
        {/* HERO */}
        <section className="rounded-[36px] border border-border bg-card p-6 shadow-sm lg:p-8">
          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2">
                <Sparkles className="h-4 w-4 text-primary" />

                <span className="text-sm font-semibold text-primary">
                  Startup Overview
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <h2 className="text-4xl font-black tracking-tight text-foreground lg:text-5xl">
                  {startup.name}
                </h2>

                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {startup.stage}
                </span>
              </div>

              <p className="mt-5 text-base leading-8 text-muted-foreground">
                {startup.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {startup.founder}
                </span>

                <span className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  {startup.category}
                </span>

                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {startup.location}
                </span>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="rounded-[30px] border border-primary/20 bg-primary/5 p-6 xl:w-[340px]">
  <p className="text-sm font-semibold text-primary">
    Advisor Match
  </p>

  <h2 className="mt-3 text-6xl font-black text-foreground">
    92%
  </h2>

  <p className="mt-3 text-sm text-muted-foreground">
    High compatibility based on
    startup stage, industry and
    advisor expertise.
  </p>

  <div className="mt-5 h-3 overflow-hidden rounded-full bg-primary/10">
    <div className="h-full w-[92%] rounded-full bg-primary" />
  </div>

  <div className="mt-6 flex flex-col gap-3">
    <button className="h-12 rounded-2xl bg-primary text-sm font-semibold text-primary-foreground">
      Accept Request
    </button>

    <button className="h-12 rounded-2xl border border-border bg-card text-sm font-semibold">
      Schedule Session
    </button>
  </div>
</div>
          </div>
        </section>

        {/* STATS */}
        <section className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          <InvestorStatCard
            icon={TrendingUp}
            title={startup.traction}
            subtitle="Startup Traction"
            iconBg="bg-primary/10"
            iconColor="text-primary"
          />

          <InvestorStatCard
            icon={Wallet}
            title={startup.funding}
            subtitle="Current Raise"
            iconBg="bg-emerald-100"
            iconColor="text-emerald-600"
          />

          <InvestorStatCard
            icon={Users}
            title={startup.team}
            subtitle="Team Size"
            iconBg="bg-fuchsia-100"
            iconColor="text-fuchsia-600"
          />

          <InvestorStatCard
            icon={CheckCircle2}
            title="92%"
            subtitle="Advisor Match"
            iconBg="bg-orange-100"
            iconColor="text-orange-500"
          />
        </section>

        {/* DETAILS */}
        <section className="mt-7 grid grid-cols-1 gap-5 xl:grid-cols-[1.3fr_420px]">
          {/* LEFT */}
          <div className="space-y-5">
            <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />

                <h3 className="text-2xl font-black text-foreground">
                  Problem Statement
                </h3>
              </div>

              <p className="mt-5 text-sm leading-8 text-muted-foreground">
                {startup.problem}
              </p>
            </div>

            <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-fuchsia-500" />

                <h3 className="text-2xl font-black text-foreground">
                  Solution
                </h3>
              </div>

              <p className="mt-5 text-sm leading-8 text-muted-foreground">
                {startup.solution}
              </p>
            </div>

            <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
  <div className="flex items-center gap-2">
    <CheckCircle2 className="h-5 w-5 text-emerald-500" />

    <h3 className="text-2xl font-black text-foreground">
      Why You&apos;re A Match
    </h3>
  </div>

  <div className="mt-5 space-y-4">

    <div className="flex items-center gap-3">
      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
      <span>FinTech domain expertise</span>
    </div>

    <div className="flex items-center gap-3">
      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
      <span>Seed stage mentoring experience</span>
    </div>

    <div className="flex items-center gap-3">
      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
      <span>Fundraising & GTM support</span>
    </div>

    <div className="flex items-center gap-3">
      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
      <span>Strong startup ecosystem fit</span>
    </div>

  </div>
</div>

            <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-orange-500" />

                <h3 className="text-2xl font-black text-foreground">
                  Growth Potential
                </h3>
              </div>

              <div className="mt-5 space-y-4">

  <div className="flex justify-between">
    <span className="text-muted-foreground">
      Active Users
    </span>

    <span className="font-semibold">
      12K+
    </span>
  </div>

  <div className="flex justify-between">
    <span className="text-muted-foreground">
      Team Size
    </span>

    <span className="font-semibold">
      14
    </span>
  </div>

  <div className="flex justify-between">
    <span className="text-muted-foreground">
      Funding Goal
    </span>

    <span className="font-semibold">
      $500K
    </span>
  </div>

  <div className="flex justify-between">
    <span className="text-muted-foreground">
      Growth Rate
    </span>

    <span className="font-semibold text-emerald-600">
      +18%
    </span>
  </div>

</div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">
            <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">

            <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
  <h3 className="text-2xl font-black text-foreground">
    Founder Profile
  </h3>

  <div className="mt-5">
    <h4 className="text-lg font-bold text-foreground">
      {startup.founder}
    </h4>

    <p className="mt-2 text-sm text-muted-foreground">
      Founder & CEO
    </p>

    <p className="mt-4 text-sm leading-7 text-muted-foreground">
      Experienced startup operator focused on building scalable
      technology-driven businesses and investor-ready ventures.
    </p>
  </div>
</div>

              <h3 className="text-2xl font-black text-foreground">
                Startup Information
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  {
                    label: "Founder",
                    value: startup.founder,
                  },

                  {
                    label: "Industry",
                    value: startup.category,
                  },

                  {
                    label: "Website",
                    value: startup.website,
                  },

                  {
                    label: "Startup Stage",
                    value: startup.stage,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[22px] border border-border bg-muted/30 p-4"
                  >
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* MATCH */}
            <div className="rounded-[32px] border border-primary/10 bg-primary/5 p-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />

                <h3 className="text-xl font-black text-foreground">
                  Advisor Match
                </h3>
              </div>

              <h2 className="mt-6 text-6xl font-black text-foreground">
                92%
              </h2>

              <p className="mt-3 text-sm text-muted-foreground">
                High alignment with
                advisor expertise &
                mentorship goals
              </p>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-primary/10">
                <div className="h-full w-[92%] rounded-full bg-primary" />
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-[32px] border border-primary/10 bg-primary/5 p-6">
  <h3 className="text-2xl font-black text-foreground">
    Ready To Mentor?
  </h3>

  <p className="mt-3 text-sm leading-7 text-muted-foreground">
    Start your advisory journey and help this startup scale.
  </p>

  <div className="mt-6 space-y-3">

    <button className="h-12 w-full rounded-2xl bg-primary text-sm font-semibold text-primary-foreground">
      Accept Request
    </button>

    <button className="h-12 w-full rounded-2xl border border-border bg-card text-sm font-semibold">
      Schedule Intro Call
    </button>

    <button className="h-12 w-full rounded-2xl border border-border bg-card text-sm font-semibold">
      Save Startup
    </button>

  </div>
</div>
          </div>
        </section>
      </main>
    </div>
  )
}