"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { useLocalUser, getUserInitial, getUserDisplayName } from "@/hooks/useLocalUser";
import InvestorLayout from "@/components/investor/InvestorLayout";

import {
  Bookmark,
  Flame,
  Rocket,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react"

import InvestorStatCard from "@/components/investor/InvestorStatCard"
import InvestorSelectionCard from "@/components/investor/InvestorSelectionCard"

const startupData = [
  {
    id: 1,
    name: "FinVerse AI",
    category: "FinTech",
    stage: "Seed Stage",
    location: "Mumbai, India",
    match: "96%",
    description:
      "AI-powered financial infrastructure helping SMEs automate capital operations.",
    featured: true,
  },
  {
    id: 2,
    name: "HealthSync",
    category: "HealthTech",
    stage: "Pre-Series A",
    location: "Bangalore, India",
    match: "92%",
    description:
      "Digital healthcare ecosystem improving patient engagement and hospital workflows.",
    featured: false,
  },
  {
    id: 3,
    name: "GreenByte",
    category: "ClimateTech",
    stage: "MVP Ready",
    location: "Delhi, India",
    match: "89%",
    description:
      "Sustainable energy optimization platform for industrial operations.",
    featured: true,
  },
]

export default function InvestorDashboardPage() {

 const [savedStartups, setSavedStartups] =
  useState<number[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem("skmSavedStartups");
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  });

const [interestedStartups, setInterestedStartups] =
  useState<number[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem("skmInterestedStartups");
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  });

  const featuredStartups = useMemo(() => {
    return startupData.filter(
      (item) => item.featured
    )
  }, [])

  const user = useLocalUser();

    return (
      <InvestorLayout
        title="Investor Dashboard"
        subtitle="Explore high-potential startup opportunities"
      >

        {/* CONTENT */}
        <>
          {/* HERO */}
          <section className="rounded-[36px] border border-border bg-card p-6 shadow-sm lg:p-8">
            <div className="max-w-3xl">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-primary" />

                  <span className="text-sm font-semibold text-primary">
                    Investor Ecosystem
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-foreground lg:text-5xl">
                  Welcome Back, {getUserDisplayName(user?.name)}
                </h2>

                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  Discover high-potential startups matched to your investment preferences, monitor opportunities, and track your investment activity from one place.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/investor/discover"
                    className="inline-flex h-12 items-center gap-2 rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    <Rocket className="h-4 w-4" />
                    Discover Startups
                  </Link>

                  <Link
                    href="/investor/saved"
                    className="inline-flex h-12 items-center rounded-2xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition hover:bg-muted"
                  >
                    View Saved
                  </Link>
                </div>
              </div>
            </div>
          </section>

   <section className="mt-7">
  <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-6">
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm font-semibold text-primary">
          Recommended Opportunity
        </p>

        <h3 className="mt-2 text-3xl font-black text-foreground">
          FinVerse AI
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          AI-powered financial infrastructure helping SMEs automate capital operations.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            96% Match
          </span>

          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Readiness 82/100
          </span>

          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
            Seeking ₹50L
          </span>
        </div>
      </div>

      <Link
        href="/investor/startup/1"
        className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-6 text-sm font-semibold text-primary-foreground"
      >
        View Startup
      </Link>
    </div>
  </div>
</section>

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <InvestorStatCard
              icon={Rocket}
              title="128"
              subtitle="Available Startups"
              iconBg="bg-primary/10"
              iconColor="text-primary"
            />

            <InvestorStatCard
              icon={Bookmark}
              title={String(savedStartups.length)}
              subtitle="Saved Startups"
              iconBg="bg-fuchsia-100"
              iconColor="text-fuchsia-600"
            />

            <InvestorStatCard
              icon={Flame}
              title={String(interestedStartups.length)}
              subtitle="Interests Submitted"
              iconBg="bg-orange-100"
              iconColor="text-orange-600"
            />

            <InvestorStatCard
              icon={TrendingUp}
              title="8"
              subtitle="New This Week"
              iconBg="bg-emerald-100"
              iconColor="text-emerald-600"
            />
          </section>

          {/* FEATURED */}
          <section className="mt-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black text-foreground">
                  Recommended Startups
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  Startups selected based on your preferences and activity.
                </p>
              </div>

              <Link
                href="/investor/discover"
                className="text-sm font-semibold text-primary"
              >
                View All
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
              {featuredStartups.map((startup) => (
                <InvestorSelectionCard
                  key={startup.id}
                  startup={startup}
                  isSaved={savedStartups.includes(
                    startup.id
                  )}
                  isInterested={interestedStartups.includes(
                    startup.id
                  )}
                  onSave={() => {
                    setSavedStartups((prev) => {
                      const next = prev.includes(startup.id)
                        ? prev.filter((id) => id !== startup.id)
                        : [...prev, startup.id];
                      localStorage.setItem("skmSavedStartups", JSON.stringify(next));
                      return next;
                    });
                  }}
                  onInterested={() => {
                    if (interestedStartups.includes(startup.id)) return;
                    setInterestedStartups((prev) => {
                      const next = [...prev, startup.id];
                      localStorage.setItem("skmInterestedStartups", JSON.stringify(next));
                      return next;
                    });
                  }}
                />
              ))}
            </div>
          </section>
            </>
  </InvestorLayout>
)
}