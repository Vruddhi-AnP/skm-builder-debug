"use client";

import { useState } from "react";
import {
  ArrowRight,
  Lightbulb,
  Sparkles,
} from "lucide-react";

export default function IdeaDefinitionPage() {
  const startupTypes = [
    "AI SaaS",
    "Marketplace",
    "FinTech",
    "HealthTech",
    "EdTech",
    "Creator Economy",
  ];

  const painPoints = [
    "Manual Workflows",
    "Poor Collaboration",
    "High Costs",
    "No Automation",
    "Low Productivity",
    "Slow Operations",
  ];

  const audiences = [
    "Startups",
    "SMBs",
    "Enterprises",
    "Students",
    "Creators",
    "Agencies",
  ];

  const solutionTypes = [
    "AI Automation",
    "Workflow Platform",
    "Analytics Dashboard",
    "Marketplace",
    "SaaS Platform",
  ];

  const [selectedStartup, setSelectedStartup] =
    useState("");

  const [
    selectedPainPoints,
    setSelectedPainPoints,
  ] = useState<string[]>([]);

  const [selectedAudience, setSelectedAudience] =
    useState("");

  const [selectedSolution, setSelectedSolution] =
    useState("");

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="mb-4 inline-flex items-center rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Step 1 • Startup Builder
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            Idea Definition
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Define your startup vision, business
            concept and execution direction through
            interactive founder workflows.
          </p>
        </div>

        {/* PROGRESS CARD */}
        <div className="w-full rounded-[28px] border border-slate-200 bg-slate-50 p-6 lg:max-w-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-600">
              Module Progress
            </p>

            <span className="text-sm font-bold text-cyan-600">
              80%
            </span>
          </div>

          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-[80%] rounded-full bg-cyan-500" />
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Complete startup selections to continue
            founder workflow.
          </p>
        </div>
      </div>

      {/* FORM GRID */}
      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* STARTUP DNA */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700">
                <Lightbulb className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Startup DNA
                </h2>

                <p className="text-sm text-slate-500">
                  Build your startup identity
                  interactively
                </p>
              </div>
            </div>

            {/* STARTUP NAME */}
            <div className="mb-8">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Startup Name
              </label>

              <input
                type="text"
                placeholder="Enter startup name"
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-cyan-500"
              />
            </div>

            {/* STARTUP TYPE */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Select Startup Category
              </label>

              <div className="flex flex-wrap gap-3">
                {startupTypes.map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      setSelectedStartup(item)
                    }
                    className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                      selectedStartup === item
                        ? "border-cyan-500 bg-cyan-500 text-white shadow-lg shadow-cyan-200"
                        : "border-slate-200 bg-white text-slate-700 hover:border-cyan-400 hover:bg-cyan-50"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* STARTUP STAGE */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Startup Stage
              </label>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  "Idea",
                  "MVP",
                  "Beta",
                  "Revenue",
                ].map((stage) => (
                  <div
                    key={stage}
                    className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-50 hover:shadow-lg"
                  >
                    <p className="font-semibold text-slate-800">
                      {stage}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* GOALS */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Primary Goal
              </label>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Increase Revenue",
                  "Save Time",
                  "Automate Work",
                  "Improve Collaboration",
                ].map((goal) => (
                  <div
                    key={goal}
                    className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg"
                  >
                    <h3 className="font-semibold text-slate-900">
                      {goal}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Build startup systems around
                      this focus area.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* STARTUP IDEA ENGINE */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-violet-100 p-3 text-violet-700">
                <Sparkles className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Startup Idea Engine
                </h2>

                <p className="text-sm text-slate-500">
                  Define problem, audience and
                  execution flow
                </p>
              </div>
            </div>

            {/* PAIN POINTS */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Select Core Pain Points
              </label>

              <div className="flex flex-wrap gap-3">
                {painPoints.map((point) => {
                  const active =
                    selectedPainPoints.includes(
                      point
                    );

                  return (
                    <button
                      key={point}
                      onClick={() => {
                        if (active) {
                          setSelectedPainPoints(
                            selectedPainPoints.filter(
                              (p) => p !== point
                            )
                          );
                        } else {
                          setSelectedPainPoints([
                            ...selectedPainPoints,
                            point,
                          ]);
                        }
                      }}
                      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                        active
                          ? "border-violet-500 bg-violet-500 text-white shadow-lg shadow-violet-200"
                          : "border-slate-200 bg-white text-slate-700 hover:border-violet-400 hover:bg-violet-50"
                      }`}
                    >
                      {point}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SOLUTION TYPE */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Solution Type
              </label>

              <div className="grid gap-4 md:grid-cols-2">
                {solutionTypes.map((solution) => (
                  <button
                    key={solution}
                    onClick={() =>
                      setSelectedSolution(solution)
                    }
                    className={`rounded-2xl border p-5 text-left transition-all ${
                      selectedSolution === solution
                        ? "border-violet-500 bg-violet-50"
                        : "border-slate-200 hover:border-violet-400"
                    }`}
                  >
                    <h3 className="font-semibold text-slate-900">
                      {solution}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      AI-guided startup execution
                      model
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* AUDIENCE */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Target Audience
              </label>

              <div className="flex flex-wrap gap-3">
                {audiences.map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      setSelectedAudience(item)
                    }
                    className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all ${
                      selectedAudience === item
                        ? "border-cyan-500 bg-cyan-500 text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:border-cyan-400 hover:bg-cyan-50"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* OPTIONAL DETAILS */}
            <div className="mt-8">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Additional Founder Notes
                <span className="ml-2 text-xs font-medium text-slate-400">
                  (Optional)
                </span>
              </label>

              <textarea
                rows={4}
                placeholder="Add additional startup context if needed..."
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-violet-500"
              />
            </div>

           {/* STARTUP INSIGHTS */}
            <div className="mt-10 rounded-[24px] border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-700">
                    Startup Insights
                  </p>

                  <h3 className="mt-4 text-2xl font-black text-slate-900">
                    Startup Direction Summary
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                    Your startup selections indicate strong
                    potential for scalable workflow systems and
                    digital product execution across modern
                    business environments.
                  </p>
                </div>

                <div className="hidden h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-sm lg:flex">
                  <span className="text-3xl">🚀</span>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Market Potential",
                    value: "Strong",
                  },
                  {
                    title: "Execution Scope",
                    value: "High",
                  },
                  {
                    title: "Scalability",
                    value: "Moderate",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white bg-white p-5"
                  >
                    <p className="text-sm font-medium text-slate-500">
                      {item.title}
                    </p>

                    <h4 className="mt-2 text-xl font-black text-slate-900">
                      {item.value}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {/* STARTUP INSIGHTS */}
          <section className="rounded-[28px] border border-cyan-100 bg-gradient-to-br from-cyan-50 to-violet-50 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">
                Startup Insights
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {[
                "Strong SaaS execution potential",
                "Recurring revenue model recommended",
                "AI automation market growing rapidly",
                "Target audience appears scalable",
              ].map((tip) => (
                <div
                  key={tip}
                  className="rounded-2xl bg-white p-4 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {tip}
                </div>
              ))}
            </div>
          </section>

          {/* LIVE READINESS */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Startup Readiness
            </h3>

            <div className="mt-6 space-y-5">
              {[
                {
                  label: "Idea Clarity",
                  value: "78%",
                },
                {
                  label: "Market Potential",
                  value: "64%",
                },
                {
                  label: "Execution Direction",
                  value: "82%",
                },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-700">
                      {item.label}
                    </p>

                    <span className="text-sm font-bold text-cyan-600">
                      {item.value}
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                      style={{
                        width: item.value,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600">
          Save Draft
        </button>

        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-cyan-700">
          Continue to Problem Definition
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}