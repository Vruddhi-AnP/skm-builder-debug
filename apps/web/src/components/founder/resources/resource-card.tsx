"use client";

import Link from "next/link";

import { Resource } from "@/types/resource";

interface Props {
  resource: Resource;
}

export default function ResourceCard({
  resource,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-border/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(14,165,233,0.12)]">

      <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-cyan-100 blur-3xl opacity-40" />

      <div className="relative z-10">

        {/* TOP */}
        <div className="flex items-start justify-between gap-4">

          <div>

            <div className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
              {resource.category}
            </div>

            <Link
              href={`/founder/resources/${resource.id}`}
              className="mt-5 block text-3xl font-black tracking-tight text-slate-800 transition hover:text-sky-600"
            >
              {resource.title}
            </Link>

          </div>

          <div className="inline-flex h-fit items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            {
              resource.availabilityStatus
            }
          </div>

        </div>

        <p className="mt-5 leading-7 text-slate-500">
          {resource.description}
        </p>

        {/* STATS */}
        <div className="mt-8 grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-slate-50 p-4">

            <p className="text-xs text-slate-500">
              Format
            </p>

            <h3 className="mt-2 text-lg font-black text-slate-800">
              {resource.format}
            </h3>

          </div>

          <div className="rounded-2xl bg-slate-50 p-4">

            <p className="text-xs text-slate-500">
              Access
            </p>

            <h3 className="mt-2 text-lg font-black text-slate-800">
              {
                resource.accessType
              }
            </h3>

          </div>

        </div>

        {/* META */}
        <div className="mt-6 flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500">
              Read Time
            </p>

            <p className="mt-1 text-sm font-medium text-slate-700">
              {resource.readTime}
            </p>

          </div>

          <div className="text-right">

            <p className="text-sm text-slate-500">
              Founders
            </p>

            <p className="mt-1 text-sm font-medium text-slate-700">
              {
                resource.founderCount
              }+
            </p>

          </div>

        </div>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <button className="flex-1 rounded-2xl bg-primary px-5 py-3.5 font-semibold text-white transition hover:opacity-90">
            Access Resource
          </button>

          <Link
            href="#"
            className="flex-1 rounded-2xl border border-border/60 bg-slate-50 px-5 py-3.5 text-center font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            View Details
          </Link>

        </div>
      </div>
    </div>
  );
}