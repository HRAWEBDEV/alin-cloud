"use client";
import { MdTouchApp } from "react-icons/md";

export default function SalonsGridView() {
  return (
    <div className="grow overflow-auto">
      <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(10rem,14rem))] content-start justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return (
            <button
              key={item}
              data-is-vip={item % 2 === 0}
              className="block group border border-border rounded-md p-2 relative isolate overflow-hidden bg-neutral-100 dark:bg-neutral-900 cursor-pointer"
            >
              <div className="absolute bottom-0 inset-e-0 z-0">
                <MdTouchApp className="size-10 text-neutral-200 dark:text-neutral-800" />
              </div>
              <div className="mb-1 flex gap-2">
                <span className="font-medium text-3xl text-primary">
                  {item}
                </span>
              </div>
              <div className="mb-2 flex gap-2">
                <span>سالن شماره یک</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
