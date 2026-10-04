"use client";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { InputGroupAddon } from "@/components/ui/input-group";
import { useTablesControlContext } from "../services/control/tablesControlContext";
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

export default function TablesFilters() {
  const { toggleOpen } = useSettingsContext();
  const { dic, editTable, contentView, onChangeContentView } =
    useTablesControlContext();
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
          <Combobox items={[]}>
            <ComboboxInput showClear>
              <InputGroupAddon align="inline-start">
                {dic.filters.salon}
              </InputGroupAddon>
            </ComboboxInput>
            <ComboboxContent>
              <ComboboxEmpty>{noItemFound.title}</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => {
              editTable.onToggle(true, null);
            }}
          >
            <FaPlus />
            <span className="hidden md:inline">{dic.filters.newTable}</span>
          </Button>
          <Button variant="outline" size="icon">
            <IoReload />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="destructive" size="icon">
                  <IoSettingsSharp />
                </Button>
              }
            />
            <DropdownMenuContent align="end">
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
