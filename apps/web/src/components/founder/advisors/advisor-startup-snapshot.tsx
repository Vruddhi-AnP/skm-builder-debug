"use client";

import {
  getBuilderData,
  getBuilderProgress,
} from "@/hooks/useLocalBuilder";

import {
  Rocket,
  Briefcase,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export default function AdvisorStartupSnapshot() {
  const builder = getBuilderData();

  const progress = getBuilderProgress();

  return (
    <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Founder Snapshot
        </p>

        <h2 className="text-2xl font-black tracking-tight text-[#16214A]">
          Advisor Matching Profile
        </h2>

        <p className="text-sm text-slate-500">
          Recommendations are personalized using your Startup Builder data.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {/* Startup */}
        <div className="rounded-[24px] border border-border/60 bg-white p-5">
          <Rocket className="h-6 w-6 text-primary" />

          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Startup
          </p>

          <h3 className="mt-2 text-lg font-black text-[#16214A]">
            {builder.ideaDefinition?.startupName ||
              "Untitled Startup"}
          </h3>
        </div>

        {/* Industry */}
        <div className="rounded-[24px] border border-border/60 bg-white p-5">
          <Briefcase className="h-6 w-6 text-primary" />

          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Industry
          </p>

          <h3 className="mt-2 text-lg font-black text-[#16214A]">
            {builder.ideaDefinition?.startupCategory ||
              "General"}
          </h3>
        </div>

        {/* Stage */}
        <div className="rounded-[24px] border border-border/60 bg-white p-5">
          <TrendingUp className="h-6 w-6 text-primary" />

          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Stage
          </p>

          <h3 className="mt-2 text-lg font-black text-[#16214A]">
            {builder.ideaDefinition?.startupStage ||
              "Idea Stage"}
          </h3>
        </div>

        {/* Readiness */}
        <div className="rounded-[24px] border border-border/60 bg-white p-5">
          <ShieldCheck className="h-6 w-6 text-primary" />

          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Readiness
          </p>

          <h3 className="mt-2 text-lg font-black text-[#16214A]">
            {progress}%
          </h3>
        </div>

        <div className="mt-6 rounded-2xl border border-primary/10 bg-primary/5 p-4">
        <p className="text-sm font-medium text-slate-600">
            Recommended advisors are selected for
            <span className="font-bold text-primary">
            {" "}
            {builder.ideaDefinition?.startupStage || "Idea Stage"}
            </span>
            {" "}founders building in
            <span className="font-bold text-primary">
            {" "}
            {builder.ideaDefinition?.startupCategory || "General"}
            </span>.
        </p>
        </div>
      </div>
    </section>
  );
}