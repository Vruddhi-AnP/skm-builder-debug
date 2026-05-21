"use client"

import { useState } from "react"
import Link from "next/link"

import {
  BarChart3,
  Bell,
  Bookmark,
  Briefcase,
  Camera,
  CheckCircle2,
  Flame,
  Globe,
  LinkIcon,
  Mail,
  MapPin,
  Menu,
  Phone,
  Save,
  Search,
  Sparkles,
  User,
  Wallet,
  X,
  TrendingUp,
} from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/investor/dashboard",
    icon: BarChart3,
  },
  {
    name: "Discover",
    href: "/investor/discover",
    icon: Search,
  },
  {
    name: "Interested",
    href: "/investor/interested",
    icon: Flame,
  },
  {
    name: "Saved",
    href: "/investor/saved",
    icon: Bookmark,
  },
  {
    name: "Programs",
    href: "/investor/programs",
    icon: Briefcase,
  },
  {
    name: "Profile",
    href: "/investor/profile",
    icon: User,
    active: true,
  },
]

export default function InvestorProfilePage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  const [profileSaved, setProfileSaved] =
    useState(false)

  const [formData, setFormData] =
    useState({
      fullName: "Krishna Shah",
      email: "krishna@gmail.com",
      phone: "+91 9876543210",
      location: "Mumbai, India",
      investorType: "Angel Investor",
      focusSector: "FinTech, SaaS",
      investmentStage: "Seed Stage",
      ticketSize: "₹5L - ₹25L",
      linkedin:
        "https://linkedin.com/in/krishna",
      bio: "Passionate about investing in scalable startups and founder-first ecosystems.",
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
    <div className="min-h-screen bg-[#f6f8fc] flex">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="w-[280px] bg-white h-full border-r border-[#edf1f7] flex flex-col">
            <div className="h-20 border-b border-[#edf1f7] flex items-center justify-between px-5">
              <div>
                <h2 className="text-xl font-bold text-[#0f172a]">
                  Startup Ka Mall
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Investor Workspace
                </p>
              </div>

              <button
                onClick={() =>
                  setSidebarOpen(false)
                }
                className="h-10 w-10 rounded-xl bg-[#f6f8fc] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 px-4 py-5 space-y-2 overflow-y-auto">
              {navigation.map((item) => {
                const Icon = item.icon

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() =>
                      setSidebarOpen(false)
                    }
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition ${
                      item.active
                        ? "bg-violet-50 text-violet-600"
                        : "text-gray-600 hover:bg-[#fafafa]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />

                    <span className="font-semibold text-sm">
                      {item.name}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>

          <div
            className="flex-1 bg-black/20"
            onClick={() =>
              setSidebarOpen(false)
            }
          />
        </div>
      )}

      {/* SIDEBAR */}
      <aside className="hidden lg:flex w-[280px] bg-white border-r border-[#edf1f7] flex-col">
        <div className="h-24 border-b border-[#edf1f7] flex items-center px-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-xl font-bold">
              I
            </div>

            <div>
              <h2 className="text-[24px] font-bold text-[#0f172a] leading-none">
                Startup Ka Mall
              </h2>

              <p className="text-xs text-gray-500 mt-2">
                Investor Workspace
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition ${
                  item.active
                    ? "bg-violet-50 text-violet-600"
                    : "text-gray-600 hover:bg-[#fafafa]"
                }`}
              >
                <Icon className="w-5 h-5" />

                <span className="font-semibold text-sm">
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>

        <div className="p-4">
          <div className="rounded-[30px] border border-violet-200 bg-[#fafbff] p-5">
            <p className="text-[11px] uppercase tracking-wider font-semibold text-violet-500">
              Investor Profile
            </p>

            <h3 className="mt-4 text-4xl font-bold text-[#0f172a]">
              92%
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Profile completion score
            </p>

            <div className="mt-5 h-2 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* HEADER */}
        <header className="sticky top-0 z-30 h-20 bg-[#f6f8fc]/90 backdrop-blur-xl border-b border-[#edf1f7] flex items-center justify-between px-5 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                setSidebarOpen(true)
              }
              className="lg:hidden h-11 w-11 rounded-xl bg-white border border-[#edf1f7] flex items-center justify-center"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div>
              <h1 className="text-[30px] font-bold text-[#0f172a] leading-none">
                Investor Profile
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Manage your investor information
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="h-12 w-12 rounded-2xl border border-[#edf1f7] bg-white flex items-center justify-center">
              <Bell className="w-5 h-5 text-gray-700" />
            </button>

            <button
              onClick={handleSave}
              className={`h-12 px-5 rounded-2xl text-sm font-semibold transition flex items-center gap-2 ${
                profileSaved
                  ? "bg-emerald-500 text-white"
                  : "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
              }`}
            >
              {profileSaved ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Saved
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 p-5 lg:p-7 overflow-x-hidden">
          {/* HERO */}
          <section className="rounded-[36px] border border-[#e8edf5] bg-white p-6 lg:p-8">
            <div className="flex flex-col xl:flex-row xl:items-center gap-8">
              {/* PROFILE */}
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="h-28 w-28 rounded-[32px] bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-4xl font-bold">
                    K
                  </div>

                  <button className="absolute -bottom-2 -right-2 h-11 w-11 rounded-2xl bg-white border border-[#edf1f7] flex items-center justify-center shadow-sm">
                    <Camera className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">
                    <Sparkles className="w-4 h-4 text-violet-600" />

                    <span className="text-sm font-semibold text-violet-700">
                      Verified Investor
                    </span>
                  </div>

                  <h2 className="mt-5 text-4xl font-bold text-[#0f172a]">
                    Krishna Shah
                  </h2>

                  <p className="mt-2 text-base text-gray-500">
                    Angel Investor • Startup Ecosystem
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FORM */}
          <section className="mt-7 grid grid-cols-1 xl:grid-cols-2 gap-5">
            {/* PERSONAL */}
            <div className="rounded-[32px] border border-[#e8edf5] bg-white p-6">
              <h3 className="text-2xl font-bold text-[#0f172a]">
                Personal Information
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="text-sm font-semibold text-[#0f172a]">
                    Full Name
                  </label>

                  <div className="mt-2 h-14 rounded-2xl border border-[#edf1f7] bg-[#fafbff] px-4 flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-400" />

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="flex-1 bg-transparent outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#0f172a]">
                    Email Address
                  </label>

                  <div className="mt-2 h-14 rounded-2xl border border-[#edf1f7] bg-[#fafbff] px-4 flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="flex-1 bg-transparent outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#0f172a]">
                    Phone Number
                  </label>

                  <div className="mt-2 h-14 rounded-2xl border border-[#edf1f7] bg-[#fafbff] px-4 flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />

                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 bg-transparent outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#0f172a]">
                    Location
                  </label>

                  <div className="mt-2 h-14 rounded-2xl border border-[#edf1f7] bg-[#fafbff] px-4 flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-400" />

                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="flex-1 bg-transparent outline-none text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* INVESTOR */}
            <div className="rounded-[32px] border border-[#e8edf5] bg-white p-6">
              <h3 className="text-2xl font-bold text-[#0f172a]">
                Investment Preferences
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="text-sm font-semibold text-[#0f172a]">
                    Investor Type
                  </label>

                  <div className="mt-2 h-14 rounded-2xl border border-[#edf1f7] bg-[#fafbff] px-4 flex items-center gap-3">
                    <Wallet className="w-5 h-5 text-gray-400" />

                    <input
                      type="text"
                      name="investorType"
                      value={formData.investorType}
                      onChange={handleChange}
                      className="flex-1 bg-transparent outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#0f172a]">
                    Focus Sectors
                  </label>

                  <div className="mt-2 h-14 rounded-2xl border border-[#edf1f7] bg-[#fafbff] px-4 flex items-center gap-3">
                    <Globe className="w-5 h-5 text-gray-400" />

                    <input
                      type="text"
                      name="focusSector"
                      value={formData.focusSector}
                      onChange={handleChange}
                      className="flex-1 bg-transparent outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#0f172a]">
                    Investment Stage
                  </label>

                  <div className="mt-2 h-14 rounded-2xl border border-[#edf1f7] bg-[#fafbff] px-4 flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-gray-400" />

                    <input
                      type="text"
                      name="investmentStage"
                      value={formData.investmentStage}
                      onChange={handleChange}
                      className="flex-1 bg-transparent outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#0f172a]">
                    Ticket Size
                  </label>

                  <div className="mt-2 h-14 rounded-2xl border border-[#edf1f7] bg-[#fafbff] px-4 flex items-center gap-3">
                    <Wallet className="w-5 h-5 text-gray-400" />

                    <input
                      type="text"
                      name="ticketSize"
                      value={formData.ticketSize}
                      onChange={handleChange}
                      className="flex-1 bg-transparent outline-none text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BIO */}
          <section className="mt-7 rounded-[32px] border border-[#e8edf5] bg-white p-6">
            <h3 className="text-2xl font-bold text-[#0f172a]">
              Professional Details
            </h3>

            <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-semibold text-[#0f172a]">
                  LinkedIn Profile
                </label>

                <div className="mt-2 h-14 rounded-2xl border border-[#edf1f7] bg-[#fafbff] px-4 flex items-center gap-3">
                  <LinkIcon className="w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="flex-1 bg-transparent outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-[#0f172a]">
                  Investor Bio
                </label>

                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-[#edf1f7] bg-[#fafbff] p-4 outline-none text-sm resize-none"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}