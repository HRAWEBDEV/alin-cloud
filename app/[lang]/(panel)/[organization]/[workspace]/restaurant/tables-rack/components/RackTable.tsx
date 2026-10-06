"use client";
import { Button } from "@/components/ui/button";
import { getTableRows } from "../utils/getTableRows";
import { IoPrint } from "react-icons/io5";
import { TableStateTypes, getTableStateStyles } from "../utils/tableStates";
import { cn } from "cn";
import { useRackControlContext } from "../services/control/rackControlContext";
import { useBaseConfig } from "@/services/base-config/baseConfigContext";

export default function RackTable() {
  const { rackSettings } = useRackControlContext();
  const tableRows = getTableRows(5, 2);
  const tableStateStyles = getTableStateStyles(TableStateTypes.regularCustomer);
  const { localeInfo } = useBaseConfig();

  return (
    <div
      className="grid group"
      data-bold={rackSettings.contrastModeOn}
      data-layout-minimal={rackSettings.viewOption === "minimal"}
      style={{
        direction: localeInfo.contentDirection,
      }}
    >
      <div className='relative min-h-36 group-data-[layout-minimal="true"]:min-h-auto isolate group-data-[layout-minimal="false"]px-3'>
        {rackSettings.viewOption !== "minimal" && (
          <div
            style={{
              direction: "ltr",
            }}
            className="absolute z-[-1] inset-0 py-2 grid gap-1 content-center"
          >
            {tableRows.map((row) => (
              <div
                key={row.id}
                className="h-6 rounded-2xl flex justify-between"
              >
                {Array.from({ length: row.seats }, (_, i) => i).map((seat) => (
                  <div
                    data-occupied={row.occupiedSeats >= seat + 1}
                    key={seat}
                    className='size-6 rounded-full bg-neutral-200 dark:bg-neutral-800 data-[occupied="true"]:bg-rose-300 data-[occupied="true"]:dark:bg-rose-800'
                  ></div>
                ))}
              </div>
            ))}
          </div>
        )}
        <Button
          variant="outline"
          className={cn(
            "w-full h-full justify-start flex flex-col test-start items-start bg-background dark:bg-background relative p-2 gap-1",
            rackSettings.contrastModeOn ? tableStateStyles.backgoundColor : "",
          )}
        >
          {true && (
            <div className='absolute top-11 group-data-[layout-minimal="true"]:top-0 group-data-[layout-minimal="true"]:bottom-11 start-0 end-0 text-end text-4xl text-amber-500/40 font-en-roboto group-data-[bold=true]:font-bold group-data-[layout-minimal="true"]:text-3xl'>
              VIP
            </div>
          )}
          {rackSettings.viewOption !== "minimal" && (
            <div
              className={cn(
                "p-0.5 rounded-2xl border border-dashed text-center w-full border-destructive text-destructive bg-destructive/10",
                tableStateStyles.text,
                tableStateStyles.border,
                tableStateStyles.backgoundColor,
              )}
            >
              <span className="text-base font-medium group-data-[bold=true]:font-bold">
                <span>میز اشغال</span>
              </span>
            </div>
          )}
          <div className="text-start ps-2 grow w-full">
            <div className="flex items-center">
              <h3
                className={cn(
                  "text-wrap text-2xl font-en-roboto group-data-[bold=true]:font-black",
                  rackSettings.viewOption === "minimal" ? "" : "lg:text-3xl",
                  tableStateStyles.text,
                )}
              >
                02
              </h3>
            </div>
            {rackSettings.viewOption !== "minimal" && (
              <div className="whitespace-nowrap grid">
                <p className="text-sm text-primary group-data-[bold=true]:font-medium truncate">
                  وعده نهار
                </p>
                <p className="text-md text-neutral-500 dark:text-neutral-400 group-data-[bold=true]:font-medium truncate">
                  مشتری آزاد
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-1 text-base text-neutral-600 dark:text-neutral-400 font-medium group-data-[bold=true]:font-bold">
              <div className="flex gap-1 items-center">
                {true && (
                  <IoPrint
                    className={`${false ? "size-5" : "size-6"} text-primary`}
                  />
                )}
              </div>
            </div>
            <div
              style={{
                direction: "ltr",
              }}
              className={cn(
                "font-medium text-md group-data-[bold=true]:font-bold",
                tableStateStyles.text,
              )}
            >
              1/3
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
}
