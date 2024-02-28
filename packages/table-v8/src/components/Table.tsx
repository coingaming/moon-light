import React, { useEffect, useRef, useState } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import {
  ColumnResizeMode,
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import TableWrapper from "./TableWrapper";
import TBody from "./TBody";
import TFoot from "./TFoot";
import THead from "./THead";
import ColumnData from "../private/types/ColumnData";
import TableProps from "../private/types/TableProps";
import buildColumnMap from "../private/utils/buildColumnMap";

const Table = ({
  columns,
  data,
  defaultColumn,
  width,
  height,
  state,
  withFooter = false,
  headerBackgroundColor = "gohan",
  bodyBackgroundColor = "gohan",
  defaultRowBackgroundColor = "goku",
  evenRowBackgroundColor = "goku",
  rowSelectColor = "heles",
  rowHoverColor,
  rowGap = "2px",
  rowSize = "md",
  isResizable = true,
  isSelectable = false,
  isSticky = true,
  textClip,
  layout = "auto",
  preventSelectionByRowClick = false,
  getOnRowClickHandler,
  getOnRowSelectHandler,
  getSubRows,
  onExpandedChange,
  onRowSelectionChange,
  onSortingChange,
}: TableProps) => {
  const [columnResizeMode, setColumnResizeMode] =
    React.useState<ColumnResizeMode>("onChange");
  /*
  const [columnResizeDirection, setColumnResizeDirection] =
    React.useState<ColumnResizeDirection>('ltr')
*/

  const table = useReactTable({
    columns,
    columnResizeMode,
    data,
    defaultColumn,
    state,
    enableColumnResizing: isResizable,
    enableRowSelection: true,
    onExpandedChange: onExpandedChange,
    onRowSelectionChange: onRowSelectionChange,
    onSortingChange: onSortingChange,
    getSubRows: getSubRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    /* debugTable: true, */
  });

  const tableWrapperRef = useRef<HTMLDivElement>(null);
  const [columnMap, setColumnMap] = useState<ColumnData[][]>();

  useEffect(() => {
    if (!isSelectable || !getOnRowSelectHandler) return;
    const selectedKeys = state?.rowSelection
      ? Object.keys(state?.rowSelection)
      : [];
    getOnRowSelectHandler()(
      table.getRowModel().rows.filter((row) => selectedKeys.includes(row.id)),
    );
  }, [getOnRowSelectHandler && state?.rowSelection]);

  useEffect(() => {
    setColumnMap(
      buildColumnMap(
        tableWrapperRef.current?.childNodes[0] as HTMLTableElement,
      ),
    );
  }, [tableWrapperRef.current, buildColumnMap]);

  const renderTableComponent = () => {
    const tableLayout = layout === "fixed" ? "fixed" : "auto";
    const wrapperStyles = new Map([
      ["maxWidth", width ? `${width}px` : undefined],
      ["height", height ? `${height}px` : undefined],
    ]);

    const tableStyles = {
      width,
      tableLayout,
      borderSpacing: `0 ${rowGap}`,
      "--tableBGColor": `rgba(var(--${bodyBackgroundColor}, var(--gohan)))`,
    } as const;

    return (
      <TableWrapper
        style={Object.fromEntries(wrapperStyles)}
        className={mergeClassnames("rounded-lg", isSticky && "overflow-auto")}
        tableWrapperRef={tableWrapperRef}
      >
        <table
          style={tableStyles}
          className={mergeClassnames(
            "border-separate bg-[color:var(--tableBGColor)]",
            layout !== "auto" && "w-full",
          )}
        >
          <THead
            table={table}
            backgroundColor={headerBackgroundColor}
            rowSize={rowSize}
            rowGap={rowGap}
            isResizable={isResizable}
            isSticky={isSticky}
            columnMap={columnMap}
          />
          <TBody
            table={table}
            rowGap={rowGap}
            rowSize={rowSize}
            isSelectable={isSelectable}
            preventSelectionByRowClick={preventSelectionByRowClick}
            rowSelectColor={rowSelectColor}
            backgroundColor={bodyBackgroundColor}
            defaultRowBackgroundColor={defaultRowBackgroundColor}
            evenRowBackgroundColor={evenRowBackgroundColor}
            rowHoverColor={rowHoverColor}
            columnMap={columnMap}
            textClip={textClip}
            getOnRowClickHandler={getOnRowClickHandler}
          />
          {withFooter && (
            <TFoot
              table={table}
              backgroundColor={headerBackgroundColor}
              rowSize={rowSize}
              rowGap={rowGap}
              isSticky={isSticky}
              columnMap={columnMap}
            />
          )}
        </table>
      </TableWrapper>
    );
  };

  return renderTableComponent();
};

export default Table;
