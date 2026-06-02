"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocalUser, getUserInitial, getUserDisplayName } from "@/hooks/useLocalUser";

import { usePathname } from "next/navigation";

import {
  BadgeDollarSign,
  BookOpen,
  Briefcase,
  LayoutDashboard,
  Users,
} from "lucide-react";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const user = useLocalUser();

  const navItems = [
    {
      label: "Dashboard",
      href: "/founder/dashboard",
      icon: LayoutDashboard,
    },

    {
      label: "Advisors",
      href: "/founder/advisors",
      icon: Users,
    },

    {
      label: "Investors",
      href: "/founder/investors",
      icon: BadgeDollarSign,
    },

    {
      label: "Programs",
      href: "/founder/programs",
      icon: Briefcase,
    },

    {
      label: "Resources",
      href: "/founder/resources",
      icon: BookOpen,
    },
  ];

  return (
    <div className="flex h-full flex-col p-6">

      {/* LOGO */}
      <div className="flex items-center gap-3">

      <Image
        src="/logo.png"
        alt="Startup Ka Mall"
        width={220}
        height={70}
        priority
        className="h-auto w-auto object-contain"
      />
      </div>
      
      {/* NAVIGATION */}
      <div className="mt-10 space-y-2">

        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            pathname.startsWith(
              `${item.href}/`
            );

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-[#6B6B6B] hover:bg-accent hover:text-slate-900"
              }`}
            >
              <Icon className="h-5 w-5 transition-transform group-hover:scale-105" />

              {item.label}
            </Link>
          );
        })}

      </div>

      {/* READINESS */}
      <div className="mt-10 rounded-[28px] border border-primary/20 bg-primary/10 p-5">

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
      <div className="mt-auto rounded-[28px] border border-primary/20 bg-primary/10 p-5">

        <div className="flex items-center gap-3">

         <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
            {getUserInitial(user?.name)}
          </div>
          <div>
            <h3 className="font-semibold text-[#16214A]">
              {getUserDisplayName(user?.name)}
            </h3>
            <p className="text-sm text-slate-500 capitalize">
              {user?.role ?? "Founder"}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}