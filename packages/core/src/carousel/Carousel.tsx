import React, { Children, useEffect } from "react";
import type CarouselRootProps from "./private/types/CarouselRootProps";
import type SubcomponentProps from "./private/types/SubcomponentProps";
import CarouselContext from "./private/utils/CarouselContext";
import useCarouselContext from "./private/utils/useCarouselContext";
import useInterval from "./private/utils/useInterval";
import withHorizontalScroll from "./private/utils/withHorizontalScroll";
import IconButton from "../iconButton/IconButton";
import mergeClassnames from "../mergeClassnames/mergeClassnames";

const CarouselRoot = ({
  children,
  scrollTo,
  className,
  step,
  selectedIndex,
  autoSlideDelay,
  isSwipeDragDisabled,
  isRtl,
  ...rest
}: CarouselRootProps) => {
  const {
    itemRef,
    scrollLeftToStep,
    scrollRightToStep,
    containerRef,
    canScrollLeft,
    canScrollRight,
    scrollToIndex,
    itemsCount,
    firstVisibleIndex,
    lastVisibleIndex,
    isDragging,
    setIsDragging,
    handleMouseDown,
    handleMouseUp,
    debounceMouseDown,
    debounceMouseUp,
  } = withHorizontalScroll({
    scrollStep: step || 5,
    scrollTo: scrollTo,
    scrollInContainer: true,
    isRtl,
  });

  useInterval(
    () => {
      if (!autoSlideDelay) return;
      if (isRtl) {
        if (canScrollLeft) {
          scrollLeftToStep();
        } else {
          scrollToIndex(itemsCount - 1);
        }
      } else {
        if (canScrollRight) {
          scrollRightToStep();
        } else {
          scrollToIndex(0);
        }
      }
    },
    autoSlideDelay as number,
    isDragging,
  );

  useEffect(() => {
    if (selectedIndex !== undefined) {
      scrollToIndex(isRtl ? itemsCount - selectedIndex - 1 : selectedIndex);
    }
  }, [selectedIndex, isRtl, itemsCount]);

  return (
    <CarouselContext.Provider
      value={{
        itemRef,
        scrollLeftToStep,
        scrollRightToStep,
        canScrollLeft,
        canScrollRight,
        containerRef,
        selectedIndex,
        itemsCount,
        firstVisibleIndex,
        lastVisibleIndex,
        autoSlideDelay,
        isSwipeDragDisabled: isSwipeDragDisabled ?? false,
        isRtl,
        isDragging,
        setIsDragging,
        handleMouseDown,
        handleMouseUp,
        debounceMouseDown,
        debounceMouseUp,
      }}
    >
      <div className={mergeClassnames("relative w-full", className)} {...rest}>
        {typeof children === "function"
          ? children({
              scrollLeftToStep,
              scrollRightToStep,
              canScrollLeft,
              canScrollRight,
              firstVisibleIndex,
              lastVisibleIndex,
            })
          : children}
      </div>
    </CarouselContext.Provider>
  );
};

const Reel = ({ children, className, ...rest }: SubcomponentProps) => {
  const {
    containerRef,
    isSwipeDragDisabled,
    isRtl,
    handleMouseDown,
    handleMouseUp,
    debounceMouseUp,
    isDragging,
  } = useCarouselContext("Carousel.Reel");
  const arrayChildren = Children.toArray(children);
  const revertChildren = arrayChildren.reverse();
  const debouncedMouseUp = debounceMouseUp ? debounceMouseUp() : null;

  return (
    <ul
      className={mergeClassnames(
        "flex overflow-x-auto overflow-y-hidden h-auto hidden-scroll gap-space-16",
        "[-webkit-overflow-scrolling:touch] [scrollbar-width:none]",
        "[-ms-overflow-style:-ms-autohiding-scrollbar]",
        '[&>li]:list-none [&>li]:before:absolute [&>li]:before:content-["\\200B"]',
        "[&>*]:flex-[0_0_auto] [&>img]:h-full [&>img]:basis-auto [&>img]:w-auto",
        "snap-x snap-mandatory rtl:flex-row-reverse",
        isSwipeDragDisabled && "overflow-x-hidden",
        className,
      )}
      onMouseEnter={() => {
        handleMouseDown?.();
      }}
      onMouseLeave={() => {
        handleMouseUp?.();
      }}
      onTouchStart={() => {
        if (!isDragging) {
          handleMouseDown?.();
        }
      }}
      onTouchEnd={() => {
        if (isDragging) {
          debouncedMouseUp?.();
        }
      }}
      ref={containerRef}
      {...rest}
    >
      {isRtl ? revertChildren : children}
    </ul>
  );
};

// TODO: highlight selected item (mark it as selected)
const Item = ({ children, className, ...rest }: SubcomponentProps) => {
  const { itemRef } = useCarouselContext("Carousel.Item");
  return (
    <li
      className={mergeClassnames(
        "snap-center flex bg-primary rounded-8 items-center justify-center",
        className,
      )}
      ref={itemRef}
      {...rest}
    >
      {children}
    </li>
  );
};

const LeftArrow = ({ children, className, ...rest }: SubcomponentProps) => {
  const { scrollLeftToStep = () => {}, canScrollLeft } =
    useCarouselContext("Carousel.LeftArrow");
  return (
    <IconButton
      size="sm"
      className={mergeClassnames(
        "max-sm:hidden shadow-200 bg-primary text-primary",
        "absolute top-1/2 -translate-y-1/2 origin-[top_center] z-5 -start-space-16 rtl:-end-space-16 rtl:start-[auto]",
        className,
      )}
      onClick={scrollLeftToStep}
      disabled={!canScrollLeft}
      aria-label="Scroll left"
      {...rest}
    >
      {children}
    </IconButton>
  );
};

const RightArrow = ({ children, className, ...rest }: SubcomponentProps) => {
  const { scrollRightToStep = () => {}, canScrollRight } = useCarouselContext(
    "Carousel.RightArrow",
  );
  return (
    <IconButton
      size="sm"
      className={mergeClassnames(
        "max-sm:hidden shadow-200 bg-primary text-primary",
        "absolute top-1/2 -translate-y-1/2 origin-[top_center] z-5 -end-space-16 rtl:-start-space-16 rtl:end-[auto]",
        className,
      )}
      onClick={scrollRightToStep}
      disabled={!canScrollRight}
      aria-label="Scroll right"
      {...rest}
    >
      {children}
    </IconButton>
  );
};

// TODO: add slide indicator timer
const Indicators = ({ className, ...rest }: SubcomponentProps) => {
  const {
    itemsCount,
    selectedIndex,
    firstVisibleIndex = 0,
    lastVisibleIndex = 0,
  } = useCarouselContext("Carousel.RightArrow");
  const activeIndex =
    !selectedIndex ||
    selectedIndex < firstVisibleIndex ||
    selectedIndex > lastVisibleIndex
      ? firstVisibleIndex
      : selectedIndex;
  const items = Array.from({ length: itemsCount ?? 0 }, (index) => index);
  return (
    <div
      className={mergeClassnames(
        "flex absolute bottom-space-32 left-1/2 -translate-x-1/2 rtl:flex-row-reverse",
        className,
      )}
      {...rest}
    >
      {items?.map((_, index) => (
        <div
          className={mergeClassnames(
            "size-space-8 mx-space-4 rounded-full bg-tertiary",
            activeIndex === index && "bg-brand",
          )}
          key={index}
        />
      ))}
    </div>
  );
};

const Carousel = Object.assign(CarouselRoot, {
  Reel,
  LeftArrow,
  RightArrow,
  Item,
  Indicators,
});

export default Carousel;
