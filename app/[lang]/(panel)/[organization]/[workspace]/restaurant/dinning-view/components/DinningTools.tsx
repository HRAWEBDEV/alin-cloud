"use client";
import { Button } from "@/components/ui/button";
import DinnerIcon from "@/app/[lang]/(panel)/components/navigation/icons/DinnerIcon";
import { useDinningControlContext } from "../services/control/dinningControlContext";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { InputGroupAddon } from "@/components/ui/input-group";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";

export default function DinningTools() {
  const {
    dic,
    tables: { showList, onToggleList },
    grid: { boxes, onAddGridBox },
  } = useDinningControlContext();
  const {
    shareDictionary: {
      components: { noItemFound: noItemFoundDic },
    },
  } = useShareDictionary();
  return (
    <div className="absolute bottom-0 inset-x-0 z-4">
      {showList && (
        <div className="p-2 border border-border bg-neutral-200 dark:bg-neutral-800 mb-1 rounded-md w-[min(95%,60rem)] mx-auto overflow-auto flex gap-1">
          {Array.from({ length: 200 }, (_, i) => ({ id: i + 1 })).map(
            (item) => (
              <Button
                variant="outline"
                key={item.id}
                className="h-auto size-14"
                onClick={() => onAddGridBox({ id: item.id })}
              >
                <h3 className="font-en-roboto font-medium text-base">
                  {item.id.toString().padStart(2, "0")}
                </h3>
              </Button>
            ),
          )}
        </div>
      )}
      <div className="w-[min(95%,40rem)] mx-auto p-0.5 px-1 bg-neutral-200 dark:bg-neutral-800 border border-border mb-2 rounded-full flex">
        <div className="flex gap-1 items-center">
          <Combobox items={[]}>
            <ComboboxInput
              showClear
              className="rounded-full bg-background max-w-44"
            >
              <InputGroupAddon align="inline-start">
                {dic.tools.salon}
              </InputGroupAddon>
            </ComboboxInput>
            <ComboboxContent>
              <ComboboxEmpty>{noItemFoundDic.title}</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
          <Button
            size="icon-lg"
            variant="outline"
            className="rounded-full"
            onClick={onToggleList}
          >
            <DinnerIcon className="size-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
