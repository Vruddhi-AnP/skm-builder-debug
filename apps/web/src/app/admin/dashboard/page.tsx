"use client";

import { useMemo, useState } from "react";

import {
  Activity,
  BarChart3,
  Briefcase,
  CalendarDays,
  FileText,
  Search,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react";

import AdminStatCard from "@/components/admin/AdminStatCard";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminShell from "@/components/admin/AdminShell";

const stats = [
  {
    title: "Founders",
    value: "248",
    icon: Users,
    iconColor: "text-violet-500",
  },
  {
    title: "Advisors",
    value: "64",
    icon: UserCheck,
    iconColor: "text-cyan-500",
  },
  {
    title: "Investor Interests",
    value: "91",
    icon: Wallet,
    iconColor: "text-emerald-500",
  },
  {
    title: "Consultations",
    value: "37",
    icon: Briefcase,
    iconColor: "text-orange-500",
  },
  {
    title: "Applications",
    value: "14",
    icon: FileText,
    iconColor: "text-sky-500",
  },
  {
    title: "Meetings",
    value: "22",
    icon: CalendarDays,
    iconColor: "text-indigo-500",
  },
  {
  title: "Platform Health",
  value: "99.8%",
  icon: Activity,
  iconColor: "text-emerald-500",
  },
];

const activities = [
  {
    title:
      "Founder submitted consultation request",
    time: "1 hour ago",
  },
  {
    title:
      "Investor showed interest in FinVerse AI",
    time: "2 hours ago",
  },
  {
    title:
      "Advisor session scheduled with HealthSync",
    time: "3 hours ago",
  },
  {
    title:
      "Program application approved successfully",
    time: "5 hours ago",
  },
  {
    title:
      "New startup joined accelerator cohort",
    time: "7 hours ago",
  },
];

export default function AdminDashboardPage() {

  const [searchQuery, setSearchQuery] =
    useState("");

  const filteredActivities =
    useMemo(() => {
      return activities.filter(
        (item) =>
          item.title
            .toLowerCase()
            .includes(
              searchQuery.toLowerCase()
            )
      );
    }, [searchQuery]);

  return (
  <AdminShell
    title="Dashboard"
    subtitle="Monitor platform operations and ecosystem activity"
  >

          {/* TOP */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
            <div>
              <h2 className="text-3xl lg:text-[38px] font-bold text-[#0F172A] leading-tight">
                Operations Dashboard
              </h2>

              <p className="mt-2 text-[15px] text-[#64748B] max-w-2xl">
                Monitor startup ecosystem
                growth, platform engagement,
                investor activity, founder
                onboarding, and operational
                workflows in real-time.
              </p>
            </div>

            {/* SEARCH */}
            <div className="h-12 w-full xl:w-[320px] rounded-full border border-[#E2E8F0] bg-[#F7F4EE]/95 px-5 flex items-center gap-3 shadow-sm">
              <Search className="w-4 h-4 text-[#94A3B8]" />

              <input
                type="text"
                placeholder="Search activities..."
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
            {stats.map((item) => (
              <AdminStatCard
                key={item.title}
                title={item.title}
                value={item.value}
                icon={item.icon}
                iconColor={
                  item.iconColor
                }
              />
            ))}
          </section>

          {/* QUICK ACTIONS */}
<section className="mt-7">
  <div className="rounded-[30px] border border-[#E8EDF5] bg-white p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-2xl font-bold text-[#0F172A]">
          Quick Actions
        </h3>

        <p className="mt-2 text-sm text-[#64748B]">
          Frequently used admin operations.
        </p>
      </div>
    </div>

    <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
      <button className="rounded-2xl border border-[#E8EDF5] p-5 text-left transition hover:bg-[#F8FAFC]">
        <h4 className="font-semibold text-[#0F172A]">
          Review Founders
        </h4>

        <p className="mt-2 text-sm text-[#64748B]">
          Pending founder approvals
        </p>
      </button>

      <button className="rounded-2xl border border-[#E8EDF5] p-5 text-left transition hover:bg-[#F8FAFC]">
        <h4 className="font-semibold text-[#0F172A]">
          Assign Advisor
        </h4>

        <p className="mt-2 text-sm text-[#64748B]">
          Match founders with advisors
        </p>
      </button>

      <button className="rounded-2xl border border-[#E8EDF5] p-5 text-left transition hover:bg-[#F8FAFC]">
        <h4 className="font-semibold text-[#0F172A]">
          Review Interests
        </h4>

        <p className="mt-2 text-sm text-[#64748B]">
          Investor interest requests
        </p>
      </button>

      <button className="rounded-2xl border border-[#E8EDF5] p-5 text-left transition hover:bg-[#F8FAFC]">
        <h4 className="font-semibold text-[#0F172A]">
          Manage Programs
        </h4>

        <p className="mt-2 text-sm text-[#64748B]">
          Accelerator & ecosystem programs
        </p>
      </button>
    </div>
  </div>
</section>

          {/* BOTTOM SECTION */}
          <section className="mt-7 grid grid-cols-1 2xl:grid-cols-[1.5fr_1fr] gap-5">
            {/* RECENT ACTIVITY */}
            <div className="rounded-[30px] border border-[#E8EDF5] bg-[#F7F4EE]/95 p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    Recent Activity
                  </h3>

                  <p className="mt-1 text-sm text-[#64748B]">
                    Latest ecosystem updates
                    and platform actions
                  </p>
                </div>

                <div className="h-12 w-12 rounded-2xl bg-cyan-100 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-cyan-600" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {filteredActivities.length ===
                0 ? (
                  <AdminEmptyState
                    title="No Activity Found"
                    description="No activities matched your current search query."
                  />
                ) : (
                  filteredActivities.map(
                    (activity) => (
                      <div
                        key={
                          activity.title
                        }
                        className="rounded-2xl border border-[#EDF1F7] bg-white/70 px-5 py-4 flex items-center justify-between gap-4 hover:bg-white transition-all duration-200"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="h-2.5 w-2.5 rounded-full bg-cyan-500 shrink-0" />

                          <p className="text-sm font-medium text-[#0F172A]">
                            {
                              activity.title
                            }
                          </p>
                        </div>

                        <span className="text-xs text-[#94A3B8] whitespace-nowrap">
                          {
                            activity.time
                          }
                        </span>
                      </div>
                    )
                  )
                )}
              </div>
            </div>

            {/* PIPELINE */}
            <div className="rounded-[30px] border border-[#E8EDF5] bg-[#F7F4EE]/95 p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    Request Pipeline
                  </h3>

                  <p className="mt-1 text-sm text-[#64748B]">
                    Operational workflow
                    overview
                  </p>
                </div>

                <div className="h-12 w-12 rounded-2xl bg-violet-100 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-violet-600" />
                </div>
              </div>

              <div className="mt-7 space-y-6">
                {[
                  {
                    label: "Pending",
                    value: "72%",
                    width: "72%",
                    color:
                      "bg-amber-400",
                  },
                  {
                    label: "Under Review",
                    value: "48%",
                    width: "48%",
                    color:
                      "bg-cyan-500",
                  },
                  {
                    label: "Scheduled",
                    value: "36%",
                    width: "36%",
                    color:
                      "bg-violet-500",
                  },
                  {
                    label: "Completed",
                    value: "92%",
                    width: "92%",
                    color:
                      "bg-emerald-500",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-[#0F172A]">
                        {item.label}
                      </p>

                      <span className="text-sm font-bold text-[#0F172A]">
                        {item.value}
                      </span>
                    </div>

                    <div className="mt-3 h-2.5 rounded-full bg-[#E9EEF5] overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.color}`}
                        style={{
                          width:
                            item.width,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* INSIGHT CARD */}
              <div className="mt-7 rounded-3xl bg-linear-to-r from-[#071133] to-[#0B173F] p-5 text-white">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-white/10 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Ecosystem Growth
                    </h4>

                    <p className="text-sm text-white/70 mt-1">
                      Platform engagement
                      increased by 18%
                      this month.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
  </AdminShell>
);
}