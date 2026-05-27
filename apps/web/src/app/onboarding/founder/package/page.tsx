"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import Image from "next/image";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Rocket,
  Briefcase,
} from "lucide-react";

const packages = [
  {
    badge: "Starter",
    title: "Builder Access",
    price: "Free",

    description:
      "Perfect for early-stage founders validating startup ideas and workflows.",

    features: [
      "Startup builder access",
      "Founder dashboard",
      "Basic ecosystem tools",
      "Progress tracking",
    ],
  },

  {
    badge: "Popular",
    title: "Growth Package",
    price: "₹4,999",

    description:
      "Structured founder execution support with advanced startup workflows.",

    features: [
      "Advanced founder dashboard",
      "Readiness insights",
      "Programs & resources",
      "Founder execution tracking",
    ],
  },

  {
    badge: "Advisor",
    title: "Advisor Access",
    price: "₹14,999",

    description:
      "Get access to startup advisors and guided founder execution systems.",

    features: [
      "Advisor ecosystem access",
      "Founder strategy sessions",
      "Execution support",
      "Startup growth guidance",
    ],
  },

  {
    badge: "Scale",
    title: "Investor Ready",
    price: "Custom",

    description:
      "Investor readiness support and premium startup ecosystem visibility.",

    features: [
      "Investor readiness workflows",
      "Pitch guidance",
      "Priority ecosystem access",
      "Investor visibility support",
    ],
  },
];

const founderGoals = [
  "Raise Funding",
  "Find Advisors",
  "Validate Idea",
  "Build MVP",
  "Acquire Customers",
  "Scale Revenue",
];

export default function PackageSelectionPage() {
  const router = useRouter();

  const [selectedPackage, setSelectedPackage] =
    useState("Growth Package");

  const [selectedGoals, setSelectedGoals] =
    useState<string[]>([
      "Raise Funding",
      "Build MVP",
    ]);

  const [supportOptions, setSupportOptions] =
    useState({
      advisorAccess: true,
      investorAccess: true,
      executionSupport: false,
    });

  const selectedPackageData =
    packages.find(
      (pkg) =>
        pkg.title === selectedPackage
    );

  const toggleGoal = (
    goal: string
  ) => {
    if (
      selectedGoals.includes(goal)
    ) {
      setSelectedGoals((prev) =>
        prev.filter(
          (item) => item !== goal
        )
      );
    } else {
      setSelectedGoals((prev) => [
        ...prev,
        goal,
      ]);
    }
  };

  const toggleSupport = (
    key:
      | "advisorAccess"
      | "investorAccess"
      | "executionSupport"
  ) => {
    setSupportOptions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleContinue = () => {
    router.push(
      "/onboarding/founder/success"
    );
  };

  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto max-w-6xl">
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
      className="h-auto w-[170px] object-contain sm:w-[190px]"
    />

    <div>
      <p className="text-sm text-slate-500">
        Startup Ecosystem
      </p>
    </div>
  </Link>

  <div className="hidden items-center gap-3 rounded-full border border-primary/10 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary sm:flex">
    Step 3 of 4
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
                  Founder Programs
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-foreground lg:text-5xl">
                Choose Your Startup Journey
              </h1>

              <p className="mt-4 max-w-2xl text-base text-muted-foreground">
                Select ecosystem access, founder support
                and execution workflows aligned with your
                startup growth stage.
              </p>
            </div>

            {/* RIGHT */}
            <div>
              {/* SECURITY */}
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-6 py-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />

                <p className="text-xs font-medium text-emerald-800">
                  Secure founder ecosystem & protected workflows
                </p>
              </div>

              {/* STEP */}
              <div className="rounded-3xl border border-border bg-background px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Current Step
                </p>

                <h3 className="mt-2 text-xl font-black text-foreground">
                  Founder Programs
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
                75%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-3/4 rounded-full bg-primary" />
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
                  index === 2
                    ? "border-primary bg-primary/5"
                    : "border-border bg-background"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${
                      index <= 2
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

        {/* PACKAGE GRID */}
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {packages.map((item) => {
            const active =
              selectedPackage === item.title;

            return (
              <button
                key={item.title}
                onClick={() =>
                  setSelectedPackage(item.title)
                }
                className={`group relative overflow-hidden rounded-[32px] border bg-card p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  active
                    ? "border-primary shadow-xl shadow-primary/10"
                    : "border-border hover:border-primary/20"
                }`}
              >
                {active && (
                  <div className="absolute left-0 top-0 h-1 w-full bg-primary" />
                )}

                <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {item.badge}
                </div>

                {active && (
                  <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                    <Check className="h-4 w-4" />
                  </div>
                )}

                <h3 className="mt-6 text-2xl font-black tracking-tight text-foreground">
                  {item.title}
                </h3>

                <p className="mt-4 text-4xl font-black tracking-tight text-primary">
                  {item.price}
                </p>

                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-8 space-y-4">
                  {item.features.map(
                    (feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Check className="h-3 w-3" />
                        </div>

                        <span className="text-sm leading-6 text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* GOALS */}
        <div className="mt-8 rounded-[32px] border border-border bg-card p-6 shadow-sm lg:p-8">
          <div className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />

            <h2 className="text-2xl font-black text-foreground">
              Founder Goals
            </h2>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            {founderGoals.map((goal) => {
              const active =
                selectedGoals.includes(
                  goal
                );

              return (
                <button
                  key={goal}
                  type="button"
                  onClick={() =>
                    toggleGoal(goal)
                  }
                  className={`h-12 rounded-2xl px-5 text-sm font-semibold transition ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  {goal}
                </button>
              );
            })}
          </div>
        </div>

        {/* SUPPORT OPTIONS */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            {
              key: "advisorAccess",
              title: "Advisor Access",
              desc: "Get guidance from startup advisors",
              icon: Users,
            },

            {
              key: "investorAccess",
              title: "Investor Visibility",
              desc: "Improve startup investment visibility",
              icon: Rocket,
            },

            {
              key: "executionSupport",
              title: "Execution Support",
              desc: "Structured founder execution systems",
              icon: Briefcase,
            },
          ].map((item) => {
            const Icon = item.icon;

            const active =
              supportOptions[
                item.key as keyof typeof supportOptions
              ];

            return (
              <button
                key={item.title}
                type="button"
                onClick={() =>
                  toggleSupport(
                    item.key as
                      | "advisorAccess"
                      | "investorAccess"
                      | "executionSupport"
                  )
                }
                className={`rounded-[32px] border p-6 text-left transition-all hover:-translate-y-1 hover:shadow-lg ${
                  active
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-black text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* SELECTED PACKAGE */}
        <div className="mt-8 rounded-[32px] border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* LEFT */}
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-primary/20 bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                Selected Package
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-foreground">
                {selectedPackageData?.title}
              </h2>

              <p className="mt-3 text-lg font-bold text-primary">
                {selectedPackageData?.price}
              </p>

              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                {selectedPackageData?.description}
              </p>
            </div>

            {/* RIGHT */}
            <div className="w-full max-w-sm rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-black text-foreground">
                Ecosystem Recommendation
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                This package aligns with your startup
                growth stage and founder execution
                requirements. You can upgrade ecosystem
                access anytime later.
              </p>

              <div className="mt-6 rounded-2xl bg-primary/10 p-4">
                <p className="text-sm font-semibold text-primary">
                  Recommended for structured founder
                  execution and startup scaling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row">
          <button
            onClick={() =>
              router.push(
                "/onboarding/founder/startup"
              )
            }
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 text-sm font-semibold text-foreground transition hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />

            Back
          </button>

          <button
            onClick={handleContinue}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Complete Onboarding
            
          </button>
        </div>
      </div>
    </div>
  );
}