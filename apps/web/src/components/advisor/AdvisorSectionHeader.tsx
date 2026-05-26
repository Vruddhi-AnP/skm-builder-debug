import {
  Sparkles,
} from "lucide-react"

interface AdvisorSectionHeaderProps {
  badge: string
  title: string
  description: string
}

export default function AdvisorSectionHeader({
  badge,
  title,
  description,
}: AdvisorSectionHeaderProps) {
  return (
    <section className="rounded-[36px] border border-border bg-card p-6 shadow-sm lg:p-8">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2">
          <Sparkles className="h-4 w-4 text-primary" />

          <span className="text-sm font-semibold text-primary">
            {badge}
          </span>
        </div>

        <h2 className="mt-6 text-4xl font-black tracking-tight text-foreground lg:text-5xl">
          {title}
        </h2>

        <p className="mt-5 text-base leading-8 text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  )
}