"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Building2,
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
    <div className="min-h-screen bg-background px-4 py-10">

      <div className="mx-auto max-w-5xl">

        {/* TOP */}
        <div className="mb-8">

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">

            <Sparkles className="h-4 w-4 text-primary" />

            <span className="text-sm font-semibold text-primary">
              Investment Focus
            </span>

          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-foreground lg:text-5xl leading-[1.1]">
            Select Investment Interests
          </h1>

          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Choose industries and startup categories
            you are interested in investing in.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

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
                className={`rounded-[32px] border p-6 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg

                ${
                  active
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-primary/20"
                }
                `}
              >

                {/* ICON */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl

                  ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }
                  `}
                >

                  <Icon className="h-7 w-7" />

                </div>

                {/* TITLE */}
                <h3 className="mt-6 text-2xl font-black tracking-tight text-foreground">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Explore curated startup opportunities
                  in {item.title} ecosystem.
                </p>

                {/* PROGRESS */}
                <div
                  className={`mt-6 h-2 overflow-hidden rounded-full

                  ${
                    active
                      ? "bg-primary/20"
                      : "bg-muted"
                  }
                  `}
                >

                  <div
                    className={`h-full rounded-full transition-all duration-300

                    ${
                      active
                        ? "w-full bg-primary"
                        : "w-0"
                    }
                    `}
                  />

                </div>
              </button>
            );
          })}

        </div>

        {/* ACTIONS */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          {/* BACK */}
          <Link
            href="/onboarding/investor-profile"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 text-sm font-semibold text-foreground transition hover:bg-muted"
          >

            <ArrowLeft className="h-4 w-4" />

            Back

          </Link>

          {/* CONTINUE */}
          <button
            onClick={handleContinue}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Continue

            <ArrowRight className="h-4 w-4" />

          </button>

        </div>
      </div>
    </div>
  );
}