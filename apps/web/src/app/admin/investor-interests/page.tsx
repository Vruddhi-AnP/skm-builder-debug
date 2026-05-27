"use client";

import { useMemo, useState } from "react";

import {
  ArrowUpRight,
  Building2,
  Eye,
  Flame,
  Search,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminStatCard from "@/components/admin/AdminStatCard";
import AdminEmptyState from "@/components/admin/AdminEmptyState";

const interestsData = [
  {
    id: 1,
    investor: "Arjun Capital",
    startup: "FinVerse AI",
    founder: "Aarav Mehta",
    sector: "FinTech",
    stage: "Seed",
    amount: "₹50L",
    status: "Interested",
  },
  {
    id: 2,
    investor: "Scale Ventures",
    startup: "HealthSync",
    founder: "Neha Sharma",
    sector: "HealthTech",
    stage: "Pre-Series A",
    amount: "₹1.2Cr",
    status: "Under Review",
  },
  {
    id: 3,
    investor: "GrowthX Partners",
    startup: "GreenByte",
    founder: "Rahul Jain",
    sector: "ClimateTech",
    stage: "Series A",
    amount: "₹2Cr",
    status: "Connected",
  },
];

export default function InvestorInterestsPage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [selectedFilter, setSelectedFilter] =
    useState("All");

  const [searchQuery, setSearchQuery] =
    useState("");

  const filters = [
    "All",
    "Interested",
    "Under Review",
    "Connected",
  ];

  const filteredData = useMemo(() => {
    return interestsData.filter(
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
          item.sector
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
          title="Investor Interests"
          subtitle="Track startup investment interest activity"
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
                Investor Interest Pipeline
              </h2>

              <p className="mt-2 text-[15px] text-[#64748B] max-w-2xl">
                Monitor startup-investor
                engagement, investment
                opportunities, and funding
                pipeline activities across
                the ecosystem.
              </p>
            </div>

            {/* SEARCH */}
            <div className="h-12 w-full xl:w-[320px] rounded-full border border-[#E2E8F0] bg-[#F7F4EE]/95 px-5 flex items-center gap-3 shadow-sm">
              <Search className="w-4 h-4 text-[#94A3B8]" />

              <input
                type="text"
                placeholder="Search interests..."
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
              title="Total Interests"
              value="91"
              icon={Wallet}
              iconColor="text-emerald-500"
            />

            <AdminStatCard
              title="Active Startups"
              value="34"
              icon={Building2}
              iconColor="text-sky-500"
            />

            <AdminStatCard
              title="Connected Deals"
              value="18"
              icon={TrendingUp}
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
            {filteredData.length ===
            0 ? (
              <AdminEmptyState
                title="No Investor Interests Found"
                description="No investor interests matched your current search or selected filters."
              />
            ) : (
              filteredData.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[30px] border border-[#E8EDF5] bg-[#F7F4EE]/95 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between gap-6">
                    {/* LEFT */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold text-[#0F172A]">
                          {item.startup}
                        </h3>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            item.status ===
                            "Connected"
                              ? "bg-emerald-100 text-emerald-700"
                              : item.status ===
                                "Under Review"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-sky-100 text-sky-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                            Investor
                          </p>

                          <p className="mt-1 font-semibold text-[#0F172A]">
                            {item.investor}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                            Founder
                          </p>

                          <p className="mt-1 font-semibold text-[#0F172A]">
                            {item.founder}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                            Sector
                          </p>

                          <p className="mt-1 font-semibold text-[#0F172A]">
                            {item.sector}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                            Stage
                          </p>

                          <p className="mt-1 font-semibold text-[#0F172A]">
                            {item.stage}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                            Interest Amount
                          </p>

                          <p className="mt-1 font-semibold text-[#0F172A]">
                            {item.amount}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-wrap gap-3">
                      <button className="h-11 px-5 rounded-full border border-[#E8EDF5] bg-[#F7F4EE]/95 text-sm font-semibold text-[#475569] hover:bg-white transition-all duration-200 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        View Startup
                      </button>

                      <button className="h-11 px-5 rounded-full bg-[#071133] text-white text-sm font-semibold hover:bg-[#0B173F] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#071133]/20">
                        Open Details
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </section>
        </main>
      </div>
    </div>
  );
}