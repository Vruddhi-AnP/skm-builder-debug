"use client";

import { useState } from "react";

import { LogOut } from "lucide-react";

import { useRouter } from "next/navigation";

import {
  Award,
  Edit3,
  Globe,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminStatCard from "@/components/admin/AdminStatCard";

const stats = [
  {
    title: "Programs Managed",
    value: "9",
  },
  {
    title: "Platform Members",
    value: "524",
  },
  {
    title: "Active Requests",
    value: "37",
  },
  {
    title: "Resources Published",
    value: "84",
  },
];

export default function AdminProfilePage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

    const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <AdminSidebar
            mobile
            onClose={() =>
              setSidebarOpen(false)
            }
          />

          <div
            className="flex-1 bg-black/20 backdrop-blur-sm"
            onClick={() =>
              setSidebarOpen(false)
            }
          />
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <AdminSidebar />

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* HEADER */}
        <AdminHeader
          title="Admin Profile"
          subtitle="Manage administrator profile and platform access"
          onMenuClick={() =>
            setSidebarOpen(true)
          }
        />

        {/* CONTENT */}
        <main className="flex-1 p-5 lg:p-7 overflow-x-hidden">
          {/* PROFILE HERO */}
          <section className="rounded-[32px] border border-[#E8EDF5] bg-[#F7F4EE]/95 p-6 lg:p-8 shadow-sm">
            <div className="flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between gap-8">
              {/* LEFT */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* AVATAR */}
                <div className="h-28 w-28 rounded-[32px] bg-linear-to-r from-sky-500 to-blue-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl shadow-sky-500/20 shrink-0">
                  A
                </div>

                {/* INFO */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">
                      Admin Team
                    </h2>

                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Active
                    </span>
                  </div>

                  <p className="mt-3 text-[16px] text-[#64748B] max-w-2xl leading-relaxed">
                    Platform Operations &
                    Ecosystem Management
                  </p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 text-sm text-[#475569]">
                    <div className="flex items-center gap-2 rounded-2xl border border-[#E8EDF5] bg-white/70 px-4 py-3">
                      <Mail className="w-4 h-4 text-sky-500 shrink-0" />

                      <span className="truncate">
                        admin@startupkamall.com
                      </span>
                    </div>

                    <div className="flex items-center gap-2 rounded-2xl border border-[#E8EDF5] bg-white/70 px-4 py-3">
                      <Phone className="w-4 h-4 text-emerald-500 shrink-0" />

                      <span>
                        +91 98765 43210
                      </span>
                    </div>

                    <div className="flex items-center gap-2 rounded-2xl border border-[#E8EDF5] bg-white/70 px-4 py-3">
                      <MapPin className="w-4 h-4 text-orange-500 shrink-0" />

                      <span>
                        Mumbai, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <div className="flex flex-wrap gap-3">
                <button className="h-12 px-6 rounded-full border border-[#E8EDF5] bg-white text-sm font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all duration-200 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  View Activity
                </button>

                <button className="h-12 px-6 rounded-full bg-[#071133] text-white text-sm font-semibold hover:bg-[#0B173F] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#071133]/20">
                  <Edit3 className="w-4 h-4" />
                  Edit Profile
                </button>

              <button
                onClick={() => {
                  localStorage.clear();

                  sessionStorage.clear();

                  router.push("/login");
                }}
                className="h-12 px-6 rounded-full border border-red-100 bg-red-50 text-sm font-semibold text-red-600 hover:bg-red-100 transition-all duration-200 flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />

                Logout
              </button>

              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {stats.map((item) => (
              <AdminStatCard
                key={item.title}
                title={item.title}
                value={item.value}
                icon={Award}
                iconColor="text-sky-500"
              />
            ))}
          </section>

          {/* DETAILS */}
          <section className="mt-7 grid grid-cols-1 2xl:grid-cols-2 gap-5">
            {/* ABOUT */}
            <div className="rounded-[30px] border border-[#E8EDF5] bg-[#F7F4EE]/95 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-sky-100 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-sky-600" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    About
                  </h3>

                  <p className="text-sm text-[#64748B] mt-1">
                    Administrative overview
                  </p>
                </div>
              </div>

              <p className="mt-6 text-[15px] leading-relaxed text-[#475569]">
                Responsible for
                managing the Startup Ka
                Mall ecosystem,
                including founder
                onboarding, advisor
                coordination, investor
                engagement, startup
                programs and platform
                operations.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#EDF1F7] pb-4 gap-5">
                  <span className="text-sm text-[#64748B]">
                    Role
                  </span>

                  <span className="font-semibold text-[#0F172A] text-right">
                    Super Admin
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#EDF1F7] pb-4 gap-5">
                  <span className="text-sm text-[#64748B]">
                    Access Level
                  </span>

                  <span className="font-semibold text-[#0F172A] text-right">
                    Full Platform Access
                  </span>
                </div>

                <div className="flex items-center justify-between gap-5">
                  <span className="text-sm text-[#64748B]">
                    Joined
                  </span>

                  <span className="font-semibold text-[#0F172A] text-right">
                    January 2026
                  </span>
                </div>
              </div>
            </div>

            {/* PLATFORM ACCESS */}
            <div className="rounded-[30px] border border-[#E8EDF5] bg-[#F7F4EE]/95 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-emerald-600" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    Platform Access
                  </h3>

                  <p className="text-sm text-[#64748B] mt-1">
                    Administrative permissions
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  "Founder & advisor management",
                  "Program application review",
                  "Investor interest tracking",
                  "Resource management",
                  "Platform operations monitoring",
                  "Consultation coordination",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[#EDF1F7] bg-white/70 px-4 py-4"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />

                    <p className="text-sm font-medium text-[#0F172A]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <button className="mt-6 h-12 w-full rounded-2xl bg-[#071133] text-white text-sm font-semibold hover:bg-[#0B173F] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#071133]/20">
                View Admin Activity
                <Globe className="w-4 h-4" />
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}