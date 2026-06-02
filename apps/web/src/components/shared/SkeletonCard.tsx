interface SkeletonCardProps {
  height?: string;
  rounded?: string;
  count?: number;
  cols?: 1 | 2 | 3;
}

function SkeletonCard({
  height = "h-[320px]",
  rounded = "rounded-[32px]",
}: Omit<SkeletonCardProps, "count" | "cols">) {
  return (
    <div
      className={`${height} ${rounded} animate-pulse border border-border/60 bg-[#F7F4EE]/95`}
    />
  );
}

export default function SkeletonGrid({
  height = "h-[320px]",
  rounded = "rounded-[32px]",
  count = 4,
  cols = 2,
}: SkeletonCardProps) {
  const colClass =
    cols === 1
      ? "grid-cols-1"
      : cols === 3
      ? "grid-cols-1 lg:grid-cols-3"
      : "grid-cols-1 lg:grid-cols-2";

  return (
    <div className={`grid gap-6 ${colClass}`}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} height={height} rounded={rounded} />
      ))}
    </div>
  );
}