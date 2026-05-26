"use client"

import Link from "next/link"

import {
  Check,
  ChevronRight,
  Flame,
  Globe,
  MapPin,
} from "lucide-react"

interface Startup {
  id: number
  name: string
  category: string
  stage: string
  location: string
  match: string
  description: string
  featured: boolean
}

interface AdvisorSelectionCardProps {
  startup: Startup

  requestedAdvisory: number[]

  savedStartups: number[]

  setRequestedAdvisory: React.Dispatch<
    React.SetStateAction<number[]>
  >

  setSavedStartups: React.Dispatch<
    React.SetStateAction<number[]>
  >
}

export default function AdvisorSelectionCard({
  startup,
  requestedAdvisory,
  savedStartups,
  setRequestedAdvisory,
  setSavedStartups,
}: AdvisorSelectionCardProps) {
  return (
    <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
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

            {startup.featured && (
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                Featured
              </span>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
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
          onClick={() => {
            if (
              savedStartups.includes(
                startup.id
              )
            ) {
              setSavedStartups((prev) =>
                prev.filter(
                  (id) => id !== startup.id
                )
              )
            } else {
              setSavedStartups((prev) => [
                ...prev,
                startup.id,
              ])
            }
          }}
          className={`flex h-12 w-12 items-center justify-center rounded-2xl transition ${
            savedStartups.includes(
              startup.id
            )
              ? "bg-primary"
              : "bg-primary/10"
          }`}
        >
          <Flame
            className={`h-5 w-5 ${
              savedStartups.includes(
                startup.id
              )
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

      {/* ACTIONS */}
      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          href={`/advisor/discover/${startup.id}`}
          className="flex h-11 items-center justify-center rounded-2xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition hover:bg-muted"
        >
          View Details
        </Link>

        <button
          onClick={() => {
            setRequestedAdvisory((prev) => [
              ...prev,
              startup.id,
            ])
          }}
          disabled={requestedAdvisory.includes(
            startup.id
          )}
          className={`h-11 rounded-2xl px-5 text-sm font-semibold transition ${
            requestedAdvisory.includes(
              startup.id
            )
              ? "bg-emerald-500 text-white"
              : "bg-primary text-primary-foreground hover:opacity-90"
          }`}
        >
          {requestedAdvisory.includes(
            startup.id
          ) ? (
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              Requested
            </span>
          ) : (
            "Request Advisory"
          )}
        </button>

        <Link
          href={`/advisor/discover/${startup.id}`}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card transition hover:bg-muted"
        >
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </Link>
      </div>
    </div>
  )
}