"use client"

import { useState } from "react"
import Link from "next/link"

import {
  Award,
  BarChart3,
  Bell,
  Briefcase,
  CalendarDays,
  Camera,
  Edit3,
  Globe,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Star,
  User,
  Users,
  Wallet,
  X,
} from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/advisor/dashboard",
    icon: BarChart3,
  },
  {
    name: "Discover",
    href: "/advisor/discover",
    icon: Search,
  },
  {
    name: "Requests",
    href: "/advisor/requests",
    icon: Briefcase,
  },
  {
    name: "Sessions",
    href: "/advisor/sessions",
    icon: CalendarDays,
  },
  {
    name: "Earnings",
    href: "/advisor/earnings",
    icon: Wallet,
  },
  {
    name: "Profile",
    href: "/advisor/profile",
    icon: User,
    active: true,
  },
]

const expertise = [
  "Fundraising",
  "Investor Readiness",
  "Go To Market",
  "Growth Strategy",
  "Startup Operations",
  "Pitch Deck Review",
]

export default function AdvisorProfilePage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  return (
    <div className="min-h-screen bg-[#f6f8fc] flex">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="w-[270px] bg-white h-full border-r border-[#edf1f7] flex flex-col">
            <div className="h-20 border-b border-[#edf1f7] flex items-center justify-between px-5">
              <div>
                <h2 className="text-xl font-bold text-[#0f172a]">
                  Startup Ka Mall
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Advisor Workspace
                </p>
              </div>

              <button
                onClick={() =>
                  setSidebarOpen(false)
                }
                className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center"
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
                        ? "bg-[#eef2ff] text-violet-600"
                        : "text-gray-600 hover:bg-[#f8fafc]"
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
      <aside className="hidden lg:flex w-[270px] bg-white border-r border-[#e9eef5] flex-col">
        <div className="h-24 border-b border-[#edf1f7] flex items-center px-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-xl font-bold">
              A
            </div>

            <div>
              <h2 className="text-[24px] font-bold text-[#0f172a]">
                Startup Ka Mall
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Advisor Workspace
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
                    ? "bg-[#eef2ff] text-violet-600"
                    : "text-gray-600 hover:bg-[#f8fafc]"
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
              <h1 className="text-[28px] font-bold text-[#0f172a]">
                Advisor Profile
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Professional ecosystem advisor profile
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative h-12 w-12 rounded-2xl border border-[#edf1f7] bg-white flex items-center justify-center">
              <Bell className="w-5 h-5 text-gray-700" />
            </button>

            <button className="h-12 px-5 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold">
              Save Profile
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 p-5 lg:p-7 overflow-x-hidden">
          {/* HERO */}
          <section className="rounded-[36px] border border-[#e8edf5] bg-white p-6 lg:p-8">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="relative">
                  <div className="h-32 w-32 rounded-[32px] bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-5xl font-bold">
                    K
                  </div>

                  <button className="absolute -bottom-2 -right-2 h-11 w-11 rounded-2xl bg-white border border-[#edf1f7] flex items-center justify-center">
                    <Camera className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="text-4xl font-bold text-[#0f172a]">
                      Krishna Shah
                    </h2>

                    <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                      Platinum Advisor
                    </span>
                  </div>

                  <p className="mt-4 text-lg text-gray-600">
                    Startup Growth & Fundraising Advisor
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Mumbai, India
                    </span>

                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      22 Active Founders
                    </span>

                    <span className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      4.9 Rating
                    </span>
                  </div>

                  <div className="mt-6 flex gap-3 flex-wrap">
                    <button className="h-11 px-5 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold flex items-center gap-2">
                      <Edit3 className="w-4 h-4" />
                      Edit Profile
                    </button>

                    <button className="h-11 px-5 rounded-2xl border border-[#e8edf5] bg-white text-sm font-semibold text-[#0f172a]">
                      Share Profile
                    </button>
                  </div>
                </div>
              </div>

              {/* PROFILE SCORE */}
              <div className="w-full xl:w-[320px] rounded-[28px] border border-violet-200 bg-[#fafbff] p-6">
                <p className="text-sm font-semibold text-violet-600">
                  PROFILE STRENGTH
                </p>

                <h2 className="mt-5 text-6xl font-bold text-[#0f172a]">
                  92%
                </h2>

                <p className="mt-3 text-sm text-gray-500">
                  Trusted ecosystem advisor profile
                </p>

                <div className="mt-6 h-3 w-full rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                </div>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="rounded-[28px] border border-[#e8edf5] bg-white p-6">
              <Wallet className="w-6 h-6 text-violet-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                ₹2.4L
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Total Earnings
              </p>
            </div>

            <div className="rounded-[28px] border border-[#e8edf5] bg-white p-6">
              <CalendarDays className="w-6 h-6 text-emerald-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                71
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Sessions Conducted
              </p>
            </div>

            <div className="rounded-[28px] border border-[#e8edf5] bg-white p-6">
              <Award className="w-6 h-6 text-fuchsia-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                14
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Investor Ready Startups
              </p>
            </div>

            <div className="rounded-[28px] border border-[#e8edf5] bg-white p-6">
              <Star className="w-6 h-6 text-orange-500" />

              <h3 className="mt-5 text-3xl font-bold text-[#0f172a]">
                4.9
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Advisor Rating
              </p>
            </div>
          </section>

          {/* DETAILS */}
          <section className="mt-7 grid grid-cols-1 xl:grid-cols-[1.3fr_420px] gap-5">
            {/* LEFT */}
            <div className="space-y-5">
              {/* ABOUT */}
              <div className="rounded-[32px] border border-[#e8edf5] bg-white p-6">
                <h3 className="text-2xl font-bold text-[#0f172a]">
                  About
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-gray-500">
                  Startup ecosystem advisor helping founders with fundraising,
                  investor readiness, GTM execution, startup scaling and
                  business growth strategy across early-stage ventures.
                </p>
              </div>

              {/* EXPERTISE */}
              <div className="rounded-[32px] border border-[#e8edf5] bg-white p-6">
                <h3 className="text-2xl font-bold text-[#0f172a]">
                  Expertise
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {expertise.map((item, index) => (
                    <div
                      key={index}
                      className="h-11 px-5 rounded-2xl bg-violet-50 text-violet-700 text-sm font-semibold flex items-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-5">
              {/* CONTACT */}
              <div className="rounded-[32px] border border-[#e8edf5] bg-white p-6">
                <h3 className="text-2xl font-bold text-[#0f172a]">
                  Contact
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-4 rounded-[22px] border border-[#edf1f7] bg-[#fafbff] p-4">
                    <Mail className="w-5 h-5 text-violet-500" />

                    <div>
                      <p className="text-xs text-gray-500">
                        Email
                      </p>

                      <p className="text-sm font-semibold text-[#0f172a]">
                        krishna@startupkamall.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-[22px] border border-[#edf1f7] bg-[#fafbff] p-4">
                    <Phone className="w-5 h-5 text-fuchsia-500" />

                    <div>
                      <p className="text-xs text-gray-500">
                        Phone
                      </p>

                      <p className="text-sm font-semibold text-[#0f172a]">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-[22px] border border-[#edf1f7] bg-[#fafbff] p-4">
                    <Globe className="w-5 h-5 text-emerald-500" />

                    <div>
                      <p className="text-xs text-gray-500">
                        Website
                      </p>

                      <p className="text-sm font-semibold text-[#0f172a]">
                        startupkamall.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACHIEVEMENTS */}
              <div className="rounded-[32px] border border-[#e8edf5] bg-white p-6">
                <h3 className="text-2xl font-bold text-[#0f172a]">
                  Achievements
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    "Top Rated Advisor",
                    "50+ Startups Mentored",
                    "Investor Readiness Expert",
                    "Growth Ecosystem Contributor",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-[22px] border border-[#edf1f7] bg-[#fafbff] p-4"
                    >
                      <div className="h-10 w-10 rounded-2xl bg-violet-100 flex items-center justify-center">
                        <Award className="w-5 h-5 text-violet-600" />
                      </div>

                      <p className="text-sm font-semibold text-[#0f172a]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}