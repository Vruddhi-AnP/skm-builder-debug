"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import Image from "next/image";

import { createStartup } from "@/services/startup.service";

 import axios from "axios";

import {
  Briefcase,
  Building2,
  Globe,
  Layers3,
  ShieldCheck,
  Sparkles,

} from "lucide-react";

import {
  saveFounderOnboarding,
  getFounderOnboarding,
} from "@/lib/founder-onboarding";

const startupStages = [
  "Idea Stage",
  "MVP Ready",
  "Early Revenue",
  "Scaling",
  "Growth Stage",
];

const industries = [
  "SaaS",
  "FinTech",
  "AI",
  "HealthTech",
  "EdTech",
  "ClimateTech",
  "Marketplace",
  "Consumer",
];

const businessModels = [
  "B2B",
  "B2C",
  "Marketplace",
  "Subscription",
  "Enterprise",
];

export default function StartupProfilePage() {
  const router = useRouter();

  const [selectedStage, setSelectedStage] = useState(() => {
  const saved = getFounderOnboarding();
  return saved.startupStage ?? "MVP Ready";
});

const [selectedIndustries, setSelectedIndustries] =
  useState<string[]>(() => {
    const saved = getFounderOnboarding();
    return saved.startupIndustry
      ? saved.startupIndustry.split(",").filter(Boolean)
      : ["SaaS", "AI"];
  });

const [selectedBusinessModel, setSelectedBusinessModel] =
  useState("B2B");

const [formData, setFormData] = useState(() => {
  const saved = getFounderOnboarding();
  return {
    startupName: saved.startupName ?? "",
    website: saved.startupWebsite ?? "",
    teamSize: "",
    problemStatement: "",
    solution: "",
  };
});

  const toggleIndustry = (
    industry: string
  ) => {
    if (
      selectedIndustries.includes(
        industry
      )
    ) {
      setSelectedIndustries((prev) =>
        prev.filter(
          (item) => item !== industry
        )
      );
    } else {
      setSelectedIndustries((prev) => [
        ...prev,
        industry,
      ]);
    }
  };

 const handleContinue = async () => {
  setLoading(true);
  try {
    if (!formData.startupName.trim()) {
  alert("Startup name is required");
  setLoading(false);
  return;
}

if (!selectedStage) {
  alert("Startup stage is required");
  setLoading(false);
  return;
}

    const startup = await createStartup({
      
      name: formData.startupName,

      website: formData.website,

      teamSize: formData.teamSize
        ? Number(formData.teamSize)
        : undefined,

      startupStage: selectedStage,

      industry:
        selectedIndustries.join(","),

      businessModel:
        selectedBusinessModel,

      problemStatement:
        formData.problemStatement,

      solutionOverview:
        formData.solution,

      description:
        formData.problemStatement,
    });
    console.log("STARTUP CREATED", startup);

    saveFounderOnboarding({
      startupId: startup.id,

      startupName:
        formData.startupName,

      startupWebsite:
        formData.website,

      startupStage:
        selectedStage,

      startupIndustry:
        selectedIndustries.join(","),

      startupDescription:
        formData.problemStatement,
    });

   setLoading(false);

    router.push(
      "/onboarding/founder/package"
    );
  } catch (error) {
  if (axios.isAxiosError(error)) {
    alert(
      error.response?.data?.message ??
      "Failed to create startup"
    );
  } else {
    alert("Something went wrong");
  }

  setLoading(false);
}
};

const [loading, setLoading] =
  useState(false);

  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto max-w-5xl">
       {/* TOP BAR */}
<div className="mb-10 flex items-center justify-between">
  <Link
    href="/"
    className="flex items-center gap-4"
  >
    <Image
      src="/logo.png"
      alt="Startup Ka Mall"
      width={190}
      height={60}
      priority
      className="h-auto w-42.5 object-contain sm:w-47.5"
    />

    <div>
      <p className="text-sm text-slate-500">
        Startup Ecosystem
      </p>
    </div>
  </Link>

  <div className="hidden items-center gap-3 rounded-full border border-primary/10 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary sm:flex">
    Step 2 of 4
  </div>
</div>
        {/* HERO */}
        <div className="mb-8 rounded-[36px] border border-border bg-card p-6 shadow-sm lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
                <Sparkles className="h-4 w-4 text-primary" />

                <span className="text-sm font-semibold text-primary">
                  Startup Profile
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-foreground lg:text-5xl">
                Setup Your Startup Profile
              </h1>

              <p className="mt-4 max-w-2xl text-base text-muted-foreground">
                Build your startup identity and define
                growth stage, industry focus and
                execution direction.
              </p>
            </div>

            {/* RIGHT */}
            <div>
              {/* SECURITY */}
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-6 py-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />

                <p className="text-xs font-medium text-emerald-800">
                  Secure startup onboarding & protected workflows
                </p>
              </div>

              {/* STEP */}
              <div className="rounded-3xl border border-border bg-background px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Current Step
                </p>

                <h3 className="mt-2 text-xl font-black text-foreground">
                  Startup Profile
                </h3>
              </div>
            </div>
          </div>

          {/* PROGRESS */}
          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">
                Onboarding Progress
              </p>

              <span className="text-sm font-bold text-primary">
                50%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-2/4 rounded-full bg-primary" />
            </div>
          </div>

          {/* STEPS */}
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              "Founder Profile",
              "Startup Profile",
              "Programs",
              "Complete",
            ].map((step, index) => (
              <div
                key={step}
                className={`rounded-2xl border p-4 ${
                  index === 1
                    ? "border-primary bg-primary/5"
                    : "border-border bg-background"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${
                      index <= 1
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {step}
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Builder workflow step
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className="rounded-[36px] border border-border bg-card p-6 shadow-sm lg:p-8">
          {/* HEADER */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground">
              Startup Details
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Define your startup structure, growth
              stage and market positioning to personalize
              founder workflows and ecosystem access.
            </p>
          </div>

          {/* BASIC DETAILS */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* STARTUP NAME */}
            <div>
              <label className="text-sm font-semibold text-foreground">
                Startup Name
              </label>

              <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-border bg-background px-4">
                <Building2 className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  placeholder="Enter startup name"
                  value={formData.startupName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      startupName:
                        e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* WEBSITE */}
            <div>
              <label className="text-sm font-semibold text-foreground">
                Website
              </label>

              <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-border bg-background px-4">
                <Globe className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  placeholder="https://startup.com"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      website:
                        e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* TEAM SIZE */}
            <div>
              <label className="text-sm font-semibold text-foreground">
                Team Size
              </label>

              <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-border bg-background px-4">
                <Briefcase className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  placeholder="5 team members"
                  value={formData.teamSize}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      teamSize:
                        e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>
          </div>

          {/* STAGE */}
          <div className="mt-10">
            <label className="text-sm font-semibold text-foreground">
              Startup Stage
            </label>

            <div className="mt-4 flex flex-wrap gap-3">
              {startupStages.map((stage) => (
                <button
                  key={stage}
                  type="button"
                  onClick={() =>
                    setSelectedStage(stage)
                  }
                  className={`h-11 rounded-2xl px-5 text-sm font-semibold transition ${
                    selectedStage === stage
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>

          {/* INDUSTRIES */}
          <div className="mt-10">
            <label className="text-sm font-semibold text-foreground">
              Industry Focus
            </label>

            <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
              {industries.map((industry) => {
                const active =
                  selectedIndustries.includes(
                    industry
                  );

                return (
                  <button
                    key={industry}
                    type="button"
                    onClick={() =>
                      toggleIndustry(
                        industry
                      )
                    }
                    className={`rounded-2xl border p-4 text-left transition ${
                      active
                        ? "border-primary bg-primary/5"
                        : "border-border bg-background hover:border-primary/20"
                    }`}
                  >
                    <Layers3
                      className={`h-5 w-5 ${
                        active
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    />

                    <h3 className="mt-4 text-sm font-bold text-foreground">
                      {industry}
                    </h3>
                  </button>
                );
              })}
            </div>
          </div>

          {/* BUSINESS MODEL */}
          <div className="mt-10">
            <label className="text-sm font-semibold text-foreground">
              Business Model
            </label>

            <div className="mt-4 flex flex-wrap gap-3">
              {businessModels.map((model) => (
                <button
                  key={model}
                  type="button"
                  onClick={() =>
                    setSelectedBusinessModel(
                      model
                    )
                  }
                  className={`h-11 rounded-2xl px-5 text-sm font-semibold transition ${
                    selectedBusinessModel ===
                    model
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>

          {/* PROBLEM */}
          <div className="mt-10">
            <label className="text-sm font-semibold text-foreground">
              Problem Statement
            </label>

            <textarea
              rows={5}
              placeholder="What core problem is your startup solving?"
              value={
                formData.problemStatement
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  problemStatement:
                    e.target.value,
                })
              }
              className="mt-3 w-full resize-none rounded-[28px] border border-border bg-background px-5 py-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
            />
          </div>

          {/* SOLUTION */}
          <div className="mt-8">
            <label className="text-sm font-semibold text-foreground">
              Solution Overview
            </label>

            <textarea
              rows={5}
              placeholder="Describe your product, platform or solution."
              value={formData.solution}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  solution:
                    e.target.value,
                })
              }
              className="mt-3 w-full resize-none rounded-[28px] border border-border bg-background px-5 py-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
            />
          </div>

          {/* INFO CARD */}
          <div className="mt-8 rounded-[28px] border border-primary/20 bg-primary/5 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-lg font-black text-foreground">
                  Startup Personalization
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Your startup profile helps personalize
                  investor readiness scoring, ecosystem
                  recommendations, advisor matching and
                  founder workflows across the platform.
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-background text-xl font-black text-primary shadow-sm">
                02
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row">
            <button
              type="button"
              onClick={() => router.push("/onboarding/founder/profile")}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-background px-6 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Back
            </button>

            <button
              type="button"
              disabled={loading}
              onClick={handleContinue}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              {loading
              ? "Saving..."
              : "Continue"}

            </button>
          </div>
        </div>
      </div>
    </div>
  );
}