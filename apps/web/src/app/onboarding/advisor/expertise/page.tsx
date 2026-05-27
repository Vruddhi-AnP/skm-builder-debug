"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

import {
  getAdvisorOnboarding,
  saveAdvisorOnboarding,
} from "@/lib/advisor-onboarding";

export default function AdvisorExpertisePage() {
  const router = useRouter();

  const [formData, setFormData] =
    useState(() => ({
      expertiseAreas: "",
      industries: "",
      startupStages: "",
      mentorshipType: "",
      skills: "",
      advisoryGoal: "",

      ...getAdvisorOnboarding(),
    }));

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleContinue = () => {
    saveAdvisorOnboarding(
      formData
    );

    router.push(
      "/onboarding/advisor/availability"
    );
  };

  return (
    <div className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-border bg-card p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:p-10 lg:p-14">

        {/* TOP BAR */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <Image
              src="/logo.png"
              alt="Startup Ka Mall"
              width={190}
              height={60}
              priority
              className="h-auto w-[170px] object-contain sm:w-[190px]"
            />

            <div>
              <p className="text-sm text-slate-500">
                Startup Ecosystem
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-3 rounded-full border border-primary/10 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary sm:flex">
            Step 2 of 5
          </div>
        </div>

        {/* HERO */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

          {/* LEFT */}
          <div className="max-w-3xl">

            <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Advisor Expertise
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Define Your Expertise
            </h1>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Showcase your advisory strengths, startup experience and mentorship focus areas to help founders discover the right guidance.
            </p>

            {/* TAGS */}
            <div className="mt-8 flex flex-wrap gap-3">

              <div className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
                Startup Advisory
              </div>

              <div className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
                Founder Mentorship
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div>

            {/* SECURITY */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-6 py-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />

              <p className="text-xs font-medium text-emerald-800">
                Secure advisor onboarding & protected ecosystem workflows
              </p>
            </div>

            {/* STEP */}
            <div className="w-full max-w-sm rounded-[2rem] border border-primary/20 bg-primary/5 p-6">

              <div className="flex items-center justify-between">

                <span className="text-sm font-semibold text-muted-foreground">
                  Progress
                </span>

                <span className="text-sm font-bold text-primary">
                  Step 2/5
                </span>

              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-muted">

                <div className="h-full w-2/5 rounded-full bg-primary" />

              </div>

              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                Expertise setup in progress
              </p>

            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="mt-14">

          <div>

            <h2 className="text-3xl font-black text-foreground">
              Expertise Details
            </h2>

            <p className="mt-3 text-base text-muted-foreground">
              Share your specialization, industries and mentorship capabilities
            </p>

          </div>

          {/* INPUTS */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {/* EXPERTISE */}
            <div>

              <label className="mb-3 block text-sm font-semibold text-foreground">
                Expertise Areas
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-border bg-background px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">

                <Sparkles className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  name="expertiseAreas"
                  value={
                    formData.expertiseAreas ||
                    ""
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Ex: Product Strategy, Growth, Fundraising"
                  className="h-full w-full bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />

              </div>
            </div>

            {/* INDUSTRIES */}
            <div>

              <label className="mb-3 block text-sm font-semibold text-foreground">
                Industries
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-border bg-background px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">

                <BriefcaseBusiness className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  name="industries"
                  value={
                    formData.industries ||
                    ""
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Ex: SaaS, Fintech, AI, Healthcare"
                  className="h-full w-full bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />

              </div>
            </div>

            {/* STAGES */}
            <div>

              <label className="mb-3 block text-sm font-semibold text-foreground">
                Startup Stages Supported
              </label>

              <select
                name="startupStages"
                value={
                  formData.startupStages ||
                  ""
                }
                onChange={
                  handleChange
                }
                className="h-14 w-full rounded-2xl border border-border bg-background px-5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
              >
                <option value="">
                  Select startup stage
                </option>

                <option value="idea-stage">
                  Idea Stage
                </option>

                <option value="mvp-stage">
                  MVP Stage
                </option>

                <option value="early-revenue">
                  Early Revenue
                </option>

                <option value="scaling-stage">
                  Scaling Stage
                </option>

              </select>
            </div>

            {/* MENTORSHIP */}
            <div>

              <label className="mb-3 block text-sm font-semibold text-foreground">
                Mentorship Type
              </label>

              <select
                name="mentorshipType"
                value={
                  formData.mentorshipType ||
                  ""
                }
                onChange={
                  handleChange
                }
                className="h-14 w-full rounded-2xl border border-border bg-background px-5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
              >
                <option value="">
                  Select mentorship type
                </option>

                <option value="1-1-advisory">
                  1:1 Advisory
                </option>

                <option value="group-mentorship">
                  Group Mentorship
                </option>

                <option value="execution-guidance">
                  Execution Guidance
                </option>

                <option value="strategic-consulting">
                  Strategic Consulting
                </option>

              </select>
            </div>

            {/* SKILLS */}
            <div className="md:col-span-2">

              <label className="mb-3 block text-sm font-semibold text-foreground">
                Key Skills & Strengths
              </label>

              <div className="flex min-h-[120px] rounded-[1.8rem] border border-border bg-background px-5 py-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">

                <BadgeCheck className="mt-1 h-5 w-5 text-muted-foreground" />

                <textarea
                  name="skills"
                  value={
                    formData.skills || ""
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Mention your advisory strengths, startup execution skills, founder support areas and operational expertise..."
                  className="min-h-[90px] w-full resize-none bg-transparent px-3 text-sm leading-7 text-foreground outline-none placeholder:text-muted-foreground"
                />

              </div>
            </div>

            {/* GOAL */}
            <div className="md:col-span-2">

              <label className="mb-3 block text-sm font-semibold text-foreground">
                Advisory Goal
              </label>

              <div className="flex min-h-[120px] rounded-[1.8rem] border border-border bg-background px-5 py-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">

                <Target className="mt-1 h-5 w-5 text-muted-foreground" />

                <textarea
                  name="advisoryGoal"
                  value={
                    formData.advisoryGoal ||
                    ""
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Describe how you want to support founders and what kind of startup impact you want to create..."
                  className="min-h-[90px] w-full resize-none bg-transparent px-3 text-sm leading-7 text-foreground outline-none placeholder:text-muted-foreground"
                />

              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">

            <button
              onClick={() =>
                router.push(
                  "/onboarding/advisor/profile"
                )
              }
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-8 text-sm font-semibold text-foreground transition-all hover:bg-muted"
            >
              <ArrowLeft className="h-4 w-4" />

              Previous
            </button>

            <button
              onClick={
                handleContinue
              }
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:bg-primary/90"
            >
              Continue to Availability

            </button>

          </div>
        </div>
      </div>
    </div>
  );
}