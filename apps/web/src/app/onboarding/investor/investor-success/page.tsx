"use client";

import Link from "next/link";

import Image from "next/image";

import {
  ArrowRight,
  CheckCircle2,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

export default function InvestorSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">

      <div className="w-full max-w-4xl">

        <div className="rounded-[40px] border border-border bg-card p-8 shadow-sm lg:p-12">

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

          </div>

          {/* ICON */}
          <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-primary text-primary-foreground shadow-lg">

            <CheckCircle2 className="h-10 w-10" />

          </div>

          {/* CONTENT */}
          <div className="mt-8">

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">

              <Sparkles className="h-4 w-4 text-primary" />

              <span className="text-sm font-semibold text-primary">
                Investor Profile Completed
              </span>

            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-foreground leading-[1.1] lg:text-5xl">
              Welcome To Startup Ka Mall
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Your investor onboarding is complete. You
              can now discover curated startup investment
              opportunities, connect with founders and
              explore ecosystem growth opportunities.
            </p>

          </div>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">

            {/* STARTUPS */}
            <div className="rounded-[28px] border border-border bg-background p-6">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">

                <Rocket className="h-6 w-6 text-primary" />

              </div>

              <h3 className="mt-5 text-3xl font-black text-foreground">
                500+
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Verified Startups
              </p>

            </div>

            {/* INVESTORS */}
            <div className="rounded-[28px] border border-border bg-background p-6">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">

                <Users className="h-6 w-6 text-primary" />

              </div>

              <h3 className="mt-5 text-3xl font-black text-foreground">
                120+
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Active Investors
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
                Ecosystem Funding
              </p>

            </div>

          </div>

          {/* INFO CARD */}
          <div className="mt-10 rounded-[28px] border border-primary/20 bg-primary/5 p-6">

            <h3 className="text-lg font-black text-foreground">
              Investor Ecosystem Access
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Your investor profile and preferences will
              now personalize startup discovery,
              investment opportunities, founder matching
              and ecosystem recommendations across the
              platform.
            </p>

          </div>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row">

            {/* BACK */}
            <Link
              href="/onboarding/investor/investor-preferences"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-border bg-background px-6 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Back
            </Link>

            {/* DASHBOARD */}
            <Link
              href="/investor/dashboard"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >

              Go To Dashboard

              <ArrowRight className="h-4 w-4" />

            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}