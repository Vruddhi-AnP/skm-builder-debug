"use client";

import { useMemo, useState } from "react";

import {
  ArrowUpRight,
  Flame,
  Globe,
  IndianRupee,
  Mail,
  Search,
  TrendingUp,
} from "lucide-react";

import AdminStatCard from "@/components/admin/AdminStatCard";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminShell from "@/components/admin/AdminShell";

const investorsData = [
  {
    id: 1,
    investor: "Arjun Capital",
    focus: "FinTech & SaaS",
    stage: "Seed to Series A",
    ticket: "₹50L - ₹3Cr",
    portfolio: "18 Startups",
    email: "team@arjuncapital.com",
    status: "Active",
  },
  {
    id: 2,
    investor: "Scale Ventures",
    focus: "HealthTech",
    stage: "Pre-Seed",
    ticket: "₹25L - ₹1Cr",
    portfolio: "11 Startups",
    email: "contact@scaleventures.io",
    status: "Pending",
  },
  {
    id: 3,
    investor: "GrowthX Partners",
    focus: "ClimateTech",
    stage: "Series A",
    ticket: "₹2Cr - ₹8Cr",
    portfolio: "24 Startups",
    email: "hello@growthx.com",
    status: "Active",
  },
];

export default function AdminInvestorsPage() {

  const [selectedFilter, setSelectedFilter] =
    useState("All");

  const [searchQuery, setSearchQuery] =
    useState("");

  const filters = [
    "All",
    "Active",
    "Pending",
    "Due Diligence",
    "Closed",
  ];

  const filteredInvestors = useMemo(() => {
    return investorsData.filter(
      (item) => {
        const matchesFilter =
          selectedFilter === "All" ||
          item.status ===
            selectedFilter;

        const matchesSearch =
          item.investor
            .toLowerCase()
            .includes(
              searchQuery.toLowerCase()
            ) ||
          item.focus
            .toLowerCase()
            .includes(
              searchQuery.toLowerCase()
            ) ||
          item.stage
            .toLowerCase()
            .includes(
              searchQuery.toLowerCase()
            ) ||
          item.email
            .toLowerCase()
            .includes(
              searchQuery.toLowerCase()
            );

        return (
          matchesFilter &&
          matchesSearch
        );
      }
    );
  }, [selectedFilter, searchQuery]);

  return (
  <AdminShell
    title="Investors"
    subtitle="Manage ecosystem investors and investment activity"
  >
      
          {/* TOP */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
            <div>
              <h2 className="text-3xl lg:text-[38px] font-bold text-[#0F172A] leading-tight">
                Investor Management
              </h2>

              <p className="mt-2 text-[15px] text-[#64748B] max-w-2xl">
                Review investor activity,
                funding participation,
                startup connections and
                ecosystem engagement.
              </p>
            </div>

            {/* SEARCH */}
            <div className="h-12 w-full xl:w-[320px] rounded-full border border-[#E2E8F0] bg-[#F7F4EE]/95 px-5 flex items-center gap-3 shadow-sm">
              <Search className="w-4 h-4 text-[#94A3B8]" />

              <input
                type="text"
                placeholder="Search investors..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(
                    e.target.value
                  )
                }
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-[#94A3B8]"
              />
            </div>
          </div>

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            <AdminStatCard
              title="Active Investors"
              value="38"
              icon={Flame}
              iconColor="text-sky-500"
            />

            <AdminStatCard
              title="Investment Pipeline"
              value="₹24Cr"
              icon={IndianRupee}
              iconColor="text-emerald-500"
            />

            <AdminStatCard
              title="Startup Connections"
              value="53"
              icon={TrendingUp}
              iconColor="text-orange-500"
            />
          </section>

          {/* INVESTMENT PIPELINE */}
<section className="mt-7">
  <div className="grid gap-4 md:grid-cols-4">
    <div className="rounded-2xl border border-[#E8EDF5] bg-white p-5">
      <p className="text-sm text-[#64748B]">
        New Investors
      </p>

      <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
        12
      </h3>
    </div>

    <div className="rounded-2xl border border-[#E8EDF5] bg-white p-5">
      <p className="text-sm text-[#64748B]">
        Active Conversations
      </p>

      <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
        18
      </h3>
    </div>

    <div className="rounded-2xl border border-[#E8EDF5] bg-white p-5">
      <p className="text-sm text-[#64748B]">
        Due Diligence
      </p>

      <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
        7
      </h3>
    </div>

    <div className="rounded-2xl border border-[#E8EDF5] bg-white p-5">
      <p className="text-sm text-[#64748B]">
        Deals Closed
      </p>

      <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
        5
      </h3>
    </div>
  </div>
</section>

          {/* FILTERS */}
          <section className="mt-7 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() =>
                  setSelectedFilter(
                    filter
                  )
                }
                className={`h-11 px-5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  selectedFilter ===
                  filter
                    ? "bg-[#071133] text-white shadow-lg shadow-[#071133]/20"
                    : "bg-[#F7F4EE]/95 border border-[#E8EDF5] text-[#475569] hover:bg-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </section>

          {/* LIST */}
          <section className="mt-7 space-y-5">
            {filteredInvestors.length ===
            0 ? (
              <AdminEmptyState
                title="No Investors Found"
                description="No investors matched your current search or selected filters."
              />
            ) : (
              filteredInvestors.map(
                (investor) => (
                  <div
                    key={investor.id}
                    className="rounded-[30px] border border-[#E8EDF5] bg-[#F7F4EE]/95 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between gap-6">
                      {/* LEFT */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-bold text-[#0F172A]">
                            {
                              investor.investor
                            }
                          </h3>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              investor.status ===
                              "Active"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {
                              investor.status
                            }
                          </span>
                        </div>

                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Investment
                              Focus
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {
                                investor.focus
                              }
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Investment
                              Stage
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {
                                investor.stage
                              }
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Ticket Size
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {
                                investor.ticket
                              }
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Portfolio
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {
                                investor.portfolio
                              }
                            </p>
                          </div>

                          <div className="min-w-0">
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Email
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A] break-all">
                              {
                                investor.email
                              }
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="flex flex-wrap gap-3">
                        <button className="h-11 px-5 rounded-full border border-[#E8EDF5] bg-[#F7F4EE]/95 text-sm font-semibold text-[#475569] hover:bg-white transition-all duration-200 flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Contact
                        </button>

                        <button className="h-11 px-5 rounded-full border border-[#E8EDF5] bg-[#F7F4EE]/95 text-sm font-semibold text-[#475569] hover:bg-white transition-all duration-200 flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          Website
                        </button>

                        <button className="h-11 px-5 rounded-full bg-[#071133] text-white text-sm font-semibold hover:bg-[#0B173F] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#071133]/20">
                          Review Investor
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )
            )}
          </section>
  </AdminShell>
);
}