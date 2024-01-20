import React, { forwardRef } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import { flexRender, Header } from "@tanstack/react-table";
import styled from "styled-components";
import StickyColumn from "../private/types/StickyColumn";
import THProps from "../private/types/THProps";
import getFontSize from "../private/utils/getFontSize";
import getPadding from "../private/utils/getPadding";

const getStickyShift = (header: Header<{}, unknown>, stickySide: string) => {
  const { headers } = header.headerGroup;
  const headerIndex = +header.index; //parse once for optimization

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
    default: //default case if stickySide is not 'left' or 'right' to prevent silent failure
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

    const stickyShift = stickySide
      ? stickySide === "left"
        ? `left: ${columnData ? columnData?.left : getStickyShift(header, "left")}px;`
        : `right: ${columnData ? columnData?.right : getStickyShift(header, "right")}px;`
      : undefined;

    const stickyBefore = `
      &::before {
        background-color: rgb(var(--${backgroundColor?.replace(/^.+-(\w+)$/g, "$1")}));
      };
    `;

    const HeadCell = styled.th`
      width: ${header.column.columnDef.size}px;
      min-width: ${stickySide
        ? header.column.columnDef.size
        : header.column.columnDef.minSize}px;
      max-width: ${stickySide
        ? header.column.columnDef.size
        : header.column.columnDef.maxSize}px;
      ${stickyShift && stickyShift}
      ${stickySide && stickyBefore}
    `;

    return (
      <HeadCell
        key={header.id}
        colSpan={header.colSpan}
        className={mergeClassnames(
          "z-[1]",
          backgroundColor && backgroundColor,
          stickySide &&
          "sticky before:absolute before:top-0 before:left-0 before:w-[calc(100%+1px)] before:h-full",
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
      </HeadCell>
    );
  },
);

export default TH;
