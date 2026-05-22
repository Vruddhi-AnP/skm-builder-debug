interface Props {
  search: string;

  setSearch: (
    value: string
  ) => void;

  selectedExpertise: string;

  setSelectedExpertise: (
    value: string
  ) => void;
}

export default function AdvisorFilters({
  search,
  setSearch,
  selectedExpertise,
  setSelectedExpertise,
}: Props) {
  return (
    <div className="rounded-[32px] border border-border/60 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row">
        <div className="flex-1">
          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search advisors..."
            className="h-14 w-full rounded-2xl border border-border/60 px-5 outline-none transition focus:border-primary"
          />
        </div>

        <div className="xl:w-60">
          <select
            value={selectedExpertise}
            onChange={(e) =>
              setSelectedExpertise(
                e.target.value
              )
            }
            className="h-14 w-full rounded-2xl border border-border/60 px-5 outline-none transition focus:border-primary"
          >
            <option>
              All Expertise
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

            <option>
              Technology
            </option>
          </select>
        </div>

        <button
          onClick={() => {
            setSearch("");
            setSelectedExpertise(
              "All Expertise"
            );
          }}
          className="h-14 rounded-2xl border border-border/60 bg-white px-6 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Reset
        </button>
      </div>
    </div>
  );
}