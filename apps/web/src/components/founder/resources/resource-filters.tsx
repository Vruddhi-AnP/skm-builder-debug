"use client";

interface Props {
  search: string;

  setSearch: (
    value: string
  ) => void;

  selectedCategory: string;

  setSelectedCategory: (
    value: string
  ) => void;
}

export default function ResourceFilters({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return (
    <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-5 shadow-sm md:p-6">

      <div className="flex flex-col gap-4 xl:flex-row">

        <div className="flex-1">

          <input
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            placeholder="Search resources, playbooks or templates..."
            className="w-full rounded-2xl border border-border/60 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
          />

        </div>

        <div className="xl:w-60">

          <select
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(
                e.target.value
              )
            }
            className="w-full rounded-2xl border border-border/60 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
          >
            <option>
              All Categories
            </option>

            <option>
              Validation
            </option>

            <option>
              Fundraising
            </option>

            <option>
              Product
            </option>

            <option>
              Growth
            </option>
          </select>

        </div>
      </div>
    </section>
  );
}