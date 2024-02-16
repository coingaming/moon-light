import React, {
  forwardRef,
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
    const [isListenKbRepeatLocked, setIsListenKbRepeatLocked] = useState(false);

    const resetLockKbListenRepeatState = useCallback(() => {
      setIsListenKbRepeatLocked(false);
    }, [setIsListenKbRepeatLocked]);

    const endOfYScroll = (
      target: HTMLDivElement,
      shift: number,
    ) => {
      return (target.scrollHeight > target.offsetHeight)
        ? (target.scrollTop === 0 && shift < 0) || (target.scrollHeight - target.scrollTop === target.offsetHeight && shift > 0)
        : true;
    }

    const handleWheel = useCallback(
      (e: globalThis.WheelEvent) => {
        const event = e as unknown as WheelEvent<HTMLDivElement>;
        const target = event.target as HTMLElement;
        const scrollOverHeader = target.closest("thead") !== null;
        const scrollOverFooter = target.closest("tfoot") !== null;
        if (scrollOverHeader || scrollOverFooter) return;
        if (endOfYScroll(event.currentTarget, event.deltaY)) return;
        event.preventDefault();
        if (isListenKbRepeatLocked) {
          return;
        }
        setIsListenKbRepeatLocked(true);
        setTimeout(resetLockKbListenRepeatState, 45);
        event.currentTarget.scrollBy(0, event.deltaY);
      },
      [isListenKbRepeatLocked, setIsListenKbRepeatLocked],
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
          () =>
            (kbDeltas.x = calcMaxScrollByX(
              event.currentTarget,
              kbDelta,
              container?.width,
            )),
        );

        if (navigationKeys.has(event.code)) {
          event.preventDefault();
          if (isListenKbRepeatLocked) {
            return;
          }

          setIsListenKbRepeatLocked(true);
          setTimeout(resetLockKbListenRepeatState, 82);
          navigationKeys.get(event.code)();
          event.currentTarget.scrollBy(kbDeltas.x, kbDeltas.y);
        }
      },
      [isFocused, isListenKbRepeatLocked, setIsListenKbRepeatLocked],
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

    const getBackLostFocus = useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        const isSpecialElement =
          target.tagName.toUpperCase() === "SVG" ||
          target.tagName.toUpperCase() === "BUTTON" ||
          (target.tagName.toUpperCase() === "INPUT" &&
            (target as HTMLInputElement).type?.toLowerCase() === "checkbox");

        if (isSpecialElement) {
          event.currentTarget.focus();
        }
      },
      [],
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
        onClick={getBackLostFocus}
      >
        {children}
      </div>
    );
  },
);

export default TableWrapper;
