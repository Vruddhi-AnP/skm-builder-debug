"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  ArrowRight,
  LayoutDashboard,
  Sparkles,
  Workflow,
  Wand2,
  Save,
  CheckCircle2,
  Rocket,
  ShieldCheck,
} from "lucide-react";

interface SolutionDesignForm {
  solutionType: string;
  selectedFeatures: string[];
  platformType: string;
  businessModel: string;
  userJourney: string[];
  experienceGoals: string[];
  solutionNotes: string;
  productVision: string;
  scalabilityPlan: string;
  automationStrategy: string;
}

export default function SolutionDesignPage() {
  const router = useRouter();

  const [formData, setFormData] =
    useState<SolutionDesignForm>({
      solutionType: "",
      selectedFeatures: [],
      platformType: "",
      businessModel: "",
      userJourney: [],
      experienceGoals: [],
      solutionNotes: "",
      productVision: "",
      scalabilityPlan: "",
      automationStrategy: "",
    });

  const solutionTypes = [
    "AI Automation",
    "Workflow Platform",
    "Analytics Dashboard",
    "Marketplace",
    "SaaS Platform",
    "Mobile Solution",
  ];

  const coreFeatures = [
    "AI Assistant",
    "Dashboard",
    "Analytics",
    "Notifications",
    "Automation",
    "Payments",
    "CRM",
    "Team Collaboration",
  ];

  const platformTypes = [
    "Web App",
    "Mobile App",
    "SaaS Platform",
    "Marketplace",
  ];

  const businessModels = [
    "B2B",
    "B2C",
    "B2B2C",
    "Subscription",
  ];

  const userJourney = [
    "Signup",
    "Onboarding",
    "Dashboard Access",
    "Feature Usage",
    "Subscription",
  ];

  const experienceGoals = [
    "Fast Experience",
    "Simple UX",
    "AI-Powered",
    "High Retention",
    "Automation First",
    "Scalable Usage",
  ];

  const toggleArrayValue = (
    field:
      | "selectedFeatures"
      | "userJourney"
      | "experienceGoals",
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
    field: keyof SolutionDesignForm,
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
              Startup Builder • Module 4
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-800 md:text-5xl">
              Design Your
              <span className="block text-primary">
                Product Solution
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Build scalable startup experiences,
              feature systems and product workflows
              through structured product execution
              planning.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Product Readiness
                </p>

                <h3 className="mt-2 text-5xl font-black text-slate-800">
                  20%
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-4 text-primary shadow-sm">
                <Sparkles className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[20%] rounded-full bg-primary" />
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Core solution structure defined",
                "Scalable workflows identified",
                "Feature architecture improving",
                "Product execution evolving",
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
          {/* SOLUTION ARCHITECTURE */}
          <section className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-cyan-100 p-4 text-cyan-700">
                <Sparkles className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-800">
                  Solution Architecture
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Define your startup solution system
                </p>
              </div>
            </div>

            {/* SOLUTION TYPES */}
            <div>
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
                          ? "border-cyan-500 bg-cyan-50"
                          : "border-border/60 bg-white hover:border-cyan-300 hover:bg-cyan-50"
                      }
                    `}
                  >
                    <h3 className="font-bold text-slate-800">
                      {item}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Modern scalable startup product
                      system.
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* PRODUCT VISION */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Product Vision
              </label>

              <textarea
                rows={4}
                value={formData.productVision}
                onChange={(e) =>
                  handleChange(
                    "productVision",
                    e.target.value
                  )
                }
                placeholder="Describe how your product will transform user workflows..."
                className="w-full rounded-3xl border border-border/60 bg-white px-5 py-4 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            {/* NOTES */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Additional Solution Notes
              </label>

              <textarea
                rows={4}
                value={formData.solutionNotes}
                onChange={(e) =>
                  handleChange(
                    "solutionNotes",
                    e.target.value
                  )
                }
                placeholder="Add additional startup solution strategy..."
                className="w-full rounded-3xl border border-border/60 bg-white px-5 py-4 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              />
            </div>
          </section>

          {/* PRODUCT FEATURES */}
          <section className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-violet-100 p-4 text-violet-700">
                <LayoutDashboard className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-800">
                  Product Features
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Structure product functionality
                </p>
              </div>
            </div>

            {/* FEATURES */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Core Features
              </label>

              <div className="flex flex-wrap gap-3">
                {coreFeatures.map((item) => {
                  const active =
                    formData.selectedFeatures.includes(
                      item
                    );

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        toggleArrayValue(
                          "selectedFeatures",
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

            {/* PLATFORM + MODEL */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* PLATFORM */}
              <div>
                <label className="mb-4 block text-sm font-semibold text-slate-700">
                  Platform Type
                </label>

                <div className="space-y-3">
                  {platformTypes.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        handleChange(
                          "platformType",
                          item
                        )
                      }
                      className={`w-full rounded-2xl border p-4 text-left text-sm font-semibold transition-all
                      
                      ${
                        formData.platformType ===
                        item
                          ? "border-violet-500 bg-violet-50"
                          : "border-border/60 bg-white hover:border-violet-300"
                      }
                    `}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* MODEL */}
              <div>
                <label className="mb-4 block text-sm font-semibold text-slate-700">
                  Business Model
                </label>

                <div className="space-y-3">
                  {businessModels.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        handleChange(
                          "businessModel",
                          item
                        )
                      }
                      className={`w-full rounded-2xl border p-4 text-left text-sm font-semibold transition-all
                      
                      ${
                        formData.businessModel ===
                        item
                          ? "border-violet-500 bg-violet-50"
                          : "border-border/60 bg-white hover:border-violet-300"
                      }
                    `}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* SCALABILITY */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Scalability Strategy
              </label>

              <textarea
                rows={4}
                value={formData.scalabilityPlan}
                onChange={(e) =>
                  handleChange(
                    "scalabilityPlan",
                    e.target.value
                  )
                }
                placeholder="How will your platform scale for large user growth?"
                className="w-full rounded-3xl border border-border/60 bg-white px-5 py-4 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              />
            </div>
          </section>

          {/* USER EXPERIENCE */}
          <section className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-amber-100 p-4 text-amber-700">
                <Workflow className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-800">
                  User Experience Flow
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Design seamless user interaction
                </p>
              </div>
            </div>

            {/* JOURNEY */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                User Journey Flow
              </label>

              <div className="flex flex-wrap gap-3">
                {userJourney.map((item) => {
                  const active =
                    formData.userJourney.includes(
                      item
                    );

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        toggleArrayValue(
                          "userJourney",
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

            {/* EXPERIENCE */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Experience Goals
              </label>

              <div className="flex flex-wrap gap-3">
                {experienceGoals.map((item) => {
                  const active =
                    formData.experienceGoals.includes(
                      item
                    );

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        toggleArrayValue(
                          "experienceGoals",
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

            {/* AUTOMATION */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Automation Strategy
              </label>

              <textarea
                rows={4}
                value={formData.automationStrategy}
                onChange={(e) =>
                  handleChange(
                    "automationStrategy",
                    e.target.value
                  )
                }
                placeholder="Describe automation systems and AI workflow integrations..."
                className="w-full rounded-3xl border border-border/60 bg-white px-5 py-4 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
              />
            </div>
          </section>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* PRODUCT INSIGHTS */}
          <section className="rounded-[32px] border border-primary/10 bg-primary/5 p-6">
            <div className="flex items-center gap-3">
              <Wand2 className="h-6 w-6 text-primary" />

              <h3 className="text-2xl font-black tracking-tight text-slate-800">
                Product Insights
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {[
                "AI automation increases retention",
                "Simple UX improves adoption",
                "Scalable SaaS workflows recommended",
                "Focus on MVP-first execution",
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
              Product Readiness
            </h3>

            <div className="mt-8 space-y-5">
              {[
                {
                  label: "Feature Clarity",
                  value: "82%",
                },

                {
                  label: "Scalability",
                  value: "71%",
                },

                {
                  label: "User Experience",
                  value: "77%",
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
              "/founder/startup-builder/business-model"
            )
          }
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
        >
          Continue to Business Model

        </button>
      </div>
    </div>
  );
}