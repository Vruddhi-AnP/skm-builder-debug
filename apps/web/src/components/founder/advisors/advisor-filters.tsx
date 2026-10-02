interface Props {
  search: string;

  setSearch: (
    value: string
  ) => void;

  selectedExpertise: string;

  setSelectedExpertise: (
    value: string
  ) => void;

  expertiseOptions: string[];
}

export default function AdvisorFilters({
  search,
  setSearch,
  selectedExpertise,
  setSelectedExpertise,
  expertiseOptions,
}: Props) {
  return (
    <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-5 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row">
        <div className="flex-1">
          <input
            value={search}
            onChange={(event) =>
              setSearch(
                event.target.value
              )
            }
            placeholder="Search advisors..."
            className="h-14 w-full rounded-2xl border border-border/60 px-5 outline-none transition focus:border-primary"
          />
        </div>

        <div className="xl:w-60">
          <select
            value={selectedExpertise}
            onChange={(event) =>
              setSelectedExpertise(
                event.target.value
              )
            }
            className="h-14 w-full rounded-2xl border border-border/60 px-5 outline-none transition focus:border-primary"
          >
            <option value="All Expertise">
              All Expertise
            </option>

            {expertiseOptions.map(
              (option) => (
                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              )
            )}
          </select>
        </div>

        <button
          type="button"
          onClick={() => {
            setSearch("");
            setSelectedExpertise(
              "All Expertise"
            );
          }}
          className="h-14 rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-6 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Reset
        </button>
      </div>
    </div>
  );
}