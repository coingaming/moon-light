import React, { useCallback } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";

const CellScroller = ({
  data,
  className
}: {
  data?: React.JSX.Element | React.JSX.Element[] | string | string[];
  className?: string;
}) => {
  const handleKbDown = useCallback((evt: React.KeyboardEvent<HTMLDivElement>) => {
    const kbDeltas = { x: 0, y: 0 };
    const scrollRange = evt.currentTarget.scrollWidth - evt.currentTarget.offsetWidth;
    const kbDelta = evt.currentTarget.offsetWidth < 132 ? evt.currentTarget.offsetWidth : 132;
    if (scrollRange > 0 && (evt.code === "ArrowLeft" || evt.code === "ArrowRight")) {
      evt.preventDefault();
      evt.stopPropagation();
      evt.currentTarget.focus();
      switch (evt.code) {
        case "ArrowLeft": kbDeltas.x = -kbDelta; break;
        case "ArrowRight": kbDeltas.x = kbDelta; break;
      }

      evt.currentTarget.scrollBy(kbDeltas.x, kbDeltas.y);
    }
  }, []);

  return (
    <div
      tabIndex={0}
      className={mergeClassnames(
        "px-3 py-2 text-moon-14 flex items-center overflow-x-auto outline-none",
        className
      )}
      onKeyDown={(e) => { handleKbDown(e) }}
    >
      {data}
    </div>
  );
}

export default CellScroller;
