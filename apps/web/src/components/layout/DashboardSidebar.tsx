"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocalUser, getUserInitial, getUserDisplayName } from "@/hooks/useLocalUser";

import { usePathname } from "next/navigation";
import { toast } from "sonner";

import {
  BadgeDollarSign,
  BookOpen,
  Briefcase,
  LayoutDashboard,
  Rocket,
  Users,
} from "lucide-react";

import { getBuilderProgress } from "@/hooks/useLocalBuilder";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const user = useLocalUser();

 const builderProgress =
  typeof window !== "undefined"
    ? getBuilderProgress()
    : 0;

const builderDone =
  builderProgress === 100;

const navItems = [
  {
    section: "STARTUP",

    items: [
      {
        label: "Workspace",
        href: "/founder/dashboard",
        icon: LayoutDashboard,
      },

      {
        label: "Startup Builder",
        href: "/founder/startup-builder",
        icon: Rocket,
      },

      {
        label: "Readiness",
        href: "/founder/startup-builder/readiness-score",
        icon: BadgeDollarSign,
        locked: !builderDone,
      },

      {
        label: "Blueprints",
        href: "/founder/pitch-deck",
        icon: BookOpen,
        locked: !builderDone,
      },
    ],
  },

  {
    section: "ECOSYSTEM",

    items: [
      {
        label: "Advisors",
        href: "/founder/advisors",
        icon: Users,
        locked: !builderDone,
      },

      {
        label: "Programs",
        href: "/founder/programs",
        icon: Briefcase,
        locked: !builderDone,
      },

      {
        label: "Resources",
        href: "/founder/resources",
        icon: BookOpen,
      },

      {
        label: "Investor Visibility",
        href: "/founder/investors",
        icon: BadgeDollarSign,
        locked: !builderDone,
      },
    ],
  },
];

  return (
    <div className="flex h-full flex-col p-6">

      {/* LOGO */}
      <div className="flex w-full items-center gap-3">    
        <Image
          src="/logo.png"
          alt="Startup Ka Mall"
          width={160}
          height={50}
          priority
          className="h-auto w-auto object-contain"
        />
      </div>

      {/* NAVIGATION */}
      <div className="mt-8 space-y-5">

  {navItems.map((section) => (

    <div key={section.section}>

      {/* SECTION TITLE */}
      <p className="mb-2 px-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        {section.section}
      </p>

      <div className="space-y-2">

        {section.items.map((item) => {

          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          const isLocked = item.locked;
          
          return (

            <Link
              key={item.href}
              href={isLocked ? "#" : item.href}
              onClick={(e) => {
                if (isLocked) {
                  e.preventDefault();

                  toast.info(
                    "Finish your Startup Builder journey to unlock this section."
                  );
                }
              }}
              className={`group flex w-full items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : isLocked
                  ? "text-slate-400 hover:bg-slate-50"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >

              <div className="flex w-full items-center gap-3">

                <Icon className="h-5 w-5 shrink-0" />

                <span className="flex-1 truncate">
                  {item.label}
                </span>

              {isLocked && (
                <span className="ml-auto text-slate-400">
                  🔒
                </span>
              )}

              </div>

            </Link>

          );
        })}

      </div>

    </div>

  ))}

</div>

    </div>
  );
}