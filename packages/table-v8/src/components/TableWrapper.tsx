import React, {
  forwardRef,
  useCallback,
  useEffect,
  useState,
  WheelEvent,
} from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import {
  hangTouchHandler,
  dropTouchHandler,
  endOfYScroll,
} from "../private/utils/touchHandler";
import TableWrapperProps from "../private/types/TableWrapperProps";

const TableWrapper = forwardRef<HTMLDivElement, TableWrapperProps>(
  ({ style, className, children, tableWrapperRef }) => {
    const kbDelta = 15;
    const [isFocused, setIsFocused] = useState(false);
    const [containerWidth, setContainerWidth] = useState(0);

    /*
    const [isListenKbRepeatLocked, setIsListenKbRepeatLocked] = useState(false);

    const resetLockKbListenRepeatState = useCallback(() => {
      setIsListenKbRepeatLocked(false);
    }, [setIsListenKbRepeatLocked]);
    */

    // const handleWheel = useCallback(
    //   (e: globalThis.WheelEvent) => {
    //     const event = e as unknown as WheelEvent<HTMLDivElement>;
    //     const target = event.target as HTMLElement;
    //     const scrollOverHeader = target.closest("thead") !== null;
    //     const scrollOverFooter = target.closest("tfoot") !== null;
    //     if (scrollOverHeader || scrollOverFooter) return;
    //     if (endOfYScroll(event.currentTarget, event.deltaY)) return;
    //     event.preventDefault();
    //     /*
    //     if (isListenKbRepeatLocked) {
    //       return;
    //     }

    //     setIsListenKbRepeatLocked(true);
    //     setTimeout(resetLockKbListenRepeatState, 45); */
    //     event.currentTarget.scrollBy(event.deltaX / 5, event.deltaY / 5);
    //   },
    //   [
    //     /* isListenKbRepeatLocked, setIsListenKbRepeatLocked */
    //   ],
    // );

    const calcMaxScrollByX = (target: HTMLDivElement, shift: number) => {
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

    const updateContainerWidth = useCallback(() => {
      setContainerWidth(
        (tableWrapperRef?.current?.parentNode as HTMLDivElement).offsetWidth,
      );
    }, []);

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
          /*
          if (isListenKbRepeatLocked) {
            return;
          }

          setIsListenKbRepeatLocked(true);
          setTimeout(resetLockKbListenRepeatState, 82); */
          navigationKeys.get(event.code)();
          event.currentTarget.scrollBy(kbDeltas.x, kbDeltas.y);
        }
      },
      [isFocused /*, isListenKbRepeatLocked, setIsListenKbRepeatLocked */],
    );

    useEffect(() => {
      const element = tableWrapperRef?.current;
      if (element) {
        updateContainerWidth();
        // element.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("resize", updateContainerWidth);
        hangTouchHandler(element);
      }

      return () => {
        // element?.removeEventListener("wheel", handleWheel);
        window.removeEventListener("resize", updateContainerWidth);
        dropTouchHandler();
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
