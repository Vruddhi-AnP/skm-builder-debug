interface AdvisorEmptyStateProps {
  title: string
  description: string
}

export default function AdvisorEmptyState({
  title,
  description,
}: AdvisorEmptyStateProps) {
  return (
    <div className="rounded-[32px] border border-dashed border-border bg-card p-16 text-center">
      <h3 className="text-2xl font-black text-foreground">
        {title}
      </h3>

      <p className="mt-3 text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  )
}