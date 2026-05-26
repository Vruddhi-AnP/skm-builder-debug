import {
  FileText,
  PlayCircle,
  BookOpen,
} from "lucide-react";

const resources = [
  {
    title: "Startup Validation Guide",
    type: "Guide",
    icon: BookOpen,
  },

  {
    title: "Investor Pitch Framework",
    type: "Template",
    icon: FileText,
  },

  {
    title: "Founder Execution Workshop",
    type: "Video",
    icon: PlayCircle,
  },
];

export default function DashboardResources() {
  return (
    <aside className="rounded-[32px] border border-border/60 bg-[#F7F4EE]/95 p-6 md:p-8">
      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-black tracking-tight text-[#16214A]">
          Resources
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Curated startup learning resources.
        </p>
      </div>

      {/* LIST */}
      <div className="mt-8 space-y-5">
        {resources.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="w-full rounded-[28px] border border-border/60 bg-[#f8fbff] p-5 text-left transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                {/* ICON */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <div className="inline-flex rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                    {item.type}
                  </div>

                  <h3 className="mt-3 text-base font-bold leading-7 text-[#16214A]">
                    {item.title}
                  </h3>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* BOTTOM */}
      <div className="mt-8 rounded-[28px] border border-primary/10 bg-primary/5 p-5">
        <h3 className="text-lg font-black text-[#16214A]">
          Founder Tip
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#6B6B6B]">
          Consistent execution and structured validation
          are the strongest indicators of startup success.
        </p>
      </div>
    </aside>
  );
}