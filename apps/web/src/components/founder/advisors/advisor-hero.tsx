export default function AdvisorHero() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-white p-6 shadow-sm md:p-8 lg:p-10">
      <div className="relative z-10 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Founder Advisory Network
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-800 md:text-5xl">
            Connect With
            <span className="block text-primary">
              Startup Advisors
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Get guidance from experienced
            startup mentors, operators and
            fundraising experts.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:w-[340px]">
          {[
            {
              label: "Advisors",
              value: "120+",
            },

            {
              label: "Sessions",
              value: "850+",
            },

            {
              label: "Startups",
              value: "2.5K+",
            },

            {
              label: "Rating",
              value: "4.9",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border/60 bg-[#f8fbff] p-5"
            >
              <p className="text-sm text-slate-500">
                {item.label}
              </p>

              <h3 className="mt-2 text-3xl font-black text-primary">
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}