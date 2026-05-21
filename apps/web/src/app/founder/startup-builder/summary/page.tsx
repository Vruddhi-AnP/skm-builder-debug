"use client";

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  CircleHelp,
  FileText,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const summarySections = [
  {
    title: "Idea Definition",
    icon: Lightbulb,
    description:
      "AI-powered startup ecosystem connecting founders, investors and advisors.",
    status: "Completed",
  },
  {
    title: "Problem Definition",
    icon: CircleHelp,
    description:
      "Early-stage founders struggle with fragmented startup execution workflows.",
    status: "Completed",
  },
  {
    title: "Market Research",
    icon: BarChart3,
    description:
      "Rapidly growing startup enablement and founder tooling market.",
    status: "In Progress",
  },
  {
    title: "Solution Design",
    icon: Sparkles,
    description:
      "Centralized execution workspace with guided founder workflows.",
    status: "In Progress",
  },
  {
    title: "Business Model",
    icon: BriefcaseBusiness,
    description:
      "Subscription-based SaaS model with premium startup services.",
    status: "Pending",
  },
];

export default function SummaryPage() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="mb-4 inline-flex items-center rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Step 6 • Startup Builder
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            Startup Summary
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Review your complete startup execution blueprint,
            validate progress and prepare for investor readiness
            analysis.
          </p>
        </div>

        {/* STATUS CARD */}
        <div className="w-full rounded-[28px] border border-slate-200 bg-slate-50 p-6 lg:max-w-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-600">
              Builder Completion
            </p>

            <span className="text-sm font-bold text-cyan-600">
              72%
            </span>
          </div>

          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-[72%] rounded-full bg-cyan-500" />
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Startup blueprint is nearing investor readiness.
          </p>
        </div>
      </div>

      {/* EXECUTIVE SUMMARY */}
      <section className="rounded-[32px] border border-slate-200 bg-gradient-to-r from-cyan-50 to-white p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
              <FileText className="h-4 w-4" />
              Executive Startup Summary
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Startup Ka Mall
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
              Startup Ka Mall is building an integrated startup
              execution ecosystem enabling founders to validate,
              structure and scale startups through guided
              workflows, advisor networks and fundraising systems.
            </p>
          </div>

          <div className="rounded-[28px] border border-cyan-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Investor Readiness
            </p>

            <h3 className="mt-3 text-5xl font-black text-slate-900">
              72
            </h3>

            <p className="mt-2 text-sm font-medium text-emerald-600">
              Strong early-stage potential
            </p>
          </div>
        </div>
      </section>

      {/* SUMMARY MODULES */}
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">
            Builder Workflow Summary
          </h2>

          <p className="mt-2 text-slate-600">
            Review all completed startup execution modules.
          </p>
        </div>

        <div className="space-y-5">
          {summarySections.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 transition hover:border-cyan-200 hover:bg-white"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-cyan-100 p-4 text-cyan-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {section.title}
                      </h3>

                      <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-fit rounded-full px-4 py-2 text-xs font-bold ${
                      section.status === "Completed"
                        ? "bg-emerald-100 text-emerald-700"
                        : section.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {section.status}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* KEY INSIGHTS */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* STRENGTHS */}
        <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
              <CheckCircle2 className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Startup Strengths
              </h2>

              <p className="text-sm text-slate-500">
                Strong execution indicators
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "Clear founder problem understanding",
              "Growing startup ecosystem opportunity",
              "Scalable SaaS platform architecture",
              "Strong differentiation potential",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* RISKS */}
        <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
              <BarChart3 className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Key Focus Areas
              </h2>

              <p className="text-sm text-slate-500">
                Areas requiring further validation
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "Validate customer acquisition channels",
              "Strengthen monetization clarity",
              "Expand competitor benchmarking",
              "Improve fundraising readiness",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600">
          Export Summary
        </button>

        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-cyan-700">
          Continue to Readiness Score
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}