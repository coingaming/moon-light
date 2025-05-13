import React, { forwardRef, useCallback, useState } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import type TableWrapperProps from "../private/types/TableWrapperProps";

const TableWrapper = forwardRef<HTMLDivElement, TableWrapperProps>(
  ({ style, className, children, tableWrapperRef }) => {
    const kbDelta = 15;
    const [isFocused, setIsFocused] = useState(false);

    const calcMaxScrollByX = (target: HTMLDivElement, shift: number) => {
      const containerWidth = (
        tableWrapperRef?.current?.parentNode as HTMLDivElement
      ).offsetWidth;
      const scrollRange = containerWidth
        ? target.scrollWidth - +containerWidth
        : 0;
      const dX = target.scrollLeft + shift;

      return dX < 0
        ? -target.scrollLeft
        : dX >= scrollRange
          ? scrollRange - target.scrollLeft - 1
          : shift;
    };

    const handleKbDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (!isFocused) {
          return;
        }

        const kbDeltas = { x: 0, y: 0 };

        const navigationKeys = new Map();
        navigationKeys.set("ArrowUp", () => (kbDeltas.y = -kbDelta));
        navigationKeys.set("ArrowDown", () => (kbDeltas.y = kbDelta));
        navigationKeys.set("ArrowLeft", () => (kbDeltas.x = -kbDelta));
        navigationKeys.set(
          "ArrowRight",
          () => (kbDeltas.x = calcMaxScrollByX(event.currentTarget, kbDelta)),
        );

        if (navigationKeys.has(event.code)) {
          event.preventDefault();
          navigationKeys.get(event.code)();
          event.currentTarget.scrollBy(kbDeltas.x, kbDeltas.y);
        }
      },
      [isFocused],
    );

    return (
      <div
        ref={tableWrapperRef}
        tabIndex={0}
        style={style ?? {}}
        className={mergeClassnames("focus:outline-none", className)}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        onKeyDown={(e) => {
          handleKbDown(e);
        }}
      >
        {children}
      </div>
    );
  },
);

export default TableWrapper;
