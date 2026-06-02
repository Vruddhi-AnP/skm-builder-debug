"use client";

export default function ProfileHero() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm md:p-8 lg:p-10">

      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#F4C542]/10 blur-3xl opacity-70" />

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#16214A]/5 blur-3xl opacity-70" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* LEFT */}
        <div className="flex items-start gap-5">

          {/* AVATAR */}
          <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-[#16214A] via-[#22346E] to-[#314A96] text-3xl font-black text-white shadow-[0_20px_60px_rgba(22,33,74,0.25)]">
            K
          </div>

          {/* INFO */}
          <div>

            <div className="inline-flex items-center rounded-full border border-[#F4C542]/40 bg-[#FFF8E7] px-4 py-2 text-xs font-semibold text-[#9A6A00]">
              Founder Account
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-[#16214A] md:text-5xl">
              Krishna Shah
            </h1>

            <p className="mt-3 text-lg text-slate-500">
              Startup Founder & Builder
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <div className="rounded-2xl border border-[#16214A]/10 bg-[#16214A]/5 px-4 py-2 text-sm font-medium text-[#16214A]">
                Founder
              </div>

              <div className="rounded-2xl border border-[#F4C542]/30 bg-[#FFF8E7] px-4 py-2 text-sm font-medium text-[#9A6A00]">
                Early Stage Startup
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-4 lg:w-[320px]">

          <div className="rounded-3xl border border-[#E7E0D3] bg-[#FFFDF9] p-5">
            <p className="text-sm text-slate-500">
              Readiness
            </p>

            <h3 className="mt-2 text-3xl font-black text-[#16214A]">
              72%
            </h3>
          </div>

          <div className="rounded-3xl border border-[#E7E0D3] bg-[#FFFDF9] p-5">
            <p className="text-sm text-slate-500">
              Programs
            </p>

            <h3 className="mt-2 text-3xl font-black text-[#16214A]">
              4
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}