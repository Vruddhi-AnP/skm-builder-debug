"use client";

import { useEffect, useState } from "react";
import {
  getBuilderProgress,
  getCompletedStepCount,
} from "@/hooks/useLocalBuilder";

export default function DashboardStats() {
 const [progress] = useState(() => getBuilderProgress());
const [completedCount] = useState(() => getCompletedStepCount());

  const stats = [
    {
      title: "Builder Progress",
      value: `${progress}%`,
      status: completedCount === 0
        ? "Start the Startup Builder"
        : `${completedCount} of 5 modules done`,
      highlight: completedCount === 0,
    },
    {
      title: "Modules Completed",
      value: `${completedCount}/5`,
      status: completedCount === 5
        ? "All modules complete 🎉"
        : "Complete all to get your score",
      highlight: false,
    },
    {
      title: "Investor Interest",
      value: "—",
      status: "Available after builder",
      highlight: false,
    },
    {
      title: "Advisor Connections",
      value: "—",
      status: "Browse advisors to connect",
      highlight: false,
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className={`rounded-[28px] border p-6 transition hover:-translate-y-1 hover:shadow-lg ${
            item.highlight
              ? "border-amber-200 bg-amber-50"
              : "border-border/60 bg-[#F7F4EE]/95"
          }`}
        >
          <p className="text-sm text-slate-500">
            {item.title}
          </p>

          <h2 className={`mt-4 text-4xl font-black tracking-tight ${
            item.highlight ? "text-amber-700" : "text-[#16214A]"
          }`}>
            {item.value}
          </h2>

          <p className={`mt-3 text-sm ${
            item.highlight ? "font-semibold text-amber-600" : "text-slate-500"
          }`}>
            {item.status}
          </p>
        </div>
      ))}
    </section>
  );
}