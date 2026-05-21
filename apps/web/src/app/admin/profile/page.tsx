"use client"

import Link from "next/link"

import {
  Award,
  BarChart3,
  Bell,
  Briefcase,
  CalendarDays,
  Edit3,
  FileText,
  Flame,
  FolderOpen,
  Globe,
  LayoutDashboard,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Consultations",
    href: "/admin/consultations",
    icon: CalendarDays,
  },
  {
    name: "Investor Interests",
    href: "/admin/investor-interests",
    icon: Wallet,
  },
  {
    name: "Program Applications",
    href: "/admin/program-applications",
    icon: FileText,
  },
  {
    name: "Founders",
    href: "/admin/founders",
    icon: Users,
  },
  {
    name: "Advisors",
    href: "/admin/advisors",
    icon: UserCheck,
  },
  {
    name: "Investors",
    href: "/admin/investors",
    icon: Flame,
  },
  {
    name: "Programs",
    href: "/admin/programs",
    icon: BarChart3,
  },
  {
    name: "Resources",
    href: "/admin/resources",
    icon: FolderOpen,
  },
  {
    name: "Profile",
    href: "/admin/profile",
    icon: ShieldCheck,
    active: true,
  },
]

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
]

export default function AdminProfilePage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] flex">
      {/* SIDEBAR */}
      <aside className="hidden lg:flex w-[270px] bg-white border-r border-[#e9eef5] flex-col">
        {/* TOP */}
        <div className="h-20 border-b border-[#edf1f7] px-6 flex items-center">
          <div>
            <h2 className="text-[26px] font-bold text-[#0f172a]">
              Startup Ka Mall
            </h2>

            <p className="text-xs text-gray-500 mt-2">
              Admin Workspace
            </p>
          </div>
        </div>

        {/* NAV */}
        <div className="flex-1 px-4 py-5 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`h-12 px-4 rounded-2xl flex items-center gap-3 transition ${
                  item.active
                    ? "bg-gradient-to-r from-sky-500 to-blue-500 text-white"
                    : "text-[#475569] hover:bg-[#f8fafc]"
                }`}
              >
                <Icon className="w-4 h-4" />

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
        <header className="h-20 border-b border-[#edf1f7] bg-[#f5f7fb]/90 backdrop-blur-xl px-5 lg:px-8 flex items-center justify-between sticky top-0 z-30">
          <div>
            <h1 className="text-[28px] font-bold text-[#0f172a]">
              Admin Profile
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage administrator profile and platform access
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <button className="h-11 w-11 rounded-2xl border border-[#edf1f7] bg-white flex items-center justify-center">
              <Bell className="w-5 h-5 text-[#475569]" />
            </button>

            <div className="h-11 w-11 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 p-5 lg:p-7 overflow-x-hidden">
          {/* PROFILE CARD */}
          <section className="rounded-[32px] border border-[#e8edf5] bg-white p-6 lg:p-8">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
              {/* LEFT */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                {/* AVATAR */}
                <div className="h-28 w-28 rounded-[32px] bg-gradient-to-r from-sky-500 to-blue-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-sky-100">
                  A
                </div>

                {/* INFO */}
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="text-4xl font-bold text-[#0f172a]">
                      Admin Team
                    </h2>

                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Active
                    </span>
                  </div>

                  <p className="mt-3 text-[16px] text-[#64748b]">
                    Platform Operations & Ecosystem Management
                  </p>

                  <div className="mt-5 flex flex-wrap gap-4 text-sm text-[#475569]">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      admin@startupkamall.com
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      +91 98765 43210
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Mumbai, India
                    </div>
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <div>
                <button className="h-12 px-6 rounded-full bg-[#071133] text-white text-sm font-semibold hover:bg-[#0b173f] transition flex items-center gap-2">
                  <Edit3 className="w-4 h-4" />
                  Edit Profile
                </button>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="mt-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {stats.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#e8edf5] bg-white p-5"
              >
                <p className="text-sm text-[#64748b]">
                  {item.title}
                </p>

                <h3 className="mt-4 text-4xl font-bold text-[#0f172a]">
                  {item.value}
                </h3>
              </div>
            ))}
          </section>

          {/* DETAILS */}
          <section className="mt-7 grid grid-cols-1 xl:grid-cols-2 gap-5">
            {/* ABOUT */}
            <div className="rounded-[30px] border border-[#e8edf5] bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-sky-100 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-sky-600" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a]">
                    About
                  </h3>

                  <p className="text-sm text-[#64748b] mt-1">
                    Administrative overview
                  </p>
                </div>
              </div>

              <p className="mt-6 text-[15px] leading-relaxed text-[#475569]">
                Responsible for managing the Startup Ka Mall ecosystem,
                including founder onboarding, advisor coordination,
                investor engagement, startup programs and platform
                operations.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#edf1f7] pb-4">
                  <span className="text-sm text-[#64748b]">
                    Role
                  </span>

                  <span className="font-semibold text-[#0f172a]">
                    Super Admin
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#edf1f7] pb-4">
                  <span className="text-sm text-[#64748b]">
                    Access Level
                  </span>

                  <span className="font-semibold text-[#0f172a]">
                    Full Platform Access
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#64748b]">
                    Joined
                  </span>

                  <span className="font-semibold text-[#0f172a]">
                    January 2026
                  </span>
                </div>
              </div>
            </div>

            {/* PLATFORM ACCESS */}
            <div className="rounded-[30px] border border-[#e8edf5] bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-emerald-600" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a]">
                    Platform Access
                  </h3>

                  <p className="text-sm text-[#64748b] mt-1">
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
                    className="flex items-center gap-3 rounded-2xl border border-[#edf1f7] px-4 py-4"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

                    <p className="text-sm font-medium text-[#0f172a]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <button className="mt-6 h-12 w-full rounded-2xl bg-[#071133] text-white text-sm font-semibold hover:bg-[#0b173f] transition flex items-center justify-center gap-2">
                View Admin Activity
                <Globe className="w-4 h-4" />
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}