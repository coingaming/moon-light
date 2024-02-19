import React, { Ref, useEffect, useRef, useState } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import {
  getCoreRowModel,
  getExpandedRowModel,
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
  maxWidth,
  maxHeight,
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
  isSelectable = false,
  isSticky = true,
  textClip,
  layout = "auto",
  preventSelectionByRowClick = false,
  getSubRows,
  onExpandedChange,
  onRowSelectionChange,
}: TableProps) => {
  const table = useReactTable({
    columns,
    data,
    defaultColumn,
    state,
    enableRowSelection: true,
    onExpandedChange: onExpandedChange,
    onRowSelectionChange: onRowSelectionChange,
    getSubRows: getSubRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    /* debugTable: true, */
  });

  const tableWrapperRef = useRef<HTMLDivElement>(null);
  const [outerWrapperRef, setOuterWrapperRef] = useState<HTMLDivElement>();
  const [columnMap, setColumnMap] = useState<ColumnData[][]>();

  useEffect(() => {
    setOuterWrapperRef(tableWrapperRef.current?.parentNode as HTMLDivElement);
    setColumnMap(
      buildColumnMap(
        tableWrapperRef.current?.childNodes[0] as HTMLTableElement,
      ),
    );
  }, [tableWrapperRef.current, buildColumnMap]);

  const renderTableComponent = () => {
    const tableLayout = layout === "fixed" ? "fixed" : "auto";
    const styles = {
      tableLayout,
      borderSpacing: `0 ${rowGap}`,
      "--tableBGColor": `rgba(var(--${bodyBackgroundColor}, var(--gohan)))`,
    } as const;

    return (
      <TableWrapper
        style={{
          /* width, */
          height,
          maxWidth: `${width}px`,
          maxHeight,
        }}
        className={mergeClassnames(
          "rounded-lg",
          isSticky && "overflow-hidden",
        )}
        container={{ width: outerWrapperRef?.offsetWidth, height: outerWrapperRef?.offsetHeight }}
        tableWrapperRef={tableWrapperRef}
      >
        <table
          style={styles}
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
