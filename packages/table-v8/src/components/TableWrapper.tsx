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
        if (!isFocused || isLocked) {
          return;
        }

        const kbDeltas = { x: 0, y: 0 };

        const navigationKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
        if (navigationKeys.includes(event.code)) {
          event.preventDefault();

          const movementDirections = {
            "ArrowUp": () => kbDeltas.y = -kbDelta,
            "ArrowDown": () => kbDeltas.y = kbDelta,
            "ArrowLeft": () => kbDeltas.x = -kbDelta,
            "ArrowRight": () => kbDeltas.x = calcMaxScrollByX(event.currentTarget, kbDelta, container?.width),
          };

          movementDirections[event.code]();

          setIsLocked(true);
          setTimeout(resetLockState, 82);
          event.currentTarget.scrollBy(kbDeltas.x, kbDeltas.y);
        }
      },
      [isFocused, isLocked, setIsLocked],
    );

    useEffect(() => {
      const element = tableWrapperRef?.current;
      if (element) {
        element.addEventListener("wheel", handleWheel, { passive: false });
      }

      return () => {
        element?.removeEventListener("wheel", handleWheel);
      };
    }, []);

    const getBackLostFocus = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLElement;
      const isSpecialElement =
        target.tagName.toUpperCase() === 'SVG' ||
        target.tagName.toUpperCase() === 'BUTTON' ||
        (target.tagName.toUpperCase() === 'INPUT' && (target as HTMLInputElement).type?.toLowerCase() === 'checkbox');

      if (isSpecialElement) {
        event.currentTarget.focus();
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
