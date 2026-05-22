"use client";

import { useRouter } from "next/navigation";

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  CircleHelp,
  FileText,
  Lightbulb,
  Sparkles,
  Rocket,
  ShieldCheck,
  Download,
} from "lucide-react";

const summarySections = [
  {
    title: "Idea Definition",
    icon: Lightbulb,
    description:
      "AI-powered startup ecosystem connecting founders, investors and advisors through scalable workflows.",
    status: "Completed",
    score: "84%",
  },

  {
    title: "Problem Definition",
    icon: CircleHelp,
    description:
      "Early-stage founders struggle with fragmented startup execution and validation systems.",
    status: "Completed",
    score: "79%",
  },

  {
    title: "Market Research",
    icon: BarChart3,
    description:
      "Growing founder enablement and startup infrastructure opportunity across global markets.",
    status: "In Progress",
    score: "72%",
  },

  {
    title: "Solution Design",
    icon: Sparkles,
    description:
      "Centralized startup execution workspace with guided founder workflows and automation.",
    status: "In Progress",
    score: "77%",
  },

  {
    title: "Business Model",
    icon: BriefcaseBusiness,
    description:
      "Recurring SaaS subscription model with premium startup enablement services.",
    status: "Pending",
    score: "68%",
  },
];

export default function SummaryPage() {
  const router = useRouter();

  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="overflow-hidden rounded-[32px] border border-border/60 bg-white">
        <div className="grid gap-8 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-700">
              <Rocket className="h-4 w-4" />
              Startup Builder • Module 6
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-800 md:text-5xl">
              Startup Execution
              <span className="block text-primary">
                Summary & Insights
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Review your startup execution blueprint,
              business strategy, market opportunity and
              product direction before investor readiness
              analysis.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Builder Completion
                </p>

                <h3 className="mt-2 text-5xl font-black text-slate-800">
                  72%
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-4 text-primary shadow-sm">
                <ShieldCheck className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[72%] rounded-full bg-primary" />
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Strong startup direction established",
                "Scalable SaaS opportunity detected",
                "Founder execution workflow improving",
                "Investor readiness progressing",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />

                  <p className="text-sm font-medium text-slate-600">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE SUMMARY */}
      <section className="rounded-[32px] border border-primary/10 bg-gradient-to-br from-primary/5 to-cyan-50 p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              <FileText className="h-4 w-4" />
              Executive Startup Summary
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-800">
              Startup Ka Mall
            </h2>

            <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">
              Startup Ka Mall is building an integrated
              startup execution ecosystem enabling
              founders to validate, structure and scale
              startups through guided workflows, advisor
              networks, AI-powered execution systems and
              fundraising enablement infrastructure.
            </p>
          </div>

          {/* SCORE */}
          <div className="rounded-[28px] border border-white/80 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Investor Readiness
            </p>

            <h3 className="mt-3 text-6xl font-black text-slate-800">
              72
            </h3>

            <p className="mt-2 text-sm font-bold text-emerald-600">
              Strong Early-Stage Potential
            </p>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[72%] rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW SUMMARY */}
      <section className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm lg:p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-800">
            Builder Workflow Summary
          </h2>

          <p className="mt-2 text-slate-600">
            Review startup execution progress across all
            completed modules.
          </p>
        </div>

        <div className="space-y-5">
          {summarySections.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className="rounded-[28px] border border-border/60 bg-[#f8fbff] p-6 transition hover:-translate-y-1 hover:border-primary/20 hover:bg-white hover:shadow-lg"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  {/* LEFT */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-primary/10 p-4 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-slate-800">
                        {section.title}
                      </h3>

                      <p className="mt-3 max-w-3xl leading-8 text-slate-600">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col items-start gap-3 lg:items-end">
                    <div
                      className={`rounded-full px-4 py-2 text-xs font-bold
                      
                      ${
                        section.status ===
                        "Completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : section.status ===
                            "In Progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-slate-200 text-slate-700"
                      }
                    `}
                    >
                      {section.status}
                    </div>

                    <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                      <p className="text-xs font-medium text-slate-500">
                        Module Score
                      </p>

                      <h4 className="mt-1 text-xl font-black text-primary">
                        {section.score}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INSIGHTS */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* STRENGTHS */}
        <section className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
              <CheckCircle2 className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-800">
                Startup Strengths
              </h2>

              <p className="text-sm text-slate-500">
                Strong execution indicators detected
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "Clear founder problem understanding",
              "Growing startup ecosystem opportunity",
              "Scalable SaaS platform architecture",
              "Strong differentiation potential",
              "Recurring monetization opportunities",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f8fbff] p-4 text-sm font-medium text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* FOCUS */}
        <section className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
              <BarChart3 className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-800">
                Key Focus Areas
              </h2>

              <p className="text-sm text-slate-500">
                Areas requiring further validation
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "Validate acquisition channels",
              "Improve monetization clarity",
              "Expand competitor benchmarking",
              "Strengthen investor readiness",
              "Improve market penetration strategy",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f8fbff] p-4 text-sm font-medium text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* METRICS */}
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Startup Clarity",
            value: "84%",
            desc: "Vision & direction",
          },

          {
            title: "Market Potential",
            value: "78%",
            desc: "Demand opportunity",
          },

          {
            title: "Execution Readiness",
            value: "72%",
            desc: "Operational maturity",
          },

          {
            title: "Scalability",
            value: "81%",
            desc: "Growth capability",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-[28px] border border-border/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm font-medium text-slate-500">
              {item.title}
            </p>

            <h3 className="mt-4 text-5xl font-black tracking-tight text-slate-800">
              {item.value}
            </h3>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-primary"
                style={{
                  width: item.value,
                }}
              />
            </div>

            <p className="mt-3 text-sm text-slate-500">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <div className="flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
        {/* EXPORT */}
        <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/60 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-muted">
          <Download className="h-4 w-4" />

          Export Summary
        </button>

        {/* NEXT */}
        <button
          onClick={() =>
            router.push(
              "/founder/startup-builder/readiness-score"
            )
          }
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
        >
          Continue to Readiness Score

        </button>
      </div>
    </div>
  );
}