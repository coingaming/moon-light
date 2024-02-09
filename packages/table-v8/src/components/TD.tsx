import React, { forwardRef } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import { flexRender, Cell } from "@tanstack/react-table";
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
    return calculateShift(0, +index, 1);
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
      className,
      isFirstColumn,
      isLastColumn,
      columnData,
      textClip,
    },
    ref,
  ) => {
    const stickyColumn: StickyColumn = cell.column.parent
      ? cell.column.parent?.columnDef
      : cell.column.columnDef;
    const stickySide = stickyColumn.sticky;

    const styles = new Map([
      ['width', `${cell.column.columnDef.size}px`],
      ['minWidth', `${stickySide ? cell.column.columnDef.size : cell.column.columnDef.minSize}px`],
      ['maxWidth', `${stickySide ? cell.column.columnDef.size : cell.column.columnDef.maxSize}px`],
    ]);

    if (stickySide) {
      styles.set(stickySide, stickySide === "left"
        ? `${columnData ? columnData?.left : getStickyShift(cells, index, "left")}px`
        : `${columnData ? columnData?.right : getStickyShift(cells, index, "right")}px`
      )
    }

    return (
      <td
        key={cell.id}
        style={Object.fromEntries(styles)}
        className={mergeClassnames(
          "box-border text-start",
          getFontSize(rowSize),
          getPadding(rowSize),
          isFirstColumn && "rounded-s-lg after:rounded-s-lg",
          isLastColumn && "rounded-e-lg after:rounded-e-lg",
          stickySide && "sticky before:-z-[1] after:-z-[1]",
          stickySide &&
          "before:absolute before:top-0 before:left-0 before:-right-[1px] before:h-full",
          stickySide &&
          "after:absolute after:top-0 after:left-0 after:-right-[1px] after:h-full",
          className,
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
      </td>
    );
  },
);

export default TD;
