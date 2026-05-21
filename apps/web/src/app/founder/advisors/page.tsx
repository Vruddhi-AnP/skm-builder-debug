"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdvisorsPage() {
  const router = useRouter();

  const [search, setSearch] =
    useState("");

  const [selectedExpertise, setSelectedExpertise] =
    useState("All Expertise");

  const advisors = [
    {
      id: "rahul-mehta",
      name: "Rahul Mehta",
      role: "Startup Strategy Advisor",
      expertise:
        "SaaS • GTM • Startup Validation",
      category: "Technology",
      experience:
        "12+ Years Experience",
      availability:
        "Available This Week",
    },
    {
      id: "priya-sharma",
      name: "Priya Sharma",
      role: "Fundraising Mentor",
      expertise:
        "Pitch Decks • Investor Readiness",
      category: "Fundraising",
      experience: "Ex-VC Partner",
      availability:
        "2 Slots Available",
    },
    {
      id: "aman-verma",
      name: "Aman Verma",
      role: "Product & MVP Expert",
      expertise:
        "Product Strategy • MVP Execution",
      category: "Product",
      experience:
        "Built 3 Startups",
      availability:
        "Available Tomorrow",
    },
    {
      id: "neha-kapoor",
      name: "Neha Kapoor",
      role: "Growth Advisor",
      expertise:
        "Growth • User Acquisition • Branding",
      category: "Growth",
      experience:
        "Startup Growth Consultant",
      availability:
        "Open for Consultation",
    },
  ];

  const filteredAdvisors =
    useMemo(() => {
      return advisors.filter(
        (advisor) => {
          const matchesSearch =
            advisor.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            advisor.role
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            advisor.expertise
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesCategory =
            selectedExpertise ===
              "All Expertise" ||
            advisor.category ===
              selectedExpertise;

          return (
            matchesSearch &&
            matchesCategory
          );
        }
      );
    }, [search, selectedExpertise]);

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-8">

        {/* HERO */}
        <div className="relative overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] shadow-[0_15px_60px_rgba(99,102,241,0.12)] p-6 md:p-8 lg:p-10">

          {/* BG */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-25 pointer-events-none" />

          <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-200 rounded-full blur-3xl opacity-25 pointer-events-none" />

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

            {/* LEFT */}
            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold mb-5">
                Founder Advisory Network
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Connect With

                <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                  Startup Advisors
                </span>

              </h1>

              <p className="text-slate-500 text-sm md:text-base mt-5 leading-relaxed max-w-2xl">
                Get strategic guidance from
                experienced startup mentors,
                operators and fundraising
                experts to accelerate your
                founder journey and execution
                clarity.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">

                <button
                  onClick={() =>
                    router.push(
                      "/founder/programs"
                    )
                  }
                  className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 text-white px-6 py-3.5 rounded-2xl hover:scale-[1.02] transition-all duration-300 font-semibold shadow-[0_10px_40px_rgba(99,102,241,0.35)]"
                >
                  Explore Programs
                </button>

                <button
                  onClick={() => {
                    const section =
                      document.getElementById(
                        "advisor-list"
                      );

                    section?.scrollIntoView({
                      behavior:
                        "smooth",
                    });
                  }}
                  className="border border-indigo-100 bg-white/80 backdrop-blur-xl text-slate-700 px-6 py-3.5 rounded-2xl hover:bg-indigo-50 transition-all duration-300 font-semibold"
                >
                  Browse Advisors
                </button>

              </div>

            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-4 w-full xl:w-85">

              {[
                {
                  label: "Advisors",
                  value: "120+",
                },
                {
                  label: "Sessions",
                  value: "850+",
                },
                {
                  label: "Startups",
                  value: "2.5K+",
                },
                {
                  label: "Rating",
                  value: "4.9",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-2xl p-5 shadow-sm"
                >

                  <p className="text-sm text-slate-500 mb-2">
                    {item.label}
                  </p>

                  <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
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

            {/* SEARCH */}
            <div className="flex-1">

              <input
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                placeholder="Search advisors, expertise or roles..."
                className="w-full border border-slate-200 bg-white/80 backdrop-blur-xl rounded-2xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-200 transition text-slate-700 placeholder:text-slate-400"
              />

            </div>

            {/* FILTER */}
            <div className="xl:w-60">

              <select
                value={
                  selectedExpertise
                }
                onChange={(e) =>
                  setSelectedExpertise(
                    e.target.value
                  )
                }
                className="w-full border border-slate-200 bg-white/80 backdrop-blur-xl rounded-2xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-200 transition text-slate-700"
              >

                <option>
                  All Expertise
                </option>

                <option>
                  Fundraising
                </option>

                <option>
                  Product
                </option>

                <option>
                  Growth
                </option>

                <option>
                  Technology
                </option>

              </select>

            </div>

            {/* RESET */}
            <button
              onClick={() => {
                setSearch("");
                setSelectedExpertise(
                  "All Expertise"
                );
              }}
              className="border border-indigo-100 bg-white/80 backdrop-blur-xl text-slate-700 px-6 py-3.5 rounded-2xl hover:bg-indigo-50 transition-all duration-300 font-semibold"
            >
              Reset
            </button>

          </div>

        </div>

        {/* LIST */}
        <div id="advisor-list">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">

            <div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Recommended Advisors
              </h2>

              <p className="text-sm text-slate-500 mt-2">
                Curated experts based on
                your startup stage and
                founder goals
              </p>

            </div>

            <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-2xl px-4 py-3 text-sm text-slate-600 w-fit shadow-sm">
              {
                filteredAdvisors.length
              }{" "}
              Advisors Found
            </div>

          </div>

          {/* EMPTY */}
          {filteredAdvisors.length ===
            0 && (
            <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] p-10 text-center shadow-sm">

              <h3 className="text-3xl font-bold text-slate-900 mb-3">
                No Advisors Found
              </h3>

              <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
                Try changing your search
                keywords or expertise
                filters to explore more
                startup advisors.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setSelectedExpertise(
                    "All Expertise"
                  );
                }}
                className="mt-6 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 text-white px-6 py-3.5 rounded-2xl hover:scale-[1.02] transition-all duration-300 font-semibold shadow-lg shadow-indigo-500/25"
              >
                Reset Filters
              </button>

            </div>
          )}

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {filteredAdvisors.map(
              (
                advisor,
                index
              ) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] p-6 md:p-7 shadow-sm hover:shadow-[0_15px_50px_rgba(99,102,241,0.12)] hover:-translate-y-1 transition-all duration-300"
                >

                  {/* GLOW */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-30" />

                  <div className="relative z-10">

                    {/* TOP */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-6">

                      <div className="flex items-center gap-4">

                        {/* AVATAR */}
                        <button
                          onClick={() =>
                            router.push(
                              `/founder/advisors/${advisor.id}`
                            )
                          }
                          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 flex items-center justify-center text-xl font-bold text-white shrink-0 shadow-lg shadow-indigo-500/25"
                        >
                          {advisor.name.charAt(
                            0
                          )}
                        </button>

                        {/* INFO */}
                        <div>

                          <button
                            onClick={() =>
                              router.push(
                                `/founder/advisors/${advisor.id}`
                              )
                            }
                            className="text-2xl font-bold tracking-tight text-slate-900 hover:text-indigo-600 transition"
                          >
                            {
                              advisor.name
                            }
                          </button>

                          <p className="text-sm text-slate-500 mt-1">
                            {
                              advisor.role
                            }
                          </p>

                        </div>

                      </div>

                      <button
                        onClick={() =>
                          router.push(
                            `/founder/advisors/${advisor.id}`
                          )
                        }
                        className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold h-fit hover:bg-emerald-100 transition"
                      >
                        {
                          advisor.availability
                        }
                      </button>

                    </div>

                    {/* DETAILS */}
                    <div className="space-y-5">

                      <div>

                        <p className="text-sm text-slate-500 mb-3">
                          Expertise
                        </p>

                        <div className="flex flex-wrap gap-2">

                          {advisor.expertise
                            .split("•")
                            .map(
                              (
                                item,
                                i
                              ) => (
                                <button
                                  key={i}
                                  onClick={() =>
                                    setSelectedExpertise(
                                      item.trim()
                                    )
                                  }
                                  className="px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs border border-indigo-100 font-medium hover:bg-indigo-100 transition"
                                >
                                  {item.trim()}
                                </button>
                              )
                            )}

                        </div>

                      </div>

                      <div>

                        <p className="text-sm text-slate-500 mb-2">
                          Experience
                        </p>

                        <p className="text-sm text-slate-700 leading-relaxed">
                          {
                            advisor.experience
                          }
                        </p>

                      </div>

                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-8">

                      <button
                        onClick={() =>
                          router.push(
                            "/founder/programs"
                          )
                        }
                        className="flex-1 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 text-white px-5 py-3.5 rounded-2xl hover:scale-[1.01] transition-all duration-300 font-semibold shadow-lg shadow-indigo-500/25"
                      >
                        Book Consultation
                      </button>

                      <button
                        onClick={() =>
                          router.push(
                            `/founder/advisors/${advisor.id}`
                          )
                        }
                        className="flex-1 border border-indigo-100 bg-white/80 backdrop-blur-xl text-slate-700 px-5 py-3.5 rounded-2xl hover:bg-indigo-50 transition-all duration-300 font-semibold"
                      >
                        View Profile
                      </button>

                    </div>

                  </div>

                </div>
              )
            )}

          </div>

        </div>

        {/* BOTTOM CTA */}
        <div className="relative overflow-hidden bg-gradient-to-r from-indigo-50 via-violet-50 to-cyan-50 border border-white/50 rounded-[32px] p-6 md:p-8 lg:p-10 shadow-sm">

          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-20" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div className="max-w-2xl">

              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 border border-white text-slate-700 text-xs font-semibold mb-4 shadow-sm">
                Premium Founder Support
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Need Dedicated Startup
                Guidance?
              </h2>

              <p className="text-slate-500 text-sm md:text-base mt-4 leading-relaxed">
                Unlock structured founder
                mentorship, execution
                systems, startup strategy
                reviews and investor
                preparation support.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">

              <button
                onClick={() =>
                  router.push(
                    "/founder/dashboard"
                  )
                }
                className="border border-indigo-100 bg-white/80 backdrop-blur-xl text-slate-700 px-6 py-4 rounded-2xl hover:bg-indigo-50 transition-all duration-300 font-semibold"
              >
                Back to Dashboard
              </button>

              <button
                onClick={() =>
                  router.push(
                    "/founder/programs"
                  )
                }
                className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 text-white px-7 py-4 rounded-2xl hover:scale-[1.02] transition-all duration-300 font-semibold shadow-[0_10px_40px_rgba(99,102,241,0.35)]"
              >
                Explore Programs
              </button>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}