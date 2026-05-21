"use client";

import {
  LayoutDashboard,
  Users,
  Briefcase,
  BadgeDollarSign,
  Bell,
  Menu,
  X,
  BookOpen,
} from "lucide-react";

import { useState } from "react";

export default function FounderDashboard() {
  const [activeTab, setActiveTab] =
    useState("dashboard");

  const [profileOpen, setProfileOpen] =
    useState(false);

  const [mobileSidebar, setMobileSidebar] =
    useState(false);

  return (
    <main className="min-h-screen bg-[#f8fafc] flex">
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex w-[260px] bg-white border-r border-slate-200 flex-col p-6">
        {/* LOGO */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white flex items-center justify-center text-xl font-black">
            S
          </div>

          <div>
            <h1 className="text-lg font-black text-slate-900">
              Startup Ka Mall
            </h1>

            <p className="text-sm text-slate-500">
              Founder Workspace
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="space-y-3">
          <button
            onClick={() =>
              setActiveTab("dashboard")
            }
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold transition ${
              activeTab === "dashboard"
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </button>

          <button
            onClick={() =>
              window.location.href =
                "/founder/advisors"
            }
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
              activeTab === "advisors"
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Users size={20} />
            Advisors
          </button>

          <button
            onClick={() =>
              window.location.href =
                "/founder/investors"
            }
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
              activeTab === "investors"
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <BadgeDollarSign size={20} />
            Investors
          </button>

          <button
            onClick={() =>
              window.location.href =
                "/founder/programs"
            }
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
              activeTab === "programs"
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Briefcase size={20} />
            Programs
          </button>
        </div>

            <button
          onClick={() =>
            window.location.href =
              "/founder/resources"
          }
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
            activeTab === "resources"
              ? "bg-indigo-50 text-indigo-600"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <BookOpen size={20} />
          Resources
        </button>

        {/* FOUNDER SCORE */}
        <div className="mt-10 rounded-[2rem] bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-[1px]">
          <div className="rounded-[2rem] bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
              Startup Readiness
            </p>

            <h2 className="text-5xl font-black text-slate-900 mt-4">
              72%
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Investor Ready Stage
            </p>

            <div className="mt-5 h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500" />
            </div>
          </div>
        </div>

        {/* PROFILE */}
        <div className="mt-auto bg-slate-50 rounded-3xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
              K
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Krishna Shah
              </h3>

              <p className="text-sm text-slate-500">
                Founder
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* TOPBAR */}
        <header className="h-[80px] bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden"
              onClick={() =>
                setMobileSidebar(true)
              }
            >
              <Menu size={24} />
            </button>

            <div>
              <h1 className="text-2xl font-black text-slate-900">
                Founder Dashboard
              </h1>

              <p className="text-sm text-slate-500">
                Startup execution workspace
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* NOTIFICATION */}
            <button className="relative w-11 h-11 rounded-2xl border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 transition">
              <Bell className="text-slate-700 h-5 w-5" />

              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full" />
            </button>

            {/* PROFILE */}
            <button
              onClick={() =>
                setProfileOpen(true)
              }
              className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white flex items-center justify-center font-bold"
            >
              K
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <div className="relative z-10 p-4 sm:p-6 lg:p-8 space-y-8">
          {/* HERO SECTION */}
          <section className="relative z-0 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 md:p-8">
              <div className="pointer-events-none absolute top-0 right-0 w-72 h-72 bg-indigo-100 blur-3xl opacity-40 rounded-full" />
            <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-5">
                  Founder Workspace Active
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  Welcome Back, Founder
                </h1>

                <p className="mt-4 text-slate-500 leading-relaxed">
                  Continue building your startup roadmap,
                  improve investor readiness and connect
                  with advisors to scale your startup
                  faster.
                </p>
              </div>

              {/* SCORE CARD */}
              <div className="w-full xl:w-[340px] rounded-[2rem] bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-[1px]">
                <div className="rounded-[2rem] bg-white p-6">
                  <p className="text-sm font-semibold text-slate-600">
                    Startup Readiness
                  </p>

                  <h2 className="text-6xl font-black text-slate-900 mt-4">
                    72
                  </h2>

                  <p className="text-sm text-slate-500 mt-2">
                    Investor Ready Stage
                  </p>

                  <div className="mt-6 h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-[72%] h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-lg transition">
              <p className="text-sm text-slate-500">
                Startup Score
              </p>

              <h2 className="text-4xl font-black text-slate-900 mt-3">
                72
              </h2>

              <p className="text-sm text-emerald-600 mt-2">
                +8% this week
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-lg transition">
              <p className="text-sm text-slate-500">
                Builder Progress
              </p>

              <h2 className="text-4xl font-black text-slate-900 mt-3">
                3/5
              </h2>

              <p className="text-sm text-blue-600 mt-2">
                Startup roadmap active
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-lg transition">
              <p className="text-sm text-slate-500">
                Investor Interest
              </p>

              <h2 className="text-4xl font-black text-slate-900 mt-3">
                2
              </h2>

              <p className="text-sm text-violet-600 mt-2">
                Active investor requests
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-lg transition">
              <p className="text-sm text-slate-500">
                Advisor Opportunities
              </p>

              <h2 className="text-4xl font-black text-slate-900 mt-3">
                5
              </h2>

              <p className="text-sm text-orange-600 mt-2">
                Relevant advisors available
              </p>
            </div>
          </section>

          {/* MAIN GRID */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* LEFT */}
            <div className="xl:col-span-2 space-y-6">
              {/* NEXT ACTIONS */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
                <h2 className="text-2xl font-black text-slate-900">
                  Next Actions
                </h2>

                <p className="text-sm text-slate-500 mt-2">
                  Recommended steps to improve startup
                  readiness.
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    "Complete startup profile",
                    "Define MVP roadmap",
                    "Upload pitch deck",
                    "Connect with advisors",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 rounded-3xl border border-slate-200 p-5 hover:bg-slate-50 transition"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>

                      <p className="font-semibold text-slate-800">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* STARTUP BUILDER */}
              <div className="rounded-[2rem] bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-[1px]">
                <div className="rounded-[2rem] bg-white p-6 md:p-8">
                  <h2 className="text-3xl font-black text-slate-900">
                    Startup Builder
                  </h2>

                  <p className="text-slate-500 mt-3 leading-relaxed">
                    Continue building your startup
                    blueprint and execution roadmap
                    through structured startup planning
                    modules.
                  </p>

                  <button 
                  onClick={() =>
                    window.location.href =
                      "/founder/startup-builder"
                  }
                  className="mt-6 h-14 px-8 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white font-bold hover:scale-[1.02] transition">
                    Continue Builder
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              {/* ADVISORS */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
                <h2 className="text-2xl font-black text-slate-900">
                  Advisor Opportunities
                </h2>

                <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                  Connect with startup experts for
                  mentorship, execution support and
                  fundraising guidance.
                </p>

                <button 
                onClick={() =>
                  window.location.href =
                    "/founder/advisors"
                }
                className="mt-6 w-full h-12 rounded-2xl bg-cyan-50 text-cyan-700 font-semibold hover:bg-cyan-100 transition">
                  Explore Advisors
                </button>
              </div>

              {/* PROGRAMS */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
                <h2 className="text-2xl font-black text-slate-900">
                  Programs & Packages
                </h2>

                <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                  Explore startup growth programs,
                  founder support packages and execution
                  services.
                </p>

                <button 
                onClick={() =>
                  window.location.href =
                    "/founder/programs"
                }
                className="mt-6 w-full h-12 rounded-2xl bg-violet-50 text-violet-700 font-semibold hover:bg-violet-100 transition">
                  View Programs
                </button>
              </div>

              {/* RESOURCES */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
                <h2 className="text-2xl font-black text-slate-900">
                  Resources
                </h2>

                <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                  Access startup templates, founder
                  tools, guides and execution
                  frameworks.
                </p>

                <button 
                onClick={() =>
                  window.location.href =
                    "/founder/resources"
                }
                className="mt-6 w-full h-12 rounded-2xl bg-emerald-50 text-emerald-700 font-semibold hover:bg-emerald-100 transition">
                  Browse Resources
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      {mobileSidebar && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() =>
              setMobileSidebar(false)
            }
          />

          <div className="relative w-[260px] h-full bg-white p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-black">
                Founder Panel
              </h2>

              <button
                onClick={() =>
                  setMobileSidebar(false)
                }
              >
                <X />
              </button>
            </div>

            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 rounded-2xl bg-indigo-50 text-indigo-600 font-semibold">
                Dashboard
              </button>

              <button 
               onClick={() =>
                window.location.href =
                  "/founder/advisors"
              }
              className="w-full text-left px-4 py-3 rounded-2xl hover:bg-slate-100">
                Advisors
              </button>

              <button 
              onClick={() =>
                window.location.href =
                  "/founder/investors"
              }
              className="w-full text-left px-4 py-3 rounded-2xl hover:bg-slate-100">
                Investors
              </button>

              <button 
              onClick={() =>
                window.location.href =
                  "/founder/programs"
              }
              className="w-full text-left px-4 py-3 rounded-2xl hover:bg-slate-100">

                Programs
              </button>

              <button 
                onClick={() =>
                  window.location.href =
                    "/founder/resources"
                }
                className="w-full text-left px-4 py-3 rounded-2xl hover:bg-slate-100">

                  Resources
                </button>

            </div>
          </div>
        </div>
      )}

      {/* PROFILE DRAWER */}
      {profileOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() =>
              setProfileOpen(false)
            }
          />

          <div className="relative w-full sm:w-[380px] h-full bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-slate-900">
                Profile
              </h2>

              <button
                onClick={() =>
                  setProfileOpen(false)
                }
              >
                <X />
              </button>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white flex items-center justify-center text-3xl font-black">
                K
              </div>

              <h3 className="mt-4 text-2xl font-black text-slate-900">
                Krishna Shah
              </h3>

              <p className="text-slate-500">
                Founder
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-sm text-slate-500">
                  Email
                </p>

                <h4 className="font-semibold text-slate-800 mt-1">
                  krishna@gmail.com
                </h4>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-sm text-slate-500">
                  Startup
                </p>

                <h4 className="font-semibold text-slate-800 mt-1">
                  Startup Ka Mall
                </h4>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-sm text-slate-500">
                  Stage
                </p>

                <h4 className="font-semibold text-slate-800 mt-1">
                  Early Validation
                </h4>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <button className="w-full h-12 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white font-semibold">
                Edit Profile
              </button>

              <button className="w-full h-12 rounded-2xl border border-red-200 text-red-500 font-semibold">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}