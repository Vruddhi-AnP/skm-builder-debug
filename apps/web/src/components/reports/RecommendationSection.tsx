interface RecommendationSectionProps {
  recommendations: string[]
}

export default function RecommendationSection({
  recommendations,
}: RecommendationSectionProps) {
  return (
    <div className="rounded-3xl border border-[#E2E8F0] p-6">
      <h2 className="text-2xl font-bold text-[#0F172A]">
        Recommendations
      </h2>

      <div className="mt-6 space-y-4">
        {recommendations.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-4"
          >
            <div className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500 shrink-0" />

            <p className="text-[#334155] leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}