"use client";

import Link from "next/link";

import {
  ArrowRight,
  Lightbulb,
  CircleHelp,
  BarChart3,
  Sparkles,
  BriefcaseBusiness,
  FileText,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import {
  getBuilderProgress,
  getCompletedStepCount,
  getStepStatus,
  type BuilderStepKey,
} from "@/hooks/useLocalBuilder";

const builderModules = [
  {
    title: "Idea Definition",
    key: "ideaDefinition" as BuilderStepKey,
    href: "/founder/startup-builder/idea-definition",
    icon: Lightbulb,
    description: "Define your startup vision, mission and business idea.",
  },
  {
    title: "Problem Definition",
    key: "problemDefinition" as BuilderStepKey,
    href: "/founder/startup-builder/problem-definition",
    icon: CircleHelp,
    description: "Identify the core real-world problem your startup solves.",
  },
  {
    title: "Market Research",
    key: "marketResearch" as BuilderStepKey,
    href: "/founder/startup-builder/market-research",
    icon: BarChart3,
    description: "Analyze competitors, target audience and market demand.",
  },
  {
    title: "Solution Design",
    key: "solutionDesign" as BuilderStepKey,
    href: "/founder/startup-builder/solution-design",
    icon: Sparkles,
    description: "Structure product workflows, user journeys and features.",
  },
  {
    title: "Business Model",
    key: "businessModel" as BuilderStepKey,
    href: "/founder/startup-builder/business-model",
    icon: BriefcaseBusiness,
    description: "Define pricing, revenue strategy and business scalability.",
  },
  {
    title: "Summary",
    key: null,
    href: "/founder/startup-builder/summary",
    icon: FileText,
    description: "Review startup execution insights and readiness roadmap.",
  },
];

export default function StartupBuilderPage() {
  // Initialize directly — no useEffect needed since localStorage is read once on mount
  const progress = getBuilderProgress();
  const completedCount = getCompletedStepCount();
  const totalModules = 5;
  const pendingCount = totalModules - completedCount;

  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="overflow-hidden rounded-[32px] border border-border/60 bg-[#F7F4EE]/95">
        <div className="grid gap-8 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
              Startup Execution Workspace
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#16214A] md:text-5xl">
              Build Your Startup
              <span className="block text-primary">Step-by-Step</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B6B6B]">
              Validate your startup idea, structure your business model, analyze
              market demand and prepare investor-ready execution workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/founder/startup-builder/idea-definition"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
              >
                Start Building
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/founder/dashboard"
                className="rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-muted"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Builder Progress
                </p>
                <h3 className="mt-2 text-5xl font-black text-[#16214A]">
                  {progress}%
                </h3>
              </div>

              <div className="rounded-2xl bg-[#F7F4EE]/95 p-4 text-primary shadow-sm">
                <ShieldCheck className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-8 h-3 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Complete each module step by step",
                "Your data is saved as you progress",
                "Get your readiness score at the end",
                "Share your profile with investors",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <p className="text-sm font-medium text-[#6B6B6B]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid gap-5 sm:grid-cols-3">
        {[
          {
            title: "Startup Progress",
            value: `${progress}%`,
            subtitle: "Overall workflow completion",
          },
          {
            title: "Completed Modules",
            value: `${completedCount}/${totalModules}`,
            subtitle: "Builder steps completed",
          },
          {
            title: "Pending Steps",
            value: `${pendingCount}`,
            subtitle: "Steps remaining to complete",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="flex min-h-45 flex-col justify-between rounded-[28px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <p className="text-sm font-medium text-slate-500">{item.title}</p>
              <h3 className="mt-4 text-5xl font-black tracking-tight text-[#16214A]">
                {item.value}
              </h3>
            </div>
            <div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-3 text-sm text-slate-500">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </section>

      {/* MODULES */}
      <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm lg:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
              Startup Builder Modules
            </h2>
            <p className="mt-2 max-w-2xl text-[#6B6B6B]">
              Complete each startup workflow module to improve execution clarity
              and investor readiness.
            </p>
          </div>

          <Link
            href="/founder/startup-builder/readiness-score"
            className="inline-flex w-fit items-center gap-2 rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-muted"
          >
            View Full Readiness
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* GRID */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {builderModules.map((module) => {
            const Icon = module.icon;
            const status = module.key ? getStepStatus(module.key) : "Pending";
            const progressValue =
              status === "Completed" ? 100 : status === "In Progress" ? 50 : 0;

            return (
              <div
                key={module.title}
                className="group rounded-[28px] border border-border/60 bg-[#f8fbff] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-[#F7F4EE]/95 hover:shadow-lg"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  {/* LEFT */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-primary/10 p-4 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black tracking-tight text-[#16214A]">
                        {module.title}
                      </h3>
                      <p className="mt-3 max-w-md leading-7 text-[#6B6B6B]">
                        {module.description}
                      </p>
                    </div>
                  </div>

                  {/* STATUS BADGE */}
                  <div
                    className={`w-fit shrink-0 rounded-full px-4 py-2 text-xs font-bold ${
                      status === "Completed"
                        ? "bg-emerald-100 text-emerald-700"
                        : status === "In Progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {status}
                  </div>
                </div>

                {/* PROGRESS BAR */}
                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500">
                      Progress
                    </p>
                    <p className="text-sm font-bold text-primary">
                      {progressValue}%
                    </p>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${progressValue}%` }}
                    />
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex items-center justify-between">
                  <p className="text-sm text-slate-500">
                    {status === "Completed"
                      ? "Module completed ✓"
                      : "Continue startup workflow"}
                  </p>
                  <Link
                    href={module.href}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    {status === "Completed" ? "Review" : "Open"}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}