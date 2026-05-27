interface ScoreCardProps {
  title: string
  score: number
}

export default function ScoreCard({
  title,
  score,
}: ScoreCardProps) {
  return (
    <div className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
      <p className="text-sm text-[#64748B]">
        {title}
      </p>

      <h3 className="mt-3 text-5xl font-bold text-[#0F172A]">
        {score}
      </h3>

      <div className="mt-5 h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
        <div
          className="h-full rounded-full bg-sky-500"
          style={{
            width: `${score}%`,
          }}
        />
      </div>
    </div>
  )
}