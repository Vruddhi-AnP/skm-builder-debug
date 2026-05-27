interface ReportHeaderProps {
  startupName: string
  founderName: string
}

export default function ReportHeader({
  startupName,
  founderName,
}: ReportHeaderProps) {
  return (
    <div className="border-b border-[#E2E8F0] pb-6">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm font-medium text-sky-600">
            Startup Ka Mall
          </p>

          <h1 className="mt-2 text-4xl font-bold text-[#0F172A]">
            Readiness Report
          </h1>

          <p className="mt-3 text-[#64748B]">
            Professional startup readiness assessment report.
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-[#64748B]">
            Founder
          </p>

          <h3 className="mt-1 text-lg font-semibold text-[#0F172A]">
            {founderName}
          </h3>

          <p className="mt-3 text-sm text-[#64748B]">
            Startup
          </p>

          <h4 className="mt-1 font-semibold text-[#0F172A]">
            {startupName}
          </h4>
        </div>
      </div>
    </div>
  )
}