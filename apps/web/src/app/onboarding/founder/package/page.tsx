"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  ArrowRight,
  Check,
} from "lucide-react";

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

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#eef2ff,white_40%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_80px_rgba(99,102,241,0.12)] backdrop-blur-xl sm:p-10 lg:p-14">
        {/* TOP */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT */}
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full bg-violet-100 px-4 py-1 text-sm font-semibold text-violet-700">
              Package Selection
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Choose Your Startup Journey
            </h1>

            <p className="mt-5 text-base leading-8 text-slate-500">
              Select a package based on your founder goals, startup
              stage and execution needs. You can upgrade your plan
              anytime later.
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
                Founder Growth
              </div>

              <div className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
                Startup Execution
              </div>
            </div>
          </div>

          {/* RIGHT PROGRESS */}
          <div className="w-full max-w-sm rounded-[2rem] border border-violet-200 bg-white p-6 shadow-[0_10px_40px_rgba(99,102,241,0.08)]">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">
                Progress
              </span>

              <span className="text-sm font-bold text-violet-600">
                Step 3/4
              </span>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Package selection in progress
            </p>
          </div>
        </div>

        {/* PACKAGES */}
        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {packages.map((item) => {
            const active =
              selectedPackage === item.title;

            return (
              <button
                key={item.title}
                onClick={() =>
                  setSelectedPackage(item.title)
                }
                className={`group relative rounded-[2rem] border bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1
                  
                  ${
                    active
                      ? "border-violet-500 shadow-[0_15px_40px_rgba(99,102,241,0.18)]"
                      : "border-slate-200 hover:border-violet-200 hover:shadow-lg"
                  }
                `}
              >
                {/* Badge */}
                <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-violet-700">
                  {item.badge}
                </div>

                {/* Check */}
                {active && (
                  <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg">
                    <Check className="h-4 w-4" />
                  </div>
                )}

                {/* Title */}
                <h3 className="mt-6 text-3xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Price */}
                <p className="mt-4 text-4xl font-bold tracking-tight text-violet-600">
                  {item.price}
                </p>

                {/* Desc */}
                <p className="mt-5 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                {/* Features */}
                <div className="mt-8 space-y-4">
                  {item.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white">
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

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={() =>
              router.push("/onboarding/founder/startup")
            }
            className="inline-flex h-14 items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
          >
            Previous
          </button>

          <button
            onClick={() =>
              router.push("/onboarding/founder/success")
            }
            className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)] transition-all hover:scale-[1.02]"
          >
            Complete Onboarding

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}