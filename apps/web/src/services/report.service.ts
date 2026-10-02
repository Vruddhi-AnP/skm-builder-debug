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

type ParameterKey =
  keyof ReadinessParameterScores;

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
    ? value.trim()
    : "";
}

function getStringList(
  value: unknown,
): string[] {
  if (Array.isArray(value)) {
    return value
      .filter(
        (item): item is string =>
          typeof item === "string",
      )
      .map((item) => item.trim())
      .filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function firstNonEmpty(
  ...values: unknown[]
): string {
  for (const value of values) {
    const text = getStringValue(value);

    if (text) {
      return text;
    }
  }

  return "";
}

function uniqueNonEmpty(
  values: string[],
): string[] {
  return [
    ...new Set(
      values
        .map((value) => value.trim())
        .filter(Boolean),
    ),
  ];
}

function withFallback(
  value: string,
): string {
  return value || "Not provided";
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
  founderName: string,
): ReadinessReportData => {
  const idea =
    builder.ideaDefinition ?? {};

  const problem =
    builder.problemDefinition ?? {};

  const market =
    builder.marketResearch ?? {};

  const solution =
    builder.solutionDesign ?? {};

  const business =
    builder.businessModel ?? {};

  const normalizedFounderName =
    founderName.trim();

  if (!normalizedFounderName) {
    throw new Error(
      "Authenticated founder name is unavailable.",
    );
  }

  const metrics: ReadinessMetric[] =
    PARAMETER_META.map((parameter) => {
      const score =
        assessment.parameterScores[
          parameter.key
        ];

      return {
        title: parameter.title,
        score,
        status:
          getMetricStatus(score),
        insight: parameter.insight,
      };
    });

  const strongestParameters =
    [...PARAMETER_META]
      .map((parameter) => ({
        ...parameter,
        score:
          assessment.parameterScores[
            parameter.key
          ],
      }))
      .sort(
        (a, b) =>
          b.score - a.score,
      )
      .slice(0, 3)
      .map(
        (parameter) =>
          `${parameter.title}: ${parameter.score}%`,
      );

  const targetCustomers =
    getStringList(
      market.targetCustomers,
    );

  const selectedFeatures =
    getStringList(
      solution.selectedFeatures,
    );

  const userJourney =
    getStringList(
      solution.userJourney,
    );

  const problemStatement =
    firstNonEmpty(
      problem.coreProblemStatement,
      idea.problemStatement,
      startup.problemStatement,
    );

  const targetCustomer =
    targetCustomers.length > 0
      ? targetCustomers.join(", ")
      : firstNonEmpty(
          idea.targetAudience,
        );

  const solutionSummary =
    firstNonEmpty(
      solution.productVision,
      solution.solutionNotes,
      startup.solutionOverview,
      solution.solutionType,
      idea.solutionType,
    );

  const valueProposition =
    firstNonEmpty(
      idea.uniqueValueProposition,
    );

  const businessModelParts =
    uniqueNonEmpty([
      firstNonEmpty(
        solution.businessModel,
        startup.businessModel,
      ),
      getStringValue(
        business.revenueModel,
      ),
      getStringValue(
        business.pricingStrategy,
      ),
    ]);

  const businessModel =
    businessModelParts.join(" · ");

  const mvpParts: string[] = [];

  const platformType =
    getStringValue(
      solution.platformType,
    );

  if (platformType) {
    mvpParts.push(
      `Platform: ${platformType}`,
    );
  }

  if (selectedFeatures.length > 0) {
    mvpParts.push(
      `Core features: ${selectedFeatures.join(
        ", ",
      )}`,
    );
  }

  if (userJourney.length > 0) {
    mvpParts.push(
      `User journey: ${userJourney.join(
        " → ",
      )}`,
    );
  }

  const mvpDefinition =
    mvpParts.length > 0
      ? mvpParts.join(" | ")
      : firstNonEmpty(
          solution.productVision,
          solution.solutionType,
          idea.solutionType,
        );

  const executiveSummary =
    firstNonEmpty(
      idea.startupVision,
      startup.description,
      startup.solutionOverview,
      solution.productVision,
    ) ||
    "Blueprint generated from the persisted Startup Builder responses.";

  const suggestions =
    assessment.suggestions
      .filter(
        (suggestion) =>
          typeof suggestion ===
            "string" &&
          suggestion.trim().length > 0,
      )
      .map(
        (suggestion) =>
          suggestion.trim(),
      )
      .slice(0, 5);

  return {
    generatedDate:
      new Date(
        assessment.generatedAt,
      ).toLocaleDateString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        },
      ),

    founder: {
      name:
        normalizedFounderName,
    },

    startup: {
      name:
        startup.name ||
        getStringValue(
          idea.startupName,
        ) ||
        "Startup name unavailable",

      sector:
        startup.industry ||
        getStringValue(
          idea.startupCategory,
        ) ||
        "Industry not provided",

      stage:
        startup.startupStage ||
        getStringValue(
          idea.startupStage,
        ) ||
        "Stage not provided",
    },

    blueprint: {
      problemStatement:
        withFallback(
          problemStatement,
        ),

      targetCustomer:
        withFallback(
          targetCustomer,
        ),

      solutionSummary:
        withFallback(
          solutionSummary,
        ),

      valueProposition:
        withFallback(
          valueProposition,
        ),

      businessModel:
        withFallback(
          businessModel,
        ),

      mvpDefinition:
        withFallback(
          mvpDefinition,
        ),
    },

    executiveSummary,

    readiness: {
      overallScore:
        assessment.overallScore,

      label:
        assessment.scoreBand,

      marketScore:
        assessment
          .parameterScores
          .customerMarketClarity,

      productScore:
        assessment
          .parameterScores
          .productMvpReadiness,

      businessScore:
        assessment
          .parameterScores
          .businessModelClarity,

      executionScore:
        assessment
          .parameterScores
          .executionReadiness,
    },

    metrics,

    strengths:
      strongestParameters,

    improvements:
      suggestions,

    recommendations: {
      immediate:
        suggestions.slice(
          0,
          3,
        ),

      shortTerm:
        suggestions.slice(
          3,
          5,
        ),

      longTerm: [],
    },

    disclaimer:
      "This Startup Blueprint and readiness assessment is generated from information provided by the founder and deterministic readiness rules. It is intended for planning and decision-support purposes only and does not constitute investment, legal, financial, or commercial advice.",
  };
};