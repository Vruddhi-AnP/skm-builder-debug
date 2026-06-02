"use client";

import { ReactNode } from "react";
import { Menu } from "lucide-react";

interface AppShellProps {
  children: ReactNode;
  sidebar: ReactNode;
  headerTitle: string;
  headerSubtitle?: string;
  onMenuClick?: () => void;
  rightContent?: ReactNode;
}

export default function AppShell({
  children,
  sidebar,
  headerTitle,
  headerSubtitle,
  onMenuClick,
  rightContent,
}: AppShellProps) {
  return (
    <main className="flex min-h-screen bg-background">
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden border-r border-border/60 bg-[#F7F4EE]/95 lg:flex lg:w-[280px] lg:flex-col">
        {sidebar}
      </aside>

      {/* MAIN AREA */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* HEADER */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-border/60 bg-[#F7F4EE]/95/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={onMenuClick}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-[#F7F4EE]/95 transition hover:bg-primary/10 text-primary border-primary/20 lg:hidden"
            >
              <Menu className="h-5 w-5 text-slate-700" />
            </button>

            <div>
              <h1 className="text-xl font-black tracking-tight text-[#16214A] sm:text-2xl">
                {headerTitle}
              </h1>

              {headerSubtitle && (
                <p className="mt-1 text-sm text-slate-500">
                  {headerSubtitle}
                </p>
              )}
            </div>
          </div>

          {rightContent}
        </header>

        {/* PAGE CONTENT */}
        <div className="flex-1 overflow-x-hidden">
          <div className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 md:py-8 lg:px-8">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}