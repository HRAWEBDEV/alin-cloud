import {
  Table,
  TableBody,
  TableCell,
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
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { FaTrashCan } from "react-icons/fa6";

export default function SalonsGrid() {
  return (
    <Table>
      <TableHeader className="bg-neutral-200 dark:bg-neutral-800">
        <TableRow>
          <TableHead className="text-center min-w-24 w-24">ردیف</TableHead>
          <TableHead className="text-start min-w-56">نام سالن</TableHead>
          <TableHead className="text-center min-w-24 w-24">عملیات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <TableRow
            key={item}
            className="even:bg-neutral-100 dark:even:bg-neutral-900"
          >
            <TableCell className="text-center">{item}</TableCell>
            <TableCell>سالن اصلی</TableCell>
            <TableCell className="text-center p-0">
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
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
