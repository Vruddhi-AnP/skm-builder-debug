"use client";

import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Rocket,
  LayoutDashboard,
  Users,
} from "lucide-react";

import OnboardingLayout from "@/components/onboarding/OnboardingLayout";

const onboardingSteps = [
  {
    title: "Founder Profile",
    description:
      "Founder identity & experience",
  },

  {
    title: "Startup Profile",
    description:
      "Startup information & stage",
  },

  {
    title: "Programs",
    description:
      "Packages & ecosystem support",
  },

  {
    title: "Complete",
    description:
      "Access founder workspace",
  },
];

const nextSteps = [
  {
    id: "01",
    title: "Access Founder Dashboard",
    description:
      "Track startup progress, recommendations and execution workflows.",
    icon: LayoutDashboard,
  },

  {
    id: "02",
    title: "Build Startup Blueprint",
    description:
      "Complete structured startup builder modules step-by-step.",
    icon: Rocket,
  },

  {
    id: "03",
    title: "Unlock Advisors & Investors",
    description:
      "Access ecosystem opportunities, programs and startup support.",
    icon: Users,
  },
];

export default function FounderSuccessPage() {
  const router = useRouter();

  return (
    <OnboardingLayout
      title="Welcome to Startup Ka Mall"
      subtitle="Your founder onboarding setup has been completed successfully. Your startup workspace and execution dashboard are now ready."
      currentStep={4}
      steps={onboardingSteps}
    >
      <div className="space-y-10">

        {/* SUCCESS ICON */}
        <div className="flex justify-center">

          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-primary/20 bg-primary/10">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">

              <Check className="h-10 w-10" />

            </div>
          </div>
        </div>

        {/* BADGE */}
        <div className="flex justify-center">

          <div className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Onboarding Completed Successfully
          </div>

        </div>

        {/* HEADING */}
        <div className="text-center">

          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Your Founder Workspace
            <br />
            Is Ready
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base">
            Your founder profile, startup information
            and ecosystem preferences have been setup
            successfully. You can now access your
            personalized startup execution platform.
          </p>

        </div>

        {/* STATUS CARDS */}
        <div className="grid gap-5 sm:grid-cols-3">

          <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-sm">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">

              <Check className="h-6 w-6" />

            </div>

            <h3 className="mt-5 text-lg font-black text-foreground">
              Founder Profile
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Setup Completed
            </p>

          </div>

          <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-sm">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">

              <Rocket className="h-6 w-6" />

            </div>

            <h3 className="mt-5 text-lg font-black text-foreground">
              Startup Setup
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Profile Initialized
            </p>

          </div>

          <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-sm">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">

              <LayoutDashboard className="h-6 w-6" />

            </div>

            <h3 className="mt-5 text-lg font-black text-foreground">
              Dashboard Ready
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Access Enabled
            </p>

          </div>
        </div>

        {/* JOURNEY */}
        <div className="rounded-[32px] border border-border bg-muted/30 p-6 sm:p-8">

          <div className="flex flex-col gap-3 text-center">

            <div className="inline-flex self-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              Founder Journey
            </div>

            <h3 className="text-3xl font-black tracking-tight text-foreground">
              What Happens Next?
            </h3>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground">
              Continue building your startup through
              structured execution workflows, ecosystem
              support and founder collaboration.
            </p>

          </div>

          {/* STEPS */}
          <div className="mt-10 space-y-5">

            {nextSteps.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm"
                >

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

                    {/* ICON */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">

                      <Icon className="h-6 w-6" />

                    </div>

                    {/* CONTENT */}
                    <div className="flex-1">

                      <div className="flex flex-wrap items-center gap-3">

                        <span className="text-sm font-black text-primary">
                          {item.id}
                        </span>

                        <h4 className="text-xl font-black text-foreground">
                          {item.title}
                        </h4>

                      </div>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>

                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* FINAL INFO */}
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6">

          <p className="text-center text-sm leading-7 text-muted-foreground">
            Your onboarding data will now personalize
            startup recommendations, advisor matching,
            investor readiness workflows and founder
            execution tools across the platform.
          </p>

        </div>

        {/* ACTIONS */}
        <div className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">

          {/* PREVIOUS */}
          <button
            onClick={() =>
              router.push(
                "/onboarding/founder/package"
              )
            }
            className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-8 text-sm font-semibold text-foreground transition hover:bg-muted"
          >

            <ArrowLeft className="h-4 w-4" />

            Previous

          </button>

          {/* DASHBOARD */}
          <button
            onClick={() =>
              router.push(
                "/founder/dashboard"
              )
            }
            className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-8 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Continue to Dashboard

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

          </button>
        </div>
      </div>
    </OnboardingLayout>
  );
}