"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { useParams } from "next/navigation";

import {
  ArrowLeft,
  Briefcase,
  Building2,
  CircleDollarSign,
} from "lucide-react";

import { getInvestors } from "@/lib/api";

import { Investor } from "@/types/investor";

export default function InvestorProfilePage() {
  const params = useParams();

  const [investor, setInvestor] =
    useState<Investor | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadInvestor() {
      try {
        const investors =
          await getInvestors();

        const matchedInvestor =
          investors.find(
            (item: Investor) =>
              item.id === params.id
          );

        setInvestor(
          matchedInvestor || null
        );
      } catch (error) {
        console.error(
          "Failed to load investor",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    if (params?.id) {
      loadInvestor();
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
  if (!investor) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8fbff] px-4">

        <div className="w-full max-w-2xl rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-10 text-center shadow-sm">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50">
            <Building2 className="h-10 w-10 text-red-500" />
          </div>

          <h1 className="mt-8 text-4xl font-black tracking-tight text-[#16214A]">
            Investor Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-500">
            The investor profile you are
            trying to access does not
            exist or may have been
            removed.
          </p>

          <Link
            href="/founder/investors"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Investors
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
            href="/founder/investors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#16214A]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Investors
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
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-[28px] bg-linear-to-br from-cyan-500 via-sky-500 to-blue-500 text-4xl font-black text-white shadow-[0_20px_60px_rgba(14,165,233,0.25)]">
                {investor.fullName
                  ?.charAt(0)
                  ?.toUpperCase()}
              </div>

              {/* INFO */}
              <div>

                <div className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
                  {
                    investor.availabilityStatus
                  }
                </div>

                <h1 className="mt-5 text-4xl font-black tracking-tight text-[#16214A] md:text-5xl">
                  {investor.fullName}
                </h1>

                <p className="mt-3 text-lg text-slate-500">
                  {investor.firmName}
                </p>

                {/* TAGS */}
                <div className="mt-6 flex flex-wrap gap-3">

                  {investor.industries.map(
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
                    <Briefcase className="h-4 w-4 text-cyan-500" />

                    <span className="text-sm font-semibold text-slate-700">
                      {
                        investor.investmentStage
                      }
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-2xl border border-border/60 bg-slate-50 px-4 py-3">
                    <CircleDollarSign className="h-4 w-4 text-emerald-500" />

                    <span className="text-sm font-semibold text-slate-700">
                      {
                        investor.ticketSize
                      }
                    </span>
                  </div>

                </div>

              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full space-y-4 xl:w-[320px]">

              <button className="w-full rounded-2xl bg-primary px-6 py-4 font-semibold text-white transition hover:opacity-90">
                Connect Investor
              </button>

              <button className="w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-50">
                Funding Resources
              </button>

              <button className="w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-50">
                Startup Readiness
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
                Investor Overview
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                {investor.fullName} actively
                supports startups aligned
                with scalable execution,
                long-term growth and strong
                founder-market fit. This
                profile architecture is now
                backend-ready for future
                dynamic investor data.
              </p>

            </div>

            {/* FUNDING INFO */}
            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm md:p-8">

              <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                Funding Focus
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div className="rounded-3xl border border-border/60 bg-slate-50 p-6">

                  <p className="text-sm text-slate-500">
                    Investment Stage
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-[#16214A]">
                    {
                      investor.investmentStage
                    }
                  </h3>

                </div>

                <div className="rounded-3xl border border-border/60 bg-slate-50 p-6">

                  <p className="text-sm text-slate-500">
                    Ticket Size
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-[#16214A]">
                    {
                      investor.ticketSize
                    }
                  </h3>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* PORTFOLIO */}
            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">

              <h2 className="text-2xl font-black text-[#16214A]">
                Portfolio Activity
              </h2>

              <div className="mt-6 rounded-3xl border border-border/60 bg-slate-50 p-5">

                <p className="text-sm text-slate-500">
                  Startup Portfolio
                </p>

                <h3 className="mt-3 text-2xl font-black text-[#16214A]">
                  {
                    investor.portfolioCount
                  }
                </h3>

              </div>

            </div>

            {/* SUPPORT */}
            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">

              <h2 className="text-2xl font-black text-[#16214A]">
                Founder Funding Support
              </h2>

              <p className="mt-4 leading-8 text-slate-500">
                Improve investor readiness,
                strengthen your startup
                positioning and prepare for
                fundraising conversations.
              </p>

              <button className="mt-6 w-full rounded-2xl border border-border/60 bg-slate-50 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
                Explore Founder Resources
              </button>

            </div>

          </div>
        </section>
      </div>
    </main>
  );
}