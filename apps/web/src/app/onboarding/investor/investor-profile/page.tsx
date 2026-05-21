"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import {
  ArrowRight,
  Briefcase,
  Building2,
  LinkIcon,
  MapPin,
  Sparkles,
  User,
} from "lucide-react"

const investorTypes = [
  "Angel Investor",
  "VC Firm",
  "Family Office",
  "Micro VC",
  "Corporate VC",
]

export default function InvestorProfilePage() {
  const router = useRouter()

  const [selectedType, setSelectedType] =
    useState("Angel Investor")

  const [formData, setFormData] = useState({
    fullName: "",
    firmName: "",
    location: "",
    linkedin: "",
    experience: "",
    bio: "",
  })

  const handleContinue = () => {
    router.push(
      "/onboarding/investor/investor-focus"
    )
  }

  return (
    <div className="min-h-screen bg-[#f6f8fc] px-4 py-10">
      <div className="max-w-4xl mx-auto">
        {/* TOP */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">
            <Sparkles className="w-4 h-4 text-violet-600" />

            <span className="text-sm font-semibold text-violet-700">
              Investor Onboarding
            </span>
          </div>

          <h1 className="mt-6 text-4xl lg:text-5xl font-bold tracking-tight text-[#0f172a] leading-[1.1]">
            Create Investor Profile
          </h1>

          <p className="mt-4 text-base text-gray-500 max-w-2xl">
            Setup your investor profile to access curated
            startup opportunities and ecosystem connections.
          </p>
        </div>

        {/* FORM */}
        <div className="rounded-[36px] border border-[#e8edf5] bg-white p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FULL NAME */}
            <div>
              <label className="text-sm font-semibold text-[#0f172a]">
                Full Name
              </label>

              <div className="mt-3 h-14 rounded-2xl border border-[#e8edf5] bg-[#fafbff] px-4 flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />

                <input
                  type="text"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fullName: e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent outline-none text-sm text-[#0f172a]"
                />
              </div>
            </div>

            {/* FIRM */}
            <div>
              <label className="text-sm font-semibold text-[#0f172a]">
                Firm / Fund Name
              </label>

              <div className="mt-3 h-14 rounded-2xl border border-[#e8edf5] bg-[#fafbff] px-4 flex items-center gap-3">
                <Building2 className="w-5 h-5 text-gray-400" />

                <input
                  type="text"
                  placeholder="Enter firm name"
                  value={formData.firmName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      firmName: e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent outline-none text-sm text-[#0f172a]"
                />
              </div>
            </div>

            {/* LOCATION */}
            <div>
              <label className="text-sm font-semibold text-[#0f172a]">
                Location
              </label>

              <div className="mt-3 h-14 rounded-2xl border border-[#e8edf5] bg-[#fafbff] px-4 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />

                <input
                  type="text"
                  placeholder="Mumbai, India"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location: e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent outline-none text-sm text-[#0f172a]"
                />
              </div>
            </div>

            {/* EXPERIENCE */}
            <div>
              <label className="text-sm font-semibold text-[#0f172a]">
                Experience
              </label>

              <div className="mt-3 h-14 rounded-2xl border border-[#e8edf5] bg-[#fafbff] px-4 flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-gray-400" />

                <input
                  type="text"
                  placeholder="5+ years"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      experience:
                        e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent outline-none text-sm text-[#0f172a]"
                />
              </div>
            </div>
          </div>

          {/* INVESTOR TYPE */}
          <div className="mt-7">
            <label className="text-sm font-semibold text-[#0f172a]">
              Investor Type
            </label>

            <div className="mt-4 flex flex-wrap gap-3">
              {investorTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() =>
                    setSelectedType(type)
                  }
                  className={`h-11 px-5 rounded-2xl text-sm font-semibold transition ${
                    selectedType === type
                      ? "bg-violet-500 text-white"
                      : "border border-[#e8edf5] bg-white text-gray-700 hover:bg-[#fafafa]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* LINKEDIN */}
          <div className="mt-7">
            <label className="text-sm font-semibold text-[#0f172a]">
              LinkedIn Profile
            </label>

            <div className="mt-3 h-14 rounded-2xl border border-[#e8edf5] bg-[#fafbff] px-4 flex items-center gap-3">
              <LinkIcon className="w-5 h-5 text-gray-400" />

              <input
                type="text"
                placeholder="LinkedIn profile URL"
                value={formData.linkedin}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    linkedin: e.target.value,
                  })
                }
                className="flex-1 bg-transparent outline-none text-sm text-[#0f172a]"
              />
            </div>
          </div>

          {/* BIO */}
          <div className="mt-7">
            <label className="text-sm font-semibold text-[#0f172a]">
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
              className="mt-3 w-full rounded-[28px] border border-[#e8edf5] bg-[#fafbff] px-5 py-4 outline-none text-sm text-[#0f172a] resize-none"
            />
          </div>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/signup/investor"
              className="h-12 px-6 rounded-2xl border border-[#e8edf5] bg-white text-sm font-semibold text-[#0f172a] flex items-center justify-center"
            >
              Back
            </Link>

            <button
              onClick={handleContinue}
              className="h-12 px-6 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}