import {
  LucideIcon,
} from "lucide-react"

interface InvestorStatCardProps {
  icon: LucideIcon
  title: string
  subtitle: string
  iconBg?: string
  iconColor?: string
}

export default function InvestorStatCard({
  icon: Icon,
  title,
  subtitle,
  iconBg = "bg-primary/10",
  iconColor = "text-primary",
}: InvestorStatCardProps) {
  return (
    <div className="rounded-[30px] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* ICON */}
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}
      >
        <Icon
          className={`h-7 w-7 ${iconColor}`}
        />
      </div>

      {/* VALUE */}
      <h3 className="mt-6 text-4xl font-black tracking-tight text-foreground">
        {title}
      </h3>

      {/* LABEL */}
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {subtitle}
      </p>
    </div>
  )
}