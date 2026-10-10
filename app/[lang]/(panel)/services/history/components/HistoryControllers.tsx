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
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
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
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="rounded-full bg-transparent group-data-[rich-color='true']:text-primary-foreground"
            >
              <GoHistory className="size-5" />
            </Button>
          }
        />
        <DropdownMenuContent align="start">
          <DropdownMenuGroup>
            <DropdownMenuLabel>{dic.histroy}</DropdownMenuLabel>
            {["سالن‌ها", "رک میزها", "میزها"].map((item) => (
              <DropdownMenuItem
                key={item}
                className="text-neutral-700 dark:text-neutral-400 min-h-10"
              >
                <span>{item}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
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
