import React, { forwardRef } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import { Header, flexRender } from "@tanstack/react-table";
import StickyColumn from "../private/types/StickyColumn";
import THProps from "../private/types/THProps";
import getFontSize from "../private/utils/getFontSize";
import getPadding from "../private/utils/getPadding";
import CellBorder from "./CellBorder";

const getStickyShift = (header: Header<{}, unknown>, stickySide: string) => {
  const { headers } = header.headerGroup;
  const { index } = header;

  const calculateShift = (start: number, end: number, step: number) => {
    let shift = 0;
    for (let i = start; i !== end; i += step) {
      shift += +(headers[i].column.columnDef.size || 0);
    }
    return shift;
  };

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
    { backgroundColor, header, rowSize, columnData, withBorder, isFirstColumn },
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

    const styles = new Map([
      ["width", `${header.column.getSize()}px`],
      [
        "minWidth",
        `${stickySide ? header.column.getSize() : columnDefinition.minSize}px`,
      ],
      [
        "maxWidth",
        `${stickySide ? header.column.getSize() : columnDefinition.maxSize}px`,
      ],
      ["--footerBGColor", `rgba(var(--${backgroundColor}, var(--gohan)))`],
    ]);

    if (stickySide) {
      styles.set(
        stickySide,
        stickySide === "left"
          ? // prettier-ignore
            `${columnData ? columnData?.left : getStickyShift(header, "left")}px`
          : // prettier-ignore
            `${columnData ? columnData?.right : getStickyShift(header, "right")}px`,
      );
    }

    return (
      <th
        key={header.id}
        style={Object.fromEntries(styles)}
        colSpan={header.colSpan}
        className={mergeClassnames(
          "z-[1]",
          backgroundColor && "bg-[color:var(--footerBGColor)]",
          stickySide &&
            "sticky z-[2] before:absolute before:top-0 before:left-0 before:w-[calc(100%+1px)] before:h-full before:bg-[color:var(--footerBGColor)]",
        )}
        ref={ref}
      >
        {header.isPlaceholder ? null : (
          <>
            {
              <CellBorder
                withBorder={withBorder}
                isFirstColumn={isFirstColumn}
                stickySide={stickySide}
              />
            }
            <div
              className={mergeClassnames(
                "relative text-start",
                getFontSize(rowSize),
                footerValue && getPadding(rowSize),
              )}
            >
              {flexRender(header.column.columnDef.footer, header.getContext())}
            </div>
          </>
        )}
      </th>
    );
  },
);

export default TF;
