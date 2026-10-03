import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { NumericFormat } from "react-number-format";

export default function TablesListPaging() {
  return (
    <div className="shrink-0 border-t border-input p-1 flex gap-2">
      <div>
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="flex gap-1 items-center text-neutral-600 dark:text-neutral-400 grow justify-end">
        {true && (
          <div className="basis-24 hidden md:block">
            <Field>
              <InputGroup className="grow">
                <NumericFormat customInput={InputGroupInput} />
              </InputGroup>
            </Field>
          </div>
        )}
        <div className="flex gap-1 items-center">
          <Button variant="outline" size="icon">
            <MdKeyboardDoubleArrowRight className="size-4 ltr:rotate-180" />
          </Button>
          <Button variant="outline" className="gap-1">
            <MdKeyboardArrowRight />
            <span className="hidden lg:inline">{}</span>
          </Button>
          {true ? (
            <div
              style={{
                direction: "ltr",
              }}
              className="text-base"
            >
              <span>{1}</span> / <span>{2}</span>
            </div>
          ) : (
            <div>...</div>
          )}
          <Button variant="outline" className="gap-1 ltr:rotate-180">
            <span className="hidden lg:inline"></span>
            <MdKeyboardArrowLeft className="ltr:rotate-180" />
          </Button>
          <Button variant="outline" size="icon">
            <MdKeyboardDoubleArrowLeft className="size-4 ltr:rotate-180" />
          </Button>
        </div>
      </div>
    </div>
  );
}
