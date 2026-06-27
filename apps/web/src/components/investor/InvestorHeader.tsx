"use client"

import Link from "next/link"

import {
  Bell,
} from "lucide-react"

import {
  useLocalUser,
  getUserInitial,
  getUserDisplayName,
} from "@/hooks/useLocalUser";

interface InvestorHeaderProps {
  title: string
  subtitle: string
}

export default function InvestorHeader({
  title,
  subtitle,
}: InvestorHeaderProps) {
  const user = useLocalUser();
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-border bg-background/90 px-5 backdrop-blur-xl lg:px-8">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-foreground">
          {title}
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          {subtitle}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card transition hover:bg-muted">
          <Bell className="h-5 w-5 text-foreground" />
        </button>

        <Link
          href="/investor/profile"
          className="flex h-12 items-center gap-3 rounded-2xl border border-border bg-card px-3 transition hover:bg-muted"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
            {getUserInitial(user?.name)}
          </div>

          <div className="hidden text-left sm:block">
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
  )
}