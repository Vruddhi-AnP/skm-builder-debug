"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footerText: string;
  footerLink: string;
  footerLinkText: string;
}

export default function AuthCard({
  title,
  subtitle,
  children,
  footerText,
  footerLink,
  footerLinkText,
}: AuthCardProps) {
  return (
    <div className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-border/60 bg-white/90 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-10">
      {/* LOGO */}
      <Link
        href="/"
        className="mb-8 flex items-center gap-3"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-xl font-black text-white">
          S
        </div>

        <div>
          <h1 className="text-lg font-black text-slate-800">
            Startup Ka Mall
          </h1>

          <p className="text-sm text-slate-500">
            Founder Ecosystem
          </p>
        </div>
      </Link>

      {/* HEADER */}
      <div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-800">
          {title}
        </h1>

        <p className="mt-3 leading-relaxed text-slate-500">
          {subtitle}
        </p>
      </div>

      {/* CONTENT */}
      <div className="mt-10">
        {children}
      </div>

      {/* FOOTER */}
      <p className="mt-8 text-center text-slate-500">
        {footerText}{" "}
        <Link
          href={footerLink}
          className="font-semibold text-slate-800 transition hover:opacity-70"
        >
          {footerLinkText}
        </Link>
      </p>
    </div>
  );
}