"use client";

import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";

import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  Users2,
  WalletCards,
} from "lucide-react";

const advisorJourney = [
  {
    id: "1",
    title: "Discover Startup Founders",
    description:
      "Explore founder profiles, startup ideas and high-potential startups seeking mentorship.",
  },

  {
    id: "2",
    title: "Accept Advisory Requests",
    description:
      "Manage consultation requests, mentorship sessions and founder collaborations.",
  },

  {
    id: "3",
    title: "Build Your Advisor Presence",
    description:
      "Showcase your expertise, credibility and startup impact across the ecosystem.",
  },
];

export default function AdvisorSuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-border bg-card p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:p-10 lg:p-14">

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
            Step 5 of 5
          </div>

        </div>

        {/* SUCCESS ICON */}
        <div className="flex justify-center">

          <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-primary/10 shadow-[0_10px_40px_rgba(15,23,42,0.08)]">

            <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />

            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">

              <Check className="h-10 w-10" />

            </div>
          </div>
        </div>

        {/* BADGES */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

          {/* SUCCESS */}
          <div className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Advisor Onboarding Completed
          </div>

          {/* SECURITY */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2">

            <ShieldCheck className="h-4 w-4 text-emerald-600" />

            <p className="text-xs font-medium text-emerald-800">
              Secure advisor ecosystem & protected workflows
            </p>

          </div>

        </div>

        {/* HEADING */}
        <div className="mt-8 text-center">

          <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Welcome to the
          </h1>

          <h2 className="mt-4 text-5xl font-black tracking-tight text-primary sm:text-6xl">
            Advisor Ecosystem
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-muted-foreground">
            Your advisor profile has been successfully created. You can now connect with startup founders, provide mentorship and contribute to startup growth across the platform.
          </p>

        </div>

        {/* STATS */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">

          <div className="rounded-[1.8rem] border border-border bg-background p-6 text-center shadow-sm">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">

              <Sparkles className="h-6 w-6" />

            </div>

            <h3 className="mt-5 text-lg font-black text-foreground">
              Advisor Profile
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Setup Completed
            </p>

          </div>

          <div className="rounded-[1.8rem] border border-border bg-background p-6 text-center shadow-sm">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">

              <Users2 className="h-6 w-6" />

            </div>

            <h3 className="mt-5 text-lg font-black text-foreground">
              Founder Access
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Connections Enabled
            </p>

          </div>

          <div className="rounded-[1.8rem] border border-border bg-background p-6 text-center shadow-sm">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">

              <WalletCards className="h-6 w-6" />

            </div>

            <h3 className="mt-5 text-lg font-black text-foreground">
              Advisory Setup
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Pricing Configured
            </p>

          </div>
        </div>

        {/* JOURNEY */}
        <div className="mt-12 rounded-[2rem] border border-border bg-background p-8 shadow-sm">

          <h3 className="text-center text-2xl font-black text-foreground">
            Your Advisor Journey Starts Here
          </h3>

          <div className="mt-10 space-y-8">

            {advisorJourney.map((item) => (

              <div
                key={item.id}
                className="flex items-start gap-5"
              >

                {/* NUMBER */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-lg">

                  {item.id}

                </div>

                {/* CONTENT */}
                <div>

                  <h4 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>

                </div>
              </div>

            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">

          <button
            onClick={() =>
              router.push("/onboarding/advisor/pricing")
            }
            className="inline-flex h-14 items-center justify-center rounded-2xl border border-border bg-card px-8 text-sm font-semibold text-foreground transition-all hover:bg-muted"
          >
            Previous
          </button>

          <button
            onClick={() =>
              router.push("/advisor/dashboard")
            }
            className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:bg-primary/90"
          >
            Continue to Dashboard

          </button>
        </div>
      </div>
    </div>
  );
}