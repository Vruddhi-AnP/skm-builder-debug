"use client";

import { useEffect, useMemo, useState } from "react";

import ProgramCard from "@/components/founder/programs/program-card";
import ProgramCTA from "@/components/founder/programs/program-cta";
import ProgramFilters from "@/components/founder/programs/program-filters";
import ProgramHero from "@/components/founder/programs/program-hero";

import { getPrograms } from "@/lib/api";

import { Program } from "@/types/program";

export default function ProgramsPage() {
  const [search, setSearch] =
    useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All Categories");

  const [programs, setPrograms] =
    useState<Program[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadPrograms() {
      try {
        const data =
          await getPrograms();

        setPrograms(data);
      } catch (error) {
        console.error(
          "Failed to load programs",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    loadPrograms();
  }, []);

  const filteredPrograms =
    useMemo(() => {
      return programs.filter(
        (program) => {
          const matchesSearch =
            program.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            program.description
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            program.category
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesCategory =
            selectedCategory ===
              "All Categories" ||
            program.category ===
              selectedCategory;

          return (
            matchesSearch &&
            matchesCategory
          );
        }
      );
    }, [
      programs,
      search,
      selectedCategory,
    ]);

  return (
    <main className="min-h-screen bg-[#f8fbff]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

        {/* HERO */}
        <ProgramHero />

        {/* FILTERS */}
        <ProgramFilters
          search={search}
          setSearch={setSearch}
          selectedCategory={
            selectedCategory
          }
          setSelectedCategory={
            setSelectedCategory
          }
        />

        {/* HEADER */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-800">
              Startup Programs
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Founder-focused execution
              programs designed to improve
              startup growth, validation,
              fundraising and scaling.
            </p>
          </div>

          <div className="w-fit rounded-2xl border border-border/60 bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-sm">
            {
              filteredPrograms.length
            }{" "}
            Programs Found
          </div>

        </div>

        {/* LOADING */}
        {loading && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {[1, 2, 3, 4].map(
              (item) => (
                <div
                  key={item}
                  className="h-[320px] animate-pulse rounded-[32px] bg-white"
                />
              )
            )}

          </div>
        )}

        {/* EMPTY */}
        {!loading &&
          filteredPrograms.length ===
            0 && (
            <div className="rounded-[32px] border border-border/60 bg-white p-10 text-center shadow-sm">

              <h3 className="text-3xl font-black text-slate-800">
                No Programs Found
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-500">
                Try adjusting your search
                or category filters to
                discover more startup
                programs.
              </p>

              <button
                onClick={() => {
                  setSearch("");

                  setSelectedCategory(
                    "All Categories"
                  );
                }}
                className="mt-8 rounded-2xl bg-primary px-6 py-3 font-semibold text-white"
              >
                Reset Filters
              </button>

            </div>
          )}

        {/* GRID */}
        {!loading &&
          filteredPrograms.length >
            0 && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

              {filteredPrograms.map(
                (program) => (
                  <ProgramCard
                    key={
                      program.id
                    }
                    program={
                      program
                    }
                  />
                )
              )}

            </div>
          )}

        {/* CTA */}
        <ProgramCTA />

      </div>
    </main>
  );
}