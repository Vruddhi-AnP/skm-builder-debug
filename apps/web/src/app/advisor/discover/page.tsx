"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

import {
  BarChart3,
  Bell,
  Briefcase,
  CalendarDays,
  ChevronRight,
  Filter,
  Flame,
  Globe,
  MapPin,
  Menu,
  Search,
  Sparkles,
  Star,
  User,
  Users,
  Wallet,
  X,
  Check,
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
    active: true,
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
  },
]

const startupsData = [
  {
    id: 1,
    name: "FinVerse AI",
    category: "FinTech",
    stage: "Seed Stage",
    location: "Mumbai, India",
    match: "96%",
    description:
      "AI-powered financial infrastructure helping SMEs automate capital operations.",
    featured: true,
  },
  {
    id: 2,
    name: "HealthSync",
    category: "HealthTech",
    stage: "Pre-Series A",
    location: "Bangalore, India",
    match: "92%",
    description:
      "Digital healthcare ecosystem improving patient engagement and hospital workflows.",
    featured: false,
  },
  {
    id: 3,
    name: "GreenByte",
    category: "ClimateTech",
    stage: "MVP Ready",
    location: "Delhi, India",
    match: "89%",
    description:
      "Sustainable energy optimization platform for industrial operations.",
    featured: true,
  },
  {
    id: 4,
    name: "SkillNova",
    category: "EdTech",
    stage: "Early Revenue",
    location: "Pune, India",
    match: "90%",
    description:
      "Career acceleration platform helping students build startup-ready skills.",
    featured: false,
  },
]

export default function AdvisorDiscoverPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [searchQuery, setSearchQuery] = useState("")

  const [selectedCategory, setSelectedCategory] =
    useState("All")

  const [requestedAdvisory, setRequestedAdvisory] =
    useState<number[]>([])

  const [savedStartups, setSavedStartups] = useState<
    number[]
  >([])

  const categories = [
    "All",
    "FinTech",
    "HealthTech",
    "ClimateTech",
    "EdTech",
  ]

  const filteredStartups = useMemo(() => {
    return startupsData.filter((startup) => {
      const matchesSearch =
        startup.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        startup.category
          .toLowerCase()
          .includes(searchQuery.toLowerCase())

      const matchesCategory =
        selectedCategory === "All" ||
        startup.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-[#f6f8fc] flex">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="w-[270px] bg-white h-full border-r border-[#edf1f7] flex flex-col">
            {/* TOP */}
            <div className="h-20 border-b border-[#edf1f7] flex items-center justify-between px-5">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-[#0f172a]">
                  Startup Ka Mall
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Advisor Workspace
                </p>
              </div>

              <button
                onClick={() => setSidebarOpen(false)}
                className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* NAV */}
            <div className="flex-1 px-4 py-5 space-y-2 overflow-y-auto">
              {navigation.map((item) => {
                const Icon = item.icon

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200 ${
                      item.active
                        ? "bg-[#eef2ff] text-violet-600"
                        : "text-gray-600 hover:bg-[#f8fafc]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />

                    <span className="font-semibold text-[14px]">
                      {item.name}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>

          <div
            className="flex-1 bg-black/20"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* SIDEBAR */}
      <aside className="hidden lg:flex w-[270px] bg-[#fcfcfd] border-r border-[#e9eef5] flex-col">
        {/* LOGO */}
        <div className="h-24 border-b border-[#edf1f7] flex items-center px-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-xl font-bold">
              A
            </div>

            <div>
              <h2 className="text-[24px] font-bold tracking-tight text-[#0f172a] leading-none">
                Startup Ka Mall
              </h2>

              <p className="text-xs text-gray-500 mt-2">
                Advisor Workspace
              </p>
            </div>
          </div>
        </div>

        {/* NAV */}
        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200 ${
                  item.active
                    ? "bg-[#eef2ff] text-violet-600"
                    : "text-gray-600 hover:bg-white"
                }`}
              >
                <Icon className="w-5 h-5" />

                <span className="font-semibold text-[14px]">
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>

        {/* CARD */}
        <div className="p-4">
          <div className="rounded-[28px] border border-violet-200 bg-white p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-violet-500">
              Startup Matches
            </p>

            <h3 className="mt-3 text-4xl font-bold text-[#0f172a]">
              128
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Curated founder opportunities
            </p>

            <div className="mt-5 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
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
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden h-11 w-11 rounded-xl bg-white border border-[#edf1f7] flex items-center justify-center"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div>
              <h1 className="text-[28px] font-bold tracking-tight text-[#0f172a] leading-none">
                Discover Startups
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Explore curated founder opportunities
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative h-12 w-12 rounded-2xl border border-[#edf1f7] bg-white flex items-center justify-center hover:bg-[#fafafa] transition">
              <Bell className="w-5 h-5 text-gray-700" />
            </button>

            <Link
              href="/advisor/profile"
              className="h-12 px-3 rounded-2xl border border-[#edf1f7] bg-white flex items-center gap-3 hover:bg-[#fafafa] transition"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">
                K
              </div>

              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-[#0f172a]">
                  Krishna Shah
                </p>

                <p className="text-xs text-gray-500">
                  Platinum Advisor
                </p>
              </div>
            </Link>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 p-5 lg:p-7 overflow-x-hidden">
          {/* HERO */}
          <section className="rounded-[36px] border border-[#e8edf5] bg-white p-6 lg:p-8">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">
                  <Sparkles className="w-4 h-4 text-violet-600" />

                  <span className="text-sm font-semibold text-violet-700">
                    AI Curated Matches
                  </span>
                </div>

                <h2 className="mt-6 text-4xl lg:text-5xl font-bold tracking-tight text-[#0f172a] leading-[1.1]">
                  Discover High Potential Startups
                </h2>

                <p className="mt-5 text-base leading-relaxed text-gray-500">
                  Find founders aligned with your expertise,
                  mentorship interests and ecosystem experience.
                </p>
              </div>

              {/* SEARCH */}
              <div className="w-full xl:w-[380px]">
                <div className="rounded-[28px] border border-[#e8edf5] bg-[#fafbff] p-5">
                  <div className="flex items-center gap-3 rounded-2xl border border-[#edf1f7] bg-white px-4 h-14">
                    <Search className="w-5 h-5 text-gray-400" />

                    <input
                      value={searchQuery}
                      onChange={(e) =>
                        setSearchQuery(e.target.value)
                      }
                      placeholder="Search startups..."
                      className="flex-1 bg-transparent outline-none text-sm"
                    />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="h-11 rounded-2xl bg-white border border-[#edf1f7] text-sm font-semibold text-gray-700 flex items-center justify-center gap-2">
                      <Filter className="w-4 h-4" />
                      Filters
                    </button>

                    <button className="h-11 rounded-2xl bg-[#0f172a] text-sm font-semibold text-white">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FILTERS */}
          <section className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`h-11 px-5 rounded-2xl text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-violet-500 text-white"
                    : "border border-[#e8edf5] bg-white text-gray-700 hover:bg-[#fafafa]"
                }`}
              >
                {category}
              </button>
            ))}
          </section>

          {/* STARTUPS */}
          <section className="mt-7 grid grid-cols-1 xl:grid-cols-2 gap-5">
            {filteredStartups.map((startup) => (
              <div
                key={startup.id}
                className="rounded-[32px] border border-[#e8edf5] bg-white p-6 hover:shadow-sm transition"
              >
                {/* TOP */}
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl font-bold tracking-tight text-[#0f172a]">
                        {startup.name}
                      </h3>

                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {startup.match} Match
                      </span>

                      {startup.featured && (
                        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        {startup.category}
                      </span>

                      <span>•</span>

                      <span>{startup.stage}</span>

                      <span>•</span>

                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {startup.location}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (
                        savedStartups.includes(startup.id)
                      ) {
                        setSavedStartups((prev) =>
                          prev.filter(
                            (id) => id !== startup.id
                          )
                        )
                      } else {
                        setSavedStartups((prev) => [
                          ...prev,
                          startup.id,
                        ])
                      }
                    }}
                    className={`h-12 w-12 rounded-2xl flex items-center justify-center transition ${
                      savedStartups.includes(startup.id)
                        ? "bg-violet-500"
                        : "bg-violet-50"
                    }`}
                  >
                    <Flame
                      className={`w-5 h-5 ${
                        savedStartups.includes(startup.id)
                          ? "text-white"
                          : "text-violet-600"
                      }`}
                    />
                  </button>
                </div>

                {/* DESC */}
                <p className="mt-6 text-sm leading-relaxed text-gray-500">
                  {startup.description}
                </p>

                {/* FOOTER */}
                <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href={`/advisor/discover/${startup.id}`}
                      className="h-11 px-5 rounded-2xl border border-[#e8edf5] bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center justify-center"
                    >
                      View Details
                    </Link>

                  <button
                    onClick={() => {
                      setRequestedAdvisory((prev) => [
                        ...prev,
                        startup.id,
                      ])
                    }}
                    disabled={requestedAdvisory.includes(
                      startup.id
                    )}
                    className={`h-11 px-5 rounded-2xl text-sm font-semibold transition ${
                      requestedAdvisory.includes(startup.id)
                        ? "bg-emerald-500 text-white"
                        : "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90"
                    }`}
                  >
                    {requestedAdvisory.includes(
                      startup.id
                    ) ? (
                      <span className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        Requested
                      </span>
                    ) : (
                      "Request Advisory"
                    )}
                  </button>

                <Link
                  href={`/advisor/discover/${startup.id}`}
                  className="h-11 px-4 rounded-2xl border border-[#e8edf5] bg-white flex items-center justify-center hover:bg-[#fafafa] transition"
                >
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                </Link>
                </div>
              </div>
            ))}

            {filteredStartups.length === 0 && (
              <div className="col-span-full rounded-[32px] border border-dashed border-[#dbe2ea] bg-white p-16 text-center">
                <h3 className="text-2xl font-bold text-[#0f172a]">
                  No startups found
                </h3>

                <p className="mt-3 text-sm text-gray-500">
                  Try changing filters or search keywords.
                </p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}