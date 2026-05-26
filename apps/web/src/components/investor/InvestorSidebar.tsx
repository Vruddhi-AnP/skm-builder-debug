"use client"

import Link from "next/link"

import {
  BarChart3,
  Briefcase,
  Search,
  User,
} from "lucide-react"

import AppLogo from "@/components/shared/AppLogo"

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
    name: "Portfolio",
    href: "/investor/portfolio",
    icon: Briefcase,
  },
  {
    name: "Profile",
    href: "/investor/profile",
    icon: User,
  },
]

interface InvestorSidebarProps {
  activePage?: string
}

export default function InvestorSidebar({
  activePage,
}: InvestorSidebarProps) {
  return (
    <aside className="hidden w-[280px] flex-col border-r border-border bg-card lg:flex">
      <div className="flex h-24 items-center border-b border-border px-6">
        <AppLogo
          href="/investor/dashboard"
        />
      </div>

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
    </aside>
  )
}