"use client";
import { IoArrowBackSharp } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";

export default function HistoryControllers() {
  const {
    shareDictionary: {
      components: { history: dic },
    },
  } = useShareDictionary();
  return (
    <div>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="rounded-full bg-transparent"
            >
              <GoHistory className="size-5" />
            </Button>
          }
        />
        <TooltipContent>{dic.histroy}</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="rounded-full bg-transparent text-destructive"
            >
              <IoArrowBackSharp className="rtl:rotate-180 size-5" />
            </Button>
          }
        />
        <TooltipContent>{dic.back}</TooltipContent>
      </Tooltip>
    </div>
  );
}
