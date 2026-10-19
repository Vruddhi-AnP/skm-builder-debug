"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Link from "next/link";

import Image from "next/image";

import { advisorService } from "@/services/advisor.service";
import { saveAdvisorProfile } from "@/services/advisor-profile-flow";

import {
  BriefcaseBusiness,
  Building2,
  LinkIcon,
  Mail,
  Phone,
  ShieldCheck,
  User2,
} from "lucide-react";

import {
  getAdvisorOnboarding,
  saveAdvisorOnboarding,
} from "@/lib/advisor-onboarding";

export default function AdvisorProfilePage() {
  const router = useRouter();

  const [formData, setFormData] = useState(() => ({
    fullName: "",
    email: "",

    phoneNumber: "",

    linkedinUrl: "",

    currentRole: "",

    organization: "",

    experienceLevel: "",

    ...getAdvisorOnboarding(),
  }));

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = async () => {
    try {
      saveAdvisorOnboarding(formData);

      const payload = {
        ...(formData.phoneNumber.trim()
          ? { phoneNumber: formData.phoneNumber.trim() }
          : {}),

        ...(formData.currentRole.trim()
          ? { currentRole: formData.currentRole.trim() }
          : {}),

        ...(formData.organization.trim()
          ? { organization: formData.organization.trim() }
          : {}),

        ...(formData.linkedinUrl.trim()
          ? { linkedinUrl: formData.linkedinUrl.trim() }
          : {}),

        ...(formData.experienceLevel
          ? { experienceLevel: formData.experienceLevel }
          : {}),
      };

      await saveAdvisorProfile(advisorService, payload);

      router.push("/onboarding/advisor/expertise");
    } catch (error) {
      console.error("Failed to save advisor profile:", error);
      window.alert("We couldn't save your advisor profile. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-border bg-card p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:p-10 lg:p-14">
        {/* TOP BAR */}
        <div className="mb-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Startup Ka Mall"
              width={190}
              height={60}
              priority
              className="h-auto w-42.5 object-contain sm:w-47.5"
            />

            <div>
              <p className="text-sm text-slate-500">Startup Ecosystem</p>
            </div>
          </Link>

          <div className="hidden items-center gap-3 rounded-full border border-primary/10 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary sm:flex">
            Step 1 of 5
          </div>
        </div>

        {/* TOP */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT */}
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Advisor Onboarding
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Setup Your Advisor Profile
            </h1>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Build your advisor identity and showcase your expertise to help
              founders grow, execute and scale their startups.
            </p>

            {/* TAGS */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
                Advisor Identity
              </div>

              <div className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
                Professional Background
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

                <span className="text-sm font-bold text-primary">Step 1/5</span>
              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-1/5 rounded-full bg-primary" />
              </div>

              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                Advisor profile setup in progress
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="mt-14">
          <div>
            <h2 className="text-3xl font-black text-foreground">
              Advisor Details
            </h2>

            <p className="mt-3 text-base text-muted-foreground">
              Share your professional background and advisor identity
            </p>
          </div>

          {/* INPUTS */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* FULL NAME */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-foreground">
                Full Name
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-border bg-background px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                <User2 className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName || ""}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="h-full w-full bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-foreground">
                Email Address
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-border bg-background px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                <Mail className="h-5 w-5 text-muted-foreground" />

                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="h-full w-full bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-foreground">
                Phone Number
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-border bg-background px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                <Phone className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber || ""}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="h-full w-full bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* LINKEDIN */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-foreground">
                LinkedIn URL
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-border bg-background px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                <LinkIcon className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  name="linkedinUrl"
                  value={formData.linkedinUrl || ""}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="h-full w-full bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* ROLE */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-foreground">
                Current Role
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-border bg-background px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                <BriefcaseBusiness className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  name="currentRole"
                  value={formData.currentRole || ""}
                  onChange={handleChange}
                  placeholder="Ex: Startup Mentor, Product Leader"
                  className="h-full w-full bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-foreground">
                Company / Organization
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-border bg-background px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                <Building2 className="h-5 w-5 text-muted-foreground" />

                <input
                  type="text"
                  name="organization"
                  value={formData.organization || ""}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="h-full w-full bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* EXPERIENCE */}
            <div className="md:col-span-2">
              <label className="mb-3 block text-sm font-semibold text-foreground">
                Years of Experience
              </label>

              <select
                name="experienceLevel"
                value={formData.experienceLevel || ""}
                onChange={handleChange}
                className="h-14 w-full rounded-2xl border border-border bg-background px-5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
              >
                <option value="">Select experience level</option>

                <option value="YEARS_1_TO_3">1 - 3 Years</option>

                <option value="YEARS_3_TO_5">3 - 5 Years</option>

                <option value="YEARS_5_TO_10">5 - 10 Years</option>

                <option value="YEARS_10_PLUS">10+ Years</option>
              </select>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-14 flex justify-end border-t border-border pt-8">
            <button
              onClick={handleContinue}
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:bg-primary/90"
            >
              Continue to Expertise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
