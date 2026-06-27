"use client"

import Link from "next/link"

import {
  Check,
  ChevronRight,
  Globe,
  MapPin,
  Star,
} from "lucide-react"

interface StartupType {
  id: number
  name: string
  category: string
  stage: string
  location: string
  match: string
  description: string
}

interface InvestorSelectionCardProps {
  startup: StartupType
  isSaved: boolean
  isInterested: boolean
  onSave: () => void
  onInterested: () => void
}

export default function InvestorSelectionCard({
  startup,
  isSaved,
  isInterested,
  onSave,
  onInterested,
}: InvestorSelectionCardProps) {
  return (
    <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm transition hover:shadow-md">
      {/* TOP */}
      <div className="flex items-start justify-between gap-5">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-black tracking-tight text-foreground">
              {startup.name}
            </h3>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              {startup.match} Match
            </span>

            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
              Featured
            </span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Readiness 82/100
              </span>

              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                Seeking ₹50L
              </span>
            </div>
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
        </div>

        {/* SAVE */}
        <button
          onClick={onSave}
          className={`flex h-12 w-12 items-center justify-center rounded-2xl transition ${
            isSaved
              ? "bg-primary"
              : "bg-primary/10"
          }`}
        >
          <Star
            className={`h-5 w-5 ${
              isSaved
                ? "text-white"
                : "text-primary"
            }`}
          />
        </button>
      </div>

      {/* DESC */}
      <p className="mt-6 text-sm leading-7 text-muted-foreground">
        {startup.description}
      </p>

      <div className="mt-5 rounded-2xl bg-muted/50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Why Recommended
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          Matches your preferred industry, startup stage, and investment focus.
        </p>
      </div>

      {/* FOOTER */}
      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          href={`/investor/startup/${startup.id}`}
          className="flex h-11 items-center justify-center rounded-2xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition hover:bg-muted"
        >
          View Details
        </Link>

        <button
          onClick={onInterested}
          disabled={isInterested}
          className={`h-11 rounded-2xl px-5 text-sm font-semibold transition ${
            isInterested
              ? "bg-emerald-500 text-white"
              : "bg-primary text-primary-foreground hover:opacity-90"
          }`}
        >
          {isInterested ? (
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              Interested
            </span>
          ) : (
            "Show Interest"
          )}
        </button>

        <Link
          href={`/investor/startup/${startup.id}`}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card transition hover:bg-muted"
        >
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </Link>
      </div>
    </div>
  )
}