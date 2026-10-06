"use client";
import RackSidebar from "./RackSidebar";
import RackActions from "./RackActions";
import RackTable from "./RackTable";
import { useRackControlContext } from "../services/control/rackControlContext";

export default function RackWrapper() {
  const { rackSettings } = useRackControlContext();
  const tablesGridClass =
    rackSettings.viewOption === "minimal"
      ? "grid gap-2 justify-center grid-cols-[repeat(auto-fill,minmax(6rem,1fr))]"
      : "grid gap-4 grid-cols-[repeat(auto-fill,minmax(9rem,10rem))] sm:grid-cols-[repeat(auto-fill,minmax(8.8rem,9.8rem))] justify-center";
  return (
    <div className="grow overflow-hidden grid grid-cols-[14rem_1fr]">
      <RackSidebar />
      <div className="px-2">
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
