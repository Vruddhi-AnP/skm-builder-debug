"use client";

import api from "@/lib/axios";

import type {
  ReadinessMetric,
  ReadinessReportData,
} from "@/types/report";

import type {
  BuilderData,
} from "@/services/builder.service";

import type {
  StartupResponse,
} from "@/services/startup.service";

export interface ReadinessParameterScores {
  problemClarityValidation: number;
  customerMarketClarity: number;
  solutionDefinition: number;
  productMvpReadiness: number;
  businessModelClarity: number;
  teamFounderReadiness: number;
  executionReadiness: number;
}

export interface ReadinessAssessment {
  id: string;
  startupId: string;
  overallScore: number;
  scoreBand: string;
  parameterScores: ReadinessParameterScores;
  suggestions: string[];
  generatedAt: string;
  updatedAt: string;
}

type ParameterKey = keyof ReadinessParameterScores;

const PARAMETER_META: Array<{
  key: ParameterKey;
  title: string;
  insight: string;
}> = [
  {
    key: "problemClarityValidation",
    title: "Problem Clarity & Validation",
    insight:
      "Measures how clearly the problem, affected users, severity, alternatives and validation evidence are defined.",
  },
  {
    key: "customerMarketClarity",
    title: "Customer & Market Clarity",
    insight:
      "Measures target customer definition, market understanding, competition and demand evidence.",
  },
  {
    key: "solutionDefinition",
    title: "Solution Definition",
    insight:
      "Measures clarity of the proposed solution, value proposition, features and user experience.",
  },
  {
    key: "productMvpReadiness",
    title: "Product / MVP Readiness",
    insight:
      "Measures MVP definition, product scope, user journey and product execution readiness.",
  },
  {
    key: "businessModelClarity",
    title: "Business Model Clarity",
    insight:
      "Measures revenue model, pricing, acquisition, monetization and cost structure clarity.",
  },
  {
    key: "teamFounderReadiness",
    title: "Team / Founder Readiness",
    insight:
      "Measures founder goals, observations, motivation and readiness to execute.",
  },
  {
    key: "executionReadiness",
    title: "Execution Readiness",
    insight:
      "Measures operational planning, acquisition, growth, scalability and automation readiness.",
  },
];

function getMetricStatus(
  score: number,
): ReadinessMetric["status"] {
  if (score >= 75) {
    return "Strong";
  }

  if (score >= 50) {
    return "Good";
  }

  return "Moderate";
}

function getStringValue(
  value: unknown,
): string {
  return typeof value === "string"
    ? value
    : "";
}

export const calculateReadinessAssessment =
  async (
    startupId: string,
  ): Promise<ReadinessAssessment> => {
    const response = await api.post(
      `/readiness/${startupId}/calculate`,
    );

    return response.data.data;
  };

export const getLatestReadinessAssessment =
  async (
    startupId: string,
  ): Promise<ReadinessAssessment> => {
    const response = await api.get(
      `/readiness/${startupId}`,
    );

    return response.data.data;
  };

export const buildReadinessReport = (
  assessment: ReadinessAssessment,
  builder: BuilderData,
  startup: StartupResponse,
): ReadinessReportData => {
  const idea = builder.ideaDefinition ?? {};

  const metrics: ReadinessMetric[] =
    PARAMETER_META.map((parameter) => {
      const score =
        assessment.parameterScores[
          parameter.key
        ];

      return {
        title: parameter.title,
        score,
        status: getMetricStatus(score),
        insight: parameter.insight,
      };
    });

  const strongestParameters = [...PARAMETER_META]
    .map((parameter) => ({
      ...parameter,
      score:
        assessment.parameterScores[
          parameter.key
        ],
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(
      (parameter) =>
        `${parameter.title}: ${parameter.score}%`,
    );

  const executiveSummary =
    getStringValue(idea.startupVision) ||
    startup.description ||
    startup.solutionOverview ||
    "Readiness assessment generated from the persisted Startup Builder responses.";

  return {
    generatedDate: new Date(
      assessment.generatedAt,
    ).toLocaleDateString(),

    founder: {
      // Task 10 will replace this with the
      // authenticated founder identity.
      name: "Founder",
    },

    startup: {
      name:
        startup.name ||
        getStringValue(idea.startupName) ||
        "Untitled Startup",

      sector:
        startup.industry ||
        getStringValue(
          idea.startupCategory,
        ) ||
        "General",

      stage:
        startup.startupStage ||
        getStringValue(idea.startupStage) ||
        "Idea Stage",
    },

    executiveSummary,

    readiness: {
      overallScore:
        assessment.overallScore,

      label:
        assessment.scoreBand,

      marketScore:
        assessment.parameterScores
          .customerMarketClarity,

      productScore:
        assessment.parameterScores
          .productMvpReadiness,

      businessScore:
        assessment.parameterScores
          .businessModelClarity,

      executionScore:
        assessment.parameterScores
          .executionReadiness,
    },

    metrics,

    strengths: strongestParameters,

    improvements:
      assessment.suggestions,

    recommendations: {
      immediate:
        assessment.suggestions.slice(0, 3),

      shortTerm:
        assessment.suggestions.slice(3, 5),

      longTerm:
        assessment.suggestions.slice(3, 5),
    },
  };
};