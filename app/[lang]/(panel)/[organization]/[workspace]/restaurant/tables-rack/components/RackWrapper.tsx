"use client";
import RackSidebar from "./RackSidebar";
import RackActions from "./RackActions";
import RackTable from "./RackTable";
import RackSidebarDialog from "./RackSidebarDialog";
import { useRackControlContext } from "../services/control/rackControlContext";
import { cn } from "cn";

export default function RackWrapper() {
  const { rackSettings, showDesktopSidebar, showMobileSidebar } =
    useRackControlContext();
  const tablesGridClass =
    rackSettings.viewOption === "minimal"
      ? "grid gap-2 justify-center grid-cols-[repeat(auto-fill,minmax(6rem,1fr))]"
      : "grid gap-4 grid-cols-[repeat(auto-fill,minmax(9rem,10rem))] sm:grid-cols-[repeat(auto-fill,minmax(8.8rem,9.8rem))] justify-center";
  return (
    <div
      className={cn(
        "grow lg:overflow-hidden grid grid-cols-1",
        showDesktopSidebar ? "lg:grid-cols-[14rem_1fr]" : "grid-cols-1",
      )}
    >
      {showDesktopSidebar && <RackSidebar />}
      {showMobileSidebar && <RackSidebarDialog />}
      <div className="px-2 lg:overflow-auto">
        <RackActions />
        <div
          className={tablesGridClass}
          style={{
            direction: rackSettings.ltrTablesDirection ? "ltr" : "unset",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
            return <RackTable key={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
