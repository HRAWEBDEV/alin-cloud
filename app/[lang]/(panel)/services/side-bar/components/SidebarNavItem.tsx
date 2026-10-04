"use client";
import { type NavigationItem } from "../../../utils/navigationItems";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { getNavigationIcons } from "../../../utils/getNavigationIcons";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { useState, useEffect } from "react";
import Highlighter from "react-highlight-words";
import Link from "next/link";
import { FaBookBookmark } from "react-icons/fa6";
import { useSidebar } from "../sidebarContext";

export default function SidebarNavItem({
  navItem,
  searchText,
  level = 1,
}: {
  navItem: NavigationItem;
  searchText?: string;
  level?: number;
}) {
  const { setOpenMobile } = useSidebar();
  const [open, setOpen] = useState(false);
  const {
    shareDictionary: {
      components: { navigation: dic },
    },
  } = useShareDictionary();
  const basePath = "/main/main";

  const filteredNavItems = (() => {
    if (!searchText || !navItem.items) return navItem.items;
    return navItem.items.filter((item) => {
      return dic[item.name as keyof typeof dic].includes(searchText);
    });
  })();
  const isMenuVisible = (() => {
    if (!searchText) return true;

    if (filteredNavItems && filteredNavItems.length > 0) {
      return true;
    }
    return (
      filteredNavItems === undefined &&
      dic[navItem.name as keyof typeof dic].includes(searchText)
    );
  })();

  useEffect(() => {
    if (searchText) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [searchText]);

  if (!isMenuVisible) return null;
  if (!!filteredNavItems) {
    return (
      <Collapsible
        key={navItem.name}
        open={open}
        onOpenChange={(state) => setOpen(state)}
        className="data-[open]:mb-4"
      >
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              size="sm"
              className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground text-start gap-4 font-normal min-h-10 text-[0.85rem] rounded-none"
            >
              {getNavigationIcons(navItem.name, {
                className: "size-7",
              })}
              <div className="grow">
                {dic[navItem.name as keyof typeof dic]}
              </div>
              <ChevronRightIcon className="transition-transform group-data-[panel-open]:rotate-90 rtl:rotate-180" />
            </Button>
          }
        />
        <CollapsibleContent>
          <div className="flex flex-col gap-1">
            {filteredNavItems.map((child) => (
              <SidebarNavItem
                key={child.name}
                navItem={child}
                searchText={searchText}
                level={level + 1}
              />
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  }
  return (
    <Button
      style={{
        paddingInlineStart:
          level === 1 ? "0.625rem" : (level - 1) * 3.5 + "rem",
      }}
      data-active-menu={navItem.name === "tablesRack"}
      key={navItem.name}
      variant="link"
      size="sm"
      className="text-[0.85rem] w-full justify-start gap-4 text-foreground font-normal min-h-10 rounded-none relative pe-8 hover:bg-neutral-200 dark:hover:bg-neutral-800 data-[active-menu='true']:bg-primary data-[active-menu='true']:text-primary-foreground"
      nativeButton={false}
      render={
        <Link
          href={`${basePath}${navItem.path}`}
          onClick={() => setOpenMobile(false)}
        >
          {getNavigationIcons(navItem.name, {
            className: "size-7",
          })}
          <Highlighter
            searchWords={[searchText || ""]}
            textToHighlight={dic[navItem.name as keyof typeof dic]}
          />
          <div className="absolute inset-e-0 z-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-amber-500"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <FaBookBookmark />
            </Button>
          </div>
        </Link>
      }
    ></Button>
  );
}
