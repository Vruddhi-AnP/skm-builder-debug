// ─── FOUNDER ──────────────────────────────────────────────────────────────────

export type FounderRole =
  | "Solo Founder"
  | "Technical Founder"
  | "Business Founder"
  | "Student Founder"
  | "Serial Entrepreneur";

export interface FounderProfile {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  location?: string;
  linkedinUrl?: string;
  experience?: string;
  founderGoal?: string;
  bio?: string;
  founderRole: FounderRole;
  createdAt?: string;
  updatedAt?: string;
}

// ─── STARTUP ──────────────────────────────────────────────────────────────────

export type StartupStage =
  | "Idea Stage"
  | "MVP Ready"
  | "Early Revenue"
  | "Scaling"
  | "Growth Stage";

export type StartupIndustry =
  | "SaaS"
  | "FinTech"
  | "AI"
  | "HealthTech"
  | "EdTech"
  | "ClimateTech"
  | "Marketplace"
  | "Consumer"
  | "Other";

export interface StartupProfile {
  id: string;
  name: string;
  industry: StartupIndustry | string;
  stage: StartupStage;
  description?: string;
  website?: string;
  teamSize?: string;
  problemStatement?: string;
  solution?: string;
  founderId: string;
  createdAt?: string;
  updatedAt?: string;
}

// ─── BUILDER ──────────────────────────────────────────────────────────────────

export type BuilderStepStatus = "Completed" | "In Progress" | "Pending";

export interface IdeaDefinitionData {
  startupName?: string;
  startupVision?: string;
  startupStage?: string;
  startupCategory?: string;
  targetAudience?: string;
  solutionType?: string;
  founderGoal?: string;
  founderMotivation?: string;
  problemStatement?: string;
  uniqueValueProposition?: string;
  additionalNotes?: string;
}

export interface ProblemDefinitionData {
  coreProblemStatement?: string;
  problemSeverity?: string;
  affectedUsers?: string;
  currentAlternatives?: string;
  marketGap?: string;
  customerFrustrations?: string;
  operationalImpact?: string;
  problemFrequency?: string;
  problemUrgency?: string;
  founderObservations?: string;
}

export interface MarketResearchData {
  marketCategory?: string;
  marketTrends?: string;
  targetCustomers?: string;
  customerPainPoints?: string;
  competitors?: string;
  competitiveAdvantages?: string;
  marketSize?: string;
  marketDemand?: string;
  customerBehavior?: string;
  growthOpportunity?: string;
  founderInsights?: string;
}

export interface SolutionDesignData {
  solutionType?: string;
  selectedFeatures?: string;
  platformType?: string;
  businessModel?: string;
  userJourney?: string;
  experienceGoals?: string;
  solutionNotes?: string;
  productVision?: string;
  scalabilityPlan?: string;
  automationStrategy?: string;
}

export interface BusinessModelData {
  revenueModel?: string;
  pricingStrategy?: string;
  acquisitionChannels?: string;
  costStructures?: string;
  scalingChallenges?: string;
  revenueTimeline?: string;
  targetRevenue?: string;
  monetizationStrategy?: string;
  customerAcquisitionStrategy?: string;
  growthStrategy?: string;
  founderBusinessNotes?: string;
}

export interface BuilderData {
  ideaDefinition?: IdeaDefinitionData;
  problemDefinition?: ProblemDefinitionData;
  marketResearch?: MarketResearchData;
  solutionDesign?: SolutionDesignData;
  businessModel?: BusinessModelData;
}

// ─── READINESS ────────────────────────────────────────────────────────────────

export interface ReadinessScore {
  overall: number;
  ideaClarity: number;
  marketValidation: number;
  solutionDesign: number;
  businessModel: number;
  executionReadiness: number;
}

export interface ReadinessReport {
  score: ReadinessScore;
  strengths: string[];
  improvements: string[];
  stage: string;
  recommendations: string[];
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────

export interface FounderDashboardStats {
  builderProgress: number;
  completedModules: number;
  totalModules: number;
  advisorConnections: number;
  investorInterests: number;
  readinessScore?: number;
}