"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Bell,
} from "lucide-react";

import AppShell from "@/components/layout/AppShell";
import DashboardSidebar from "@/components/layout/DashboardSidebar";

import DashboardHero from "@/components/dashboard/DashboardHero";
import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardQuickActions from "@/components/dashboard/DashboardQuickActions";
import DashboardResources from "@/components/dashboard/DashboardResources";
import DashboardMobileSidebar from "@/components/dashboard/DashboardMobileSidebar";

export default function FounderDashboard() {

  const [mobileSidebar, setMobileSidebar] =
    useState(false);

  return (
    <>
      <AppShell
        headerTitle="Founder Dashboard"
        headerSubtitle="Startup execution workspace"
        onMenuClick={() =>
          setMobileSidebar(true)
        }
        sidebar={<DashboardSidebar />}

        rightContent={
          <div className="flex items-center gap-4">
            {/* NOTIFICATIONS */}
            <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition hover:bg-primary/15">
              <Bell className="h-5 w-5" />

              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500" />
            </button>

            {/* PROFILE */}
           <Link
              href="/founder/profile"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-bold text-white shadow-sm transition hover:scale-105"
            >
              K
            </Link>
          </div>
        }
      >
        <div className="space-y-6">
          {/* HERO */}
          <DashboardHero />

          {/* STATS */}
          <DashboardStats />

          {/* MAIN GRID */}
          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            {/* LEFT */}
            <div className="space-y-6 xl:col-span-2">
              <DashboardQuickActions />
            </div>

            {/* RIGHT */}
            <DashboardResources />
          </section>
        </div>
      </AppShell>

      {/* MOBILE SIDEBAR */}
      <DashboardMobileSidebar
        mobileSidebar={mobileSidebar}
        setMobileSidebar={
          setMobileSidebar
        }
      />

    </>
  );
}