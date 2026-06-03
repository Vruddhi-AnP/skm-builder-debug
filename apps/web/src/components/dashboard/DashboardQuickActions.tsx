"use client";

import Link from "next/link";
import { ArrowRight, Rocket, FileText, Users, Briefcase } from "lucide-react";
import {
  getCompletedStepCount,
  getBuilderProgress,
} from "@/hooks/useLocalBuilder";

export default function DashboardQuickActions() {
  const completedCount = getCompletedStepCount();
  const progress = getBuilderProgress();

  const builderDone = completedCount >= 5;

  const actions = [
    {
      title: "Startup Builder",
      description: builderDone
        ? "All modules complete. Review your readiness score."
        : `${5 - completedCount} module${5 - completedCount === 1 ? "" : "s"} remaining. Continue building your startup roadmap.`,
      icon: Rocket,
      href: builderDone
        ? "/founder/startup-builder/readiness-score"
        : "/founder/startup-builder",
      priority: !builderDone,
      badge: builderDone ? "Complete ✓" : `${progress}% done`,
      badgeColor: builderDone
        ? "bg-emerald-100 text-emerald-700"
        : "bg-amber-100 text-amber-700",
    },
    {
      title: "Pitch Deck",
      description: "Prepare your investor-ready pitch materials and deck.",
      icon: FileText,
      href: "/founder/pitch-deck",
      priority: false,
      badge: builderDone ? "Recommended" : "After Builder",
      badgeColor: builderDone
        ? "bg-primary/10 text-primary"
        : "bg-slate-100 text-slate-500",
    },
    {
      title: "Advisor Network",
      description: "Connect with startup mentors and domain experts.",
      icon: Users,
      href: "/founder/advisors",
      priority: false,
      badge: null,
      badgeColor: "",
    },
    {
      title: "Programs",
      description: "Explore startup execution programs and opportunities.",
      icon: Briefcase,
      href: "/founder/programs",
      priority: false,
      badge: null,
      badgeColor: "",
    },
  ];

  return (
    <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 md:p-8">
      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-black tracking-tight text-[#16214A]">
          What to Do Next
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          {!builderDone
            ? "Complete the Startup Builder first — it unlocks everything else."
            : "Great work! Here's what to focus on next."}
        </p>
      </div>

      {/* GRID */}
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {actions.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative rounded-[28px] border p-6 text-left transition hover:-translate-y-1 hover:shadow-lg ${
                item.priority
                  ? "border-primary/30 bg-primary/5 hover:border-primary/50"
                  : "border-border/60 bg-[#f8fbff] hover:border-primary/20"
              }`}
            >
              {item.priority && (
                <div className="absolute -top-3 left-5 rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-white">
                  Start Here
                </div>
              )}

              <div className="flex items-start justify-between gap-3">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                  item.priority ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary"
                }`}>
                  <Icon className="h-6 w-6" />
                </div>

                {item.badge && (
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-xl font-black tracking-tight text-[#16214A]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {item.description}
              </p>

              <div className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${
                item.priority ? "text-primary" : "text-slate-600"
              }`}>
                {item.priority ? "Continue Now" : "Open Module"}
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}