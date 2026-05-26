"use client";

import Link from "next/link";

import { Investor } from "@/types/investor";

interface Props {
  investor: Investor;
}

export default function InvestorCard({
  investor,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(14,165,233,0.12)]">

      <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-cyan-100 blur-3xl opacity-40" />

      <div className="relative z-10">

        {/* TOP */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-500 text-xl font-black text-white">
              {investor.fullName
                .charAt(0)
                .toUpperCase()}
            </div>

            <div>

              <Link
                href={`/founder/investors/${investor.id}`}
                className="text-2xl font-black tracking-tight text-[#16214A] transition hover:text-sky-600"
              >
                {investor.fullName}
              </Link>

              <p className="mt-1 text-sm text-slate-500">
                {investor.firmName}
              </p>

            </div>
          </div>

          <div className="inline-flex h-fit items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            {
              investor.availabilityStatus
            }
          </div>
        </div>

        {/* INDUSTRIES */}
        <div className="mt-8">

          <p className="mb-3 text-sm text-slate-500">
            Industries
          </p>

          <div className="flex flex-wrap gap-2">

            {investor.industries.map(
              (item, index) => (
                <div
                  key={index}
                  className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-700"
                >
                  {item}
                </div>
              )
            )}

          </div>
        </div>

        {/* STATS */}
        <div className="mt-8 grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-slate-50 p-4">

            <p className="text-xs text-slate-500">
              Investment Stage
            </p>

            <h3 className="mt-2 text-lg font-black text-[#16214A]">
              {
                investor.investmentStage
              }
            </h3>

          </div>

          <div className="rounded-2xl bg-slate-50 p-4">

            <p className="text-xs text-slate-500">
              Ticket Size
            </p>

            <h3 className="mt-2 text-lg font-black text-[#16214A]">
              {
                investor.ticketSize
              }
            </h3>

          </div>
        </div>

        {/* PORTFOLIO */}
        <div className="mt-6">

          <p className="text-sm text-slate-500">
            Portfolio
          </p>

          <p className="mt-2 text-sm font-medium text-slate-700">
            {
              investor.portfolioCount
            }
          </p>

        </div>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <button className="flex-1 rounded-2xl bg-primary px-5 py-3.5 font-semibold text-white transition hover:opacity-90">
            Connect Investor
          </button>

          <Link
            href={`/founder/investors/${investor.id}`}
            className="flex-1 rounded-2xl border border-border/60 bg-slate-50 px-5 py-3.5 text-center font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            View Profile
          </Link>

        </div>
      </div>
    </div>
  );
}