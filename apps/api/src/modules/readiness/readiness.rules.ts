export const READINESS_WEIGHTS = {
  problemClarityValidation: 20,
  customerMarketClarity: 15,
  solutionDefinition: 15,
  productMvpReadiness: 15,
  businessModelClarity: 15,
  teamFounderReadiness: 10,
  executionReadiness: 10,
} as const;

export type ReadinessParameterKey = keyof typeof READINESS_WEIGHTS;

export type BuilderSection = Record<string, unknown>;

export interface ReadinessBuilderData {
  ideaDefinition?: BuilderSection;
  problemDefinition?: BuilderSection;
  marketResearch?: BuilderSection;
  solutionDesign?: BuilderSection;
  businessModel?: BuilderSection;
}

export type ReadinessParameterScores = Record<ReadinessParameterKey, number>;

export interface ReadinessCalculation {
  overallScore: number;
  scoreBand: string;
  parameterScores: ReadinessParameterScores;
  suggestions: string[];
}

const PARAMETER_ORDER: ReadinessParameterKey[] = [
  'problemClarityValidation',
  'customerMarketClarity',
  'solutionDefinition',
  'productMvpReadiness',
  'businessModelClarity',
  'teamFounderReadiness',
  'executionReadiness',
];

const SUGGESTIONS: Record<ReadinessParameterKey, string> = {
  problemClarityValidation:
    'Strengthen problem validation by documenting the affected users, severity, frequency, current alternatives, and observed impact.',
  customerMarketClarity:
    'Validate the target customer and market with clearer customer segments, competitor evidence, market demand, and market sizing.',
  solutionDefinition:
    'Clarify the proposed solution, core features, user journey, product experience, and differentiated value proposition.',
  productMvpReadiness:
    'Define a stronger MVP scope with prioritized features, a clear user journey, product vision, and execution approach.',
  businessModelClarity:
    'Strengthen the business model by validating pricing, revenue model, acquisition channels, costs, and monetization assumptions.',
  teamFounderReadiness:
    'Improve founder readiness by documenting clear goals, motivation, observed learnings, market insights, and business assumptions.',
  executionReadiness:
    'Create a more concrete execution plan covering acquisition, delivery flow, costs, growth, scalability, and automation.',
};

function asSection(value: unknown): BuilderSection {
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    return value as BuilderSection;
  }

  return {};
}

function textScore(value: unknown, maximumPoints: number): number {
  if (typeof value !== 'string') {
    return 0;
  }

  const text = value.trim();

  if (!text) {
    return 0;
  }

  // Free text is useful, but weaker than structured evidence.
  if (text.length < 20) {
    return Math.ceil(maximumPoints * 0.5);
  }

  return maximumPoints;
}

function choiceScore(value: unknown, maximumPoints: number): number {
  if (typeof value === 'string' && value.trim().length > 0) {
    return maximumPoints;
  }

  return 0;
}

function getSelectionCount(value: unknown): number {
  if (Array.isArray(value)) {
    return value.filter(
      (item) => typeof item === 'string' && item.trim().length > 0,
    ).length;
  }

  if (typeof value === 'string') {
    return value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean).length;
  }

  return 0;
}

function selectionScore(value: unknown, maximumPoints: number): number {
  const count = getSelectionCount(value);

  if (count === 0) {
    return 0;
  }

  if (count === 1) {
    return Math.ceil(maximumPoints * 0.7);
  }

  return maximumPoints;
}

function firstDefined(...values: unknown[]): unknown {
  return values.find((value) => {
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }

    return value !== null && value !== undefined;
  });
}

function startupStageScore(value: unknown, maximumPoints: number): number {
  if (typeof value !== 'string' || !value.trim()) {
    return 0;
  }

  const stage = value.trim().toLowerCase();

  if (stage.includes('revenue')) {
    return maximumPoints;
  }

  if (stage.includes('beta')) {
    return Math.round(maximumPoints * 0.8);
  }

  if (stage.includes('mvp')) {
    return Math.round(maximumPoints * 0.6);
  }

  if (stage.includes('idea')) {
    return Math.round(maximumPoints * 0.25);
  }

  return Math.round(maximumPoints * 0.25);
}

function capScore(score: number): number {
  return Math.max(0, Math.min(100, Math.round(score)));
}

export function getReadinessScoreBand(score: number): string {
  if (score <= 39) {
    return 'Foundation Required';
  }

  if (score <= 59) {
    return 'Early Validation';
  }

  if (score <= 74) {
    return 'Building Readiness';
  }

  if (score <= 89) {
    return 'Strong Readiness';
  }

  return 'Execution Ready';
}

export function calculateReadiness(
  builderData: ReadinessBuilderData,
): ReadinessCalculation {
  const idea = asSection(builderData.ideaDefinition);
  const problem = asSection(builderData.problemDefinition);
  const market = asSection(builderData.marketResearch);
  const solution = asSection(builderData.solutionDesign);
  const business = asSection(builderData.businessModel);

  const problemClarityValidation = capScore(
    textScore(
      firstDefined(problem.coreProblemStatement, idea.problemStatement),
      20,
    ) +
      choiceScore(problem.problemSeverity, 15) +
      selectionScore(problem.affectedUsers, 15) +
      selectionScore(problem.currentAlternatives, 15) +
      choiceScore(problem.problemFrequency, 10) +
      choiceScore(problem.problemUrgency, 10) +
      textScore(problem.marketGap, 5) +
      textScore(problem.customerFrustrations, 5) +
      textScore(problem.operationalImpact, 5),
  );

  const customerMarketClarity = capScore(
    Math.max(
      selectionScore(market.targetCustomers, 20),
      textScore(idea.targetAudience, 10),
    ) +
      choiceScore(market.marketCategory, 15) +
      selectionScore(market.competitors, 15) +
      selectionScore(market.marketTrends, 10) +
      selectionScore(market.competitiveAdvantages, 10) +
      textScore(market.marketSize, 10) +
      textScore(market.marketDemand, 10) +
      textScore(market.customerBehavior, 5) +
      textScore(market.growthOpportunity, 5),
  );

  const solutionDefinition = capScore(
    choiceScore(firstDefined(solution.solutionType, idea.solutionType), 15) +
      choiceScore(solution.platformType, 15) +
      selectionScore(solution.selectedFeatures, 20) +
      selectionScore(solution.userJourney, 15) +
      selectionScore(solution.experienceGoals, 10) +
      textScore(solution.productVision, 10) +
      textScore(solution.solutionNotes, 5) +
      textScore(idea.uniqueValueProposition, 10),
  );

  const productMvpReadiness = capScore(
    startupStageScore(idea.startupStage, 20) +
      selectionScore(solution.selectedFeatures, 20) +
      selectionScore(solution.userJourney, 20) +
      selectionScore(solution.experienceGoals, 10) +
      textScore(solution.productVision, 10) +
      textScore(solution.automationStrategy, 10) +
      textScore(solution.scalabilityPlan, 10),
  );

  const businessModelClarity = capScore(
    choiceScore(business.revenueModel, 15) +
      choiceScore(business.pricingStrategy, 15) +
      selectionScore(business.acquisitionChannels, 15) +
      selectionScore(business.costStructures, 15) +
      choiceScore(business.revenueTimeline, 10) +
      textScore(business.targetRevenue, 5) +
      textScore(business.monetizationStrategy, 10) +
      textScore(business.customerAcquisitionStrategy, 10) +
      textScore(business.growthStrategy, 5),
  );

  const teamFounderReadiness = capScore(
    choiceScore(idea.founderGoal, 20) +
      textScore(idea.founderMotivation, 25) +
      textScore(problem.founderObservations, 20) +
      textScore(market.founderInsights, 20) +
      textScore(business.founderBusinessNotes, 15),
  );

  const executionReadiness = capScore(
    choiceScore(business.revenueTimeline, 15) +
      selectionScore(business.acquisitionChannels, 15) +
      selectionScore(solution.userJourney, 15) +
      selectionScore(business.costStructures, 10) +
      textScore(business.customerAcquisitionStrategy, 15) +
      textScore(business.growthStrategy, 10) +
      textScore(solution.scalabilityPlan, 10) +
      textScore(solution.automationStrategy, 10),
  );

  const parameterScores: ReadinessParameterScores = {
    problemClarityValidation,
    customerMarketClarity,
    solutionDefinition,
    productMvpReadiness,
    businessModelClarity,
    teamFounderReadiness,
    executionReadiness,
  };

  const weightedTotal = PARAMETER_ORDER.reduce(
    (total, key) => total + parameterScores[key] * READINESS_WEIGHTS[key],
    0,
  );

  const overallScore = Math.max(
    0,
    Math.min(100, Math.round(weightedTotal / 100)),
  );

  const suggestions = PARAMETER_ORDER.map((key, index) => ({
    key,
    score: parameterScores[key],
    index,
  }))
    .sort((a, b) => a.score - b.score || a.index - b.index)
    .slice(0, 3)
    .map(({ key }) => SUGGESTIONS[key]);

  return {
    overallScore,
    scoreBand: getReadinessScoreBand(overallScore),
    parameterScores,
    suggestions,
  };
}
