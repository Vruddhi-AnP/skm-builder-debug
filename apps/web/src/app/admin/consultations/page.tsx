"use client";

import { useMemo, useState } from "react";

import {
  ArrowUpRight,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MessageSquare,
  Search,
  Users,
} from "lucide-react";

import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminStatCard from "@/components/admin/AdminStatCard";
import AdminEmptyState from "@/components/admin/AdminEmptyState";

const consultationsData = [
  {
    id: 1,
    founder: "Aarav Mehta",
    startup: "FinVerse AI",
    advisor: "Rohan Kapoor",
    topic: "Fundraising Strategy",
    date: "24 May 2026",
    status: "Scheduled",
  },
  {
    id: 2,
    founder: "Neha Sharma",
    startup: "HealthSync",
    advisor: "Priya Menon",
    topic: "Growth & GTM",
    date: "22 May 2026",
    status: "Completed",
  },
  {
    id: 3,
    founder: "Rahul Jain",
    startup: "GreenByte",
    advisor: "Aditya Sharma",
    topic: "Product Scaling",
    date: "27 May 2026",
    status: "Pending",
  },
];

export default function AdminConsultationsPage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [selectedFilter, setSelectedFilter] =
    useState("All");

  const [searchQuery, setSearchQuery] =
    useState("");

  const filters = [
    "All",
    "Pending",
    "Scheduled",
    "Completed",
  ];

  const filteredConsultations =
    useMemo(() => {
      return consultationsData.filter(
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
            item.advisor
              .toLowerCase()
              .includes(
                searchQuery.toLowerCase()
              ) ||
            item.topic
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
          title="Consultations"
          subtitle="Manage founder and advisor consultation sessions"
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
                Consultation Management
              </h2>

              <p className="mt-2 text-[15px] text-[#64748B] max-w-2xl">
                Monitor founder-advisor
                sessions, mentorship
                activities, and consultation
                workflows across the
                ecosystem.
              </p>
            </div>

            {/* SEARCH */}
            <div className="h-12 w-full xl:w-[320px] rounded-full border border-[#E2E8F0] bg-[#F7F4EE]/95 px-5 flex items-center gap-3 shadow-sm">
              <Search className="w-4 h-4 text-[#94A3B8]" />

              <input
                type="text"
                placeholder="Search consultations..."
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
          <section className="mt-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            <AdminStatCard
              title="Total Sessions"
              value="124"
              icon={MessageSquare}
              iconColor="text-sky-500"
            />

            <AdminStatCard
              title="Scheduled"
              value="37"
              icon={CalendarDays}
              iconColor="text-violet-500"
            />

            <AdminStatCard
              title="Pending Requests"
              value="14"
              icon={Clock3}
              iconColor="text-orange-500"
            />

            <AdminStatCard
              title="Completed"
              value="73"
              icon={CheckCircle2}
              iconColor="text-emerald-500"
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
            {filteredConsultations.length ===
            0 ? (
              <AdminEmptyState
                title="No Consultations Found"
                description="No consultations matched your current search or selected filters."
              />
            ) : (
              filteredConsultations.map(
                (consultation) => (
                  <div
                    key={consultation.id}
                    className="rounded-[30px] border border-[#E8EDF5] bg-[#F7F4EE]/95 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between gap-6">
                      {/* LEFT */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-bold text-[#0F172A]">
                            {consultation.startup}
                          </h3>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              consultation.status ===
                              "Completed"
                                ? "bg-emerald-100 text-emerald-700"
                                : consultation.status ===
                                  "Scheduled"
                                ? "bg-sky-100 text-sky-700"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {
                              consultation.status
                            }
                          </span>
                        </div>

                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Founder
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {
                                consultation.founder
                              }
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Advisor
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {
                                consultation.advisor
                              }
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Topic
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {
                                consultation.topic
                              }
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Date
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {
                                consultation.date
                              }
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Session Type
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              Virtual Session
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="flex flex-wrap gap-3">
                        <button className="h-11 px-5 rounded-full border border-[#E8EDF5] bg-[#F7F4EE]/95 text-sm font-semibold text-[#475569] hover:bg-white transition-all duration-200 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          Manage Session
                        </button>

                        <button className="h-11 px-5 rounded-full bg-[#071133] text-white text-sm font-semibold hover:bg-[#0B173F] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#071133]/20">
                          Open Details
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