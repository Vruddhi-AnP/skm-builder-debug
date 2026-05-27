"use client";

import { useMemo, useState } from "react";

import {
  ArrowUpRight,
  BookOpen,
  Download,
  FolderOpen,
  Search,
  Video,
} from "lucide-react";

import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminStatCard from "@/components/admin/AdminStatCard";

const resourcesData = [
  {
    id: 1,
    title:
      "Startup Pitch Deck Guide",
    type: "PDF Guide",
    category: "Fundraising",
    downloads: "1.2K Downloads",
    access: "Public",
  },
  {
    id: 2,
    title:
      "Founder GTM Workshop",
    type: "Video Session",
    category: "Growth",
    downloads: "842 Views",
    access: "Members",
  },
  {
    id: 3,
    title:
      "Investment Readiness Toolkit",
    type: "Resource Pack",
    category: "Investment",
    downloads: "964 Downloads",
    access: "Public",
  },
];

export default function AdminResourcesPage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [selectedFilter, setSelectedFilter] =
    useState("All");

  const [searchQuery, setSearchQuery] =
    useState("");

  const filters = [
    "All",
    "Public",
    "Members",
  ];

  const filteredResources =
    useMemo(() => {
      return resourcesData.filter(
        (item) => {
          const matchesFilter =
            selectedFilter ===
              "All" ||
            item.access ===
              selectedFilter;

          const matchesSearch =
            item.title
              .toLowerCase()
              .includes(
                searchQuery.toLowerCase()
              ) ||
            item.category
              .toLowerCase()
              .includes(
                searchQuery.toLowerCase()
              ) ||
            item.type
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
          title="Resources"
          subtitle="Manage ecosystem learning resources and content"
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
                Resource Management
              </h2>

              <p className="mt-2 text-[15px] text-[#64748B] max-w-2xl">
                Manage ecosystem
                resources, guides,
                workshops and learning
                materials for founders
                and investors.
              </p>
            </div>

            {/* SEARCH */}
            <div className="h-12 w-full xl:w-[320px] rounded-full border border-[#E2E8F0] bg-[#F7F4EE]/95 px-5 flex items-center gap-3 shadow-sm">
              <Search className="w-4 h-4 text-[#94A3B8]" />

              <input
                type="text"
                placeholder="Search resources..."
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
              title="Total Resources"
              value="84"
              icon={FolderOpen}
              iconColor="text-sky-500"
            />

            <AdminStatCard
              title="Total Downloads"
              value="8.4K"
              icon={Download}
              iconColor="text-emerald-500"
            />

            <AdminStatCard
              title="Learning Modules"
              value="26"
              icon={BookOpen}
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
            {filteredResources.length ===
            0 ? (
              <AdminEmptyState
                title="No Resources Found"
                description="No resources matched your current search or selected filters."
              />
            ) : (
              filteredResources.map(
                (resource) => (
                  <div
                    key={resource.id}
                    className="rounded-[30px] border border-[#E8EDF5] bg-[#F7F4EE]/95 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between gap-6">
                      {/* LEFT */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-bold text-[#0F172A]">
                            {
                              resource.title
                            }
                          </h3>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              resource.access ===
                              "Public"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {
                              resource.access
                            }
                          </span>
                        </div>

                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Resource Type
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {
                                resource.type
                              }
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Category
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {
                                resource.category
                              }
                            </p>
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                              Engagement
                            </p>

                            <p className="mt-1 font-semibold text-[#0F172A]">
                              {
                                resource.downloads
                              }
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="flex flex-wrap gap-3">
                        <button className="h-11 px-5 rounded-full border border-[#E8EDF5] bg-[#F7F4EE]/95 text-sm font-semibold text-[#475569] hover:bg-white transition-all duration-200 flex items-center gap-2">
                          <Download className="w-4 h-4" />
                          Download
                        </button>

                        <button className="h-11 px-5 rounded-full border border-[#E8EDF5] bg-[#F7F4EE]/95 text-sm font-semibold text-[#475569] hover:bg-white transition-all duration-200 flex items-center gap-2">
                          <Video className="w-4 h-4" />
                          Preview
                        </button>

                        <button className="h-11 px-5 rounded-full bg-[#071133] text-white text-sm font-semibold hover:bg-[#0B173F] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#071133]/20">
                          View Details
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