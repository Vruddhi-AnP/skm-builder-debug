"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useLocalUser } from "@/hooks/useLocalUser";

export default function ProfileForm() {
  const user = useLocalUser();

  const [formData, setFormData] = useState({
    name: user?.name ?? "",
    email: user?.email ?? "",
    phone: "",
    founderRole: "Founder & CEO",
    bio: "",
  });

  const [saving, setSaving] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    // Update localStorage with new name
    const stored = localStorage.getItem("user");
    if (stored) {
      const parsed = JSON.parse(stored);
      parsed.name = formData.name;
      localStorage.setItem("user", JSON.stringify(parsed));
    }

    setSaving(true);
    // Simulate save — replace with PATCH /user API call when backend is ready
    await new Promise((r) => setTimeout(r, 600));
    setSaving(false);
    toast.success("Profile updated successfully");
  };

  return (
    <div className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 shadow-sm md:p-8">
      <h2 className="text-3xl font-black tracking-tight text-[#16214A]">
        Founder Information
      </h2>

      <p className="mt-3 text-sm text-slate-500">
        Update your founder profile and startup information.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* FULL NAME */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            Full Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            name="phone"
            value={formData.phone}
            onChange={handleChange}
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
            name="founderRole"
            value={formData.founderRole}
            onChange={handleChange}
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
          name="bio"
          rows={5}
          value={formData.bio}
          onChange={handleChange}
          placeholder="Write founder bio..."
          className="w-full rounded-2xl border border-border/60 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
        />
      </div>

      <button
        onClick={handleSave}
        disabled={saving}
        className="mt-8 rounded-2xl bg-primary px-7 py-4 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {saving ? "Saving..." : "Save Profile"}
      </button>
    </div>
  );
}