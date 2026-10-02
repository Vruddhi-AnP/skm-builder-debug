import {
  calculateReadiness,
  type ReadinessBuilderData,
} from './readiness.rules';

describe('Readiness rules', () => {
  const almostEmptyBuilder: ReadinessBuilderData = {
    ideaDefinition: {},
    problemDefinition: {},
    marketResearch: {},
    solutionDesign: {},
    businessModel: {},
  };

  const partiallyValidatedBuilder: ReadinessBuilderData = {
    ideaDefinition: {
      startupStage: 'Idea Stage',
      targetAudience: 'Small business owners',
      solutionType: 'SaaS Platform',
      founderGoal: 'Increase Revenue',
      problemStatement:
        'Small teams struggle to manage customer follow-ups consistently.',
    },

    problemDefinition: {
      coreProblemStatement:
        'Small teams struggle to manage customer follow-ups consistently.',
      problemSeverity: 'High',
      affectedUsers: 'SMBs',
      problemFrequency: 'Weekly',
    },

    marketResearch: {
      marketCategory: 'SaaS',
      targetCustomers: 'SMBs',
      competitors: 'HubSpot',
      marketDemand: 'Growing demand exists among small teams.',
    },

    solutionDesign: {
      solutionType: 'SaaS Platform',
      platformType: 'Web App',
      selectedFeatures: 'Dashboard',
      userJourney: 'Signup',
      productVision: 'A focused workflow for small teams to manage follow-ups.',
    },

    businessModel: {
      revenueModel: 'Subscription',
      pricingStrategy: 'Balanced',
      revenueTimeline: '6-12 Months',
      acquisitionChannels: 'SEO',
    },
  };

  const wellDefinedBuilder: ReadinessBuilderData = {
    ideaDefinition: {
      startupStage: 'Revenue Stage',
      targetAudience: 'Small business owners and sales teams',
      solutionType: 'SaaS Platform',
      founderGoal: 'Increase Revenue',

      founderMotivation:
        'We have observed this workflow problem repeatedly and are committed to solving it.',

      problemStatement:
        'Small businesses lose revenue because customer follow-ups are inconsistent and fragmented.',

      uniqueValueProposition:
        'A focused automated follow-up workflow built specifically for resource-constrained sales teams.',
    },

    problemDefinition: {
      coreProblemStatement:
        'Small businesses lose revenue because customer follow-ups are inconsistent and fragmented.',

      problemSeverity: 'Critical',

      affectedUsers: 'SMBs,Startups',

      currentAlternatives: 'Excel Sheets,WhatsApp',

      marketGap:
        'Existing tools are broad and expensive for small sales teams.',

      customerFrustrations:
        'Teams miss reminders, duplicate work, and lose context across conversations.',

      operationalImpact:
        'Missed follow-ups reduce conversion and waste sales time.',

      problemFrequency: 'Daily',

      problemUrgency: 'High',

      founderObservations:
        'Repeated interviews showed follow-up consistency as a recurring operational pain.',
    },

    marketResearch: {
      marketCategory: 'SaaS',

      targetCustomers: 'SMBs,Startups',

      competitors: 'HubSpot,Zoho',

      marketTrends: 'AI Automation,Workflow Automation',

      competitiveAdvantages: 'Faster Workflow,Lower Pricing',

      marketSize: 'Large and growing SMB sales software market.',

      marketDemand:
        'Customer interviews and pilot interest indicate active demand.',

      customerBehavior:
        'Teams prefer lightweight tools that integrate with existing workflows.',

      growthOpportunity:
        'Expansion into adjacent sales automation workflows is possible.',

      founderInsights:
        'Customers value speed, simplicity, and measurable follow-up outcomes.',
    },

    solutionDesign: {
      solutionType: 'SaaS Platform',

      platformType: 'Web App',

      selectedFeatures: 'Dashboard,Automation,Notifications,Analytics',

      userJourney: 'Signup,Onboarding,Dashboard Access,Feature Usage',

      experienceGoals: 'Fast Experience,Simple UX,Automation First',

      productVision:
        'A simple automation workspace that keeps every customer follow-up on track.',

      solutionNotes:
        'The MVP focuses on reminders, workflow automation, and visibility.',

      scalabilityPlan:
        'Use modular services and multi-tenant infrastructure to scale usage.',

      automationStrategy:
        'Automate reminders, task creation, and follow-up sequencing.',
    },

    businessModel: {
      revenueModel: 'Subscription',

      pricingStrategy: 'Balanced',

      acquisitionChannels: 'SEO,LinkedIn,Partnerships',

      costStructures: 'Team Salaries,Cloud Infrastructure,Customer Support',

      revenueTimeline: '0-6 Months',

      targetRevenue:
        'Reach sustainable recurring revenue through paid SMB subscriptions.',

      monetizationStrategy:
        'Monthly subscriptions with tiered plans based on usage and automation.',

      customerAcquisitionStrategy:
        'Use founder-led sales, SEO, partnerships, and targeted outbound.',

      growthStrategy:
        'Expand from follow-up automation into broader sales workflow automation.',

      founderBusinessNotes:
        'Initial pricing assumptions will be validated with pilot customers.',
    },
  };

  it('keeps an almost empty builder in the 0-30 range', () => {
    const result = calculateReadiness(almostEmptyBuilder);

    expect(result.overallScore).toBeGreaterThanOrEqual(0);

    expect(result.overallScore).toBeLessThanOrEqual(30);
  });

  it('keeps a partially validated startup in the 40-70 range', () => {
    const result = calculateReadiness(partiallyValidatedBuilder);

    expect(result.overallScore).toBeGreaterThanOrEqual(40);

    expect(result.overallScore).toBeLessThanOrEqual(70);
  });

  it('keeps a well-defined startup in the 75-100 range', () => {
    const result = calculateReadiness(wellDefinedBuilder);

    expect(result.overallScore).toBeGreaterThanOrEqual(75);

    expect(result.overallScore).toBeLessThanOrEqual(100);
  });

  it('returns the same result for the same input', () => {
    const first = calculateReadiness(wellDefinedBuilder);

    const second = calculateReadiness(wellDefinedBuilder);

    expect(second).toEqual(first);
  });

  it('returns three to five improvement suggestions', () => {
    const result = calculateReadiness(partiallyValidatedBuilder);

    expect(result.suggestions.length).toBeGreaterThanOrEqual(3);

    expect(result.suggestions.length).toBeLessThanOrEqual(5);
  });
});
