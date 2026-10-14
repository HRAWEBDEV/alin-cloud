import { useState } from "react";
import {
  type RowSelectionState,
  type PaginationState,
  type ColumnVisibilityState,
  createColumnHelper,
  metaHelper,
  tableFeatures,
  useTable,
  columnPinningFeature,
  columnSizingFeature,
  columnOrderingFeature,
  columnVisibilityFeature,
  columnResizingFeature,
  rowSelectionFeature,
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
import { data, type TData } from "../services/salesMenusApiActions";
import { useBaseConfig } from "@/services/base-config/baseConfigContext";
import { useSettingsContext } from "@/app/[lang]/(panel)/services/settings/settingsContext";

const features = tableFeatures({
  columnPinningFeature,
  columnSizingFeature,
  columnOrderingFeature,
  columnVisibilityFeature,
  columnResizingFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  paginatedRowModel: createPaginatedRowModel(),
  columnMeta: metaHelper<{
    headerClassNames: string;
    cellClassNames: string;
    type?: "action" | "checkbox";
  }>(),
});

export function useMenusTable() {
  const { panelSettings } = useSettingsContext();
  const columnHelper = createColumnHelper<typeof features, TData>();
  const { localeInfo } = useBaseConfig();
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: panelSettings.gridDefaultRowsCount,
  });
  const [columnVisibility, setColumnVisibility] =
    useState<ColumnVisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const columns = columnHelper.columns([
    columnHelper.display({
      id: "row",
      header: "ردیف",
      size: 110,
      minSize: 110,
      enableHiding: false,
      enablePinning: false,
      enableResizing: false,
      meta: {
        headerClassNames: "text-center",
        cellClassNames: "text-center",
      },
    }),
    columnHelper.accessor("menuName", {
      header: "عنوان",
      size: 400,
      minSize: 250,
      enableHiding: false,
      meta: {
        headerClassNames: "text-start",
        cellClassNames: "text-start",
      },
    }),
    columnHelper.display({
      id: "actions",
      header: "عملیات",
      enablePinning: false,
      enableHiding: false,
      enableResizing: false,
      size: 100,
      minSize: 100,
      maxSize: 100,
      cell() {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
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
      rowSelection,
      pagination,
      columnVisibility,
    },
    enableMultiRowSelection: true,
    onPaginationChange: setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
  });
  return { table };
}
