"use client";

import Link from "next/link";

import { Program } from "@/types/program";

interface Props {
  program: Program;
}

export default function ProgramCard({
  program,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(14,165,233,0.12)]">

      <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-cyan-100 blur-3xl opacity-40" />

      <div className="relative z-10">

        {/* TOP */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

          <div>

            <div className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
              {program.category}
            </div>

            <Link
              href={`/founder/programs/${program.id}`}
              className="mt-5 block text-3xl font-black tracking-tight text-[#16214A] transition hover:text-sky-600"
            >
              {program.title}
            </Link>

            <p className="mt-4 leading-7 text-slate-500">
              {program.description}
            </p>

          </div>

          <div className="inline-flex h-fit items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            {
              program.availabilityStatus
            }
          </div>
        </div>

        {/* STATS */}
        <div className="mt-8 grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-slate-50 p-4">

            <p className="text-xs text-slate-500">
              Duration
            </p>

            <h3 className="mt-2 text-lg font-black text-[#16214A]">
              {program.duration}
            </h3>

          </div>

          <div className="rounded-2xl bg-slate-50 p-4">

            <p className="text-xs text-slate-500">
              Mode
            </p>

            <h3 className="mt-2 text-lg font-black text-[#16214A]">
              {program.mode}
            </h3>

          </div>

        </div>

        {/* LEVEL */}
        <div className="mt-6">

          <p className="text-sm text-slate-500">
            Program Level
          </p>

          <p className="mt-2 text-sm font-medium text-slate-700">
            {program.level}
          </p>

        </div>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <button className="flex-1 rounded-2xl bg-primary px-5 py-3.5 font-semibold text-white transition hover:opacity-90">
            Join Program
          </button>

          <Link
            href={`/founder/programs/${program.id}`}
            className="flex-1 rounded-2xl border border-border/60 bg-slate-50 px-5 py-3.5 text-center font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            View Details
          </Link>

        </div>
      </div>
    </div>
  );
}