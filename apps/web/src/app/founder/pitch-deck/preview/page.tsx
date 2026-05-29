"use client";

import { useRouter } from "next/navigation";

import {
  Download,
  ArrowLeft,
  Presentation,
} from "lucide-react";

export default function PitchDeckPreviewPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F5F7FB] p-8">
      <div className="mx-auto max-w-6xl">
        {/* TOP */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 rounded-2xl border border-[#E2E8F0] bg-white px-5 py-3 text-sm font-semibold text-[#16214A]"
          >
            Back
          </button>

          <button className="inline-flex items-center gap-2 rounded-2xl bg-[#16214A] px-5 py-3 text-sm font-semibold text-white">
            <Download className="h-4 w-4" />
            Export Deck
          </button>
        </div>

        {/* SLIDE */}
        <div className="overflow-hidden rounded-[40px] border border-[#E2E8F0] bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-[#E2E8F0] px-10 py-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">
                Startup Ka Mall
              </p>

              <h1 className="mt-2 text-4xl font-black text-[#16214A]">
                Investor Pitch Deck
              </h1>
            </div>

            <div className="rounded-3xl bg-violet-100 p-5 text-violet-700">
              <Presentation className="h-10 w-10" />
            </div>
          </div>

          <div className="grid gap-10 p-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black text-[#16214A]">
                Startup Vision
              </h2>

              <p className="mt-5 text-base leading-8 text-[#64748B]">
                AI-powered founder operating
                system helping startups execute,
                scale and become investor ready.
              </p>

              <div className="mt-10">
                <h3 className="text-xl font-black text-[#16214A]">
                  Problem
                </h3>

                <p className="mt-3 leading-7 text-[#64748B]">
                  Founders struggle with fragmented
                  workflows, execution clarity and
                  ecosystem access.
                </p>
              </div>
            </div>

            <div>
              <div className="rounded-[32px] bg-[#F8FAFC] p-8">
                <h3 className="text-2xl font-black text-[#16214A]">
                  Key Metrics
                </h3>

                <div className="mt-8 space-y-5">
                  {[
                    "50K+ Founder Ecosystem Opportunity",
                    "₹10Cr+ Market Expansion Potential",
                    "AI Execution Workflow System",
                    "Scalable SaaS Revenue Model",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#E2E8F0] bg-white p-4 text-sm font-semibold text-[#16214A]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}