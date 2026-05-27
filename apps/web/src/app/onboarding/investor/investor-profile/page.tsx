"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import Image from "next/image";

import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  LinkIcon,
  MapPin,
  ShieldCheck,
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
    <div className="min-h-screen bg-[#f4f1ea] px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* MAIN SHELL */}
        <div className="overflow-hidden rounded-[40px] border border-[#ddd7cb] bg-[#f8f6f1] shadow-sm">

          {/* HEADER */}
          <div className="flex flex-col gap-6 border-b border-[#e1dbcf] px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-4 transition hover:opacity-90"
            >

              <Image
                src="/logo.png"
                alt="Startup Ka Mall"
                width={220}
                height={70}
                priority
                className="h-auto w-[180px] object-contain sm:w-[220px]"
              />

            </Link>

            {/* STEP */}
            <div className="inline-flex h-12 items-center rounded-full border border-[#d9d3c8] bg-[#f1eee7] px-6">

              <span className="text-sm font-semibold text-[#13235b]">
                Step 1 of 4
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
                    Investor Onboarding
                  </span>

                </div>

                {/* TITLE */}
                <h1 className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-[#13235b] lg:text-6xl">
                  Create Your
                  <br />
                  Investor Profile
                </h1>

                {/* DESC */}
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#676c79]">
                  Setup your investor identity,
                  investment background and ecosystem
                  presence to access curated startup
                  opportunities.
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
                        Secure Workflow
                      </p>

                      <p className="mt-2 text-sm leading-relaxed text-[#146b4b]">
                        Protected investor onboarding
                        with verified ecosystem access
                        and secure startup workflows.
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
                        25%
                      </h3>

                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#13235b] text-sm font-black text-white">
                      1/4
                    </div>

                  </div>

                  <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#ddd6cb]">

                    <div className="h-full w-[25%] rounded-full bg-[#13235b]" />

                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-[#6b6558]">
                    Complete your investor profile to
                    unlock personalized startup
                    recommendations.
                  </p>

                </div>

              </div>

            </div>

            {/* FORM */}
            <div className="mt-12 rounded-[36px] border border-[#e0dbd1] bg-[#f6f3ed] p-6 lg:p-8">

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                {/* FULL NAME */}
                <div>

                  <label className="text-sm font-semibold text-[#13235b]">
                    Full Name
                  </label>

                  <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-[#ddd7cb] bg-[#f8f6f1] px-4 transition focus-within:border-[#13235b]/30 focus-within:ring-4 focus-within:ring-[#13235b]/10">

                    <User className="h-5 w-5 text-[#6b7280]" />

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
                      className="flex-1 bg-transparent text-sm text-[#13235b] outline-none placeholder:text-[#8b909c]"
                    />

                  </div>

                </div>

                {/* FIRM */}
                <div>

                  <label className="text-sm font-semibold text-[#13235b]">
                    Firm / Fund Name
                  </label>

                  <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-[#ddd7cb] bg-[#f8f6f1] px-4 transition focus-within:border-[#13235b]/30 focus-within:ring-4 focus-within:ring-[#13235b]/10">

                    <Building2 className="h-5 w-5 text-[#6b7280]" />

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
                      className="flex-1 bg-transparent text-sm text-[#13235b] outline-none placeholder:text-[#8b909c]"
                    />

                  </div>

                </div>

                {/* LOCATION */}
                <div>

                  <label className="text-sm font-semibold text-[#13235b]">
                    Location
                  </label>

                  <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-[#ddd7cb] bg-[#f8f6f1] px-4 transition focus-within:border-[#13235b]/30 focus-within:ring-4 focus-within:ring-[#13235b]/10">

                    <MapPin className="h-5 w-5 text-[#6b7280]" />

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
                      className="flex-1 bg-transparent text-sm text-[#13235b] outline-none placeholder:text-[#8b909c]"
                    />

                  </div>

                </div>

                {/* EXPERIENCE */}
                <div>

                  <label className="text-sm font-semibold text-[#13235b]">
                    Experience
                  </label>

                  <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-[#ddd7cb] bg-[#f8f6f1] px-4 transition focus-within:border-[#13235b]/30 focus-within:ring-4 focus-within:ring-[#13235b]/10">

                    <Briefcase className="h-5 w-5 text-[#6b7280]" />

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
                      className="flex-1 bg-transparent text-sm text-[#13235b] outline-none placeholder:text-[#8b909c]"
                    />

                  </div>

                </div>

              </div>

              {/* INVESTOR TYPE */}
              <div className="mt-8">

                <label className="text-sm font-semibold text-[#13235b]">
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
                            ? "bg-[#13235b] text-white"
                            : "border border-[#ddd7cb] bg-[#f8f6f1] text-[#13235b] hover:bg-[#ece8de]"
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
              <div className="mt-8">

                <label className="text-sm font-semibold text-[#13235b]">
                  LinkedIn Profile
                </label>

                <div className="mt-3 flex h-14 items-center gap-3 rounded-2xl border border-[#ddd7cb] bg-[#f8f6f1] px-4 transition focus-within:border-[#13235b]/30 focus-within:ring-4 focus-within:ring-[#13235b]/10">

                  <LinkIcon className="h-5 w-5 text-[#6b7280]" />

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
                    className="flex-1 bg-transparent text-sm text-[#13235b] outline-none placeholder:text-[#8b909c]"
                  />

                </div>

              </div>

              {/* BIO */}
              <div className="mt-8">

                <label className="text-sm font-semibold text-[#13235b]">
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
                  className="mt-3 w-full resize-none rounded-[28px] border border-[#ddd7cb] bg-[#f8f6f1] px-5 py-4 text-sm text-[#13235b] outline-none transition placeholder:text-[#8b909c] focus:border-[#13235b]/30 focus:ring-4 focus:ring-[#13235b]/10"
                />

              </div>

              {/* INFO CARD */}
              <div className="mt-8 rounded-[28px] border border-[#c8cedd] bg-[#eceef5] p-6">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  <div className="max-w-2xl">

                    <h3 className="text-lg font-black text-[#13235b]">
                      Investor Personalization
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#5f6473]">
                      Your investor profile helps us
                      connect you with relevant
                      founders, startup opportunities
                      and curated ecosystem programs
                      across the platform.
                    </p>

                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f8f6f1] text-xl font-black text-[#13235b] shadow-sm">
                    01
                  </div>

                </div>

              </div>

              {/* ACTIONS */}
              <div className="mt-10 flex flex-col gap-4 border-t border-[#ddd7cb] pt-8 sm:flex-row sm:items-center sm:justify-between">

                {/* BACK */}
                <Link
                  href="/signup/investor"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#d7d2c7] bg-[#f1efe9] px-6 text-sm font-semibold text-[#13235b] transition hover:bg-[#ebe7de]"
                >

                  <ArrowLeft className="h-4 w-4" />

                  Back

                </Link>

                {/* CONTINUE */}
                <button
                  onClick={handleContinue}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#13235b] px-6 text-sm font-semibold text-white transition hover:opacity-90"
                >

                  Continue

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}