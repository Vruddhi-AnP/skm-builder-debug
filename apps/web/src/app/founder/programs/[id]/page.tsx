"use client";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ProgramDetailsPage() {
  const router = useRouter();

  const params = useParams();

  const programs: any = {
    "startup-launchpad": {
      title: "Startup Launchpad",
      category: "MVP Program",
      duration: "6 Weeks",
      stage: "Early Stage",
      description:
        "Structured startup launch program helping founders validate ideas, build MVPs and structure startup execution systems.",
      support: [
        "Startup Validation",
        "MVP Planning",
        "Go-To-Market",
      ],
    },

    "fundraising-accelerator": {
      title:
        "Fundraising Accelerator",
      category:
        "Fundraising Program",
      duration: "4 Weeks",
      stage: "Seed Stage",
      description:
        "Investor readiness and fundraising strategy system focused on pitch decks, investor communication and startup positioning.",
      support: [
        "Pitch Deck",
        "Investor Readiness",
        "Fundraising",
      ],
    },

    "growth-engine": {
      title: "Growth Engine",
      category: "Growth Program",
      duration: "8 Weeks",
      stage: "Scaling Stage",
      description:
        "Growth-focused startup program for scaling startups focused on acquisition, branding and founder-led growth systems.",
      support: [
        "Growth",
        "Branding",
        "Acquisition",
      ],
    },

    "tech-execution-system": {
      title:
        "Tech Execution System",
      category: "Tech Program",
      duration: "5 Weeks",
      stage: "Product Stage",
      description:
        "Execution framework for startups building scalable product and technology ecosystems.",
      support: [
        "Tech",
        "Product",
        "Execution",
      ],
    },
  };

  const program =
    programs[
      params.id as keyof typeof programs
    ];

  if (!program) {
    return (
      <main className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">
        <div className="bg-white rounded-[32px] border border-slate-200 p-10 text-center">
          <h1 className="text-4xl font-black text-slate-900">
            Program Not Found
          </h1>

          <button
            onClick={() =>
              router.push(
                "/founder/programs"
              )
            }
            className="mt-8 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white px-7 py-4 rounded-2xl font-semibold"
          >
            Back To Programs
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-8">

        {/* HERO */}
        <section className="relative overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] shadow-[0_15px_60px_rgba(99,102,241,0.12)] p-6 md:p-8 lg:p-10">

          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-200 rounded-full blur-3xl opacity-25" />

          <div className="relative z-10">

            <div className="inline-flex px-4 py-2 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-xs font-semibold mb-5">
              {program.category}
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              {program.title}
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mt-6 max-w-3xl">
              {program.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              {program.support.map(
                (
                  item: string,
                  index: number
                ) => (
                  <button
                    key={index}
                    className="px-4 py-2 rounded-2xl bg-violet-50 text-violet-700 text-sm border border-violet-100 font-medium"
                  >
                    {item}
                  </button>
                )
              )}

            </div>

          </div>

        </section>

        {/* STATS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="rounded-[32px] border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">
              Program Duration
            </p>

            <h2 className="text-3xl font-black text-slate-900 mt-3">
              {program.duration}
            </h2>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">
              Startup Stage
            </p>

            <h2 className="text-3xl font-black text-slate-900 mt-3">
              {program.stage}
            </h2>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">
              Founder Support
            </p>

            <h2 className="text-3xl font-black text-slate-900 mt-3">
              1:1 Mentorship
            </h2>
          </div>

        </section>

        {/* CTA */}
        <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-violet-50 via-indigo-50 to-cyan-50 border border-white/50 p-6 md:p-8 shadow-sm">

          <div className="absolute top-0 right-0 w-72 h-72 bg-violet-200 rounded-full blur-3xl opacity-20" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div>

              <h2 className="text-3xl font-black text-slate-900">
                Ready To Join?
              </h2>

              <p className="text-slate-500 mt-4 leading-relaxed max-w-2xl">
                Start building your startup
                roadmap and execution systems
                through structured founder
                programs and mentorship.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">

              <button
                onClick={() =>
                  router.push(
                    "/founder/startup-builder"
                  )
                }
                className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white px-7 py-4 rounded-2xl font-semibold"
              >
                Enroll Program
              </button>

              <button
                onClick={() =>
                  router.push(
                    "/founder/programs"
                  )
                }
                className="border border-violet-100 bg-white text-slate-700 px-7 py-4 rounded-2xl hover:bg-violet-50 transition font-semibold"
              >
                Back To Programs
              </button>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}