"use client";

import Image from "next/image";
import { mockReadinessReport } from "@/data/mockReadinessReport";

import {
  AlertTriangle,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Target,
  Rocket,
  CircleDollarSign,
} from "lucide-react";

export default function ReadinessReport() {
  return (
    <div className="print-report mx-auto w-full bg-white text-[#0F172A]">
      {/* PAGE 1 */}
      <section className="print-page min-h-[1120px] px-12 py-12">
        {/* HEADER */}
        <div className="border-b border-slate-200 pb-8">
          <div className="flex items-center justify-between gap-6">
            <div>
              <Image
                src="/logo.png"
                alt="Startup Ka Mall"
                width={160}
                height={45}
                className="h-auto w-[150px]"
              />

              <p className="mt-3 text-sm text-slate-500">
                Startup Ecosystem Intelligence Platform
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Generated Report
              </p>

              <p className="mt-2 text-sm font-medium text-slate-600">
                {mockReadinessReport.generatedDate}
              </p>
            </div>
          </div>

          {/* HERO */}
          <div className="mt-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-5 py-2 text-xs font-bold uppercase tracking-wide text-sky-700">
              <Sparkles className="h-4 w-4" />
              Startup Readiness Report
            </div>

            <h1 className="mt-6 text-6xl font-black leading-tight tracking-tight text-[#16214A]">
              {mockReadinessReport.startupName}
            </h1>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
                Founder: {mockReadinessReport.founderName}
              </div>

              <div className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
                Industry: {mockReadinessReport.industry}
              </div>

              <div className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
                Stage: {mockReadinessReport.stage}
              </div>
            </div>

            <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-600">
              {mockReadinessReport.executiveSummary}
            </p>
          </div>
        </div>

        {/* SCORE */}
        <div className="mt-14 rounded-[36px] border border-slate-200 bg-slate-50 p-10">
          <div className="flex items-center justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold uppercase tracking-wide text-emerald-700">
                <ShieldCheck className="h-4 w-4" />
                Investor Ready
              </div>

              <h2 className="mt-6 text-7xl font-black tracking-tight text-[#16214A]">
                {mockReadinessReport.overallScore}
              </h2>

              <p className="mt-3 text-xl font-bold text-emerald-600">
                Strong Early-Stage Potential
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                Your startup demonstrates strong execution
                capability, scalable growth potential and
                promising investor readiness indicators.
              </p>
            </div>

            <div className="flex h-56 w-56 items-center justify-center rounded-full border-[18px] border-sky-600 bg-white shadow-sm">
              <div className="text-center">
                <p className="text-6xl font-black text-sky-600">
                  {mockReadinessReport.overallScore}%
                </p>

                <p className="mt-2 text-sm font-semibold text-slate-500">
                  Overall Score
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* QUICK METRICS */}
        <div className="mt-12 grid grid-cols-2 gap-5">
          {[
            {
              title: "Founder Clarity",
              value: "88%",
            },

            {
              title: "Market Fit",
              value: "73%",
            },

            {
              title: "Scalability",
              value: "81%",
            },

            {
              title: "Investor Potential",
              value: "69%",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-slate-200 p-6"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <Sparkles className="h-5 w-5 text-sky-600" />
              </div>

              <h3 className="mt-5 text-5xl font-black text-[#16214A]">
                {item.value}
              </h3>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-sky-600"
                  style={{
                    width: item.value,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PAGE 2 */}
      <section className="print-page min-h-[1120px] px-12 py-12">
        <div className="flex items-center gap-3">
          <BarChart3 className="h-7 w-7 text-sky-600" />

          <h2 className="text-4xl font-black text-[#16214A]">
            Readiness Breakdown
          </h2>
        </div>

        <div className="mt-10 grid gap-6">
          {mockReadinessReport.metrics.map((metric) => (
            <div
              key={metric.title}
              className="rounded-[32px] border border-slate-200 p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black text-[#16214A]">
                  {metric.title}
                </h3>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-bold ${
                    metric.status === "Strong"
                      ? "bg-emerald-100 text-emerald-700"
                      : metric.status === "Good"
                      ? "bg-cyan-100 text-cyan-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {metric.status}
                </span>
              </div>

              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-500">
                    Performance
                  </p>

                  <p className="text-lg font-black text-sky-600">
                    {metric.score}%
                  </p>
                </div>

                <div className="h-4 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-sky-600"
                    style={{
                      width: `${metric.score}%`,
                    }}
                  />
                </div>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  {metric.insight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PAGE 3 */}
      <section className="print-page min-h-[1120px] px-12 py-12">
        <div className="grid gap-8">
          {/* STRENGTHS */}
          <div className="rounded-[32px] border border-slate-200 p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <h2 className="text-3xl font-black text-[#16214A]">
                Startup Strengths
              </h2>
            </div>

            <div className="mt-8 space-y-5">
              {mockReadinessReport.strengths.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />

                  <p className="text-base font-medium leading-8 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* IMPROVEMENTS */}
          <div className="rounded-[32px] border border-slate-200 p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
                <AlertTriangle className="h-5 w-5" />
              </div>

              <h2 className="text-3xl font-black text-[#16214A]">
                Improvement Areas
              </h2>
            </div>

            <div className="mt-8 space-y-5">
              {mockReadinessReport.improvements.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5"
                >
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />

                  <p className="text-base font-medium leading-8 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 4 */}
      <section className="print-page min-h-[1120px] px-12 py-12">
        <div className="rounded-[36px] border border-slate-200 bg-slate-50 p-10">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-7 w-7 text-sky-600" />

            <h2 className="text-4xl font-black text-[#16214A]">
              Investor Readiness Analysis
            </h2>
          </div>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            {mockReadinessReport.executiveSummary}
          </p>

          <div className="mt-10 grid gap-6">
            {Object.entries(
              mockReadinessReport.investorReadiness
            ).map(([key, value]) => (
              <div
                key={key}
                className="rounded-[32px] bg-white p-8 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black capitalize text-[#16214A]">
                    {key}
                  </h3>

                  <p className="text-3xl font-black text-sky-600">
                    {value}%
                  </p>
                </div>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-sky-600"
                    style={{
                      width: `${value}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RECOMMENDATIONS */}
        <div className="mt-10 grid gap-6">
          <div className="rounded-[32px] border border-slate-200 p-8">
            <div className="flex items-center gap-3">
              <Rocket className="h-6 w-6 text-sky-600" />

              <h3 className="text-3xl font-black text-[#16214A]">
                Immediate Actions
              </h3>
            </div>

            <div className="mt-8 space-y-4">
              {mockReadinessReport.recommendations.immediate.map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5"
                  >
                    <Target className="mt-1 h-5 w-5 shrink-0 text-sky-600" />

                    <p className="text-base font-medium leading-8 text-slate-700">
                      {item}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 p-8">
            <div className="flex items-center gap-3">
              <CircleDollarSign className="h-6 w-6 text-emerald-600" />

              <h3 className="text-3xl font-black text-[#16214A]">
                Growth Recommendations
              </h3>
            </div>

            <div className="mt-8 space-y-4">
              {mockReadinessReport.recommendations.longTerm.map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5"
                  >
                    <TrendingUp className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />

                    <p className="text-base font-medium leading-8 text-slate-700">
                      {item}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}