"use client";

export default function ProfileStartupCard() {
  return (
    <div className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-black tracking-tight text-slate-800">
        Startup Progress
      </h2>

      <div className="mt-8 space-y-5">

        <div className="rounded-3xl border border-border/60 bg-slate-50 p-5">

          <p className="text-sm text-slate-500">
            Startup Stage
          </p>

          <h3 className="mt-2 text-2xl font-black text-slate-800">
            Early Validation
          </h3>

        </div>

        <div className="rounded-3xl border border-border/60 bg-slate-50 p-5">

          <p className="text-sm text-slate-500">
            Readiness Score
          </p>

          <h3 className="mt-2 text-2xl font-black text-slate-800">
            72%
          </h3>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-[72%] rounded-full bg-primary" />
          </div>

        </div>

        <div className="rounded-3xl border border-border/60 bg-slate-50 p-5">

          <p className="text-sm text-slate-500">
            Completed Modules
          </p>

          <h3 className="mt-2 text-2xl font-black text-slate-800">
            5 / 7
          </h3>

        </div>

      </div>
    </div>
  );
}