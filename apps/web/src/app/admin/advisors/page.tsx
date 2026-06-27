"use client";

import { useMemo, useState } from "react";

import {
  ArrowUpRight,
  Briefcase,
  Search,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

import AdminStatCard from "@/components/admin/AdminStatCard";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminShell from "@/components/admin/AdminShell";

const advisorsData = [
  {
    id: 1,
    name: "Rohan Kapoor",
    expertise: "Fundraising & VC Strategy",
    experience: "12 Years",
    startups: "28 Startups",
    email: "rohan@ventureaxis.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Menon",
    expertise: "Growth & GTM",
    experience: "9 Years",
    startups: "16 Startups",
    email: "priya@growthlabs.io",
    status: "Pending",
  },
  {
    id: 3,
    name: "Aditya Sharma",
    expertise: "Product & SaaS",
    experience: "14 Years",
    startups: "34 Startups",
    email: "aditya@saasworks.com",
    status: "Active",
  },
];

export default function AdminAdvisorsPage() {

  const [selectedFilter, setSelectedFilter] =
    useState("All");

  const [searchQuery, setSearchQuery] =
    useState("");

  const filters = [
    "All",
    "Active",
    "Pending",
    "Available",
    "Busy",
  ];

  const filteredAdvisors =
    useMemo(() => {
      return advisorsData.filter(
        (item) => {
          const matchesFilter =
            selectedFilter === "All" ||
            item.status ===
              selectedFilter;

          const matchesSearch =
            item.name
              .toLowerCase()
              .includes(
                searchQuery.toLowerCase()
              ) ||
            item.expertise
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
    title="Advisors"
    subtitle="Manage startup advisors and ecosystem experts"
  >
      
          {/* TOP */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
            <div>
              <h2 className="text-3xl lg:text-[38px] font-bold text-[#0F172A] leading-tight">
                Advisor Management
              </h2>

              <p className="mt-2 text-[15px] text-[#64748B] max-w-2xl">
                Manage startup mentors,
                industry experts, and
                ecosystem advisors across
                the Startup Ka Mall
                platform.
              </p>
            </div>

            {/* SEARCH */}
            <div className="h-12 w-full xl:w-[320px] rounded-full border border-[#E2E8F0] bg-[#F7F4EE]/95 px-5 flex items-center gap-3 shadow-sm">
              <Search className="w-4 h-4 text-[#94A3B8]" />

              <input
                type="text"
                placeholder="Search advisors..."
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
              title="Active Advisors"
              value="64"
              icon={Users}
              iconColor="text-sky-500"
            />

            <AdminStatCard
              title="Expert Sessions"
              value="184"
              icon={Briefcase}
              iconColor="text-emerald-500"
            />

            <AdminStatCard
              title="Mentorship Matches"
              value="92"
              icon={Star}
              iconColor="text-orange-500"
            />
          </section>

          {/* ADVISOR WORKLOAD */}
<section className="mt-7">
  <div className="grid gap-4 md:grid-cols-4">
    <div className="rounded-2xl border border-[#E8EDF5] bg-white p-5">
      <p className="text-sm text-[#64748B]">
        Available
      </p>

      <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
        42
      </h3>
    </div>

    <div className="rounded-2xl border border-[#E8EDF5] bg-white p-5">
      <p className="text-sm text-[#64748B]">
        Busy
      </p>

      <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
        18
      </h3>
    </div>

    <div className="rounded-2xl border border-[#E8EDF5] bg-white p-5">
      <p className="text-sm text-[#64748B]">
        Pending Approval
      </p>

      <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
        4
      </h3>
    </div>

    <div className="rounded-2xl border border-[#E8EDF5] bg-white p-5">
      <p className="text-sm text-[#64748B]">
        Sessions This Week
      </p>

      <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
        126
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
            {filteredAdvisors.length ===
            0 ? (
              <AdminEmptyState
                title="No Advisors Found"
                description="No advisors matched your current search or selected filters."
              />
            ) : (
              filteredAdvisors.map(
                (advisor) => (
                  <div
                    key={advisor.id}
                    className="rounded-[30px] border border-[#E8EDF5] bg-[#F7F4EE]/95 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between gap-6">
                      {/* LEFT */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-bold text-[#0F172A]">
                            {advisor.name}
                          </h3>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              advisor.status ===
                              "Active"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {advisor.status}
                          </span>
                        </div>

                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Expertise
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {advisor.expertise}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Experience
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {advisor.experience}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Startups Guided
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {advisor.startups}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Email
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A] break-all">
                              {advisor.email}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="flex flex-wrap gap-3">
                        <button className="h-11 px-5 rounded-full border border-[#E8EDF5] bg-[#F7F4EE]/95 text-sm font-semibold text-[#475569] hover:bg-white transition-all duration-200 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4" />
                          View Profile
                        </button>

                        <button className="h-11 px-5 rounded-full bg-[#071133] text-white text-sm font-semibold hover:bg-[#0B173F] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#071133]/20">
                          Assign Founder
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