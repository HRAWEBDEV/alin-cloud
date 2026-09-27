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

export default function SidebarNavItem({
  navItem,
  searchText,
}: {
  navItem: NavigationItem;
  searchText?: string;
}) {
  const [open, setOpen] = useState(false);
  const {
    shareDictionary: {
      components: { navigation: dic },
    },
  } = useShareDictionary();

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
      >
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              size="sm"
              className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground text-start gap-3 font-normal min-h-10 text-[0.8rem] rounded-none"
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
              />
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  }
  return (
    <Button
      key={navItem.name}
      variant="link"
      size="sm"
      className="text-[0.8rem] w-full justify-start gap-3 text-foreground font-normal ps-14 min-h-10 rounded-none"
    >
      <span>{dic[navItem.name as keyof typeof dic]}</span>
    </Button>
  );
}
