"use client";

export default function ProfileForm() {
  return (
    <div className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm md:p-8">

      <h2 className="text-3xl font-black tracking-tight text-slate-800">
        Founder Information
      </h2>

      <p className="mt-3 text-sm text-slate-500">
        Update your founder profile and
        startup information.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* FULL NAME */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            Full Name
          </label>

          <input
            placeholder="Enter full name"
            className="w-full rounded-2xl border border-border/60 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            Email Address
          </label>

          <input
            placeholder="Enter email address"
            className="w-full rounded-2xl border border-border/60 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            Phone Number
          </label>

          <input
            placeholder="Enter phone number"
            className="w-full rounded-2xl border border-border/60 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
          />
        </div>

        {/* ROLE */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            Founder Role
          </label>

          <input
            placeholder="CEO / Founder"
            className="w-full rounded-2xl border border-border/60 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
          />
        </div>

      </div>

      {/* BIO */}
      <div className="mt-6">

        <label className="mb-3 block text-sm font-semibold text-slate-700">
          Founder Bio
        </label>

        <textarea
          rows={5}
          placeholder="Write founder bio..."
          className="w-full rounded-2xl border border-border/60 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
        />

      </div>

      <button className="mt-8 rounded-2xl bg-primary px-7 py-4 font-semibold text-white transition hover:opacity-90">
        Save Profile
      </button>
    </div>
  );
}