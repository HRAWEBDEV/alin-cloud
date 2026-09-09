"use client";
import { IoArrowBackSharp } from "react-icons/io5";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function HistoryControllers() {
  return (
    <div>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              type="button"
              variant="ghost"
              size="icon-lg"
              className="rounded-full bg-transparent text-neutral-600 dark:text-neutral-400"
            >
              <IoArrowBackSharp className="rtl:rotate-180 size-6" />
            </Button>
          }
        />
      </Tooltip>
    </div>
  );
}
