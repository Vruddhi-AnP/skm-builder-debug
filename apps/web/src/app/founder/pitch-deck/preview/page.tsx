"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { Download, Presentation, ArrowLeft } from "lucide-react";

interface PitchDeckData {
  startupName: string;
  oneLiner: string;
  problem: string;
  solution: string;
  marketSize: string;
  businessModel: string;
  traction: string;
  fundingAsk: string;
}

const EMPTY: PitchDeckData = {
  startupName: "",
  oneLiner: "",
  problem: "",
  solution: "",
  marketSize: "",
  businessModel: "",
  traction: "",
  fundingAsk: "",
};

export default function PitchDeckPreviewPage() {
  const router = useRouter();

  const data = useMemo<PitchDeckData>(() => {
  if (typeof window === "undefined") return EMPTY;
  try {
    const saved = localStorage.getItem("skmPitchDeck");
    return saved ? JSON.parse(saved) : EMPTY;
  } catch {
    return EMPTY;
  }
}, []);

const loaded = true;

  const handleExport = () => {
    window.print();
  };

  if (!loaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F5F7FB]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  const isEmpty = !data.startupName && !data.oneLiner && !data.problem;

  return (
    <div className="min-h-screen bg-[#F5F7FB] p-8 print:bg-white print:p-0">
      <div className="mx-auto max-w-6xl">

        {/* TOP BAR — hidden on print */}
        <div className="mb-8 flex items-center justify-between print:hidden">
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 rounded-2xl border border-[#E2E8F0] bg-white px-5 py-3 text-sm font-semibold text-[#16214A] transition hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Editor
          </button>

          <button
            type="button"
            onClick={handleExport}
            className="inline-flex items-center gap-2 rounded-2xl bg-[#16214A] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Export Deck
          </button>
        </div>

        {/* EMPTY STATE */}
        {isEmpty && (
          <div className="mb-8 rounded-[28px] border border-amber-200 bg-amber-50 p-6 text-center print:hidden">
            <p className="text-sm font-semibold text-amber-700">
              Your pitch deck is empty. Go back and fill in your startup details first.
            </p>
            <button
              type="button"
              onClick={() => router.back()}
              className="mt-4 rounded-2xl bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Fill Pitch Deck
            </button>
          </div>
        )}

        {/* DECK */}
        <div className="overflow-hidden rounded-[40px] border border-[#E2E8F0] bg-white shadow-sm print:rounded-none print:shadow-none">

          {/* HEADER SLIDE */}
          <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-[#16214A] px-10 py-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-300">
                Investor Pitch Deck
              </p>
              <h1 className="mt-3 text-5xl font-black text-white">
                {data.startupName || "Your Startup"}
              </h1>
              {data.oneLiner && (
                <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-300">
                  {data.oneLiner}
                </p>
              )}
            </div>
            <div className="rounded-3xl bg-violet-500/20 p-5 text-violet-300">
              <Presentation className="h-10 w-10" />
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid gap-0 lg:grid-cols-2">

            {/* LEFT COLUMN */}
            <div className="space-y-0 border-r border-[#E2E8F0]">

              {/* PROBLEM */}
              <div className="border-b border-[#E2E8F0] p-8">
                <div className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-700">
                  Problem
                </div>
                <p className="mt-4 text-base leading-8 text-[#334155]">
                  {data.problem || "No problem statement added yet."}
                </p>
              </div>

              {/* SOLUTION */}
              <div className="border-b border-[#E2E8F0] p-8">
                <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                  Solution
                </div>
                <p className="mt-4 text-base leading-8 text-[#334155]">
                  {data.solution || "No solution added yet."}
                </p>
              </div>

              {/* BUSINESS MODEL */}
              <div className="p-8">
                <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
                  Business Model
                </div>
                <p className="mt-4 text-base leading-8 text-[#334155]">
                  {data.businessModel || "No business model added yet."}
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-0">

              {/* KEY METRICS */}
              <div className="border-b border-[#E2E8F0] p-8">
                <div className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-violet-700">
                  Key Metrics
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    { label: "Market Size",  value: data.marketSize  || "—" },
                    { label: "Funding Ask",  value: data.fundingAsk  || "—" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-5 py-4"
                    >
                      <p className="text-sm font-semibold text-[#64748B]">
                        {item.label}
                      </p>
                      <p className="text-sm font-black text-[#16214A]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TRACTION */}
              <div className="border-b border-[#E2E8F0] p-8">
                <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-700">
                  Traction
                </div>
                <p className="mt-4 text-base leading-8 text-[#334155]">
                  {data.traction || "No traction data added yet."}
                </p>
              </div>

              {/* FUNDING ASK HIGHLIGHT */}
              <div className="p-8">
                <div className="rounded-[28px] bg-[#16214A] p-6 text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    We Are Raising
                  </p>
                  <h2 className="mt-3 text-4xl font-black text-white">
                    {data.fundingAsk || "—"}
                  </h2>
                  <p className="mt-2 text-sm text-slate-400">
                    Seed Round
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="border-t border-[#E2E8F0] bg-[#F8FAFC] px-10 py-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[#16214A]">
                {data.startupName || "Startup Ka Mall"} — Confidential
              </p>
              <p className="text-sm text-slate-400">
                Generated via Startup Ka Mall
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}