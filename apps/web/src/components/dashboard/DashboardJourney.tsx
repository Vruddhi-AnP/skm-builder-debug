"use client";

import { CheckCircle2, Circle } from "lucide-react";
import { getStepStatus } from "@/hooks/useLocalBuilder";

const steps = [
  { title: "Idea Validation",    key: "ideaDefinition"    as const },
  { title: "Problem Definition", key: "problemDefinition" as const },
  { title: "Market Research",    key: "marketResearch"    as const },
  { title: "Business Model",     key: "businessModel"     as const },
  { title: "Solution Design",    key: "solutionDesign"    as const },
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

      <div className="grid gap-4 md:grid-cols-5">
        {steps.map((step) => {
          const status = getStepStatus(step.key);
          const completed = status === "Completed";

          return (
            <div
              key={step.title}
              className={`flex items-center gap-3 rounded-2xl border p-4 transition ${
                completed
                  ? "border-emerald-200 bg-emerald-50"
                  : "border-border/50 bg-white/60"
              }`}
            >
              {completed ? (
                <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-600" />
              ) : (
                <Circle className="h-6 w-6 shrink-0 text-slate-400" />
              )}
              <span className={`text-sm font-medium ${
                completed ? "text-emerald-700" : "text-[#16214A]"
              }`}>
                {step.title}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}