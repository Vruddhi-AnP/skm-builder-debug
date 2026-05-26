"use client";

import {
  LayoutDashboard,
  Users,
  Briefcase,
  BadgeDollarSign,
  BookOpen,
} from "lucide-react";

import Image from "next/image";

interface DashboardSidebarProps {
  activeTab: string;
}

export default function DashboardSidebar({
  activeTab,
}: DashboardSidebarProps) {
  const navItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      href: "/founder/dashboard",
      icon: LayoutDashboard,
    },
    {
      key: "advisors",
      label: "Advisors",
      href: "/founder/advisors",
      icon: Users,
    },
    {
      key: "investors",
      label: "Investors",
      href: "/founder/investors",
      icon: BadgeDollarSign,
    },
    {
      key: "programs",
      label: "Programs",
      href: "/founder/programs",
      icon: Briefcase,
    },
    {
      key: "resources",
      label: "Resources",
      href: "/founder/resources",
      icon: BookOpen,
    },
  ];

  return (
    <div className="flex h-full flex-col p-6">
      {/* LOGO */}
      <Image
        src="/logo.png"
        alt="Startup Ka Mall"
        width={220}
        height={70}
        priority
        className="h-auto w-auto object-contain"
      />

      {/* NAVIGATION */}
      <div className="mt-10 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            activeTab === item.key;

          return (
            <button
              key={item.key}
              onClick={() =>
                (window.location.href =
                  item.href)
              }
              className={`hover-transition flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold ${
                isActive
                  ? "bg-primary text-white"
                  : "text-[#6B6B6B] hover:bg-accent"
              }`}
            >
              <Icon className="h-5 w-5" />

              {item.label}
            </button>
          );
        })}
      </div>

      {/* READINESS */}
      <div className="mt-10 rounded-[28px] border border-border/60 bg-primary/10 text-primary border-primary/20 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Startup Readiness
        </p>

        <h2 className="mt-4 text-5xl font-black text-[#16214A]">
          72%
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Investor Ready Stage
        </p>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-[72%] rounded-full bg-primary" />
        </div>
      </div>

      {/* PROFILE */}
      <div className="mt-auto rounded-[28px] border border-border/60 bg-primary/10 text-primary border-primary/20 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-white">
            K
          </div>

          <div>
            <h3 className="font-semibold text-[#16214A]">
              Krishna Shah
            </h3>

            <p className="text-sm text-slate-500">
              Founder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}