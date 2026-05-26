export default function DashboardHero() {
  return (
    <section className="overflow-hidden rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 md:p-8">
      <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
        {/* LEFT */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
            Founder Workspace Active
          </div>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#16214A] md:text-5xl">
            Welcome Back,
            <br />
            Founder
          </h1>

          <p className="mt-5 max-w-xl leading-relaxed text-slate-500">
            Continue building your startup roadmap,
            improve investor readiness and connect
            with advisors to scale your startup
            faster.
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-full rounded-[32px] border border-primary/20 bg-primary/10 p-6 xl:w-[340px]">
          <p className="text-sm font-semibold text-[#6B6B6B]">
            Startup Readiness
          </p>

          <h2 className="mt-4 text-6xl font-black tracking-tight text-[#16214A]">
            72
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Investor Ready Stage
          </p>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-[72%] rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}