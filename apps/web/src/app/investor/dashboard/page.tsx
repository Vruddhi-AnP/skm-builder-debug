"use client"

import { useMemo, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useLocalUser, getUserInitial, getUserDisplayName } from "@/hooks/useLocalUser";

import {
  BarChart3,
  Bell,
  Bookmark,
  Flame,
  Menu,
  Rocket,
  Search,
  Sparkles,
  TrendingUp,
  User,
  X,
} from "lucide-react"

import InvestorStatCard from "@/components/investor/InvestorStatCard"
import InvestorSelectionCard from "@/components/investor/InvestorSelectionCard"

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
    name: "Profile",
    href: "/investor/profile",
    icon: User,
  },
]

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
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

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
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="flex h-full w-70 flex-col border-r border-border bg-card">
            {/* LOGO */}
            <div className="flex h-20 items-center justify-between border-b border-border px-5">
              <Link
                href="/investor/dashboard"
                className="flex items-center"
              >
                <Image
                  src="/logo.png"
                  alt="Startup Ka Mall"
                  width={180}
                  height={50}
                  className="h-auto w-41.25 object-contain"
                />
              </Link>

              <button
                onClick={() =>
                  setSidebarOpen(false)
                }
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* NAV */}
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
                    className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all ${
                      pathname === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-5 w-5" />

                    <span className="text-sm font-semibold">
                      {item.name}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* CARD */}
            <div className="p-4">
              <div className="rounded-[30px] border border-primary/10 bg-primary/5 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                  Investment Opportunities
                </p>

                <h3 className="mt-4 text-4xl font-black text-foreground">
                  128
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Curated startups matching your interests
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
            href="/investor/dashboard"
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Startup Ka Mall"
              width={210}
              height={60}
              className="h-auto w-46.25 object-contain"
            />
          </Link>
        </div>

        {/* NAV */}
        <div className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all ${
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <Icon className="h-5 w-5" />

                <span className="text-sm font-semibold">
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>

        {/* CARD */}
        <div className="p-4">
          <div className="rounded-[30px] border border-primary/10 bg-primary/5 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
              Investment Opportunities
            </p>

            <h3 className="mt-4 text-4xl font-black text-foreground">
              128
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Curated startups matching your interests
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
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div>
              <h1 className="text-3xl font-black text-foreground">
                Investor Dashboard
              </h1>

              <p className="mt-1 text-sm text-muted-foreground">
                Explore high-potential startup opportunities
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => alert("Notifications coming soon")}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card transition hover:bg-muted"
            >
              <Bell className="h-5 w-5 text-foreground" />
            </button>

            <Link
              href="/investor/profile"
              className="flex h-12 items-center gap-3 rounded-2xl border border-border bg-card px-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                {getUserInitial(user?.name)}
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-foreground">
                  {getUserDisplayName(user?.name)}
                </p>

                <p className="text-xs text-muted-foreground">
                  {user?.role ?? "Investor"}
                </p>
              </div>
            </Link>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 overflow-x-hidden p-5 lg:p-7">
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
                  Explore curated startup opportunities,
                  track your saved startups and connect
                  with founders that match your investment interests.
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

          <section className="mt-7 grid gap-5 md:grid-cols-3">

  <Link
    href="/investor/discover"
    className="rounded-[28px] border border-border bg-card p-6 shadow-sm hover:border-primary/20"
  >
    <h3 className="text-xl font-black text-foreground">
      Discover Startups
    </h3>

    <p className="mt-2 text-sm text-muted-foreground">
      Browse startup opportunities.
    </p>
  </Link>

  <Link
    href="/investor/saved"
    className="rounded-[28px] border border-border bg-card p-6 shadow-sm hover:border-primary/20"
  >
    <h3 className="text-xl font-black text-foreground">
      Saved Startups
    </h3>

    <p className="mt-2 text-sm text-muted-foreground">
      Review your shortlisted startups.
    </p>
  </Link>

  <Link
    href="/investor/interested"
    className="rounded-[28px] border border-border bg-card p-6 shadow-sm hover:border-primary/20"
  >
    <h3 className="text-xl font-black text-foreground">
      Interested Startups
    </h3>

    <p className="mt-2 text-sm text-muted-foreground">
      Manage startups you&apos;re interested in.
    </p>
  </Link>

</section>

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <InvestorStatCard
              icon={Rocket}
              title="128"
              subtitle="Startup Matches"
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
              subtitle="Interested Startups"
              iconBg="bg-orange-100"
              iconColor="text-orange-600"
            />

            <InvestorStatCard
              icon={TrendingUp}
              title="128"
              subtitle="Active Opportunities"
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
        </main>
      </div>
    </div>
  )
}