"use client";

import { LucideIcon, SearchX } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: LucideIcon;
}

export default function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
  icon: Icon = SearchX,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[32px] border border-dashed border-border/60 bg-[#F7F4EE]/95 p-10 text-center shadow-sm">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mt-5 text-2xl font-black tracking-tight text-[#16214A]">
        {title}
      </h3>

      <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
        {description}
      </p>

      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-6 rounded-2xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}