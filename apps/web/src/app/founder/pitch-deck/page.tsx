"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import {
  FileText,
  Sparkles,
  CheckCircle2,
  Presentation,
  Save,
  Rocket,
} from "lucide-react";

export default function PitchDeckPage() {
  const router = useRouter();

 const [formData, setFormData] =
  useState(() => {
    if (typeof window === "undefined") return {
      startupName: "", oneLiner: "", problem: "",
      solution: "", marketSize: "", businessModel: "",
      traction: "", fundingAsk: "",
    };
    try {
      const saved = localStorage.getItem("skmPitchDeck");
      return saved ? JSON.parse(saved) : {
        startupName: "", oneLiner: "", problem: "",
        solution: "", marketSize: "", businessModel: "",
        traction: "", fundingAsk: "",
      };
    } catch {
      return {
        startupName: "", oneLiner: "", problem: "",
        solution: "", marketSize: "", businessModel: "",
        traction: "", fundingAsk: "",
      };
    }
  });

  const handleChange = (
    field: string,
    value: string
  ) => {
    setFormData((prev: typeof formData) => ({
      ...prev,
      [field]: value,
    }));
  };

const handleSave = () => {
  localStorage.setItem("skmPitchDeck", JSON.stringify(formData));
};

const filledFields = Object.values(formData).filter(
  (v) => (v as string).trim().length > 0
).length;
const totalFields = Object.keys(formData).length;
const pitchProgress = Math.round((filledFields / totalFields) * 100);

  return (
  <div className="mx-auto max-w-400 space-y-8 px-4 pb-24 xl:px-6">
      {/* HERO */}
      <section className="overflow-hidden rounded-[32px] border border-border/60 bg-[#F7F4EE]/95">
        <div className="grid gap-8 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-violet-700">
              <Presentation className="h-4 w-4" />
              Founder Pitch Module
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#16214A] md:text-5xl">
              Build Your
              <span className="block text-primary">
                Investor Pitch Deck
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B6B6B]">
              Structure your startup story,
              traction, business model and
              investor narrative with a premium
              founder pitch workflow.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Pitch Readiness
                </p>

                <h3 className="mt-2 text-5xl font-black text-[#16214A]">
                  72%
                </h3>
              </div>

              <div className="rounded-2xl bg-[#F7F4EE]/95 p-4 text-primary shadow-sm">
                <Rocket className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200">
              <div  className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${pitchProgress}%` }} />
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Startup story structured",
                "Investor narrative improving",
                "Business traction identified",
                "Funding clarity increasing",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />

                  <p className="text-sm font-medium text-[#6B6B6B]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
        {/* LEFT */}
        <div className="sticky top-24 space-y-6 self-start">
          {/* STARTUP INFO */}
          <section className="rounded-[36px] border border-border/60 bg-[#F8FAFC] p-7 shadow-sm lg:p-10">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-violet-100 p-4 text-violet-700">
                <FileText className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                  Pitch Information
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Define startup investor narrative
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Startup Name
                </label>

                <input
                  type="text"
                  value={formData.startupName}
                  onChange={(e) =>
                    handleChange(
                      "startupName",
                      e.target.value
                    )
                  }
                  placeholder="Enter startup name"
                  className="h-14 w-full rounded-2xl border border-border/60 bg-[#F8FAFC] px-5 text-sm outline-none transition focus:border-violet-400"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Startup One-Liner
                </label>

                <textarea
                  rows={3}
                  value={formData.oneLiner}
                  onChange={(e) =>
                    handleChange(
                      "oneLiner",
                      e.target.value
                    )
                  }
                  placeholder="Describe your startup in one sentence..."
                  className="w-full rounded-3xl border border-border/60 bg-[#F8FAFC] px-5 py-4 text-sm outline-none transition focus:border-violet-400"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Problem Statement
                </label>

                <textarea
                  rows={4}
                  value={formData.problem}
                  onChange={(e) =>
                    handleChange(
                      "problem",
                      e.target.value
                    )
                  }
                  placeholder="What problem are you solving?"
                  className="w-full rounded-3xl border border-border/60 bg-[#F8FAFC] px-5 py-4 text-sm outline-none transition focus:border-violet-400"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Solution
                </label>

                <textarea
                  rows={4}
                  value={formData.solution}
                  onChange={(e) =>
                    handleChange(
                      "solution",
                      e.target.value
                    )
                  }
                  placeholder="Describe your startup solution..."
                  className="w-full rounded-3xl border border-border/60 bg-[#F8FAFC] px-5 py-4 text-sm outline-none transition focus:border-violet-400"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm font-semibold text-slate-700">
                    Market Size
                  </label>

                  <input
                    type="text"
                    value={formData.marketSize}
                    onChange={(e) =>
                      handleChange(
                        "marketSize",
                        e.target.value
                      )
                    }
                    placeholder="$1B+ TAM"
                    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F8FAFC] px-5 text-sm outline-none transition focus:border-violet-400"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold text-slate-700">
                    Funding Ask
                  </label>

                  <input
                    type="text"
                    value={formData.fundingAsk}
                    onChange={(e) =>
                      handleChange(
                        "fundingAsk",
                        e.target.value
                      )
                    }
                    placeholder="$250K Seed Round"
                    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F8FAFC] px-5 text-sm outline-none transition focus:border-violet-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Business Model
                </label>

                <textarea
                  rows={3}
                  value={formData.businessModel}
                  onChange={(e) =>
                    handleChange(
                      "businessModel",
                      e.target.value
                    )
                  }
                  placeholder="How will your startup make money?"
                  className="w-full rounded-3xl border border-border/60 bg-[#F8FAFC] px-5 py-4 text-sm outline-none transition focus:border-violet-400"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Startup Traction
                </label>

                <textarea
                  rows={3}
                  value={formData.traction}
                  onChange={(e) =>
                    handleChange(
                      "traction",
                      e.target.value
                    )
                  }
                  placeholder="Users, revenue, growth metrics..."
                  className="w-full rounded-3xl border border-border/60 bg-[#F8FAFC] px-5 py-4 text-sm outline-none transition focus:border-violet-400"
                />
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT */}
        <div className="sticky top-24 space-y-6 self-start">
          <section className="rounded-[32px] border border-primary/10 bg-primary/5 p-6">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-primary" />

              <h3 className="text-2xl font-black tracking-tight text-[#16214A]">
                Investor Insights
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {[
                "Strong SaaS positioning detected",
                "Clear investor narrative structure",
                "Funding readiness improving",
                "Market opportunity looks scalable",
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

          <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
            <h3 className="text-2xl font-black tracking-tight text-[#16214A]">
              Pitch Metrics
            </h3>

            <div className="mt-8 space-y-5">
              {[
                {
                  label: "Investor Readiness",
                  value: "82%",
                },

                {
                  label: "Business Clarity",
                  value: "74%",
                },

                {
                  label: "Funding Potential",
                  value: "68%",
                },
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
      <div className="sticky bottom-0 z-20 flex flex-col gap-4 border-t border-border/60 bg-[#F5F7FB]/95 py-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-muted"
        >
          <Save className="h-4 w-4" />
          Save Draft
        </button>

        <button
          type="button"
          onClick={() => {
            handleSave();
            router.push("/founder/pitch-deck/preview");
          }}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
        >
          Preview Pitch Deck
        </button>
      </div>
    </div>
  );
}