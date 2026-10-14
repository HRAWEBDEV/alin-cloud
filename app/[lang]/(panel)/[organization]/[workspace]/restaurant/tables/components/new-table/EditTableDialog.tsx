import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { type TablesDictionary } from "@/internalization/app/dictionaries/panel/restaurant/tables/dictionary";
import { Button } from "@/components/ui/button";
import EditTableForm from "./EditTableForm";
import { type TablesControlContextProps } from "../../services/control/tablesControlContext";

export default function EditTableDialog({
  dic,
  editTable,
}: {
  dic: TablesDictionary;
  editTable: TablesControlContextProps["editTable"];
}) {
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
