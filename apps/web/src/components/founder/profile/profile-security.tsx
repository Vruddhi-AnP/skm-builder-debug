"use client";

export default function ProfileSecurity() {
  return (
    <div className="rounded-[32px] border border-border/60 bg-white p-6 shadow-sm md:p-8">

      <h2 className="text-3xl font-black tracking-tight text-slate-800">
        Account Security
      </h2>

      <p className="mt-3 text-sm text-slate-500">
        Update your password and account
        security settings.
      </p>

      <div className="mt-8 space-y-6">

        {/* CURRENT PASSWORD */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            Current Password
          </label>

          <input
            type="password"
            placeholder="Enter current password"
            className="w-full rounded-2xl border border-border/60 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
          />
        </div>

        {/* NEW PASSWORD */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            New Password
          </label>

          <input
            type="password"
            placeholder="Enter new password"
            className="w-full rounded-2xl border border-border/60 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
          />
        </div>

        {/* CONFIRM */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full rounded-2xl border border-border/60 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
          />
        </div>

      </div>

      <button className="mt-8 rounded-2xl bg-primary px-7 py-4 font-semibold text-white transition hover:opacity-90">
        Update Password
      </button>
    </div>
  );
}