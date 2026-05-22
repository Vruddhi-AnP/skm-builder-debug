import Link from "next/link";

import {
  ArrowRight,
  Lightbulb,
  CircleHelp,
  BarChart3,
  Sparkles,
  BriefcaseBusiness,
  FileText,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const builderModules = [
  {
    title: "Idea Definition",
    description:
      "Define your startup vision, mission and business idea.",
    href: "/founder/startup-builder/idea-definition",
    icon: Lightbulb,
    progress: 80,
    status: "Completed",
  },

  {
    title: "Problem Definition",
    description:
      "Identify the core real-world problem your startup solves.",
    href: "/founder/startup-builder/problem-definition",
    icon: CircleHelp,
    progress: 60,
    status: "In Progress",
  },

  {
    title: "Market Research",
    description:
      "Analyze competitors, target audience and market demand.",
    href: "/founder/startup-builder/market-research",
    icon: BarChart3,
    progress: 40,
    status: "In Progress",
  },

  {
    title: "Solution Design",
    description:
      "Structure product workflows, user journeys and features.",
    href: "/founder/startup-builder/solution-design",
    icon: Sparkles,
    progress: 20,
    status: "Pending",
  },

  {
    title: "Business Model",
    description:
      "Define pricing, revenue strategy and business scalability.",
    href: "/founder/startup-builder/business-model",
    icon: BriefcaseBusiness,
    progress: 15,
    status: "Pending",
  },

  {
    title: "Summary",
    description:
      "Review startup execution insights and readiness roadmap.",
    href: "/founder/startup-builder/summary",
    icon: FileText,
    progress: 0,
    status: "Pending",
  },
];

const stats = [
  {
    title: "Startup Progress",
    value: "35%",
    subtitle: "Overall workflow completion",
  },

  {
    title: "Completed Modules",
    value: "2/7",
    subtitle: "Builder workflow completed",
  },

  {
    title: "Readiness Score",
    value: "72",
    subtitle: "Investor readiness stage",
  },

  {
    title: "Pending Tasks",
    value: "11",
    subtitle: "Remaining execution tasks",
  },
];

export default function StartupBuilderPage() {
  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="overflow-hidden rounded-[32px] border border-border/60 bg-white">
        <div className="grid gap-8 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
              Startup Execution Workspace
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-800 md:text-5xl">
              Build Your Startup
              <span className="block text-primary">
                Step-by-Step
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Validate your startup idea, structure your
              business model, analyze market demand and
              prepare investor-ready execution workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/founder/startup-builder/idea-definition"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
              >
                Start Building

              </Link>

              <Link
                href="/founder/dashboard"
                className="rounded-2xl border border-border/60 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-muted"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Startup Readiness
                </p>

                <h3 className="mt-2 text-5xl font-black text-slate-800">
                  72%
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-4 text-primary shadow-sm">
                <ShieldCheck className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-8 h-3 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[72%] rounded-full bg-primary" />
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Pitch clarity established",
                "Market validation in progress",
                "Business model partially completed",
                "Investor documentation pending",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />

                  <p className="text-sm font-medium text-slate-600">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="flex min-h-[180px] flex-col justify-between rounded-[28px] border border-border/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <p className="text-sm font-medium text-slate-500">
                {item.title}
              </p>

              <h3 className="mt-4 text-5xl font-black tracking-tight text-slate-800">
                {item.value}
              </h3>
            </div>

            <div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[70%] rounded-full bg-primary" />
              </div>

              <p className="mt-3 text-sm text-slate-500">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* MODULES */}
      <section className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm lg:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-800">
              Startup Builder Modules
            </h2>

            <p className="mt-2 max-w-2xl text-slate-600">
              Complete each startup workflow module to
              improve execution clarity and investor
              readiness.
            </p>
          </div>

          <Link
            href="/founder/startup-builder/readiness-score"
            className="inline-flex w-fit items-center gap-2 rounded-2xl border border-border/60 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-muted"
          >
            View Full Readiness

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* GRID */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {builderModules.map((module) => {
            const Icon = module.icon;

            return (
              <div
                key={module.title}
                className="group rounded-[28px] border border-border/60 bg-[#f8fbff] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white hover:shadow-lg"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  {/* LEFT */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-primary/10 p-4 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-black tracking-tight text-slate-800">
                        {module.title}
                      </h3>

                      <p className="mt-3 max-w-md leading-7 text-slate-600">
                        {module.description}
                      </p>
                    </div>
                  </div>

                  {/* STATUS */}
                  <div
                    className={`w-fit rounded-full px-4 py-2 text-xs font-bold
                      
                      ${
                        module.status ===
                        "Completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : module.status ===
                            "In Progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-slate-200 text-slate-700"
                      }
                    `}
                  >
                    {module.status}
                  </div>
                </div>

                {/* PROGRESS */}
                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500">
                      Progress
                    </p>

                    <p className="text-sm font-bold text-primary">
                      {module.progress}%
                    </p>
                  </div>

                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{
                        width: `${module.progress}%`,
                      }}
                    />
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex items-center justify-between">
                  <p className="text-sm text-slate-500">
                    Continue startup workflow
                  </p>

                  <Link
                    href={module.href}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Open

                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}