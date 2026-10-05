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

export default function RackFilters() {
  const { dic } = useRackControlContext();
  const {
    shareDictionary: {
      components: { noItemFound },
    },
  } = useShareDictionary();
  return (
    <div>
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
  );
}
