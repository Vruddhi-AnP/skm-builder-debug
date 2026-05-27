"use client";

import { ReactNode, useState } from "react";

import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

interface AdminShellProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export default function AdminShell({
  children,
  title,
  subtitle,
}: AdminShellProps) {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex">
      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <AdminSidebar
            mobile
            onClose={() =>
              setSidebarOpen(false)
            }
          />

          <div
            className="flex-1 bg-black/20"
            onClick={() =>
              setSidebarOpen(false)
            }
          />
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <AdminSidebar />

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader
          title={title}
          subtitle={subtitle}
          onMenuClick={() =>
            setSidebarOpen(true)
          }
        />

        <main className="flex-1 p-5 lg:p-6 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}