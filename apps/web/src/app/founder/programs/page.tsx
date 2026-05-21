"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProgramsPage() {
  const router = useRouter();

  const [search, setSearch] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All Programs");

  const programs = [
    {
      id: "startup-launchpad",
      title: "Startup Launchpad",
      category: "MVP",
      stage: "Early Stage",
      duration: "6 Weeks",
      support:
        "MVP Planning • Validation • GTM",
      description:
        "Structured startup launch program for early-stage founders building their MVP and startup roadmap.",
    },

    {
      id: "fundraising-accelerator",
      title: "Fundraising Accelerator",
      category: "Fundraising",
      stage: "Seed Stage",
      duration: "4 Weeks",
      support:
        "Pitch Deck • Investor Readiness",
      description:
        "Investor preparation program focused on fundraising strategy, startup positioning and pitch readiness.",
    },

    {
      id: "growth-engine",
      title: "Growth Engine",
      category: "Growth",
      stage: "Scaling Stage",
      duration: "8 Weeks",
      support:
        "Growth • Branding • Acquisition",
      description:
        "Startup growth program designed for scaling startups focused on branding and user acquisition.",
    },

    {
      id: "tech-execution-system",
      title: "Tech Execution System",
      category: "Tech",
      stage: "Product Stage",
      duration: "5 Weeks",
      support:
        "Product • Tech • Execution",
      description:
        "Execution-focused startup system for founders building scalable tech and product ecosystems.",
    },
  ];

  const filteredPrograms =
    useMemo(() => {
      return programs.filter(
        (program) => {
          const matchesSearch =
            program.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            program.support
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesCategory =
            selectedCategory ===
              "All Programs" ||
            program.category ===
              selectedCategory;

          return (
            matchesSearch &&
            matchesCategory
          );
        }
      );
    }, [search, selectedCategory]);

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-8">

        {/* HERO */}
        <div className="relative overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] shadow-[0_15px_60px_rgba(99,102,241,0.12)] p-6 md:p-8 lg:p-10">

          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-200 rounded-full blur-3xl opacity-25" />

          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-25" />

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

            {/* LEFT */}
            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-xs sm:text-sm font-semibold mb-5">
                Founder Growth Programs
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Startup Growth

                <span className="block bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  Programs & Systems
                </span>

              </h1>

              <p className="text-slate-500 text-sm md:text-base mt-5 leading-relaxed max-w-2xl">
                Explore structured founder
                programs, startup execution
                systems and growth frameworks
                designed to help startups scale
                faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">

                <button
                  onClick={() =>
                    router.push(
                      "/founder/startup-builder"
                    )
                  }
                  className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white px-6 py-3.5 rounded-2xl hover:scale-[1.02] transition font-semibold shadow-[0_10px_40px_rgba(99,102,241,0.35)]"
                >
                  Startup Builder
                </button>

                <button
                  onClick={() =>
                    router.push(
                      "/founder/resources"
                    )
                  }
                  className="border border-violet-100 bg-white/80 text-slate-700 px-6 py-3.5 rounded-2xl hover:bg-violet-50 transition font-semibold"
                >
                  Explore Resources
                </button>

              </div>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 w-full xl:w-85">

              {[
                {
                  label: "Programs",
                  value: "25+",
                },
                {
                  label: "Founders",
                  value: "3K+",
                },
                {
                  label: "Success",
                  value: "91%",
                },
                {
                  label: "Mentors",
                  value: "120+",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-2xl p-5 shadow-sm"
                >

                  <p className="text-sm text-slate-500 mb-2">
                    {item.label}
                  </p>

                  <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    {item.value}
                  </h2>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* FILTERS */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] p-5 md:p-6 shadow-sm">

          <div className="flex flex-col xl:flex-row gap-4">

            <div className="flex-1">

              <input
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                placeholder="Search programs or systems..."
                className="w-full border border-slate-200 bg-white/80 rounded-2xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-200 transition"
              />

            </div>

            <div className="xl:w-60">

              <select
                value={
                  selectedCategory
                }
                onChange={(e) =>
                  setSelectedCategory(
                    e.target.value
                  )
                }
                className="w-full border border-slate-200 bg-white/80 rounded-2xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-200 transition"
              >

                <option>
                  All Programs
                </option>

                <option>
                  MVP
                </option>

                <option>
                  Fundraising
                </option>

                <option>
                  Growth
                </option>

                <option>
                  Tech
                </option>

              </select>

            </div>

            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory(
                  "All Programs"
                );
              }}
              className="border border-violet-100 bg-white/80 text-slate-700 px-6 py-3.5 rounded-2xl hover:bg-violet-50 transition font-semibold"
            >
              Reset
            </button>

          </div>

        </div>

        {/* PROGRAMS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {filteredPrograms.map(
            (
              program,
              index
            ) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] p-6 md:p-7 shadow-sm hover:shadow-[0_15px_50px_rgba(99,102,241,0.12)] hover:-translate-y-1 transition-all duration-300"
              >

                <div className="absolute top-0 right-0 w-40 h-40 bg-violet-100 rounded-full blur-3xl opacity-30" />

                <div className="relative z-10">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <div className="inline-flex px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-xs font-semibold mb-4">
                        {program.category}
                      </div>

                      <button
                        onClick={() =>
                          router.push(
                            `/founder/programs/${program.id}`
                          )
                        }
                        className="text-3xl font-bold tracking-tight text-slate-900 hover:text-violet-600 transition text-left"
                      >
                        {program.title}
                      </button>

                    </div>

                    <div className="rounded-2xl bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600">
                      {program.duration}
                    </div>

                  </div>

                  <p className="text-slate-500 leading-relaxed mt-5">
                    {program.description}
                  </p>

                  {/* SUPPORT */}
                  <div className="flex flex-wrap gap-2 mt-6">

                    {program.support
                      .split("•")
                      .map(
                        (
                          item,
                          i
                        ) => (
                          <button
                            key={i}
                            className="px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 text-xs border border-violet-100 font-medium hover:bg-violet-100 transition"
                          >
                            {item.trim()}
                          </button>
                        )
                      )}

                  </div>

                  {/* STAGE */}
                  <div className="mt-6 rounded-2xl bg-slate-50 p-4">

                    <p className="text-xs text-slate-500">
                      Startup Stage
                    </p>

                    <h3 className="text-lg font-bold text-slate-900 mt-2">
                      {program.stage}
                    </h3>

                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-8">

                    <button
                      onClick={() =>
                        router.push(
                          "/founder/startup-builder"
                        )
                      }
                      className="flex-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white px-5 py-3.5 rounded-2xl hover:scale-[1.01] transition font-semibold shadow-lg shadow-violet-500/25"
                    >
                      Enroll Program
                    </button>

                    <button
                      onClick={() =>
                        router.push(
                          `/founder/programs/${program.id}`
                        )
                      }
                      className="flex-1 border border-violet-100 bg-white/80 text-slate-700 px-5 py-3.5 rounded-2xl hover:bg-violet-50 transition font-semibold"
                    >
                      View Details
                    </button>

                  </div>

                </div>

              </div>
            )
          )}

        </div>

      </div>
    </main>
  );
}