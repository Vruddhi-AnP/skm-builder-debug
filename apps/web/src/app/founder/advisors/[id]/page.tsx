"use client";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function AdvisorProfilePage() {
  const router = useRouter();

  const params = useParams();

  const advisors: any = {
    "rahul-mehta": {
      name: "Rahul Mehta",
      role: "Startup Strategy Advisor",
      expertise: [
        "SaaS",
        "GTM Strategy",
        "Startup Validation",
      ],
      experience:
        "12+ Years Experience",
      about:
        "Rahul helps early-stage founders with startup validation, go-to-market strategy and execution planning. He has worked with multiple SaaS startups and founder teams across India.",
      startups: "45+ Startups",
      sessions: "300+ Sessions",
      availability:
        "Available This Week",
      initials: "R",
    },

    "priya-sharma": {
      name: "Priya Sharma",
      role: "Fundraising Mentor",
      expertise: [
        "Fundraising",
        "Investor Readiness",
        "Pitch Decks",
      ],
      experience: "Ex-VC Partner",
      about:
        "Priya mentors startup founders on fundraising preparation, investor communication and pitch strategy. She has supported multiple seed-stage startups.",
      startups: "60+ Startups",
      sessions: "500+ Sessions",
      availability:
        "2 Slots Available",
      initials: "P",
    },

    "aman-verma": {
      name: "Aman Verma",
      role: "Product & MVP Expert",
      expertise: [
        "Product Strategy",
        "MVP Building",
        "Execution",
      ],
      experience:
        "Built 3 Startups",
      about:
        "Aman helps startup founders structure MVP execution, product-market fit and founder workflows for scalable startup execution.",
      startups: "30+ Startups",
      sessions: "180+ Sessions",
      availability:
        "Available Tomorrow",
      initials: "A",
    },

    "neha-kapoor": {
      name: "Neha Kapoor",
      role: "Growth Advisor",
      expertise: [
        "Growth",
        "Branding",
        "User Acquisition",
      ],
      experience:
        "Startup Growth Consultant",
      about:
        "Neha specializes in startup growth systems, founder branding and customer acquisition strategies for modern startups.",
      startups: "50+ Startups",
      sessions: "420+ Sessions",
      availability:
        "Open for Consultation",
      initials: "N",
    },
  };

  const advisor =
    advisors[
      params.id as keyof typeof advisors
    ];

  if (!advisor) {
    return (
      <main className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">
        <div className="bg-white rounded-[32px] border border-slate-200 p-10 text-center max-w-xl">
          <h1 className="text-4xl font-black text-slate-900">
            Advisor Not Found
          </h1>

          <p className="text-slate-500 mt-4 leading-relaxed">
            The advisor profile you are
            looking for does not exist.
          </p>

          <button
            onClick={() =>
              router.push(
                "/founder/advisors"
              )
            }
            className="mt-8 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 text-white px-7 py-4 rounded-2xl font-semibold hover:scale-[1.02] transition"
          >
            Back To Advisors
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-8">
        {/* TOP */}
        <section className="relative overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] shadow-[0_15px_60px_rgba(99,102,241,0.12)] p-6 md:p-8 lg:p-10">
          {/* BG */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-25 pointer-events-none" />

          <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-200 rounded-full blur-3xl opacity-25 pointer-events-none" />

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-start xl:justify-between gap-10">
            {/* LEFT */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* AVATAR */}
              <div className="w-28 h-28 rounded-[28px] bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 flex items-center justify-center text-5xl font-black text-white shadow-[0_20px_50px_rgba(99,102,241,0.35)] shrink-0">
                {advisor.initials}
              </div>

              {/* INFO */}
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold mb-5">
                  {advisor.availability}
                </div>

                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
                  {advisor.name}
                </h1>

                <p className="text-lg text-slate-500 mt-3">
                  {advisor.role}
                </p>

                {/* EXPERTISE */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {advisor.expertise.map(
                    (
                      item: string,
                      index: number
                    ) => (
                      <button
                        key={index}
                        className="px-4 py-2 rounded-2xl bg-indigo-50 text-indigo-700 text-sm border border-indigo-100 font-medium hover:bg-indigo-100 transition"
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>

                {/* EXPERIENCE */}
                <div className="mt-6 text-sm text-slate-500">
                  {advisor.experience}
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
                className="w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 text-white px-6 py-4 rounded-2xl hover:scale-[1.01] transition-all duration-300 font-semibold shadow-[0_10px_40px_rgba(99,102,241,0.35)]"
              >
                Book Consultation
              </button>

              <button
                onClick={() =>
                  router.push(
                    "/founder/resources"
                  )
                }
                className="w-full border border-indigo-100 bg-white/80 backdrop-blur-xl text-slate-700 px-6 py-4 rounded-2xl hover:bg-indigo-50 transition-all duration-300 font-semibold"
              >
                View Resources
              </button>

              <button
                onClick={() =>
                  router.push(
                    "/founder/dashboard"
                  )
                }
                className="w-full border border-slate-200 bg-white text-slate-700 px-6 py-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 font-semibold"
              >
                Back To Dashboard
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
                About Advisor
              </h2>

              <p className="text-slate-500 leading-relaxed mt-5">
                {advisor.about}
              </p>
            </div>

            {/* EXPERIENCE */}
            <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] p-6 md:p-8 shadow-sm">
              <h2 className="text-3xl font-black text-slate-900">
                Experience & Mentorship
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm text-slate-500">
                    Experience
                  </p>

                  <h3 className="text-3xl font-black text-slate-900 mt-3">
                    12+
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Years
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm text-slate-500">
                    Startups
                  </p>

                  <h3 className="text-3xl font-black text-slate-900 mt-3">
                    {
                      advisor.startups
                    }
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Mentored
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm text-slate-500">
                    Sessions
                  </p>

                  <h3 className="text-3xl font-black text-slate-900 mt-3">
                    {
                      advisor.sessions
                    }
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Completed
                  </p>
                </div>
              </div>
            </div>

            {/* STARTUP SUPPORT */}
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-50 via-violet-50 to-cyan-50 border border-white/50 p-6 md:p-8 shadow-sm">
              <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-20" />

              <div className="relative z-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 border border-white text-slate-700 text-xs font-semibold mb-5 shadow-sm">
                  Founder Guidance
                </div>

                <h2 className="text-3xl font-black text-slate-900">
                  Personalized Startup Mentorship
                </h2>

                <p className="text-slate-500 leading-relaxed mt-5 max-w-2xl">
                  Get actionable startup
                  execution guidance, founder
                  support and strategic
                  mentoring sessions to scale
                  your startup effectively.
                </p>

                <button
                  onClick={() =>
                    router.push(
                      "/founder/programs"
                    )
                  }
                  className="mt-8 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 text-white px-7 py-4 rounded-2xl hover:scale-[1.02] transition font-semibold shadow-[0_10px_40px_rgba(99,102,241,0.35)]"
                >
                  Start Mentorship
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* SESSION */}
            <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] p-6 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900">
                Session Availability
              </h2>

              <div className="mt-6 rounded-3xl bg-slate-50 p-5 border border-slate-100">
                <p className="text-sm text-slate-500">
                  Next Available Session
                </p>

                <h3 className="text-2xl font-black text-slate-900 mt-3">
                  Saturday • 7 PM
                </h3>

                <p className="text-sm text-slate-500 mt-3">
                  1:1 Founder Strategy Call
                </p>
              </div>

              <button
                onClick={() =>
                  router.push(
                    "/founder/programs"
                  )
                }
                className="w-full mt-6 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 text-white px-6 py-4 rounded-2xl hover:scale-[1.01] transition-all duration-300 font-semibold"
              >
                Schedule Session
              </button>
            </div>

            {/* SUPPORT */}
            <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] p-6 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900">
                Founder Support
              </h2>

              <p className="text-slate-500 mt-4 leading-relaxed">
                Need help selecting the
                right startup mentor? Our
                founder support team can
                help you plan your startup
                roadmap.
              </p>

              <button
                onClick={() =>
                  router.push(
                    "/founder/resources"
                  )
                }
                className="w-full mt-6 border border-indigo-100 bg-white/80 backdrop-blur-xl text-slate-700 px-6 py-4 rounded-2xl hover:bg-indigo-50 transition-all duration-300 font-semibold"
              >
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}