import React, { forwardRef } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import { flexRender, Cell } from "@tanstack/react-table";
import styled from "styled-components";
import ClipProps from "../private/types/ClipProps";
import StickyColumn from "../private/types/StickyColumn";
import TDProps from "../private/types/TDProps";
import getFontSize from "../private/utils/getFontSize";
import getPadding from "../private/utils/getPadding";

const getStickyShift = (
  cells: Cell<{}, unknown>[],
  index: number,
  stickySide?: string,
) => {
  const calculateShift = (start: number, end: number, step: number) => {
    let shift = 0;
    for (let i = start; i !== end; i += step) {
      shift += +(cells[i].column.columnDef.size || 0);
    }
    return shift;
  }

  if (stickySide === 'left') {
    return calculateShift(0, index, 1);
  }

  if (stickySide === 'right') {
    return calculateShift(cells.length - 1, +index, -1);
  }
};

const TD = forwardRef<HTMLTableCellElement, TDProps>(
  (
    {
      cell,
      index,
      cells,
      rowSize,
      backgroundColor,
      bodyBackgroundColor,
      isFirstColumn,
      isLastColumn,
      isRowSelected = false,
      columnData,
      textClip,
    },
    ref,
  ) => {
    const stickyColumn: StickyColumn = cell.column.parent
      ? cell.column.parent?.columnDef
      : cell.column.columnDef;
    const stickySide = stickyColumn.sticky;

    const stickyShift = stickySide
      ? stickySide === "left"
        ? `left: ${columnData ? columnData?.left : getStickyShift(cells, index, "left")}px;`
        : `right: ${columnData ? columnData?.right : getStickyShift(cells, index, "right")}px;`
      : undefined;

    const stickyPad = `
    &::before {
      background-color: rgb(var(--${bodyBackgroundColor?.replace(/^.+-(\w+)$/g, "$1")}));
    };
    &::after {
      background-color: rgb(var(--${backgroundColor?.replace(/^.+-(\w+)$/g, "$1")}));
    };
  `;

    const BodyCell = styled.td`
      width: ${cell.column.columnDef.size}px;
      min-width: ${stickySide
        ? cell.column.columnDef.size
        : cell.column.columnDef.minSize}px;
      max-width: ${stickySide
        ? cell.column.columnDef.size
        : cell.column.columnDef.maxSize}px;
      ${stickyShift && stickyShift}
      ${stickySide && stickyPad}
    `;

    return (
      <BodyCell
        key={cell.id}
        className={mergeClassnames(
          "box-border text-start",
          getFontSize(rowSize),
          getPadding(rowSize),
          isRowSelected ? "bg-heles" : backgroundColor,
          isFirstColumn && "rounded-s-lg after:rounded-s-lg",
          isLastColumn && "rounded-e-lg after:rounded-e-lg",
          stickySide && "sticky before:-z-[1] after:-z-[1]",
          stickySide &&
          "before:absolute before:top-0 before:left-0 before:-right-[1px] before:h-full",
          stickySide &&
          "after:absolute after:top-0 after:left-0 after:-right-[1px] after:h-full",
        )}
        ref={ref}
      >
        {textClip ? (
          <div
            className={mergeClassnames(
              textClip === ("clip" as ClipProps) && "break-all truncate",
              textClip === ("break" as ClipProps) && "break-all text-clip",
            )}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </div>
        ) : (
          flexRender(cell.column.columnDef.cell, cell.getContext())
        )}
      </BodyCell>
    );
  },
);

export default TD;
