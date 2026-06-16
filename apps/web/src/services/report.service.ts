"use client";

import { ReadinessReportData } from "@/types/report";
import {
  getBuilderData,
  getBuilderProgress,
} from "@/hooks/useLocalBuilder";

export function getReadinessReport():
ReadinessReportData {

  const builder = getBuilderData();

  const progress = getBuilderProgress();

  const readinessLabel =
    progress === 100
      ? "Investor Ready"
      : progress >= 60
      ? "Strong Early-Stage Potential"
      : progress >= 40
      ? "Good Foundation Building"
      : "Getting Started";

  return {
    generatedDate: new Date().toLocaleDateString(),

    founder: {
      name: "Founder",
    },

    startup: {
      name:
        builder.ideaDefinition?.startupName ??
        "Untitled Startup",

      sector:
        builder.ideaDefinition?.startupCategory ??
        "General",

      stage:
        builder.ideaDefinition?.startupStage ??
        "Idea Stage",
    },

    executiveSummary:
      builder.ideaDefinition?.startupVision ??
      "The startup has begun validating its opportunity and execution strategy.",

    readiness: {
      overallScore: progress,

      label: readinessLabel,

      marketScore: Math.min(progress + 5, 100),

      productScore: progress,

      businessScore: Math.max(progress - 5, 0),

      executionScore: Math.min(progress + 2, 100),
    },

    metrics: [
      {
        title: "Idea Validation",
        score: progress,
        status:
          progress >= 80
            ? "Strong"
            : progress >= 60
            ? "Good"
            : "Moderate",

        insight:
          "Measures clarity of startup direction and founder understanding.",
      },

      {
        title: "Market Opportunity",
        score: progress,
        status:
          progress >= 80
            ? "Strong"
            : progress >= 60
            ? "Good"
            : "Moderate",

        insight:
          "Reflects market validation and target audience definition.",
      },

      {
        title: "Business Model",
        score: progress,
        status:
          progress >= 80
            ? "Strong"
            : progress >= 60
            ? "Good"
            : "Moderate",

        insight:
          "Evaluates monetization and business structure maturity.",
      },

      {
        title: "Execution Readiness",
        score: progress,
        status:
          progress >= 80
            ? "Strong"
            : progress >= 60
            ? "Good"
            : "Moderate",

        insight:
          "Represents founder execution preparedness.",
      },
    ],

    strengths: [
      "Clear startup direction",
      "Founder commitment established",
      "Early execution structure defined",
      "Scalable opportunity identified",
      "Readiness improving",
    ],

    improvements: [
      "Validate customer acquisition",
      "Strengthen monetization assumptions",
      "Expand competitor benchmarking",
      "Improve investor readiness",
      "Track execution metrics",
    ],

    recommendations: {
      immediate: [
        "Validate customer interviews",
        "Prepare investor materials",
        "Define MVP milestones",
      ],

      shortTerm: [
        "Acquire early adopters",
        "Improve GTM execution",
        "Build advisor relationships",
      ],

      longTerm: [
        "Scale acquisition channels",
        "Prepare fundraising roadmap",
        "Optimize business operations",
      ],
    },
  };
}