"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";

import OnboardingLayout from "@/components/onboarding/OnboardingLayout";

const onboardingSteps = [
  {
    title: "Founder Profile",
    description:
      "Founder identity & experience",
  },
  {
    title: "Startup Profile",
    description:
      "Startup information & stage",
  },
  {
    title: "Programs",
    description:
      "Packages & ecosystem support",
  },
  {
    title: "Complete",
    description:
      "Access founder workspace",
  },
];

const packages = [
  {
    badge: "Starter",
    title: "Free Plan",
    price: "Free",
    description:
      "Perfect for early founders exploring startup building basics.",

    features: [
      "Basic founder dashboard",
      "Startup builder access",
      "Limited resources",
      "Progress tracking",
    ],
  },

  {
    badge: "Popular",
    title: "Premium Plan",
    price: "₹4,999",
    description:
      "Advanced startup execution tools and structured founder support.",

    features: [
      "Advanced dashboard",
      "Premium resources",
      "Execution programs",
      "Readiness insights",
    ],
  },

  {
    badge: "Growth",
    title: "Advisor Supported",
    price: "₹14,999",
    description:
      "Access experienced startup advisors and execution guidance.",

    features: [
      "Advisor access",
      "Consultation requests",
      "Execution guidance",
      "Founder strategy sessions",
    ],
  },

  {
    badge: "Scale",
    title: "Investor Ready",
    price: "Custom",
    description:
      "Complete founder readiness and investor visibility support.",

    features: [
      "Investor readiness",
      "Pitch guidance",
      "Priority support",
      "Investor visibility",
    ],
  },
];

export default function PackageSelectionPage() {
  const router = useRouter();

  const [selectedPackage, setSelectedPackage] =
    useState("Premium Plan");

  const selectedPackageData =
    packages.find(
      (pkg) =>
        pkg.title === selectedPackage
    );

  return (
    <OnboardingLayout
      title="Choose Your Startup Journey"
      subtitle="Select a package based on your founder goals, startup stage and execution needs. You can always upgrade later as your startup grows."
      currentStep={3}
      steps={onboardingSteps}
    >
      <div className="space-y-10">
        {/* TAGS */}
        <div className="flex flex-wrap gap-3">
          <div className="rounded-full border border-primary/10 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Founder Growth
          </div>

          <div className="rounded-full border border-sky-100 bg-sky-50 px-5 py-2 text-sm font-semibold text-sky-700">
            Startup Execution
          </div>

          <div className="rounded-full border border-border/60 bg-muted px-5 py-2 text-sm font-semibold text-slate-600">
            Ecosystem Access
          </div>
        </div>

        {/* HEADER */}
        <div>
          <h2 className="text-2xl font-black tracking-tight text-slate-800 sm:text-3xl">
            Select Your Package
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Choose the founder ecosystem package that
            best matches your startup execution and
            growth journey.
          </p>
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
                className={`group relative overflow-hidden rounded-[28px] border bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                  
                  ${
                    active
                      ? "border-primary shadow-lg shadow-primary/10"
                      : "border-border/60 hover:border-primary/20"
                  }
                `}
              >
                {/* ACTIVE TOP BAR */}
                {active && (
                  <div className="absolute left-0 top-0 h-1 w-full bg-primary" />
                )}

                {/* BADGE */}
                <div className="inline-flex rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                  {item.badge}
                </div>

                {/* CHECK */}
                {active && (
                  <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                    <Check className="h-4 w-4" />
                  </div>
                )}

                {/* TITLE */}
                <h3 className="mt-6 text-2xl font-black tracking-tight text-slate-800">
                  {item.title}
                </h3>

                {/* PRICE */}
                <p className="mt-4 text-4xl font-black tracking-tight text-primary">
                  {item.price}
                </p>

                {/* DESC */}
                <p className="mt-5 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                {/* FEATURES */}
                <div className="mt-8 space-y-4">
                  {item.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                        <Check className="h-3 w-3" />
                      </div>

                      <span className="text-sm leading-6 text-slate-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* SELECTED PACKAGE */}
        <div className="rounded-[32px] border border-primary/10 bg-primary/5 p-6 sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* LEFT */}
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-primary/10 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                Selected Package
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-800">
                {selectedPackageData?.title}
              </h2>

              <p className="mt-3 text-lg font-bold text-primary">
                {selectedPackageData?.price}
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {selectedPackageData?.description}
              </p>

              {/* FEATURES */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {selectedPackageData?.features.map(
                  (feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-white/60 bg-white p-4"
                    >
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                        <Check className="h-3 w-3" />
                      </div>

                      <span className="text-sm font-medium leading-6 text-slate-700">
                        {feature}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full max-w-sm rounded-3xl border border-white/60 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black text-slate-800">
                Why this package?
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                This package aligns with your startup
                stage and founder execution journey. You
                can always upgrade your ecosystem access
                later as your startup grows.
              </p>

              <div className="mt-6 rounded-2xl bg-primary/5 p-4">
                <p className="text-sm font-semibold text-primary">
                  Recommended for structured founder
                  execution & startup growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          {/* PREVIOUS */}
          <button
            onClick={() =>
              router.push(
                "/onboarding/founder/startup"
              )
            }
            className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-border/60 bg-white px-8 text-sm font-semibold text-slate-700 transition hover:bg-muted"
          >

            Previous
          </button>

          {/* NEXT */}
          <button
            onClick={() =>
              router.push(
                "/onboarding/founder/success"
              )
            }
            className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-8 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Complete Onboarding

          </button>
        </div>
      </div>
    </OnboardingLayout>
  );
}