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

export default function TablesGrid() {
  return (
    <Table>
      <TableHeader className="bg-neutral-200 dark:bg-neutral-800">
        <TableRow>
          <TableHead className="text-center min-w-24 w-24">شماره میز</TableHead>
          <TableHead className="text-start min-w-56">نام سالن</TableHead>
          <TableHead className="text-center min-w-24 w-24">نوع</TableHead>
          <TableHead className="text-center min-w-36 w-36">
            حداکثر ظرفیت
          </TableHead>
          <TableHead className="text-center min-w-24 w-24">VIP</TableHead>
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
            <TableCell className="text-center">میز</TableCell>
            <TableCell className="text-center">{item}</TableCell>
            <TableCell className="text-center">
              <IoIosStar className="size-5 inline text-orange-700 dark:text-organe-400" />
            </TableCell>
            <TableCell className="text-center p-0">
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="ghost" size="icon-sm">
                      <IoEllipsisVertical className="size-4 text-amber-500/30" />
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
