"use client";

import { useEffect, useMemo, useState } from "react";

import InvestorCard from "@/components/founder/investors/investor-card";
import InvestorCTA from "@/components/founder/investors/investor-cta";
import InvestorFilters from "@/components/founder/investors/investor-filters";
import InvestorHero from "@/components/founder/investors/investor-hero";

import { getInvestors } from "@/lib/api";

import { Investor } from "@/types/investor";

export default function InvestorsPage() {
  const [search, setSearch] =
    useState("");

  const [
    selectedStage,
    setSelectedStage,
  ] = useState("All Stages");

  const [investors, setInvestors] =
    useState<Investor[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadInvestors() {
      try {
        const data =
          await getInvestors();

        setInvestors(data);
      } catch (error) {
        console.error(
          "Failed to load investors",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    loadInvestors();
  }, []);

  const filteredInvestors =
    useMemo(() => {
      return investors.filter(
        (investor) => {
          const matchesSearch =
            investor.fullName
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            investor.firmName
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            investor.industries.some(
              (item) =>
                item
                  .toLowerCase()
                  .includes(
                    search.toLowerCase()
                  )
            );

          const matchesStage =
            selectedStage ===
              "All Stages" ||
            investor.investmentStage ===
              selectedStage;

          return (
            matchesSearch &&
            matchesStage
          );
        }
      );
    }, [
      investors,
      search,
      selectedStage,
    ]);

  return (
    <main className="min-h-screen bg-[#f8fbff]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

        {/* HERO */}
        <InvestorHero />

        {/* FILTERS */}
        <InvestorFilters
          search={search}
          setSearch={setSearch}
          selectedStage={
            selectedStage
          }
          setSelectedStage={
            setSelectedStage
          }
        />

        {/* HEADER */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
              Recommended Investors
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Discover investors aligned
              with your startup stage,
              funding goals and industry
              vision.
            </p>
          </div>

          <div className="w-fit rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-4 py-3 text-sm font-medium text-[#6B6B6B] shadow-sm">
            {
              filteredInvestors.length
            }{" "}
            Investors Found
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

        {/* EMPTY */}
        {!loading &&
          filteredInvestors.length ===
            0 && (
            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-10 text-center shadow-sm">

              <h3 className="text-3xl font-black text-[#16214A]">
                No Investors Found
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-500">
                Try updating your search
                or funding stage filters to
                discover more investors.
              </p>

              <button
                onClick={() => {
                  setSearch("");

                  setSelectedStage(
                    "All Stages"
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
          filteredInvestors.length >
            0 && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

              {filteredInvestors.map(
                (investor) => (
                  <InvestorCard
                    key={
                      investor.id
                    }
                    investor={
                      investor
                    }
                  />
                )
              )}

            </div>
          )}

        {/* CTA */}
        <InvestorCTA />

      </div>
    </main>
  );
}