"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import AdvisorCard from "@/components/founder/advisors/advisor-card";
import AdvisorFilters from "@/components/founder/advisors/advisor-filters";
import AdvisorHero from "@/components/founder/advisors/advisor-hero";

import { getAdvisors } from "@/lib/api";

import type { Advisor } from "@/types/advisor";

export default function AdvisorsPage() {
  const [search, setSearch] =
    useState("");

  const [
    selectedExpertise,
    setSelectedExpertise,
  ] = useState("All Expertise");

  const [advisors, setAdvisors] =
    useState<Advisor[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadAdvisors() {
      try {
        setLoading(true);
        setError(null);

        const data =
          await getAdvisors();

        if (active) {
          setAdvisors(data);
        }
      } catch (loadError) {
        console.error(
          "Failed to load advisors",
          loadError
        );

        if (active) {
          setError(
            "Failed to load advisors. Please try again."
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

  const expertiseOptions =
    useMemo(() => {
      const values =
        advisors.flatMap(
          (advisor) => [
            advisor.category,
            ...advisor.expertise,
          ]
        );

      return Array.from(
        new Set(
          values
            .map((value) =>
              value.trim()
            )
            .filter(Boolean)
        )
      ).sort((a, b) =>
        a.localeCompare(b)
      );
    }, [advisors]);

  const filteredAdvisors =
    useMemo(() => {
      const normalizedSearch =
        search.trim().toLowerCase();

      const normalizedFilter =
        selectedExpertise
          .trim()
          .toLowerCase();

      return advisors.filter(
        (advisor) => {
          const searchableValues = [
            advisor.fullName,
            advisor.headline,
            advisor.category,
            advisor.organization ?? "",
            ...advisor.expertise,
          ];

          const matchesSearch =
            !normalizedSearch ||
            searchableValues.some(
              (value) =>
                value
                  .toLowerCase()
                  .includes(
                    normalizedSearch
                  )
            );

          const matchesExpertise =
            selectedExpertise ===
              "All Expertise" ||
            advisor.category
              .toLowerCase()
              .includes(
                normalizedFilter
              ) ||
            advisor.expertise.some(
              (item) =>
                item
                  .toLowerCase()
                  .includes(
                    normalizedFilter
                  )
            );

          return (
            matchesSearch &&
            matchesExpertise
          );
        }
      );
    }, [
      advisors,
      search,
      selectedExpertise,
    ]);

  return (
    <main className="min-h-screen bg-[#f8fbff]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <AdvisorHero
          advisorCount={
            advisors.length
          }
        />

        <AdvisorFilters
          search={search}
          setSearch={setSearch}
          selectedExpertise={
            selectedExpertise
          }
          setSelectedExpertise={
            setSelectedExpertise
          }
          expertiseOptions={
            expertiseOptions
          }
        />

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
              Approved Advisors
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Browse advisor profiles
              that have been approved
              and published on Startup
              Ka Mall.
            </p>
          </div>

          <div className="w-fit rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-4 py-3 text-sm font-medium text-[#6B6B6B] shadow-sm">
            {
              filteredAdvisors.length
            }{" "}
            Advisors Found
          </div>
        </div>

        {loading && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[1, 2, 3, 4].map(
              (item) => (
                <div
                  key={item}
                  className="h-80 animate-pulse rounded-[32px] bg-[#F7F4EE]/95"
                />
              )
            )}
          </div>
        )}

        {error && !loading && (
          <div className="rounded-[32px] border border-red-100 bg-red-50 p-10 text-center">
            <h3 className="text-2xl font-black text-red-600">
              Something went wrong
            </h3>

            <p className="mt-3 text-sm text-red-500">
              {error}
            </p>

            <button
              type="button"
              onClick={() =>
                window.location.reload()
              }
              className="mt-6 rounded-2xl bg-red-600 px-6 py-3 text-sm font-semibold text-white"
            >
              Retry
            </button>
          </div>
        )}

        {!loading &&
          !error &&
          filteredAdvisors.length ===
            0 && (
            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-10 text-center shadow-sm">
              <h3 className="text-3xl font-black text-[#16214A]">
                No Advisors Found
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-500">
                No approved and
                published advisors match
                the current search or
                filter.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");

                  setSelectedExpertise(
                    "All Expertise"
                  );
                }}
                className="mt-8 rounded-2xl bg-primary px-6 py-3 font-semibold text-white"
              >
                Reset Filters
              </button>
            </div>
          )}

        {!loading &&
          !error &&
          filteredAdvisors.length >
            0 && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {filteredAdvisors.map(
                (advisor) => (
                  <AdvisorCard
                    key={advisor.id}
                    advisor={advisor}
                  />
                )
              )}
            </div>
          )}
      </div>
    </main>
  );
}