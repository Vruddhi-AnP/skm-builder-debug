"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  ArrowRight,
  BriefcaseBusiness,
  Coins,
  CreditCard,
  TrendingUp,
  Save,
  Rocket,
  CheckCircle2,
  Target,
} from "lucide-react";

interface BusinessModelForm {
  revenueModel: string;
  pricingStrategy: string;
  acquisitionChannels: string[];
  costStructures: string[];
  scalingChallenges: string[];
  revenueTimeline: string;
  targetRevenue: string;
  monetizationStrategy: string;
  customerAcquisitionStrategy: string;
  growthStrategy: string;
  founderBusinessNotes: string;
}

export default function BusinessModelPage() {
  const router = useRouter();

  const [formData, setFormData] =
    useState<BusinessModelForm>({
      revenueModel: "",
      pricingStrategy: "",
      acquisitionChannels: [],
      costStructures: [],
      scalingChallenges: [],
      revenueTimeline: "",
      targetRevenue: "",
      monetizationStrategy: "",
      customerAcquisitionStrategy: "",
      growthStrategy: "",
      founderBusinessNotes: "",
    });

  const revenueModels = [
    "Subscription",
    "Freemium",
    "Marketplace",
    "Commission",
    "Usage Based",
    "Enterprise Licensing",
  ];

  const acquisitionChannels = [
    "SEO",
    "LinkedIn",
    "Paid Ads",
    "Influencer Marketing",
    "Partnerships",
    "Cold Outreach",
  ];

  const pricingStrategies = [
    "Affordable",
    "Balanced",
    "Premium",
    "Enterprise",
  ];

  const costStructures = [
    "Team Salaries",
    "Marketing",
    "Cloud Infrastructure",
    "Sales Team",
    "Operations",
    "Customer Support",
  ];

  const scalingChallenges = [
    "High CAC",
    "Operational Complexity",
    "Retention Issues",
    "Infrastructure Costs",
  ];

  const revenueTimelines = [
    "0-6 Months",
    "6-12 Months",
    "1-2 Years",
    "2+ Years",
  ];

  const toggleArrayValue = (
    field:
      | "acquisitionChannels"
      | "costStructures"
      | "scalingChallenges",
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
    field: keyof BusinessModelForm,
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
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-700">
              <Rocket className="h-4 w-4" />
              Startup Builder • Module 5
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-800 md:text-5xl">
              Build Your
              <span className="block text-primary">
                Business Model
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Create scalable monetization systems,
              acquisition channels and sustainable
              startup revenue architecture for
              long-term growth.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Business Readiness
                </p>

                <h3 className="mt-2 text-5xl font-black text-slate-800">
                  15%
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-4 text-primary shadow-sm">
                <Coins className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[15%] rounded-full bg-primary" />
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Revenue structure initialized",
                "Growth channels identified",
                "Scaling strategy improving",
                "Recurring monetization potential detected",
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

      {/* MAIN */}
      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        {/* LEFT */}
        <div className="space-y-6">
          {/* REVENUE ENGINE */}
          <section className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-cyan-100 p-4 text-cyan-700">
                <Coins className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-800">
                  Revenue Engine
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Define startup monetization systems
                </p>
              </div>
            </div>

            {/* REVENUE MODELS */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Revenue Model
              </label>

              <div className="grid gap-4 md:grid-cols-2">
                {revenueModels.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      handleChange(
                        "revenueModel",
                        item
                      )
                    }
                    className={`rounded-3xl border p-5 text-left transition-all
                      
                      ${
                        formData.revenueModel ===
                        item
                          ? "border-cyan-500 bg-cyan-50"
                          : "border-border/60 bg-white hover:border-cyan-300 hover:bg-cyan-50"
                      }
                    `}
                  >
                    <h3 className="font-bold text-slate-800">
                      {item}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Scalable recurring startup
                      monetization strategy.
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* PRICING */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Pricing Strategy
              </label>

              <div className="grid gap-4 md:grid-cols-4">
                {pricingStrategies.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      handleChange(
                        "pricingStrategy",
                        item
                      )
                    }
                    className={`rounded-3xl border p-5 text-center transition-all
                      
                      ${
                        formData.pricingStrategy ===
                        item
                          ? "border-cyan-500 bg-cyan-50"
                          : "border-border/60 bg-white hover:border-cyan-300 hover:bg-cyan-50"
                      }
                    `}
                  >
                    <p className="font-bold text-slate-800">
                      {item}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* TIMELINE */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Expected Revenue Timeline
              </label>

              <div className="grid gap-4 md:grid-cols-4">
                {revenueTimelines.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      handleChange(
                        "revenueTimeline",
                        item
                      )
                    }
                    className={`rounded-3xl border p-5 text-center transition-all
                      
                      ${
                        formData.revenueTimeline ===
                        item
                          ? "border-cyan-500 bg-cyan-50"
                          : "border-border/60 bg-white hover:border-cyan-300 hover:bg-cyan-50"
                      }
                    `}
                  >
                    <p className="font-bold text-slate-800">
                      {item}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* TARGET */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Target Revenue Goal
              </label>

              <input
                type="text"
                value={formData.targetRevenue}
                onChange={(e) =>
                  handleChange(
                    "targetRevenue",
                    e.target.value
                  )
                }
                placeholder="Example: ₹10L ARR within 12 months"
                className="h-14 w-full rounded-2xl border border-border/60 bg-white px-5 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            {/* MONETIZATION */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Monetization Strategy
              </label>

              <textarea
                rows={4}
                value={formData.monetizationStrategy}
                onChange={(e) =>
                  handleChange(
                    "monetizationStrategy",
                    e.target.value
                  )
                }
                placeholder="Describe how your startup generates sustainable revenue..."
                className="w-full rounded-3xl border border-border/60 bg-white px-5 py-4 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              />
            </div>
          </section>

          {/* GROWTH STRATEGY */}
          <section className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-violet-100 p-4 text-violet-700">
                <TrendingUp className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-800">
                  Growth Strategy
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Build customer acquisition systems
                </p>
              </div>
            </div>

            {/* CHANNELS */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Acquisition Channels
              </label>

              <div className="flex flex-wrap gap-3">
                {acquisitionChannels.map((item) => {
                  const active =
                    formData.acquisitionChannels.includes(
                      item
                    );

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        toggleArrayValue(
                          "acquisitionChannels",
                          item
                        )
                      }
                      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all
                      
                      ${
                        active
                          ? "border-violet-500 bg-violet-500 text-white"
                          : "border-border/60 bg-white text-slate-700 hover:border-violet-300 hover:bg-violet-50"
                      }
                    `}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STRATEGY */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Customer Acquisition Strategy
              </label>

              <textarea
                rows={4}
                value={
                  formData.customerAcquisitionStrategy
                }
                onChange={(e) =>
                  handleChange(
                    "customerAcquisitionStrategy",
                    e.target.value
                  )
                }
                placeholder="Describe how you will acquire and retain users..."
                className="w-full rounded-3xl border border-border/60 bg-white px-5 py-4 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              />
            </div>

            {/* GROWTH PLAN */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Long-Term Growth Strategy
              </label>

              <textarea
                rows={4}
                value={formData.growthStrategy}
                onChange={(e) =>
                  handleChange(
                    "growthStrategy",
                    e.target.value
                  )
                }
                placeholder="Describe startup scaling and expansion plans..."
                className="w-full rounded-3xl border border-border/60 bg-white px-5 py-4 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              />
            </div>
          </section>

          {/* COST STRUCTURE */}
          <section className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-amber-100 p-4 text-amber-700">
                <CreditCard className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-800">
                  Cost Structure
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Analyze operational business costs
                </p>
              </div>
            </div>

            {/* COSTS */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Major Startup Costs
              </label>

              <div className="flex flex-wrap gap-3">
                {costStructures.map((item) => {
                  const active =
                    formData.costStructures.includes(
                      item
                    );

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        toggleArrayValue(
                          "costStructures",
                          item
                        )
                      }
                      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all
                      
                      ${
                        active
                          ? "border-amber-500 bg-amber-500 text-white"
                          : "border-border/60 bg-white text-slate-700 hover:border-amber-300 hover:bg-amber-50"
                      }
                    `}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CHALLENGES */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Scaling Challenges
              </label>

              <div className="flex flex-wrap gap-3">
                {scalingChallenges.map((item) => {
                  const active =
                    formData.scalingChallenges.includes(
                      item
                    );

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        toggleArrayValue(
                          "scalingChallenges",
                          item
                        )
                      }
                      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all
                      
                      ${
                        active
                          ? "border-amber-500 bg-amber-500 text-white"
                          : "border-border/60 bg-white text-slate-700 hover:border-amber-300 hover:bg-amber-50"
                      }
                    `}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* NOTES */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Founder Business Notes
              </label>

              <textarea
                rows={4}
                value={formData.founderBusinessNotes}
                onChange={(e) =>
                  handleChange(
                    "founderBusinessNotes",
                    e.target.value
                  )
                }
                placeholder="Add additional startup business observations..."
                className="w-full rounded-3xl border border-border/60 bg-white px-5 py-4 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
              />
            </div>
          </section>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* INSIGHTS */}
          <section className="rounded-[32px] border border-primary/10 bg-primary/5 p-6">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="h-6 w-6 text-primary" />

              <h3 className="text-2xl font-black tracking-tight text-slate-800">
                Business Insights
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {[
                "Recurring revenue model recommended",
                "Strong SaaS monetization detected",
                "LinkedIn acquisition appears scalable",
                "Operational costs look manageable",
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

          {/* SCORE */}
          <section className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black tracking-tight text-slate-800">
              Business Readiness
            </h3>

            <div className="mt-8 space-y-5">
              {[
                {
                  label: "Revenue Scalability",
                  value: "84%",
                },

                {
                  label: "Growth Potential",
                  value: "72%",
                },

                {
                  label: "Cost Efficiency",
                  value: "67%",
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

          {/* SUMMARY */}
          <section className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" />

              <h3 className="text-2xl font-black tracking-tight text-slate-800">
                Strategy Summary
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-500">
                  Revenue Model
                </p>

                <h4 className="mt-2 text-lg font-black text-slate-800">
                  {formData.revenueModel ||
                    "Not Selected"}
                </h4>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-500">
                  Pricing Position
                </p>

                <h4 className="mt-2 text-lg font-black text-slate-800">
                  {formData.pricingStrategy ||
                    "Not Selected"}
                </h4>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-500">
                  Growth Channels
                </p>

                <h4 className="mt-2 text-lg font-black text-slate-800">
                  {
                    formData.acquisitionChannels
                      .length
                  }{" "}
                  Selected
                </h4>
              </div>
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
              "/founder/startup-builder/summary"
            )
          }
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
        >
          Continue to Summary

        </button>
      </div>
    </div>
  );
}