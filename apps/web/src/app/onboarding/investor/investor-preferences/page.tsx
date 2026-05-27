"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Coins,
  Handshake,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const investmentStages = [
  "Idea Stage",
  "MVP Ready",
  "Early Revenue",
  "Seed Stage",
  "Pre-Series A",
];

const ticketSizes = [
  "₹5L - ₹10L",
  "₹10L - ₹25L",
  "₹25L - ₹50L",
  "₹50L+",
];

const geographies = [
  "India",
  "Global",
  "Middle East",
  "South East Asia",
];

export default function InvestorPreferencesPage() {
  const router = useRouter();

  const [selectedStages, setSelectedStages] =
    useState<string[]>([
      "Seed Stage",
    ]);

  const [selectedTickets, setSelectedTickets] =
    useState<string[]>([
      "₹10L - ₹25L",
    ]);

  const [
    selectedGeographies,
    setSelectedGeographies,
  ] = useState<string[]>([
    "India",
  ]);

  const [
    mentorshipInterest,
    setMentorshipInterest,
  ] = useState("Yes");

  const toggleSelection = (
    value: string,
    state: string[],
    setter: React.Dispatch<
      React.SetStateAction<string[]>
    >
  ) => {
    if (state.includes(value)) {
      setter((prev) =>
        prev.filter(
          (item) => item !== value
        )
      );
    } else {
      setter((prev) => [
        ...prev,
        value,
      ]);
    }
  };

  const handleContinue = () => {
    router.push(
      "/onboarding/investor/investor-success"
    );
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* MAIN SHELL */}
        <div className="overflow-hidden rounded-[40px] border border-[#ddd7cb] bg-[#f8f6f1] shadow-sm">

          {/* HEADER */}
          <div className="flex flex-col gap-6 border-b border-[#e1dbcf] px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">

            {/* LOGO */}
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#13235b] text-xl font-black text-white shadow-sm">
                I
              </div>

              <div>

                <h2 className="text-[24px] font-black leading-none text-[#13235b]">
                  Startup Ka Mall
                </h2>

                <p className="mt-2 text-sm text-[#6b7280]">
                  Investor Workspace
                </p>

              </div>

            </div>

            {/* STEP */}
            <div className="inline-flex h-12 items-center rounded-full border border-[#d9d3c8] bg-[#f1eee7] px-6">

              <span className="text-sm font-semibold text-[#13235b]">
                Step 3 of 4
              </span>

            </div>

          </div>

          {/* CONTENT */}
          <div className="px-6 py-8 lg:px-10 lg:py-10">

            {/* TOP */}
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

              {/* LEFT */}
              <div className="max-w-3xl">

                {/* BADGE */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#c8cedd] bg-[#eceef5] px-5 py-3">

                  <Sparkles className="h-4 w-4 text-[#13235b]" />

                  <span className="text-sm font-semibold text-[#13235b]">
                    Investment Preferences
                  </span>

                </div>

                {/* TITLE */}
                <h1 className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-[#13235b] lg:text-6xl">
                  Configure Your
                  <br />
                  Investment Strategy
                </h1>

                {/* DESC */}
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#676c79]">
                  Setup startup stage, ticket size
                  and geography preferences to
                  personalize your investor
                  ecosystem and startup discovery.
                </p>

              </div>

              {/* RIGHT */}
              <div className="w-full max-w-[320px] space-y-5">

                {/* SECURITY */}
                <div className="rounded-[28px] border border-[#cbe7d7] bg-[#ddf3e5] p-5">

                  <div className="flex items-start gap-3">

                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70">

                      <ShieldCheck className="h-5 w-5 text-[#12905a]" />

                    </div>

                    <div>

                      <p className="text-xs font-bold uppercase tracking-wide text-[#12905a]">
                        Smart Matching
                      </p>

                      <p className="mt-2 text-sm leading-relaxed text-[#146b4b]">
                        Your investment preferences
                        help us deliver more relevant
                        startup recommendations and
                        ecosystem opportunities.
                      </p>

                    </div>

                  </div>

                </div>

                {/* PROGRESS */}
                <div className="rounded-[32px] border border-[#d8d2c7] bg-[#ece8e2] p-6">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[11px] uppercase tracking-wider text-[#6b6558]">
                        Progress
                      </p>

                      <h3 className="mt-2 text-3xl font-black text-[#13235b]">
                        75%
                      </h3>

                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#13235b] text-sm font-black text-white">
                      3/4
                    </div>

                  </div>

                  <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#ddd6cb]">

                    <div className="h-full w-[75%] rounded-full bg-[#13235b]" />

                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-[#6b6558]">
                    Configure your investor profile
                    preferences for better startup
                    alignment.
                  </p>

                </div>

              </div>

            </div>

            {/* CONTENT BLOCKS */}
            <div className="mt-12 space-y-6">

              {/* STAGES */}
              <div className="rounded-[32px] border border-[#e0dbd1] bg-[#f6f3ed] p-6 lg:p-7">

                <div className="flex items-start gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#eceef5]">

                    <Target className="h-7 w-7 text-[#13235b]" />

                  </div>

                  <div>

                    <h2 className="text-2xl font-black text-[#13235b]">
                      Preferred Startup Stage
                    </h2>

                    <p className="mt-2 text-sm text-[#6b7280]">
                      Select startup maturity stages
                      aligned with your investment
                      strategy.
                    </p>

                  </div>

                </div>

                <div className="mt-7 flex flex-wrap gap-3">

                  {investmentStages.map(
                    (stage) => {
                      const active =
                        selectedStages.includes(
                          stage
                        );

                      return (
                        <button
                          key={stage}
                          onClick={() =>
                            toggleSelection(
                              stage,
                              selectedStages,
                              setSelectedStages
                            )
                          }
                          className={`flex h-12 items-center gap-2 rounded-2xl px-5 text-sm font-semibold transition

                          ${
                            active
                              ? "bg-[#13235b] text-white"
                              : "border border-[#ddd7cb] bg-[#f8f6f1] text-[#13235b] hover:bg-[#ece8de]"
                          }
                          `}
                        >

                          {active && (
                            <Check className="h-4 w-4" />
                          )}

                          {stage}

                        </button>
                      );
                    }
                  )}

                </div>

              </div>

              {/* TICKET */}
              <div className="rounded-[32px] border border-[#e0dbd1] bg-[#f6f3ed] p-6 lg:p-7">

                <div className="flex items-start gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#eceef5]">

                    <Coins className="h-7 w-7 text-[#13235b]" />

                  </div>

                  <div>

                    <h2 className="text-2xl font-black text-[#13235b]">
                      Investment Ticket Size
                    </h2>

                    <p className="mt-2 text-sm text-[#6b7280]">
                      Choose your preferred
                      investment range and capital
                      allocation.
                    </p>

                  </div>

                </div>

                <div className="mt-7 flex flex-wrap gap-3">

                  {ticketSizes.map(
                    (ticket) => {
                      const active =
                        selectedTickets.includes(
                          ticket
                        );

                      return (
                        <button
                          key={ticket}
                          onClick={() =>
                            toggleSelection(
                              ticket,
                              selectedTickets,
                              setSelectedTickets
                            )
                          }
                          className={`flex h-12 items-center gap-2 rounded-2xl px-5 text-sm font-semibold transition

                          ${
                            active
                              ? "bg-[#13235b] text-white"
                              : "border border-[#ddd7cb] bg-[#f8f6f1] text-[#13235b] hover:bg-[#ece8de]"
                          }
                          `}
                        >

                          {active && (
                            <Check className="h-4 w-4" />
                          )}

                          {ticket}

                        </button>
                      );
                    }
                  )}

                </div>

              </div>

              {/* GEOGRAPHY */}
              <div className="rounded-[32px] border border-[#e0dbd1] bg-[#f6f3ed] p-6 lg:p-7">

                <div className="flex items-start gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#eceef5]">

                    <MapPinned className="h-7 w-7 text-[#13235b]" />

                  </div>

                  <div>

                    <h2 className="text-2xl font-black text-[#13235b]">
                      Geography Preferences
                    </h2>

                    <p className="mt-2 text-sm text-[#6b7280]">
                      Select startup operating
                      regions and preferred markets.
                    </p>

                  </div>

                </div>

                <div className="mt-7 flex flex-wrap gap-3">

                  {geographies.map((geo) => {
                    const active =
                      selectedGeographies.includes(
                        geo
                      );

                    return (
                      <button
                        key={geo}
                        onClick={() =>
                          toggleSelection(
                            geo,
                            selectedGeographies,
                            setSelectedGeographies
                          )
                        }
                        className={`flex h-12 items-center gap-2 rounded-2xl px-5 text-sm font-semibold transition

                        ${
                          active
                            ? "bg-[#13235b] text-white"
                            : "border border-[#ddd7cb] bg-[#f8f6f1] text-[#13235b] hover:bg-[#ece8de]"
                        }
                        `}
                      >

                        {active && (
                          <Check className="h-4 w-4" />
                        )}

                        {geo}

                      </button>
                    );
                  })}

                </div>

              </div>

              {/* MENTORSHIP */}
              <div className="rounded-[32px] border border-[#e0dbd1] bg-[#f6f3ed] p-6 lg:p-7">

                <div className="flex items-start gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#eceef5]">

                    <Handshake className="h-7 w-7 text-[#13235b]" />

                  </div>

                  <div>

                    <h2 className="text-2xl font-black text-[#13235b]">
                      Founder Mentorship Interest
                    </h2>

                    <p className="mt-2 text-sm text-[#6b7280]">
                      Choose whether you want to
                      mentor and guide startup
                      founders.
                    </p>

                  </div>

                </div>

                <div className="mt-7 flex flex-wrap gap-3">

                  {["Yes", "No"].map(
                    (item) => (
                      <button
                        key={item}
                        onClick={() =>
                          setMentorshipInterest(
                            item
                          )
                        }
                        className={`h-12 rounded-2xl px-6 text-sm font-semibold transition

                        ${
                          mentorshipInterest ===
                          item
                            ? "bg-[#13235b] text-white"
                            : "border border-[#ddd7cb] bg-[#f8f6f1] text-[#13235b] hover:bg-[#ece8de]"
                        }
                        `}
                      >
                        {item}
                      </button>
                    )
                  )}

                </div>

              </div>

            </div>

            {/* ACTIONS */}
            <div className="mt-12 flex flex-col gap-4 border-t border-[#ddd7cb] pt-8 sm:flex-row sm:items-center sm:justify-between">

              {/* BACK */}
              <Link
                href="/onboarding/investor-focus"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#d7d2c7] bg-[#f1efe9] px-6 text-sm font-semibold text-[#13235b] transition hover:bg-[#ebe7de]"
              >

                <ArrowLeft className="h-4 w-4" />

                Back

              </Link>

              {/* COMPLETE */}
              <button
                onClick={handleContinue}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#13235b] px-6 text-sm font-semibold text-white transition hover:opacity-90"
              >

                Complete Setup

              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}