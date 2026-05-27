"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

import Image from "next/image";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const nextSteps = [
  {
    id: "01",
    title: "Access Founder Dashboard",
    description:
      "Track startup execution, ecosystem workflows and founder recommendations.",
    icon: LayoutDashboard,
  },

  {
    id: "02",
    title: "Build Startup Blueprint",
    description:
      "Complete startup builder modules and investor readiness workflows.",
    icon: Rocket,
  },

  {
    id: "03",
    title: "Unlock Advisors & Investors",
    description:
      "Access ecosystem opportunities, founder programs and startup support.",
    icon: Users,
  },
];

export default function FounderSuccessPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-5xl">
        <div className="rounded-[40px] border border-border bg-card p-8 shadow-sm lg:p-12">
          {/* TOP BAR */}
          <div className="mb-10 flex items-center justify-between">
  <Link
    href="/"
    className="flex items-center gap-4"
  >
    <Image
      src="/logo.png"
      alt="Startup Ka Mall"
      width={190}
      height={60}
      priority
      className="h-auto w-[170px] object-contain sm:w-[190px]"
    />

    <div>
      <p className="text-sm text-slate-500">
        Startup Ecosystem
      </p>
    </div>
  </Link>

  <div className="hidden items-center gap-3 rounded-full border border-primary/10 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary sm:flex">
    Step 4 of 4
  </div>
</div>

          {/* SUCCESS ICON */}
          <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-primary text-primary-foreground shadow-lg">
            <CheckCircle2 className="h-10 w-10" />
          </div>

          {/* CONTENT */}
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
                <Sparkles className="h-4 w-4 text-primary" />

                <span className="text-sm font-semibold text-primary">
                  Founder Onboarding Completed
                </span>
              </div>

              {/* SECURITY */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />

                <p className="text-xs font-medium text-emerald-800">
                  Secure founder ecosystem & encrypted workflows
                </p>
              </div>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-foreground leading-[1.1] lg:text-5xl">
              Welcome To Startup Ka Mall
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Your founder onboarding is complete. Your
              startup workspace, execution dashboard and
              ecosystem access are now ready.
            </p>
          </div>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {/* ADVISORS */}
            <div className="rounded-[28px] border border-border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mt-5 text-3xl font-black text-foreground">
                250+
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Startup Advisors
              </p>
            </div>

            {/* PROGRAMS */}
            <div className="rounded-[28px] border border-border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Rocket className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mt-5 text-3xl font-black text-foreground">
                100+
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Founder Programs
              </p>
            </div>

            {/* FUNDING */}
            <div className="rounded-[28px] border border-border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mt-5 text-3xl font-black text-foreground">
                ₹50Cr+
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Ecosystem Access
              </p>
            </div>
          </div>

          {/* JOURNEY */}
          <div className="mt-10 rounded-[32px] border border-border bg-muted/30 p-6 sm:p-8">
            <div className="flex flex-col gap-3 text-center">
              <div className="inline-flex self-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                Founder Journey
              </div>

              <h3 className="text-3xl font-black tracking-tight text-foreground">
                What Happens Next?
              </h3>

              <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground">
                Continue building your startup through
                structured execution workflows, founder
                programs and ecosystem collaboration.
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

          {/* INFO CARD */}
          <div className="mt-10 rounded-[28px] border border-primary/20 bg-primary/5 p-6">
            <h3 className="text-lg font-black text-foreground">
              Founder Ecosystem Access
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Your founder profile and startup workflows
              will now personalize startup builder
              recommendations, advisor matching, investor
              readiness insights and ecosystem access
              across the platform.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row">
            {/* BACK */}
            <button
              onClick={() =>
                router.push(
                  "/onboarding/founder/package"
                )
              }
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-background px-6 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              <ArrowLeft className="h-4 w-4" />

              Back
            </button>

            {/* DASHBOARD */}
            <button
              onClick={() =>
                router.push(
                  "/founder/dashboard"
                )
              }
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Go To Founder Dashboard

            </button>
          </div>
        </div>
      </div>
    </div>
  );
}