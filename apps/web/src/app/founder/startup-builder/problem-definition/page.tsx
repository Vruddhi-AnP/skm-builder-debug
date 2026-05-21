"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CircleHelp,
  Users,
} from "lucide-react";

export default function ProblemDefinitionPage() {
  const problemAreas = [
    "Manual Operations",
    "Poor Communication",
    "High Operational Costs",
    "No Automation",
    "Customer Retention",
    "Slow Processes",
  ];

  const existingSolutions = [
    "Excel Sheets",
    "WhatsApp",
    "Manual Work",
    "Google Docs",
    "Legacy Software",
    "Freelancers",
  ];

  const affectedUsers = [
    "Founders",
    "Startups",
    "SMBs",
    "Enterprises",
    "Students",
    "Agencies",
  ];

  const severityLevels = [
    {
      label: "Low",
      emoji: "🙂",
    },
    {
      label: "Moderate",
      emoji: "😐",
    },
    {
      label: "High",
      emoji: "🔥",
    },
    {
      label: "Critical",
      emoji: "🚨",
    },
  ];

  const [selectedProblems, setSelectedProblems] =
    useState<string[]>([]);

  const [
    selectedAlternatives,
    setSelectedAlternatives,
  ] = useState<string[]>([]);

  const [selectedUsers, setSelectedUsers] =
    useState<string[]>([]);

  const [selectedSeverity, setSelectedSeverity] =
    useState("");

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="mb-4 inline-flex items-center rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Step 2 • Startup Builder
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            Problem Definition
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Discover real-world pain points,
            customer frustrations and market
            inefficiencies through interactive startup
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
              60%
            </span>
          </div>

          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-[60%] rounded-full bg-cyan-500" />
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Continue defining customer pain and
            market opportunity.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        {/* LEFT */}
        <div className="space-y-6">
          {/* CORE PROBLEM */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-rose-100 p-3 text-rose-700">
                <CircleHelp className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Problem Discovery Engine
                </h2>

                <p className="text-sm text-slate-500">
                  Identify major market pain points
                </p>
              </div>
            </div>

            {/* PROBLEM AREAS */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Select Core Problem Areas
              </label>

              <div className="flex flex-wrap gap-3">
                {problemAreas.map((problem) => {
                  const active =
                    selectedProblems.includes(problem);

                  return (
                    <button
                      key={problem}
                      onClick={() => {
                        if (active) {
                          setSelectedProblems(
                            selectedProblems.filter(
                              (p) => p !== problem
                            )
                          );
                        } else {
                          setSelectedProblems([
                            ...selectedProblems,
                            problem,
                          ]);
                        }
                      }}
                      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                        active
                          ? "border-rose-500 bg-rose-500 text-white shadow-lg shadow-rose-200"
                          : "border-slate-200 bg-white text-slate-700 hover:border-rose-400 hover:bg-rose-50"
                      }`}
                    >
                      {problem}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SEVERITY */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Problem Severity
              </label>

              <div className="grid gap-4 md:grid-cols-4">
                {severityLevels.map((item) => (
                  <button
                    key={item.label}
                    onClick={() =>
                      setSelectedSeverity(item.label)
                    }
                    className={`rounded-2xl border p-5 text-center transition-all ${
                      selectedSeverity === item.label
                        ? "border-rose-500 bg-rose-50 shadow-lg shadow-rose-100"
                        : "border-slate-200 hover:border-rose-400 hover:bg-rose-50"
                    }`}
                  >
                    <div className="text-3xl">
                      {item.emoji}
                    </div>

                    <p className="mt-3 font-semibold text-slate-900">
                      {item.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* OPTIONAL NOTES */}
            <div className="mt-8">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Additional Problem Insights
                <span className="ml-2 text-xs font-medium text-slate-400">
                  (Optional)
                </span>
              </label>

              <textarea
                rows={4}
                placeholder="Add additional founder observations..."
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-rose-500"
              />
            </div>
          </section>

          {/* MARKET GAPS */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
                <AlertTriangle className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Market Gap Analysis
                </h2>

                <p className="text-sm text-slate-500">
                  Analyze existing alternatives and
                  weaknesses
                </p>
              </div>
            </div>

            {/* EXISTING SOLUTIONS */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Existing Solutions Used By Customers
              </label>

              <div className="flex flex-wrap gap-3">
                {existingSolutions.map((item) => {
                  const active =
                    selectedAlternatives.includes(
                      item
                    );

                  return (
                    <button
                      key={item}
                      onClick={() => {
                        if (active) {
                          setSelectedAlternatives(
                            selectedAlternatives.filter(
                              (p) => p !== item
                            )
                          );
                        } else {
                          setSelectedAlternatives([
                            ...selectedAlternatives,
                            item,
                          ]);
                        }
                      }}
                      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all ${
                        active
                          ? "border-amber-500 bg-amber-500 text-white shadow-lg shadow-amber-200"
                          : "border-slate-200 bg-white text-slate-700 hover:border-amber-400 hover:bg-amber-50"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* MARKET GAPS */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Too Expensive",
                "Complex UX",
                "No Automation",
                "Poor Scalability",
              ].map((gap) => (
                <div
                  key={gap}
                  className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
                >
                  <h3 className="font-semibold text-slate-900">
                    {gap}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Common weakness identified in
                    existing market solutions.
                  </p>
                </div>
              ))}
            </div>

            {/* PROBLEM INSIGHTS */}
              <div className="mt-10 rounded-[24px] border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-700">
                      Problem Insights
                    </p>

                    <h3 className="mt-4 text-2xl font-black text-slate-900">
                      Problem Opportunity Summary
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                      Your selected pain points indicate strong
                      operational inefficiencies with scalable
                      opportunities for automation and workflow
                      optimization across multiple industries.
                    </p>
                  </div>

                  <div className="hidden h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-sm lg:flex">
                    <span className="text-3xl">⚠️</span>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      title: "Pain Intensity",
                      value: "High",
                    },
                    {
                      title: "Market Gap",
                      value: "Strong",
                    },
                    {
                      title: "Demand Potential",
                      value: "Scalable",
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

          {/* AFFECTED USERS */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700">
                <Users className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Affected Users
                </h2>

                <p className="text-sm text-slate-500">
                  Define who experiences this
                  problem
                </p>
              </div>
            </div>

            {/* USER TYPES */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Select Target Users
              </label>

              <div className="flex flex-wrap gap-3">
                {affectedUsers.map((user) => {
                  const active =
                    selectedUsers.includes(user);

                  return (
                    <button
                      key={user}
                      onClick={() => {
                        if (active) {
                          setSelectedUsers(
                            selectedUsers.filter(
                              (p) => p !== user
                            )
                          );
                        } else {
                          setSelectedUsers([
                            ...selectedUsers,
                            user,
                          ]);
                        }
                      }}
                      className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all ${
                        active
                          ? "border-cyan-500 bg-cyan-500 text-white shadow-lg shadow-cyan-200"
                          : "border-slate-200 bg-white text-slate-700 hover:border-cyan-400 hover:bg-cyan-50"
                      }`}
                    >
                      {user}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* USER BEHAVIOR */}
            <div className="mt-8">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                User Behavior & Challenges
                <span className="ml-2 text-xs font-medium text-slate-400">
                  (Optional)
                </span>
              </label>

              <textarea
                rows={5}
                placeholder="Describe how users currently deal with this problem..."
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-cyan-500"
              />
            </div>
          </section>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* PROBLEM INSIGHTS */}
          <section className="rounded-[28px] border border-cyan-100 bg-gradient-to-br from-cyan-50 to-rose-50 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">
                Problem Insights
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {[
                "Strong operational pain detected",
                "Automation opportunity identified",
                "Recurring business demand possible",
                "Problem appears scalable across industries",
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

          {/* READINESS */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Problem Validation Score
            </h3>

            <div className="mt-6 space-y-5">
              {[
                {
                  label: "Pain Severity",
                  value: "82%",
                },
                {
                  label: "Market Gap",
                  value: "74%",
                },
                {
                  label: "Customer Demand",
                  value: "68%",
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
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-rose-500"
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
          Continue to Market Research
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}