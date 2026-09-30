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

export default function TablesGrid() {
  return (
    <div className="border border-border rounded-md overflow-hidden">
      <Table>
        <TableHeader className="bg-neutral-200 dark:bg-neutral-800">
          <TableRow>
            <TableHead className="text-center min-w-24 w-24">
              شماره میز
            </TableHead>
            <TableHead className="text-start min-w-56">نام سالن</TableHead>
            <TableHead className="text-center min-w-24 w-24">نوع</TableHead>
            <TableHead className="text-center min-w-36 w-36">
              حداکثر ظرفیت
            </TableHead>
            <TableHead className="text-center min-w-24 w-24">VIP</TableHead>
            <TableHead className="text-center min-w-36 w-36">عملیات</TableHead>
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
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
