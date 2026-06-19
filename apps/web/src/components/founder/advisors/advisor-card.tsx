"use client";

import { useRouter } from "next/navigation";

import { Advisor } from "@/types/advisor";

interface Props {
  advisor: Advisor;
}

export default function AdvisorCard({
  advisor,
}: Props) {
  const router = useRouter();

  return (
    <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-5">
        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              router.push(
                `/founder/advisors/${advisor.id}`
              )
            }
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-white"
          >
            {advisor.fullName.charAt(0)}
          </button>

          <div>
            <button
              onClick={() =>
                router.push(
                  `/founder/advisors/${advisor.id}`
                )
              }
              className="text-2xl font-black text-[#16214A] hover:text-primary"
            >
              {advisor.fullName}
            </button>

            <p className="mt-1 text-sm text-slate-500">
              {advisor.headline}
            </p>
          </div>
        </div>

         <div className="mt-4 flex items-center gap-3">
          <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
            92% Match
          </div>

          <p className="text-xs text-slate-500">
            Based on startup stage & execution needs
          </p>
        </div>

        <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          {
            advisor.availabilityStatus
          }
        </div>
      </div>

        <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          ✓ Startup Stage Match
        </span>

        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          ✓ Industry Match
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {advisor.expertise.map(
          (item) => (
            <div
              key={item}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
            >
              {item}
            </div>
          )
        )}
      </div>

      <div className="mt-6 space-y-2 text-sm text-[#6B6B6B]">
        <p>
          {advisor.yearsExperience}
          + Years Experience
        </p>

        <p>
          {advisor.totalSessions}+
          Sessions
        </p>

        <p>
          Helped{" "}
          {advisor.startupCount}+
          Startups
        </p>
      </div>

      <div className="mt-8 flex gap-3">
        <button
          onClick={() =>
            router.push(
              `/founder/advisors/${advisor.id}`
            )
          }
          className="flex-1 rounded-2xl bg-primary px-5 py-3 font-semibold text-white"
        >
          View Profile
        </button>

        <button className="flex-1 rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-3 font-semibold text-slate-700">
          Book Session
        </button>
      </div>
    </div>
  );
}