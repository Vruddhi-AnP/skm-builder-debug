"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useLocalUser, getUserInitial, getUserDisplayName } from "@/hooks/useLocalUser";
import InvestorLayout from "@/components/investor/InvestorLayout";

import {
  Bell,
  Briefcase,
  Camera,
  CheckCircle2,
  Globe,
  LinkIcon,
  Mail,
  MapPin,
  Phone,
  Save,
  Sparkles,
  User,
  Wallet,
  X,
  TrendingUp,
  ShieldCheck,
  Building2,
  BadgeCheck,
} from "lucide-react"

export default function InvestorProfilePage() {

  const router = useRouter()

  const [profileSaved, setProfileSaved] =
    useState(false)

  const user = useLocalUser();

  const [formData, setFormData] =
    useState({
      fullName: user?.name ?? "",
      email: user?.email ?? "",
      phone: "",
      location: "Mumbai, India",
      investorType: "Angel Investor",
      focusSector: "FinTech, SaaS",
      investmentStage: "Seed Stage",
      ticketSize: "₹5L - ₹25L",
      linkedin:
        "https://linkedin.com/in/krishna",
      organization: "KS Ventures",
      portfolioCount: "14",
      bio: "Passionate about investing in scalable startups and founder-first ecosystems with strong execution capabilities.",
    })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = () => {
    setProfileSaved(true)

    setTimeout(() => {
      setProfileSaved(false)
    }, 2500)
  }

  return (
  <InvestorLayout
    title="Investor Profile"
    subtitle="Manage your investor identity and investment preferences"
  >

      {/* MAIN */}       
        <div className="mb-6 flex flex-wrap items-center gap-3">
          
  {/* NOTIFICATION */}
  <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card">
    <Bell className="h-5 w-5 text-foreground" />
  </button>

  {/* SAVE */}
  <button
    onClick={handleSave}
    className={`flex h-12 items-center gap-2 rounded-2xl px-5 text-sm font-semibold transition ${
      profileSaved
        ? "bg-emerald-500 text-white"
        : "bg-primary text-primary-foreground hover:opacity-90"
    }`}
  >
    {profileSaved ? (
      <>
        <CheckCircle2 className="h-4 w-4" />
        Saved
      </>
    ) : (
      <>
        <Save className="h-4 w-4" />
        Save Changes
      </>
    )}
  </button>

  {/* UPGRADE */}
  <button
    onClick={() => router.push("/onboarding/investor/package")}
    className="flex h-12 items-center gap-2 rounded-2xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition hover:bg-muted"
  >
    <Sparkles className="h-4 w-4 text-primary" />
    Upgrade Plan
  </button>

  {/* LOGOUT */}
  <button
    onClick={() => {
      localStorage.clear()
      sessionStorage.clear()
      router.push("/login")
    }}
    className="flex h-12 items-center gap-2 rounded-2xl border border-red-100 bg-red-50 px-5 text-sm font-semibold text-red-600 transition hover:bg-red-100"
  >
    <X className="h-4 w-4" />
    Logout
  </button>
</div>

        {/* CONTENT */}
        <>
          {/* HERO */}
          <section className="rounded-[36px] border border-border bg-card p-6 shadow-sm lg:p-8">
            <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="flex h-28 w-28 items-center justify-center rounded-[32px] bg-primary text-4xl font-black text-primary-foreground">
                    {getUserInitial(user?.name)}
                  </div>

                  <button className="absolute -bottom-2 -right-2 flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
                    <Camera className="h-5 w-5 text-foreground" />
                  </button>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2">
                    <ShieldCheck className="h-4 w-4 text-primary" />

                    <span className="text-sm font-semibold text-primary">
                      Verified Investor
                    </span>
                  </div>

                  <h2 className="mt-5 text-4xl font-black text-foreground">
                    {getUserDisplayName(user?.name)}
                  </h2>

                  <p className="mt-2 text-base text-muted-foreground">
                    Angel Investor • Startup
                    Ecosystem
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                      <BadgeCheck className="h-4 w-4 text-emerald-500" />

                      <span className="text-sm font-semibold text-foreground">
                        Active Investor
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-muted px-4 py-3 text-sm font-semibold">
                        Portfolio: 14
                      </div>

                      <div className="rounded-xl bg-muted px-4 py-3 text-sm font-semibold">
                        Saved: 8
                      </div>

                      <div className="rounded-xl bg-muted px-4 py-3 text-sm font-semibold">
                        Interests: 5
                      </div>

                      <div className="rounded-xl bg-muted px-4 py-3 text-sm font-semibold">
                        Connected: 3
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SCORE CARD */}
              <div className="w-full xl:w-[320px]">
                <div className="rounded-[30px] border border-primary/10 bg-primary/5 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                    Investor Activity
                  </p>

                  <h2 className="mt-5 text-6xl font-black text-foreground">
                    14
                  </h2>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Portfolio Startups
                  </p>

                  <div className="mt-6 h-3 overflow-hidden rounded-full bg-primary/10">
                    <div className="h-full w-[94%] rounded-full bg-primary" />
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                    <TrendingUp className="h-4 w-4" />
                    High ecosystem engagement
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FORM */}
          <section className="mt-7 grid grid-cols-1 gap-5 xl:grid-cols-2">
            {/* PERSONAL */}
            <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
              <h3 className="text-2xl font-black text-foreground">
                Personal Information
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="text-sm font-semibold text-foreground">
                    Full Name
                  </label>

                  <div className="mt-2 flex h-14 items-center gap-3 rounded-2xl border border-border bg-muted px-4">
                    <User className="h-5 w-5 text-muted-foreground" />

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="flex-1 bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground">
                    Email Address
                  </label>

                  <div className="mt-2 flex h-14 items-center gap-3 rounded-2xl border border-border bg-muted px-4">
                    <Mail className="h-5 w-5 text-muted-foreground" />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="flex-1 bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground">
                    Phone Number
                  </label>

                  <div className="mt-2 flex h-14 items-center gap-3 rounded-2xl border border-border bg-muted px-4">
                    <Phone className="h-5 w-5 text-muted-foreground" />

                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground">
                    Location
                  </label>

                  <div className="mt-2 flex h-14 items-center gap-3 rounded-2xl border border-border bg-muted px-4">
                    <MapPin className="h-5 w-5 text-muted-foreground" />

                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="flex-1 bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* INVESTOR */}
            <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
              <h3 className="text-2xl font-black text-foreground">
                Investment Preferences
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="text-sm font-semibold text-foreground">
                    Investor Type
                  </label>

                  <div className="mt-2 flex h-14 items-center gap-3 rounded-2xl border border-border bg-muted px-4">
                    <Wallet className="h-5 w-5 text-muted-foreground" />

                    <input
                      type="text"
                      name="investorType"
                      value={formData.investorType}
                      onChange={handleChange}
                      className="flex-1 bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground">
                    Focus Sectors
                  </label>

                  <div className="mt-2 flex h-14 items-center gap-3 rounded-2xl border border-border bg-muted px-4">
                    <Globe className="h-5 w-5 text-muted-foreground" />

                    <input
                      type="text"
                      name="focusSector"
                      value={formData.focusSector}
                      onChange={handleChange}
                      className="flex-1 bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground">
                    Investment Stage
                  </label>

                  <div className="mt-2 flex h-14 items-center gap-3 rounded-2xl border border-border bg-muted px-4">
                    <TrendingUp className="h-5 w-5 text-muted-foreground" />

                    <input
                      type="text"
                      name="investmentStage"
                      value={formData.investmentStage}
                      onChange={handleChange}
                      className="flex-1 bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground">
                    Ticket Size
                  </label>

                  <div className="mt-2 flex h-14 items-center gap-3 rounded-2xl border border-border bg-muted px-4">
                    <Wallet className="h-5 w-5 text-muted-foreground" />

                    <input
                      type="text"
                      name="ticketSize"
                      value={formData.ticketSize}
                      onChange={handleChange}
                      className="flex-1 bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROFESSIONAL DETAILS */}
          <section className="mt-7 rounded-[32px] border border-border bg-card p-6 shadow-sm">
            <h3 className="text-2xl font-black text-foreground">
              Professional Details
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-semibold text-foreground">
                    LinkedIn Profile
                  </label>

                  <div className="mt-2 flex h-14 items-center gap-3 rounded-2xl border border-border bg-muted px-4">
                    <LinkIcon className="h-5 w-5 text-muted-foreground" />

                    <input
                      type="text"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="flex-1 bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground">
                    Organization / Fund
                  </label>

                  <div className="mt-2 flex h-14 items-center gap-3 rounded-2xl border border-border bg-muted px-4">
                    <Building2 className="h-5 w-5 text-muted-foreground" />

                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="flex-1 bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground">
                    Portfolio Count
                  </label>

                  <div className="mt-2 flex h-14 items-center gap-3 rounded-2xl border border-border bg-muted px-4">
                    <Briefcase className="h-5 w-5 text-muted-foreground" />

                    <input
                      type="text"
                      name="portfolioCount"
                      value={formData.portfolioCount}
                      onChange={handleChange}
                      className="flex-1 bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground">
                  Investor Bio
                </label>

                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={10}
                  className="mt-2 w-full resize-none rounded-2xl border border-border bg-muted p-4 text-sm outline-none"
                />
              </div>
            </div>
          </section>
    </>
  </InvestorLayout>
)
}