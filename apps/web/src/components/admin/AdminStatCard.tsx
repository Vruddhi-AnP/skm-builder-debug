import {
  LucideIcon,
} from "lucide-react";

interface AdminStatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor?: string;
}

export default function AdminStatCard({
  title,
  value,
  icon: Icon,
  iconColor = "text-sky-500",
}: AdminStatCardProps) {
  return (
    <div className="rounded-2xl border border-[#E8EDF5] bg-white p-5">
      <Icon
        className={`w-6 h-6 ${iconColor}`}
      />

      <h3 className="mt-5 text-3xl font-bold text-[#0F172A]">
        {value}
      </h3>

      <p className="mt-1 text-sm text-[#64748B]">
        {title}
      </p>
    </div>
  );
}