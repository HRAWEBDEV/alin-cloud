"use client";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import LinearLoading from "@/app/[lang]/(panel)/components/LinearLoading";
import { Button } from "@/components/ui/button";
import { IoReload } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getSettingsIcon } from "@/app/[lang]/(panel)/services/settings/utils/getSettingsIcon";
import { TbFilterSearch } from "react-icons/tb";
import { useSettingsContext } from "@/app/[lang]/(panel)/services/settings/settingsContext";
import { Badge } from "@/components/ui/badge";

export default function RackActions() {
  const { toggleOpen } = useSettingsContext();
  const {
    shareDictionary: {
      components: { settings },
    },
  } = useShareDictionary();
  return (
    <header className="sticky top-0 bg-background z-2 py-2">
      {false && (
        <div className="absolute inset-x-0 top-0">
          <LinearLoading />
        </div>
      )}
      <div className="flex gap-2 flex-wrap items-center justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="text-primary border-primary bg-primary/5 relative"
          >
            <TbFilterSearch className="size-5" />
            <div className="absolute -top-1.5 -inset-e-1.5">
              <Badge
                style={{
                  direction: "ltr",
                }}
                variant="default"
                className="p-1 rounded-full size-5 font-en-roboto"
              >
                1
              </Badge>
            </div>
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <IoReload className="size-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="destructive" size="icon">
                  <IoSettingsSharp className="size-5" />
                </Button>
              }
            />
            <DropdownMenuContent align="end" className="w-auto">
              <DropdownMenuItem
                className="h-11"
                onClick={() => {
                  toggleOpen(true, "shortcuts");
                }}
              >
                {getSettingsIcon("shortcuts", {
                  className: "size-5",
                })}
                <span>{settings.shortcuts}</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="h-11"
                onClick={() => {
                  toggleOpen(true, "help");
                }}
              >
                {getSettingsIcon("help", {
                  className: "size-5",
                })}
                <span>{settings.help}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
