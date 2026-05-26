"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import {
  Award,
  BarChart3,
  Bell,
  Briefcase,
  CalendarDays,
  Camera,
  Edit3,
  Globe,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Star,
  User,
  Users,
  Wallet,
  X,
} from "lucide-react"

import AdvisorStatCard from "@/components/advisor/AdvisorStatCard"

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
  },
  {
    name: "Profile",
    href: "/advisor/profile",
    icon: User,
    active: true,
  },
]

const expertise = [
  "Fundraising",
  "Investor Readiness",
  "Go To Market",
  "Growth Strategy",
  "Startup Operations",
  "Pitch Deck Review",
]

export default function AdvisorProfilePage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="flex h-full w-[280px] flex-col border-r border-border bg-card">
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
                  className="h-auto w-[170px] object-contain"
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
      <aside className="hidden w-[280px] flex-col border-r border-border bg-card lg:flex">
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
              className="h-auto w-[190px] object-contain"
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
                Advisor Profile
              </h1>

              <p className="mt-1 text-sm text-muted-foreground">
                Professional ecosystem advisor profile
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card">
              <Bell className="h-5 w-5 text-foreground" />
            </button>

            <button className="inline-flex h-12 items-center rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
              Save Profile
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 overflow-x-hidden p-5 lg:p-7">
          {/* HERO */}
          <section className="rounded-[36px] border border-border bg-card p-6 shadow-sm lg:p-8">
            <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-col gap-6 sm:flex-row">
                {/* AVATAR */}
                <div className="relative">
                  <div className="flex h-32 w-32 items-center justify-center rounded-[32px] bg-primary text-5xl font-black text-primary-foreground shadow-lg">
                    K
                  </div>

                  <button className="absolute -bottom-2 -right-2 flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card">
                    <Camera className="h-5 w-5 text-muted-foreground" />
                  </button>
                </div>

                {/* INFO */}
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-4xl font-black tracking-tight text-foreground">
                      Krishna Shah
                    </h2>

                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Platinum Advisor
                    </span>
                  </div>

                  <p className="mt-4 text-lg text-muted-foreground">
                    Startup Growth &
                    Fundraising Advisor
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Mumbai, India
                    </span>

                    <span className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      22 Active Founders
                    </span>

                    <span className="flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      4.9 Rating
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="inline-flex h-11 items-center gap-2 rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                      <Edit3 className="h-4 w-4" />
                      Edit Profile
                    </button>

                    <button className="h-11 rounded-2xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition hover:bg-muted">
                      Share Profile
                    </button>
                  </div>
                </div>
              </div>

              {/* PROFILE SCORE */}
              <div className="w-full rounded-[28px] border border-primary/10 bg-primary/5 p-6 xl:w-[320px]">
                <p className="text-sm font-semibold text-primary">
                  PROFILE STRENGTH
                </p>

                <h2 className="mt-5 text-6xl font-black tracking-tight text-foreground">
                  92%
                </h2>

                <p className="mt-3 text-sm text-muted-foreground">
                  Trusted ecosystem advisor
                  profile
                </p>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-primary/10">
                  <div className="h-full w-[92%] rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <AdvisorStatCard
              icon={Wallet}
              title="₹2.4L"
              subtitle="Total Earnings"
              iconBg="bg-primary/10"
              iconColor="text-primary"
            />

            <AdvisorStatCard
              icon={CalendarDays}
              title="71"
              subtitle="Sessions Conducted"
              iconBg="bg-emerald-100"
              iconColor="text-emerald-600"
            />

            <AdvisorStatCard
              icon={Award}
              title="14"
              subtitle="Investor Ready Startups"
              iconBg="bg-fuchsia-100"
              iconColor="text-fuchsia-600"
            />

            <AdvisorStatCard
              icon={Star}
              title="4.9"
              subtitle="Advisor Rating"
              iconBg="bg-orange-100"
              iconColor="text-orange-500"
            />
          </section>

          {/* DETAILS */}
          <section className="mt-7 grid grid-cols-1 gap-5 xl:grid-cols-[1.3fr_420px]">
            {/* LEFT */}
            <div className="space-y-5">
              {/* ABOUT */}
              <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
                <h3 className="text-2xl font-black tracking-tight text-foreground">
                  About
                </h3>

                <p className="mt-5 text-sm leading-8 text-muted-foreground">
                  Startup ecosystem advisor
                  helping founders with
                  fundraising, investor
                  readiness, GTM execution,
                  startup scaling and
                  business growth strategy
                  across early-stage ventures.
                </p>
              </div>

              {/* EXPERTISE */}
              <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
                <h3 className="text-2xl font-black tracking-tight text-foreground">
                  Expertise
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {expertise.map((item) => (
                    <div
                      key={item}
                      className="flex h-11 items-center rounded-2xl bg-primary/10 px-5 text-sm font-semibold text-primary"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-5">
              {/* CONTACT */}
              <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
                <h3 className="text-2xl font-black tracking-tight text-foreground">
                  Contact
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value:
                        "krishna@startupkamall.com",
                      color: "text-primary",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value:
                        "+91 98765 43210",
                      color:
                        "text-fuchsia-600",
                    },
                    {
                      icon: Globe,
                      label: "Website",
                      value:
                        "startupkamall.com",
                      color:
                        "text-emerald-600",
                    },
                  ].map((item) => {
                    const Icon = item.icon

                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 rounded-[22px] border border-border bg-muted/40 p-4"
                      >
                        <Icon
                          className={`h-5 w-5 ${item.color}`}
                        />

                        <div>
                          <p className="text-xs text-muted-foreground">
                            {item.label}
                          </p>

                          <p className="text-sm font-semibold text-foreground">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* ACHIEVEMENTS */}
              <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
                <h3 className="text-2xl font-black tracking-tight text-foreground">
                  Achievements
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    "Top Rated Advisor",
                    "50+ Startups Mentored",
                    "Investor Readiness Expert",
                    "Growth Ecosystem Contributor",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-[22px] border border-border bg-muted/40 p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                        <Award className="h-5 w-5 text-primary" />
                      </div>

                      <p className="text-sm font-semibold text-foreground">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}