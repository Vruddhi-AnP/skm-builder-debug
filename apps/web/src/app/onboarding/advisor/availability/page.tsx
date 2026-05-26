"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Globe2,
  Languages,
  ShieldCheck,
  Video,
} from "lucide-react";

import {
  getAdvisorOnboarding,
  saveAdvisorOnboarding,
} from "@/lib/advisor-onboarding";

export default function AdvisorAvailabilityPage() {
  const router = useRouter();

  const [formData, setFormData] =
    useState(() => ({
      weeklyAvailability: "",
      preferredTime: "",
      sessionMode: "",
      timezone: "",
      languages: "",
      founderPreferences: "",

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
      "/onboarding/advisor/pricing"
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
            Step 3 of 5
          </div>
        </div>

        {/* HERO */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

          {/* LEFT */}
          <div className="max-w-3xl">

            <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Advisor Availability
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Setup Your Availability
            </h1>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Configure your mentorship schedule, preferred session formats and communication preferences for founders.
            </p>

            {/* TAGS */}
            <div className="mt-8 flex flex-wrap gap-3">

              <div className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
                Session Scheduling
              </div>

              <div className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
                Founder Accessibility
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
                  Step 3/5
                </span>

              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-muted">

                <div className="h-full w-3/5 rounded-full bg-primary" />

              </div>

              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                Availability setup in progress
              </p>

            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="mt-14">

          <div>

            <h2 className="text-3xl font-black text-foreground">
              Availability Details
            </h2>

            <p className="mt-3 text-base text-muted-foreground">
              Share your schedule preferences and session setup
            </p>

          </div>

          {/* INPUTS */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {/* WEEKLY AVAILABILITY */}
            <div>

              <label className="mb-3 block text-sm font-semibold text-foreground">
                Weekly Availability
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-border bg-background px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">

                <CalendarDays className="h-5 w-5 text-muted-foreground" />

                <select
                  name="weeklyAvailability"
                  value={
                    formData.weeklyAvailability ||
                    ""
                  }
                  onChange={
                    handleChange
                  }
                  className="h-full w-full bg-transparent px-3 text-sm text-foreground outline-none"
                >
                  <option value="">
                    Select availability
                  </option>

                  <option value="1-5-hours">
                    1 - 5 Hours / Week
                  </option>

                  <option value="5-10-hours">
                    5 - 10 Hours / Week
                  </option>

                  <option value="10-20-hours">
                    10 - 20 Hours / Week
                  </option>

                  <option value="20-plus-hours">
                    20+ Hours / Week
                  </option>

                </select>
              </div>
            </div>

            {/* PREFERRED TIME */}
            <div>

              <label className="mb-3 block text-sm font-semibold text-foreground">
                Preferred Time Slots
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-border bg-background px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">

                <Clock3 className="h-5 w-5 text-muted-foreground" />

                <select
                  name="preferredTime"
                  value={
                    formData.preferredTime ||
                    ""
                  }
                  onChange={
                    handleChange
                  }
                  className="h-full w-full bg-transparent px-3 text-sm text-foreground outline-none"
                >
                  <option value="">
                    Select preferred timing
                  </option>

                  <option value="morning">
                    Morning Sessions
                  </option>

                  <option value="afternoon">
                    Afternoon Sessions
                  </option>

                  <option value="evening">
                    Evening Sessions
                  </option>

                  <option value="flexible">
                    Flexible Timing
                  </option>

                </select>
              </div>
            </div>

            {/* SESSION MODE */}
            <div>

              <label className="mb-3 block text-sm font-semibold text-foreground">
                Session Mode
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-border bg-background px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">

                <Video className="h-5 w-5 text-muted-foreground" />

                <select
                  name="sessionMode"
                  value={
                    formData.sessionMode ||
                    ""
                  }
                  onChange={
                    handleChange
                  }
                  className="h-full w-full bg-transparent px-3 text-sm text-foreground outline-none"
                >
                  <option value="">
                    Select session mode
                  </option>

                  <option value="virtual-only">
                    Virtual Only
                  </option>

                  <option value="in-person-only">
                    In-Person Only
                  </option>

                  <option value="hybrid">
                    Hybrid Sessions
                  </option>

                </select>
              </div>
            </div>

            {/* TIMEZONE */}
            <div>

              <label className="mb-3 block text-sm font-semibold text-foreground">
                Preferred Timezone
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-border bg-background px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">

                <Globe2 className="h-5 w-5 text-muted-foreground" />

                <select
                  name="timezone"
                  value={
                    formData.timezone ||
                    ""
                  }
                  onChange={
                    handleChange
                  }
                  className="h-full w-full bg-transparent px-3 text-sm text-foreground outline-none"
                >
                  <option value="">
                    Select timezone
                  </option>

                  <option value="ist">
                    IST (India)
                  </option>

                  <option value="pst">
                    PST (US Pacific)
                  </option>

                  <option value="est">
                    EST (US Eastern)
                  </option>

                  <option value="gmt">
                    GMT (Europe)
                  </option>

                </select>
              </div>
            </div>

            {/* LANGUAGES */}
            <div className="md:col-span-2">

              <label className="mb-3 block text-sm font-semibold text-foreground">
                Languages Spoken
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-border bg-background px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">

                <Languages className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  name="languages"
                  value={
                    formData.languages ||
                    ""
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Ex: English, Hindi, Marathi"
                  className="h-full w-full bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />

              </div>
            </div>

            {/* PREFERENCES */}
            <div className="md:col-span-2">

              <label className="mb-3 block text-sm font-semibold text-foreground">
                Founder Engagement Preferences
              </label>

              <textarea
                name="founderPreferences"
                value={
                  formData.founderPreferences ||
                  ""
                }
                onChange={
                  handleChange
                }
                placeholder="Describe how you prefer to mentor founders, session expectations, communication style and collaboration approach..."
                className="min-h-[140px] w-full rounded-[1.8rem] border border-border bg-background px-5 py-4 text-sm leading-7 text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
              />

            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">

            <button
              onClick={() =>
                router.push(
                  "/onboarding/advisor/expertise"
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
              Continue to Pricing

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}