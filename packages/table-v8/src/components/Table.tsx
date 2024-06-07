import React, { useEffect, useRef, useState } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import {
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  useReactTable,
} from "../private/utils";
import TableWrapper from "./TableWrapper";
import TBody from "./TBody";
import TFoot from "./TFoot";
import THead from "./THead";
import buildColumnMap from "../private/utils/buildColumnMap";
import {
  handleTableLayouts,
  handleTableFixedWidth,
} from "../private/utils/handleTableLayouts";
import Minimap from "./Minimap";
import type { ColumnResizeMode } from "../private/types";
import type ColumnData from "../private/types/ColumnData";
import type TableProps from "../private/types/TableProps";

const Table = ({
  columns,
  data,
  defaultColumn,
  width,
  height,
  fixedWidth = "w-full",
  state,
  withFooter = false,
  headerBackgroundColor = "gohan",
  bodyBackgroundColor = "gohan",
  defaultRowBackgroundColor = "goku",
  evenRowBackgroundColor = "goku",
  rowSelectColor = "heles",
  rowActiveColor,
  rowHoverColor,
  rowGap = "2px",
  rowSize = "md",
  isResizable = false,
  isSelectable = false,
  isSticky = true,
  textClip,
  layout = "auto",
  withCellBorder = false,
  withMinimap = false,
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
    enableSortingRemoval: false,
    onExpandedChange: onExpandedChange,
    onRowSelectionChange: onRowSelectionChange,
    onSortingChange: onSortingChange,
    getSubRows: getSubRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    /* debugTable: true, */
  });

  const tableResizeInfo = table.getState().columnSizingInfo;
  const tableWrapperRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);

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
  }, [
    tableWrapperRef.current,
    buildColumnMap,
    tableResizeInfo.isResizingColumn && tableResizeInfo.deltaOffset,
  ]);

  const renderTableComponent = () => {
    const wrapperStyles = new Map([
      ["maxWidth", width ? `${width}px` : undefined],
      ["height", height ? `${height}px` : undefined],
    ]);

    const tableWidth = React.useMemo(
      () =>
        handleTableLayouts(layout, isResizable) ??
        handleTableFixedWidth(fixedWidth),
      [],
    );
    const tableLayout = React.useMemo(
      () => (layout === "fixed" ? "fixed" : "auto"),
      [],
    );

    const tableStyles = {
      width: tableWidth,
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
          ref={tableRef}
          style={tableStyles}
          className={mergeClassnames(
            "border-separate bg-[color:var(--tableBGColor)]",
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
            withBorder={withCellBorder}
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
            rowActiveColor={rowActiveColor}
            columnMap={columnMap}
            textClip={textClip}
            withBorder={withCellBorder}
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
              withBorder={withCellBorder}
            />
          )}
        </table>
      </TableWrapper>
    );
  };

  if (withMinimap) {
    return (
      <div className="h-full w-full overflow-auto">
        {renderTableComponent()}
        <Minimap
          numberOfColumns={
            (columnMap && columnMap[columnMap?.length - 1].length) || 0
          }
          tableWrapperRef={tableWrapperRef}
        />
      </div>
    );
  }

  return renderTableComponent();
};

export default Table;
