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
import { Switch } from "@/components/ui/switch";
import { IoIosAdd } from "react-icons/io";
import { type TablesControlContextProps } from "../../services/control/tablesControlContext";
import { Checkbox } from "@/components/ui/checkbox";

export default function EditTableForm({
  dic,
}: {
  dic: TablesDictionary;
  editTable: TablesControlContextProps["editTable"];
}) {
  const {
    shareDictionary: {
      components: { noItemFound, settings },
    },
  } = useShareDictionary();
  return (
    <div className="p-4 overflow-auto">
      <FieldGroup className="gap-4">
        <div className="grid gap-4 grid-cols-2">
          <Field orientation="horizontal">
            <Switch id="switch-focus-mode" dir="ltr" />
            <FieldLabel htmlFor="switch-focus-mode">
              {dic.editTable.VIP}
            </FieldLabel>
          </Field>
          <div></div>
          <Field className="gap-2">
            <FieldLabel>{dic.editTable.tableType}</FieldLabel>
            <InputGroup>
              <InputGroupInput autoFocus />
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
                <ComboboxEmpty>
                  <div>
                    <p className="mb-2">{noItemFound.title}</p>
                    <Button>
                      <IoIosAdd className="size-5" />
                      {dic.editTable.newSalon}
                    </Button>
                  </div>
                </ComboboxEmpty>
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
        <div className="grow order-1 md:order-0">
          <Field orientation="horizontal" className="gap-2">
            <Checkbox className="scale-110" />
            <FieldLabel className="text-neutral-500">
              {settings.closeAfter}
            </FieldLabel>
          </Field>
        </div>
      </FieldGroup>
    </div>
  );
}
