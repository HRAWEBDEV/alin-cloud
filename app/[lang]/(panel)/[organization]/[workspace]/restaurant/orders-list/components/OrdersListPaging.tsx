import { gridRowsCountOptions } from "@/app/[lang]/(panel)/services/settings/utils/gridRowsCountOptions";
import { Button } from "@/components/ui/button";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { Field } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { NumericFormat } from "react-number-format";
import { useOrdersControlContext } from "../services/control/ordersControlContext";

export default function OrdersListPaging() {
  const {
    tablesGrid: { table },
  } = useOrdersControlContext();
  return (
    <div className="sticky bottom-0 shrink-0 border-t border-input p-1 flex gap-2 bg-background z-2">
      <div className="max-w-20">
        <Combobox
          items={gridRowsCountOptions}
          value={table.state.pagination.pageSize}
          onValueChange={(value) => {
            if (!value) return;
            table.setPageSize(value);
          }}
        >
          <ComboboxInput />
          <ComboboxContent>
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
      <div className="flex gap-1 items-center text-neutral-600 dark:text-neutral-400 grow justify-end">
        {true && (
          <div className="basis-24 hidden md:block">
            <Field>
              <InputGroup className="grow">
                <NumericFormat
                  customInput={InputGroupInput}
                  onValueChange={({ floatValue }) => {
                    if (!floatValue || floatValue > table.getPageCount())
                      return;
                    table.setPageIndex(floatValue - 1);
                  }}
                />
              </InputGroup>
            </Field>
          </div>
        )}
        <div className="flex gap-1 items-center">
          <Button
            variant="outline"
            size="icon"
            disabled={!table.getCanPreviousPage()}
            onClick={() => {
              table.firstPage();
            }}
          >
            <MdKeyboardDoubleArrowRight className="size-4 ltr:rotate-180" />
          </Button>
          <Button
            variant="outline"
            className="gap-1"
            disabled={!table.getCanPreviousPage()}
            onClick={() => {
              table.previousPage();
            }}
          >
            <MdKeyboardArrowRight />
            <span className="hidden lg:inline">{}</span>
          </Button>
          {table.getPageCount() ? (
            <div
              style={{
                direction: "ltr",
              }}
              className="text-sm"
            >
              <span className="inline-block min-w-6 text-center">
                {table.state.pagination.pageIndex + 1}
              </span>{" "}
              /{" "}
              <span className="inline-block min-w-6 text-center">
                {table.getPageCount()}
              </span>
            </div>
          ) : (
            <div>...</div>
          )}
          <Button
            variant="outline"
            className="gap-1 ltr:rotate-180"
            disabled={!table.getCanNextPage()}
            onClick={() => {
              table.nextPage();
            }}
          >
            <span className="hidden lg:inline"></span>
            <MdKeyboardArrowLeft className="ltr:rotate-180" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            disabled={!table.getCanNextPage()}
            onClick={() => {
              table.lastPage();
            }}
          >
            <MdKeyboardDoubleArrowLeft className="size-4 ltr:rotate-180" />
          </Button>
        </div>
      </div>
    </div>
  );
}
