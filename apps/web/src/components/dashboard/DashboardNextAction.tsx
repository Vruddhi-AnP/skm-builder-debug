"use client";

import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  FileText,
  Users,
} from "lucide-react";

import {
  getCompletedStepCount,
} from "@/hooks/useLocalBuilder";

export default function DashboardNextAction() {
  const completedCount = getCompletedStepCount();

  let title = "";
  let description = "";
  let buttonText = "";
  let href = "";
  let Icon = Rocket;

  if (completedCount === 0) {
    title = "Start Your Startup Builder";
    description =
      "Complete the Startup Builder to structure your idea and unlock your readiness score.";
    buttonText = "Start Builder";
    href = "/founder/startup-builder/idea-definition";
    Icon = Rocket;
  }

  else if (completedCount < 5) {
    title = "Continue Your Startup Journey";
    description =
      "You're making progress. Complete the remaining builder modules to move forward.";
    buttonText = "Continue Builder";
    href = "/founder/startup-builder";
    Icon = Rocket;
  }

  else {
    title = "Download Your Startup Blueprint";
    description =
      "Your builder is complete. Generate your blueprint and prepare for the next stage.";
    buttonText = "View Blueprint";
    href = "/founder/pitch-deck";
    Icon = FileText;
  }

  return (
    <section className="rounded-[32px] border border-primary/15 bg-primary/5 p-6 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <Icon className="h-7 w-7" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Recommended Next Step
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#16214A]">
              {title}
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              {description}
            </p>
          </div>
        </div>

        <Link
          href={href}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
        >
          {buttonText}
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>
    </section>
  );
}