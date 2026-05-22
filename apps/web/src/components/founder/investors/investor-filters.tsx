"use client";

interface Props {
  search: string;

  setSearch: (
    value: string
  ) => void;

  selectedStage: string;

  setSelectedStage: (
    value: string
  ) => void;
}

export default function InvestorFilters({
  search,
  setSearch,
  selectedStage,
  setSelectedStage,
}: Props) {
  return (
    <section className="rounded-[32px] border border-border/60 bg-white p-5 shadow-sm md:p-6">

      <div className="flex flex-col gap-4 xl:flex-row">

        {/* SEARCH */}
        <div className="flex-1">

          <input
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            placeholder="Search investors, firms or industries..."
            className="w-full rounded-2xl border border-border/60 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
          />

        </div>

        {/* SELECT */}
        <div className="xl:w-60">

          <select
            value={selectedStage}
            onChange={(e) =>
              setSelectedStage(
                e.target.value
              )
            }
            className="w-full rounded-2xl border border-border/60 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
          >
            <option>
              All Stages
            </option>

            <option>
              Angel
            </option>

            <option>
              Pre-Seed
            </option>

            <option>
              Seed
            </option>

            <option>
              Series A
            </option>
          </select>

        </div>
      </div>
    </section>
  );
}