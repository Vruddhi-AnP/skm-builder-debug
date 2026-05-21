"use client";

import Link from "next/link";
import { Check } from "lucide-react";

export default function OnboardingLayout({
  children,
  title,
  subtitle,
  currentStep = 1,
  steps = [],
}) {
  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f5f7ff] to-[#eef2ff] relative">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl" />

      <div className="relative z-10 min-h-screen">
        <div className="grid min-h-screen lg:grid-cols-[320px_1fr]">
          {/* Sidebar */}
          <div className="hidden lg:flex flex-col justify-between border-r border-white/40 bg-white/50 backdrop-blur-2xl px-8 py-10">
            <div>
              {/* Logo */}
              <Link
                href="/"
                className="inline-flex items-center gap-3 mb-14"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-blue-600 text-white font-bold text-lg shadow-lg shadow-blue-200">
                  SK
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Startup Ka Mall
                  </h2>

                  <p className="text-sm text-slate-500">
                    Founder Ecosystem
                  </p>
                </div>
              </Link>

              {/* Steps */}
              <div className="space-y-5">
                {steps.map((step, index) => {
                  const stepNumber = index + 1;

                  const isActive = currentStep === stepNumber;
                  const isCompleted = currentStep > stepNumber;

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4"
                    >
                      {/* Step Circle */}
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl border text-sm font-semibold transition-all duration-300
                          
                          ${
                            isCompleted
                              ? "bg-blue-600 border-blue-600 text-white"
                              : isActive
                              ? "bg-blue-50 border-blue-200 text-blue-600 shadow-md shadow-blue-100"
                              : "bg-white border-slate-200 text-slate-400"
                          }
                        `}
                      >
                        {isCompleted ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          stepNumber
                        )}
                      </div>

                      {/* Step Text */}
                      <div className="pt-1">
                        <h3
                          className={`text-sm font-semibold transition-colors
                          
                          ${
                            isActive
                              ? "text-slate-900"
                              : "text-slate-500"
                          }
                        `}
                        >
                          {step.title}
                        </h3>

                        <p className="mt-1 text-xs leading-relaxed text-slate-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="rounded-3xl border border-white/50 bg-white/60 p-5 backdrop-blur-xl shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Setup in Progress
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Complete your onboarding to unlock your personalized dashboard
                experience.
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-2 text-xs font-medium text-slate-400">
                {Math.round(progress)}% completed
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex items-center justify-center px-4 py-8 sm:px-6 lg:px-12">
            <div className="w-full max-w-4xl">
              {/* Mobile Progress */}
              <div className="mb-6 rounded-3xl border border-white/50 bg-white/70 p-5 backdrop-blur-2xl shadow-sm lg:hidden">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-blue-600">
                      Step {currentStep} of {steps.length}
                    </p>

                    <h2 className="mt-1 text-lg font-bold text-slate-900">
                      {steps[currentStep - 1]?.title}
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-sm font-bold text-blue-600">
                    {Math.round(progress)}%
                  </div>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Content Card */}
              <div className="rounded-[2rem] border border-white/60 bg-white/75 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                {/* Header */}
                <div className="border-b border-slate-100 px-6 py-6 sm:px-10 sm:py-8">
                  <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-600">
                    Onboarding
                  </div>

                  <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {title}
                  </h1>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
                    {subtitle}
                  </p>
                </div>

                {/* Dynamic Content */}
                <div className="px-6 py-6 sm:px-10 sm:py-8">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}