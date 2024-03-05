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

  const calculateShift = (
    start: number,
    end: number,
    isIncrementing: boolean,
  ) => {
    let shift = 0;
    for (
      let i = start;
      isIncrementing ? i < end : i > end;
      isIncrementing ? i++ : i--
    ) {
      const size = headers[i].column.columnDef.size || 0;
      shift += +size;
    }
    return shift;
  };

  switch (stickySide) {
    case "left":
      return calculateShift(0, headerIndex, true);
    case "right":
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
      table,
      rowSize,
      isResizable,
      isCellBorder,
      columnData,
      onClick,
    },
    ref,
  ) => {
    const columnSizingInfo =
      isResizable && table && table.getState().columnSizingInfo;

    const stickyColumn: StickyColumn = header.column.parent
      ? header.column.parent?.columnDef
      : header.column.columnDef;
    const stickySide = stickyColumn.sticky;
    const headerValue = header.column.columnDef.header
      ? typeof header.column.columnDef.header === "function"
        ? header.column.columnDef.header(header.getContext())
        : header.column.columnDef.header
      : undefined;

    const styles = new Map([
      ["width", `${header.column.getSize()}px`],
      ["minWidth", `${header.column.columnDef.minSize}px`],
      ["maxWidth", `${header.column.columnDef.maxSize}px`],
      ["--headerBGColor", `rgba(var(--${backgroundColor}, var(--gohan)))`],
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
          "relative z-[1]",
          backgroundColor && "bg-[color:var(--headerBGColor)]",
          stickySide &&
            "sticky z-[2] before:absolute before:top-0 before:left-0 before:w-[calc(100%+1px)] before:h-full before:bg-[color:var(--headerBGColor)]",
          columnSizingInfo &&
            !!columnSizingInfo.isResizingColumn &&
            "cursor-col-resize",
        )}
        ref={ref}
      >
        {header.isPlaceholder ? null : (
          <div
            className={mergeClassnames(
              "relative text-start font-medium select-none",
              getFontSize(rowSize),
              headerValue && getPadding(rowSize),
            )}
          >
            {flexRender(header.column.columnDef.header, header.getContext())}
            {header.column.getCanFilter() ? (
              <>{/* It`s possible to place a filter here */}</>
            ) : null}
          </div>
        )}
        {isResizable && (
          <div
            className={mergeClassnames(
              "resizer absolute z-50 w-4 h-full top-0 right-0 rounded-sm bg-transparent cursor-col-resize ltr",
              columnSizingInfo &&
                !columnSizingInfo.isResizingColumn &&
                "hover:bg-black/20",
              header.column.getIsResizing() ? "isResizing bg-black/20" : "",
            )}
            onMouseDown={header.getResizeHandler()}
            onTouchStart={header.getResizeHandler()}
          />
        )}
      </th>
    );
  },
);

export default TH;
