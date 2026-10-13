"use client";
import { useMenusControlContext } from "../services/control/menusControlContext";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import LinearLoading from "@/app/[lang]/(panel)/components/LinearLoading";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getSettingsIcon } from "@/app/[lang]/(panel)/services/settings/utils/getSettingsIcon";
import { useSettingsContext } from "@/app/[lang]/(panel)/services/settings/settingsContext";
import { getViewOptionIcon } from "../utils/getViewOptionIcon";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { IoIosSearch } from "react-icons/io";

export default function MenusFilters() {
  const { toggleOpen } = useSettingsContext();
  const { dic, contentView, onChangeContentView } = useMenusControlContext();
  const {
    shareDictionary: {
      components: { noItemFound, settings },
    },
  } = useShareDictionary();
  return (
    <header className="sticky top-0 bg-background z-2 p-2">
      {false && (
        <div className="absolute inset-x-0 top-0">
          <LinearLoading />
        </div>
      )}
      <div className="flex gap-2 flex-wrap items-center justify-between">
        <div className="grid gap-2 grid-cols-[minmax(10rem,12rem)]">
          <Field>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <IoIosSearch className="size-5" />
              </InputGroupAddon>
              <InputGroupInput
                type="search"

                placeholder={dic.filters.search + " ..."}
              />
            </InputGroup>
          </Field>
        </div>
        <div className="flex gap-2">
          <Button>
            <FaPlus />
            <span className="hidden md:inline">{dic.filters.newMenus}</span>
          </Button>
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
                  onChangeContentView(contentView === "grid" ? "list" : "grid");
                }}
              >
                {getViewOptionIcon(contentView, {
                  className: "size-5",
                })}
                <span>{dic.filters.view}: </span>
                <span>{dic.filters[contentView]}</span>
              </DropdownMenuItem>
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
