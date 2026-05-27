"use client";

import { useRouter } from "next/navigation";

import {
  exportReadinessReport,
} from "@/services/export.service";

import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Rocket,
  Download,
  Sparkles,
  Target,
  Users,
  GraduationCap,
  ArrowUpRight,
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
  "High-growth startup enablement market",
  "Modern workflow-first product direction",
];

const improvements = [
  "Improve customer acquisition strategy",
  "Strengthen monetization validation",
  "Expand market competitor benchmarking",
  "Improve investor traction roadmap",
  "Increase founder execution automation",
];

export default function ReadinessScorePage() {
  const router = useRouter();

  return (
    <div className="print-report space-y-8">
      {/* HERO */}
      <section className="print-page print-card overflow-hidden rounded-[32px] border border-border/60 bg-[#F7F4EE]/95">
        <div className="grid gap-8 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-700">
              <Rocket className="h-4 w-4" />
              Startup Builder • Final Module
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#16214A] md:text-5xl">
              Startup
              <span className="block text-primary">
                Readiness Score
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B6B6B]">
              Analyze startup readiness, investor
              potential, execution scalability and
              business maturity before moving into
              fundraising and platform launch.
            </p>
          </div>

          {/* SCORE CARD */}
          <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Overall Readiness
                </p>

                <h2 className="mt-3 text-6xl font-black tracking-tight text-[#16214A]">
                  72
                </h2>

                <p className="mt-2 text-sm font-bold text-emerald-600">
                  Strong Early-Stage Potential
                </p>
              </div>

              <div className="rounded-3xl bg-[#F7F4EE]/95 p-5 text-primary shadow-sm">
                <ShieldCheck className="h-10 w-10" />
              </div>
            </div>

            <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[72%] rounded-full bg-primary" />
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Your startup demonstrates strong
              execution potential with opportunities to
              improve investor readiness and scalable
              monetization systems.
            </p>
          </div>
        </div>

      <div className="report-footer">
  <span>
    Startup Ka Mall • Founder Report
  </span>

  <span>
    Confidential Document
  </span>
</div>

      </section>

      {/* METRICS */}
      <section className="print-page print-card rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm lg:p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
            Readiness Breakdown
          </h2>

          <p className="mt-2 text-[#6B6B6B]">
            Startup performance analysis across core
            execution pillars.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {readinessMetrics.map((metric) => (
            <div
              key={metric.title}
              className="rounded-[28px] border border-border/60 bg-[#f8fbff] p-6 transition hover:-translate-y-1 hover:border-primary/20 hover:bg-[#F7F4EE]/95 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-2xl font-black text-[#16214A]">
                    {metric.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Startup evaluation category
                  </p>
                </div>

                <div
                  className={`rounded-full px-4 py-2 text-xs font-bold
                  
                  ${
                    metric.status === "Strong"
                      ? "bg-emerald-100 text-emerald-700"
                      : metric.status === "Good"
                      ? "bg-cyan-100 text-cyan-700"
                      : "bg-yellow-100 text-yellow-700"
                  }
                `}
                >
                  {metric.status}
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-500">
                    Performance Score
                  </p>

                  <p className="text-sm font-black text-primary">
                    {metric.score}
                  </p>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{
                      width: metric.score,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      <div className="report-footer">
  <span>
    Startup Ka Mall • Founder Report
  </span>

  <span>
    Confidential Document
  </span>
</div>

      </section>

      {/* STRENGTHS + IMPROVEMENTS */}
      <div className="grid gap-6">
        {/* STRENGTHS */}
        <section className="print-page print-card rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
              <CheckCircle2 className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#16214A]">
                Startup Strengths
              </h2>

              <p className="text-sm text-slate-500">
                Positive startup execution indicators
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {strengths.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl bg-[#f8fbff] p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />

                <p className="text-sm font-medium leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>

            <div className="report-footer">
  <span>
    Startup Ka Mall • Founder Report
  </span>

  <span>
    Confidential Document
  </span>
</div>

        </section>

        {/* IMPROVEMENTS */}
        <section className="print-page print-card rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
              <AlertTriangle className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#16214A]">
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
                className="flex items-start gap-4 rounded-2xl bg-[#f8fbff] p-4"
              >
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />

                <p className="text-sm font-medium leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>

                       <div className="report-footer">
  <span>
    Startup Ka Mall • Founder Report
  </span>

  <span>
    Confidential Document
  </span>
</div>

        </section>
      </div>

      {/* INVESTOR ANALYSIS */}
      <section className="print-page print-card rounded-[32px] border border-primary/10 bg-gradient-to-r from-primary/5 to-cyan-50 p-8">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          {/* LEFT */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F7F4EE]/95 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              <TrendingUp className="h-4 w-4" />
              Investor Readiness Analysis
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#16214A]">
              Startup is
              <span className="text-primary">
                {" "}
                Fundraising Ready
              </span>
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[#6B6B6B]">
              Your startup demonstrates strong
              early-stage positioning with scalable
              business direction, growing market
              opportunity and clear execution workflows.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* MARKET */}
            <div className="rounded-[28px] border border-white/70 bg-[#F7F4EE]/95 p-5 shadow-sm">
              <div className="w-fit rounded-2xl bg-cyan-100 p-3 text-cyan-700">
                <BarChart3 className="h-5 w-5" />
              </div>

              <h3 className="mt-4 text-xl font-black text-[#16214A]">
                Market Potential
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#6B6B6B]">
                Strong opportunity within startup
                enablement and founder infrastructure
                systems.
              </p>
            </div>

            {/* BUSINESS */}
            <div className="rounded-[28px] border border-white/70 bg-[#F7F4EE]/95 p-5 shadow-sm">
              <div className="w-fit rounded-2xl bg-violet-100 p-3 text-violet-700">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>

              <h3 className="mt-4 text-xl font-black text-[#16214A]">
                Business Scalability
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#6B6B6B]">
                SaaS-first startup model supports
                recurring scalable business growth.
              </p>
            </div>
          </div>
        </div>

            <div className="report-footer">
  <span>
    Startup Ka Mall • Founder Report
  </span>

  <span>
    Confidential Document
  </span>
</div>

      </section>

      {/* FINAL METRICS */}
      <section className="print-page grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Founder Clarity",
            value: "88%",
            desc: "Execution understanding",
          },

          {
            title: "Market Fit",
            value: "73%",
            desc: "Demand opportunity",
          },

          {
            title: "Scalability",
            value: "81%",
            desc: "Growth readiness",
          },

          {
            title: "Investor Potential",
            value: "69%",
            desc: "Fundraising readiness",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-[28px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                {item.title}
              </p>

              <Sparkles className="h-5 w-5 text-primary" />
            </div>

            <h3 className="mt-5 text-5xl font-black tracking-tight text-[#16214A]">
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

                          <div className="report-footer">
  <span>
    Startup Ka Mall • Founder Report
  </span>

  <span>
    Confidential Document
  </span>
</div>

      </section>

        {/* RECOMMENDED NEXT STEPS */}
<section className="print-page grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
  {/* LEFT */}
  <div className="print-page print-card rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm lg:p-8">
    <div className="mb-8">
      <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
        Recommended Next Steps
      </h2>

      <p className="mt-2 text-[#6B6B6B]">
        Suggested founder execution improvements before scaling.
      </p>
    </div>

    <div className="space-y-5">
      {[
        {
          title: "Improve Founder Validation",
          desc: "Strengthen founder interviews and user feedback collection.",
        },

        {
          title: "Prepare Investor Readiness",
          desc: "Build investor pitch material and fundraising strategy.",
        },

        {
          title: "Expand Market Analysis",
          desc: "Improve competitor benchmarking and positioning.",
        },

        {
          title: "Improve Monetization Systems",
          desc: "Define scalable recurring revenue opportunities.",
        },

        {
          title: "Launch MVP Execution Plan",
          desc: "Create milestone-based startup execution roadmap.",
        },
      ].map((item, index) => (
        <div
          key={item.title}
          className="rounded-[28px] border border-border/60 bg-[#f8fbff] p-5 transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-black text-primary">
              {index + 1}
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-black text-[#16214A]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={() =>
                    router.push("/founder/advisors")
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white transition hover:opacity-90"
                >
                  <Users className="h-3.5 w-3.5" />
                  Advisors
                </button>

                <button
                  onClick={() =>
                    router.push("/investor")
                  }
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-primary/30 hover:bg-primary/5"
                >
                  Investors
                </button>

                <button
                  onClick={() =>
                    router.push("/founder/programs")
                  }
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-primary/30 hover:bg-primary/5"
                >
                  <GraduationCap className="h-3.5 w-3.5" />
                  Programs
                </button>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* RIGHT */}
  <div className="print-card rounded-[32px] border border-primary/10 bg-primary/5 p-6 shadow-sm">
    <h3 className="text-2xl font-black text-[#16214A]">
      Founder Status
    </h3>

    <div className="mt-6 space-y-4">
      {[
        {
          title: "Startup Stage",
          value: "Early Validation",
        },

        {
          title: "Founder Readiness",
          value: "Strong Potential",
        },

        {
          title: "Investor Readiness",
          value: "Improving",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl bg-[#F7F4EE]/95 p-5 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {item.title}
          </p>

          <h4 className="mt-2 text-lg font-black text-primary">
            {item.value}
          </h4>
        </div>
      ))}

<button
  onClick={() =>
    router.push("/founder/dashboard")
  }
  className="print:hidden inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
      >
        Go To Dashboard

      </button>
    </div>
  </div>

                  <div className="report-footer">
  <span>
    Startup Ka Mall • Founder Report
  </span>

  <span>
    Confidential Document
  </span>
</div>

</section>

      {/* FINAL CTA */}
      <section className="print-page print-card rounded-[32px] border border-primary/10 bg-primary/5 p-8 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#F7F4EE]/95 text-primary shadow-sm">
            <Target className="h-10 w-10" />
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#16214A]">
            Startup Blueprint Completed
          </h2>

          <p className="mt-5 text-base leading-8 text-[#6B6B6B]">
            Your startup execution workflow has been
            successfully structured with market,
            product, business and readiness insights.
          </p>
        </div>

  <div className="report-footer">
  <span>
    Startup Ka Mall • Founder Report
  </span>

  <span>
    Confidential Document
  </span>
</div>

      </section>

      {/* FOOTER */}
      <div className="print:hidden flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
        {/* EXPORT */}
        <button
          onClick={exportReadinessReport}
          className="print:hidden inline-flex items-center justify-center gap-2 rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-muted"
        >
          <Download className="h-4 w-4" />

          Export Readiness Report
        </button>

        {/* COMPLETE */}
        <button
          onClick={() =>
            router.push("/founder/dashboard")
          }
          className="print:inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
        >
          Complete Startup Builder

        </button>
      </div>
    </div>
  );
}