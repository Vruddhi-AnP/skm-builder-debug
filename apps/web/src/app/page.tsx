"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Globe2,
  Layers3,
  Rocket,
  ShieldCheck,
  Users2,
  BarChart3,
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
    <main className="min-h-screen bg-background text-[#16214A]">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-border/60 bg-[#F7F4EE]/95 backdrop-blur-xl">
        <div className="page-container flex h-24 items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Startup Ka Mall"
              width={180}
              height={60}
              priority
              className="h-[70px] w-auto object-contain"
            />
          </Link>

          {/* LINKS */}
          <div className="hidden items-center gap-10 text-sm font-semibold text-[#6B6B6B] lg:flex">
            <a
              href="#journey"
              className="transition hover:text-[#16214A]"
            >
              Founder Journey
            </a>

            <a
              href="#modules"
              className="transition hover:text-[#16214A]"
            >
              Modules
            </a>

            <a
              href="#ecosystem"
              className="transition hover:text-[#16214A]"
            >
              Ecosystem
            </a>

            <a
              href="#cta"
              className="transition hover:text-[#16214A]"
            >
              Get Started
            </a>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-primary/10 text-primary border-primary/20 sm:flex"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-2xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="page-container py-24 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            
     {/* BADGE */}
      <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-3 shadow-sm">
        <span className="text-sm font-semibold text-primary">
          🇮🇳 Built for Indian Founders
        </span>
      </div>

           <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-[#16214A] md:text-6xl lg:text-7xl">
              Build Your Startup
              <span className="block text-primary">The Right Way</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6B6B6B]">
              Get structured guidance, connect with mentors, and attract investors — 
              all in one place built for early-stage Indian founders.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="rounded-2xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Start Your Journey
              </Link>

              <Link
                href="/login"
                className="rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-8 py-4 font-semibold text-slate-700 transition hover:bg-primary/10 text-primary border-primary/20"
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
                  className="rounded-full border border-border/60 bg-[#F7F4EE]/95 px-5 py-2 text-sm font-medium text-[#6B6B6B]"
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
        className="section-spacing"
      >
        <div className="page-container">
          <div className="text-center">
            <div className="inline-flex rounded-full border border-border/60 bg-primary/10 text-primary border-primary/20 px-5 py-2 text-sm font-semibold text-slate-700">
              Founder Workflow
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-[#16214A]">
              Everything You Need to Launch
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#6B6B6B]">
              From validating your idea to meeting investors — SKM guides you through every step.
            </p>
            
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {founderJourney.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-border/60 bg-[#F7F4EE]/95 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-lg font-black text-white">
                  {item.step}
                </div>

                <h3 className="mt-7 text-2xl font-black text-[#16214A]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[#6B6B6B]">
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
        className="section-spacing"
      >
        <div className="page-container">
          <div className="text-center">
            <div className="inline-flex rounded-full border border-border/60 bg-primary/10 text-primary border-primary/20 px-5 py-2 text-sm font-semibold text-slate-700">
              Platform Modules
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-[#16214A]">
              Core Platform Infrastructure
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#6B6B6B]">
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
                  className="group rounded-3xl border border-border/60 bg-[#F7F4EE]/95 p-8 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-[#16214A]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-[#6B6B6B]">
                    {item.description}
                  </p>

                  <button className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#16214A] transition group-hover:gap-3">
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
        className="section-spacing"
      >
        <div className="page-container">
          <div className="rounded-3xl border border-border/60 bg-[#F7F4EE]/95 p-10 md:p-14">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              {/* LEFT */}
              <div>
                <div className="inline-flex rounded-full border border-border/60 bg-primary/10 text-primary border-primary/20 px-5 py-2 text-sm font-semibold text-slate-700">
                  Founder Ecosystem
                </div>

                <h2 className="mt-6 text-4xl font-black leading-tight text-[#16214A] md:text-5xl">
                  Access Advisors &
                  <br />
                  Execution Support
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-[#6B6B6B]">
                  Collaborate with startup advisors,
                  investors, builders and ecosystem experts
                  through one structured execution platform.
                </p>

                <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="/signup"
                    className="rounded-2xl bg-primary px-7 py-4 font-semibold text-white transition hover:opacity-90"
                  >
                    Join Platform
                  </Link>

                  <Link
                    href="/login"
                    className="rounded-2xl border border-border/60 bg-[#F7F4EE]/95 px-7 py-4 font-semibold text-slate-700 transition hover:bg-primary/10 text-primary border-primary/20"
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
                    className="rounded-3xl border border-border/60 bg-primary/10 text-primary border-primary/20/20 p-6"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                      <Layers3 className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 text-xl font-black text-[#16214A]">
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
      <section className="section-spacing">
        <div className="page-container">
          <div className="text-center">
            <div className="inline-flex rounded-full border border-border/60 bg-primary/10 text-primary border-primary/20 px-5 py-2 text-sm font-semibold text-slate-700">
              Founder Network
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-[#16214A]">
              Trusted By Founders Worldwide
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-border/60 bg-[#F7F4EE]/95 p-10 text-center"
              >
                <h3 className="text-5xl font-black tracking-tight text-[#16214A]">
                  {item.value}
                </h3>

                <p className="mt-4 text-lg font-medium text-[#6B6B6B]">
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
        <div className="page-container">
          <div className="rounded-3xl bg-primary px-10 py-16 text-white md:px-16">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#F7F4EE]/95/10 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                <CheckCircle2 className="h-4 w-4" />
                Startup Execution Platform
              </div>

              <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                Your Startup Journey
                <br />
                Should Not Be Built Alone
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                Build with structure, execution support,
                ecosystem collaboration and investor readiness.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
                <Link
                  href="/signup"
                  className="rounded-2xl bg-[#F7F4EE]/95 px-8 py-4 font-bold text-[#16214A] transition hover:opacity-90"
                >
                  Start Now
                </Link>

                <Link
                  href="/login"
                  className="rounded-2xl border border-white/20 bg-[#F7F4EE]/95/10 px-8 py-4 font-bold backdrop-blur-sm transition hover:bg-[#F7F4EE]/95/20"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-[#F7F4EE]/95">
        <div className="page-container flex flex-col items-center justify-between gap-5 py-8 text-sm text-slate-500 lg:flex-row">
          <p>
            © 2026 Startup Ka Mall. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="transition hover:text-[#16214A]"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="transition hover:text-[#16214A]"
            >
              Signup
            </Link>
          </div>
        </div>

             <div className="border-t border-border/60 px-4 py-4 text-center">
    <p className="mx-auto max-w-4xl text-xs leading-6 text-slate-400">
      Disclaimer: Startup Ka Mall does not guarantee fundraising, investment, business growth or startup success. 
      Platform insights, readiness scores and recommendations are for educational and ecosystem support purposes only.
    </p>
  </div>

      </footer>
    </main>
  );
}