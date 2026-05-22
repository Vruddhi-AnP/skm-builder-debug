"use client";

import { X } from "lucide-react";

import DashboardSidebar from "@/components/layout/DashboardSidebar";

interface DashboardMobileSidebarProps {
  mobileSidebar: boolean;

  setMobileSidebar: (
    value: boolean
  ) => void;
}

export default function DashboardMobileSidebar({
  mobileSidebar,
  setMobileSidebar,
}: DashboardMobileSidebarProps) {
  return (
    <>
      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-[90] bg-black/20 backdrop-blur-sm transition-all duration-300 lg:hidden
        
        ${
          mobileSidebar
            ? "visible opacity-100"
            : "invisible opacity-0"
        }
      `}
        onClick={() =>
          setMobileSidebar(false)
        }
      />

      {/* SIDEBAR */}
      <div
        className={`fixed left-0 top-0 z-[100] h-screen w-[290px] border-r border-border/60 bg-white shadow-2xl transition-transform duration-300 lg:hidden
        
        ${
          mobileSidebar
            ? "translate-x-0"
            : "-translate-x-full"
        }
      `}
      >
        {/* TOP */}
        <div className="flex items-center justify-between border-b border-border/60 p-5">

          <h2 className="text-xl font-black tracking-tight text-slate-800">
            Workspace
          </h2>

          <button
            onClick={() =>
              setMobileSidebar(false)
            }
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-white transition hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>

        </div>

        {/* CONTENT */}
        <div className="h-[calc(100vh-88px)] overflow-y-auto">
          <DashboardSidebar />
        </div>

      </div>
    </>
  );
}