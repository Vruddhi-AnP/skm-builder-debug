"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Rocket } from "lucide-react";
import { useLocalUser } from "@/hooks/useLocalUser";
import {
  getBuilderProgress,
  getCompletedStepCount,
} from "@/hooks/useLocalBuilder";
import { useEffect, useState } from "react";

const NEXT_STEP_MAP: Record<number, { label: string; href: string }> = {
  0: { label: "Define Your Idea",       href: "/founder/startup-builder/idea-definition" },
  1: { label: "Define the Problem",     href: "/founder/startup-builder/problem-definition" },
  2: { label: "Research Your Market",   href: "/founder/startup-builder/market-research" },
  3: { label: "Design Your Solution",   href: "/founder/startup-builder/solution-design" },
  4: { label: "Build Your Business Model", href: "/founder/startup-builder/business-model" },
  5: { label: "View Your Readiness Score", href: "/founder/startup-builder/readiness-score" },
};

export default function DashboardHero() {
  const user = useLocalUser();
  const [progress] = useState(() => getBuilderProgress());
  const [completedCount] = useState(() => getCompletedStepCount()); 
  const [mounted, setMounted] = useState(false);

  const isNewUser = mounted && completedCount === 0;
  const nextStep = NEXT_STEP_MAP[completedCount] ?? NEXT_STEP_MAP[5];
  const firstName = user?.name?.split(" ")[0] ?? "Founder";

  return (
    <section className="overflow-hidden rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 md:p-8">
      <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

        {/* LEFT */}
        <div className="max-w-2xl">
          {/* BADGE */}
          <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${
            isNewUser
              ? "border border-amber-200 bg-amber-50 text-amber-700"
              : "border border-emerald-200 bg-emerald-50 text-emerald-700"
          }`}>
            {isNewUser ? "👋 Welcome to Startup Ka Mall" : "✅ Founder Workspace Active"}
          </div>

          {/* HEADING */}
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#16214A] md:text-5xl">
            {isNewUser ? (
              <>
                Let&apos;s Build Your
                <span className="block text-primary">Startup Together</span>
              </>
            ) : (
              <>
                Welcome back,
                <span className="block text-primary">{firstName}</span>
              </>
            )}
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-xl leading-relaxed text-slate-500">
            {isNewUser
              ? "Start by completing the Startup Builder — it takes less than 10 minutes and gives you a personalized readiness score."
              : `You've completed ${completedCount} of 5 builder modules. Keep going to improve your investor readiness score.`
            }
          </p>

          {/* NEXT STEP CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={nextStep.href}
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              <Rocket className="h-4 w-4" />
              {isNewUser ? "Start Startup Builder" : `Continue — ${nextStep.label}`}
              <ArrowRight className="h-4 w-4" />
            </Link>

            {!isNewUser && (
              <Link
                href="/founder/startup-builder"
                className="rounded-2xl border border-border/60 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-muted"
              >
                View All Modules
              </Link>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full rounded-[32px] border border-primary/20 bg-primary/10 p-6 xl:w-[340px]">
          {isNewUser ? (
            /* NEW USER — show checklist */
            <div>
              <p className="text-sm font-bold text-primary">
                🚀 Your Getting Started Checklist
              </p>
              <div className="mt-5 space-y-3">
                {[
                  { label: "Create your account",        done: true },
                  { label: "Complete Startup Builder",   done: false },
                  { label: "Get your Readiness Score",   done: false },
                  { label: "Browse Advisors",            done: false },
                  { label: "Attract Investor Interest",  done: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                      item.done ? "bg-emerald-500" : "border-2 border-slate-300 bg-white"
                    }`}>
                      {item.done && <CheckCircle2 className="h-4 w-4 text-white" />}
                    </div>
                    <p className={`text-sm font-medium ${
                      item.done ? "text-emerald-700 line-through" : "text-[#16214A]"
                    }`}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* RETURNING USER — show real progress */
            <div>
              <p className="text-sm font-semibold text-[#6B6B6B]">
                Builder Progress
              </p>
              <h2 className="mt-4 text-6xl font-black tracking-tight text-[#16214A]">
                {progress}%
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                {completedCount} of 5 modules completed
              </p>
              <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-5 space-y-2">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Next Step
                </p>
                <Link
                  href={nextStep.href}
                  className="flex items-center justify-between rounded-2xl border border-primary/20 bg-white px-4 py-3 text-sm font-semibold text-primary transition hover:bg-primary/5"
                >
                  {nextStep.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}