"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <section className="overflow-hidden rounded-[32px] border border-border/60 bg-[#F7F4EE]/95">
        <div className="grid gap-8 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <Rocket className="h-4 w-4" />
              Startup Builder • Module 1
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#16214A] md:text-5xl">
              Define Your Startup
              <span className="block text-primary">
                Vision & Direction
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B6B6B]">
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

                <h3 className="mt-2 text-5xl font-black text-[#16214A]">
                  80%
                </h3>
              </div>

              <div className="rounded-2xl bg-[#F7F4EE]/95 p-4 text-primary shadow-sm">
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

                  <p className="text-sm font-medium text-[#6B6B6B]">
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
        <Accordion
          type="single"
          collapsible
          defaultValue="foundation"
          className="space-y-6"
        >
          {/* STARTUP FOUNDATION */}
          <AccordionItem
            value="foundation"
            className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 px-6 shadow-sm lg:px-8"
          >
            <AccordionTrigger className="py-6 hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <div className="rounded-2xl bg-primary/10 p-4 text-primary">
                  <Lightbulb className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                    Startup Foundation
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Define startup identity and direction
                  </p>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-8">
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
                    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
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
                    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
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
  <label className="mb-3 block text-sm font-semibold text-slate-700">
    Startup Category
  </label>

  <select
    value={formData.startupCategory}
    onChange={(e) =>
      handleChange(
        "startupCategory",
        e.target.value
      )
    }
    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
  >
    <option value="">
      Select Startup Category
    </option>

    {startupCategories.map((item) => (
      <option
        key={item}
        value={item}
      >
        {item}
      </option>
    ))}
  </select>
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
                  className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* EXECUTION ENGINE */}
          <AccordionItem
            value="execution"
            className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 px-6 shadow-sm lg:px-8"
          >
            <AccordionTrigger className="py-6 hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <div className="rounded-2xl bg-violet-100 p-4 text-violet-700">
                  <Sparkles className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                    Startup Execution Engine
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Define problem, audience and execution
                  </p>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-8">
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
                  className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* FOUNDER GOALS */}
          <AccordionItem
              value="goals"
              className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 px-6 shadow-sm lg:px-8"
            >
                <AccordionTrigger
              className="py-6 hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-700">
                  <Target className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                    Founder Goals
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Define founder motivation and business
                    goals
                  </p>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-8">

             {/* GOALS */}
<div>
  <label className="mb-3 block text-sm font-semibold text-slate-700">
    Founder Goal
  </label>

  <select
    value={formData.founderGoal}
    onChange={(e) =>
      handleChange(
        "founderGoal",
        e.target.value
      )
    }
    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
  >
    <option value="">
      Select Founder Goal
    </option>

    {founderGoals.map((goal) => (
      <option
        key={goal}
        value={goal}
      >
        {goal}
      </option>
    ))}
  </select>
</div>

</AccordionContent>
</AccordionItem>
</Accordion>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {/* INSIGHTS */}
          <section className="rounded-[32px] border border-primary/10 bg-primary/5 p-6">
            <h3 className="text-2xl font-black tracking-tight text-[#16214A]">
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
                  className="rounded-2xl border border-white/60 bg-[#F7F4EE]/95 p-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* READINESS */}
          <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
            <h3 className="text-2xl font-black tracking-tight text-[#16214A]">
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
        <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-muted">
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