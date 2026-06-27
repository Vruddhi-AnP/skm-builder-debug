"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

import InvestorSidebar from "./InvestorSidebar";
import InvestorHeader from "./InvestorHeader";

interface InvestorLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export default function InvestorLayout({
  children,
  title,
  subtitle,
}: InvestorLayoutProps) {
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const getActivePage = () => {
    if (pathname.includes("/dashboard"))
      return "Dashboard";

    if (pathname.includes("/discover"))
      return "Discover";

    if (pathname.includes("/interested"))
      return "Interested";

    if (pathname.includes("/saved"))
      return "Saved";

    if (pathname.includes("/profile"))
      return "Profile";

    return "";
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <InvestorSidebar
        activePage={getActivePage()}
      />

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <InvestorHeader
          title={title}
          subtitle={subtitle}
        />

        <main className="flex-1 overflow-x-hidden p-5 lg:p-7">
          {children}
        </main>
      </div>
    </div>
  );
}