"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function InvestorsPage() {
  const router = useRouter();

  const [search, setSearch] =
    useState("");

  const [selectedStage, setSelectedStage] =
    useState("All Stages");

  const investors = [
    {
      id: "arjun-capital",
      name: "Arjun Mehta",
      firm: "Apex Capital",
      stage: "Seed",
      industries:
        "SaaS • AI • Fintech",
      ticket: "₹25L - ₹2Cr",
      portfolio:
        "18 Startup Investments",
      availability:
        "Actively Investing",
    },

    {
      id: "neha-ventures",
      name: "Neha Kapoor",
      firm: "Vision Ventures",
      stage: "Pre-Seed",
      industries:
        "D2C • Consumer • Branding",
      ticket: "₹10L - ₹75L",
      portfolio:
        "32 Founder Investments",
      availability:
        "Open For Pitches",
    },

    {
      id: "rahul-fund",
      name: "Rahul Sharma",
      firm: "ScaleX Fund",
      stage: "Series A",
      industries:
        "Growth • SaaS • Tech",
      ticket: "₹1Cr - ₹10Cr",
      portfolio:
        "50+ Startup Portfolio",
      availability:
        "Available This Month",
    },

    {
      id: "priya-angels",
      name: "Priya Verma",
      firm: "Launch Angels",
      stage: "Angel",
      industries:
        "Women-led • AI • EdTech",
      ticket: "₹5L - ₹50L",
      portfolio:
        "22 Angel Investments",
      availability:
        "Accepting Applications",
    },
  ];

  const filteredInvestors =
    useMemo(() => {
      return investors.filter(
        (investor) => {
          const matchesSearch =
            investor.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            investor.firm
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            investor.industries
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesStage =
            selectedStage ===
              "All Stages" ||
            investor.stage ===
              selectedStage;

          return (
            matchesSearch &&
            matchesStage
          );
        }
      );
    }, [search, selectedStage]);

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-8">

        {/* HERO */}
        <div className="relative overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] shadow-[0_15px_60px_rgba(99,102,241,0.12)] p-6 md:p-8 lg:p-10">

          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-25" />

          <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-200 rounded-full blur-3xl opacity-25" />

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

            {/* LEFT */}
            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs sm:text-sm font-semibold mb-5">
                Founder Investment Network
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Connect With

                <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Startup Investors
                </span>

              </h1>

              <p className="text-slate-500 text-sm md:text-base mt-5 leading-relaxed max-w-2xl">
                Explore investors, angel
                networks and venture firms
                aligned with your startup
                vision and fundraising stage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">

                <button
                  onClick={() =>
                    router.push(
                      "/founder/programs"
                    )
                  }
                  className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 text-white px-6 py-3.5 rounded-2xl hover:scale-[1.02] transition font-semibold shadow-[0_10px_40px_rgba(59,130,246,0.35)]"
                >
                  Explore Funding
                </button>

                <button
                  onClick={() =>
                    router.push(
                      "/founder/startup-builder"
                    )
                  }
                  className="border border-cyan-100 bg-white/80 backdrop-blur-xl text-slate-700 px-6 py-3.5 rounded-2xl hover:bg-cyan-50 transition font-semibold"
                >
                  Startup Builder
                </button>

              </div>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 w-full xl:w-85">

              {[
                {
                  label: "Investors",
                  value: "240+",
                },
                {
                  label: "Funding",
                  value: "₹45Cr+",
                },
                {
                  label: "Startups",
                  value: "1.2K+",
                },
                {
                  label: "Success",
                  value: "92%",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-2xl p-5 shadow-sm"
                >

                  <p className="text-sm text-slate-500 mb-2">
                    {item.label}
                  </p>

                  <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
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
                placeholder="Search investors, firms or industries..."
                className="w-full border border-slate-200 bg-white/80 rounded-2xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-200 transition"
              />

            </div>

            <div className="xl:w-60">

              <select
                value={
                  selectedStage
                }
                onChange={(e) =>
                  setSelectedStage(
                    e.target.value
                  )
                }
                className="w-full border border-slate-200 bg-white/80 rounded-2xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-200 transition"
              >

                <option>
                  All Stages
                </option>

                <option>
                  Angel
                </option>

                <option>
                  Pre-Seed
                </option>

                <option>
                  Seed
                </option>

                <option>
                  Series A
                </option>

              </select>

            </div>

            <button
              onClick={() => {
                setSearch("");
                setSelectedStage(
                  "All Stages"
                );
              }}
              className="border border-cyan-100 bg-white/80 text-slate-700 px-6 py-3.5 rounded-2xl hover:bg-cyan-50 transition font-semibold"
            >
              Reset
            </button>

          </div>

        </div>

        {/* LIST */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {filteredInvestors.map(
            (
              investor,
              index
            ) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] p-6 md:p-7 shadow-sm hover:shadow-[0_15px_50px_rgba(59,130,246,0.12)] hover:-translate-y-1 transition-all duration-300"
              >

                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-30" />

                <div className="relative z-10">

                  {/* TOP */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-6">

                    <div className="flex items-center gap-4">

                      <button
                        onClick={() =>
                          router.push(
                            `/founder/investors/${investor.id}`
                          )
                        }
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-500 flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-cyan-500/25"
                      >
                        {investor.name.charAt(
                          0
                        )}
                      </button>

                      <div>

                        <button
                          onClick={() =>
                            router.push(
                              `/founder/investors/${investor.id}`
                            )
                          }
                          className="text-2xl font-bold tracking-tight text-slate-900 hover:text-cyan-600 transition"
                        >
                          {
                            investor.name
                          }
                        </button>

                        <p className="text-sm text-slate-500 mt-1">
                          {
                            investor.firm
                          }
                        </p>

                      </div>

                    </div>

                    <button
                      onClick={() =>
                        router.push(
                          `/founder/investors/${investor.id}`
                        )
                      }
                      className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-semibold h-fit hover:bg-cyan-100 transition"
                    >
                      {
                        investor.availability
                      }
                    </button>

                  </div>

                  {/* DETAILS */}
                  <div className="space-y-5">

                    <div>

                      <p className="text-sm text-slate-500 mb-3">
                        Industries
                      </p>

                      <div className="flex flex-wrap gap-2">

                        {investor.industries
                          .split("•")
                          .map(
                            (
                              item,
                              i
                            ) => (
                              <button
                                key={i}
                                className="px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-xs border border-cyan-100 font-medium hover:bg-cyan-100 transition"
                              >
                                {item.trim()}
                              </button>
                            )
                          )}

                      </div>

                    </div>

                    <div className="grid grid-cols-2 gap-4">

                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs text-slate-500">
                          Investment Stage
                        </p>

                        <h3 className="text-lg font-bold text-slate-900 mt-2">
                          {
                            investor.stage
                          }
                        </h3>
                      </div>

                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs text-slate-500">
                          Ticket Size
                        </p>

                        <h3 className="text-lg font-bold text-slate-900 mt-2">
                          {
                            investor.ticket
                          }
                        </h3>
                      </div>

                    </div>

                    <div>
                      <p className="text-sm text-slate-500 mb-2">
                        Portfolio
                      </p>

                      <p className="text-sm text-slate-700">
                        {
                          investor.portfolio
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
                      className="flex-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 text-white px-5 py-3.5 rounded-2xl hover:scale-[1.01] transition font-semibold shadow-lg shadow-cyan-500/25"
                    >
                      Connect Investor
                    </button>

                    <button
                      onClick={() =>
                        router.push(
                          `/founder/investors/${investor.id}`
                        )
                      }
                      className="flex-1 border border-cyan-100 bg-white/80 text-slate-700 px-5 py-3.5 rounded-2xl hover:bg-cyan-50 transition font-semibold"
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
    </main>
  );
}