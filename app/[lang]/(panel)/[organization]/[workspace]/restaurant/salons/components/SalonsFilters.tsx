"use client";
import { Field } from "@/components/ui/field";
import {
  InputGroupAddon,
  InputGroup,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useSalonsControlContext } from "../services/control/salonsControlContext";
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

export default function SalonsFilters() {
  const { toggleOpen } = useSettingsContext();
  const { dic, editSalon } = useSalonsControlContext();
  const {
    shareDictionary: {
      components: { settings },
    },
  } = useShareDictionary();
  return (
    <header className="sticky top-0 bg-background z-2 p-4">
      {false && (
        <div className="absolute inset-x-0 top-0">
          <LinearLoading />
        </div>
      )}
      <div className="flex gap-4 flex-wrap items-center justify-between">
        <div className="grid gap-4 grid-cols-[minmax(10rem,12rem)]">
          <Field>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                {dic.filters.search}
              </InputGroupAddon>
              <InputGroupInput type="search" />
            </InputGroup>
          </Field>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => {
              editSalon.onToggle(true, null);
            }}
          >
            <FaPlus />
            <span className="hidden md:inline">{dic.filters.newSalon}</span>
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
