"use client";

import { useRouter } from "next/navigation";

export default function AdvisorCTA() {
  const router = useRouter();

  return (
    <div className="rounded-[32px] border border-primary/10 bg-primary/5 p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-black tracking-tight text-slate-800">
            Need Dedicated Startup
            Guidance?
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Unlock structured founder
            mentorship and execution
            support.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            onClick={() =>
              router.push(
                "/founder/dashboard"
              )
            }
            className="rounded-2xl border border-border/60 bg-white px-6 py-4 font-semibold text-slate-700"
          >
            Back to Dashboard
          </button>

          <button
            onClick={() =>
              router.push(
                "/founder/programs"
              )
            }
            className="rounded-2xl bg-primary px-7 py-4 font-semibold text-white"
          >
            Explore Programs
          </button>
        </div>
      </div>
    </div>
  );
}