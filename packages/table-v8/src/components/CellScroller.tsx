import React, { useCallback } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";

export const inCellScrollRange = (element: HTMLDivElement) => {
  const scrollRange = element.scrollWidth - element.offsetWidth;
  return scrollRange > 0;
};

const CellScroller = ({
  data,
  className,
}: {
  data?: React.JSX.Element | React.JSX.Element[] | string | string[];
  className?: string;
}) => {
  const handleKbDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (
        !inCellScrollRange(event.currentTarget) ||
        !["ArrowLeft", "ArrowRight"].includes(event.code)
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      event.currentTarget.focus();

      const kbDelta =
        event.currentTarget.offsetWidth < 132
          ? event.currentTarget.offsetWidth
          : 132;

      const xScrollBy = event.code === "ArrowLeft" ? -kbDelta : kbDelta;

      event.currentTarget.scrollBy(xScrollBy, 0);
    },
    [],
  );

  return (
    <div
      tabIndex={0}
      className={mergeClassnames(
        "px-3 py-2 text-moon-14 flex items-center overflow-x-auto outline-none",
        className,
        "cell-scroller",
      )}
      onKeyDown={(e) => {
        handleKbDown(e);
      }}
    >
      {data}
    </div>
  );
};

export default CellScroller;
