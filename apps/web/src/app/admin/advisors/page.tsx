"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Eye,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminShell from "@/components/admin/AdminShell";
import AdminStatCard from "@/components/admin/AdminStatCard";

import api from "@/lib/axios";

interface AdminAdvisor {
  id: string;

  currentRole: string | null;
  organization: string | null;
  experienceLevel: string | null;

  expertiseArea: string | null;
  industry: string | null;
  startupStage: string | null;
  mentorshipType: string | null;

  accountStatus:
    | "PENDING"
    | "APPROVED"
    | "REJECTED"
    | "SUSPENDED";

  visibilityStatus:
    | "DRAFT"
    | "PUBLISHED"
    | "HIDDEN";

  planCode: string | null;

  createdAt: string;
  updatedAt: string;

  user: {
    id: string;
    name: string | null;
    email: string;
  };
}

interface ApiEnvelope<T> {
  data: T;
}

function formatEnum(
  value: string | null
) {
  if (!value) {
    return "Not specified";
  }

  return value
    .toLowerCase()
    .split("_")
    .map(
      (part) =>
        part.charAt(0).toUpperCase() +
        part.slice(1)
    )
    .join(" ");
}

export default function AdminAdvisorsPage() {
  const [advisors, setAdvisors] =
    useState<AdminAdvisor[]>([]);

  const [
    selectedFilter,
    setSelectedFilter,
  ] = useState("ALL");

  const [searchQuery, setSearchQuery] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const [actionKey, setActionKey] =
    useState<string | null>(null);

  const [planInputs, setPlanInputs] =
    useState<Record<string, string>>(
      {}
    );

  useEffect(() => {
    let active = true;

    async function loadAdvisors() {
      try {
        const response =
          await api.get<
            ApiEnvelope<AdminAdvisor[]>
          >("/admin/advisors");

        if (!active) {
          return;
        }

        const data =
          response.data.data;

        setAdvisors(data);

        setPlanInputs(
          Object.fromEntries(
            data.map((advisor) => [
              advisor.id,
              advisor.planCode ?? "",
            ])
          )
        );
      } catch (loadError) {
        console.error(
          "Failed to load admin advisors",
          loadError
        );

        if (active) {
          setError(
            "Failed to load advisor applications. Make sure you are authenticated as an admin."
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadAdvisors();

    return () => {
      active = false;
    };
  }, []);

  const filters = [
    "ALL",
    "PENDING",
    "APPROVED",
    "REJECTED",
    "PUBLISHED",
    "HIDDEN",
  ];

  const filteredAdvisors =
    useMemo(() => {
      const normalizedSearch =
        searchQuery
          .trim()
          .toLowerCase();

      return advisors.filter(
        (advisor) => {
          const matchesFilter =
            selectedFilter === "ALL" ||
            advisor.accountStatus ===
              selectedFilter ||
            advisor.visibilityStatus ===
              selectedFilter;

          const searchable = [
            advisor.user.name ?? "",
            advisor.user.email,
            advisor.currentRole ?? "",
            advisor.organization ?? "",
            advisor.expertiseArea ?? "",
            advisor.industry ?? "",
            advisor.planCode ?? "",
          ];

          const matchesSearch =
            !normalizedSearch ||
            searchable.some((value) =>
              value
                .toLowerCase()
                .includes(
                  normalizedSearch
                )
            );

          return (
            matchesFilter &&
            matchesSearch
          );
        }
      );
    }, [
      advisors,
      searchQuery,
      selectedFilter,
    ]);

  const pendingCount =
    advisors.filter(
      (advisor) =>
        advisor.accountStatus ===
        "PENDING"
    ).length;

  const approvedCount =
    advisors.filter(
      (advisor) =>
        advisor.accountStatus ===
        "APPROVED"
    ).length;

  const publishedCount =
    advisors.filter(
      (advisor) =>
        advisor.visibilityStatus ===
        "PUBLISHED"
    ).length;

  function mergeAdvisor(
    advisorId: string,
    changes: Partial<AdminAdvisor>
  ) {
    setAdvisors((current) =>
      current.map((advisor) =>
        advisor.id === advisorId
          ? {
              ...advisor,
              ...changes,
            }
          : advisor
      )
    );
  }

  async function updateAccountStatus(
    advisorId: string,
    accountStatus:
      | "APPROVED"
      | "REJECTED"
  ) {
    const key =
      `${advisorId}:account`;

    try {
      setActionKey(key);
      setError(null);

      const response =
        await api.patch<
          ApiEnvelope<
            Partial<AdminAdvisor>
          >
        >(
          `/admin/advisors/${advisorId}/account-status`,
          {
            accountStatus,
          }
        );

      mergeAdvisor(
        advisorId,
        response.data.data
      );
    } catch (updateError) {
      console.error(
        "Failed to update advisor account status",
        updateError
      );

      setError(
        "Failed to update advisor account status."
      );
    } finally {
      setActionKey(null);
    }
  }

  async function updateVisibility(
    advisorId: string,
    visibilityStatus:
      | "PUBLISHED"
      | "HIDDEN"
  ) {
    const key =
      `${advisorId}:visibility`;

    try {
      setActionKey(key);
      setError(null);

      const response =
        await api.patch<
          ApiEnvelope<
            Partial<AdminAdvisor>
          >
        >(
          `/admin/advisors/${advisorId}/visibility`,
          {
            visibilityStatus,
          }
        );

      mergeAdvisor(
        advisorId,
        response.data.data
      );
    } catch (updateError) {
      console.error(
        "Failed to update advisor visibility",
        updateError
      );

      setError(
        "Failed to update advisor visibility."
      );
    } finally {
      setActionKey(null);
    }
  }

  async function updatePlan(
    advisorId: string
  ) {
    const planCode =
      planInputs[advisorId]?.trim();

    if (!planCode) {
      setError(
        "Plan code cannot be empty."
      );
      return;
    }

    const key =
      `${advisorId}:plan`;

    try {
      setActionKey(key);
      setError(null);

      const response =
        await api.patch<
          ApiEnvelope<
            Partial<AdminAdvisor>
          >
        >(
          `/admin/advisors/${advisorId}/plan`,
          {
            planCode,
          }
        );

      mergeAdvisor(
        advisorId,
        response.data.data
      );
    } catch (updateError) {
      console.error(
        "Failed to update advisor plan",
        updateError
      );

      setError(
        "Failed to update advisor plan."
      );
    } finally {
      setActionKey(null);
    }
  }

  return (
    <AdminShell
      title="Advisors"
      subtitle="Manage advisor applications, approval, visibility, and plans"
    >
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-[#0F172A] lg:text-[38px]">
            Advisor Management
          </h2>

          <p className="mt-2 max-w-2xl text-[15px] text-[#64748B]">
            Review real advisor
            applications and control
            platform visibility.
          </p>
        </div>

        <div className="flex h-12 w-full items-center gap-3 rounded-full border border-[#E2E8F0] bg-[#F7F4EE]/95 px-5 shadow-sm xl:w-[320px]">
          <Search className="h-4 w-4 text-[#94A3B8]" />

          <input
            type="text"
            placeholder="Search advisors..."
            value={searchQuery}
            onChange={(event) =>
              setSearchQuery(
                event.target.value
              )
            }
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#94A3B8]"
          />
        </div>
      </div>

      <section className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard
          title="Total Advisors"
          value={String(
            advisors.length
          )}
          icon={Users}
          iconColor="text-sky-500"
        />

        <AdminStatCard
          title="Pending Approval"
          value={String(
            pendingCount
          )}
          icon={ShieldCheck}
          iconColor="text-orange-500"
        />

        <AdminStatCard
          title="Approved"
          value={String(
            approvedCount
          )}
          icon={UserCheck}
          iconColor="text-emerald-500"
        />

        <AdminStatCard
          title="Published"
          value={String(
            publishedCount
          )}
          icon={Eye}
          iconColor="text-violet-500"
        />
      </section>

      <section className="mt-7 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() =>
              setSelectedFilter(
                filter
              )
            }
            className={`h-11 rounded-full px-5 text-sm font-semibold transition-all duration-200 ${
              selectedFilter ===
              filter
                ? "bg-[#071133] text-white shadow-lg shadow-[#071133]/20"
                : "border border-[#E8EDF5] bg-[#F7F4EE]/95 text-[#475569] hover:bg-white"
            }`}
          >
            {formatEnum(filter)}
          </button>
        ))}
      </section>

      {error && (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      <section className="mt-7 space-y-5">
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map(
              (item) => (
                <div
                  key={item}
                  className="h-72 animate-pulse rounded-[30px] bg-white"
                />
              )
            )}
          </div>
        ) : filteredAdvisors.length ===
          0 ? (
          <AdminEmptyState
            title="No Advisors Found"
            description="No advisor applications matched the current filters."
          />
        ) : (
          filteredAdvisors.map(
            (advisor) => {
              const accountBusy =
                actionKey ===
                `${advisor.id}:account`;

              const visibilityBusy =
                actionKey ===
                `${advisor.id}:visibility`;

              const planBusy =
                actionKey ===
                `${advisor.id}:plan`;

              return (
                <div
                  key={advisor.id}
                  className="rounded-[30px] border border-[#E8EDF5] bg-[#F7F4EE]/95 p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-bold text-[#0F172A]">
                            {advisor.user
                              .name ||
                              "Unnamed Advisor"}
                          </h3>

                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                            {
                              advisor.accountStatus
                            }
                          </span>

                          <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                            {
                              advisor.visibilityStatus
                            }
                          </span>
                        </div>

                        <p className="mt-2 text-sm text-[#64748B]">
                          {
                            advisor.user
                              .email
                          }
                        </p>
                      </div>

                      <div className="rounded-2xl border border-[#E8EDF5] bg-white px-4 py-3 text-sm">
                        <span className="text-[#94A3B8]">
                          Plan:{" "}
                        </span>

                        <span className="font-semibold text-[#0F172A]">
                          {advisor.planCode ||
                            "Not assigned"}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                          Role
                        </p>

                        <p className="mt-1 font-semibold text-[#0F172A]">
                          {advisor.currentRole ||
                            "Not specified"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                          Organization
                        </p>

                        <p className="mt-1 font-semibold text-[#0F172A]">
                          {advisor.organization ||
                            "Not specified"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                          Expertise
                        </p>

                        <p className="mt-1 font-semibold text-[#0F172A]">
                          {advisor.expertiseArea ||
                            "Not specified"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                          Experience
                        </p>

                        <p className="mt-1 font-semibold text-[#0F172A]">
                          {formatEnum(
                            advisor.experienceLevel
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-[#E8EDF5] pt-5">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                        Account Review
                      </p>

                      <div className="flex flex-wrap gap-3">
                        <button
                          type="button"
                          disabled={
                            accountBusy
                          }
                          onClick={() =>
                            void updateAccountStatus(
                              advisor.id,
                              "APPROVED"
                            )
                          }
                          className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
                        >
                          Approve
                        </button>

                        <button
                          type="button"
                          disabled={
                            accountBusy
                          }
                          onClick={() =>
                            void updateAccountStatus(
                              advisor.id,
                              "REJECTED"
                            )
                          }
                          className="rounded-full border border-red-200 bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-700 disabled:opacity-50"
                        >
                          Reject
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-[#E8EDF5] pt-5">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                        Discovery Visibility
                      </p>

                      <div className="flex flex-wrap gap-3">
                        <button
                          type="button"
                          disabled={
                            visibilityBusy
                          }
                          onClick={() =>
                            void updateVisibility(
                              advisor.id,
                              "PUBLISHED"
                            )
                          }
                          className="rounded-full bg-[#071133] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
                        >
                          Publish
                        </button>

                        <button
                          type="button"
                          disabled={
                            visibilityBusy
                          }
                          onClick={() =>
                            void updateVisibility(
                              advisor.id,
                              "HIDDEN"
                            )
                          }
                          className="rounded-full border border-[#E8EDF5] bg-white px-5 py-2.5 text-sm font-semibold text-[#475569] disabled:opacity-50"
                        >
                          Hide
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-[#E8EDF5] pt-5">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                        Advisor Plan
                      </p>

                      <div className="flex max-w-md gap-3">
                        <input
                          value={
                            planInputs[
                              advisor.id
                            ] ?? ""
                          }
                          onChange={(
                            event
                          ) =>
                            setPlanInputs(
                              (
                                current
                              ) => ({
                                ...current,
                                [advisor.id]:
                                  event
                                    .target
                                    .value,
                              })
                            )
                          }
                          placeholder="e.g. PRO"
                          className="h-11 flex-1 rounded-xl border border-[#E8EDF5] bg-white px-4 text-sm outline-none focus:border-[#071133]"
                        />

                        <button
                          type="button"
                          disabled={
                            planBusy
                          }
                          onClick={() =>
                            void updatePlan(
                              advisor.id
                            )
                          }
                          className="rounded-xl bg-[#071133] px-5 text-sm font-semibold text-white disabled:opacity-50"
                        >
                          Save Plan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )
        )}
      </section>
    </AdminShell>
  );
}