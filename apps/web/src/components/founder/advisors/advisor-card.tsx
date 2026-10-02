"use client";

import { useRouter } from "next/navigation";

import type { Advisor } from "@/types/advisor";

interface Props {
  advisor: Advisor;
}

function formatEnum(
  value: string | null
) {
  if (!value) {
    return "Not specified";
  }

  return value
    .toLowerCase()
    .split("_")
    .map(
      (part) =>
        part.charAt(0).toUpperCase() +
        part.slice(1)
    )
    .join(" ");
}

export default function AdvisorCard({
  advisor,
}: Props) {
  const router = useRouter();

  const openProfile = () => {
    router.push(
      `/founder/advisors/${advisor.id}`
    );
  };

  return (
    <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={openProfile}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-white"
          >
            {advisor.fullName
              .charAt(0)
              .toUpperCase() || "A"}
          </button>

          <div>
            <button
              type="button"
              onClick={openProfile}
              className="text-left text-2xl font-black text-[#16214A] hover:text-primary"
            >
              {advisor.fullName}
            </button>

            <p className="mt-1 text-sm text-slate-500">
              {advisor.headline ||
                "Startup Advisor"}
            </p>

            {advisor.organization && (
              <p className="mt-1 text-xs font-medium text-slate-400">
                {advisor.organization}
              </p>
            )}
          </div>
        </div>

        <div className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          {formatEnum(
            advisor.availabilityStatus
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {advisor.category && (
          <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
            {advisor.category}
          </span>
        )}

        {advisor.startupStage && (
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {formatEnum(
              advisor.startupStage
            )}
          </span>
        )}

        {advisor.mentorshipType && (
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {formatEnum(
              advisor.mentorshipType
            )}
          </span>
        )}
      </div>

      {advisor.expertise.length > 0 && (
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
      )}

      <div className="mt-6 space-y-2 text-sm text-[#6B6B6B]">
        <p>
          Experience Level:{" "}
          <span className="font-semibold text-slate-700">
            {formatEnum(
              advisor.experienceLevel
            )}
          </span>
        </p>

        <p>
          Session Mode:{" "}
          <span className="font-semibold text-slate-700">
            {formatEnum(
              advisor.sessionMode
            )}
          </span>
        </p>

        <p>
          Consultation:{" "}
          <span className="font-semibold text-slate-700">
            {advisor.consultationType ||
              "Not specified"}
          </span>
        </p>
      </div>

      <button
        type="button"
        onClick={openProfile}
        className="mt-8 w-full rounded-2xl bg-primary px-5 py-3 font-semibold text-white"
      >
        View Profile
      </button>
    </div>
  );
}