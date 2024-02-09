import React, { forwardRef } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import { flexRender, Header } from "@tanstack/react-table";
import StickyColumn from "../private/types/StickyColumn";
import THProps from "../private/types/THProps";
import getFontSize from "../private/utils/getFontSize";
import getPadding from "../private/utils/getPadding";

const getStickyShift = (header: Header<{}, unknown>, stickySide: string) => {
  const { headers } = header.headerGroup;
  const headerIndex = +header.index;

  const calculateShift = (start: number, end: number, isIncrementing: boolean) => {
    let shift = 0;
    for (let i = start; isIncrementing ? i < end : i > end; isIncrementing ? i++ : i--) {
      const size = headers[i].column.columnDef.size || 0;
      shift += +size;
    }
    return shift;
  }

  switch (stickySide) {
    case 'left':
      return calculateShift(0, headerIndex, true);
    case 'right':
      return calculateShift(headers.length - 1, headerIndex, false);
    default:
      return 0;
  }
};

const TH = forwardRef<HTMLTableCellElement, THProps>(
  (
    {
      backgroundColor,
      header,
      isLastColumn,
      rowSize,
      rowGap,
      isCellBorder,
      columnData,
      onClick,
    },
    ref,
  ) => {
    const stickyColumn: StickyColumn = header.column.parent
      ? header.column.parent?.columnDef
      : header.column.columnDef;
    const stickySide = stickyColumn.sticky;

    const styles = new Map([
      ['width', `${header.column.columnDef.size}px`],
      ['minWidth', `${stickySide ? header.column.columnDef.size : header.column.columnDef.minSize}px`],
      ['maxWidth', `${stickySide ? header.column.columnDef.size : header.column.columnDef.maxSize}px`],
      ['--headerBGColor', `rgba(var(--${backgroundColor}, var(--gohan)))`],
    ]);

    if (stickySide) {
      styles.set(stickySide, stickySide === "left"
        ? `${columnData ? columnData?.left : getStickyShift(header, "left")}px`
        : `${columnData ? columnData?.right : getStickyShift(header, "right")}px`
      )
    }

    return (
      <th
        key={header.id}
        style={Object.fromEntries(styles)}
        colSpan={header.colSpan}
        className={mergeClassnames(
          "z-[1]",
          backgroundColor && "bg-[color:var(--headerBGColor)]",
          stickySide &&
          "sticky before:absolute before:top-0 before:left-0 before:w-[calc(100%+1px)] before:h-full before:bg-[color:var(--headerBGColor)]",
        )}
        ref={ref}
      >
        {header.isPlaceholder ? null : (
          <div
            className={mergeClassnames(
              "relative text-start font-medium",
              getFontSize(rowSize),
              getPadding(rowSize),
            )}
          >
            {flexRender(header.column.columnDef.header, header.getContext())}
            {header.column.getCanFilter() ? (
              <>{/* It`s possible to place a filter here */}</>
            ) : null}
          </div>
        )}
      </th>
    );
  },
);

export default TH;
