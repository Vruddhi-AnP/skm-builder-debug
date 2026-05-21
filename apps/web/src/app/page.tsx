"use client";

import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Globe2,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

const founderJourney = [
  {
    step: "01",
    title: "Sign Up",
    description:
      "Create your founder account and access the startup ecosystem.",
  },
  {
    step: "02",
    title: "Build Startup",
    description:
      "Structure your startup idea, market and business model.",
  },
  {
    step: "03",
    title: "Connect Experts",
    description:
      "Collaborate with advisors, builders and strategic mentors.",
  },
  {
    step: "04",
    title: "Investor Ready",
    description:
      "Track startup readiness and prepare for fundraising.",
  },
];

const modules = [
  {
    title: "Startup Builder",
    description:
      "Structured founder workflows and startup planning tools.",
    icon: Rocket,
  },
  {
    title: "Advisor Access",
    description:
      "Connect with startup mentors and domain experts.",
    icon: Users2,
  },
  {
    title: "Investor Network",
    description:
      "Increase startup visibility and investor discovery.",
    icon: Globe2,
  },
  {
    title: "Execution Programs",
    description:
      "Access startup programs and execution opportunities.",
    icon: Briefcase,
  },
  {
    title: "Founder Dashboard",
    description:
      "Track startup growth, sessions and platform activity.",
    icon: BarChart3,
  },
  {
    title: "Admin Infrastructure",
    description:
      "Scalable ecosystem management and operational workflows.",
    icon: ShieldCheck,
  },
];

const stats = [
  {
    value: "5000+",
    label: "Founders",
  },
  {
    value: "2500+",
    label: "Startups",
  },
  {
    value: "85%",
    label: "Execution Success",
  },
  {
    value: "$50M+",
    label: "Raised",
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f9fc] text-[#0f172a]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-violet-200/40 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-[20%] h-[420px] w-[420px] rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-[30%] h-[420px] w-[420px] rounded-full bg-fuchsia-200/30 blur-3xl" />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/40 bg-white/75 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 text-xl font-black text-white shadow-xl shadow-indigo-200">
              S
            </div>

            <div>
              <h1 className="text-lg font-black tracking-tight">
                Startup Ka Mall
              </h1>

              <p className="text-sm text-slate-500">
                Startup Ecosystem Platform
              </p>
            </div>
          </Link>

          {/* LINKS */}
          <div className="hidden items-center gap-10 text-sm font-semibold text-slate-600 lg:flex">
            <a
              href="#journey"
              className="transition hover:text-indigo-600"
            >
              Founder Journey
            </a>

            <a
              href="#modules"
              className="transition hover:text-indigo-600"
            >
              Modules
            </a>

            <a
              href="#ecosystem"
              className="transition hover:text-indigo-600"
            >
              Ecosystem
            </a>

            <a
              href="#cta"
              className="transition hover:text-indigo-600"
            >
              Get Started
            </a>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:bg-slate-50 sm:flex"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-indigo-200 transition hover:scale-[1.02]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-violet-100 bg-white/80 px-5 py-3 shadow-lg shadow-violet-100 backdrop-blur-xl">

              <span className="text-sm font-semibold text-slate-700">
                Startup ecosystem platform for founders,
                investors & advisors
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
              Build Your Startup
              <br />
              With Structure,
              <br />
              Clarity & Execution
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 lg:text-xl">
              A premium startup ecosystem platform helping
              founders move from idea validation to execution,
              advisor collaboration and investor readiness.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 px-8 py-4 font-semibold text-white shadow-2xl shadow-indigo-200 transition hover:scale-[1.02]"
              >
                Start Your Journey
              </Link>

              <Link
                href="/login"
                className="rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                Explore Platform
              </Link>
            </div>

            {/* TAGS */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {[
                "Founder-first",
                "Execution focused",
                "Investor-ready",
              ].map((tag) => (
                <div
                  key={tag}
                  className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-600 shadow-sm"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section
        id="journey"
        className="py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center">
            <div className="inline-flex rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
              Founder Workflow
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
              Your Founder Journey
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              Structured startup workflows designed for
              execution, collaboration and investor readiness.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {founderJourney.map((item) => (
              <div
                key={item.step}
                className="rounded-[32px] border border-white/60 bg-white/90 p-8 shadow-lg shadow-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.12)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 text-lg font-black text-white shadow-lg shadow-indigo-200">
                  {item.step}
                </div>

                <h3 className="mt-7 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section
        id="modules"
        className="py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center">
            <div className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
              Platform Modules
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
              Core Platform Infrastructure
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              Modern startup infrastructure built for
              ecosystem collaboration and scalable founder
              support.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[32px] border border-white/60 bg-white/90 p-8 shadow-lg shadow-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.12)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 text-white shadow-xl shadow-indigo-200">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-7 text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-600">
                    {item.description}
                  </p>

                  <button className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition group-hover:gap-3">
                    Explore Module
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section
        id="ecosystem"
        className="py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="overflow-hidden rounded-[40px] border border-white/60 bg-white/90 p-10 shadow-[0_20px_80px_rgba(99,102,241,0.10)] backdrop-blur-2xl md:p-14">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              {/* LEFT */}
              <div>
                <div className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
                  Founder Ecosystem
                </div>

                <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
                  Access Advisors &
                  <br />
                  Execution Support
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  Collaborate with startup advisors,
                  investors, builders and ecosystem experts
                  through one structured execution platform.
                </p>

                <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="/signup"
                    className="rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 px-7 py-4 font-semibold text-white shadow-xl shadow-indigo-200 transition hover:scale-[1.02]"
                  >
                    Join Platform
                  </Link>

                  <Link
                    href="/login"
                    className="rounded-2xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                  >
                    Explore Programs
                  </Link>
                </div>
              </div>

              {/* RIGHT */}
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  "Startup Programs",
                  "Advisor Sessions",
                  "Investor Discovery",
                  "Founder Networking",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[28px] border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-6"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 text-white shadow-lg shadow-indigo-200">
                      <Layers3 className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 text-xl font-black">
                      {item}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-500">
                      Structured collaboration and scalable
                      startup support.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center">
            <div className="inline-flex rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
              Founder Network
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
              Trusted By Founders Worldwide
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[32px] border border-white/60 bg-white/90 p-10 text-center shadow-lg shadow-slate-100"
              >
                <h3 className="bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 bg-clip-text text-5xl font-black text-transparent">
                  {item.value}
                </h3>

                <p className="mt-4 text-lg font-medium text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="pb-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[42px] bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 px-10 py-16 text-white shadow-[0_30px_90px_rgba(99,102,241,0.35)] md:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)] opacity-20" />

            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-xl">
                <CheckCircle2 className="h-4 w-4" />
                Startup Execution Platform
              </div>

              <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                Your Startup Journey
                <br />
                Should Not Be Built Alone
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-indigo-100">
                Build with structure, execution support,
                ecosystem collaboration and investor readiness.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
                <Link
                  href="/signup"
                  className="rounded-2xl bg-white px-8 py-4 font-bold text-indigo-600 shadow-xl transition hover:scale-[1.02]"
                >
                  Start Now
                </Link>

                <Link
                  href="/login"
                  className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-bold backdrop-blur-xl transition hover:bg-white/20"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/40 bg-white/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:px-10">
          <p>
            © 2026 Startup Ka Mall. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="transition hover:text-indigo-600"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="transition hover:text-indigo-600"
            >
              Signup
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}