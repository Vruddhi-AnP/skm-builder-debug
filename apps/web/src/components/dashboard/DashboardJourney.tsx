"use client";

import { CheckCircle2, Circle } from "lucide-react";
import { getStepStatus } from "@/hooks/useLocalBuilder";

const steps = [
  {
    title: "Startup Profile",
    status: "Completed",
  },

  {
    title: "Idea",
    status: getStepStatus("ideaDefinition"),
  },

  {
    title: "Problem",
    status: getStepStatus("problemDefinition"),
  },

  {
    title: "Customer / Market",
    status: getStepStatus("marketResearch"),
  },

  {
    title: "Solution",
    status: getStepStatus("solutionDesign"),
  },

  {
    title: "Business Model",
    status: getStepStatus("businessModel"),
  },

  {
    title: "Readiness",
    status:
      getStepStatus("businessModel") === "Completed"
        ? "Unlocked"
        : "Locked",
  },

  {
    title: "Blueprint",
    status:
      getStepStatus("businessModel") === "Completed"
        ? "Unlocked"
        : "Locked",
  },
];

export default function DashboardJourney() {
  return (
    <section className="rounded-[28px] border border-border/60 bg-[#F7F4EE]/95 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-black text-[#16214A]">
          Startup Journey
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Track your startup progress and complete the next milestone.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => {
            const completed =
              step.status === "Completed";

            const locked =
              step.status === "Locked";

            return (
              <div
                key={step.title}
                className={`flex items-center gap-3 rounded-2xl border p-4 transition ${
                  completed
                    ? "border-emerald-200 bg-emerald-50"
                    : locked
                    ? "border-slate-200 bg-slate-50 opacity-70"
                    : "border-primary/20 bg-primary/5"
                }`}
              >
                {completed ? (
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-600" />
                ) : locked ? (
                  <Circle className="h-6 w-6 shrink-0 text-slate-300" />
                ) : (
                  <Circle className="h-6 w-6 shrink-0 text-primary" />
                )}

                <span
                  className={`text-sm font-medium ${
                    completed
                      ? "text-emerald-700"
                      : locked
                      ? "text-slate-400"
                      : "text-[#16214A]"
                  }`}
                >
                  {step.title}
                </span>
              </div>
            );
          })}
      </div>
    </section>
  );
}