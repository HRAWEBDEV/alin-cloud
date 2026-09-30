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

export default function TablesFilters() {
  const { dic } = useTablesControlContext();
  const {
    shareDictionary: {
      components: { noItemFound },
    },
  } = useShareDictionary();
  return (
    <header className="sticky top-0 bg-background z-2 p-4">
      {false && (
        <div className="absolute inset-x-0 top-0">
          <LinearLoading />
        </div>
      )}
      <div className="grid gap-4 grid-cols-[minmax(10rem,15rem)_max-content]">
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
        <Button>{dic.filters.newTable}</Button>
      </div>
    </header>
  );
}
