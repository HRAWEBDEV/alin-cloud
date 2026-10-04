import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoEllipsisVertical } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { FaTrashCan } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import {
  tableFeatures,
  createColumnHelper,
  useTable,
  flexRender,
  metaHelper,
} from "@tanstack/react-table";
import { cn } from "cn";

const features = tableFeatures({
  columnMeta: metaHelper<{
    headerClassNames: string;
    cellClassNames: string;
  }>(),
});

interface TData {
  id: number;
  tableNo: number;
  salonName: string;
  tableType: string;
  maxCapacity: number;
  isVip: boolean;
}

const data = [
  {
    id: 1,
    tableNo: 1,
    salonName: "سالن اصلی",
    tableType: "میز",
    maxCapacity: 10,
    isVip: true,
  },
  {
    id: 2,
    tableNo: 2,
    salonName: "سالن اصلی",
    tableType: "میز",
    maxCapacity: 10,
    isVip: true,
  },
];

export default function TablesGrid() {
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
        cellClassNames: "text-center",
      },
    }),
  ]);

  const table = useTable({
    features,
    columns,
    data,
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((group) => {
          return (
            <TableRow key={group.id}>
              {group.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className={cn(
                      "bg-grid-header",
                      header.column.columnDef.meta?.headerClassNames,
                    )}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          );
        })}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => {
          return (
            <TableRow key={row.id} className="even:bg-grid-row-stroke">
              {row.getAllCells().map((cell) => {
                return (
                  <TableCell
                    key={cell.id}
                    className={cn(cell.column.columnDef.meta?.cellClassNames)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
