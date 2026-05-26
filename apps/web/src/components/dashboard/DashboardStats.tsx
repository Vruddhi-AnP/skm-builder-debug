const stats = [
  {
    title: "Startup Score",
    value: "72",
    status: "+8% this week",
  },
  {
    title: "Builder Progress",
    value: "3/5",
    status: "Startup roadmap active",
  },
  {
    title: "Investor Interest",
    value: "2",
    status: "Active investor requests",
  },
  {
    title: "Advisor Opportunities",
    value: "5",
    status: "Relevant advisors available",
  },
];

export default function DashboardStats() {
  return (
    <section className="dashboard-grid">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-[28px] border border-border/60 bg-[#F7F4EE]/95 p-6 transition hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="text-sm text-slate-500">
            {item.title}
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#16214A]">
            {item.value}
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            {item.status}
          </p>
        </div>
      ))}
    </section>
  );
}