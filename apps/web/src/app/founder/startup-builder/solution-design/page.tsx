"use client";

import { useState } from "react";
import {
  ArrowRight,
  LayoutDashboard,
  Sparkles,
  Workflow,
  Wand2,
} from "lucide-react";

export default function SolutionDesignPage() {
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

  const [selectedSolution, setSelectedSolution] =
    useState("");

  const [selectedFeatures, setSelectedFeatures] =
    useState<string[]>([]);

  const [selectedPlatform, setSelectedPlatform] =
    useState("");

  const [selectedModel, setSelectedModel] =
    useState("");

  const [selectedJourney, setSelectedJourney] =
    useState<string[]>([]);

  const [selectedExperience, setSelectedExperience] =
    useState<string[]>([]);

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="mb-4 inline-flex items-center rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Step 4 • Startup Builder
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            Solution Design
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Design scalable startup experiences,
            product flows and feature systems
            through interactive startup workflows.
          </p>
        </div>

        {/* PROGRESS */}
        <div className="w-full rounded-[28px] border border-slate-200 bg-slate-50 p-6 lg:max-w-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-600">
              Module Progress
            </p>

            <span className="text-sm font-bold text-cyan-600">
              20%
            </span>
          </div>

          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-[20%] rounded-full bg-cyan-500" />
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Continue building your startup
            solution architecture.
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        {/* LEFT */}
        <div className="space-y-6">
          {/* SOLUTION OVERVIEW */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700">
                <Sparkles className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Solution Architecture
                </h2>

                <p className="text-sm text-slate-500">
                  Define how your startup solution
                  works
                </p>
              </div>
            </div>

            {/* SOLUTION TYPE */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Select Solution Type
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
                        ? "border-cyan-500 bg-cyan-50 shadow-lg shadow-cyan-100"
                        : "border-slate-200 hover:border-cyan-400 hover:bg-cyan-50"
                    }`}
                  >
                    <h3 className="font-semibold text-slate-900">
                      {solution}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Scalable startup solution
                      structure for modern founders.
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* UVP */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "AI Powered",
                "Fast Execution",
                "Automation First",
                "Scalable Workflow",
              ].map((item) => (
                <div
                  key={item}
                  className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg"
                >
                  <h3 className="font-semibold text-slate-900">
                    {item}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Core startup differentiation
                    advantage.
                  </p>
                </div>
              ))}
            </div>

            {/* OPTIONAL NOTES */}
            <div className="mt-8">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Additional Solution Notes
                <span className="ml-2 text-xs font-medium text-slate-400">
                  (Optional)
                </span>
              </label>

              <textarea
                rows={4}
                placeholder="Add additional startup solution details..."
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-cyan-500"
              />
            </div>
          </section>

          {/* CORE FEATURES */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-violet-100 p-3 text-violet-700">
                <LayoutDashboard className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Product Features
                </h2>

                <p className="text-sm text-slate-500">
                  Define major product
                  functionalities
                </p>
              </div>
            </div>

            {/* FEATURES */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Select Core Features
              </label>

              <div className="flex flex-wrap gap-3">
                {coreFeatures.map((feature) => {
                  const active =
                    selectedFeatures.includes(
                      feature
                    );

                  return (
                    <button
                      key={feature}
                      onClick={() => {
                        if (active) {
                          setSelectedFeatures(
                            selectedFeatures.filter(
                              (p) => p !== feature
                            )
                          );
                        } else {
                          setSelectedFeatures([
                            ...selectedFeatures,
                            feature,
                          ]);
                        }
                      }}
                      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all ${
                        active
                          ? "border-violet-500 bg-violet-500 text-white shadow-lg shadow-violet-200"
                          : "border-slate-200 bg-white text-slate-700 hover:border-violet-400 hover:bg-violet-50"
                      }`}
                    >
                      {feature}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PLATFORM TYPE */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-4 block text-sm font-semibold text-slate-700">
                  Platform Type
                </label>

                <div className="space-y-3">
                  {platformTypes.map((platform) => (
                    <button
                      key={platform}
                      onClick={() =>
                        setSelectedPlatform(platform)
                      }
                      className={`w-full rounded-2xl border p-4 text-left text-sm font-semibold transition-all ${
                        selectedPlatform === platform
                          ? "border-violet-500 bg-violet-50"
                          : "border-slate-200 hover:border-violet-400"
                      }`}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-4 block text-sm font-semibold text-slate-700">
                  Business Model
                </label>

                <div className="space-y-3">
                  {businessModels.map((model) => (
                    <button
                      key={model}
                      onClick={() =>
                        setSelectedModel(model)
                      }
                      className={`w-full rounded-2xl border p-4 text-left text-sm font-semibold transition-all ${
                        selectedModel === model
                          ? "border-violet-500 bg-violet-50"
                          : "border-slate-200 hover:border-violet-400"
                      }`}
                    >
                      {model}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* USER EXPERIENCE */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
                <Workflow className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  User Experience Flow
                </h2>

                <p className="text-sm text-slate-500">
                  Design user interaction journey
                </p>
              </div>
            </div>

            {/* USER JOURNEY */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                User Journey Flow
              </label>

              <div className="flex flex-wrap gap-3">
                {userJourney.map((step) => {
                  const active =
                    selectedJourney.includes(step);

                  return (
                    <button
                      key={step}
                      onClick={() => {
                        if (active) {
                          setSelectedJourney(
                            selectedJourney.filter(
                              (p) => p !== step
                            )
                          );
                        } else {
                          setSelectedJourney([
                            ...selectedJourney,
                            step,
                          ]);
                        }
                      }}
                      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all ${
                        active
                          ? "border-amber-500 bg-amber-500 text-white shadow-lg shadow-amber-200"
                          : "border-slate-200 bg-white text-slate-700 hover:border-amber-400 hover:bg-amber-50"
                      }`}
                    >
                      {step}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* EXPERIENCE GOALS */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Experience Goals
              </label>

              <div className="flex flex-wrap gap-3">
                {experienceGoals.map((goal) => {
                  const active =
                    selectedExperience.includes(
                      goal
                    );

                  return (
                    <button
                      key={goal}
                      onClick={() => {
                        if (active) {
                          setSelectedExperience(
                            selectedExperience.filter(
                              (p) => p !== goal
                            )
                          );
                        } else {
                          setSelectedExperience([
                            ...selectedExperience,
                            goal,
                          ]);
                        }
                      }}
                      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all ${
                        active
                          ? "border-amber-500 bg-amber-500 text-white shadow-lg shadow-amber-200"
                          : "border-slate-200 bg-white text-slate-700 hover:border-amber-400 hover:bg-amber-50"
                      }`}
                    >
                      {goal}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PRODUCT INSIGHTS */}
                <div className="mt-10 rounded-[24px] border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-700">
                        Product Insights
                      </p>

                      <h3 className="mt-4 text-2xl font-black text-slate-900">
                        Solution Strategy Summary
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                        Your selected product structure indicates
                        strong potential for scalable digital
                        workflows, streamlined user journeys and
                        modern startup execution systems.
                      </p>
                    </div>

                    <div className="hidden h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-sm lg:flex">
                      <span className="text-3xl">🛠️</span>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {[
                      {
                        title: "Product Scope",
                        value: "Scalable",
                      },
                      {
                        title: "User Experience",
                        value: "Strong",
                      },
                      {
                        title: "Execution Flow",
                        value: "High",
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
          {/* PRODUCT GUIDANCE */}
          <section className="rounded-[28px] border border-cyan-100 bg-gradient-to-br from-cyan-50 to-violet-50 p-6">
            <div className="flex items-center gap-3">
              <Wand2 className="h-6 w-6 text-cyan-700" />

              <h3 className="text-xl font-bold text-slate-900">
                Product Insights
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {[
                "Simple UX increases product adoption",
                "AI automation improves retention",
                "Scalable SaaS architecture recommended",
                "Focus on MVP-first execution",
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

          {/* PRODUCT READINESS */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Product Readiness
            </h3>

            <div className="mt-6 space-y-5">
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

      {/* FOOTER */}
      <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600">
          Save Draft
        </button>

        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-cyan-700">
          Continue to Business Model
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}