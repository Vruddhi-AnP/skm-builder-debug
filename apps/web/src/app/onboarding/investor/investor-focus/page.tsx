"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Building2,
  CheckCircle2,
  Globe,
  HeartPulse,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const focusAreas = [
  {
    id: "fintech",
    title: "FinTech",
    icon: TrendingUp,
  },

  {
    id: "healthtech",
    title: "HealthTech",
    icon: HeartPulse,
  },

  {
    id: "saas",
    title: "SaaS",
    icon: Globe,
  },

  {
    id: "ai",
    title: "AI & Automation",
    icon: Brain,
  },

  {
    id: "climate",
    title: "ClimateTech",
    icon: ShieldCheck,
  },

  {
    id: "enterprise",
    title: "Enterprise",
    icon: Building2,
  },

  {
    id: "consumer",
    title: "Consumer",
    icon: Rocket,
  },
];

export default function InvestorFocusPage() {
  const router = useRouter();

  const [selectedFocus, setSelectedFocus] =
    useState<string[]>([
      "fintech",
      "ai",
    ]);

  const toggleFocus = (id: string) => {
    if (selectedFocus.includes(id)) {
      setSelectedFocus((prev) =>
        prev.filter(
          (item) => item !== id
        )
      );
    } else {
      setSelectedFocus((prev) => [
        ...prev,
        id,
      ]);
    }
  };

  const handleContinue = () => {
    router.push(
      "/onboarding/investor/investor-preferences"
    );
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* MAIN SHELL */}
        <div className="overflow-hidden rounded-[40px] border border-[#ddd7cb] bg-[#f8f6f1] shadow-sm">

          {/* HEADER */}
          <div className="flex flex-col gap-6 border-b border-[#e1dbcf] px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">

            {/* LOGO */}
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#13235b] text-xl font-black text-white shadow-sm">
                I
              </div>

              <div>
                <h2 className="text-[24px] font-black leading-none text-[#13235b]">
                  Startup Ka Mall
                </h2>

                <p className="mt-2 text-sm text-[#6b7280]">
                  Investor Workspace
                </p>
              </div>

            </div>

            {/* STEP */}
            <div className="inline-flex h-12 items-center rounded-full border border-[#d9d3c8] bg-[#f1eee7] px-6">

              <span className="text-sm font-semibold text-[#13235b]">
                Step 2 of 4
              </span>

            </div>

          </div>

          {/* CONTENT */}
          <div className="px-6 py-8 lg:px-10 lg:py-10">

            {/* TOP SECTION */}
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

              {/* LEFT */}
              <div className="max-w-3xl">

                {/* BADGE */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#c8cedd] bg-[#eceef5] px-5 py-3">

                  <Sparkles className="h-4 w-4 text-[#13235b]" />

                  <span className="text-sm font-semibold text-[#13235b]">
                    Investor Onboarding
                  </span>

                </div>

                {/* TITLE */}
                <h1 className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-[#13235b] lg:text-6xl">
                  Select Your
                  <br />
                  Investment Focus
                </h1>

                {/* DESC */}
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#676c79]">
                  Choose industries and startup
                  categories aligned with your
                  investment interests and
                  personalize your investor
                  ecosystem experience.
                </p>

                {/* TAGS */}
                <div className="mt-8 flex flex-wrap gap-3">

                  {selectedFocus.map((focus) => (
                    <div
                      key={focus}
                      className="inline-flex items-center gap-2 rounded-full border border-[#c8cedd] bg-[#eceef5] px-4 py-2"
                    >

                      <CheckCircle2 className="h-4 w-4 text-[#13235b]" />

                      <span className="text-sm font-semibold capitalize text-[#13235b]">
                        {focus}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

              {/* RIGHT PANEL */}
              <div className="w-full max-w-[320px] space-y-5">

                {/* SECURITY */}
                <div className="rounded-[28px] border border-[#cbe7d7] bg-[#ddf3e5] p-5">

                  <div className="flex items-start gap-3">

                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70">

                      <ShieldCheck className="h-5 w-5 text-[#12905a]" />

                    </div>

                    <div>

                      <p className="text-xs font-bold uppercase tracking-wide text-[#12905a]">
                        Secure Workflow
                      </p>

                      <p className="mt-2 text-sm leading-relaxed text-[#146b4b]">
                        Protected investor onboarding
                        with secure ecosystem access
                        and verified startup
                        workflows.
                      </p>

                    </div>

                  </div>

                </div>

                {/* PROGRESS */}
                <div className="rounded-[32px] border border-[#d8d2c7] bg-[#ece8e2] p-6">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[11px] uppercase tracking-wider text-[#6b6558]">
                        Progress
                      </p>

                      <h3 className="mt-2 text-3xl font-black text-[#13235b]">
                        50%
                      </h3>

                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#13235b] text-sm font-black text-white">
                      2/4
                    </div>

                  </div>

                  <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#ddd6cb]">

                    <div className="h-full w-1/2 rounded-full bg-[#13235b]" />

                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-[#6b6558]">
                    {selectedFocus.length} focus
                    areas selected for your investor
                    profile.
                  </p>

                </div>

              </div>

            </div>

            {/* CARDS */}
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

              {focusAreas.map((item) => {
                const Icon = item.icon;

                const active =
                  selectedFocus.includes(
                    item.id
                  );

                return (
                  <button
                    key={item.id}
                    onClick={() =>
                      toggleFocus(item.id)
                    }
                    className={`group rounded-[32px] border p-7 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-md

                    ${
                      active
                        ? "border-[#22367c] bg-[#edf1ff]"
                        : "border-[#e0dbd1] bg-[#f6f3ed]"
                    }
                    `}
                  >

                    {/* ICON */}
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-[22px] transition-all

                      ${
                        active
                          ? "bg-[#13235b] text-white"
                          : "bg-[#eceef5] text-[#13235b]"
                      }
                      `}
                    >

                      <Icon className="h-7 w-7" />

                    </div>

                    {/* TITLE */}
                    <h3 className="mt-7 text-2xl font-black tracking-tight text-[#13235b]">
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p className="mt-4 text-sm leading-relaxed text-[#6b7280]">
                      Explore curated startup
                      opportunities in the{" "}
                      {item.title} ecosystem.
                    </p>

                    {/* FOOTER */}
                    <div className="mt-7 flex items-center justify-between">

                      <span
                        className={`text-sm font-semibold

                        ${
                          active
                            ? "text-[#13235b]"
                            : "text-[#6b7280]"
                        }
                        `}
                      >
                        {active
                          ? "Selected"
                          : "Select Focus"}
                      </span>

                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full transition-all

                        ${
                          active
                            ? "bg-[#13235b] text-white"
                            : "bg-[#e9e4db] text-[#6b7280]"
                        }
                        `}
                      >

                        {active ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          <ArrowRight className="h-4 w-4" />
                        )}

                      </div>

                    </div>

                  </button>
                );
              })}

            </div>

            {/* ACTIONS */}
            <div className="mt-12 flex flex-col gap-4 border-t border-[#ddd7cb] pt-8 sm:flex-row sm:items-center sm:justify-between">

              {/* BACK */}
              <Link
                href="/onboarding/investor/profile"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#d7d2c7] bg-[#f1efe9] px-6 text-sm font-semibold text-[#13235b] transition hover:bg-[#ebe7de]"
              >

                <ArrowLeft className="h-4 w-4" />

                Back

              </Link>

              {/* CONTINUE */}
              <button
                onClick={handleContinue}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#13235b] px-6 text-sm font-semibold text-white transition hover:opacity-90"
              >

                Continue

              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}