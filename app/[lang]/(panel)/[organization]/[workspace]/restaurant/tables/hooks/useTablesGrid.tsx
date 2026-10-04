import {
  createColumnHelper,
  metaHelper,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { data, TData } from "../services/tablesApiActions";

const features = tableFeatures({
  columnMeta: metaHelper<{
    headerClassNames: string;
    cellClassNames: string;
  }>(),
});

export function useTablesGrid() {
  const columnHelper = createColumnHelper<typeof features, TData>();

  const columns = columnHelper.columns([
    columnHelper.accessor("tableNo", {
      header: "شماره میز",
      meta: {
        headerClassNames: "text-center min-w-24 w-24",
        cellClassNames: "text-center",
      },
    }),
    columnHelper.accessor("salonName", {
      header: "نام سالن",
      meta: {
        headerClassNames: "text-start min-w-48",
        cellClassNames: "text-start",
      },
    }),
    columnHelper.accessor("tableType", {
      header: "نوع",
      meta: {
        headerClassNames: "text-center min-w-36 w-36",
        cellClassNames: "text-center",
      },
    }),
    columnHelper.accessor("maxCapacity", {
      header: "حداکثر ظرفیت",
      meta: {
        headerClassNames: "text-center min-w-24 w-24",
        cellClassNames: "text-center",
      },
    }),
    columnHelper.accessor("isVip", {
      header: "VIP",
      meta: {
        headerClassNames: "text-center min-w-24 w-24",
        cellClassNames: "text-center",
      },
    }),
    columnHelper.display({
      header: "عملیات",
      cell() {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="ghost" size="icon-sm">
                  <IoEllipsisVertical className="size-4" />
                </Button>
              }
            />
            <DropdownMenuContent align="end">
              <DropdownMenuItem variant="destructive" className="h-11">
                <FaTrashCan className="size-5" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
      meta: {
        headerClassNames: "text-center min-w-24 w-24",
        cellClassNames: "text-center p-0",
      },
    }),
  ]);

  const table = useTable({
    features,
    columns,
    data,
  });
  return { table };
}
