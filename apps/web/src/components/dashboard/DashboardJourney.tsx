import {
  CheckCircle2,
  Circle,
} from "lucide-react";

const steps = [
  {
    title: "Idea Validation",
    completed: true,
  },
  {
    title: "Problem Definition",
    completed: true,
  },
  {
    title: "Market Research",
    completed: false,
  },
  {
    title: "Business Model",
    completed: false,
  },
  {
    title: "Investor Readiness",
    completed: false,
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
          Track your startup progress and
          complete the next milestone.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        {steps.map((step) => (
          <div
            key={step.title}
            className="flex items-center gap-3 rounded-2xl border border-border/50 bg-white/60 p-4"
          >
            {step.completed ? (
              <CheckCircle2 className="h-6 w-6 text-emerald-600" />
            ) : (
              <Circle className="h-6 w-6 text-slate-400" />
            )}

            <span className="text-sm font-medium text-[#16214A]">
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}