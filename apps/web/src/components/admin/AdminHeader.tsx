"use client";

import Link from "next/link";

import {
  Bell,
  Menu,
} from "lucide-react";

interface AdminHeaderProps {
  title: string;
  subtitle: string;
  onMenuClick?: () => void;
}

export default function AdminHeader({
  title,
  subtitle,
  onMenuClick,
}: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-30 h-20 border-b border-[#E8EDF5] bg-white/90 backdrop-blur-xl">
      <div className="h-full px-5 lg:px-8 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4 min-w-0">
          <button
            onClick={onMenuClick}
            className="lg:hidden h-10 w-10 rounded-xl border border-[#E8EDF5] bg-[#F8FAFC] flex items-center justify-center shrink-0"
          >
            <Menu className="w-5 h-5 text-[#475569]" />
          </button>

          <div className="min-w-0">
            <h1 className="text-[24px] lg:text-[28px] font-bold tracking-[-0.02em] text-[#0F172A] truncate">
              {title}
            </h1>

            <p className="text-sm text-[#64748B] mt-1 truncate">
              {subtitle}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 shrink-0">
          {/* NOTIFICATION */}
          <button className="relative h-11 w-11 rounded-2xl border border-[#E8EDF5] bg-[#F8FAFC] flex items-center justify-center hover:bg-[#F1F5F9] transition">
            <Bell className="w-5 h-5 text-[#475569]" />

            <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-sky-500" />
          </button>

          {/* AVATAR */}
          <Link
            href="/admin/profile"
            className="h-11 w-11 rounded-full bg-[#0F172A] flex items-center justify-center text-white text-sm font-bold shadow-sm hover:opacity-95 transition"
          >
            A
          </Link>
        </div>
      </div>
    </header>
  );
}