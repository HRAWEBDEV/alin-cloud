import { useState } from "react";
import {
  createColumnHelper,
  metaHelper,
  tableFeatures,
  useTable,
  columnPinningFeature,
  columnSizingFeature,
  columnOrderingFeature,
  columnVisibilityFeature,
  columnResizingFeature,
  rowPaginationFeature,
  createPaginatedRowModel,
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
import { data, type TData } from "../services/ordersApiActions";
import { useBaseConfig } from "@/services/base-config/baseConfigContext";

const features = tableFeatures({
  columnPinningFeature,
  columnSizingFeature,
  columnOrderingFeature,
  columnVisibilityFeature,
  columnResizingFeature,
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),
  columnMeta: metaHelper<{
    headerClassNames: string;
    cellClassNames: string;
    type?: "action" | "checkbox";
  }>(),
});

export function useTablesGrid() {
  const columnHelper = createColumnHelper<typeof features, TData>();
  const { localeInfo } = useBaseConfig();
  const [pagination, setPagination] = useState<{
    pageIndex: number;
    pageSize: number;
  }>({
    pageIndex: 0,
    pageSize: 5,
  });

  const columns = columnHelper.columns([
    columnHelper.accessor("date", {
      header: "تاریخ",
      size: 110,
      minSize: 110,
      meta: {
        headerClassNames: "text-center",
        cellClassNames: "text-center",
      },
    }),
    columnHelper.accessor("orderNo", {
      header: "شماره",
      size: 110,
      minSize: 110,
      enableResizing: false,
      meta: {
        headerClassNames: "text-center",
        cellClassNames: "text-center",
      },
    }),
    columnHelper.accessor("dailyNo", {
      header: "سریال روزانه",
      size: 110,
      minSize: 110,
      enablePinning: false,
      meta: {
        headerClassNames: "text-center",
        cellClassNames: "text-center",
      },
    }),
    columnHelper.accessor("saleType", {
      header: "نوع فروش",
      size: 130,
      minSize: 130,
      enableResizing: false,
      meta: {
        headerClassNames: "text-center",
        cellClassNames: "text-center",
      },
    }),
    columnHelper.accessor("customerName", {
      header: "نام مشتری",
      minSize: 200,
      meta: {
        headerClassNames: "text-start",
        cellClassNames: "text-start",
      },
    }),
    columnHelper.accessor("saleTime", {
      header: "نوبت",
      size: 130,
      minSize: 130,
      enableResizing: false,
      meta: {
        headerClassNames: "text-center",
        cellClassNames: "text-center",
      },
    }),
    columnHelper.accessor("tableNo", {
      header: "میز",
      size: 130,
      minSize: 130,
      enableResizing: false,
      meta: {
        headerClassNames: "text-center",
        cellClassNames: "text-center",
      },
    }),
    columnHelper.accessor("totalPrice", {
      header: "مبلغ",
      size: 140,
      minSize: 140,
      enablePinning: true,
      meta: {
        headerClassNames: "text-center",
        cellClassNames: "text-center",
      },
    }),
    columnHelper.display({
      id: "actions",
      header: "عملیات",
      enablePinning: false,
      size: 100,
      minSize: 100,
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
        type: "action",
      },
    }),
  ]);

  const table = useTable({
    features,
    columns,
    data,
    columnResizeDirection: localeInfo.contentDirection,
    columnResizeMode: "onChange",
    initialState: {
      columnPinning: {
        start: [],
        end: ["actions"],
      },
    },
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
  });
  return { table };
}
