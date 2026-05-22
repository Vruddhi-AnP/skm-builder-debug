"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  ArrowRight,
  Lightbulb,
  Sparkles,
  Target,
  Rocket,
  Save,
  CheckCircle2,
} from "lucide-react";

interface IdeaDefinitionForm {
  startupName: string;
  startupVision: string;
  startupStage: string;
  startupCategory: string;
  targetAudience: string;
  solutionType: string;
  founderGoal: string;
  founderMotivation: string;
  problemStatement: string;
  uniqueValueProposition: string;
  additionalNotes: string;
}

export default function IdeaDefinitionPage() {
  const router = useRouter();

  const [formData, setFormData] =
    useState<IdeaDefinitionForm>({
      startupName: "",
      startupVision: "",
      startupStage: "",
      startupCategory: "",
      targetAudience: "",
      solutionType: "",
      founderGoal: "",
      founderMotivation: "",
      problemStatement: "",
      uniqueValueProposition: "",
      additionalNotes: "",
    });

  const startupCategories = [
    "AI SaaS",
    "Marketplace",
    "FinTech",
    "HealthTech",
    "EdTech",
    "Creator Economy",
    "Productivity",
    "Developer Tools",
  ];

  const startupStages = [
    "Idea Stage",
    "MVP Stage",
    "Beta Launch",
    "Revenue Stage",
  ];

  const audiences = [
    "Startups",
    "SMBs",
    "Enterprises",
    "Creators",
    "Students",
    "Agencies",
  ];

  const solutionTypes = [
    "AI Automation",
    "Workflow Platform",
    "Analytics Dashboard",
    "Marketplace",
    "SaaS Platform",
    "Mobile Application",
  ];

  const founderGoals = [
    "Increase Revenue",
    "Save Time",
    "Automate Workflows",
    "Improve Collaboration",
    "Reduce Operational Costs",
    "Improve Productivity",
  ];

  const handleChange = (
    field: keyof IdeaDefinitionForm,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="overflow-hidden rounded-[32px] border border-border/60 bg-white">
        <div className="grid gap-8 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <Rocket className="h-4 w-4" />
              Startup Builder • Module 1
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-800 md:text-5xl">
              Define Your Startup
              <span className="block text-primary">
                Vision & Direction
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Structure your startup idea, founder
              vision, target audience and execution
              direction through a guided startup
              workflow system.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Module Progress
                </p>

                <h3 className="mt-2 text-5xl font-black text-slate-800">
                  80%
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-4 text-primary shadow-sm">
                <Lightbulb className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[80%] rounded-full bg-primary" />
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Startup structure initialized",
                "Founder workflow active",
                "Idea clarity improving",
                "Execution roadmap started",
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

      {/* MAIN GRID */}
      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        {/* LEFT */}
        <div className="space-y-6">
          {/* STARTUP FOUNDATION */}
          <section className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-primary/10 p-4 text-primary">
                <Lightbulb className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-800">
                  Startup Foundation
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Define startup identity and direction
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* STARTUP NAME */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Startup Name
                </label>

                <input
                  type="text"
                  value={formData.startupName}
                  onChange={(e) =>
                    handleChange(
                      "startupName",
                      e.target.value
                    )
                  }
                  placeholder="Enter startup name"
                  className="h-14 w-full rounded-2xl border border-border/60 bg-white px-5 text-sm outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
                />
              </div>

              {/* STAGE */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Startup Stage
                </label>

                <select
                  value={formData.startupStage}
                  onChange={(e) =>
                    handleChange(
                      "startupStage",
                      e.target.value
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-border/60 bg-white px-5 text-sm outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
                >
                  <option value="">
                    Select Startup Stage
                  </option>

                  {startupStages.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* CATEGORY */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Startup Category
              </label>

              <div className="flex flex-wrap gap-3">
                {startupCategories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      handleChange(
                        "startupCategory",
                        item
                      )
                    }
                    className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all
                      
                      ${
                        formData.startupCategory ===
                        item
                          ? "border-primary bg-primary text-white"
                          : "border-border/60 bg-white text-slate-700 hover:border-primary/20 hover:bg-primary/5"
                      }
                    `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* STARTUP VISION */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Startup Vision
              </label>

              <textarea
                rows={5}
                value={formData.startupVision}
                onChange={(e) =>
                  handleChange(
                    "startupVision",
                    e.target.value
                  )
                }
                placeholder="Describe your startup vision and long-term direction..."
                className="w-full rounded-3xl border border-border/60 bg-white px-5 py-4 text-sm outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
              />
            </div>
          </section>

          {/* EXECUTION ENGINE */}
          <section className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-violet-100 p-4 text-violet-700">
                <Sparkles className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-800">
                  Startup Execution Engine
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Define problem, audience and execution
                </p>
              </div>
            </div>

            {/* PROBLEM */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Problem Statement
              </label>

              <textarea
                rows={4}
                value={formData.problemStatement}
                onChange={(e) =>
                  handleChange(
                    "problemStatement",
                    e.target.value
                  )
                }
                placeholder="What real-world problem are you solving?"
                className="w-full rounded-3xl border border-border/60 bg-white px-5 py-4 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              />
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
                    type="button"
                    onClick={() =>
                      handleChange(
                        "targetAudience",
                        item
                      )
                    }
                    className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all
                      
                      ${
                        formData.targetAudience ===
                        item
                          ? "border-violet-500 bg-violet-500 text-white"
                          : "border-border/60 bg-white text-slate-700 hover:border-violet-300 hover:bg-violet-50"
                      }
                    `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* SOLUTION */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Solution Type
              </label>

              <div className="grid gap-4 md:grid-cols-2">
                {solutionTypes.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      handleChange(
                        "solutionType",
                        item
                      )
                    }
                    className={`rounded-3xl border p-5 text-left transition-all
                      
                      ${
                        formData.solutionType ===
                        item
                          ? "border-violet-400 bg-violet-50"
                          : "border-border/60 bg-white hover:border-violet-300"
                      }
                    `}
                  >
                    <h3 className="font-bold text-slate-800">
                      {item}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Scalable startup execution system
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* UVP */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Unique Value Proposition
              </label>

              <textarea
                rows={4}
                value={
                  formData.uniqueValueProposition
                }
                onChange={(e) =>
                  handleChange(
                    "uniqueValueProposition",
                    e.target.value
                  )
                }
                placeholder="What makes your startup unique?"
                className="w-full rounded-3xl border border-border/60 bg-white px-5 py-4 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              />
            </div>
          </section>

          {/* FOUNDER GOALS */}
          <section className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-700">
                <Target className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-800">
                  Founder Goals
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Define founder motivation and business
                  goals
                </p>
              </div>
            </div>

            {/* GOALS */}
            <div className="grid gap-4 md:grid-cols-2">
              {founderGoals.map((goal) => (
                <button
                  key={goal}
                  type="button"
                  onClick={() =>
                    handleChange(
                      "founderGoal",
                      goal
                    )
                  }
                  className={`rounded-3xl border p-5 text-left transition-all
                  
                  ${
                    formData.founderGoal ===
                    goal
                      ? "border-emerald-400 bg-emerald-50"
                      : "border-border/60 bg-white hover:border-emerald-300"
                  }
                `}
                >
                  <h3 className="font-bold text-slate-800">
                    {goal}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Startup execution focus area
                  </p>
                </button>
              ))}
            </div>

            {/* MOTIVATION */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Founder Motivation
              </label>

              <textarea
                rows={4}
                value={formData.founderMotivation}
                onChange={(e) =>
                  handleChange(
                    "founderMotivation",
                    e.target.value
                  )
                }
                placeholder="Why are you building this startup?"
                className="w-full rounded-3xl border border-border/60 bg-white px-5 py-4 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            {/* NOTES */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Additional Founder Notes
              </label>

              <textarea
                rows={4}
                value={formData.additionalNotes}
                onChange={(e) =>
                  handleChange(
                    "additionalNotes",
                    e.target.value
                  )
                }
                placeholder="Add additional startup context..."
                className="w-full rounded-3xl border border-border/60 bg-white px-5 py-4 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
              />
            </div>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {/* INSIGHTS */}
          <section className="rounded-[32px] border border-primary/10 bg-primary/5 p-6">
            <h3 className="text-2xl font-black tracking-tight text-slate-800">
              Startup Insights
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Strong SaaS execution potential",
                "Recurring revenue model recommended",
                "AI automation market growing rapidly",
                "Target audience appears scalable",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/60 bg-white p-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* READINESS */}
          <section className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black tracking-tight text-slate-800">
              Startup Readiness
            </h3>

            <div className="mt-8 space-y-5">
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

                    <span className="text-sm font-bold text-primary">
                      {item.value}
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-primary"
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

      {/* FOOTER */}
      <div className="flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
        {/* SAVE */}
        <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/60 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-muted">
          <Save className="h-4 w-4" />

          Save Draft
        </button>

        {/* NEXT */}
        <button
          onClick={() =>
            router.push(
              "/founder/startup-builder/problem-definition"
            )
          }
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
        >
          Continue to Problem Definition

        </button>
      </div>
    </div>
  );
}