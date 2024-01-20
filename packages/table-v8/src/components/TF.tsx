import React, { forwardRef } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import { Header, flexRender } from "@tanstack/react-table";
import styled from "styled-components";
import StickyColumn from "../private/types/StickyColumn";
import THProps from "../private/types/THProps";
import getFontSize from "../private/utils/getFontSize";
import getPadding from "../private/utils/getPadding";

const getStickyShift = (header: Header<{}, unknown>, stickySide: string) => {
  const { headers } = header.headerGroup;
  const { index } = header;

  const calculateShift = (start: number, end: number, step: number) => {
    let shift = 0;
    for (let i = start; i !== end; i += step) {
      shift += +(headers[i].column.columnDef.size || 0);
    }
    return shift;
  }

  switch (stickySide) {
    case "left":
      return calculateShift(0, +index, 1);
    case "right":
      return calculateShift(headers.length - 1, +index, -1);
    default:
      return 0;
  }
};

const TF = forwardRef<HTMLTableCellElement, THProps>(
  (
    { backgroundColor, header, rowSize, rowGap, isLastColumn, columnData },
    ref,
  ) => {
    const columnDefinition = header.column.columnDef;
    const footerValue = columnDefinition.footer
      ? typeof columnDefinition.footer === "function"
        ? columnDefinition.footer(header.getContext())
        : columnDefinition.footer
      : undefined;

    const stickyColumn: StickyColumn = header.column.parent
      ? header.column.parent?.columnDef
      : columnDefinition;
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

    const FootCell = styled.th`
      width: ${header.column.columnDef.size}px;
      min-width: ${stickySide
        ? columnDefinition.size
        : columnDefinition.minSize}px;
      max-width: ${stickySide
        ? columnDefinition.size
        : columnDefinition.maxSize}px;
      ${stickyShift && stickyShift}
      ${stickySide && stickyBefore}
    `;

    return (
      <FootCell
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
              "relative text-start",
              getFontSize(rowSize),
              footerValue && getPadding(rowSize),
            )}
          >
            {flexRender(header.column.columnDef.footer, header.getContext())}
          </div>
        )}
      </FootCell>
    );
  },
);

export default TF;
