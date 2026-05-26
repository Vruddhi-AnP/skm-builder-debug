"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import {
  CheckCircle2,
  Rocket,
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    name: "Idea Definition",
    href: "/founder/startup-builder/idea-definition",
    progress: "Completed",
  },

  {
    name: "Problem Definition",
    href: "/founder/startup-builder/problem-definition",
    progress: "In Progress",
  },

  {
    name: "Market Research",
    href: "/founder/startup-builder/market-research",
    progress: "Pending",
  },

  {
    name: "Solution Design",
    href: "/founder/startup-builder/solution-design",
    progress: "Pending",
  },

  {
    name: "Business Model",
    href: "/founder/startup-builder/business-model",
    progress: "Pending",
  },

  {
    name: "Summary",
    href: "/founder/startup-builder/summary",
    progress: "Pending",
  },

  {
    name: "Readiness Score",
    href: "/founder/startup-builder/readiness-score",
    progress: "Pending",
  },
];

export default function StartupBuilderLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f8fbff]">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-[#F7F4EE]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <Rocket className="h-3.5 w-3.5" />
              Startup Builder Workspace
            </div>

            <h1 className="mt-4 text-2xl font-black tracking-tight text-[#16214A] sm:text-3xl">
              Build Your Startup
              Systematically
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
              Complete startup execution modules step by
              step to improve startup clarity, structure
              and investor readiness.
            </p>
          </div>

          {/* RIGHT */}
          <div className="hidden min-w-[300px] rounded-[28px] border border-primary/10 bg-primary/5 p-5 xl:block">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-700">
                Builder Progress
              </p>

              <span className="text-sm font-black text-primary">
                60%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[60%] rounded-full bg-primary" />
            </div>

            <p className="mt-4 text-xs leading-6 text-slate-500">
              Continue completing startup modules to
              improve execution readiness.
            </p>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[340px_1fr]">
          {/* SIDEBAR */}
          <aside className="h-fit xl:sticky xl:top-28">
            <div className="overflow-hidden rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 shadow-sm">
              {/* HEADER */}
              <div className="border-b border-border/60 p-6">
                <div className="inline-flex rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                  Builder Modules
                </div>

                <h2 className="mt-4 text-2xl font-black tracking-tight text-[#16214A]">
                  Founder Workflow
                </h2>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Structured startup execution roadmap.
                </p>
              </div>

              {/* STEPS */}
              <div className="space-y-3 p-4">
                {steps.map((step, index) => {
                  const isActive =
                    pathname === step.href;

                  return (
                    <Link
                      key={step.name}
                      href={step.href}
                      className={`group flex items-start gap-4 rounded-[24px] border p-4 transition-all duration-300
                      
                      ${
                        isActive
                          ? "border-primary/20 bg-primary/5"
                          : "border-border/60 bg-[#F7F4EE]/95 hover:border-primary/20 hover:bg-[#f8fbff]"
                      }
                    `}
                    >
                      {/* NUMBER */}
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-black transition-all
                        
                        ${
                          isActive
                            ? "bg-primary text-white"
                            : "bg-slate-100 text-[#6B6B6B] group-hover:bg-primary/10 group-hover:text-primary"
                        }
                      `}
                      >
                        {index + 1}
                      </div>

                      {/* CONTENT */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h3
                            className={`text-sm font-bold transition-colors
                            
                            ${
                              isActive
                                ? "text-primary"
                                : "text-slate-700"
                            }
                          `}
                          >
                            {step.name}
                          </h3>

                          <ChevronRight
                            className={`h-4 w-4 transition-all
                            
                            ${
                              isActive
                                ? "text-primary"
                                : "text-slate-400"
                            }
                          `}
                          />
                        </div>

                        <div className="mt-2 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" />

                          <p className="text-xs font-medium text-slate-500">
                            {step.progress}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <main className="min-w-0">
            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-5 shadow-sm md:p-8 lg:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}