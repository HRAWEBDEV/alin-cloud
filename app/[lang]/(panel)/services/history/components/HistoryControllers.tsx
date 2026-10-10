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
import { useFindNavigationItemByPathname } from "../../../hooks/useFindNavigationItem";
import { useRouter } from "next/navigation";

export default function HistoryControllers() {
  const { onGoBack, canGoBack, historyList } = useHistoryContext();
  const checkNavItem = useFindNavigationItemByPathname();
  const {
    shareDictionary: {
      components: { history: dic, navigation: navigationDic },
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
        <DropdownMenuContent align="start" className="max-h-80">
          <DropdownMenuGroup className="flex flex-col-reverse">
            {historyList.map((item) => {
              const navItem = checkNavItem(item.path);
              return (
                <DropdownMenuItem
                  key={item.id}
                  className="text-neutral-700 dark:text-neutral-400 min-h-10"
                >
                  <span>
                    {navItem
                      ? navigationDic[
                          navItem.name as keyof typeof navigationDic
                        ]
                      : ""}
                  </span>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuLabel>{dic.histroy}</DropdownMenuLabel>
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
