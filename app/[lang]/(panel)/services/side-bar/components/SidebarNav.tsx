"use client";
import { useState, useRef } from "react";
import { navigationItems } from "../../../utils/navigationItems";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { Field } from "@/components/ui/field";
import {
  InputGroupInput,
  InputGroup,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { IoIosSearch } from "react-icons/io";
import SidebarNavItem from "./SidebarNavItem";
import NoItemFound from "../../../components/NoItemFound";
import { FaBookBookmark } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useHotkey } from "@tanstack/react-hotkeys";
import { useShortcutsContext } from "../../shortcuts/shortcutsContext";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export default function SidebarNav() {
  const { onGetShortcutKeys } = useShortcutsContext();
  const [searchText, setSearchText] = useState("");
  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const {
    shareDictionary: {
      components: { navigation: dic },
    },
  } = useShareDictionary();

  // hotkey setup
  useHotkey(onGetShortcutKeys("general", "globalSearch"), () => {
    searchInputRef.current?.focus();
  });

  return (
    <div className="w-full grow overflow-auto">
      <div className="p-2.5 py-2 bg-sidebar sticky top-0 z-3">
        <Field>
          <InputGroup className="bg-background">
            <InputGroupInput
              type="search"
              placeholder={dic.search + " ..."}
              ref={searchInputRef}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <InputGroupAddon align="inline-start">
              <IoIosSearch className="size-5" />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end" className="-me-2">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      data-only-bookmarks={showOnlyBookmarks}
                      variant="ghost"
                      size="icon"
                      className="text-neutral-500/60 data-[only-bookmarks='true']:text-amber-500"
                      onClick={() => {
                        setShowOnlyBookmarks((pre) => !pre);
                      }}
                    >
                      <FaBookBookmark className="size-4" />
                    </Button>
                  }
                />
                <TooltipContent>{dic.showOnlyBookmarked}</TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </div>
      <div className="flex flex-col text-neutral-800 dark:text-neutral-200">
        {navigationItems.map((item) => (
          <SidebarNavItem
            key={item.name}
            navItem={item}
            searchText={searchText}
            onlyBookmarks={showOnlyBookmarks}
          />
        ))}
        <div className="last:hidden first:block!">
          <NoItemFound searchedText={searchText} />
        </div>
      </div>
    </div>
  );
}
