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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BiSolidEraser } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";

export default function DinningTools() {
  const {
    dic,
    tables: { showList, onToggleList },
    grid: {
      boxes,
      onAddGridBox,
      onRemoveGridBoxes,
      selectedBoxIds,
      onClearGridBoxes,
    },
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
            (item) => {
              const isTableSelected = boxes.some((box) => item.id === box.id);
              return (
                <Button
                  data-is-table-selected={isTableSelected}
                  variant="outline"
                  key={item.id}
                  className="h-auto size-14 data-[is-table-selected='true']:bg-primary! data-[is-table-selected='true']:text-primary-foreground!"
                  onClick={() => {
                    if (isTableSelected) return;
                    onAddGridBox({ id: item.id });
                  }}
                >
                  <h3 className="font-en-roboto font-medium text-base">
                    {item.id.toString().padStart(2, "0")}
                  </h3>
                </Button>
              );
            },
          )}
        </div>
      )}
      <div className="w-[min(95%,40rem)] mx-auto p-0.5 px-1 bg-neutral-200 dark:bg-neutral-800 border border-border mb-2 rounded-full flex">
        <div className="flex gap-1 items-center grow">
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
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  size="icon-lg"
                  variant="outline"
                  className="rounded-full"
                  onClick={onToggleList}
                >
                  <DinnerIcon className="size-6" />
                </Button>
              }
            />
            <TooltipContent>{dic.tools.tables}</TooltipContent>
          </Tooltip>
          {boxes.length > 0 && (
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    size="icon-lg"
                    variant="outline"
                    className="rounded-full"
                    onClick={() => onClearGridBoxes()}
                  >
                    <BiSolidEraser className="size-5 text-destructive" />
                  </Button>
                }
              />
              <TooltipContent>{dic.tools.eraseGrid}</TooltipContent>
            </Tooltip>
          )}
          <div className="grow flex gap-1 items-center justify-end">
            {!!selectedBoxIds.length && (
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      size="icon-lg"
                      variant="outline"
                      className="rounded-full"
                      onClick={() => {
                        onRemoveGridBoxes(selectedBoxIds);
                      }}
                    >
                      <FaTrashAlt className="size-5 text-destructive" />
                    </Button>
                  }
                />
                <TooltipContent>{dic.tools.removeBox}</TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
