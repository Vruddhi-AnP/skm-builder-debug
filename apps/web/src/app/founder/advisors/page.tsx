"use client";

import { useEffect, useMemo, useState } from "react";

import AdvisorHero from "@/components/founder/advisors/advisor-hero";
import AdvisorFilters from "@/components/founder/advisors/advisor-filters";
import AdvisorCard from "@/components/founder/advisors/advisor-card";
import AdvisorCTA from "@/components/founder/advisors/advisor-cta";

import { getAdvisors } from "@/lib/api";

import { Advisor } from "@/types/advisor";

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
    async function loadAdvisors() {
      try {
        const data =
          await getAdvisors();

        setAdvisors(data);
            } catch (error) {
        console.error("Failed to load advisors", error);
        setError("Failed to load advisors. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadAdvisors();
  }, []);

  const filteredAdvisors =
    useMemo(() => {
      return advisors.filter(
        (advisor) => {
          const matchesSearch =
            advisor.fullName
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            advisor.headline
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            advisor.expertise.some(
              (item) =>
                item
                  .toLowerCase()
                  .includes(
                    search.toLowerCase()
                  )
            );

          const matchesCategory =
            selectedExpertise ===
              "All Expertise" ||
            advisor.category ===
              selectedExpertise;

          return (
            matchesSearch &&
            matchesCategory
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

        {/* HERO */}
        <AdvisorHero />

        {/* FILTERS */}
        <AdvisorFilters
          search={search}
          setSearch={setSearch}
          selectedExpertise={
            selectedExpertise
          }
          setSelectedExpertise={
            setSelectedExpertise
          }
        />

        {/* HEADER */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
              Recommended Advisors
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Curated startup experts
              aligned with your founder
              journey and execution goals.
            </p>
          </div>

          <div className="w-fit rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-4 py-3 text-sm font-medium text-[#6B6B6B] shadow-sm">
            {
              filteredAdvisors.length
            }{" "}
            Advisors Found
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[1, 2, 3, 4].map(
              (item) => (
                <div
                  key={item}
                  className="h-[320px] animate-pulse rounded-[32px] bg-[#F7F4EE]/95"
                />
              )
            )}
          </div>
        )}

        {/* ERROR */}
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
                onClick={() => window.location.reload()}
                className="mt-6 rounded-2xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Retry
              </button>
            </div>
          )}

        {/* EMPTY */}
        {!loading && !error && filteredAdvisors.length === 0 && (
            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-10 text-center shadow-sm">
              <h3 className="text-3xl font-black text-[#16214A]">
                No Advisors Found
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-500">
                Try adjusting your
                filters or search terms
                to discover more startup
                advisors.
              </p>

              <button
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

        {/* GRID */}
        {!loading && !error && filteredAdvisors.length > 0 && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {filteredAdvisors.map(
                (advisor) => (
                  <AdvisorCard
                    key={
                      advisor.id
                    }
                    advisor={
                      advisor
                    }
                  />
                )
              )}
            </div>
          )}

        {/* CTA */}
        <AdvisorCTA />

      </div>
    </main>
  );
}