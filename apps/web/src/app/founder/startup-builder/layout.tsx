"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StartupBuilderLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  const steps = [
    {
      name: "Idea Definition",
      href: "/founder/startup-builder/idea-definition",
    },
    {
      name: "Problem Definition",
      href: "/founder/startup-builder/problem-definition",
    },
    {
      name: "Market Research",
      href: "/founder/startup-builder/market-research",
    },
    {
      name: "Solution Design",
      href: "/founder/startup-builder/solution-design",
    },
    {
      name: "Business Model",
      href: "/founder/startup-builder/business-model",
    },
    {
      name: "Summary",
      href: "/founder/startup-builder/summary",
    },
    {
      name: "Readiness Score",
      href: "/founder/startup-builder/readiness-score",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* TOP HEADER */}
      <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 py-5 xl:flex-row xl:items-center xl:justify-between">
            {/* LEFT */}
            <div>
              <div className="mb-3 inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-medium text-cyan-700 sm:text-sm">
                Startup Builder Workspace
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Build Your Startup Systematically
              </h1>

              <p className="mt-2 max-w-2xl text-sm text-slate-500 md:text-base">
                Complete each builder module step-by-step to improve
                execution clarity and startup readiness.
              </p>
            </div>

            {/* RIGHT */}
            <div className="min-w-[260px] rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium text-slate-700">
                  Builder Progress
                </p>

                <span className="text-sm font-semibold text-cyan-600">
                  60%
                </span>
              </div>

              <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[60%] rounded-full bg-cyan-500"></div>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Continue completing startup modules
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[320px_1fr]">
          {/* SIDEBAR */}
          <div className="h-fit xl:sticky xl:top-32">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
              {/* SIDEBAR HEADER */}
              <div className="border-b border-slate-100 p-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  Builder Modules
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Structured founder workflow
                </p>
              </div>

              {/* MODULES */}
              <div className="p-4">
                <div className="space-y-2">
                  {steps.map((step, index) => {
                    const isActive = pathname === step.href;

                    return (
                      <Link
                        key={index}
                        href={step.href}
                        className={`
                          flex items-start gap-4 rounded-2xl border px-4 py-4 transition-all duration-200
                          ${
                            isActive
                              ? "border-cyan-200 bg-cyan-50"
                              : "border-transparent bg-white hover:bg-slate-50"
                          }
                        `}
                      >
                        {/* NUMBER */}
                        <div
                          className={`
                            flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold
                            ${
                              isActive
                                ? "bg-cyan-500 text-white"
                                : "bg-slate-100 text-slate-600"
                            }
                          `}
                        >
                          {index + 1}
                        </div>

                        {/* TEXT */}
                        <div>
                          <h3
                            className={`
                              text-sm font-semibold
                              ${
                                isActive
                                  ? "text-cyan-700"
                                  : "text-slate-700"
                              }
                            `}
                          >
                            {step.name}
                          </h3>

                          <p className="mt-1 text-xs text-slate-500">
                            Builder module step
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="min-w-0">
            <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-sm md:p-8 lg:p-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}