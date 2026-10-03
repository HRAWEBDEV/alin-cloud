"use client";
import { useTablesControlContext } from "../services/control/tablesControlContext";
import { IoStar } from "react-icons/io5";

export default function TablesGridView() {
  const { dic } = useTablesControlContext();
  return (
    <div className="grow overflow-auto">
      <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(10rem,14rem))] content-start justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return (
            <button
              key={item}
              data-is-vip={item % 2 === 0}
              className="block group border border-border rounded-md p-2 relative isolate overflow-hidden bg-neutral-100 dark:bg-neutral-900  data-[is-vip='true']:border-amber-500 cursor-pointer"
            >
              <div className="absolute -top-2 -inset-e-2 -z-1">
                <IoStar className="size-18 text-neutral-500/20 group-data-[is-vip='true']:text-amber-500/20" />
              </div>
              <div className="mb-1 flex gap-2">
                <span className="font-medium text-3xl text-primary">
                  {item}
                </span>
              </div>
              <div className="mb-2 flex gap-2">
                <span className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {dic.editTable.salon}:
                </span>
                <span>سالن شماره یک</span>
              </div>
              <div className="mb-2 flex gap-2">
                <span className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {dic.editTable.tableType}:
                </span>
                <span className="text-teal-700 dark:text-teal-400">آلاچیق</span>
              </div>
              <div className="mb-1 flex gap-2">
                <span className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {dic.editTable.maxCapacity}:
                </span>
                <span className="font-medium">{item}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
