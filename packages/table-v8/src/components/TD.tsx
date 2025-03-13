import React, { forwardRef } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import getFontSize from "../private/utils/getFontSize";
import getPadding from "../private/utils/getPadding";
import type { Cell } from "../private/types";
import type StickyColumn from "../private/types/StickyColumn";
import type TDProps from "../private/types/TDProps";
import TDContent from "./TDContent";
import CellCopiedClipboardWrapper from "./CellCopiedClipboardWrapper";

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
  };

  if (stickySide === "left") {
    return calculateShift(0, +index, 1);
  }

  if (stickySide === "right") {
    return calculateShift(cells.length - 1, +index, -1);
  }
};

const TD = forwardRef<HTMLTableCellElement, TDProps>((props, ref) => {
  const {
    cell,
    index,
    cells,
    rowSize,
    noGap,
    className,
    isFirstColumn,
    isLastColumn,
    columnData,
    textClip,
    withBorder,
    isCellDataCopiedToClipboard,
  } = props;
  const stickyColumn: StickyColumn = cell.column.parent
    ? cell.column.parent?.columnDef
    : cell.column.columnDef;
  const stickySide = stickyColumn.sticky;

  const styles = new Map([
    ["width", `${cell.column.getSize()}px`],
    [
      "minWidth",
      // prettier-ignore
      `${stickySide ? cell.column.columnDef.size : cell.column.columnDef.minSize}px`,
    ],
    [
      "maxWidth",
      // prettier-ignore
      `${stickySide ? cell.column.columnDef.size : cell.column.columnDef.maxSize}px`,
    ],
  ]);

  if (stickySide) {
    styles.set(
      stickySide,
      stickySide === "left"
        ? // prettier-ignore
          `${columnData ? columnData?.left : getStickyShift(cells, index, "left")}px`
        : // prettier-ignore
          `${columnData ? columnData?.right : getStickyShift(cells, index, "right")}px`,
    );
  }

  return (
    <td
      key={cell.id}
      style={Object.fromEntries(styles)}
      className={mergeClassnames(
        "relative box-border text-start",
        getFontSize(rowSize),
        getPadding(rowSize),
        isFirstColumn && !noGap && "rounded-s-lg after:rounded-s-lg",
        isLastColumn && !noGap && "rounded-e-lg after:rounded-e-lg",
        stickySide && "sticky z-[1] before:-z-[1] after:-z-[1]",
        stickySide &&
          "before:absolute before:top-0 before:left-0 before:-right-[1px] before:h-full",
        stickySide &&
          "after:absolute after:top-0 after:left-0 after:-right-[1px] after:h-full",
        className,
      )}
      ref={ref}
    >
      {isCellDataCopiedToClipboard ? (
        <CellCopiedClipboardWrapper>
          <TDContent {...props} stickySide={stickySide} />
        </CellCopiedClipboardWrapper>
      ) : (
        <TDContent {...props} stickySide={stickySide} />
      )}
    </td>
  );
});

export default TD;
