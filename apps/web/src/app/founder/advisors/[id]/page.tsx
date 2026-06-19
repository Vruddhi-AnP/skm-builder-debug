"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { useParams } from "next/navigation";

import {
  ArrowLeft,
  Calendar,
  Clock3,
  MessageSquare,
  Star,
  Users,
} from "lucide-react";

import { getAdvisors } from "@/lib/api";

import { Advisor } from "@/types/advisor";

export default function AdvisorProfilePage() {
  const params = useParams();

  const [advisor, setAdvisor] =
    useState<Advisor | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadAdvisor() {
      try {
        const advisors =
          await getAdvisors();

        const matchedAdvisor =
          advisors.find(
            (item: Advisor) =>
              item.id === params.id
          );

        setAdvisor(
          matchedAdvisor || null
        );
      } catch (error) {
        console.error(
          "Failed to load advisor",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    if (params?.id) {
      loadAdvisor();
    }
  }, [params?.id]);

  /* LOADING */
  if (loading) {
    return (
      <main className="min-h-screen bg-[#f8fbff]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="h-80 animate-pulse rounded-[32px] bg-[#F7F4EE]/95" />

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2 space-y-6">
              <div className="h-60 animate-pulse rounded-[32px] bg-[#F7F4EE]/95" />

              <div className="h-55 animate-pulse rounded-[32px] bg-[#F7F4EE]/95" />
            </div>

            <div className="space-y-6">
              <div className="h-55 animate-pulse rounded-[32px] bg-[#F7F4EE]/95" />

              <div className="h-50 animate-pulse rounded-[32px] bg-[#F7F4EE]/95" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  /* NOT FOUND */
  if (!advisor) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8fbff] px-4">
        <div className="w-full max-w-2xl rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-10 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50">
            <Users className="h-10 w-10 text-red-500" />
          </div>

          <h1 className="mt-8 text-4xl font-black tracking-tight text-[#16214A]">
            Advisor Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-500">
            The advisor profile you are
            trying to access does not
            exist or may have been
            removed.
          </p>

          <Link
            href="/founder/advisors"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Advisors
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fbff]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

        {/* BACK */}
        <div>
          <Link
            href="/founder/advisors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#16214A]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Advisors
          </Link>
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[36px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm md:p-8 lg:p-10">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-60" />

          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sky-100 blur-3xl opacity-60" />

          <div className="relative z-10 flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">

            {/* LEFT */}
            <div className="flex flex-col gap-6 md:flex-row">
              {/* AVATAR */}
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-[28px] bg-linear-to-br from-sky-500 via-cyan-500 to-blue-500 text-4xl font-black text-white shadow-[0_20px_60px_rgba(14,165,233,0.25)]">
                {advisor.fullName
                  ?.charAt(0)
                  ?.toUpperCase()}
              </div>

              {/* INFO */}
              <div>
                <div className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
                  {
                    advisor.availabilityStatus
                  }
                </div>

                <h1 className="mt-5 text-4xl font-black tracking-tight text-[#16214A] md:text-5xl">
                  {advisor.fullName}
                </h1>

                <p className="mt-3 text-lg text-slate-500">
                  {advisor.headline}
                </p>

                  <div className="mt-5 flex flex-wrap gap-2">
  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
    92% Match
  </span>

  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
    ✓ Startup Stage Match
  </span>

  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
    ✓ Industry Match
  </span>

  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
    ✓ Execution Support
  </span>
</div>

                {/* TAGS */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {advisor.expertise.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>

                {/* META */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 rounded-2xl border border-border/60 bg-slate-50 px-4 py-3">
                    <Star className="h-4 w-4 text-yellow-500" />

                    <span className="text-sm font-semibold text-slate-700">
                      {advisor.rating} Rating
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-2xl border border-border/60 bg-slate-50 px-4 py-3">
                    <MessageSquare className="h-4 w-4 text-sky-500" />

                    <span className="text-sm font-semibold text-slate-700">
                      {
                        advisor.totalSessions
                      }{" "}
                      Sessions
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-2xl border border-border/60 bg-slate-50 px-4 py-3">
                    <Users className="h-4 w-4 text-cyan-500" />

                    <span className="text-sm font-semibold text-slate-700">
                      {
                        advisor.startupCount
                      }{" "}
                      Startups
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full space-y-4 xl:w-[320px]">
              <button className="w-full rounded-2xl bg-primary px-6 py-4 font-semibold text-white transition hover:opacity-90">
                Book Consultation
              </button>

              <button className="w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-50">
                Message Advisor
              </button>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">

          {/* LEFT */}
          <div className="xl:col-span-2 space-y-6">

            {/* ABOUT */}
            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                Why This Advisor Fits Your Startup
              </h2>

            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                About Advisor
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                {advisor.headline}
              </p>
            </div>

              <p className="mt-5 leading-8 text-slate-500">
                Based on your Startup Builder responses, this advisor aligns with your current startup stage, execution priorities and growth objectives.

                Their expertise in {advisor.expertise.join(", ")} can help accelerate validation, execution and fundraising readiness.
              </p>
            </div>

          <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
  <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
    Best For
  </h2>

  <div className="mt-6 flex flex-wrap gap-3">
    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
      Idea Validation
    </span>

    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
      MVP Planning
    </span>

    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
      Go-To-Market Strategy
    </span>

    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
      Investor Readiness
    </span>
  </div>
</div>

            {/* EXPERIENCE */}
            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                Mentorship Experience
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="rounded-3xl border border-border/60 bg-slate-50 p-6">
                  <p className="text-sm text-slate-500">
                    Experience
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-[#16214A]">
                    {
                      advisor.yearsExperience
                    }+
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Years
                  </p>
                </div>

                <div className="rounded-3xl border border-border/60 bg-slate-50 p-6">
                  <p className="text-sm text-slate-500">
                    Sessions
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-[#16214A]">
                    {
                      advisor.totalSessions
                    }
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Completed
                  </p>
                </div>

                <div className="rounded-3xl border border-border/60 bg-slate-50 p-6">
                  <p className="text-sm text-slate-500">
                    Startups
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-[#16214A]">
                    {
                      advisor.startupCount
                    }
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Supported
                  </p>
                </div>
              </div>
            </div>

          <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm md:p-8">
  <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
    What Founders Usually Achieve
  </h2>

  <div className="mt-6 space-y-4">

    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
      <span className="text-emerald-500">✓</span>
      <span className="font-medium text-slate-700">
        Validate Startup Idea Faster
      </span>
    </div>

    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
      <span className="text-emerald-500">✓</span>
      <span className="font-medium text-slate-700">
        Improve Go-To-Market Strategy
      </span>
    </div>

    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
      <span className="text-emerald-500">✓</span>
      <span className="font-medium text-slate-700">
        Build Investor Readiness
      </span>
    </div>

    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
      <span className="text-emerald-500">✓</span>
      <span className="font-medium text-slate-700">
        Avoid Early Execution Mistakes
      </span>
    </div>

    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
      <span className="text-emerald-500">✓</span>
      <span className="font-medium text-slate-700">
        Accelerate Startup Growth
      </span>
    </div>

  </div>
</div>

            {/* FOUNDER CTA */}
            <div className="relative overflow-hidden rounded-[32px] border border-sky-100 bg-linear-to-br from-sky-50 via-cyan-50 to-blue-50 p-6 shadow-sm md:p-8">
              <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-200 blur-3xl opacity-40" />

              <div className="relative z-10">
                <div className="inline-flex items-center rounded-full border border-white bg-[#F7F4EE]/95/80 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                  Founder Mentorship
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-tight text-[#16214A]">
                  Build Faster With Expert
                  Startup Guidance
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-slate-500">
                  Work closely with
                  experienced startup
                  advisors to validate ideas,
                  improve execution and scale
                  your startup journey with
                  structured mentorship.
                </p>

                <button className="mt-8 rounded-2xl bg-primary px-6 py-4 font-semibold text-white transition hover:opacity-90">
                  Book Mentorship Session
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* AVAILABILITY */}
            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
              <h2 className="text-2xl font-black text-[#16214A]">
                Session Availability
              </h2>

              <div className="mt-6 rounded-3xl border border-border/60 bg-slate-50 p-5">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="h-4 w-4" />
                  Next Available Session
                </div>

                <h3 className="mt-3 text-2xl font-black text-[#16214A]">
                  Available This Week
                </h3>

                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  <Clock3 className="h-4 w-4" />
                  Schedule a 1:1 Founder Strategy Session
                </div>
              </div>

              <button className="mt-6 w-full rounded-2xl bg-primary px-6 py-4 font-semibold text-white transition hover:opacity-90">
                Schedule Session
              </button>
            </div>

            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
  <h2 className="text-2xl font-black text-[#16214A]">
    Advisor Match Analysis
  </h2>

  <div className="mt-6 space-y-4">

    <div className="flex items-center justify-between">
      <span className="text-slate-600">
        Startup Stage Match
      </span>

      <span className="font-bold text-emerald-600">
        ✓
      </span>
    </div>

    <div className="flex items-center justify-between">
      <span className="text-slate-600">
        Industry Match
      </span>

      <span className="font-bold text-emerald-600">
        ✓
      </span>
    </div>

    <div className="flex items-center justify-between">
      <span className="text-slate-600">
        Execution Guidance
      </span>

      <span className="font-bold text-emerald-600">
        ✓
      </span>
    </div>

    <div className="flex items-center justify-between">
      <span className="text-slate-600">
        Fundraising Support
      </span>

      <span className="font-bold text-emerald-600">
        ✓
      </span>
    </div>

    <div className="mt-4 rounded-2xl bg-primary/10 p-4 text-center">
      <p className="text-xs uppercase tracking-wide text-slate-500">
        Overall Match
      </p>

      <p className="mt-2 text-3xl font-black text-primary">
        Highly Recommended
      </p>
    </div>

    <p className="mt-3 text-center text-xs text-slate-500">
      Based on your Startup Builder profile and execution goals
    </p>

  </div>
</div>

<div className="rounded-[32px] border border-primary/10 bg-primary/5 p-6 shadow-sm">
  <h2 className="text-2xl font-black text-[#16214A]">
    Recommended Next Step
  </h2>

  <p className="mt-4 text-sm leading-7 text-slate-600">
    Continue your founder journey with startup programs,
    investor visibility and ecosystem support.
  </p>

  <div className="mt-6 space-y-3">

    <Link
      href="/founder/programs"
      className="block w-full rounded-2xl bg-primary px-5 py-3 text-center font-semibold text-white"
    >
      Explore Programs
    </Link>

    <Link
      href="/founder/investors"
      className="block w-full rounded-2xl border border-border/60 bg-white px-5 py-3 text-center font-semibold text-slate-700"
    >
      Investor Visibility
    </Link>

  </div>
</div>

            {/* SUPPORT */}
            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
              <h2 className="text-2xl font-black text-[#16214A]">
                Startup Ka Mall Support
              </h2>

              <p className="mt-4 leading-8 text-slate-500">
                Need help selecting the right mentor, program,
                investor opportunity or startup resource?
                Our Startup Ka Mall team can guide your next step.
              </p>

              <button className="mt-6 w-full rounded-2xl border border-border/60 bg-slate-50 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}