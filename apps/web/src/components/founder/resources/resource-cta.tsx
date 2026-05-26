"use client";

export default function ResourceCTA() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-sky-100 bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 p-8 shadow-sm md:p-10">

      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-200 blur-3xl opacity-40" />

      <div className="relative z-10 text-center">

        <div className="inline-flex items-center rounded-full border border-white bg-[#F7F4EE]/95/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
          Founder Resource Library
        </div>

        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black tracking-tight text-[#16214A]">
          Access Founder Knowledge,
          Systems & Startup Frameworks
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500">
          Discover actionable startup
          playbooks, fundraising systems,
          validation frameworks and growth
          execution resources.
        </p>

        <button className="mt-8 rounded-2xl bg-primary px-7 py-4 font-semibold text-white transition hover:opacity-90">
          Explore Startup Resources
        </button>

      </div>
    </section>
  );
}