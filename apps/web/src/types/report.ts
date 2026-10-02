export interface ReadinessMetric {
  title: string;
  score: number;
  status: "Strong" | "Good" | "Moderate";
  insight: string;
}

export interface ReadinessReportData {
  generatedDate: string;

  founder: {
    name: string;
    email?: string;
  };

  startup: {
    name: string;
    sector: string;
    stage: string;
  };

  blueprint: {
    problemStatement: string;
    targetCustomer: string;
    solutionSummary: string;
    valueProposition: string;
    businessModel: string;
    mvpDefinition: string;
  };

  executiveSummary: string;

  readiness: {
    overallScore: number;
    label: string;

    marketScore: number;
    productScore: number;
    businessScore: number;
    executionScore: number;
  };

  strengths: string[];

  improvements: string[];

  metrics: ReadinessMetric[];

  recommendations: {
    immediate: string[];
    shortTerm: string[];
    longTerm: string[];
  };

  disclaimer: string;
}