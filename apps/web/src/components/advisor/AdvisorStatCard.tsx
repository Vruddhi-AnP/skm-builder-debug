"use client"

import type { LucideIcon } from "lucide-react"

interface AdvisorStatCardProps {
  icon: LucideIcon
  title: string
  subtitle: string
  iconBg?: string
  iconColor?: string
}

export default function AdvisorStatCard({
  icon: Icon,
  title,
  subtitle,
  iconBg = "bg-primary/10",
  iconColor = "text-primary",
}: AdvisorStatCardProps) {
  return (
    <div className="rounded-[28px] border border-border bg-card p-6 shadow-sm">
      {/* ICON */}
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}
      >
        <Icon
          className={`h-6 w-6 ${iconColor}`}
        />
      </div>

      {/* CONTENT */}
      <h3 className="mt-5 text-3xl font-black tracking-tight text-foreground">
        {title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {subtitle}
      </p>
    </div>
  )
}