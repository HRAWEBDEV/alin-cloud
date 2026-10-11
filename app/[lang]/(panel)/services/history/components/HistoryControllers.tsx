"use client";
import { IoArrowBackSharp } from "react-icons/io5";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { useHistoryContext } from "../historyContext";

export default function HistoryControllers() {
  const { onGoBack, canGoBack } = useHistoryContext();
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
              disabled={!canGoBack}
              type="button"
              variant="ghost"
              size="icon"
              className="rounded-full bg-transparent text-destructive group-data-[rich-color='true']:text-primary-foreground"
              onClick={onGoBack}
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
