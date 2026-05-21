"use client";

import { useRouter } from "next/navigation";

import {
  ArrowRight,
  BookOpen,
  Download,
  FileText,
  PlayCircle,
  Sparkles,
  Video,
} from "lucide-react";

const featuredResources = [
  {
    title: "Startup Pitch Deck Template",
    type: "Template",
    description:
      "Professional investor-ready pitch deck structure for founders.",
    icon: FileText,
    color:
      "from-violet-500 to-fuchsia-500",
  },

  {
    title: "Founder Execution Guide",
    type: "Guide",
    description:
      "Step-by-step startup execution and validation playbook.",
    icon: BookOpen,
    color:
      "from-cyan-500 to-blue-500",
  },

  {
    title: "Fundraising Masterclass",
    type: "Video",
    description:
      "Learn startup fundraising, investor outreach and pitching.",
    icon: PlayCircle,
    color:
      "from-emerald-500 to-teal-500",
  },
];

const learningResources = [
  {
    title: "Startup Validation Framework",
    category: "Execution",
  },

  {
    title: "Investor Readiness Checklist",
    category: "Fundraising",
  },

  {
    title: "Go-To-Market Strategy Guide",
    category: "Growth",
  },

  {
    title: "MVP Planning Workbook",
    category: "Product",
  },
];

export default function FounderResourcesPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#f8fafc] p-4 sm:p-6 lg:p-8">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 md:p-10">
        <div className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-indigo-100 opacity-40 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-semibold text-violet-700">
              Founder Resource Hub
            </div>

            <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              Startup Learning &
              Resource Center
            </h1>

            <p className="mt-5 max-w-2xl leading-relaxed text-slate-500">
              Access startup templates,
              execution frameworks,
              fundraising guides and
              founder-focused learning
              resources to accelerate your
              startup growth journey.
            </p>

            <button
              onClick={() =>
                router.push(
                  "/founder/dashboard"
                )
              }
              className="mt-8 inline-flex h-14 items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-8 font-semibold text-white transition hover:scale-[1.02]"
            >
              Back to Dashboard

              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* SIDE CARD */}
          <div className="w-full xl:w-[340px] rounded-[2rem] bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-[1px]">
            <div className="rounded-[2rem] bg-white p-6">
              <p className="text-sm font-semibold text-slate-600">
                Resource Access
              </p>

              <h2 className="mt-4 text-6xl font-black text-slate-900">
                48
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Premium startup resources
                unlocked
              </p>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mt-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black text-slate-900">
              Featured Resources
            </h2>

            <p className="mt-2 text-slate-500">
              Curated startup execution
              resources and founder
              learning assets.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredResources.map(
            (resource, index) => {
              const Icon =
                resource.icon;

              return (
                <div
                  key={index}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${resource.color} text-white`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="mt-6">
                    <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {resource.type}
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-slate-900">
                      {resource.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-slate-500">
                      {
                        resource.description
                      }
                    </p>

                    <button className="mt-6 inline-flex h-12 items-center gap-2 rounded-2xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800">
                      Access Resource

                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>

      {/* RESOURCE LIST */}
      <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* LEFT */}
        <div className="xl:col-span-2 rounded-[2rem] border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
              <Sparkles className="h-6 w-6" />
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Founder Learning Library
              </h2>

              <p className="text-sm text-slate-500">
                Structured startup
                learning content and
                execution frameworks.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {learningResources.map(
              (item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-200 p-5 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <div className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                      {item.category}
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  <button className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-5 text-sm font-semibold text-white">
                    Open

                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* DOWNLOADS */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <Download className="h-6 w-6" />
            </div>

            <h2 className="mt-6 text-2xl font-black text-slate-900">
              Download Templates
            </h2>

            <p className="mt-3 leading-relaxed text-slate-500">
              Access startup planning,
              fundraising and execution
              templates instantly.
            </p>

            <button className="mt-6 w-full rounded-2xl bg-emerald-50 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-100">
              Browse Templates
            </button>
          </div>

          {/* VIDEO */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
              <Video className="h-6 w-6" />
            </div>

            <h2 className="mt-6 text-2xl font-black text-slate-900">
              Video Learning
            </h2>

            <p className="mt-3 leading-relaxed text-slate-500">
              Watch founder masterclasses,
              execution walkthroughs and
              startup scaling sessions.
            </p>

            <button className="mt-6 w-full rounded-2xl bg-cyan-50 py-3 font-semibold text-cyan-700 transition hover:bg-cyan-100">
              Watch Videos
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}