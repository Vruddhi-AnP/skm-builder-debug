"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveBuilderStep, getBuilderData } from "@/hooks/useLocalBuilder";

import {
  LayoutDashboard,
  Sparkles,
  Workflow,
  Save,
  CheckCircle2,
  Rocket,
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

  const [saved, setSaved] = useState(false);

 const [formData, setFormData] = useState<SolutionDesignForm>(() => {
  const saved = getBuilderData();
  const raw = (saved.solutionDesign ?? {}) as Record<string, string>;
  return {
    solutionType: raw.solutionType ?? "",
    platformType: raw.platformType ?? "",
    businessModel: raw.businessModel ?? "",
    solutionNotes: raw.solutionNotes ?? "",
    productVision: raw.productVision ?? "",
    scalabilityPlan: raw.scalabilityPlan ?? "",
    automationStrategy: raw.automationStrategy ?? "",
    selectedFeatures: raw.selectedFeatures
      ? raw.selectedFeatures.split(",").filter(Boolean)
      : [],
    userJourney: raw.userJourney
      ? raw.userJourney.split(",").filter(Boolean)
      : [],
    experienceGoals: raw.experienceGoals
      ? raw.experienceGoals.split(",").filter(Boolean)
      : [],
  };
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
    if (!value) return;

    const existingValues = formData[field];

    if (existingValues.includes(value)) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [field]: [...existingValues, value],
    }));
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

  const handleSave = () => {
  saveBuilderStep("solutionDesign", {
    ...formData,
    selectedFeatures: formData.selectedFeatures.join(","),
    userJourney: formData.userJourney.join(","),
    experienceGoals: formData.experienceGoals.join(","),
  } as Record<string, string>);
  setSaved(true);
  setTimeout(() => setSaved(false), 2000);
};

  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="overflow-hidden rounded-[32px] border border-border/60 bg-[#F7F4EE]/95">
        <div className="grid gap-8 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-700">
              <Rocket className="h-4 w-4" />
              Startup Builder • Module 4
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#16214A] md:text-5xl">
              Design Your
              <span className="block text-primary">
                Product Solution
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B6B6B]">
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

                <h3 className="mt-2 text-5xl font-black text-[#16214A]">
                  20%
                </h3>
              </div>

              <div className="rounded-2xl bg-[#F7F4EE]/95 p-4 text-primary shadow-sm">
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

                  <p className="text-sm font-medium text-[#6B6B6B]">
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
          <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-cyan-100 p-4 text-cyan-700">
                <Sparkles className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                  Solution Architecture
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Define your startup solution system
                </p>
              </div>
            </div>

            {/* SOLUTION TYPE */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Solution Type
              </label>

              <select
                value={formData.solutionType}
                onChange={(e) =>
                  handleChange(
                    "solutionType",
                    e.target.value
                  )
                }
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              >
                <option value="">
                  Select Solution Type
                </option>

                {solutionTypes.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
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
                className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
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
                className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              />
            </div>
          </section>

          {/* PRODUCT FEATURES */}
          <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-violet-100 p-4 text-violet-700">
                <LayoutDashboard className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
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

              <select
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                onChange={(e) =>
                  toggleArrayValue(
                    "selectedFeatures",
                    e.target.value
                  )
                }
              >
                <option value="">
                  Select Core Feature
                </option>

                {coreFeatures.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* PLATFORM + MODEL */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* PLATFORM */}
              <div>
                <label className="mb-4 block text-sm font-semibold text-slate-700">
                  Platform Type
                </label>

                <select
                  value={formData.platformType}
                  onChange={(e) =>
                    handleChange(
                      "platformType",
                      e.target.value
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                >
                  <option value="">
                    Select Platform Type
                  </option>

                  {platformTypes.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* MODEL */}
              <div>
                <label className="mb-4 block text-sm font-semibold text-slate-700">
                  Business Model
                </label>

                <select
                  value={formData.businessModel}
                  onChange={(e) =>
                    handleChange(
                      "businessModel",
                      e.target.value
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                >
                  <option value="">
                    Select Business Model
                  </option>

                  {businessModels.map((item) => (
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
                className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              />
            </div>
          </section>

          {/* USER EXPERIENCE */}
          <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-amber-100 p-4 text-amber-700">
                <Workflow className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
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

              <select
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                onChange={(e) =>
                  toggleArrayValue(
                    "userJourney",
                    e.target.value
                  )
                }
              >
                <option value="">
                  Select User Journey Step
                </option>

                {userJourney.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* EXPERIENCE */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Experience Goals
              </label>

              <select
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                onChange={(e) =>
                  toggleArrayValue(
                    "experienceGoals",
                    e.target.value
                  )
                }
              >
                <option value="">
                  Select Experience Goal
                </option>

                {experienceGoals.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
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
                className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
              />
            </div>
          </section>
        </div>

       {/* RIGHT */}
<div className="space-y-6">
  {/* MODULE GUIDE */}
  <section className="rounded-[32px] border border-primary/10 bg-primary/5 p-6">
    <h3 className="text-xl font-black tracking-tight text-[#16214A]">
      Module Guide
    </h3>
    <p className="mt-3 text-sm leading-7 text-slate-500">
      Define your product structure clearly. Investors evaluate
      solution design as a key indicator of execution capability.
    </p>
    <div className="mt-6 space-y-3">
      {[
        { step: "1", label: "Solution Architecture", done: !!(formData.solutionType && formData.productVision) },
        { step: "2", label: "Product Features", done: !!(formData.selectedFeatures.length > 0 && formData.platformType) },
        { step: "3", label: "User Experience Flow", done: !!(formData.userJourney.length > 0 && formData.automationStrategy) },
      ].map((item) => (
        <div key={item.step} className="flex items-center gap-3 rounded-2xl bg-background p-3">
          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black ${
            item.done ? "bg-emerald-500 text-white" : "bg-slate-200 text-slate-600"
          }`}>
            {item.done ? "✓" : item.step}
          </div>
          <p className={`text-sm font-semibold ${item.done ? "text-emerald-700" : "text-slate-600"}`}>
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </section>

  {/* TIP */}
  <section className="rounded-[32px] border border-amber-100 bg-amber-50 p-6">
    <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
      Founder Tip
    </p>
    <p className="mt-3 text-sm leading-7 text-amber-900">
      Start with 3–5 core features only. Focused MVPs ship faster,
      get user feedback sooner, and are easier to pitch to investors.
    </p>
  </section>

  {/* SELECTED SUMMARY */}
  <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
    <h3 className="text-xl font-black tracking-tight text-[#16214A]">
      Your Selections
    </h3>
    <div className="mt-4 space-y-3">
      <div className="rounded-2xl bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Solution Type</p>
        <h4 className="mt-1 text-base font-black text-[#16214A]">
          {formData.solutionType || "Not Selected"}
        </h4>
      </div>
      <div className="rounded-2xl bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Platform</p>
        <h4 className="mt-1 text-base font-black text-[#16214A]">
          {formData.platformType || "Not Selected"}
        </h4>
      </div>
      <div className="rounded-2xl bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Features Selected</p>
        <h4 className="mt-1 text-base font-black text-[#16214A]">
          {formData.selectedFeatures.length > 0 ? `${formData.selectedFeatures.length} features` : "None selected"}
        </h4>
      </div>
    </div>
  </section>
</div>
</div>

      {/* FOOTER */}
      <div className="flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
       {/* SAVE DRAFT */}
        <button
          type="button"
          onClick={handleSave}
          className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-6 py-3 text-sm font-semibold transition ${
            saved
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-border/60 bg-[#F7F4EE]/95 text-slate-700 hover:bg-muted"
          }`}
        >
          {saved ? (
            <><CheckCircle2 className="h-4 w-4" />Saved!</>
          ) : (
            <><Save className="h-4 w-4" />Save Draft</>
          )}
        </button>

{/* CONTINUE */}
<button
  type="button"
  onClick={() => {
    handleSave();
    router.push("/founder/startup-builder/business-model");
  }}
  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
>
  Continue to Business Model
</button>
      </div>
    </div>
  );
}