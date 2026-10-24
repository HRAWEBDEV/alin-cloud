import LinearLoading from "@/app/[lang]/(panel)/components/LinearLoading";

export default function BoardFilters() {
  return (
    <div className="sticky top-0 bg-background z-2 py-2">
      {false && (
        <div className="absolute inset-x-0 top-0">
          <LinearLoading />
        </div>
      )}
    </div>
  );
}
