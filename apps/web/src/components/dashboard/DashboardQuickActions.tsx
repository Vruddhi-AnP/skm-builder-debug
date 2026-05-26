import Link from "next/link";

import {
  ArrowRight,
  Rocket,
  FileText,
  Users,
  Briefcase,
} from "lucide-react";

const actions = [
  {
    title: "Startup Builder",
    description:
      "Continue building your startup execution roadmap.",
    icon: Rocket,
    href: "/founder/startup-builder",
  },

  {
    title: "Pitch Deck",
    description:
      "Prepare your investor-ready pitch materials.",
    icon: FileText,
    href: "/founder/pitch-deck",
  },

  {
    title: "Advisor Network",
    description:
      "Connect with relevant startup advisors.",
    icon: Users,
    href: "/founder/advisors",
  },

  {
    title: "Programs",
    description:
      "Explore startup ecosystem opportunities.",
    icon: Briefcase,
    href: "/founder/programs",
  },
];

export default function DashboardQuickActions() {
  return (
    <section className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 md:p-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black tracking-tight text-[#16214A]">
            Quick Actions
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Continue your startup execution journey.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {actions.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[28px] border border-border/60 bg-[#f8fbff] p-6 text-left transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
            >
              {/* ICON */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>

              {/* TITLE */}
              <h3 className="mt-6 text-xl font-black tracking-tight text-[#16214A]">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="mt-3 text-sm leading-7 text-slate-500">
                {item.description}
              </p>

              {/* CTA */}
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Open Module

              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}