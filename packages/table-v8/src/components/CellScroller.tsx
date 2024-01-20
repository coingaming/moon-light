import React, { useCallback } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";

const CellScroller = ({
  data,
  className,
}: {
  data?: React.JSX.Element | React.JSX.Element[] | string | string[];
  className?: string;
}) => {
  const handleKbDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const kbDeltas = { x: 0, y: 0 };
      const scrollRange =
        event.currentTarget.scrollWidth - event.currentTarget.offsetWidth;
      const kbDelta =
        event.currentTarget.offsetWidth < 132
          ? event.currentTarget.offsetWidth
          : 132;
      if (
        scrollRange > 0 &&
        (event.code === "ArrowLeft" || event.code === "ArrowRight")
      ) {
        event.preventDefault();
        event.stopPropagation();
        event.currentTarget.focus();
        switch (event.code) {
          case "ArrowLeft":
            kbDeltas.x = -kbDelta;
            break;
          case "ArrowRight":
            kbDeltas.x = kbDelta;
            break;
        }

        event.currentTarget.scrollBy(kbDeltas.x, kbDeltas.y);
      }
    },
    [],
  );

  return (
    <div
      tabIndex={0}
      className={mergeClassnames(
        "px-3 py-2 text-moon-14 flex items-center overflow-x-auto outline-none",
        className,
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
