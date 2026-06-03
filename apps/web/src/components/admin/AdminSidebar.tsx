"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BarChart3,
  CalendarDays,
  FileText,
  Flame,
  FolderOpen,
  LayoutDashboard,
  ShieldCheck,
  UserCheck,
  Users,
  Wallet,
  X,
} from "lucide-react";

import AppLogo from "@/components/shared/AppLogo";

const navigation = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Consultations",
    href: "/admin/consultations",
    icon: CalendarDays,
  },
  {
    name: "Investor Interests",
    href: "/admin/investor-interests",
    icon: Wallet,
  },
  {
    name: "Program Applications",
    href: "/admin/program-applications",
    icon: FileText,
  },
  {
    name: "Founders",
    href: "/admin/founders",
    icon: Users,
  },
  {
    name: "Advisors",
    href: "/admin/advisors",
    icon: UserCheck,
  },
  {
    name: "Investors",
    href: "/admin/investors",
    icon: Flame,
  },
  {
    name: "Programs",
    href: "/admin/programs",
    icon: BarChart3,
  },
  {
    name: "Resources",
    href: "/admin/resources",
    icon: FolderOpen,
  },
  {
    name: "Profile",
    href: "/admin/profile",
    icon: ShieldCheck,
  },
];

interface AdminSidebarProps {
  mobile?: boolean;
  onClose?: () => void;
}

export default function AdminSidebar({
  mobile = false,
  onClose,
}: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`${
        mobile
          ? "w-70"
          : "hidden lg:flex w-67.5"
      } bg-white border-r border-[#E8EDF5] flex-col h-full`}
    >
      {/* TOP */}
      <div className="h-20 border-b border-[#EDF1F7] px-5 flex items-center justify-between shrink-0">
        <div className="min-w-0">
          <AppLogo width={145} />

          <p className="text-[11px] text-[#94A3B8] mt-1 pl-0.5 tracking-wide">
            Admin Workspace
          </p>
        </div>

        {mobile && (
          <button
            onClick={onClose}
            className="h-10 w-10 rounded-xl bg-[#F5F7FB] border border-[#E8EDF5] flex items-center justify-center shrink-0"
          >
            <X className="w-5 h-5 text-[#475569]" />
          </button>
        )}
      </div>

      {/* NAVIGATION */}
      <div className="flex-1 px-4 py-5 overflow-y-auto">
        <div className="space-y-1.5">
          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`group h-12 px-4 rounded-2xl flex items-center gap-3 transition-all duration-200 ${
                  isActive
                    ? "bg-[#0F172A] text-white shadow-sm"
                    : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                }`}
              >
                <Icon
                  className={`w-4.5 h-4.5 transition ${
                    isActive
                      ? "text-white"
                      : "text-[#64748B] group-hover:text-[#0F172A]"
                  }`}
                />

                <span className="font-semibold text-[14px] tracking-[-0.01em]">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}