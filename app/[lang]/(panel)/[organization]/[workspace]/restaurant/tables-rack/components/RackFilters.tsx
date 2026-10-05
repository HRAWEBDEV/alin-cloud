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
import { useRackControlContext } from "../services/control/rackControlContext";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BsFillGridFill } from "react-icons/bs";
import { RiGridFill } from "react-icons/ri";
import { MdFormatBold } from "react-icons/md";
import DinnerIcon from "@/app/[lang]/(panel)/components/navigation/icons/DinnerIcon";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function RackFilters() {
  const { dic } = useRackControlContext();
  const {
    shareDictionary: {
      components: { noItemFound },
    },
  } = useShareDictionary();
  return (
    <div>
      <div className="mb-4">
        <div className="text-center md:text-start text-xs font-medium text-neutral-700 dark:text-neutral-400">
          <span>{dic.filters.lastUpdated}: </span>
          <span>
            {new Date().toLocaleTimeString("fa", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
      <div className="mb-4">
        <ToggleGroup className="w-full" variant="outline">
          <ToggleGroupItem
            value="minimal"
            aria-label="Minimal Table View Mode"
            className="cursor-pointer grow"
          >
            <RiGridFill className="size-5" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="normal"
            aria-label="Normal Table View Mode"
            className="cursor-pointer grow"
          >
            <BsFillGridFill className="size-5" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="mb-4 flex gap-2">
        <ToggleGroup className="w-full" variant="outline">
          <ToggleGroupItem
            value="bold"
            aria-label="bold Table View Mode"
            className="cursor-pointer grow"
          >
            <MdFormatBold className="size-5" />
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup className="w-full" variant="outline">
          <ToggleGroupItem
            value="direction"
            aria-label="direction Table View Mode"
            className="cursor-pointer grow"
          >
            <div className="flex flex-col items-center justify-center">
              <DinnerIcon className="size-5" />
              <FaLongArrowAltRight className="size-3" />
            </div>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="mb-4">
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
      <div className="grid gap-4">
        <div className="flex gap-4 items-center">
          <Switch
            style={{
              direction: "ltr",
            }}
            id="occupied"
            className="scale-120"
          />
          <Label htmlFor="occupied">{dic.filters.occupied} (4)</Label>
        </div>
        <div className="flex gap-4 items-center">
          <Switch
            style={{
              direction: "ltr",
            }}
            id="empty"
            className="scale-120"
          />
          <Label htmlFor="empty">{dic.filters.empty} (3)</Label>
        </div>
        <div className="flex gap-4 items-center">
          <Switch
            style={{
              direction: "ltr",
            }}
            id="reserved"
            className="scale-120"
          />
          <Label htmlFor="reserved">{dic.filters.reserved} (2)</Label>
        </div>
      </div>
    </div>
  );
}
