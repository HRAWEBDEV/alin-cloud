"use client";
import { useState, useEffect } from "react";
import { useBaseConfig } from "@/services/base-config/baseConfigContext";
import { ImConnection } from "react-icons/im";
import { MdSignalWifiConnectedNoInternet0 } from "react-icons/md";
import { useConnectionStatus } from "@/hooks/useConnection";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { Button } from "@/components/ui/button";
import { IoCalendarOutline } from "react-icons/io5";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export default function ConnectivityInfo() {
  const {
    shareDictionary: {
      components: { connectivity: dic },
    },
  } = useShareDictionary();
  const { isOnline } = useConnectionStatus();
  const [date, setDate] = useState<null | Date>(() => {
    return new Date();
  });
  const { locale } = useBaseConfig();

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return (
    <div className="flex gap-2 flex-wrap items-center justify-between px-2">
      <Popover>
        <PopoverTrigger
          nativeButton={false}
          render={
            <div className="flex items-center text-xs text-orange-800 dark:text-orange-400 font-medium gap-2">
              <Button variant="ghost" size="icon-xs">
                <IoCalendarOutline className="size-5" />
              </Button>
              <span>
                {date
                  ? date.toLocaleDateString(locale, {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : ""}
              </span>
            </div>
          }
        />
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" captionLayout="dropdown" />
        </PopoverContent>
      </Popover>
      <div>
        <Tooltip>
          <TooltipTrigger
            render={
              <div>
                {isOnline ? (
                  <ImConnection className="size-5 text-primary" />
                ) : (
                  <MdSignalWifiConnectedNoInternet0 className="size-5 text-destructive" />
                )}
              </div>
            }
          />
          <TooltipContent>
            {isOnline ? dic.connected : dic.connectionLost}
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
