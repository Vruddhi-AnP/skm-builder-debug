"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  BadgeIndianRupee,
  BriefcaseBusiness,
  CreditCard,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

import {
  getAdvisorOnboarding,
  saveAdvisorOnboarding,
} from "@/lib/advisor-onboarding";

const pricingPlans = [
  {
    title: "Free Mentorship",
    description:
      "Provide free guidance and support to early-stage founders.",
  },

  {
    title: "Paid Sessions",
    description:
      "Charge founders for structured consultation sessions.",
  },

  {
    title: "Monthly Advisory",
    description:
      "Offer long-term startup advisory retainers.",
  },

  {
    title: "Equity Based",
    description:
      "Support startups in exchange for equity opportunities.",
  },
];

export default function AdvisorPricingPage() {
  const router = useRouter();

  const [formData, setFormData] =
    useState(() => ({
      pricingModel: "",
      sessionPricing: "",
      monthlyRetainer: "",
      equityInterest: "",
      consultationType: "",
      pricingNotes: "",

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

  const handlePlanSelect = (
    plan: string
  ) => {
    setFormData({
      ...formData,
      pricingModel: plan,
    });
  };

  const handleComplete = () => {
    saveAdvisorOnboarding(
      formData
    );

    router.push(
      "/onboarding/advisor/success"
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
              className="h-auto w-42.5 object-contain sm:w-47.5"
            />

            <div>
              <p className="text-sm text-slate-500">
                Startup Ecosystem
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-3 rounded-full border border-primary/10 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary sm:flex">
            Step 4 of 5
          </div>
        </div>

        {/* HERO */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

          {/* LEFT */}
          <div className="max-w-3xl">

            <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Advisor Pricing
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Setup Your Advisory Pricing
            </h1>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Configure your mentorship pricing structure, consultation preferences and startup engagement model.
            </p>

            {/* TAGS */}
            <div className="mt-8 flex flex-wrap gap-3">

              <div className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
                Advisory Monetization
              </div>

              <div className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
                Founder Engagement
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
                  Step 4/5
                </span>

              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-muted">

                <div className="h-full w-4/5 rounded-full bg-primary" />

              </div>

              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                Pricing setup in progress
              </p>

            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="mt-14">

          <div>

            <h2 className="text-3xl font-black text-foreground">
              Pricing & Advisory Setup
            </h2>

            <p className="mt-3 text-base text-muted-foreground">
              Define how founders can engage and collaborate with you
            </p>

          </div>

          {/* PRICING CARDS */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {pricingPlans.map((item) => (

              <button
                key={item.title}
                type="button"
                onClick={() =>
                  handlePlanSelect(
                    item.title
                  )
                }
                className={`rounded-[2rem] border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:shadow-lg ${
                  formData.pricingModel ===
                  item.title
                    ? "border-primary ring-4 ring-primary/10"
                    : "border-border hover:border-primary/30"
                }`}
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">

                  <WalletCards className="h-5 w-5" />

                </div>

                <h3 className="mt-5 text-xl font-black text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>

              </button>

            ))}
          </div>

          {/* INPUTS */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {/* SESSION PRICING */}
            <div>

              <label className="mb-3 block text-sm font-semibold text-foreground">
                Session Pricing
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-border bg-background px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">

                <BadgeIndianRupee className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  name="sessionPricing"
                  value={
                    formData.sessionPricing ||
                    ""
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Ex: ₹2,000 per session"
                  className="h-full w-full bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />

              </div>
            </div>

            {/* MONTHLY */}
            <div>

              <label className="mb-3 block text-sm font-semibold text-foreground">
                Monthly Advisory Retainer
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-border bg-background px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">

                <CreditCard className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  name="monthlyRetainer"
                  value={
                    formData.monthlyRetainer ||
                    ""
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Ex: ₹25,000 monthly"
                  className="h-full w-full bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />

              </div>
            </div>

            {/* EQUITY */}
            <div>

              <label className="mb-3 block text-sm font-semibold text-foreground">
                Equity Interest
              </label>

              <select
                name="equityInterest"
                value={
                  formData.equityInterest ||
                  ""
                }
                onChange={
                  handleChange
                }
                className="h-14 w-full rounded-2xl border border-border bg-background px-5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
              >
                <option value="">
                  Select preference
                </option>

                <option value="equity-advisory">
                  Open to Equity Advisory
                </option>

                <option value="paid-only">
                  Only Paid Advisory
                </option>

                <option value="flexible">
                  Flexible Engagement
                </option>

              </select>
            </div>

            {/* CONSULTATION */}
            <div>

              <label className="mb-3 block text-sm font-semibold text-foreground">
                Consultation Type
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-border bg-background px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">

                <BriefcaseBusiness className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  name="consultationType"
                  value={
                    formData.consultationType ||
                    ""
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Ex: Strategy, GTM, Product Scaling"
                  className="h-full w-full bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />

              </div>
            </div>

            {/* NOTES */}
            <div className="md:col-span-2">

              <label className="mb-3 block text-sm font-semibold text-foreground">
                Advisory Notes & Expectations
              </label>

              <textarea
                name="pricingNotes"
                value={
                  formData.pricingNotes ||
                  ""
                }
                onChange={
                  handleChange
                }
                placeholder="Describe your pricing expectations, collaboration style, founder engagement model and any additional mentorship guidelines..."
                className="min-h-35 w-full rounded-[1.8rem] border border-border bg-background px-5 py-4 text-sm leading-7 text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
              />

            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">

            <button
              onClick={() =>
                router.push(
                  "/onboarding/advisor/availability"
                )
              }
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-8 text-sm font-semibold text-foreground transition-all hover:bg-muted"
            >
              <ArrowLeft className="h-4 w-4" />

              Previous
            </button>

            <button
              onClick={
                handleComplete
              }
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:bg-primary/90"
            >
              <Link
                  href="/payment?role=advisor&plan=pro"
                >
                  Proceed to Payment
                </Link>

            </button>

          </div>
        </div>
      </div>
    </div>
  );
}