import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_URL;

if (!baseURL) {
  throw new Error(
    "NEXT_PUBLIC_API_URL is not defined"
  );
}

export const api = axios.create({
  baseURL,
});



/* ======================================================
   ADVISORS
====================================================== */

export async function getAdvisors() {
  /*
    TEMP MOCK DATA

    Later replace with:

    const response = await api.get("/advisors");
    return response.data;
  */

  return [
    {
      id: "rahul-mehta",

      fullName: "Rahul Mehta",

      headline:
        "Startup Strategy Advisor",

      expertise: [
        "SaaS",
        "GTM",
        "Startup Validation",
      ],

      category: "Technology",

      yearsExperience: 12,

      availabilityStatus:
        "Available This Week",

      rating: 4.9,

      totalSessions: 120,

      startupCount: 45,
    },

    {
      id: "priya-sharma",

      fullName: "Priya Sharma",

      headline:
        "Fundraising Mentor",

      expertise: [
        "Pitch Decks",
        "Investor Readiness",
      ],

      category: "Fundraising",

      yearsExperience: 10,

      availabilityStatus:
        "2 Slots Available",

      rating: 4.8,

      totalSessions: 200,

      startupCount: 70,
    },

    {
      id: "aman-verma",

      fullName: "Aman Verma",

      headline:
        "Product & MVP Expert",

      expertise: [
        "Product Strategy",
        "MVP Execution",
      ],

      category: "Product",

      yearsExperience: 8,

      availabilityStatus:
        "Available Tomorrow",

      rating: 4.7,

      totalSessions: 90,

      startupCount: 30,
    },

    {
      id: "neha-kapoor",

      fullName: "Neha Kapoor",

      headline:
        "Growth Advisor",

      expertise: [
        "Growth",
        "User Acquisition",
        "Branding",
      ],

      category: "Growth",

      yearsExperience: 9,

      availabilityStatus:
        "Open for Consultation",

      rating: 4.9,

      totalSessions: 150,

      startupCount: 55,
    },
  ];
}

export async function getInvestors() {
  /*
    TEMP MOCK DATA

    Later replace with:

    const response = await api.get("/investors");
    return response.data;
  */

  return [
    {
      id: "arjun-capital",

      fullName: "Arjun Mehta",

      firmName: "Apex Capital",

      investmentStage: "Seed",

      industries: [
        "SaaS",
        "AI",
        "Fintech",
      ],

      ticketSize: "₹25L - ₹2Cr",

      availabilityStatus:
        "Actively Investing",

      portfolioCount:
        "18 Startup Investments",
    },

    {
      id: "neha-ventures",

      fullName: "Neha Kapoor",

      firmName: "Vision Ventures",

      investmentStage:
        "Pre-Seed",

      industries: [
        "D2C",
        "Consumer",
        "Branding",
      ],

      ticketSize: "₹10L - ₹75L",

      availabilityStatus:
        "Open For Pitches",

      portfolioCount:
        "32 Founder Investments",
    },

    {
      id: "rahul-fund",

      fullName: "Rahul Sharma",

      firmName: "ScaleX Fund",

      investmentStage:
        "Series A",

      industries: [
        "Growth",
        "SaaS",
        "Technology",
      ],

      ticketSize: "₹1Cr - ₹10Cr",

      availabilityStatus:
        "Available This Month",

      portfolioCount:
        "50+ Startup Portfolio",
    },

    {
      id: "priya-angels",

      fullName: "Priya Verma",

      firmName: "Launch Angels",

      investmentStage:
        "Angel",

      industries: [
        "Women-led",
        "AI",
        "EdTech",
      ],

      ticketSize: "₹5L - ₹50L",

      availabilityStatus:
        "Accepting Applications",

      portfolioCount:
        "22 Angel Investments",
    },
  ];
}


export async function getPrograms() {
  /*
    TEMP MOCK DATA

    Later replace with:

    const response =
      await api.get("/programs");

    return response.data;
  */

  return [
    {
      id: "startup-validation",

      title:
        "Startup Validation Program",

      category: "Validation",

      description:
        "Validate startup ideas, market demand and founder execution strategy with structured guidance.",

      duration: "4 Weeks",

      mode: "Online",

      level: "Early Stage",

      mentorCount: 12,

      founderCount: 240,

      availabilityStatus:
        "Open Enrollment",
    },

    {
      id: "mvp-launch",

      title: "MVP Launch Sprint",

      category: "Product",

      description:
        "Build and launch your MVP with product planning, execution systems and startup mentorship.",

      duration: "6 Weeks",

      mode: "Hybrid",

      level: "Builder Stage",

      mentorCount: 18,

      founderCount: 320,

      availabilityStatus:
        "Starts Next Week",
    },

    {
      id: "fundraising-readiness",

      title:
        "Fundraising Readiness",

      category: "Fundraising",

      description:
        "Prepare your startup for investor conversations, pitch positioning and fundraising execution.",

      duration: "3 Weeks",

      mode: "Online",

      level: "Growth Stage",

      mentorCount: 9,

      founderCount: 180,

      availabilityStatus:
        "Limited Slots",
    },

    {
      id: "growth-execution",

      title:
        "Growth Execution Program",

      category: "Growth",

      description:
        "Scale startup growth systems, customer acquisition and founder execution strategy.",

      duration: "8 Weeks",

      mode: "Hybrid",

      level: "Scaling Stage",

      mentorCount: 15,

      founderCount: 410,

      availabilityStatus:
        "Accepting Applications",
    },
  ];
}


export async function getResources() {
  /*
    TEMP MOCK DATA

    Later replace with:

    const response =
      await api.get("/resources");

    return response.data;
  */

  return [
    {
      id: "startup-validation-guide",

      title:
        "Startup Validation Guide",

      category: "Validation",

      description:
        "Learn how to validate startup ideas, identify market demand and reduce execution risks.",

      format: "Guide",

      accessType: "Free",

      readTime: "12 Min",

      founderCount: 1200,

      availabilityStatus:
        "Available Now",
    },

    {
      id: "pitch-deck-framework",

      title:
        "Pitch Deck Framework",

      category: "Fundraising",

      description:
        "Structured investor pitch framework designed for early-stage startup fundraising.",

      format: "Template",

      accessType: "Premium",

      readTime: "8 Min",

      founderCount: 860,

      availabilityStatus:
        "Trending",
    },

    {
      id: "mvp-execution-playbook",

      title:
        "MVP Execution Playbook",

      category: "Product",

      description:
        "Step-by-step startup execution system for planning and launching scalable MVPs.",

      format: "Playbook",

      accessType: "Free",

      readTime: "15 Min",

      founderCount: 2100,

      availabilityStatus:
        "Most Popular",
    },

    {
      id: "startup-growth-systems",

      title:
        "Startup Growth Systems",

      category: "Growth",

      description:
        "Growth acquisition systems and startup scaling frameworks for modern founders.",

      format: "Resource Kit",

      accessType: "Premium",

      readTime: "20 Min",

      founderCount: 940,

      availabilityStatus:
        "Updated Recently",
    },
  ];
}