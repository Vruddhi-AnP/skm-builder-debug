"use client";

import { useMemo, useState } from "react";

import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Mail,
  Search,
  Users,
} from "lucide-react";

import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminStatCard from "@/components/admin/AdminStatCard";
import AdminEmptyState from "@/components/admin/AdminEmptyState";

const foundersData = [
  {
    id: 1,
    founder: "Aarav Mehta",
    startup: "FinVerse AI",
    sector: "FinTech",
    stage: "Seed",
    email: "aarav@finverse.ai",
    status: "Verified",
  },
  {
    id: 2,
    founder: "Neha Sharma",
    startup: "HealthSync",
    sector: "HealthTech",
    stage: "Pre-Series A",
    email: "neha@healthsync.io",
    status: "Pending",
  },
  {
    id: 3,
    founder: "Rahul Jain",
    startup: "GreenByte",
    sector: "ClimateTech",
    stage: "Series A",
    email: "rahul@greenbyte.com",
    status: "Verified",
  },
];

export default function AdminFoundersPage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [selectedFilter, setSelectedFilter] =
    useState("All");

  const [searchQuery, setSearchQuery] =
    useState("");

  const filters = [
    "All",
    "Verified",
    "Pending",
  ];

  const filteredFounders =
    useMemo(() => {
      return foundersData.filter(
        (item) => {
          const matchesFilter =
            selectedFilter === "All" ||
            item.status ===
              selectedFilter;

          const matchesSearch =
            item.founder
              .toLowerCase()
              .includes(
                searchQuery.toLowerCase()
              ) ||
            item.startup
              .toLowerCase()
              .includes(
                searchQuery.toLowerCase()
              ) ||
            item.sector
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
    <div className="min-h-screen bg-[#F5F7FB] flex">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <AdminSidebar
            mobile
            onClose={() =>
              setSidebarOpen(false)
            }
          />

          <div
            className="flex-1 bg-black/20 backdrop-blur-sm"
            onClick={() =>
              setSidebarOpen(false)
            }
          />
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <AdminSidebar />

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* HEADER */}
        <AdminHeader
          title="Founders"
          subtitle="Manage startup founders and ecosystem participation"
          onMenuClick={() =>
            setSidebarOpen(true)
          }
        />

        {/* CONTENT */}
        <main className="flex-1 p-5 lg:p-7 overflow-x-hidden">
          {/* TOP */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
            <div>
              <h2 className="text-3xl lg:text-[38px] font-bold text-[#0F172A] leading-tight">
                Founder Management
              </h2>

              <p className="mt-2 text-[15px] text-[#64748B] max-w-2xl">
                Review startup founders,
                monitor onboarding activity,
                and manage ecosystem
                participation across the
                platform.
              </p>
            </div>

            {/* SEARCH */}
            <div className="h-12 w-full xl:w-[320px] rounded-full border border-[#E2E8F0] bg-[#F7F4EE]/95 px-5 flex items-center gap-3 shadow-sm">
              <Search className="w-4 h-4 text-[#94A3B8]" />

              <input
                type="text"
                placeholder="Search founders..."
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
              title="Total Founders"
              value="248"
              icon={Users}
              iconColor="text-sky-500"
            />

            <AdminStatCard
              title="Verified Founders"
              value="198"
              icon={CheckCircle2}
              iconColor="text-emerald-500"
            />

            <AdminStatCard
              title="Active Startups"
              value="34"
              icon={Building2}
              iconColor="text-orange-500"
            />
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
            {filteredFounders.length ===
            0 ? (
              <AdminEmptyState
                title="No Founders Found"
                description="No founders matched your current search or selected filters."
              />
            ) : (
              filteredFounders.map(
                (founder) => (
                  <div
                    key={founder.id}
                    className="rounded-[30px] border border-[#E8EDF5] bg-[#F7F4EE]/95 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between gap-6">
                      {/* LEFT */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-bold text-[#0F172A]">
                            {founder.founder}
                          </h3>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              founder.status ===
                              "Verified"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {founder.status}
                          </span>
                        </div>

                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Startup
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {founder.startup}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Sector
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {founder.sector}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Startup Stage
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {founder.stage}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Email
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A] break-all">
                              {founder.email}
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

                        <button className="h-11 px-5 rounded-full bg-[#071133] text-white text-sm font-semibold hover:bg-[#0B173F] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#071133]/20">
                          View Profile
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )
            )}
          </section>
        </main>
      </div>
    </div>
  );
}