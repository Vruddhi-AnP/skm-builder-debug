"use client";

import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const readinessMetrics = [
  {
    title: "Idea Validation",
    score: "85%",
    status: "Strong",
  },
  {
    title: "Market Opportunity",
    score: "72%",
    status: "Good",
  },
  {
    title: "Business Model",
    score: "58%",
    status: "Moderate",
  },
  {
    title: "Execution Readiness",
    score: "74%",
    status: "Good",
  },
];

const strengths = [
  "Clear startup vision and positioning",
  "Strong founder problem understanding",
  "Scalable SaaS ecosystem opportunity",
  "High-growth startup ecosystem market",
];

const improvements = [
  "Improve customer acquisition strategy",
  "Strengthen monetization validation",
  "Expand market competitor research",
  "Build investor traction roadmap",
];

export default function ReadinessScorePage() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="mb-4 inline-flex items-center rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Step 7 • Startup Builder
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            Startup Readiness Score
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Analyze your startup readiness, identify strengths and
            discover improvement opportunities before fundraising
            and execution scaling.
          </p>
        </div>

        {/* SCORE CARD */}
        <div className="w-full rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-6 lg:max-w-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">
                Overall Readiness
              </p>

              <h2 className="mt-3 text-6xl font-black tracking-tight text-slate-900">
                72
              </h2>

              <p className="mt-2 text-sm font-semibold text-emerald-600">
                Strong Early-Stage Potential
              </p>
            </div>

            <div className="rounded-3xl bg-cyan-100 p-5 text-cyan-700">
              <ShieldCheck className="h-10 w-10" />
            </div>
          </div>

          <div className="mt-8 h-3 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-[72%] rounded-full bg-cyan-500" />
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Your startup shows strong execution potential with
            opportunities to improve business scalability and
            investor readiness.
          </p>
        </div>
      </div>

      {/* READINESS METRICS */}
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">
            Readiness Breakdown
          </h2>

          <p className="mt-2 text-slate-600">
            Performance analysis across startup execution pillars.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {readinessMetrics.map((metric) => (
            <div
              key={metric.title}
              className="rounded-[28px] border border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {metric.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Startup evaluation category
                  </p>
                </div>

                <div
                  className={`rounded-full px-4 py-2 text-xs font-bold ${
                    metric.status === "Strong"
                      ? "bg-emerald-100 text-emerald-700"
                      : metric.status === "Good"
                      ? "bg-cyan-100 text-cyan-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {metric.status}
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-500">
                    Score
                  </p>

                  <p className="text-sm font-bold text-cyan-700">
                    {metric.score}
                  </p>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-cyan-500"
                    style={{
                      width: metric.score,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INSIGHTS */}
      <div className="grid gap-6 xl:grid-cols-2">
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
                Positive execution indicators
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {strengths.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />

                <p className="text-sm font-medium leading-relaxed text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* IMPROVEMENTS */}
        <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
              <AlertTriangle className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Improvement Areas
              </h2>

              <p className="text-sm text-slate-500">
                Recommended next execution steps
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {improvements.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4"
              >
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />

                <p className="text-sm font-medium leading-relaxed text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* INVESTOR READINESS */}
      <section className="rounded-[32px] border border-slate-200 bg-gradient-to-r from-cyan-50 to-white p-8">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
              <TrendingUp className="h-4 w-4" />
              Investor Readiness Analysis
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-900">
              Startup is
              <span className="text-cyan-600">
                {" "}
                Fundraising Capable
              </span>
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
              Your startup demonstrates strong early-stage
              positioning with clear execution direction and
              scalable market opportunity.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700 w-fit">
                <BarChart3 className="h-5 w-5" />
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Market Potential
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Strong opportunity in startup enablement ecosystem.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="rounded-2xl bg-violet-100 p-3 text-violet-700 w-fit">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Business Scalability
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                SaaS-based startup model supports scalable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER ACTIONS */}
      <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600">
          Export Readiness Report
        </button>

        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-cyan-700">
          Complete Startup Builder
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}