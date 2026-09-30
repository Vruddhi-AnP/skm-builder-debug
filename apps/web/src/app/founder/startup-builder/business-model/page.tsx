"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";
import { saveBuilderStep, getBuilderData } from "@/hooks/useLocalBuilder";

import {
  createEmptyBuilderData,
  getBuilderDataByStartupId,
  saveBuilderData,
  updateBuilderData,
} from "@/services/builder.service";

import { resolveFounderStartupId } from "@/services/startup.service";

import {
  Coins,
  CreditCard,
  TrendingUp,
  Save,
  Rocket,
  CheckCircle2,
  Target,
} from "lucide-react";

interface BusinessModelForm {
  revenueModel: string;
  pricingStrategy: string;
  acquisitionChannels: string[];
  costStructures: string[];
  scalingChallenges: string[];
  revenueTimeline: string;
  targetRevenue: string;
  monetizationStrategy: string;
  customerAcquisitionStrategy: string;
  growthStrategy: string;
  founderBusinessNotes: string;
}

const EMPTY_BUSINESS_FORM: BusinessModelForm = {
  revenueModel: "",
  pricingStrategy: "",
  acquisitionChannels: [],
  costStructures: [],
  scalingChallenges: [],
  revenueTimeline: "",
  targetRevenue: "",
  monetizationStrategy: "",
  customerAcquisitionStrategy: "",
  growthStrategy: "",
  founderBusinessNotes: "",
};

const getStringValue = (value: unknown): string =>
  typeof value === "string" ? value : "";

const getStringArray = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return value.filter(
      (item): item is string => typeof item === "string",
    );
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
};

const normalizeBusinessModel = (
  raw: Record<string, unknown>,
): BusinessModelForm => ({
  revenueModel: getStringValue(raw.revenueModel),
  pricingStrategy: getStringValue(raw.pricingStrategy),
  acquisitionChannels: getStringArray(raw.acquisitionChannels),
  costStructures: getStringArray(raw.costStructures),
  scalingChallenges: getStringArray(raw.scalingChallenges),
  revenueTimeline: getStringValue(raw.revenueTimeline),
  targetRevenue: getStringValue(raw.targetRevenue),
  monetizationStrategy: getStringValue(raw.monetizationStrategy),
  customerAcquisitionStrategy: getStringValue(
    raw.customerAcquisitionStrategy,
  ),
  growthStrategy: getStringValue(raw.growthStrategy),
  founderBusinessNotes: getStringValue(raw.founderBusinessNotes),
});

const serializeBusinessModel = (
  form: BusinessModelForm,
): Record<string, string> => ({
  revenueModel: form.revenueModel,
  pricingStrategy: form.pricingStrategy,
  acquisitionChannels: form.acquisitionChannels.join(","),
  costStructures: form.costStructures.join(","),
  scalingChallenges: form.scalingChallenges.join(","),
  revenueTimeline: form.revenueTimeline,
  targetRevenue: form.targetRevenue,
  monetizationStrategy: form.monetizationStrategy,
  customerAcquisitionStrategy:
    form.customerAcquisitionStrategy,
  growthStrategy: form.growthStrategy,
  founderBusinessNotes: form.founderBusinessNotes,
});

export default function BusinessModelPage() {
  const router = useRouter();

  const [saved, setSaved] = useState(false);

const [formData, setFormData] =
  useState<BusinessModelForm>(() => ({
    ...EMPTY_BUSINESS_FORM,
  }));

const [startupId, setStartupId] =
  useState<string | null>(null);

const [isLoading, setIsLoading] = useState(true);
const [isSaving, setIsSaving] = useState(false);
const [errorMessage, setErrorMessage] = useState("");

useEffect(() => {
  let active = true;

  const loadBusinessModel = async () => {
    try {
      const resolvedStartupId =
        await resolveFounderStartupId();

      if (!active) {
        return;
      }

      setStartupId(resolvedStartupId);

      try {
        const builder =
          await getBuilderDataByStartupId(
            resolvedStartupId,
          );

        if (!active) {
          return;
        }

        const businessModel =
          normalizeBusinessModel(
            builder.data?.businessModel ?? {},
          );

        setFormData(businessModel);

        // Temporary local fallback copy.
        saveBuilderStep(
          "businessModel",
          serializeBusinessModel(businessModel),
        );
      } catch (error: unknown) {
        if (!active) {
          return;
        }

        const localBusiness =
          getBuilderData().businessModel ?? {};

        setFormData(
          normalizeBusinessModel(localBusiness),
        );

        const isNotFound =
          axios.isAxiosError(error) &&
          error.response?.status === 404;

        if (!isNotFound) {
          setErrorMessage(
            "Could not load Business Model from the server. Showing your local draft.",
          );
        }
      }
    } catch {
      if (!active) {
        return;
      }

      const localBusiness =
        getBuilderData().businessModel ?? {};

      setFormData(
        normalizeBusinessModel(localBusiness),
      );

      setErrorMessage(
        "Could not resolve your startup from the server. Your draft is local only.",
      );
    } finally {
      if (active) {
        setIsLoading(false);
      }
    }
  };

  void loadBusinessModel();

  return () => {
    active = false;
  };
}, []);

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

  const revenueTimelines = [
    "0-6 Months",
    "6-12 Months",
    "1-2 Years",
    "2+ Years",
  ];

  const toggleArrayValue = (
  field:
    | "acquisitionChannels"
    | "costStructures"
    | "scalingChallenges",
  value: string
) => {
  if (!value) return;

  const existingValues = formData[field];

  setFormData((prev) => ({
    ...prev,
    [field]: existingValues.includes(value)
      ? existingValues.filter(
          (item) => item !== value
        )
      : [...existingValues, value],
  }));
};

  const handleChange = (
    field: keyof BusinessModelForm,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const persistBusinessModel = async (
  navigateNext: boolean,
) => {
  const businessModel =
    serializeBusinessModel(formData);

  if (!startupId) {
    saveBuilderStep(
      "businessModel",
      businessModel,
    );

    setErrorMessage(
      "Startup could not be resolved. Your draft is saved locally, but it has not been saved to the server.",
    );

    return;
  }

  setIsSaving(true);
  setErrorMessage("");

  try {
    try {
      await getBuilderDataByStartupId(startupId);

      await updateBuilderData(startupId, {
        data: {
          businessModel,
        },
      });
    } catch (error: unknown) {
      const isNotFound =
        axios.isAxiosError(error) &&
        error.response?.status === 404;

      if (!isNotFound) {
        throw error;
      }

      const localData = getBuilderData();

      await saveBuilderData({
        startupId,
        data: {
          ...createEmptyBuilderData(),
          ...localData,
          businessModel,
        },
      });
    }

    saveBuilderStep(
      "businessModel",
      businessModel,
    );

    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 2000);

    if (navigateNext) {
      router.push(
        "/founder/startup-builder/summary",
      );
    }
  } catch {
    saveBuilderStep(
      "businessModel",
      businessModel,
    );

    setErrorMessage(
      "Could not save Business Model to the server. Your draft is saved locally. Please try again.",
    );
  } finally {
    setIsSaving(false);
  }
};

if (isLoading) {
  return (
    <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-8 text-sm font-semibold text-slate-600">
      Loading saved Business Model...
    </div>
  );
}

  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="overflow-hidden rounded-[32px] border border-border/60 bg-[#F7F4EE]/95">
        <div className="grid gap-8 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-700">
              <Rocket className="h-4 w-4" />
              Startup Builder • Module 5
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#16214A] md:text-5xl">
              Build Your
              <span className="block text-primary">
                Business Model
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B6B6B]">
              Create scalable monetization systems,
              acquisition channels and sustainable
              startup revenue architecture for
              long-term growth.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Business Readiness
                </p>

                <h3 className="mt-2 text-5xl font-black text-[#16214A]">
                  80%
                </h3>
              </div>

              <div className="rounded-2xl bg-[#F7F4EE]/95 p-4 text-primary shadow-sm">
                <Coins className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[80%] rounded-full bg-primary" />
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Revenue structure initialized",
                "Growth channels identified",
                "Scaling strategy improving",
                "Recurring monetization potential detected",
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
      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        {/* LEFT */}
        <div className="space-y-6">
          {/* REVENUE ENGINE */}
          <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-cyan-100 p-4 text-cyan-700">
                <Coins className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                  Revenue Engine
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Define startup monetization systems
                </p>
              </div>
            </div>

            {/* REVENUE MODEL */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Revenue Model
              </label>

              <select
                value={formData.revenueModel}
                onChange={(e) =>
                  handleChange(
                    "revenueModel",
                    e.target.value
                  )
                }
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              >
                <option value="">
                  Select Revenue Model
                </option>

                {revenueModels.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* PRICING */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Pricing Strategy
              </label>

              <select
                value={formData.pricingStrategy}
                onChange={(e) =>
                  handleChange(
                    "pricingStrategy",
                    e.target.value
                  )
                }
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              >
                <option value="">
                  Select Pricing Strategy
                </option>

                {pricingStrategies.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* TIMELINE */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Expected Revenue Timeline
              </label>

              <select
                value={formData.revenueTimeline}
                onChange={(e) =>
                  handleChange(
                    "revenueTimeline",
                    e.target.value
                  )
                }
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              >
                <option value="">
                  Select Revenue Timeline
                </option>

                {revenueTimelines.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* TARGET */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Target Revenue Goal
              </label>

              <input
                type="text"
                value={formData.targetRevenue}
                onChange={(e) =>
                  handleChange(
                    "targetRevenue",
                    e.target.value
                  )
                }
                placeholder="Example: ₹10L ARR within 12 months"
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            {/* MONETIZATION */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Monetization Strategy
              </label>

              <textarea
                rows={4}
                value={formData.monetizationStrategy}
                onChange={(e) =>
                  handleChange(
                    "monetizationStrategy",
                    e.target.value
                  )
                }
                placeholder="Describe how your startup generates sustainable revenue..."
                className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              />
            </div>
          </section>

          {/* GROWTH STRATEGY */}
          <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-violet-100 p-4 text-violet-700">
                <TrendingUp className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                  Growth Strategy
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Build customer acquisition systems
                </p>
              </div>
            </div>

            {/* CHANNELS */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Acquisition Channels
              </label>

              <select
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                onChange={(e) => {
                  toggleArrayValue(
                    "acquisitionChannels",
                    e.target.value
                  );

                  e.target.value = "";
                }}
              >
                <option value="">
                  Select Acquisition Channel
                </option>

                {acquisitionChannels.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* STRATEGY */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Customer Acquisition Strategy
              </label>

              <textarea
                rows={4}
                value={
                  formData.customerAcquisitionStrategy
                }
                onChange={(e) =>
                  handleChange(
                    "customerAcquisitionStrategy",
                    e.target.value
                  )
                }
                placeholder="Describe how you will acquire and retain users..."
                className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              />
            </div>

            {/* GROWTH */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Long-Term Growth Strategy
              </label>

              <textarea
                rows={4}
                value={formData.growthStrategy}
                onChange={(e) =>
                  handleChange(
                    "growthStrategy",
                    e.target.value
                  )
                }
                placeholder="Describe startup scaling and expansion plans..."
                className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              />
            </div>
          </section>

          {/* COST STRUCTURE */}
          <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-amber-100 p-4 text-amber-700">
                <CreditCard className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                  Cost Structure
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Analyze operational business costs
                </p>
              </div>
            </div>

            {/* COSTS */}
            <div>
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Major Startup Costs
              </label>

              <select
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                onChange={(e) => {
                  toggleArrayValue(
                    "costStructures",
                    e.target.value
                  );

                  e.target.value = "";
                }}
              >
                <option value="">
                  Select Cost Structure
                </option>

                {costStructures.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* CHALLENGES */}
            <div className="mt-8">
              <label className="mb-4 block text-sm font-semibold text-slate-700">
                Scaling Challenges
              </label>

              <select
                className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                onChange={(e) => {
                  toggleArrayValue(
                    "scalingChallenges",
                    e.target.value
                  );

                  e.target.value = "";
                }}
              >
                <option value="">
                  Select Scaling Challenge
                </option>

                {scalingChallenges.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* NOTES */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Founder Business Notes
              </label>

              <textarea
                rows={4}
                value={formData.founderBusinessNotes}
                onChange={(e) =>
                  handleChange(
                    "founderBusinessNotes",
                    e.target.value
                  )
                }
                placeholder="Add additional startup business observations..."
                className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
              />
            </div>
          </section>
        </div>

       {/* RIGHT */}
<div className="space-y-6">
  {/* MODULE GUIDE */}
  <section className="rounded-[32px] border border-primary/10 bg-primary/5 p-6">
    <h3 className="text-xl font-black tracking-tight text-[#16214A]">
      Module Guide
    </h3>
    <p className="mt-3 text-sm leading-7 text-slate-500">
      A clear business model is the final piece before your readiness
      score. Complete all three sections for the best result.
    </p>
    <div className="mt-6 space-y-3">
      {[
        { step: "1", label: "Revenue Engine", done: !!(formData.revenueModel && formData.pricingStrategy && formData.monetizationStrategy) },
        { step: "2", label: "Growth Strategy", done: !!(formData.acquisitionChannels.length > 0 && formData.growthStrategy) },
        { step: "3", label: "Cost Structure", done: !!(formData.costStructures.length > 0) },
      ].map((item) => (
        <div key={item.step} className="flex items-center gap-3 rounded-2xl bg-background p-3">
          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black ${
            item.done ? "bg-emerald-500 text-white" : "bg-slate-200 text-slate-600"
          }`}>
            {item.done ? "✓" : item.step}
          </div>
          <p className={`text-sm font-semibold ${item.done ? "text-emerald-700" : "text-slate-600"}`}>
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </section>

  {/* TIP */}
  <section className="rounded-[32px] border border-amber-100 bg-amber-50 p-6">
    <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
      Founder Tip
    </p>
    <p className="mt-3 text-sm leading-7 text-amber-900">
      Subscription and usage-based models have the highest investor
      appeal for early-stage SaaS startups. Pick a model you can
      defend with real numbers.
    </p>
  </section>

  {/* LIVE STRATEGY SUMMARY */}
  <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <Target className="h-5 w-5 text-primary" />
      <h3 className="text-xl font-black tracking-tight text-[#16214A]">
        Strategy Summary
      </h3>
    </div>
    <div className="mt-4 space-y-3">
      <div className="rounded-2xl bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Revenue Model</p>
        <h4 className="mt-1 text-base font-black text-[#16214A]">
          {formData.revenueModel || "Not Selected"}
        </h4>
      </div>
      <div className="rounded-2xl bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Pricing Position</p>
        <h4 className="mt-1 text-base font-black text-[#16214A]">
          {formData.pricingStrategy || "Not Selected"}
        </h4>
      </div>
      <div className="rounded-2xl bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Growth Channels</p>
        <h4 className="mt-1 text-base font-black text-[#16214A]">
          {formData.acquisitionChannels.length > 0 ? formData.acquisitionChannels.join(", ") : "None selected"}
        </h4>
      </div>

      <div className="rounded-2xl bg-slate-50 p-4">
  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
    Growth Strategy
  </p>

  <h4 className="mt-1 text-base font-black text-[#16214A]">
    {formData.growthStrategy || "Not Defined"}
  </h4>
</div>

<div className="rounded-2xl bg-slate-50 p-4">
  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
    Major Costs
  </p>

  <h4 className="mt-1 text-base font-black text-[#16214A]">
    {formData.costStructures.length > 0
      ? formData.costStructures.join(", ")
      : "Not Selected"}
  </h4>
</div>

    </div>
  </section>
</div>
</div>

{errorMessage && (
  <div
    role="alert"
    className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700"
  >
    {errorMessage}
  </div>
)}

      {/* FOOTER */}
      <div className="flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
         <button
  type="button"
  onClick={() => {
    void persistBusinessModel(false);
  }}
  disabled={isSaving}
  className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-6 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
    saved
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : "border-border/60 bg-[#F7F4EE]/95 text-slate-700 hover:bg-muted"
  }`}
>
  {isSaving ? (
    <>Saving...</>
  ) : saved ? (
    <>
      <CheckCircle2 className="h-4 w-4" />
      Saved!
    </>
  ) : (
    <>
      <Save className="h-4 w-4" />
      Save Draft
    </>
  )}
</button>

          <button
  type="button"
  onClick={() => {
    void persistBusinessModel(true);
  }}
  disabled={isSaving}
  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
>
  {isSaving
    ? "Saving..."
    : "Continue to Summary"}
</button>
      </div>
    </div>
  );
}