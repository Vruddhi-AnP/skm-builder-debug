"use client";

import { getBuilderProgress, getCompletedStepCount } from "@/hooks/useLocalBuilder";
import { getFounderOnboarding } from "@/lib/founder-onboarding";

export default function ProfileStartupCard() {
  const progress = getBuilderProgress();
  const completedCount = getCompletedStepCount();
  const onboarding = getFounderOnboarding();

  const startupName = onboarding?.startupName ?? "Your Startup";
  const startupIndustry = onboarding?.startupIndustry ?? "—";

  const stage =
    completedCount === 0
      ? "Not Started"
      : completedCount >= 5
      ? "Investor Ready"
      : completedCount >= 3
      ? "Early Validation"
      : "Idea Stage";

  return (
    <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
      <h2 className="text-2xl font-black tracking-tight text-[#16214A]">
        Startup Progress
      </h2>

      <div className="mt-8 space-y-5">

        {/* STARTUP NAME */}
        <div className="rounded-3xl border border-border/60 bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Startup Name</p>
          <h3 className="mt-2 text-xl font-black text-[#16214A]">
            {startupName}
          </h3>
          {startupIndustry !== "—" && (
            <p className="mt-1 text-sm text-slate-500">{startupIndustry}</p>
          )}
        </div>

        {/* STAGE */}
        <div className="rounded-3xl border border-border/60 bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Startup Stage</p>
          <h3 className="mt-2 text-2xl font-black text-[#16214A]">
            {stage}
          </h3>
        </div>

        {/* READINESS */}
        <div className="rounded-3xl border border-border/60 bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Readiness Score</p>
          <h3 className="mt-2 text-2xl font-black text-[#16214A]">
            {progress}%
          </h3>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* MODULES */}
        <div className="rounded-3xl border border-border/60 bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Completed Modules</p>
          <h3 className="mt-2 text-2xl font-black text-[#16214A]">
            {completedCount} / 5
          </h3>
        </div>

      </div>
    </div>
  );
}