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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  AlertTriangle,
  CircleHelp,
  Users,
  Save,
  Target,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";

interface ProblemDefinitionForm {
  coreProblemStatement: string;
  problemSeverity: string;
  affectedUsers: string[];
  currentAlternatives: string[];
  marketGap: string;
  customerFrustrations: string;
  operationalImpact: string;
  problemAreas: string[];
  problemFrequency: string;
  problemUrgency: string;
  founderObservations: string;
}

const EMPTY_PROBLEM_FORM: ProblemDefinitionForm = {
  coreProblemStatement: "",
  problemSeverity: "",
  affectedUsers: [],
  currentAlternatives: [],
  marketGap: "",
  customerFrustrations: "",
  operationalImpact: "",
  problemAreas: [],
  problemFrequency: "",
  problemUrgency: "",
  founderObservations: "",
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

const normalizeProblemDefinition = (
  raw: Record<string, unknown>,
): ProblemDefinitionForm => ({
  coreProblemStatement: getStringValue(raw.coreProblemStatement),
  problemSeverity: getStringValue(raw.problemSeverity),
  affectedUsers: getStringArray(raw.affectedUsers),
  currentAlternatives: getStringArray(raw.currentAlternatives),
  marketGap: getStringValue(raw.marketGap),
  customerFrustrations: getStringValue(raw.customerFrustrations),
  operationalImpact: getStringValue(raw.operationalImpact),
  problemAreas: getStringArray(raw.problemAreas),
  problemFrequency: getStringValue(raw.problemFrequency),
  problemUrgency: getStringValue(raw.problemUrgency),
  founderObservations: getStringValue(raw.founderObservations),
});

const serializeProblemDefinition = (
  form: ProblemDefinitionForm,
): Record<string, string> => ({
  coreProblemStatement: form.coreProblemStatement,
  problemSeverity: form.problemSeverity,
  affectedUsers: form.affectedUsers.join(","),
  currentAlternatives: form.currentAlternatives.join(","),
  marketGap: form.marketGap,
  customerFrustrations: form.customerFrustrations,
  operationalImpact: form.operationalImpact,
  problemAreas: form.problemAreas.join(","),
  problemFrequency: form.problemFrequency,
  problemUrgency: form.problemUrgency,
  founderObservations: form.founderObservations,
});

export default function ProblemDefinitionPage() {
  const router = useRouter();

  const [saved, setSaved] = useState(false);

const [formData, setFormData] =
  useState<ProblemDefinitionForm>(() => ({
    ...EMPTY_PROBLEM_FORM,
  }));


const [startupId, setStartupId] = useState<string | null>(null);
const [isLoading, setIsLoading] = useState(true);
const [isSaving, setIsSaving] = useState(false);
const [errorMessage, setErrorMessage] = useState("");

useEffect(() => {
  let active = true;

  const loadProblemDefinition = async () => {
    try {
      const resolvedStartupId = await resolveFounderStartupId();

      if (!active) {
        return;
      }

      setStartupId(resolvedStartupId);

      try {
        const builder =
          await getBuilderDataByStartupId(resolvedStartupId);

        if (!active) {
          return;
        }

        const problemDefinition =
          normalizeProblemDefinition(
            builder.data?.problemDefinition ?? {},
          );

        setFormData(problemDefinition);

        // Temporary local fallback copy.
        saveBuilderStep(
          "problemDefinition",
          serializeProblemDefinition(problemDefinition),
        );
      } catch (error: unknown) {
        if (!active) {
          return;
        }

        const localProblem =
          getBuilderData().problemDefinition ?? {};

        setFormData(
          normalizeProblemDefinition(localProblem),
        );

        const isNotFound =
          axios.isAxiosError(error) &&
          error.response?.status === 404;

        if (!isNotFound) {
          setErrorMessage(
            "Could not load Problem Definition from the server. Showing your local draft.",
          );
        }
      }
    } catch {
      if (!active) {
        return;
      }

      const localProblem =
        getBuilderData().problemDefinition ?? {};

      setFormData(
        normalizeProblemDefinition(localProblem),
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

  void loadProblemDefinition();

  return () => {
    active = false;
  };
}, []);

  const problemAreas = [
    "Manual Operations",
    "Poor Communication",
    "High Operational Costs",
    "No Automation",
    "Customer Retention",
    "Slow Processes",
    "Data Management Issues",
    "Workflow Inefficiencies",
  ];

  const existingSolutions = [
    "Excel Sheets",
    "WhatsApp",
    "Manual Work",
    "Google Docs",
    "Legacy Software",
    "Freelancers",
    "Internal Teams",
    "Multiple SaaS Tools",
  ];

  const userGroups = [
    "Founders",
    "Startups",
    "SMBs",
    "Enterprises",
    "Students",
    "Creators",
    "Agencies",
    "Remote Teams",
  ];

  const severityLevels = [
    {
      label: "Low",
    },

    {
      label: "Moderate",
    },

    {
      label: "High",
    },

    {
      label: "Critical",
    },
  ];

  const toggleArrayValue = (
    field:
  | "affectedUsers"
  | "currentAlternatives"
  | "problemAreas",
     value: string
  ) => {
    const existingValues = formData[field];

    if (existingValues.includes(value)) {
      setFormData((prev) => ({
        ...prev,
        [field]: existingValues.filter(
          (item) => item !== value
        ),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: [...existingValues, value],
      }));
    }
  };

  const handleChange = (
    field: keyof ProblemDefinitionForm,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const persistProblemDefinition = async (
  navigateNext: boolean,
) => {
  const problemDefinition =
    serializeProblemDefinition(formData);

  if (!startupId) {
    saveBuilderStep(
      "problemDefinition",
      problemDefinition,
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
          problemDefinition,
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
          problemDefinition,
        },
      });
    }

    // Server succeeded. Keep only a fallback copy locally.
    saveBuilderStep(
      "problemDefinition",
      problemDefinition,
    );

    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 2000);

    if (navigateNext) {
      router.push(
        "/founder/startup-builder/market-research",
      );
    }
  } catch {
    // Temporary draft fallback only.
    saveBuilderStep(
      "problemDefinition",
      problemDefinition,
    );

    setErrorMessage(
      "Could not save Problem Definition to the server. Your draft is saved locally. Please try again.",
    );
  } finally {
    setIsSaving(false);
  }
};

if (isLoading) {
  return (
    <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-8 text-sm font-semibold text-slate-600">
      Loading saved Problem Definition...
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
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-rose-700">
              <ShieldAlert className="h-4 w-4" />
              Startup Builder • Module 2
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#16214A] md:text-5xl">
              Define The Real
              <span className="block text-primary">
                Market Problem
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B6B6B]">
              Identify operational inefficiencies,
              customer frustrations and real-world
              business problems worth solving through
              structured startup validation workflows.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Validation Progress
                </p>

                <h3 className="mt-2 text-5xl font-black text-[#16214A]">
                  60%
                </h3>
              </div>

              <div className="rounded-2xl bg-[#F7F4EE]/95 p-4 text-primary shadow-sm">
                <AlertTriangle className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[60%] rounded-full bg-primary" />
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Operational pain identified",
                "Market inefficiencies detected",
                "Customer frustrations validated",
                "Problem opportunity increasing",
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

      {/* MAIN GRID */}
      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        {/* LEFT */}
        <Accordion
          type="single"
          collapsible
          defaultValue="discovery"
          className="space-y-6"
        >
          {/* PROBLEM DISCOVERY */}
          <AccordionItem
            value="discovery"
            className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 px-6 shadow-sm lg:px-8"
          >
            <AccordionTrigger className="py-6 hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <div className="rounded-2xl bg-rose-100 p-4 text-rose-700">
                  <CircleHelp className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                    Problem Discovery
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Identify high-value market pain points
                  </p>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-8">
              {/* CORE PROBLEM */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Core Problem Statement
                </label>

                <textarea
                  rows={5}
                  value={formData.coreProblemStatement}
                  onChange={(e) =>
                    handleChange(
                      "coreProblemStatement",
                      e.target.value
                    )
                  }
                  placeholder="Describe the primary real-world problem your startup is solving..."
                  className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
                />
              </div>

              {/* PROBLEM AREAS */}
<div className="mt-8">
  <label className="mb-3 block text-sm font-semibold text-slate-700">
    Core Problem Areas
  </label>

  <select
    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
    onChange={(e) =>
      toggleArrayValue(
        "problemAreas",
        e.target.value
      )
    }
  >
    <option value="">
      Select Problem Area
    </option>

    {problemAreas.map((item) => (
      <option
        key={item}
        value={item}
      >
        {item}
      </option>
    ))}
  </select>
</div>

{/* SEVERITY */}
<div className="mt-8">
  <label className="mb-3 block text-sm font-semibold text-slate-700">
    Problem Severity
  </label>

  <select
    value={formData.problemSeverity}
    onChange={(e) =>
      handleChange(
        "problemSeverity",
        e.target.value
      )
    }
    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
  >
    <option value="">
      Select Severity
    </option>

    {severityLevels.map((item) => (
      <option
        key={item.label}
        value={item.label}
      >
        {item.label}
      </option>
    ))}
  </select>
</div>

              {/* IMPACT */}
              <div className="mt-8">
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Operational Impact
                </label>

                <textarea
                  rows={4}
                  value={formData.operationalImpact}
                  onChange={(e) =>
                    handleChange(
                      "operationalImpact",
                      e.target.value
                    )
                  }
                  placeholder="How does this problem affect businesses and users?"
                  className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* MARKET GAP */}
          <AccordionItem
            value="market-gap"
            className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 px-6 shadow-sm lg:px-8"
          >
            <AccordionTrigger className="py-6 hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <div className="rounded-2xl bg-amber-100 p-4 text-amber-700">
                  <Target className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                    Market Gap Analysis
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Analyze current alternatives and gaps
                  </p>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-8">

              {/* EXISTING SOLUTIONS */}
<div>
  <label className="mb-3 block text-sm font-semibold text-slate-700">
    Existing Solutions Customers Use
  </label>

  <select
    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
    onChange={(e) =>
      toggleArrayValue(
        "currentAlternatives",
        e.target.value
      )
    }
  >
    <option value="">
      Select Existing Solution
    </option>

    {existingSolutions.map((item) => (
      <option
        key={item}
        value={item}
      >
        {item}
      </option>
    ))}
  </select>
</div>

              {/* MARKET GAP */}
              <div className="mt-8">
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Market Gap Opportunity
                </label>

                <textarea
                  rows={4}
                  value={formData.marketGap}
                  onChange={(e) =>
                    handleChange(
                      "marketGap",
                      e.target.value
                    )
                  }
                  placeholder="What weaknesses exist in current solutions?"
                  className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                />
              </div>

              {/* FRUSTRATIONS */}
              <div className="mt-8">
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Customer Frustrations
                </label>

                <textarea
                  rows={4}
                  value={formData.customerFrustrations}
                  onChange={(e) =>
                    handleChange(
                      "customerFrustrations",
                      e.target.value
                    )
                  }
                  placeholder="What frustrates users most about existing workflows?"
                  className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* USERS */}
          <AccordionItem
            value="users"
            className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 px-6 shadow-sm lg:px-8"
          >
            <AccordionTrigger className="py-6 hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <div className="rounded-2xl bg-cyan-100 p-4 text-cyan-700">
                  <Users className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
                    Affected Users
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Identify who experiences the problem
                  </p>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-8">

              {/* USER SEGMENTS */}
<div>
  <label className="mb-3 block text-sm font-semibold text-slate-700">
    Target User Segments
  </label>

  <select
    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
    onChange={(e) =>
      toggleArrayValue(
        "affectedUsers",
        e.target.value
      )
    }
  >
    <option value="">
      Select User Segment
    </option>

    {userGroups.map((item) => (
      <option
        key={item}
        value={item}
      >
        {item}
      </option>
    ))}
  </select>
</div>

              {/* FREQUENCY */}
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm font-semibold text-slate-700">
                    Problem Frequency
                  </label>

                  <input
                    type="text"
                    value={formData.problemFrequency}
                    onChange={(e) =>
                      handleChange(
                        "problemFrequency",
                        e.target.value
                      )
                    }
                    placeholder="Daily / Weekly / Monthly"
                    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold text-slate-700">
                    Problem Urgency
                  </label>

                  <input
                    type="text"
                    value={formData.problemUrgency}
                    onChange={(e) =>
                      handleChange(
                        "problemUrgency",
                        e.target.value
                      )
                    }
                    placeholder="Low / Medium / High"
                    className="h-14 w-full rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>
              </div>

              {/* OBSERVATIONS */}
              <div className="mt-8">
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Founder Observations
                </label>

                <textarea
                  rows={5}
                  value={formData.founderObservations}
                  onChange={(e) =>
                    handleChange(
                      "founderObservations",
                      e.target.value
                    )
                  }
                  placeholder="Describe insights gathered from customers, research or observations..."
                  className="w-full rounded-3xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-4 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

       {/* RIGHT SIDEBAR */}
<div className="space-y-6">
  {/* MODULE GUIDE */}
  <section className="rounded-[32px] border border-primary/10 bg-primary/5 p-6">
    <h3 className="text-xl font-black tracking-tight text-[#16214A]">
      Module Guide
    </h3>
    <p className="mt-3 text-sm leading-7 text-slate-500">
      Fill in each section to validate your problem. Clear problem definition
      improves advisor matching and investor readiness scoring.
    </p>
    <div className="mt-6 space-y-3">
      {[
        { step: "1", label: "Problem Discovery", done: !!( formData.coreProblemStatement && formData.problemSeverity && formData.problemAreas.length > 0 && formData.operationalImpact) },
        { step: "2", label: "Market Gap Analysis", done: !!(formData.marketGap && formData.customerFrustrations) },
        { step: "3", label: "Affected Users", done: !!( formData.affectedUsers.length > 0 && formData.problemFrequency && formData.problemUrgency && formData.founderObservations) 
},
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
      The more specific your problem statement, the stronger your
      startup validation score. Avoid broad problems — focus on
      one painful, frequent, and urgent issue.
    </p>
  </section>

  {/* SELECTED SUMMARY */}
  <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm">
    <h3 className="text-xl font-black tracking-tight text-[#16214A]">
      Your Selections
    </h3>
    <div className="mt-4 space-y-3">
      <div className="rounded-2xl bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Severity</p>
        <h4 className="mt-1 text-base font-black text-[#16214A]">
          {formData.problemSeverity || "Not Selected"}
        </h4>
      </div>
      <div className="rounded-2xl bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Affected Users</p>
        <h4 className="mt-1 text-base font-black text-[#16214A]">
          {formData.affectedUsers.length > 0 ? formData.affectedUsers.join(", ") : "None selected"}
        </h4>
      </div>
      <div className="rounded-2xl bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Frequency</p>
        <h4 className="mt-1 text-base font-black text-[#16214A]">
          {formData.problemFrequency || "Not entered"}
        </h4>
      </div>
<div className="rounded-2xl bg-slate-50 p-4">
  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
    Problem Areas
  </p>

  <h4 className="mt-1 text-base font-black text-[#16214A]">
    {formData.problemAreas.length > 0
      ? formData.problemAreas.join(", ")
      : "None selected"}
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
        
        {/* SAVE */}
          
        <button
  type="button"
  onClick={() => {
    void persistProblemDefinition(false);
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

          {/* NEXT */}
<button
  type="button"
  onClick={() => {
    void persistProblemDefinition(true);
  }}
  disabled={isSaving}
  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
>
  {isSaving
    ? "Saving..."
    : "Continue to Market Research"}
</button>
      </div>
    </div>
  );
}