"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { useParams } from "next/navigation";

import {
  ArrowLeft,
  CalendarDays,
  GraduationCap,
  Users,
} from "lucide-react";

import { getPrograms } from "@/lib/api";

import { Program } from "@/types/program";

export default function ProgramDetailsPage() {
  const params = useParams();

  const [program, setProgram] =
    useState<Program | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadProgram() {
      try {
        const programs =
          await getPrograms();

        const matchedProgram =
          programs.find(
            (item: Program) =>
              item.id === params.id
          );

        setProgram(
          matchedProgram || null
        );
      } catch (error) {
        console.error(
          "Failed to load program",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    if (params?.id) {
      loadProgram();
    }
  }, [params?.id]);

  /* LOADING */
  if (loading) {
    return (
      <main className="min-h-screen bg-[#f8fbff]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

          <div className="h-[320px] animate-pulse rounded-[32px] bg-[#F7F4EE]/95" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {[1, 2, 3].map(
              (item) => (
                <div
                  key={item}
                  className="h-[180px] animate-pulse rounded-[32px] bg-[#F7F4EE]/95"
                />
              )
            )}

          </div>

          <div className="h-[240px] animate-pulse rounded-[32px] bg-[#F7F4EE]/95" />

        </div>
      </main>
    );
  }

  /* NOT FOUND */
  if (!program) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8fbff] px-4">

        <div className="w-full max-w-2xl rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-10 text-center shadow-sm">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50">
            <GraduationCap className="h-10 w-10 text-red-500" />
          </div>

          <h1 className="mt-8 text-4xl font-black tracking-tight text-[#16214A]">
            Program Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-500">
            The program you are trying to
            access does not exist or may
            have been removed.
          </p>

          <Link
            href="/founder/programs"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Programs
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fbff]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

        {/* BACK */}
        <div>
          <Link
            href="/founder/programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#16214A]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Programs
          </Link>
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[36px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm md:p-8 lg:p-10">

          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-60" />

          <div className="relative z-10">

            <div className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-xs font-semibold text-sky-700">
              {program.category}
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-[#16214A] md:text-5xl">
              {program.title}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">
              {program.description}
            </p>

            {/* META */}
            <div className="mt-8 flex flex-wrap gap-4">

              <div className="flex items-center gap-2 rounded-2xl border border-border/60 bg-slate-50 px-4 py-3">
                <CalendarDays className="h-4 w-4 text-sky-500" />

                <span className="text-sm font-semibold text-slate-700">
                  {program.duration}
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-border/60 bg-slate-50 px-4 py-3">
                <GraduationCap className="h-4 w-4 text-cyan-500" />

                <span className="text-sm font-semibold text-slate-700">
                  {program.level}
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-border/60 bg-slate-50 px-4 py-3">
                <Users className="h-4 w-4 text-emerald-500" />

                <span className="text-sm font-semibold text-slate-700">
                  {
                    program.founderCount
                  }{" "}
                  Founders
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">

            <p className="text-sm text-slate-500">
              Program Duration
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#16214A]">
              {program.duration}
            </h2>

          </div>

          <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">

            <p className="text-sm text-slate-500">
              Learning Mode
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#16214A]">
              {program.mode}
            </h2>

          </div>

          <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">

            <p className="text-sm text-slate-500">
              Mentorship Access
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#16214A]">
              {
                program.mentorCount
              }{" "}
              Mentors
            </h2>

          </div>

        </section>

        {/* CTA */}
        <section className="relative overflow-hidden rounded-[36px] border border-sky-100 bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 p-8 shadow-sm md:p-10">

          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-200 blur-3xl opacity-40" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h2 className="text-4xl font-black tracking-tight text-[#16214A]">
                Ready To Join?
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-500">
                Accelerate your startup
                journey through structured
                founder execution systems,
                mentorship and guided
                startup growth.
              </p>

            </div>

            <div className="flex flex-col gap-4 sm:flex-row">

              <button className="rounded-2xl bg-primary px-7 py-4 font-semibold text-white transition hover:opacity-90">
                Join Program
              </button>

              <Link
                href="/founder/startup-builder"
                className="rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-7 py-4 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Startup Builder
              </Link>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}