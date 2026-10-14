import { Button } from "@/components/ui/button";
import { type TablesControlContextProps } from "../../services/control/tablesControlContext";
import EditTableForm from "./EditTableForm";
import { FaTimes } from "react-icons/fa";

export default function EditTablePanel({
  dic,
  editTable,
}: {
  dic: TablesControlContextProps["dic"];
  editTable: TablesControlContextProps["editTable"];
}) {
  return (
    <div className="border border-border rounded-md">
      <div className="p-4 py-2 border-b border-border flex items-center gap-4 justify-between">
        <h3 className="font-medium">{dic.filters.newTable}</h3>
        <Button
          variant="destructive"
          size="icon"
          onClick={() => editTable.onToggle(false, null)}
        >
          <FaTimes />
        </Button>
      </div>
      <EditTableForm dic={dic} editTable={editTable} />
      <div className="p-4 flex gap-2 justify-end">
        <Button
          variant="outline"
          className="sm:w-28"

          onClick={() => {
            editTable.onToggle(false, null);
          }}
        >
          {dic.editTable.close}
        </Button>
        <Button className="sm:w-28">{dic.editTable.saveChanges}</Button>
      </div>
    </div>
  );
}
