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
import { useCommonPinningStyles } from "@/app/[lang]/(panel)/utils/useCommonPinningStyles";
import { useMenusControlContext } from "../services/control/menusControlContext";
import { Button } from "@/components/ui/button";
import { MdOutlinePushPin } from "react-icons/md";
import { RiUnpinLine } from "react-icons/ri";

export default function MenusGrid() {
  const {
    menusGrid: { table },
  } = useMenusControlContext();
  const getCommonPinningStyles = useCommonPinningStyles();
  return (
    <Table className="table-fixed">
      <TableHeader>
        {table.getHeaderGroups().map((group) => {
          return (
            <TableRow key={group.id}>
              {group.headers.map((header) => {
                return (
                  <TableHead
                    data-action-head={
                      header.column.columnDef.meta?.type === "action"
                    }
                    data-is-resizing={header.column.getIsResizing()}
                    data-is-pinned={!!header.column.getIsPinned()}
                    colSpan={header.colSpan}
                    key={header.id}
                    className={cn(
                      "bg-grid-header text-grid-header-foreground overflow-hidden text-ellipsis sticky top-0 z-1 not-last:border-e border-border data-[is-pinned='true']:z-3 group/head",
                      header.column.columnDef.meta?.headerClassNames,
                    )}
                    style={{
                      ...getCommonPinningStyles(header.column),
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}

                    {header.column.getCanPin() && (
                      <div className="absolute end-0 top-1/2 -translate-y-1/2 text-neutral-500/50">
                        <Button
                          variant={"ghost"}
                          size={"icon"}
                          onClick={() => {
                            if (header.column.getIsPinned()) {
                              header.column.pin(false);
                            } else {
                              header.column.pin("start");
                            }
                          }}
                        >
                          {header.column.getIsPinned() ? (
                            <MdOutlinePushPin />
                          ) : (
                            <RiUnpinLine />
                          )}
                        </Button>
                      </div>
                    )}
                    {header.column.getCanResize() && (
                      <div
                        data-is-resizing={header.column.getIsResizing()}
                        className='group-hover/head:bg-neutral-600/30 dark:group-hover/head:bg-neutral-400/30 data-[is-resizing="true"]:bg-neutral-800 dark:data-[is-resizing="true"]:bg-neutral-400 absolute top-0 h-full w-1 cursor-col-resize select-none touch-none inset-e-0'
                        {...{
                          onDoubleClick: () => header.column.resetSize(),
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                          style: {
                            transform:
                              false && header.column.getIsResizing()
                                ? `translateX(${
                                    table.options.columnResizeDirection ===
                                    "rtl"
                                      ? -1
                                      : 1
                                  }px)`
                                : "",
                          },
                        }}
                      />
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
            <TableRow
              data-is-selected={row.getIsSelected()}
              onClick={() => {
                if (!row.getCanSelect()) return;
                row.toggleSelected();
              }}
              key={row.id}
              className="group even:bg-grid-row-stroke data-[is-selected='true']:bg-grid-selected-row-background data-[is-selected='true']:text-grid-selected-row-foreground"
            >
              {row.getVisibleCells().map((cell) => {
                return (
                  <TableCell
                    key={cell.id}
                    data-is-pinned={!!cell.column.getIsPinned()}
                    data-action-cell={
                      cell.column.columnDef.meta?.type === "action"
                    }
                    className={cn(
                      cell.column.columnDef.meta?.cellClassNames,
                      "overflow-hidden text-ellipsis not-last:border-e border-border data-[is-pinned='true']:bg-background data-[is-pinned='true']:text-foreground data-[is-pinned='true']:z-1 data-[is-pinned='true']:group-even:bg-grid-row-stroke group-data-[is-selected='true']:bg-grid-selected-row-background! group-data-[is-selected='true']:text-grid-selected-row-foreground!",
                    )}
                    style={{ ...getCommonPinningStyles(cell.column) }}
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
