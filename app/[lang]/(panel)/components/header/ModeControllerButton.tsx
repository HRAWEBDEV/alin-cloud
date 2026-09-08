"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getModeIcon } from "@/utils/getModeIcons";
import { useTheme } from "next-themes";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type AppModes, appModes } from "@/utils/appModes";

export default function ModeControllerButton() {
  const [open, setOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const {
    shareDictionary: {
      components: { modeController: dic },
    },
  } = useShareDictionary();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon-lg"
            className="rounded-full bg-transparent text-neutral-600 dark:text-neutral-400"
          >
            {mounted &&
              theme &&
              getModeIcon(theme as AppModes, {
                className: "size-5",
              })}
          </Button>
        }
      />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {appModes.map((mode) => (
            <DropdownMenuItem
              key={mode}
              className="text-neutral-700 dark:text-neutral-400"
              onClick={() => {
                setTheme(mode);
              }}
            >
              {getModeIcon(mode, {
                className: "size-5",
              })}
              <span>{dic[mode]}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
