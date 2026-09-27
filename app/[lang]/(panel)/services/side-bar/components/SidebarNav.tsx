import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  type NavigationItem,
  navigationItems,
} from "../../../utils/navigationItems";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { getNavigationIcons } from "../../../utils/getNavigationIcons";
import { Field } from "@/components/ui/field";
import {
  InputGroupInput,
  InputGroup,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { IoIosSearch } from "react-icons/io";

export default function SidebarNav() {
  const {
    shareDictionary: {
      components: { navigation: dic },
    },
  } = useShareDictionary();
  const renderItem = (navItem: NavigationItem) => {
    if ("items" in navItem) {
      return (
        <Collapsible key={navItem.name}>
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
              {navItem.items?.map((child) => renderItem(child))}
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
  };

  return (
    <div className="w-full grow overflow-auto">
      <div className="p-2 bg-sidebar sticky top-0 z-1">
        <Field>
          <InputGroup className="bg-background">
            <InputGroupInput type="search" placeholder={dic.search + " ..."} />
            <InputGroupAddon align="inline-start">
              <IoIosSearch className="size-5" />
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </div>
      <div className="flex flex-col gap-1 text-neutral-800 dark:text-neutral-200">
        {navigationItems.map((item) => renderItem(item))}
      </div>
    </div>
  );
}
