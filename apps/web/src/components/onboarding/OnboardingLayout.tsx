"use client";

import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";
import { ReactNode } from "react"
import Image from "next/image";;

interface Step {
  title: string;
  description: string;
}

interface OnboardingLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  currentStep: number;
  steps: Step[];
}

export default function OnboardingLayout({
  children,
  title,
  subtitle,
  currentStep,
  steps,
}: OnboardingLayoutProps) {
  const progress =
    (currentStep / steps.length) * 100;

  return (
    <div className="min-h-screen bg-[#f8fbff]">
      {/* TOP NAVBAR */}
      <header className="border-b border-border/60 bg-[#F7F4EE]/95 backdrop-blur-xl">
        <div className="page-container flex h-20 items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-4"
          >
           {/* LOGO */}
        <div className="mb-10 flex justify-center">

          <Link
            href="/"
            className="transition hover:scale-[1.02]"
          >

            <Image
              src="/logo.png"
              alt="Startup Ka Mall"
              width={220}
              height={70}
              priority
              className="h-auto w-[190px] object-contain sm:w-[220px]"
            />

          </Link>

              <p className="text-sm text-slate-500">
                Founder Ecosystem
              </p>
            </div>
          </Link>

          {/* STEP */}
          <div className="hidden items-center gap-3 rounded-full border border-primary/10 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary sm:flex">
            Step {currentStep} of{" "}
            {steps.length}
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl">
          {/* PROGRESS */}
          <div className="mb-8 rounded-3xl border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
            {/* TOP */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* LEFT */}
              <div>
                <div className="flex flex-wrap items-center gap-3">
              {/* TAG */}
              <div className="inline-flex rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                Founder Onboarding
              </div>

              {/* SECURITY */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-10 py-1.5">
                <ShieldCheck className="h-5 w-10 text-emerald-600" />

                <p className="text-s font-medium text-emerald-800">
                  Secure founder onboarding & encrypted workflows
                </p>
              </div>
            </div>

                <h1 className="mt-4 text-3xl font-black tracking-tight text-[#16214A] sm:text-4xl">
                  {title}
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  {subtitle}
                </p>
              </div>

              {/* STEP STATUS */}

              <div className="rounded-2xl border border-border/60 bg-[#f8fbff] px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Current Step
                </p>

                <h3 className="mt-2 text-lg font-black text-[#16214A]">
                  {
                    steps[currentStep - 1]
                      ?.title
                  }
                </h3>
              </div>
            </div>

            {/* PROGRESS BAR */}
            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-700">
                  Onboarding Progress
                </p>

                <span className="text-sm font-bold text-primary">
                  {Math.round(progress)}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
            </div>

            {/* STEPS */}
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {steps.map((step, index) => {
                const stepNumber =
                  index + 1;

                const isActive =
                  currentStep === stepNumber;

                const isCompleted =
                  currentStep >
                  stepNumber;

                return (
                  <div
                    key={index}
                    className={`rounded-2xl border p-4 transition-all ${
                      isActive
                        ? "border-primary/20 bg-primary/5"
                        : "border-border/60 bg-[#F7F4EE]/95"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${
                          isCompleted
                            ? "bg-primary text-white"
                            : isActive
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-slate-500"
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          stepNumber
                        )}
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-[#16214A]">
                          {step.title}
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CONTENT */}
          <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm sm:p-10">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}