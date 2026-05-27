import {
  SearchX,
} from "lucide-react";

interface AdminEmptyStateProps {
  title?: string;
  description?: string;
}

export default function AdminEmptyState({
  title = "No Data Found",
  description = "There are no matching records available right now.",
}: AdminEmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-[#D9E2EC] bg-[#F7F4EE]/70 p-10 flex flex-col items-center justify-center text-center">
      <div className="h-16 w-16 rounded-full bg-[#EEF4FF] flex items-center justify-center">
        <SearchX className="w-8 h-8 text-sky-500" />
      </div>

      <h3 className="mt-5 text-xl font-bold text-[#0F172A]">
        {title}
      </h3>

      <p className="mt-2 text-sm text-[#64748B] max-w-md">
        {description}
      </p>
    </div>
  );
}