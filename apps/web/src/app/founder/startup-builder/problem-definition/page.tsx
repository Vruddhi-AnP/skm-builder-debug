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
  AlertTriangle,
  ArrowRight,
  CircleHelp,
  Users,
  Save,
  Target,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";

interface ProblemDefinitionForm {
  coreProblemStatement: string;
  problemSeverity: string;
  affectedUsers: string[];
  currentAlternatives: string[];
  marketGap: string;
  customerFrustrations: string;
  operationalImpact: string;
  problemFrequency: string;
  problemUrgency: string;
  founderObservations: string;
}

export default function ProblemDefinitionPage() {
  const router = useRouter();

  const [formData, setFormData] =
    useState<ProblemDefinitionForm>({
      coreProblemStatement: "",
      problemSeverity: "",
      affectedUsers: [],
      currentAlternatives: [],
      marketGap: "",
      customerFrustrations: "",
      operationalImpact: "",
      problemFrequency: "",
      problemUrgency: "",
      founderObservations: "",
    });

  const problemAreas = [
    "Manual Operations",
    "Poor Communication",
    "High Operational Costs",
    "No Automation",
    "Customer Retention",
    "Slow Processes",
    "Data Management Issues",
    "Workflow Inefficiencies",
  ];

  const existingSolutions = [
    "Excel Sheets",
    "WhatsApp",
    "Manual Work",
    "Google Docs",
    "Legacy Software",
    "Freelancers",
    "Internal Teams",
    "Multiple SaaS Tools",
  ];

  const userGroups = [
    "Founders",
    "Startups",
    "SMBs",
    "Enterprises",
    "Students",
    "Creators",
    "Agencies",
    "Remote Teams",
  ];

  const severityLevels = [
    {
      label: "Low",
    },

    {
      label: "Moderate",
    },

    {
      label: "High",
    },

    {
      label: "Critical",
    },
  ];

  const toggleArrayValue = (
    field:
      | "affectedUsers"
      | "currentAlternatives",
    value: string
  ) => {
    const existingValues = formData[field];

    if (existingValues.includes(value)) {
      setFormData((prev) => ({
        ...prev,
        [field]: existingValues.filter(
          (item) => item !== value
        ),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: [...existingValues, value],
      }));
    }
  };

  const handleChange = (
    field: keyof ProblemDefinitionForm,
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
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-rose-700">
              <ShieldAlert className="h-4 w-4" />
              Startup Builder • Module 2
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#16214A] md:text-5xl">
              Define The Real
              <span className="block text-primary">
                Market Problem
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B6B6B]">
              Identify operational inefficiencies,
              customer frustrations and real-world
              business problems worth solving through
              structured startup validation workflows.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Validation Progress
                </p>

                <h3 className="mt-2 text-5xl font-black text-[#16214A]">
                  60%
                </h3>
              </div>

              <div className="rounded-2xl bg-[#F7F4EE]/95 p-4 text-primary shadow-sm">
                <AlertTriangle className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[60%] rounded-full bg-primary" />
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Operational pain identified",
                "Market inefficiencies detected",
                "Customer frustrations validated",
                "Problem opportunity increasing",
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
          defaultValue="discovery"
          className="space-y-6"
        >
          {/* PROBLEM DISCOVERY */}
          <AccordionItem
            value="discovery"
            className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 px-6 shadow-sm lg:px-8"
          >
            <AccordionTrigger className="py-6 hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <div className="rounded-2xl bg-rose-100 p-4 text-rose-700">
                  <CircleHelp className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                    Problem Discovery
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Identify high-value market pain points
                  </p>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-8">
              {/* CORE PROBLEM */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Core Problem Statement
                </label>

                <textarea
                  rows={5}
                  value={formData.coreProblemStatement}
                  onChange={(e) =>
                    handleChange(
                      "coreProblemStatement",
                      e.target.value
                    )
                  }
                  placeholder="Describe the primary real-world problem your startup is solving..."
                  className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
                />
              </div>

              {/* PROBLEM AREAS */}
<div className="mt-8">
  <label className="mb-3 block text-sm font-semibold text-slate-700">
    Core Problem Areas
  </label>

  <select
    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
    onChange={(e) =>
      toggleArrayValue(
        "currentAlternatives",
        e.target.value
      )
    }
  >
    <option value="">
      Select Problem Area
    </option>

    {problemAreas.map((item) => (
      <option
        key={item}
        value={item}
      >
        {item}
      </option>
    ))}
  </select>
</div>

{/* SEVERITY */}
<div className="mt-8">
  <label className="mb-3 block text-sm font-semibold text-slate-700">
    Problem Severity
  </label>

  <select
    value={formData.problemSeverity}
    onChange={(e) =>
      handleChange(
        "problemSeverity",
        e.target.value
      )
    }
    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
  >
    <option value="">
      Select Severity
    </option>

    {severityLevels.map((item) => (
      <option
        key={item.label}
        value={item.label}
      >
        {item.label}
      </option>
    ))}
  </select>
</div>

              {/* IMPACT */}
              <div className="mt-8">
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Operational Impact
                </label>

                <textarea
                  rows={4}
                  value={formData.operationalImpact}
                  onChange={(e) =>
                    handleChange(
                      "operationalImpact",
                      e.target.value
                    )
                  }
                  placeholder="How does this problem affect businesses and users?"
                  className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* MARKET GAP */}
          <AccordionItem
            value="market-gap"
            className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 px-6 shadow-sm lg:px-8"
          >
            <AccordionTrigger className="py-6 hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <div className="rounded-2xl bg-amber-100 p-4 text-amber-700">
                  <Target className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                    Market Gap Analysis
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Analyze current alternatives and gaps
                  </p>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-8">

              {/* EXISTING SOLUTIONS */}
<div>
  <label className="mb-3 block text-sm font-semibold text-slate-700">
    Existing Solutions Customers Use
  </label>

  <select
    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
    onChange={(e) =>
      toggleArrayValue(
        "currentAlternatives",
        e.target.value
      )
    }
  >
    <option value="">
      Select Existing Solution
    </option>

    {existingSolutions.map((item) => (
      <option
        key={item}
        value={item}
      >
        {item}
      </option>
    ))}
  </select>
</div>

              {/* MARKET GAP */}
              <div className="mt-8">
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Market Gap Opportunity
                </label>

                <textarea
                  rows={4}
                  value={formData.marketGap}
                  onChange={(e) =>
                    handleChange(
                      "marketGap",
                      e.target.value
                    )
                  }
                  placeholder="What weaknesses exist in current solutions?"
                  className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                />
              </div>

              {/* FRUSTRATIONS */}
              <div className="mt-8">
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Customer Frustrations
                </label>

                <textarea
                  rows={4}
                  value={formData.customerFrustrations}
                  onChange={(e) =>
                    handleChange(
                      "customerFrustrations",
                      e.target.value
                    )
                  }
                  placeholder="What frustrates users most about existing workflows?"
                  className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* USERS */}
          <AccordionItem
            value="users"
            className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 px-6 shadow-sm lg:px-8"
          >
            <AccordionTrigger className="py-6 hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <div className="rounded-2xl bg-cyan-100 p-4 text-cyan-700">
                  <Users className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                    Affected Users
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Identify who experiences the problem
                  </p>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-8">

              {/* USER SEGMENTS */}
<div>
  <label className="mb-3 block text-sm font-semibold text-slate-700">
    Target User Segments
  </label>

  <select
    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
    onChange={(e) =>
      toggleArrayValue(
        "affectedUsers",
        e.target.value
      )
    }
  >
    <option value="">
      Select User Segment
    </option>

    {userGroups.map((item) => (
      <option
        key={item}
        value={item}
      >
        {item}
      </option>
    ))}
  </select>
</div>

              {/* FREQUENCY */}
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm font-semibold text-slate-700">
                    Problem Frequency
                  </label>

                  <input
                    type="text"
                    value={formData.problemFrequency}
                    onChange={(e) =>
                      handleChange(
                        "problemFrequency",
                        e.target.value
                      )
                    }
                    placeholder="Daily / Weekly / Monthly"
                    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold text-slate-700">
                    Problem Urgency
                  </label>

                  <input
                    type="text"
                    value={formData.problemUrgency}
                    onChange={(e) =>
                      handleChange(
                        "problemUrgency",
                        e.target.value
                      )
                    }
                    placeholder="Low / Medium / High"
                    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>
              </div>

              {/* OBSERVATIONS */}
              <div className="mt-8">
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Founder Observations
                </label>

                <textarea
                  rows={5}
                  value={formData.founderObservations}
                  onChange={(e) =>
                    handleChange(
                      "founderObservations",
                      e.target.value
                    )
                  }
                  placeholder="Describe insights gathered from customers, research or observations..."
                  className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* INSIGHTS */}
          <section className="rounded-[32px] border border-primary/10 bg-primary/5 p-6">
            <h3 className="text-2xl font-black tracking-tight text-[#16214A]">
              Problem Insights
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Strong operational inefficiencies detected",
                "Recurring pain patterns identified",
                "Automation opportunity appears scalable",
                "Existing solutions show major gaps",
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

          {/* SCORE */}
          <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
            <h3 className="text-2xl font-black tracking-tight text-[#16214A]">
              Validation Score
            </h3>

            <div className="mt-8 space-y-5">
              {[
                {
                  label: "Pain Severity",
                  value: "82%",
                },

                {
                  label: "Market Gap",
                  value: "74%",
                },

                {
                  label: "Customer Demand",
                  value: "68%",
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
              "/founder/startup-builder/market-research"
            )
          }
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
        >
          Continue to Market Research

        </button>
      </div>
    </div>
  );
}