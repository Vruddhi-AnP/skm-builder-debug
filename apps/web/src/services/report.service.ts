import { ReadinessReportData } from "@/types/report"

export async function getReadinessReport():
Promise<ReadinessReportData> {

  return {
    founder: {
      name: "Aarav Mehta",
      email: "aarav@finverse.ai",
    },

    startup: {
      name: "FinVerse AI",
      sector: "FinTech",
      stage: "Seed",
    },

    readiness: {
      overallScore: 82,
      marketScore: 80,
      productScore: 84,
      businessScore: 79,
    },

    recommendations: [
      "Improve GTM clarity",
      "Strengthen investor narrative",
      "Add clearer revenue forecasting",
      "Improve founder storytelling",
    ],
  }
}