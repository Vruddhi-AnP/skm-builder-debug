"use client";

import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Coins,
  CreditCard,
  TrendingUp,
} from "lucide-react";

export default function BusinessModelPage() {
  const revenueModels = [
    "Subscription",
    "Freemium",
    "Marketplace",
    "Commission",
    "Usage Based",
    "Enterprise Licensing",
  ];

  const acquisitionChannels = [
    "SEO",
    "LinkedIn",
    "Paid Ads",
    "Influencer Marketing",
    "Partnerships",
    "Cold Outreach",
  ];

  const pricingStrategies = [
    "Affordable",
    "Balanced",
    "Premium",
    "Enterprise",
  ];

  const costStructures = [
    "Team Salaries",
    "Marketing",
    "Cloud Infrastructure",
    "Sales Team",
    "Operations",
    "Customer Support",
  ];

  const scalingChallenges = [
    "High CAC",
    "Operational Complexity",
    "Retention Issues",
    "Infrastructure Costs",
  ];

  const [selectedRevenue, setSelectedRevenue] =
    useState("");

  const [
    selectedChannels,
    setSelectedChannels,
  ] = useState<string[]>([]);

  const [selectedPricing, setSelectedPricing] =
    useState("");

  const [selectedCosts, setSelectedCosts] =
    useState<string[]>([]);

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="mb-4 inline-flex items-center rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Step 5 • Startup Builder
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            Business Model
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Build scalable monetization, growth and
            revenue systems through interactive
            startup business workflows.
          </p>
        </div>

        {/* PROGRESS */}
        <div className="w-full rounded-[28px] border border-slate-200 bg-slate-50 p-6 lg:max-w-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-600">
              Module Progress
            </p>

            <span className="text-sm font-bold text-cyan-600">
              15%
            </span>
          </div>

          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-[15%] rounded-full bg-cyan-500" />
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Continue building your revenue and
            growth strategy.
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* REVENUE MODEL */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700">
                <Coins className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Revenue Engine
                </h2>

                <p className="text-sm text-slate-500">
                  Define how your startup earns and
                  scales revenue
                </p>
              </div>
            </div>

            {/* REVENUE MODELS */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Select Revenue Model
              </label>

              <div className="grid gap-4 md:grid-cols-2">
                {revenueModels.map((model) => (
                  <button
                    key={model}
                    onClick={() =>
                      setSelectedRevenue(model)
                    }
                    className={`rounded-2xl border p-5 text-left transition-all ${
                      selectedRevenue === model
                        ? "border-cyan-500 bg-cyan-50 shadow-lg shadow-cyan-100"
                        : "border-slate-200 hover:border-cyan-400 hover:bg-cyan-50"
                    }`}
                  >
                    <h3 className="font-semibold text-slate-900">
                      {model}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Scalable monetization structure
                      for startup growth.
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* PRICING */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Pricing Positioning
              </label>

              <div className="grid gap-4 md:grid-cols-4">
                {pricingStrategies.map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      setSelectedPricing(item)
                    }
                    className={`rounded-2xl border p-5 text-center transition-all ${
                      selectedPricing === item
                        ? "border-cyan-500 bg-cyan-50 shadow-lg shadow-cyan-100"
                        : "border-slate-200 hover:border-cyan-400 hover:bg-cyan-50"
                    }`}
                  >
                    <p className="font-semibold text-slate-900">
                      {item}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* TIMELINE */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Expected Revenue Timeline
              </label>

              <div className="grid gap-4 md:grid-cols-4">
                {[
                  "0-6 Months",
                  "6-12 Months",
                  "1-2 Years",
                  "2+ Years",
                ].map((timeline) => (
                  <div
                    key={timeline}
                    className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-50 hover:shadow-lg"
                  >
                    <p className="font-semibold text-slate-800">
                      {timeline}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CUSTOMER ACQUISITION */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-violet-100 p-3 text-violet-700">
                <TrendingUp className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Growth Strategy
                </h2>

                <p className="text-sm text-slate-500">
                  Define acquisition and scaling
                  channels
                </p>
              </div>
            </div>

            {/* CHANNELS */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Customer Acquisition Channels
              </label>

              <div className="flex flex-wrap gap-3">
                {acquisitionChannels.map((channel) => {
                  const active =
                    selectedChannels.includes(
                      channel
                    );

                  return (
                    <button
                      key={channel}
                      onClick={() => {
                        if (active) {
                          setSelectedChannels(
                            selectedChannels.filter(
                              (p) => p !== channel
                            )
                          );
                        } else {
                          setSelectedChannels([
                            ...selectedChannels,
                            channel,
                          ]);
                        }
                      }}
                      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all ${
                        active
                          ? "border-violet-500 bg-violet-500 text-white shadow-lg shadow-violet-200"
                          : "border-slate-200 bg-white text-slate-700 hover:border-violet-400 hover:bg-violet-50"
                      }`}
                    >
                      {channel}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* GROWTH CARDS */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Organic Growth",
                "Paid Growth",
                "Community Driven",
                "Enterprise Sales",
              ].map((strategy) => (
                <div
                  key={strategy}
                  className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-violet-400 hover:shadow-lg"
                >
                  <h3 className="font-semibold text-slate-900">
                    {strategy}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Scalable startup growth
                    strategy for long-term expansion.
                  </p>
                </div>
              ))}
            </div>

            {/* OPTIONAL NOTES */}
            <div className="mt-8">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Additional Growth Notes
                <span className="ml-2 text-xs font-medium text-slate-400">
                  (Optional)
                </span>
              </label>

              <textarea
                rows={4}
                placeholder="Add additional acquisition or growth insights..."
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-violet-500"
              />
            </div>
          </section>

          {/* COST STRUCTURE */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
                <CreditCard className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Cost Structure
                </h2>

                <p className="text-sm text-slate-500">
                  Analyze operational and scaling
                  expenses
                </p>
              </div>
            </div>

            {/* COSTS */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Major Startup Costs
              </label>

              <div className="flex flex-wrap gap-3">
                {costStructures.map((cost) => {
                  const active =
                    selectedCosts.includes(cost);

                  return (
                    <button
                      key={cost}
                      onClick={() => {
                        if (active) {
                          setSelectedCosts(
                            selectedCosts.filter(
                              (p) => p !== cost
                            )
                          );
                        } else {
                          setSelectedCosts([
                            ...selectedCosts,
                            cost,
                          ]);
                        }
                      }}
                      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all ${
                        active
                          ? "border-amber-500 bg-amber-500 text-white shadow-lg shadow-amber-200"
                          : "border-slate-200 bg-white text-slate-700 hover:border-amber-400 hover:bg-amber-50"
                      }`}
                    >
                      {cost}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SCALING CHALLENGES */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {scalingChallenges.map((challenge) => (
                <div
                  key={challenge}
                  className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
                >
                  <h3 className="font-semibold text-slate-900">
                    {challenge}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Potential scaling bottleneck for
                    future business expansion.
                  </p>
                </div>
              ))}
            </div>

           {/* BUSINESS INSIGHTS */}
            <div className="mt-10 rounded-[24px] border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-700">
                    Startup Insights
                  </p>

                  <h3 className="mt-4 text-2xl font-black text-slate-900">
                    Business Strategy Summary
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                    Your selections indicate strong revenue
                    scalability potential with recurring
                    monetization opportunities and sustainable
                    acquisition channels.
                  </p>
                </div>

                <div className="hidden h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-sm lg:flex">
                  <span className="text-3xl">📈</span>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Revenue Model",
                    value: "Scalable",
                  },
                  {
                    title: "Growth Potential",
                    value: "Strong",
                  },
                  {
                    title: "Cost Efficiency",
                    value: "Moderate",
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
          {/* BUSINESS INSIGHTS */}
          <section className="rounded-[28px] border border-cyan-100 bg-gradient-to-br from-cyan-50 to-violet-50 p-6">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="h-6 w-6 text-cyan-700" />

              <h3 className="text-xl font-bold text-slate-900">
                 Business Insights
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {[
                "Recurring revenue model recommended",
                "Strong SaaS monetization potential",
                "LinkedIn acquisition channel scalable",
                "Operational costs appear manageable",
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

          {/* BUSINESS HEALTH */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Business Readiness
            </h3>

            <div className="mt-6 space-y-5">
              {[
                {
                  label: "Revenue Scalability",
                  value: "84%",
                },
                {
                  label: "Growth Potential",
                  value: "72%",
                },
                {
                  label: "Cost Efficiency",
                  value: "67%",
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

      {/* FOOTER */}
      <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600">
          Save Draft
        </button>

        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-cyan-700">
          Continue to Summary
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}