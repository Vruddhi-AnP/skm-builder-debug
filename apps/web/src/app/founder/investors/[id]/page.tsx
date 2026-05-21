"use client";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function InvestorProfilePage() {
  const router = useRouter();

  const params = useParams();

  const investors: any = {
    "arjun-capital": {
      name: "Arjun Mehta",
      firm: "Apex Capital",
      stage: "Seed Investor",
      industries: [
        "SaaS",
        "AI",
        "Fintech",
      ],
      ticket: "₹25L - ₹2Cr",
      about:
        "Arjun actively invests in early-stage SaaS and AI startups with strong execution-focused founding teams.",
      portfolio:
        "18 Startup Investments",
      availability:
        "Actively Investing",
      initials: "A",
    },

    "neha-ventures": {
      name: "Neha Kapoor",
      firm: "Vision Ventures",
      stage: "Pre-Seed Investor",
      industries: [
        "D2C",
        "Consumer",
        "Branding",
      ],
      ticket: "₹10L - ₹75L",
      about:
        "Neha supports founder-first startups focused on consumer growth and scalable branding systems.",
      portfolio:
        "32 Founder Investments",
      availability:
        "Open For Pitches",
      initials: "N",
    },

    "rahul-fund": {
      name: "Rahul Sharma",
      firm: "ScaleX Fund",
      stage: "Series A Investor",
      industries: [
        "Growth",
        "SaaS",
        "Technology",
      ],
      ticket: "₹1Cr - ₹10Cr",
      about:
        "Rahul partners with scalable technology startups and helps founders optimize growth and expansion.",
      portfolio:
        "50+ Startup Portfolio",
      availability:
        "Available This Month",
      initials: "R",
    },

    "priya-angels": {
      name: "Priya Verma",
      firm: "Launch Angels",
      stage: "Angel Investor",
      industries: [
        "Women-led",
        "AI",
        "EdTech",
      ],
      ticket: "₹5L - ₹50L",
      about:
        "Priya invests in founder-led startups focused on innovation, AI and education ecosystems.",
      portfolio:
        "22 Angel Investments",
      availability:
        "Accepting Applications",
      initials: "P",
    },
  };

  const investor =
    investors[
      params.id as keyof typeof investors
    ];

  if (!investor) {
    return (
      <main className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">
        <div className="bg-white rounded-[32px] border border-slate-200 p-10 text-center max-w-xl">
          <h1 className="text-4xl font-black text-slate-900">
            Investor Not Found
          </h1>

          <button
            onClick={() =>
              router.push(
                "/founder/investors"
              )
            }
            className="mt-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 text-white px-7 py-4 rounded-2xl font-semibold"
          >
            Back To Investors
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-8">

        {/* HERO */}
        <section className="relative overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] shadow-[0_15px_60px_rgba(59,130,246,0.12)] p-6 md:p-8 lg:p-10">

          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-25" />

          <div className="relative z-10 flex flex-col xl:flex-row xl:justify-between gap-10">

            {/* LEFT */}
            <div className="flex flex-col md:flex-row gap-6">

              <div className="w-28 h-28 rounded-[28px] bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-500 flex items-center justify-center text-5xl font-black text-white shadow-lg shadow-cyan-500/25">
                {investor.initials}
              </div>

              <div>

                <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-semibold mb-5">
                  {
                    investor.availability
                  }
                </div>

                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
                  {investor.name}
                </h1>

                <p className="text-lg text-slate-500 mt-3">
                  {investor.firm}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {investor.industries.map(
                    (
                      item: string,
                      index: number
                    ) => (
                      <button
                        key={index}
                        className="px-4 py-2 rounded-2xl bg-cyan-50 text-cyan-700 text-sm border border-cyan-100 font-medium hover:bg-cyan-100 transition"
                      >
                        {item}
                      </button>
                    )
                  )}

                </div>

                <div className="mt-6 text-sm text-slate-500">
                  {investor.stage}
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="w-full xl:w-[320px] space-y-4">

              <button
                onClick={() =>
                  router.push(
                    "/founder/programs"
                  )
                }
                className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 text-white px-6 py-4 rounded-2xl font-semibold"
              >
                Connect Investor
              </button>

              <button
                onClick={() =>
                  router.push(
                    "/founder/resources"
                  )
                }
                className="w-full border border-cyan-100 bg-white text-slate-700 px-6 py-4 rounded-2xl hover:bg-cyan-50 transition font-semibold"
              >
                Funding Resources
              </button>

              <button
                onClick={() =>
                  router.push(
                    "/founder/investors"
                  )
                }
                className="w-full border border-slate-200 bg-white text-slate-700 px-6 py-4 rounded-2xl hover:bg-slate-50 transition font-semibold"
              >
                Back To Investors
              </button>

            </div>

          </div>

        </section>

        {/* GRID */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="xl:col-span-2 space-y-6">

            {/* ABOUT */}
            <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] p-6 md:p-8 shadow-sm">

              <h2 className="text-3xl font-black text-slate-900">
                About Investor
              </h2>

              <p className="text-slate-500 leading-relaxed mt-5">
                {investor.about}
              </p>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="rounded-[32px] border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-500">
                  Ticket Size
                </p>

                <h3 className="text-3xl font-black text-slate-900 mt-3">
                  {investor.ticket}
                </h3>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-500">
                  Portfolio
                </p>

                <h3 className="text-3xl font-black text-slate-900 mt-3">
                  {
                    investor.portfolio
                  }
                </h3>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] p-6 shadow-sm">

              <h2 className="text-2xl font-black text-slate-900">
                Investment Focus
              </h2>

              <p className="text-slate-500 mt-4 leading-relaxed">
                Interested in scalable
                startups with strong
                execution-focused founding
                teams and long-term market
                potential.
              </p>

            </div>

            <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] p-6 shadow-sm">

              <h2 className="text-2xl font-black text-slate-900">
                Founder Support
              </h2>

              <button
                onClick={() =>
                  router.push(
                    "/founder/resources"
                  )
                }
                className="w-full mt-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 text-white px-6 py-4 rounded-2xl font-semibold"
              >
                Explore Resources
              </button>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}