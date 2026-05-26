"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import Image from "next/image";

import {
  ArrowRight,
  Briefcase,
  Building2,
  LinkIcon,
  MapPin,
  Sparkles,
  User,
} from "lucide-react";

const investorTypes = [
  "Angel Investor",
  "VC Firm",
  "Family Office",
  "Micro VC",
  "Corporate VC",
];

export default function InvestorProfilePage() {
  const router = useRouter();

  const [selectedType, setSelectedType] =
    useState("Angel Investor");

  const [formData, setFormData] =
    useState({
      fullName: "",
      firmName: "",
      location: "",
      linkedin: "",
      experience: "",
      bio: "",
    });

  const handleContinue = () => {
    router.push(
      "/onboarding/investor/investor-focus"
    );
  };

  return (
    <div className="min-h-screen bg-background px-4 py-10">

      <div className="mx-auto max-w-4xl">

        {/* LOGO */}
        <div className="mb-10 flex justify-center">

          <Link
            href="/"
            className="transition hover:scale-[1.02]"
          >

            <Image
              src="/logo.png"
              alt="Startup Ka Mall"
              width={220}
              height={70}
              priority
              className="h-auto w-[190px] object-contain sm:w-[220px]"
            />

          </Link>

        </div>

        {/* TOP */}
        <div className="mb-8">

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">

            <Sparkles className="h-4 w-4 text-primary" />

            <span className="text-sm font-semibold text-primary">
              Investor Onboarding
            </span>

          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-foreground leading-[1.1] lg:text-5xl">
            Create Investor Profile
          </h1>

          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Setup your investor profile to access curated
            startup opportunities and ecosystem connections.
          </p>

        </div>

        {/* FORM */}
        <div className="rounded-[36px] border border-border bg-card p-6 shadow-sm lg:p-8">

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* FULL NAME */}
            <div>

              <label className="text-sm font-semibold text-foreground">
                Full Name
              </label>

              <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-border bg-background px-4 transition focus-within:border-primary/40 focus-within:ring-4 focus-within:ring-primary/10">

                <User className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fullName:
                        e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />

              </div>

            </div>

            {/* FIRM */}
            <div>

              <label className="text-sm font-semibold text-foreground">
                Firm / Fund Name
              </label>

              <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-border bg-background px-4 transition focus-within:border-primary/40 focus-within:ring-4 focus-within:ring-primary/10">

                <Building2 className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  placeholder="Enter firm name"
                  value={formData.firmName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      firmName:
                        e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />

              </div>

            </div>

            {/* LOCATION */}
            <div>

              <label className="text-sm font-semibold text-foreground">
                Location
              </label>

              <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-border bg-background px-4 transition focus-within:border-primary/40 focus-within:ring-4 focus-within:ring-primary/10">

                <MapPin className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  placeholder="Mumbai, India"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location:
                        e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />

              </div>

            </div>

            {/* EXPERIENCE */}
            <div>

              <label className="text-sm font-semibold text-foreground">
                Experience
              </label>

              <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-border bg-background px-4 transition focus-within:border-primary/40 focus-within:ring-4 focus-within:ring-primary/10">

                <Briefcase className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  placeholder="5+ years"
                  value={
                    formData.experience
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      experience:
                        e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />

              </div>

            </div>

          </div>

          {/* INVESTOR TYPE */}
          <div className="mt-7">

            <label className="text-sm font-semibold text-foreground">
              Investor Type
            </label>

            <div className="mt-4 flex flex-wrap gap-3">

              {investorTypes.map(
                (type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() =>
                      setSelectedType(
                        type
                      )
                    }
                    className={`h-11 rounded-2xl px-5 text-sm font-semibold transition

                    ${
                      selectedType ===
                      type
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-background text-foreground hover:bg-muted"
                    }
                    `}
                  >
                    {type}
                  </button>
                )
              )}

            </div>

          </div>

          {/* LINKEDIN */}
          <div className="mt-7">

            <label className="text-sm font-semibold text-foreground">
              LinkedIn Profile
            </label>

            <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-border bg-background px-4 transition focus-within:border-primary/40 focus-within:ring-4 focus-within:ring-primary/10">

              <LinkIcon className="h-5 w-5 text-muted-foreground" />

              <input
                type="text"
                placeholder="LinkedIn profile URL"
                value={formData.linkedin}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    linkedin:
                      e.target.value,
                  })
                }
                className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />

            </div>

          </div>

          {/* BIO */}
          <div className="mt-7">

            <label className="text-sm font-semibold text-foreground">
              Short Bio
            </label>

            <textarea
              rows={5}
              placeholder="Tell startups about your investment background..."
              value={formData.bio}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  bio: e.target.value,
                })
              }
              className="mt-3 w-full resize-none rounded-[28px] border border-border bg-background px-5 py-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
            />

          </div>

          {/* INFO CARD */}
          <div className="mt-8 rounded-[28px] border border-primary/20 bg-primary/5 p-6">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

              <div className="max-w-2xl">

                <h3 className="text-lg font-black text-foreground">
                  Investor Personalization
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Your investor profile helps us match
                  you with relevant founders, startup
                  opportunities and ecosystem connections
                  across the platform.
                </p>

              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-background text-xl font-black text-primary shadow-sm">
                01
              </div>

            </div>

          </div>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row">

            {/* BACK */}
            <Link
              href="/signup/investor"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-border bg-background px-6 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Back
            </Link>

            {/* CONTINUE */}
            <button
              onClick={handleContinue}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >

              Continue

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

        </div>
      </div>
    </div>
  );
}