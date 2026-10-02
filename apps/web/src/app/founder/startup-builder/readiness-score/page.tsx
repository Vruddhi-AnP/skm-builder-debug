"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";

import ReadinessReport from "@/components/reports/ReadinessReport";

import {
  buildReadinessReport,
  calculateReadinessAssessment,
  getLatestReadinessAssessment,
  type ReadinessAssessment,
} from "@/services/report.service";

import {
  getBuilderDataByStartupId,
} from "@/services/builder.service";

import {
  getStartupById,
  resolveFounderStartupId,
} from "@/services/startup.service";

import {
  exportReadinessReport,
} from "@/services/export.service";

import type {
  ReadinessReportData,
} from "@/types/report";

import {
  AlertTriangle,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";


interface StoredAuthUser {
  name?: string | null;
}

function getStoredFounderName(): string {
  if (
    typeof window === "undefined"
  ) {
    return "";
  }

  const storedUser =
    localStorage.getItem("user");

  if (!storedUser) {
    return "";
  }

  try {
    const user =
      JSON.parse(
        storedUser,
      ) as StoredAuthUser;

    return typeof user.name ===
      "string"
      ? user.name.trim()
      : "";
  } catch {
    return "";
  }
}

export default function ReadinessScorePage() {
  const router = useRouter();

  const [assessment, setAssessment] =
    useState<ReadinessAssessment | null>(null);

  const [report, setReport] =
    useState<ReadinessReportData | null>(null);

  const [isLoading, setIsLoading] =
    useState(true);

  const [errorMessage, setErrorMessage] =
    useState("");

  useEffect(() => {
    let active = true;

    const loadReadiness = async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const startupId =
          await resolveFounderStartupId();

        const [
  builderRecord,
  startup,
] = await Promise.all([
  getBuilderDataByStartupId(startupId),
  getStartupById(startupId),
]);

const founderName =
  getStoredFounderName();

if (!founderName) {
  throw new Error(
    "Signed-in founder name is unavailable. Please log in again.",
  );
}

        let latestAssessment:
          | ReadinessAssessment
          | null = null;

        try {
          latestAssessment =
            await getLatestReadinessAssessment(
              startupId,
            );
        } catch {
          latestAssessment = null;
        }

        const builderUpdatedAt =
          new Date(
            builderRecord.updatedAt,
          ).getTime();

        const assessmentGeneratedAt =
          latestAssessment
            ? new Date(
                latestAssessment.generatedAt,
              ).getTime()
            : 0;

        const assessmentResult =
          latestAssessment &&
          assessmentGeneratedAt >=
            builderUpdatedAt
            ? latestAssessment
            : await calculateReadinessAssessment(
                startupId,
              );

        if (!active) {
          return;
        }

        setAssessment(
          assessmentResult,
        );

        setReport(
          buildReadinessReport(
  assessmentResult,
  builderRecord.data,
  startup,
  founderName,
),
        );
      } catch (error) {
        if (!active) {
          return;
        }

        console.error(
          "Failed to load readiness assessment:",
          error,
        );

        setErrorMessage(
          "Could not calculate your readiness score. Please confirm your Startup Builder is saved and try again.",
        );
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    void loadReadiness();

    return () => {
      active = false;
    };
  }, []);

  const readinessMetrics =
    useMemo(() => {
      if (!assessment) {
        return [];
      }

      const entries = [
        {
          title:
            "Problem Clarity & Validation",
          score:
            assessment.parameterScores
              .problemClarityValidation,
        },
        {
          title:
            "Customer & Market Clarity",
          score:
            assessment.parameterScores
              .customerMarketClarity,
        },
        {
          title:
            "Solution Definition",
          score:
            assessment.parameterScores
              .solutionDefinition,
        },
        {
          title:
            "Product / MVP Readiness",
          score:
            assessment.parameterScores
              .productMvpReadiness,
        },
        {
          title:
            "Business Model Clarity",
          score:
            assessment.parameterScores
              .businessModelClarity,
        },
        {
          title:
            "Team / Founder Readiness",
          score:
            assessment.parameterScores
              .teamFounderReadiness,
        },
        {
          title:
            "Execution Readiness",
          score:
            assessment.parameterScores
              .executionReadiness,
        },
      ];

      return entries.map(
        (item) => ({
          ...item,

          status:
            item.score >= 75
              ? "Strong"
              : item.score >= 50
                ? "Good"
                : "Moderate",
        }),
      );
    }, [assessment]);

  const strengths =
    useMemo(() => {
      return [
        ...readinessMetrics,
      ]
        .filter(
          (item) =>
            item.score >= 50,
        )
        .sort(
          (a, b) =>
            b.score - a.score,
        )
        .slice(0, 3)
        .map(
          (item) =>
            `${item.title}: ${item.score}%`,
        );
    }, [readinessMetrics]);

  const improvements =
    assessment?.suggestions ?? [];

  const progress =
    assessment?.overallScore ?? 0;

  const readinessLabel =
    assessment?.scoreBand ?? "";

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-10 text-center">
        <div>
          <ShieldCheck className="mx-auto h-10 w-10 text-primary" />

          <h2 className="mt-5 text-2xl font-black text-[#16214A]">
            Calculating Readiness Score
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            Evaluating your persisted
            Startup Builder responses...
          </p>
        </div>
      </div>
    );
  }

  if (
    errorMessage ||
    !assessment
  ) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-10 text-center">
        <AlertTriangle className="h-10 w-10 text-amber-600" />

        <h2 className="mt-5 text-2xl font-black text-[#16214A]">
          Readiness Score Unavailable
        </h2>

        <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
          {errorMessage ||
            "Your readiness assessment could not be loaded."}
        </p>

        <button
          onClick={() =>
            router.push(
              "/founder/startup-builder",
            )
          }
          className="mt-8 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
        >
          Open Startup Builder
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="print-page print-card overflow-hidden rounded-[32px] border border-border/60 bg-[#F7F4EE]/95">
        <div className="grid gap-8 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-700">
              <Rocket className="h-4 w-4" />
              Startup Builder • Final
              Module
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#16214A] md:text-5xl">
              Startup
              <span className="block text-primary">
                Readiness Score
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B6B6B]">
              Evaluate your startup
              across problem, market,
              solution, MVP, business
              model, founder and
              execution readiness.
            </p>
          </div>

          {/* SCORE CARD */}
          <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-6">
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Overall Readiness
                </p>

                <h2 className="mt-3 text-6xl font-black tracking-tight text-[#16214A]">
                  {progress}%
                </h2>

                <p
                  className={`mt-2 text-sm font-bold ${
                    progress >= 60
                      ? "text-emerald-600"
                      : "text-amber-600"
                  }`}
                >
                  {readinessLabel}
                </p>
              </div>

              <div className="rounded-3xl bg-[#F7F4EE]/95 p-5 text-primary shadow-sm">
                <ShieldCheck className="h-10 w-10" />
              </div>
            </div>

            <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              This score is calculated
              from your saved Startup
              Builder responses across
              seven weighted readiness
              parameters.
            </p>
          </div>
        </div>

        <span>
          Startup Ka Mall • Founder
          Report
        </span>

        <span>
          Confidential Document
        </span>
      </section>

      {/* READINESS BREAKDOWN */}
      <section className="print-page print-card rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm lg:p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
            Readiness Breakdown
          </h2>

          <p className="mt-2 text-[#6B6B6B]">
            Startup readiness across
            the seven scoring
            parameters.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {readinessMetrics.map(
            (metric) => (
              <div
                key={metric.title}
                className="rounded-[28px] border border-border/60 bg-[#f8fbff] p-6 transition hover:-translate-y-1 hover:border-primary/20 hover:bg-[#F7F4EE]/95 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-black text-[#16214A]">
                      {
                        metric.title
                      }
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Startup
                      evaluation
                      category
                    </p>
                  </div>

                  <div
                    className={`rounded-full px-4 py-2 text-xs font-bold ${
                      metric.status ===
                      "Strong"
                        ? "bg-emerald-100 text-emerald-700"
                        : metric.status ===
                            "Good"
                          ? "bg-cyan-100 text-cyan-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {
                      metric.status
                    }
                  </div>
                </div>

                <div className="mt-8">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500">
                      Performance
                      Score
                    </p>

                    <p className="text-sm font-black text-primary">
                      {
                        metric.score
                      }
                      %
                    </p>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{
                        width: `${metric.score}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        <span>
          Startup Ka Mall • Founder
          Report
        </span>

        <span>
          Confidential Document
        </span>
      </section>

      {/* STRONGEST AREAS */}
      <section className="print-page print-card rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
            <CheckCircle2 className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#16214A]">
              Strongest Readiness
              Areas
            </h2>

            <p className="text-sm text-slate-500">
              Highest scoring areas
              from the current
              assessment
            </p>
          </div>
        </div>

        {strengths.length > 0 ? (
          <div className="space-y-4">
            {strengths.map(
              (item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl bg-[#f8fbff] p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />

                  <p className="text-sm font-medium leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ),
            )}
          </div>
        ) : (
          <div className="rounded-2xl bg-[#f8fbff] p-4">
            <p className="text-sm leading-7 text-slate-600">
              No readiness area has
              reached the 50% level
              yet. Continue refining
              your Startup Builder
              responses.
            </p>
          </div>
        )}

        <span>
          Startup Ka Mall • Founder
          Report
        </span>

        <span>
          Confidential Document
        </span>
      </section>

      {/* IMPROVEMENT AREAS */}
      <section className="print-page print-card rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
            <AlertTriangle className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#16214A]">
              Improvement Areas
            </h2>

            <p className="text-sm text-slate-500">
              Recommendations based
              on the lowest scoring
              readiness parameters
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {improvements.map(
            (item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl bg-[#f8fbff] p-4"
              >
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />

                <p className="text-sm font-medium leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ),
          )}
        </div>

        <span>
          Startup Ka Mall • Founder
          Report
        </span>

        <span>
          Confidential Document
        </span>
      </section>

      {/* READINESS ANALYSIS */}
      <section className="print-page print-card rounded-[32px] border border-primary/10 bg-linear-to-r from-primary/5 to-cyan-50 p-8">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F7F4EE]/95 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              <TrendingUp className="h-4 w-4" />
              Readiness Analysis
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#16214A]">
              Startup is{" "}
              <span className="text-primary">
                {readinessLabel}
              </span>
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[#6B6B6B]">
              This assessment is
              calculated from your
              persisted Startup
              Builder responses
              across problem,
              market, solution,
              product, business,
              founder and execution
              readiness.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* MARKET */}
            <div className="rounded-[28px] border border-white/70 bg-[#F7F4EE]/95 p-5 shadow-sm">
              <div className="w-fit rounded-2xl bg-cyan-100 p-3 text-cyan-700">
                <BarChart3 className="h-5 w-5" />
              </div>

              <h3 className="mt-4 text-xl font-black text-[#16214A]">
                Customer &
                Market Clarity
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#6B6B6B]">
                {
                  assessment
                    .parameterScores
                    .customerMarketClarity
                }
                % readiness based on
                your saved customer
                and market responses.
              </p>
            </div>

            {/* BUSINESS */}
            <div className="rounded-[28px] border border-white/70 bg-[#F7F4EE]/95 p-5 shadow-sm">
              <div className="w-fit rounded-2xl bg-violet-100 p-3 text-violet-700">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>

              <h3 className="mt-4 text-xl font-black text-[#16214A]">
                Business Model
                Clarity
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#6B6B6B]">
                {
                  assessment
                    .parameterScores
                    .businessModelClarity
                }
                % readiness based on
                your saved business
                model responses.
              </p>
            </div>
          </div>
        </div>

        <span>
          Startup Ka Mall • Founder
          Report
        </span>

        <span>
          Confidential Document
        </span>
      </section>

      {/* KEY METRICS */}
      <section className="print-page grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title:
              "Founder Readiness",
            value:
              assessment
                .parameterScores
                .teamFounderReadiness,
            desc:
              "Founder execution preparedness",
          },
          {
            title:
              "Market Clarity",
            value:
              assessment
                .parameterScores
                .customerMarketClarity,
            desc:
              "Customer and market understanding",
          },
          {
            title:
              "Product Readiness",
            value:
              assessment
                .parameterScores
                .productMvpReadiness,
            desc:
              "MVP and product preparedness",
          },
          {
            title:
              "Execution",
            value:
              assessment
                .parameterScores
                .executionReadiness,
            desc:
              "Execution preparedness",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-[28px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                {item.title}
              </p>

              <Sparkles className="h-5 w-5 text-primary" />
            </div>

            <h3 className="mt-5 text-5xl font-black tracking-tight text-[#16214A]">
              {item.value}%
            </h3>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-primary"
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>

            <p className="mt-3 text-sm text-slate-500">
              {item.desc}
            </p>
          </div>
        ))}

        <span>
          Startup Ka Mall • Founder
          Report
        </span>

        <span>
          Confidential Document
        </span>
      </section>

      {/* RECOMMENDED NEXT STEPS */}
      <section className="print-page grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <div className="print-card rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm lg:p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
              Recommended Next
              Steps
            </h2>

            <p className="mt-2 text-[#6B6B6B]">
              Suggested execution
              improvements based on
              your current readiness
              assessment.
            </p>
          </div>

          <div className="space-y-5">
            {improvements.map(
              (item, index) => (
                <div
                  key={`${index}-${item}`}
                  className="rounded-[28px] border border-border/60 bg-[#f8fbff] p-5 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-black text-primary">
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-black text-[#16214A]">
                        Improvement
                        Action
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item}
                      </p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        {/* STATUS */}
        <div className="print-card rounded-[32px] border border-primary/10 bg-primary/5 p-6 shadow-sm">
          <h3 className="text-2xl font-black text-[#16214A]">
            Readiness Status
          </h3>

          <div className="mt-6 space-y-4">
            {[
              {
                title:
                  "Overall Band",
                value:
                  readinessLabel,
              },
              {
                title:
                  "Founder Readiness",
                value: `${assessment.parameterScores.teamFounderReadiness}%`,
              },
              {
                title:
                  "Execution Readiness",
                value: `${assessment.parameterScores.executionReadiness}%`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-[#F7F4EE]/95 p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {item.title}
                </p>

                <h4 className="mt-2 text-lg font-black text-primary">
                  {item.value}
                </h4>
              </div>
            ))}

            <button
              onClick={() =>
                router.push(
                  "/founder/dashboard",
                )
              }
              className="print:hidden inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              Go To Dashboard
            </button>
          </div>
        </div>

        <span>
          Startup Ka Mall • Founder
          Report
        </span>

        <span>
          Confidential Document
        </span>
      </section>

      {/* FINAL CTA */}
      <section className="print-page print-card rounded-[32px] border border-primary/10 bg-primary/5 p-8 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#F7F4EE]/95 text-primary shadow-sm">
            <Target className="h-10 w-10" />
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#16214A]">
            Readiness Assessment
            Generated
          </h2>

          <p className="mt-5 text-base leading-8 text-[#6B6B6B]">
            Your latest readiness
            assessment has been
            calculated from your
            saved Startup Builder
            responses.
          </p>
        </div>

        <span>
          Startup Ka Mall • Founder
          Report
        </span>

        <span>
          Confidential Document
        </span>
      </section>

      {/* HIDDEN EXPORT VERSION */}
      {report && (
        <div className="hidden">
          <ReadinessReport
            report={report}
          />
        </div>
      )}

      {/* FOOTER */}
      <div className="print:hidden flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
        {report && (
          <button
            onClick={
              exportReadinessReport
            }
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-muted"
          >
            <Download className="h-4 w-4" />
            Export Startup Blueprint
          </button>
        )}

        <button
          onClick={() =>
            router.push(
              "/founder/dashboard",
            )
          }
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
        >
          Complete Startup Builder
        </button>
      </div>
    </div>
  );
}