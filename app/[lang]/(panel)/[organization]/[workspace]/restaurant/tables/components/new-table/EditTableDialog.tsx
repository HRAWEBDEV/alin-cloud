import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { type TablesDictionary } from "@/internalization/app/dictionaries/panel/restaurant/tables/dictionary";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { NumericFormat } from "react-number-format";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { Button } from "@/components/ui/button";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { Checkbox } from "@/components/ui/checkbox";

export default function EditTableDialog({ dic }: { dic: TablesDictionary }) {
  const {
    shareDictionary: {
      components: { noItemFound, settings },
    },
  } = useShareDictionary();
  return (
    <Dialog open>
      <DialogContent className="p-0 gap-0 max-h-[90svh] flex flex-col overflow-hidden">
        <form className="flex flex-col overflow-hidden grow">
          <DialogHeader className="border-b border-border p-4">
            <DialogTitle>{dic.editTable.addTable}</DialogTitle>
            <DialogDescription className="hidden">
              {dic.editTable.addTable}
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 overflow-auto">
            <FieldGroup className="gap-4">
              <div className="grid gap-4 grid-cols-2">
                <Field className="gap-2">
                  <FieldLabel>{dic.editTable.tableType}</FieldLabel>
                  <InputGroup>
                    <InputGroupInput />
                  </InputGroup>
                </Field>
                <Field className="gap-2">
                  <FieldLabel>{dic.editTable.tableNo}</FieldLabel>
                  <InputGroup>
                    <NumericFormat customInput={InputGroupInput} />
                  </InputGroup>
                </Field>
                <Field className="gap-2">
                  <FieldLabel>{dic.editTable.salon}</FieldLabel>
                  <Combobox items={[]}>
                    <ComboboxInput showClear />
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
                </Field>
                <Field className="gap-2">
                  <FieldLabel>{dic.editTable.maxCapacity}</FieldLabel>
                  <InputGroup>
                    <NumericFormat customInput={InputGroupInput} />
                  </InputGroup>
                </Field>
              </div>
            </FieldGroup>
          </div>
          <DialogFooter className="py-2 px-4 sm:items-center">
            <div className="grow">
              <Field orientation="horizontal" className="gap-2">
                <Checkbox className="scale-110" />
                <FieldLabel className="text-neutral-500">
                  {settings.closeAfter}
                </FieldLabel>
              </Field>
            </div>
            <Button variant="outline" className="sm:w-28">
              {dic.editTable.close}
            </Button>
            <Button className="sm:w-28">{dic.editTable.saveChanges}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
