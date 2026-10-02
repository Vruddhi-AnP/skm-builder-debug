"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  CheckCircle2,
  Clock3,
  MessageSquare,
  Search,
  Send,
} from "lucide-react";

import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminShell from "@/components/admin/AdminShell";
import AdminStatCard from "@/components/admin/AdminStatCard";

import api from "@/lib/axios";

type ConsultationStatus =
  | "NEW"
  | "CONTACTED"
  | "SCHEDULED"
  | "CLOSED"
  | "REJECTED";

interface AdminConsultation {
  id: string;

  founderId: string;
  advisorId: string;
  startupId: string | null;

  message: string | null;

  status: ConsultationStatus;

  adminNotes: string | null;

  createdAt: string;
  updatedAt: string;

  founder: {
    id: string;
    name: string;
  };

  startup: {
    id: string;
    name: string;
  } | null;

  advisor: {
    id: string;
    name: string;
    currentRole: string | null;
    organization: string | null;
  };
}

interface ApiEnvelope<T> {
  data: T;
}

function formatEnum(
  value: string
) {
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

function statusClass(
  status: ConsultationStatus
) {
  if (status === "CLOSED") {
    return "bg-emerald-100 text-emerald-700";
  }

  if (status === "SCHEDULED") {
    return "bg-sky-100 text-sky-700";
  }

  if (status === "REJECTED") {
    return "bg-red-100 text-red-700";
  }

  if (status === "CONTACTED") {
    return "bg-violet-100 text-violet-700";
  }

  return "bg-orange-100 text-orange-700";
}

export default function AdminConsultationsPage() {
  const [
    consultations,
    setConsultations,
  ] = useState<AdminConsultation[]>(
    []
  );

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

  const [notes, setNotes] =
    useState<Record<string, string>>(
      {}
    );

  useEffect(() => {
    let active = true;

    async function loadConsultations() {
      try {
        const response =
          await api.get<
            ApiEnvelope<
              AdminConsultation[]
            >
          >(
            "/admin/consultations"
          );

        if (!active) {
          return;
        }

        const data =
          response.data.data;

        setConsultations(data);

        setNotes(
          Object.fromEntries(
            data.map(
              (consultation) => [
                consultation.id,
                consultation.adminNotes ??
                  "",
              ]
            )
          )
        );
      } catch (loadError) {
        console.error(
          "Failed to load consultations",
          loadError
        );

        if (active) {
          setError(
            "Failed to load consultations. Make sure you are authenticated as an admin."
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadConsultations();

    return () => {
      active = false;
    };
  }, []);

  const filters = [
    "ALL",
    "NEW",
    "CONTACTED",
    "SCHEDULED",
    "CLOSED",
    "REJECTED",
  ];

  const filteredConsultations =
    useMemo(() => {
      const normalizedSearch =
        searchQuery
          .trim()
          .toLowerCase();

      return consultations.filter(
        (consultation) => {
          const matchesFilter =
            selectedFilter === "ALL" ||
            consultation.status ===
              selectedFilter;

          const searchable = [
            consultation.founder.name,
            consultation.startup
              ?.name ?? "",
            consultation.advisor.name,
            consultation.message ?? "",
            consultation.adminNotes ??
              "",
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
      consultations,
      searchQuery,
      selectedFilter,
    ]);

  const newCount =
    consultations.filter(
      (item) =>
        item.status === "NEW"
    ).length;

  const scheduledCount =
    consultations.filter(
      (item) =>
        item.status ===
        "SCHEDULED"
    ).length;

  const closedCount =
    consultations.filter(
      (item) =>
        item.status === "CLOSED"
    ).length;

  function mergeConsultation(
    consultationId: string,
    changes: Partial<AdminConsultation>
  ) {
    setConsultations((current) =>
      current.map((item) =>
        item.id === consultationId
          ? {
              ...item,
              ...changes,
            }
          : item
      )
    );
  }

  async function updateStatus(
    consultationId: string,
    status: ConsultationStatus
  ) {
    const key =
      `${consultationId}:status`;

    try {
      setActionKey(key);
      setError(null);

      const response =
        await api.patch<
          ApiEnvelope<
            Partial<AdminConsultation>
          >
        >(
          `/admin/consultations/${consultationId}/status`,
          {
            status,
          }
        );

      mergeConsultation(
        consultationId,
        response.data.data
      );
    } catch (updateError) {
      console.error(
        "Failed to update consultation status",
        updateError
      );

      setError(
        "Failed to update consultation status."
      );
    } finally {
      setActionKey(null);
    }
  }

  async function saveNotes(
    consultationId: string
  ) {
    const key =
      `${consultationId}:notes`;

    try {
      setActionKey(key);
      setError(null);

      const response =
        await api.patch<
          ApiEnvelope<
            Partial<AdminConsultation>
          >
        >(
          `/admin/consultations/${consultationId}/notes`,
          {
            adminNotes:
              notes[consultationId] ??
              "",
          }
        );

      mergeConsultation(
        consultationId,
        response.data.data
      );
    } catch (updateError) {
      console.error(
        "Failed to save consultation notes",
        updateError
      );

      setError(
        "Failed to save admin notes."
      );
    } finally {
      setActionKey(null);
    }
  }

  return (
    <AdminShell
      title="Consultations"
      subtitle="Manage real founder-advisor consultation requests"
    >
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-[#0F172A] lg:text-[38px]">
            Consultation Management
          </h2>

          <p className="mt-2 max-w-2xl text-[15px] text-[#64748B]">
            Review consultation
            requests, coordinate status
            changes, and maintain admin
            notes.
          </p>
        </div>

        <div className="flex h-12 w-full items-center gap-3 rounded-full border border-[#E2E8F0] bg-[#F7F4EE]/95 px-5 shadow-sm xl:w-[320px]">
          <Search className="h-4 w-4 text-[#94A3B8]" />

          <input
            type="text"
            placeholder="Search consultations..."
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
          title="Total Requests"
          value={String(
            consultations.length
          )}
          icon={MessageSquare}
          iconColor="text-sky-500"
        />

        <AdminStatCard
          title="New"
          value={String(newCount)}
          icon={Clock3}
          iconColor="text-orange-500"
        />

        <AdminStatCard
          title="Scheduled"
          value={String(
            scheduledCount
          )}
          icon={Send}
          iconColor="text-violet-500"
        />

        <AdminStatCard
          title="Closed"
          value={String(
            closedCount
          )}
          icon={CheckCircle2}
          iconColor="text-emerald-500"
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
                  className="h-80 animate-pulse rounded-[30px] bg-white"
                />
              )
            )}
          </div>
        ) : filteredConsultations.length ===
          0 ? (
          <AdminEmptyState
            title="No Consultations Found"
            description="No consultation requests matched the current filters."
          />
        ) : (
          filteredConsultations.map(
            (consultation) => {
              const statusBusy =
                actionKey ===
                `${consultation.id}:status`;

              const notesBusy =
                actionKey ===
                `${consultation.id}:notes`;

              return (
                <div
                  key={consultation.id}
                  className="rounded-[30px] border border-[#E8EDF5] bg-[#F7F4EE]/95 p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-bold text-[#0F172A]">
                            {consultation
                              .startup
                              ?.name ||
                              "Startup not available"}
                          </h3>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass(
                              consultation.status
                            )}`}
                          >
                            {formatEnum(
                              consultation.status
                            )}
                          </span>
                        </div>

                        <p className="mt-2 text-sm text-[#64748B]">
                          Requested{" "}
                          {new Date(
                            consultation.createdAt
                          ).toLocaleString()}
                        </p>
                      </div>

                      <select
                        value={
                          consultation.status
                        }
                        disabled={statusBusy}
                        onChange={(event) =>
                          void updateStatus(
                            consultation.id,
                            event.target
                              .value as ConsultationStatus
                          )
                        }
                        className="h-11 rounded-xl border border-[#E8EDF5] bg-white px-4 text-sm font-semibold text-[#0F172A] outline-none disabled:opacity-50"
                      >
                        <option value="NEW">
                          New
                        </option>

                        <option value="CONTACTED">
                          Contacted
                        </option>

                        <option value="SCHEDULED">
                          Scheduled
                        </option>

                        <option value="CLOSED">
                          Closed
                        </option>

                        <option value="REJECTED">
                          Rejected
                        </option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                          Founder
                        </p>

                        <p className="mt-1 font-semibold text-[#0F172A]">
                          {
                            consultation
                              .founder
                              .name
                          }
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                          Startup
                        </p>

                        <p className="mt-1 font-semibold text-[#0F172A]">
                          {consultation
                            .startup
                            ?.name ||
                            "Not available"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                          Advisor
                        </p>

                        <p className="mt-1 font-semibold text-[#0F172A]">
                          {
                            consultation
                              .advisor.name
                          }
                        </p>

                        {(consultation
                          .advisor
                          .currentRole ||
                          consultation
                            .advisor
                            .organization) && (
                          <p className="mt-1 text-sm text-[#64748B]">
                            {[
                              consultation
                                .advisor
                                .currentRole,
                              consultation
                                .advisor
                                .organization,
                            ]
                              .filter(
                                Boolean
                              )
                              .join(" · ")}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#E8EDF5] bg-white p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                        Founder Request
                      </p>

                      <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-[#475569]">
                        {consultation.message ||
                          "No message provided."}
                      </p>
                    </div>

                    <div className="border-t border-[#E8EDF5] pt-5">
                      <label
                        htmlFor={`notes-${consultation.id}`}
                        className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]"
                      >
                        Admin Notes
                      </label>

                      <textarea
                        id={`notes-${consultation.id}`}
                        rows={4}
                        value={
                          notes[
                            consultation.id
                          ] ?? ""
                        }
                        onChange={(event) =>
                          setNotes(
                            (current) => ({
                              ...current,
                              [consultation.id]:
                                event
                                  .target
                                  .value,
                            })
                          )
                        }
                        placeholder="Add internal coordination notes..."
                        className="mt-3 w-full resize-y rounded-2xl border border-[#E8EDF5] bg-white p-4 text-sm outline-none focus:border-[#071133]"
                      />

                      <button
                        type="button"
                        disabled={notesBusy}
                        onClick={() =>
                          void saveNotes(
                            consultation.id
                          )
                        }
                        className="mt-3 rounded-xl bg-[#071133] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
                      >
                        Save Admin Notes
                      </button>
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