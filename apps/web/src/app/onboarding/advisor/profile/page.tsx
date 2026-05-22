"use client";

import { useRouter } from "next/navigation";

import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  LinkIcon,
  Mail,
  Phone,
  User2,
} from "lucide-react";

export default function AdvisorProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#eef2ff,white_40%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_80px_rgba(99,102,241,0.12)] backdrop-blur-xl sm:p-10 lg:p-14">
        {/* TOP */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT */}
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full bg-violet-100 px-4 py-1 text-sm font-semibold text-violet-700">
              Advisor Onboarding
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
              Setup Your Advisor Profile
            </h1>

            <p className="mt-5 text-base leading-8 text-slate-500">
              Build your advisor identity and showcase your expertise
              to help founders grow, execute and scale their startups.
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
                Advisor Identity
              </div>

              <div className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
                Professional Background
              </div>
            </div>
          </div>

          {/* RIGHT PROGRESS */}
          <div className="w-full max-w-sm rounded-[2rem] border border-violet-200 bg-white p-6 shadow-[0_10px_40px_rgba(99,102,241,0.08)]">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">
                Progress
              </span>

              <span className="text-sm font-bold text-violet-600">
                Step 1/5
              </span>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-1/5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Advisor profile setup in progress
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="mt-14">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Advisor Details
            </h2>

            <p className="mt-3 text-base text-slate-500">
              Share your professional background and advisor identity
            </p>
          </div>

          {/* Inputs */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Full Name */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <User2 className="h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <Mail className="h-5 w-5 text-slate-400" />

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Phone Number
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <Phone className="h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* LinkedIn */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                LinkedIn URL
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <LinkIcon className="h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Current Role */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Current Role
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <BriefcaseBusiness className="h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  placeholder="Ex: Startup Mentor, Product Leader"
                  className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Company / Organization
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                <Building2 className="h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  placeholder="Enter your company name"
                  className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Experience */}
            <div className="md:col-span-2">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Years of Experience
              </label>

              <select className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm text-slate-700 outline-none transition-all focus:border-violet-500 focus:ring-4 focus:ring-violet-100">
                <option>Select experience level</option>
                <option>1 - 3 Years</option>
                <option>3 - 5 Years</option>
                <option>5 - 10 Years</option>
                <option>10+ Years</option>
              </select>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 flex justify-end border-t border-slate-100 pt-8">
            <button
              onClick={() =>
                router.push("/onboarding/advisor/expertise")
              }
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)] transition-all hover:scale-[1.02]"
            >
              Continue to Expertise

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}