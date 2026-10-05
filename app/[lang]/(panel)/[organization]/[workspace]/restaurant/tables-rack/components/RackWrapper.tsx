import RackSidebar from "./RackSidebar";
import RackActions from "./RackActions";

export default function RackWrapper() {
  const tablesGridClass = false
    ? "grid gap-2 gap-y-4 justify-center grid-cols-[repeat(auto-fill,minmax(6rem,1fr))]"
    : "grid gap-4 sm:gap-6 grid-cols-[repeat(auto-fill,minmax(9.8rem,10rem))] sm:grid-cols-[repeat(auto-fill,minmax(10rem,11rem))] justify-center";
  return (
    <div className="grow overflow-hidden grid grid-cols-[14rem_1fr]">
      <RackSidebar />
      <div className="px-2 w-[min(100%,50rem)]">
        <RackActions />
        <div className={tablesGridClass}></div>
      </div>
    </div>
  );
}
