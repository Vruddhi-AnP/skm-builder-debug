"use client";

import { Building2, Layers3, Rocket } from "lucide-react";
import Link from "next/link";
import { getFounderOnboarding } from "@/lib/founder-onboarding";
import { getBuilderProgress } from "@/hooks/useLocalBuilder";

export default function ProfileStartupCard() {
  // Try to get from localStorage (onboarding data or user object)
  const onboarding = getFounderOnboarding();

   // Also check if startupId was stored during onboarding success
  const startupId = typeof window !== "undefined"
    ? localStorage.getItem("startupId")
    : null;

  const startupName = onboarding.startupName || "Your Startup";
  const industry = onboarding.startupIndustry?.split(",")[0] || "—";
  const stage = onboarding.startupStage || "—";
  const progress = getBuilderProgress();

  return (
    <div className="rounded-[32px] border border-[#E8EDF5] bg-white p-6 shadow-sm">
      {/* HEADER */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Building2 className="h-6 w-6" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Your Startup
          </p>
          <h3 className="text-lg font-black text-[#16214A]">{startupName}</h3>
        </div>
      </div>

      {/* DETAILS */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between rounded-2xl bg-[#F8FAFC] px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Layers3 className="h-4 w-4" />
            Industry
          </div>
          <span className="text-sm font-semibold text-[#16214A]">{industry}</span>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-[#F8FAFC] px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Rocket className="h-4 w-4" />
            Stage
          </div>
          <span className="text-sm font-semibold text-[#16214A]">{stage}</span>
        </div>
      </div>

      {/* BUILDER PROGRESS */}
      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-600">Builder Progress</p>
          <span className="text-sm font-bold text-primary">{progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* CTA */}
      <Link
        href="/founder/startup-builder"
        className="mt-6 flex h-11 w-full items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-sm font-semibold text-primary transition hover:bg-primary/10"
      >
        {progress === 100 ? "Review Builder" : "Continue Builder"}
      </Link>

    {!startupId && (
      <p className="mt-3 text-center text-xs text-slate-400">
        Complete onboarding to link your startup
      </p>
    )}

    </div>
  );
}