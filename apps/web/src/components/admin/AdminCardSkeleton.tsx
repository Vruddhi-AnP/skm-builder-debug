export default function AdminCardSkeleton() {
  return (
    <div className="rounded-[30px] border border-[#E8EDF5] bg-[#F7F4EE]/95 p-6 animate-pulse">
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
        {/* LEFT */}
        <div className="flex-1">
          <div className="h-7 w-52 rounded-xl bg-[#E2E8F0]" />

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map(
              (_, index) => (
                <div key={index}>
                  <div className="h-3 w-20 rounded bg-[#E2E8F0]" />

                  <div className="mt-2 h-5 w-32 rounded bg-[#CBD5E1]" />
                </div>
              )
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap gap-3">
          <div className="h-11 w-28 rounded-full bg-[#E2E8F0]" />

          <div className="h-11 w-28 rounded-full bg-[#E2E8F0]" />

          <div className="h-11 w-36 rounded-full bg-[#CBD5E1]" />
        </div>
      </div>
    </div>
  );
}