"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveBuilderStep, getBuilderData } from "@/hooks/useLocalBuilder";

import {
  BarChart3,
  Globe2,
  SearchCheck,
  Users2,
  Save,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface MarketResearchForm {
  marketCategory: string;
  marketTrends: string[];
  targetCustomers: string[];
  customerPainPoints: string[];
  competitors: string[];
  competitiveAdvantages: string[];
  marketSize: string;
  marketDemand: string;
  customerBehavior: string;
  growthOpportunity: string;
  founderInsights: string;
}

export default function MarketResearchPage() {
  const router = useRouter();

  const [saved, setSaved] = useState(false);

 const [formData, setFormData] = useState<MarketResearchForm>(() => {
  const saved = getBuilderData();
  const raw = (saved.marketResearch ?? {}) as Record<string, string>;
  return {
    marketCategory: raw.marketCategory ?? "",
    marketSize: raw.marketSize ?? "",
    marketDemand: raw.marketDemand ?? "",
    customerBehavior: raw.customerBehavior ?? "",
    growthOpportunity: raw.growthOpportunity ?? "",
    founderInsights: raw.founderInsights ?? "",
    marketTrends: raw.marketTrends
      ? raw.marketTrends.split(",").filter(Boolean)
      : [],
    targetCustomers: raw.targetCustomers
      ? raw.targetCustomers.split(",").filter(Boolean)
      : [],
    customerPainPoints: raw.customerPainPoints
      ? raw.customerPainPoints.split(",").filter(Boolean)
      : [],
    competitors: raw.competitors
      ? raw.competitors.split(",").filter(Boolean)
      : [],
    competitiveAdvantages: raw.competitiveAdvantages
      ? raw.competitiveAdvantages.split(",").filter(Boolean)
      : [],
  };
});

  const marketSegments = [
    "AI", "SaaS", "FinTech", "Healthcare",
    "EdTech", "Creator Economy", "Developer Tools", "Productivity",
  ];

  const marketTrendOptions = [
    "AI Automation", "Remote Work", "Digital Payments", "Workflow Automation",
    "Cloud Adoption", "No-Code Platforms", "Creator Monetization", "Enterprise SaaS",
  ];

  const customerTypes = [
    "Startups", "SMBs", "Enterprises", "Students",
    "Creators", "Agencies", "Remote Teams", "Developers",
  ];

  const painPoints = [
    "High Costs", "Manual Workflows", "Poor UX", "No Automation",
    "Slow Operations", "Low Productivity", "Data Silos", "Complex Tools",
  ];

  const competitorOptions = [
    "Notion", "Airtable", "ClickUp", "Slack",
    "HubSpot", "Zoho", "Monday.com", "Asana",
  ];

  const advantages = [
    "AI-Powered", "Faster Workflow", "Better UX", "Lower Pricing",
    "Scalable Architecture", "Industry Focused", "Automation First", "Modern Experience",
  ];

  const toggleArrayValue = (
    field: "marketTrends" | "targetCustomers" | "customerPainPoints" | "competitors" | "competitiveAdvantages",
    value: string
  ) => {
    if (!value) return;
    const existing = formData[field];
    setFormData((prev) => ({
      ...prev,
      [field]: existing.includes(value)
        ? existing.filter((item) => item !== value)
        : [...existing, value],
    }));
  };

  const handleChange = (field: keyof MarketResearchForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

 const handleSave = () => {
  saveBuilderStep("marketResearch", {
    ...formData,
    marketTrends: formData.marketTrends.join(","),
    targetCustomers: formData.targetCustomers.join(","),
    customerPainPoints: formData.customerPainPoints.join(","),
    competitors: formData.competitors.join(","),
    competitiveAdvantages: formData.competitiveAdvantages.join(","),
  } as Record<string, string>);
  setSaved(true);
  setTimeout(() => setSaved(false), 2000);
};

  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="overflow-hidden rounded-[32px] border border-border/60 bg-[#F7F4EE]/95">
        <div className="grid gap-8 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-700">
              <TrendingUp className="h-4 w-4" />
              Startup Builder • Module 3
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#16214A] md:text-5xl">
              Analyze Your
              <span className="block text-primary">Market Opportunity</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B6B6B]">
              Research market demand, customer behavior, growth opportunities
              and competitor gaps through structured startup validation workflows.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Market Validation
                </p>
                <h3 className="mt-2 text-5xl font-black text-[#16214A]">40%</h3>
              </div>
              <div className="rounded-2xl bg-[#F7F4EE]/95 p-4 text-primary shadow-sm">
                <BarChart3 className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[40%] rounded-full bg-primary" />
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Market demand signals detected",
                "Customer trends identified",
                "Competitive gaps discovered",
                "Growth opportunity increasing",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <p className="text-sm font-medium text-[#6B6B6B]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        {/* LEFT COLUMN */}
        <div className="space-y-6">

          {/* MARKET INTELLIGENCE */}
          <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-cyan-100 p-4 text-cyan-700">
                <Globe2 className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                  Market Intelligence
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Analyze startup market opportunity
                </p>
              </div>
            </div>

            {/* MARKET CATEGORY */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Market Category
              </label>
              <select
                value={formData.marketCategory}
                onChange={(e) => handleChange("marketCategory", e.target.value)}
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              >
                <option value="">Select Market Category</option>
                {marketSegments.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>

            {/* MARKET SIZE */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { title: "TAM", desc: "Total Addressable Market" },
                { title: "SAM", desc: "Serviceable Available Market" },
                { title: "SOM", desc: "Serviceable Obtainable Market" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border/60 bg-[#f8fbff] p-5 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
                >
                  <h3 className="text-xl font-black text-[#16214A]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* MARKET DEMAND */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Market Demand Analysis
              </label>
              <textarea
                rows={4}
                value={formData.marketDemand}
                onChange={(e) => handleChange("marketDemand", e.target.value)}
                placeholder="Describe demand signals and market potential..."
                className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            {/* TRENDS */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Growing Market Trends
                {formData.marketTrends.length > 0 && (
                  <span className="ml-2 rounded-full bg-cyan-100 px-2 py-0.5 text-xs text-cyan-700">
                    {formData.marketTrends.join(", ")}
                  </span>
                )}
              </label>
              <select
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                onChange={(e) => { toggleArrayValue("marketTrends", e.target.value); e.target.value = ""; }}
              >
                <option value="">Select Market Trend</option>
                {marketTrendOptions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
          </section>

          {/* CUSTOMER INTELLIGENCE */}
          <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-violet-100 p-4 text-violet-700">
                <Users2 className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                  Customer Intelligence
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Understand target audience behavior
                </p>
              </div>
            </div>

            {/* TARGET CUSTOMERS */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Target Customer Segments
                {formData.targetCustomers.length > 0 && (
                  <span className="ml-2 rounded-full bg-violet-100 px-2 py-0.5 text-xs text-violet-700">
                    {formData.targetCustomers.join(", ")}
                  </span>
                )}
              </label>
              <select
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                onChange={(e) => { toggleArrayValue("targetCustomers", e.target.value); e.target.value = ""; }}
              >
                <option value="">Select Customer Segment</option>
                {customerTypes.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>

            {/* PAIN POINTS */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Customer Pain Points
                {formData.customerPainPoints.length > 0 && (
                  <span className="ml-2 rounded-full bg-violet-100 px-2 py-0.5 text-xs text-violet-700">
                    {formData.customerPainPoints.join(", ")}
                  </span>
                )}
              </label>
              <select
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                onChange={(e) => { toggleArrayValue("customerPainPoints", e.target.value); e.target.value = ""; }}
              >
                <option value="">Select Pain Point</option>
                {painPoints.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>

            {/* CUSTOMER BEHAVIOR */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Customer Buying Behavior
              </label>
              <textarea
                rows={4}
                value={formData.customerBehavior}
                onChange={(e) => handleChange("customerBehavior", e.target.value)}
                placeholder="Describe customer buying patterns and behavior..."
                className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              />
            </div>
          </section>

          {/* COMPETITOR ANALYSIS */}
          <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-amber-100 p-4 text-amber-700">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                  Competitor Analysis
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Analyze market competitors & gaps
                </p>
              </div>
            </div>

            {/* COMPETITORS */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Existing Competitors
                {formData.competitors.length > 0 && (
                  <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">
                    {formData.competitors.join(", ")}
                  </span>
                )}
              </label>
              <select
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                onChange={(e) => { toggleArrayValue("competitors", e.target.value); e.target.value = ""; }}
              >
                <option value="">Select Competitor</option>
                {competitorOptions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>

            {/* ADVANTAGES */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Competitive Advantages
                {formData.competitiveAdvantages.length > 0 && (
                  <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">
                    {formData.competitiveAdvantages.join(", ")}
                  </span>
                )}
              </label>
              <select
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                onChange={(e) => { toggleArrayValue("competitiveAdvantages", e.target.value); e.target.value = ""; }}
              >
                <option value="">Select Competitive Advantage</option>
                {advantages.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>

            {/* GROWTH OPPORTUNITY */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Growth Opportunity Insights
              </label>
              <textarea
                rows={4}
                value={formData.growthOpportunity}
                onChange={(e) => handleChange("growthOpportunity", e.target.value)}
                placeholder="Describe startup scalability and growth opportunities..."
                className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
              />
            </div>

            {/* FOUNDER NOTES */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Founder Research Insights
              </label>
              <textarea
                rows={4}
                value={formData.founderInsights}
                onChange={(e) => handleChange("founderInsights", e.target.value)}
                placeholder="Add founder research observations and market learnings..."
                className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
              />
            </div>
          </section>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {/* INSIGHTS */}
          <section className="rounded-[32px] border border-primary/10 bg-primary/5 p-6">
            <div className="flex items-center gap-3">
              <SearchCheck className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-black tracking-tight text-[#16214A]">
                Market Insights
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {[
                "AI automation demand increasing rapidly",
                "SMB segment shows strong scalability",
                "Competitor UX gaps identified",
                "Recurring SaaS opportunity detected",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/60 bg-[#F7F4EE]/95 p-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* SCORE */}
          <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
            <h3 className="text-2xl font-black tracking-tight text-[#16214A]">
              Market Validation
            </h3>

            <div className="mt-8 space-y-5">
              {[
                { label: "Market Demand", value: "88%" },
                { label: "Competition Gap", value: "71%" },
                { label: "Growth Potential", value: "79%" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-700">
                      {item.label}
                    </p>
                    <span className="text-sm font-bold text-primary">
                      {item.value}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: item.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={handleSave}
          className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-6 py-3 text-sm font-semibold transition ${
            saved
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-border/60 bg-[#F7F4EE]/95 text-slate-700 hover:bg-muted"
          }`}
        >
          {saved ? (
            <><CheckCircle2 className="h-4 w-4" />Saved!</>
          ) : (
            <><Save className="h-4 w-4" />Save Draft</>
          )}
        </button>

        <button
          type="button"
          onClick={() => {
            handleSave();
            router.push("/founder/startup-builder/solution-design");
          }}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
        >
          Continue to Solution Design
        </button>
      </div>
    </div>
  );
}