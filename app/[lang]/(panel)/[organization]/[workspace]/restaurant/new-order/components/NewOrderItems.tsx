import { Button } from "@/components/ui/button";
import { CiCircleMinus } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import Highlighter from "react-highlight-words";
import { Badge } from "@/components/ui/badge";
import { MdOutlineKeyboardHide } from "react-icons/md";
import DishIcon from "@/app/[lang]/(panel)/components/navigation/icons/DishIcon";

export default function NewOrderItems() {
  return (
    <div className="grid justify-center gap-2 grid-cols-[repeat(auto-fill,minmax(10rem,10.5rem))]">
      {[1, 2, 3].map((item) => {
        return (
          <div
            key={item}
            className={`flex flex-col ${true ? "pt-17 min-h-48" : "pt-0"}`}
          >
            <div
              className={`grow relative isolate rounded-xl ${true ? "shadow-xl" : "border shadow-lg border-border pt-2"} bg-background dark:bg-neutral-900 ${false ? "bg-primary/15 dark:bg-primary/15" : ""} ${false ? "bg-neutral-200! dark:bg-neutral-800!" : ""}`}
            >
              <div className="absolute bottom-0 start-0 z-1"></div>
              {true && (
                <div
                  className="grid place-content-center -mt-17 mb-2"
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-center rounded-full size-24 bg-neutral-100 dark:bg-neutral-800 overflow-hidden object-center object-contain">
                    <DishIcon className="size-12" />
                  </div>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-base sm:text-lg font-medium text-neutral-800 dark:text-neutral-400 mb-1">
                  <Highlighter searchWords={[]} textToHighlight={"املت"} />
                </h3>
                {true && (
                  <>
                    <div className="flex flex-col mb-2">
                      {false && (
                        <div className="text-[0.85rem] font-medium text-red-600 dark:text-red-400 line-through">
                          <Badge
                            variant="destructive"
                            className="p-1 me-2 text-sm"
                          >
                            12%
                          </Badge>
                          <span>14,000,000</span>
                        </div>
                      )}
                      <p className="text-lg font-medium text-neutral-600 dark:text-neutral-400">
                        {"12,000,000"}
                        <span className="ms-1 text-sm">ریال</span>
                      </p>
                    </div>
                  </>
                )}
                {false && (
                  <div className="flex justify-between items-center mb-2">
                    <div className="basis-10">
                      <Button
                        variant="ghost"
                        size="icon-lg"
                        className={`rounded-full ${false ? "text-neutral-400 dark:text-neutral-600" : "text-neutral-300 dark:text-neutral-700"}`}
                      >
                        <MdOutlineKeyboardHide className="size-8" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-primary rounded-full"
                    >
                      <FaCirclePlus className="size-9" />
                    </Button>
                    <div className="basis-10"></div>
                  </div>
                )}
                {true && (
                  <div className="flex justify-center items-center mb-2 select-none">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-rose-600 dark:text-rose-400 rounded-full"
                    >
                      <CiCircleMinus className="size-9" />
                    </Button>
                    <div className="text-lg py-[0.2rem] px-1 shrink-0 text-center basis-8 font-medium text-primary rounded">
                      {2}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-primary rounded-full"
                    >
                      <CiCirclePlus className="size-9" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
