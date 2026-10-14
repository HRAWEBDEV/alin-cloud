import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { type TablesDictionary } from "@/internalization/app/dictionaries/panel/restaurant/tables/dictionary";
import { Field, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { Checkbox } from "@/components/ui/checkbox";
import EditTableForm from "./EditTableForm";
import { type TablesControlContextProps } from "../../services/control/tablesControlContext";

export default function EditTableDialog({
  dic,
  editTable,
}: {
  dic: TablesDictionary;
  editTable: TablesControlContextProps["editTable"];
}) {
  const {
    shareDictionary: {
      components: { settings },
    },
  } = useShareDictionary();
  return (
    <Dialog
      open={editTable.open}
      onOpenChange={(state) => {
        editTable.onToggle(state, null);
      }}
    >
      <DialogContent className="p-0 gap-0 max-h-[90svh] flex flex-col overflow-hidden">
        <form className="flex flex-col overflow-hidden grow">
          <DialogHeader className="border-b border-border p-4">
            <DialogTitle>{dic.editTable.addTable}</DialogTitle>
            <DialogDescription className="hidden">
              {dic.editTable.addTable}
            </DialogDescription>
          </DialogHeader>
          <EditTableForm dic={dic} editTable={editTable} />
          <DialogFooter className="py-2 px-4 sm:items-center">
            <div className="grow order-1 md:order-0">
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
