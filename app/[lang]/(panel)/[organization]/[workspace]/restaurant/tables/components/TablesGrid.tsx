import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { flexRender } from "@tanstack/react-table";
import { cn } from "cn";
import { useTablesControlContext } from "../services/control/tablesControlContext";

export default function TablesGrid() {
  const {
    tablesGrid: { table },
  } = useTablesControlContext();
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
                      "bg-grid-header text-grid-header-foreground",
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
