"use client";

import { type FormEvent, useEffect, useState } from "react";

import Link from "next/link";

import { useParams } from "next/navigation";

import axios from "axios";

import {
  ArrowLeft,
  Briefcase,
  Calendar,
  Clock3,
  Languages,
  Monitor,
  Target,
  UserRound,
} from "lucide-react";

import { getAdvisorById } from "@/lib/api";

import {
  createConsultation,
  getMyConsultations,
  type ConsultationRequest,
} from "@/services/consultation.service";

import { resolveFounderStartupId } from "@/services/startup.service";

import type { Advisor } from "@/types/advisor";

function formatEnum(value: string | null | undefined) {
  if (!value) {
    return "Not specified";
  }

  return value
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function isOpenConsultation(status: ConsultationRequest["status"]) {
  return status === "NEW" || status === "CONTACTED" || status === "SCHEDULED";
}

function findLatestConsultation(
  requests: ConsultationRequest[],
  advisorId: string,
  startupId: string,
) {
  return (
    requests
      .filter(
        (request) =>
          request.advisorId === advisorId && request.startupId === startupId,
      )
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )[0] ?? null
  );
}

export default function AdvisorProfilePage() {
  const params = useParams();

  const advisorId =
    typeof params.id === "string"
      ? params.id
      : Array.isArray(params.id)
        ? params.id[0]
        : undefined;

  const [advisor, setAdvisor] = useState<Advisor | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const [consultationMessage, setConsultationMessage] = useState("");

  const [consultationStartupId, setConsultationStartupId] = useState<
    string | null
  >(null);

  const [consultationRequest, setConsultationRequest] =
    useState<ConsultationRequest | null>(null);

  const [consultationSubmitting, setConsultationSubmitting] = useState(false);

  const [consultationError, setConsultationError] = useState<string | null>(
    null,
  );

  useEffect(() => {
    if (!advisorId) {
      return;
    }

    let active = true;

    async function loadAdvisor(id: string) {
      try {
        setLoading(true);
        setError(false);

        const data = await getAdvisorById(id);

        if (active) {
          setAdvisor(data);
        }
      } catch (loadError) {
        console.error("Failed to load advisor", loadError);

        if (active) {
          setAdvisor(null);
          setError(true);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadAdvisor(advisorId);

    return () => {
      active = false;
    };
  }, [advisorId]);

  useEffect(() => {
    if (!advisorId) {
      return;
    }

    let active = true;

    async function loadConsultationContext(id: string) {
      setConsultationError(null);

      let startupId: string;

      try {
        startupId = await resolveFounderStartupId();
      } catch (startupError) {
        console.error("Failed to resolve founder startup", startupError);

        if (active) {
          setConsultationStartupId(null);

          if (axios.isAxiosError(startupError)) {
            setConsultationError(
              "Unable to load your startup details. Please try again.",
            );
          } else {
            setConsultationError(
              "Your startup could not be resolved. Please complete your startup profile first.",
            );
          }
        }

        return;
      }

      if (!active) {
        return;
      }

      setConsultationStartupId(startupId);

      try {
        const requests = await getMyConsultations();

        if (!active) {
          return;
        }

        setConsultationRequest(findLatestConsultation(requests, id, startupId));
      } catch (consultationError) {
        console.error("Failed to load consultation requests", consultationError);

        if (active) {
          setConsultationRequest(null);
          setConsultationError(
            "Unable to load your consultation requests. Please try again.",
          );
        }
      }
    }

    void loadConsultationContext(advisorId);

    return () => {
      active = false;
    };
  }, [advisorId]);

  async function handleConsultationSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!advisorId || !consultationStartupId) {
      setConsultationError(
        "Your startup could not be resolved. Please complete your startup profile first.",
      );
      return;
    }

    const message = consultationMessage.trim();

    if (!message) {
      setConsultationError("Please describe the support you need.");
      return;
    }

    try {
      setConsultationSubmitting(true);
      setConsultationError(null);

      const created = await createConsultation({
        advisorId,
        startupId: consultationStartupId,
        message,
      });

      setConsultationRequest(created);

      setConsultationMessage("");
    } catch (submitError) {
      console.error("Failed to create consultation request", submitError);

      if (
        axios.isAxiosError(submitError) &&
        submitError.response?.status === 409
      ) {
        setConsultationError(
          "You already have an open consultation request with this advisor.",
        );
      } else {
        setConsultationError(
          "Unable to submit the consultation request. Please try again.",
        );
      }
    } finally {
      setConsultationSubmitting(false);
    }
  }

  if (!advisorId) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8fbff] px-4">
        <div className="w-full max-w-2xl rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-10 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50">
            <UserRound className="h-10 w-10 text-red-500" />
          </div>

          <h1 className="mt-8 text-4xl font-black tracking-tight text-[#16214A]">
            Advisor Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-500">
            This advisor is unavailable, not published, or no longer accessible.
          </p>

          <Link
            href="/founder/advisors"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Advisors
          </Link>
        </div>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f8fbff]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="h-72 animate-pulse rounded-[32px] bg-[#F7F4EE]/95" />

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="h-96 animate-pulse rounded-[32px] bg-[#F7F4EE]/95 xl:col-span-2" />

            <div className="h-96 animate-pulse rounded-[32px] bg-[#F7F4EE]/95" />
          </div>
        </div>
      </main>
    );
  }

  if (error || !advisor) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8fbff] px-4">
        <div className="w-full max-w-2xl rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-10 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50">
            <UserRound className="h-10 w-10 text-red-500" />
          </div>

          <h1 className="mt-8 text-4xl font-black tracking-tight text-[#16214A]">
            Advisor Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-500">
            This advisor is unavailable, not published, or no longer accessible.
          </p>

          <Link
            href="/founder/advisors"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Advisors
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fbff]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div>
          <Link
            href="/founder/advisors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#16214A]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Advisors
          </Link>
        </div>

        <section className="rounded-[36px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm md:p-8 lg:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-[28px] bg-primary text-4xl font-black text-white">
              {advisor.fullName.charAt(0).toUpperCase() || "A"}
            </div>

            <div className="flex-1">
              <div className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
                {formatEnum(advisor.availabilityStatus)}
              </div>

              <h1 className="mt-5 text-4xl font-black tracking-tight text-[#16214A] md:text-5xl">
                {advisor.fullName}
              </h1>

              <p className="mt-3 text-lg text-slate-500">
                {advisor.headline || "Startup Advisor"}
              </p>

              {advisor.organization && (
                <p className="mt-2 text-sm font-semibold text-slate-400">
                  {advisor.organization}
                </p>
              )}

              {advisor.expertise.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {advisor.expertise.map((item) => (
                    <span
                      key={item}
                      className="rounded-2xl border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="space-y-6 xl:col-span-2">
            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                Advisor Profile
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                {advisor.advisoryGoal ||
                  "This advisor has not added an advisory goal yet."}
              </p>
            </div>

            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                Expertise & Focus
              </h2>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-border/60 bg-slate-50 p-5">
                  <Briefcase className="h-5 w-5 text-primary" />

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Category
                  </p>

                  <p className="mt-2 font-bold text-[#16214A]">
                    {advisor.category || "Not specified"}
                  </p>
                </div>

                <div className="rounded-3xl border border-border/60 bg-slate-50 p-5">
                  <Target className="h-5 w-5 text-primary" />

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Startup Stage
                  </p>

                  <p className="mt-2 font-bold text-[#16214A]">
                    {formatEnum(advisor.startupStage)}
                  </p>
                </div>

                <div className="rounded-3xl border border-border/60 bg-slate-50 p-5">
                  <UserRound className="h-5 w-5 text-primary" />

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Experience Level
                  </p>

                  <p className="mt-2 font-bold text-[#16214A]">
                    {formatEnum(advisor.experienceLevel)}
                  </p>
                </div>

                <div className="rounded-3xl border border-border/60 bg-slate-50 p-5">
                  <UserRound className="h-5 w-5 text-primary" />

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Mentorship Type
                  </p>

                  <p className="mt-2 font-bold text-[#16214A]">
                    {formatEnum(advisor.mentorshipType)}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                Founder Engagement
              </h2>

              <p className="mt-5 leading-8 text-slate-500">
                {advisor.founderEngagementPreference ||
                  "No founder engagement preference has been provided."}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
              <h2 className="text-2xl font-black text-[#16214A]">
                Availability
              </h2>

              <div className="mt-6 space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar className="h-4 w-4" />
                    Weekly Availability
                  </div>

                  <p className="mt-2 font-semibold text-slate-700">
                    {formatEnum(advisor.availabilityStatus)}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Clock3 className="h-4 w-4" />
                    Preferred Time
                  </div>

                  <p className="mt-2 font-semibold text-slate-700">
                    {formatEnum(advisor.preferredTimeSlot)}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Monitor className="h-4 w-4" />
                    Session Mode
                  </div>

                  <p className="mt-2 font-semibold text-slate-700">
                    {formatEnum(advisor.sessionMode)}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Timezone</p>

                  <p className="mt-2 font-semibold text-slate-700">
                    {formatEnum(advisor.preferredTimezone)}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
              <h2 className="text-2xl font-black text-[#16214A]">Languages</h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {advisor.languages.length > 0 ? (
                  advisor.languages.map((language) => (
                    <span
                      key={language}
                      className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-2 text-sm font-semibold text-primary"
                    >
                      <Languages className="h-4 w-4" />
                      {language}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">Not specified</p>
                )}
              </div>
            </div>

            <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
              <h2 className="text-2xl font-black text-[#16214A]">
                Consultation
              </h2>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Type
                  </p>

                  <p className="mt-2 font-semibold text-slate-700">
                    {advisor.consultationType || "Not specified"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Pricing Model
                  </p>

                  <p className="mt-2 font-semibold text-slate-700">
                    {formatEnum(advisor.advisoryPricingModel)}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-border/60 pt-6">
                {consultationRequest && (
                  <div className="mb-6 rounded-3xl border border-sky-100 bg-sky-50 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-bold text-[#16214A]">
                        Your Consultation Request
                      </p>

                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-primary">
                        {formatEnum(consultationRequest.status)}
                      </span>
                    </div>

                    {consultationRequest.message && (
                      <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-600">
                        {consultationRequest.message}
                      </p>
                    )}
                  </div>
                )}

                {(!consultationRequest ||
                  !isOpenConsultation(consultationRequest.status)) && (
                  <form
                    onSubmit={handleConsultationSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label
                        htmlFor="consultation-message"
                        className="text-sm font-bold text-[#16214A]"
                      >
                        Request Consultation
                      </label>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Tell the advisor what support you need.
                      </p>
                    </div>

                    <textarea
                      id="consultation-message"
                      rows={5}
                      value={consultationMessage}
                      onChange={(event) =>
                        setConsultationMessage(event.target.value)
                      }
                      placeholder="Example: I need guidance on validating my MVP and go-to-market strategy."
                      className="w-full resize-none rounded-2xl border border-border bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary"
                    />

                    {consultationError && (
                      <p className="text-sm font-medium text-red-600">
                        {consultationError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={
                        consultationSubmitting || !consultationStartupId
                      }
                      className="w-full rounded-2xl bg-primary px-5 py-3 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {consultationSubmitting
                        ? "Sending Request..."
                        : "Request Consultation"}
                    </button>
                  </form>
                )}

                {consultationRequest &&
                  isOpenConsultation(consultationRequest.status) &&
                  consultationError && (
                    <p className="mt-4 text-sm font-medium text-red-600">
                      {consultationError}
                    </p>
                  )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
