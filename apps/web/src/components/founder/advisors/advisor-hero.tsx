interface Props {
  advisorCount: number;
}

export default function AdvisorHero({
  advisorCount,
}: Props) {
  const summaryItems = [
    {
      label: "Available Advisors",
      value: String(advisorCount),
    },
    {
      label: "Account Status",
      value: "Approved",
    },
    {
      label: "Visibility",
      value: "Published",
    },
    {
      label: "Contact Data",
      value: "Protected",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm md:p-8 lg:p-10">
      <div className="relative z-10 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Founder Advisory Network
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-[#16214A] md:text-5xl">
            Connect With
            <span className="block text-primary">
              Startup Advisors
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B6B6B]">
            Browse approved and published
            advisor profiles available on
            Startup Ka Mall.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:w-[340px]">
          {summaryItems.map(
            (item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border/60 bg-[#f8fbff] p-5"
              >
                <p className="text-sm text-slate-500">
                  {item.label}
                </p>

                <h3 className="mt-2 text-xl font-black text-primary">
                  {item.value}
                </h3>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}