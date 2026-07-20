"use client";

import Link from "next/link";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";

import {
  getInvestorOnboarding,
  clearInvestorOnboarding,
} from "@/lib/investor-onboarding";

import { investorService } from "@/services/investor.service";

import {
  ArrowLeft,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

export default function InvestorSuccessPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const hasCreated = useRef(false);

  useEffect(() => {
     if (hasCreated.current) return;

    hasCreated.current = true;

    const createInvestorProfile = async () => {
      try {
        const data = getInvestorOnboarding();

        if (
          !data.fullName ||
          !data.firmName ||
          !data.location ||
          !data.linkedinUrl ||
          !data.experienceLevel ||
          !data.investorType ||
          !data.investmentFocus?.length ||
          !data.preferredStartupStages?.length ||
          !data.investmentTicketSizes?.length ||
          !data.geographyPreferences?.length ||
          data.interestedInFounderMentorship === undefined
        ) {
          console.error("Investor onboarding data is incomplete.");
          return;
        }

        console.log("===== INVESTOR DATA =====");
        console.log(JSON.stringify(data, null, 2));

        await investorService.createProfile(data);

        clearInvestorOnboarding();
      } catch (error) {
        console.error("Investor profile creation failed:", error);
      } finally {
        setLoading(false);
      }
    };

    createInvestorProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f4f1ea]">
        <p className="text-lg font-semibold text-[#13235b]">
          Completing your onboarding...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f1ea] px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* MAIN SHELL */}
        <div className="overflow-hidden rounded-[40px] border border-[#ddd7cb] bg-[#f8f6f1] shadow-sm">

          {/* HEADER */}
          <div className="flex flex-col gap-6 border-b border-[#e1dbcf] px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">

            {/* LOGO */}
            <Link
              href="/"
              className="transition hover:opacity-90"
            >

              <Image
                src="/logo.png"
                alt="Startup Ka Mall"
                width={220}
                height={70}
                priority
                className="h-auto w-45 object-contain sm:w-55"
              />

            </Link>

            {/* STEP */}
            <div className="inline-flex h-12 items-center rounded-full border border-[#d9d3c8] bg-[#f1eee7] px-6">

              <span className="text-sm font-semibold text-[#13235b]">
                Setup Completed
              </span>

            </div>

          </div>

          {/* CONTENT */}
          <div className="px-6 py-10 lg:px-10 lg:py-12">

            {/* TOP */}
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

              {/* LEFT */}
              <div className="max-w-3xl">

                {/* SUCCESS ICON */}
                <div className="flex h-24 w-24 items-center justify-center rounded-[32px] bg-[#13235b] shadow-lg shadow-[#13235b]/20">

                  <CheckCircle2 className="h-12 w-12 text-white" />

                </div>

                {/* BADGE */}
                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#c8cedd] bg-[#eceef5] px-5 py-3">

                  <Sparkles className="h-4 w-4 text-[#13235b]" />

                  <span className="text-sm font-semibold text-[#13235b]">
                    Investor Profile Completed
                  </span>

                </div>

                {/* TITLE */}
                <h1 className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-[#13235b] lg:text-6xl">
                  Welcome To
                  <br />
                  Startup Ka Mall
                </h1>

                {/* DESC */}
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#676c79]">
                  Your investor onboarding is now
                  complete. Start discovering curated
                  startup investment opportunities,
                  connect with founders and access
                  ecosystem-driven growth programs.
                </p>

              </div>

              {/* RIGHT PANEL */}
              <div className="w-full max-w-85 space-y-5">

                {/* SECURITY */}
                <div className="rounded-[28px] border border-[#cbe7d7] bg-[#ddf3e5] p-5">

                  <div className="flex items-start gap-3">

                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70">

                      <ShieldCheck className="h-5 w-5 text-[#12905a]" />

                    </div>

                    <div>

                      <p className="text-xs font-bold uppercase tracking-wide text-[#12905a]">
                        Verified Access
                      </p>

                      <p className="mt-2 text-sm leading-relaxed text-[#146b4b]">
                        Your investor profile is now
                        connected with the Startup Ka
                        Mall ecosystem and founder
                        network.
                      </p>

                    </div>

                  </div>

                </div>

                {/* SUCCESS CARD */}
                <div className="rounded-[32px] border border-[#d8d2c7] bg-[#ece8e2] p-6">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[11px] uppercase tracking-wider text-[#6b6558]">
                        Investor Access
                      </p>

                      <h3 className="mt-2 text-4xl font-black text-[#13235b]">
                        100%
                      </h3>

                    </div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#13235b] text-white">
                      <Rocket className="h-8 w-8" />
                    </div>

                  </div>

                  <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#ddd6cb]">

                    <div className="h-full w-full rounded-full bg-[#13235b]" />

                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-[#6b6558]">
                    Investor onboarding completed
                    successfully with ecosystem-ready
                    access enabled.
                  </p>

                </div>

              </div>

            </div>

            {/* STATS */}
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">

              {/* STARTUPS */}
              <div className="rounded-[32px] border border-[#ddd7cb] bg-[#f6f3ed] p-6">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eceef5]">

                  <Rocket className="h-7 w-7 text-[#13235b]" />

                </div>

                <h3 className="mt-6 text-4xl font-black text-[#13235b]">
                  500+
                </h3>

                <p className="mt-2 text-sm text-[#6b7280]">
                  Verified Startups
                </p>

              </div>

              {/* INVESTORS */}
              <div className="rounded-[32px] border border-[#ddd7cb] bg-[#f6f3ed] p-6">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eceef5]">

                  <Users className="h-7 w-7 text-[#13235b]" />

                </div>

                <h3 className="mt-6 text-4xl font-black text-[#13235b]">
                  120+
                </h3>

                <p className="mt-2 text-sm text-[#6b7280]">
                  Active Investors
                </p>

              </div>

              {/* FUNDING */}
              <div className="rounded-[32px] border border-[#ddd7cb] bg-[#f6f3ed] p-6">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eceef5]">

                  <TrendingUp className="h-7 w-7 text-[#13235b]" />

                </div>

                <h3 className="mt-6 text-4xl font-black text-[#13235b]">
                  ₹50Cr+
                </h3>

                <p className="mt-2 text-sm text-[#6b7280]">
                  Ecosystem Funding
                </p>

              </div>

            </div>

            {/* INFO CARD */}
            <div className="mt-10 rounded-[32px] border border-[#c8cedd] bg-[#eceef5] p-6 lg:p-7">

              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                <div className="max-w-3xl">

                  <h3 className="text-xl font-black text-[#13235b]">
                    Investor Ecosystem Access
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#5f6473]">
                    Your investor profile and
                    investment preferences will now
                    personalize startup discovery,
                    founder matching, ecosystem
                    recommendations and investment
                    opportunities across the platform.
                  </p>

                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f8f6f1] text-xl font-black text-[#13235b] shadow-sm">
                  ✓
                </div>

              </div>

            </div>

            {/* ACTIONS */}
            <div className="mt-10 flex flex-col gap-4 border-t border-[#ddd7cb] pt-8 sm:flex-row sm:items-center sm:justify-between">

              {/* BACK */}
              <Link
                href="/onboarding/investor/investor-preferences"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#d7d2c7] bg-[#f1efe9] px-6 text-sm font-semibold text-[#13235b] transition hover:bg-[#ebe7de]"
              >

                <ArrowLeft className="h-4 w-4" />

                Back

              </Link>

              {/* DASHBOARD */}
              <button
                onClick={() => router.push("/investor/dashboard")}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#13235b] px-6 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Go To Dashboard
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}