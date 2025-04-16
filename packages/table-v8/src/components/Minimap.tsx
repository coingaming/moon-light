import React, { useCallback, useEffect, useState } from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import type MinimapProps from "../private/types/MinimapProps";

let timeoutId: ReturnType<typeof setTimeout>;
const TIMEOUT = 350;

const Minimap = ({ tableWrapperRef, numberOfColumns }: MinimapProps) => {
  const [styles, setStyles] = useState({});
  const [visible, setVisible] = useState(false);

  const handleUpdateViewport = useCallback(() => {
    if (!tableWrapperRef || !tableWrapperRef.current) return;
    const table = tableWrapperRef.current?.childNodes[0] as HTMLTableElement;

    const fullHeight = table.scrollHeight;
    const fullWidth = table.scrollWidth;

    const viewportHeight = tableWrapperRef.current.clientHeight;
    const viewportWidth = tableWrapperRef.current.clientWidth;

    const scrollTop = tableWrapperRef.current.scrollTop;
    const scrollLeft = tableWrapperRef.current.scrollLeft;

    setStyles({
      height: `${(viewportHeight / fullHeight) * 100}%`,
      width: `${(viewportWidth / fullWidth) * 100}%`,
      top: `${(scrollTop / fullHeight) * 100}%`,
      left: `${(scrollLeft / fullWidth) * 100}%`,
      borderColor: "var(--semantic-border-brand)",
    });

    setVisible(true);

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      setVisible(false);
    }, TIMEOUT);
  }, [tableWrapperRef]);

  useEffect(() => {
    if (!tableWrapperRef || !tableWrapperRef.current) return;

    tableWrapperRef.current.addEventListener("scroll", handleUpdateViewport, {
      passive: true,
    });
    return () => {
      tableWrapperRef.current?.removeEventListener(
        "scroll",
        handleUpdateViewport,
      );
      clearTimeout(timeoutId);
    };
  }, [tableWrapperRef, handleUpdateViewport]);

  return (
    <div
      className={mergeClassnames(
        "absolute z-10 w-auto h-space-64 bottom-space-20 end-space-20 rounded-8 p-space-4 bg-primary shadow-300",
        "border border-primary pointer-events-none transition-opacity",
        visible ? "opacity-1" : "opacity-0",
      )}
    >
      <div className="grid grid-flow-col h-full gap-space-4 p-space-2 relative auto-cols-[minmax(0,_2fr)]">
        <div
          style={styles}
          className="absolute size-0 overflow-hidden rounded-4 border-2"
        />
        {[...new Array(numberOfColumns)].map((_, index) => (
          <div
            key={index}
            className="h-full w-space-8 bg-primary rounded-4"
            children={""}
          />
        ))}
      </div>
    </div>
  );
};

export default Minimap;
