"use client"

import Link from "next/link"

import {
  BarChart3,
  Briefcase,
  CalendarDays,
  Search,
  User,
  Wallet,
} from "lucide-react"

import AppLogo from "@/components/shared/AppLogo"

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
  },
]

interface AdvisorSidebarProps {
  activePage?: string
}

export default function AdvisorSidebar({
  activePage,
}: AdvisorSidebarProps) {
  return (
    <aside className="hidden w-70 flex-col border-r border-border bg-card lg:flex">
      {/* LOGO */}
      <div className="flex h-24 items-center border-b border-border px-6">
        <AppLogo
          href="/advisor/dashboard"
        />
      </div>

      {/* NAVIGATION */}
      <div className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
        {navigation.map((item) => {
          const Icon = item.icon

          const active =
            activePage === item.name

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
                active
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
    </aside>
  )
}