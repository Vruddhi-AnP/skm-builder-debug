"use client";

import { useMemo, useState } from "react";

import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  Search,
} from "lucide-react";

import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminStatCard from "@/components/admin/AdminStatCard";
import AdminShell from "@/components/admin/AdminShell";

const applicationsData = [
  {
    id: 1,
    startup: "FinVerse AI",
    founder: "Aarav Mehta",
    program:
      "Startup Growth Sprint",
    stage: "Seed",
    appliedOn: "20 May 2026",
    status: "Under Review",
  },
  {
    id: 2,
    startup: "HealthSync",
    founder: "Neha Sharma",
    program:
      "Women Founder Program",
    stage: "Pre-Series A",
    appliedOn: "18 May 2026",
    status: "Approved",
  },
  {
    id: 3,
    startup: "GreenByte",
    founder: "Rahul Jain",
    program:
      "Climate Innovation Cohort",
    stage: "Series A",
    appliedOn: "16 May 2026",
    status: "Pending",
  },
];

export default function ProgramApplicationsPage() {

  const [selectedFilter, setSelectedFilter] =
    useState("All");

  const [searchQuery, setSearchQuery] =
    useState("");

  const filters = [
    "All",
    "Pending",
    "Under Review",
    "Approved",
  ];

  const filteredApplications =
    useMemo(() => {
      return applicationsData.filter(
        (item) => {
          const matchesFilter =
            selectedFilter ===
              "All" ||
            item.status ===
              selectedFilter;

          const matchesSearch =
            item.startup
              .toLowerCase()
              .includes(
                searchQuery.toLowerCase()
              ) ||
            item.founder
              .toLowerCase()
              .includes(
                searchQuery.toLowerCase()
              ) ||
            item.program
              .toLowerCase()
              .includes(
                searchQuery.toLowerCase()
              ) ||
            item.stage
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
    }, [
      selectedFilter,
      searchQuery,
    ]);

  return (
  <AdminShell
    title="Program Applications"
    subtitle="Review ecosystem program applications"
  >
    
          {/* TOP */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
            <div>
              <h2 className="text-3xl lg:text-[38px] font-bold text-[#0F172A] leading-tight">
                Program Applications
              </h2>

              <p className="mt-2 text-[15px] text-[#64748B] max-w-2xl">
                Manage startup
                applications submitted
                for ecosystem programs
                and accelerator cohorts.
              </p>
            </div>

            {/* SEARCH */}
            <div className="h-12 w-full xl:w-[320px] rounded-full border border-[#E2E8F0] bg-[#F7F4EE]/95 px-5 flex items-center gap-3 shadow-sm">
              <Search className="w-4 h-4 text-[#94A3B8]" />

              <input
                type="text"
                placeholder="Search applications..."
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
              title="Total Applications"
              value="42"
              icon={FileText}
              iconColor="text-sky-500"
            />

            <AdminStatCard
              title="Pending Reviews"
              value="14"
              icon={Clock3}
              iconColor="text-orange-500"
            />

            <AdminStatCard
              title="Approved Applications"
              value="28"
              icon={CheckCircle2}
              iconColor="text-emerald-500"
            />
          </section>

          {/* APPLICATION PIPELINE */}
<section className="mt-7">
  <div className="grid gap-4 md:grid-cols-4">
    <div className="rounded-2xl border border-[#E8EDF5] bg-white p-5">
      <p className="text-sm text-[#64748B]">
        New Applications
      </p>

      <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
        18
      </h3>
    </div>

    <div className="rounded-2xl border border-[#E8EDF5] bg-white p-5">
      <p className="text-sm text-[#64748B]">
        Under Review
      </p>

      <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
        11
      </h3>
    </div>

    <div className="rounded-2xl border border-[#E8EDF5] bg-white p-5">
      <p className="text-sm text-[#64748B]">
        Interview Scheduled
      </p>

      <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
        7
      </h3>
    </div>

    <div className="rounded-2xl border border-[#E8EDF5] bg-white p-5">
      <p className="text-sm text-[#64748B]">
        Accepted
      </p>

      <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
        6
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
            {filteredApplications.length ===
            0 ? (
              <AdminEmptyState
                title="No Applications Found"
                description="No applications matched your current search or selected filters."
              />
            ) : (
              filteredApplications.map(
                (application) => (
                  <div
                    key={application.id}
                    className="rounded-[30px] border border-[#E8EDF5] bg-[#F7F4EE]/95 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between gap-6">
                      {/* LEFT */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-bold text-[#0F172A]">
                            {
                              application.startup
                            }
                          </h3>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              application.status ===
                              "Approved"
                                ? "bg-emerald-100 text-emerald-700"
                                : application.status ===
                                  "Pending"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-sky-100 text-sky-700"
                            }`}
                          >
                            {
                              application.status
                            }
                          </span>
                        </div>

                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Founder
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {
                                application.founder
                              }
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Program
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {
                                application.program
                              }
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Startup Stage
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {
                                application.stage
                              }
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Applied On
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {
                                application.appliedOn
                              }
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="flex flex-wrap gap-3">
                        <button className="h-11 px-5 rounded-full border border-[#E8EDF5] bg-[#F7F4EE]/95 text-sm font-semibold text-[#475569] hover:bg-white transition-all duration-200 flex items-center gap-2">
                          <FileCheck2 className="w-4 h-4" />
                          Review
                        </button>

                        <button className="h-11 px-5 rounded-full bg-[#071133] text-white text-sm font-semibold hover:bg-[#0B173F] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#071133]/20">
                          Review Application
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