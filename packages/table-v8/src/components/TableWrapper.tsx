import React, {
  forwardRef,
  MutableRefObject,
  useCallback,
  useEffect,
  useState,
  WheelEvent,
} from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import TableWrapperProps from "../private/types/TableWrapperProps";

const TableWrapper = forwardRef<HTMLDivElement, TableWrapperProps>(
  ({ style, className, children, container, tableWrapperRef }) => {
    const kbDelta = 132;
    const [isFocused, setIsFocused] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

    const resetLockState = useCallback(() => {
      setIsLocked(false);
    }, [setIsLocked]);

    const handleWheel = useCallback(
      (e: globalThis.WheelEvent) => {
        const event = e as unknown as WheelEvent<HTMLDivElement>;
        if ((event.target as HTMLElement).closest("thead") !== null) return;
        event.preventDefault();
        if (!isLocked) {
          setIsLocked(true);
          setTimeout(resetLockState, 45);
          event.currentTarget.scrollBy(0, event.deltaY);
        }
      },
      [isLocked, setIsLocked],
    );

    const calcMaxScrollByX = (
      target: HTMLDivElement,
      shift: number,
      containerWidth?: number | string,
    ) => {
      const scrollRange =
        container && containerWidth ? target.scrollWidth - +containerWidth : 0;
      const dX = target.scrollLeft + shift;
      return dX < 0
        ? -target.scrollLeft
        : dX >= scrollRange
          ? scrollRange - target.scrollLeft - 1
          : shift;
    };

    const handleKbDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (isFocused) {
          const kbDeltas = { x: 0, y: 0 };
          if (
            event.code === "ArrowUp" ||
            event.code === "ArrowDown" ||
            event.code === "ArrowLeft" ||
            event.code === "ArrowRight"
          ) {
            event.preventDefault();
            switch (event.code) {
              case "ArrowUp":
                kbDeltas.y = -kbDelta;
                break;
              case "ArrowDown":
                kbDeltas.y = kbDelta;
                break;
              case "ArrowLeft":
                kbDeltas.x = -kbDelta;
                break;
              case "ArrowRight":
                kbDeltas.x = calcMaxScrollByX(
                  event.currentTarget,
                  kbDelta,
                  container?.width,
                );
                break;
            }

            if (!isLocked) {
              setIsLocked(true);
              setTimeout(resetLockState, 82);
              event.currentTarget.scrollBy(kbDeltas.x, kbDeltas.y);
            }
          }
        }
      },
      [isFocused, isLocked, setIsLocked],
    );

    useEffect(() => {
      const element = (tableWrapperRef as MutableRefObject<HTMLDivElement>)
        ?.current;
      element?.addEventListener("wheel", handleWheel, { passive: false });
    }, []);

    const getBackLostFocus = useCallback((event: React.MouseEvent) => {
      const target = event.target as HTMLElement;
      const tagName = target.tagName.toUpperCase();
      const type = (target as HTMLInputElement).type?.toLowerCase();
      if (
        tagName === "SVG" ||
        tagName === "BUTTON" ||
        (tagName === "INPUT" && type === "checkbox")
      ) {
        (event.currentTarget as HTMLDivElement).focus();
      }
    }, []);

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
        onClick={getBackLostFocus}
      >
        {children}
      </div>
    );
  },
);

export default TableWrapper;
