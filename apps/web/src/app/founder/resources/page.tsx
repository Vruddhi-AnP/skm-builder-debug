"use client";

import { useEffect, useMemo, useState } from "react";

import ResourceCard from "@/components/founder/resources/resource-card";
import ResourceCTA from "@/components/founder/resources/resource-cta";
import ResourceFilters from "@/components/founder/resources/resource-filters";
import ResourceHero from "@/components/founder/resources/resource-hero";

import { getResources } from "@/lib/api";

import { Resource } from "@/types/resource";

export default function FounderResourcesPage() {
  const [search, setSearch] =
    useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All Categories");

  const [resources, setResources] =
    useState<Resource[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);
    
  useEffect(() => {
    async function loadResources() {
      try {
        const data =
          await getResources();

        setResources(data);
     } catch (error) {
        console.error("Failed to load resources", error);
        setError("Failed to load resources. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadResources();
  }, []);

  const filteredResources =
    useMemo(() => {
      return resources.filter(
        (resource) => {
          const matchesSearch =
            resource.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            resource.description
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            resource.category
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesCategory =
            selectedCategory ===
              "All Categories" ||
            resource.category ===
              selectedCategory;

          return (
            matchesSearch &&
            matchesCategory
          );
        }
      );
    }, [
      resources,
      search,
      selectedCategory,
    ]);

  return (
    <main className="min-h-screen bg-[#f8fbff]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

        {/* HERO */}
        <ResourceHero />

        {/* FILTERS */}
        <ResourceFilters
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
            <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
              Founder Resources
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Explore startup execution
              systems, fundraising
              frameworks, founder guides
              and startup growth
              playbooks.
            </p>
          </div>

          <div className="w-fit rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-4 py-3 text-sm font-medium text-[#6B6B6B] shadow-sm">
            {
              filteredResources.length
            }{" "}
            Resources Found
          </div>

        </div>

        {/* LOADING */}
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
        {!loading && !error &&
          filteredResources.length ===
            0 && (
            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-10 text-center shadow-sm">

              <h3 className="text-3xl font-black text-[#16214A]">
                No Resources Found
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-500">
                Try updating your search
                or category filters to
                discover more founder
                resources.
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
        {!loading && !error &&
          filteredResources.length >
            0 && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

              {filteredResources.map(
                (resource) => (
                  <ResourceCard
                    key={
                      resource.id
                    }
                    resource={
                      resource
                    }
                  />
                )
              )}

            </div>
          )}

        {/* CTA */}
        <ResourceCTA />

      </div>
    </main>
  );
}