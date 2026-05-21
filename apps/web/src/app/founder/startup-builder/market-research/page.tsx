"use client";

import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Globe2,
  SearchCheck,
  Users2,
} from "lucide-react";

export default function MarketResearchPage() {
  const marketSegments = [
    "AI",
    "SaaS",
    "FinTech",
    "Healthcare",
    "EdTech",
    "Creator Economy",
  ];

  const marketTrends = [
    "AI Automation",
    "Remote Work",
    "Digital Payments",
    "Creator Monetization",
    "Workflow Automation",
    "Cloud Adoption",
  ];

  const customerTypes = [
    "Startups",
    "SMBs",
    "Enterprises",
    "Students",
    "Creators",
    "Agencies",
  ];

  const painPoints = [
    "High Costs",
    "Manual Workflows",
    "Poor UX",
    "No Automation",
    "Slow Operations",
    "Low Productivity",
  ];

  const competitors = [
    "Notion",
    "Airtable",
    "ClickUp",
    "Slack",
    "Zoho",
    "HubSpot",
  ];

  const advantages = [
    "AI-Powered",
    "Faster Workflow",
    "Lower Pricing",
    "Better UX",
    "Industry Focused",
    "Scalable Architecture",
  ];

  const [selectedMarket, setSelectedMarket] =
    useState("");

  const [selectedTrends, setSelectedTrends] =
    useState<string[]>([]);

  const [selectedCustomers, setSelectedCustomers] =
    useState<string[]>([]);

  const [selectedPainPoints, setSelectedPainPoints] =
    useState<string[]>([]);

  const [selectedCompetitors, setSelectedCompetitors] =
    useState<string[]>([]);

  const [selectedAdvantages, setSelectedAdvantages] =
    useState<string[]>([]);

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="mb-4 inline-flex items-center rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Step 3 • Startup Builder
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            Market Research
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Analyze market demand, customer
            behavior and competitor positioning
            through interactive startup research
            workflows.
          </p>
        </div>

        {/* PROGRESS */}
        <div className="w-full rounded-[28px] border border-slate-200 bg-slate-50 p-6 lg:max-w-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-600">
              Module Progress
            </p>

            <span className="text-sm font-bold text-cyan-600">
              40%
            </span>
          </div>

          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-[40%] rounded-full bg-cyan-500" />
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Continue market validation and
            audience analysis.
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* MARKET OVERVIEW */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700">
                <Globe2 className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Market Intelligence
                </h2>

                <p className="text-sm text-slate-500">
                  Understand your startup market
                  opportunity
                </p>
              </div>
            </div>

            {/* MARKET CATEGORY */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Select Market Category
              </label>

              <div className="flex flex-wrap gap-3">
                {marketSegments.map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      setSelectedMarket(item)
                    }
                    className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all ${
                      selectedMarket === item
                        ? "border-cyan-500 bg-cyan-500 text-white shadow-lg shadow-cyan-200"
                        : "border-slate-200 bg-white text-slate-700 hover:border-cyan-400 hover:bg-cyan-50"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* MARKET SIZE */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "TAM",
                  desc: "Total Addressable Market",
                },
                {
                  title: "SAM",
                  desc: "Serviceable Available Market",
                },
                {
                  title: "SOM",
                  desc: "Serviceable Obtainable Market",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-50 hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* MARKET TRENDS */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Growing Market Trends
              </label>

              <div className="flex flex-wrap gap-3">
                {marketTrends.map((trend) => {
                  const active =
                    selectedTrends.includes(trend);

                  return (
                    <button
                      key={trend}
                      onClick={() => {
                        if (active) {
                          setSelectedTrends(
                            selectedTrends.filter(
                              (p) => p !== trend
                            )
                          );
                        } else {
                          setSelectedTrends([
                            ...selectedTrends,
                            trend,
                          ]);
                        }
                      }}
                      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all ${
                        active
                          ? "border-cyan-500 bg-cyan-500 text-white shadow-lg shadow-cyan-200"
                          : "border-slate-200 bg-white text-slate-700 hover:border-cyan-400 hover:bg-cyan-50"
                      }`}
                    >
                      {trend}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* TARGET AUDIENCE */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-violet-100 p-3 text-violet-700">
                <Users2 className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Customer Intelligence
                </h2>

                <p className="text-sm text-slate-500">
                  Define your target users and
                  behavior
                </p>
              </div>
            </div>

            {/* CUSTOMER TYPES */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Select Target Customers
              </label>

              <div className="flex flex-wrap gap-3">
                {customerTypes.map((customer) => {
                  const active =
                    selectedCustomers.includes(
                      customer
                    );

                  return (
                    <button
                      key={customer}
                      onClick={() => {
                        if (active) {
                          setSelectedCustomers(
                            selectedCustomers.filter(
                              (p) => p !== customer
                            )
                          );
                        } else {
                          setSelectedCustomers([
                            ...selectedCustomers,
                            customer,
                          ]);
                        }
                      }}
                      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all ${
                        active
                          ? "border-violet-500 bg-violet-500 text-white shadow-lg shadow-violet-200"
                          : "border-slate-200 bg-white text-slate-700 hover:border-violet-400 hover:bg-violet-50"
                      }`}
                    >
                      {customer}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PAIN POINTS */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Customer Pain Points
              </label>

              <div className="flex flex-wrap gap-3">
                {painPoints.map((pain) => {
                  const active =
                    selectedPainPoints.includes(
                      pain
                    );

                  return (
                    <button
                      key={pain}
                      onClick={() => {
                        if (active) {
                          setSelectedPainPoints(
                            selectedPainPoints.filter(
                              (p) => p !== pain
                            )
                          );
                        } else {
                          setSelectedPainPoints([
                            ...selectedPainPoints,
                            pain,
                          ]);
                        }
                      }}
                      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all ${
                        active
                          ? "border-violet-500 bg-violet-500 text-white shadow-lg shadow-violet-200"
                          : "border-slate-200 bg-white text-slate-700 hover:border-violet-400 hover:bg-violet-50"
                      }`}
                    >
                      {pain}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* BUYING BEHAVIOR */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Price Sensitive",
                "Feature Driven",
                "Fast Decision Makers",
                "Enterprise Procurement",
              ].map((behavior) => (
                <div
                  key={behavior}
                  className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-violet-400 hover:shadow-lg"
                >
                  <h3 className="font-semibold text-slate-900">
                    {behavior}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Common customer buying pattern
                    observed in the market.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* COMPETITOR ANALYSIS */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
                <BarChart3 className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Competitor Analysis
                </h2>

                <p className="text-sm text-slate-500">
                  Analyze competitors and startup
                  differentiation
                </p>
              </div>
            </div>

            {/* COMPETITORS */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Existing Competitors
              </label>

              <div className="flex flex-wrap gap-3">
                {competitors.map((competitor) => {
                  const active =
                    selectedCompetitors.includes(
                      competitor
                    );

                  return (
                    <button
                      key={competitor}
                      onClick={() => {
                        if (active) {
                          setSelectedCompetitors(
                            selectedCompetitors.filter(
                              (p) => p !== competitor
                            )
                          );
                        } else {
                          setSelectedCompetitors([
                            ...selectedCompetitors,
                            competitor,
                          ]);
                        }
                      }}
                      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all ${
                        active
                          ? "border-amber-500 bg-amber-500 text-white shadow-lg shadow-amber-200"
                          : "border-slate-200 bg-white text-slate-700 hover:border-amber-400 hover:bg-amber-50"
                      }`}
                    >
                      {competitor}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ADVANTAGES */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Competitive Advantages
              </label>

              <div className="flex flex-wrap gap-3">
                {advantages.map((advantage) => {
                  const active =
                    selectedAdvantages.includes(
                      advantage
                    );

                  return (
                    <button
                      key={advantage}
                      onClick={() => {
                        if (active) {
                          setSelectedAdvantages(
                            selectedAdvantages.filter(
                              (p) => p !== advantage
                            )
                          );
                        } else {
                          setSelectedAdvantages([
                            ...selectedAdvantages,
                            advantage,
                          ]);
                        }
                      }}
                      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all ${
                        active
                          ? "border-amber-500 bg-amber-500 text-white shadow-lg shadow-amber-200"
                          : "border-slate-200 bg-white text-slate-700 hover:border-amber-400 hover:bg-amber-50"
                      }`}
                    >
                      {advantage}
                    </button>
                  );
                })}
              </div>
            </div>

           {/* MARKET INSIGHTS */}
              <div className="mt-10 rounded-[24px] border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-700">
                      Market Insights
                    </p>

                    <h3 className="mt-4 text-2xl font-black text-slate-900">
                      Market Opportunity Summary
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                      Your market selections indicate strong
                      startup demand potential with scalable
                      customer segments and emerging digital
                      growth opportunities.
                    </p>
                  </div>

                  <div className="hidden h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-sm lg:flex">
                    <span className="text-3xl">📊</span>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      title: "Market Demand",
                      value: "Strong",
                    },
                    {
                      title: "Competition",
                      value: "Moderate",
                    },
                    {
                      title: "Growth Scope",
                      value: "High",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white bg-white p-5"
                    >
                      <p className="text-sm font-medium text-slate-500">
                        {item.title}
                      </p>

                      <h4 className="mt-2 text-xl font-black text-slate-900">
                        {item.value}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {/* MARKET INSIGHTS */}
          <section className="rounded-[28px] border border-cyan-100 bg-gradient-to-br from-cyan-50 to-violet-50 p-6">
            <div className="flex items-center gap-3">
              <SearchCheck className="h-6 w-6 text-cyan-700" />

              <h3 className="text-xl font-bold text-slate-900">
                Market Insights
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {[
                "AI automation market growing rapidly",
                "Strong demand in SMB segment",
                "Competitor gaps identified in UX",
                "Scalable opportunity detected",
              ].map((tip) => (
                <div
                  key={tip}
                  className="rounded-2xl bg-white p-4 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {tip}
                </div>
              ))}
            </div>
          </section>

          {/* MARKET HEALTH */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Market Validation Score
            </h3>

            <div className="mt-6 space-y-5">
              {[
                {
                  label: "Market Demand",
                  value: "88%",
                },
                {
                  label: "Competition Gap",
                  value: "71%",
                },
                {
                  label: "Growth Opportunity",
                  value: "79%",
                },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-700">
                      {item.label}
                    </p>

                    <span className="text-sm font-bold text-cyan-600">
                      {item.value}
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                      style={{
                        width: item.value,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600">
          Save Draft
        </button>

        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-cyan-700">
          Continue to Solution Design
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}