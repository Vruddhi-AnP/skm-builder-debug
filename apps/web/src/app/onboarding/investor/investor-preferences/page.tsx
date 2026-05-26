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
    <div className="min-h-screen bg-background px-4 py-10">

      <div className="mx-auto max-w-5xl">

        {/* TOP */}
        <div className="mb-8">

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">

            <Sparkles className="h-4 w-4 text-primary" />

            <span className="text-sm font-semibold text-primary">
              Investment Preferences
            </span>

          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-foreground lg:text-5xl leading-[1.1]">
            Configure Investment Preferences
          </h1>

          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Setup startup stage, ticket size and
            geography preferences for better matches.
          </p>

        </div>

        <div className="space-y-6">

          {/* STAGES */}
          <div className="rounded-[32px] border border-border bg-card p-6 lg:p-7">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">

                <Target className="h-6 w-6 text-primary" />

              </div>

              <div>

                <h2 className="text-2xl font-black text-foreground">
                  Preferred Startup Stage
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Select startup maturity stages.
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
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-background text-foreground hover:bg-muted"
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

          {/* TICKET SIZE */}
          <div className="rounded-[32px] border border-border bg-card p-6 lg:p-7">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">

                <Coins className="h-6 w-6 text-primary" />

              </div>

              <div>

                <h2 className="text-2xl font-black text-foreground">
                  Investment Ticket Size
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Choose your preferred investment range.
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
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-background text-foreground hover:bg-muted"
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
          <div className="rounded-[32px] border border-border bg-card p-6 lg:p-7">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">

                <MapPinned className="h-6 w-6 text-primary" />

              </div>

              <div>

                <h2 className="text-2xl font-black text-foreground">
                  Geography Preferences
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Select startup operating regions.
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
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-background text-foreground hover:bg-muted"
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
          <div className="rounded-[32px] border border-border bg-card p-6 lg:p-7">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">

                <Handshake className="h-6 w-6 text-primary" />

              </div>

              <div>

                <h2 className="text-2xl font-black text-foreground">
                  Founder Mentorship Interest
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Are you open to mentoring startups?
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
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-background text-foreground hover:bg-muted"
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
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          {/* BACK */}
          <Link
            href="/onboarding/investor-focus"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 text-sm font-semibold text-foreground transition hover:bg-muted"
          >

            <ArrowLeft className="h-4 w-4" />

            Back

          </Link>

          {/* COMPLETE */}
          <button
            onClick={handleContinue}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Complete Setup

            <ArrowRight className="h-4 w-4" />

          </button>

        </div>
      </div>
    </div>
  );
}