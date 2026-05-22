"use client";

import { useRouter } from "next/navigation";

export default function ProgramHero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden rounded-[36px] border border-border/60 bg-white p-6 shadow-sm md:p-8 lg:p-10">

      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-60" />

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sky-100 blur-3xl opacity-60" />

      <div className="relative z-10 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

        {/* LEFT */}
        <div className="max-w-3xl">

          <div className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-xs font-semibold text-sky-700 sm:text-sm">
            Founder Acceleration Programs
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-800 md:text-5xl lg:text-6xl">
            Structured Programs For

            <span className="mt-2 block bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Startup Growth
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
            Explore founder-focused
            startup programs designed to
            improve execution, validation,
            fundraising and startup growth.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <button
              onClick={() =>
                router.push(
                  "/founder/startup-builder"
                )
              }
              className="rounded-2xl bg-primary px-6 py-4 font-semibold text-white transition hover:opacity-90"
            >
              Build Startup
            </button>

            <button
              onClick={() =>
                router.push(
                  "/founder/resources"
                )
              }
              className="rounded-2xl border border-border/60 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Explore Resources
            </button>

          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-4 xl:w-[360px]">

          {[
            {
              label: "Programs",
              value: "35+",
            },

            {
              label: "Mentors",
              value: "120+",
            },

            {
              label: "Founders",
              value: "3K+",
            },

            {
              label: "Success",
              value: "94%",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-border/60 bg-slate-50 p-5"
            >
              <p className="text-sm text-slate-500">
                {item.label}
              </p>

              <h3 className="mt-2 text-3xl font-black text-slate-800">
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}