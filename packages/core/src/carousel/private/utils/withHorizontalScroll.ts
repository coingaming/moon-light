import React, { useCallback } from "react";
export const THRESHOLD = 0.75;

type Options = {
  scrollStep?: number;
  scrollInContainer?: boolean;
  scrollTo?: number;
  isRtl?: boolean;
};

const findLastVisibleIndex = (childRefs: any[]): any => {
  const reversedIndex = childRefs
    // "reverse" mutates existing array, that's why we copy it via "slice"
    .slice()
    .reverse()
    .findIndex((child) => child.getAttribute("visible"));
  const count = childRefs.length - 1;
  const finalIndex = reversedIndex >= 0 ? count - reversedIndex : reversedIndex;
  return finalIndex;
};

const findFirstVisibleIndex = (childRefs: any[]): any => {
  return childRefs.findIndex((child) => child.getAttribute("visible"));
};

const scrollToIndex = async (itemRef: HTMLElement, containerRef?: any) => {
  if (containerRef && itemRef) {
    containerRef.scrollTo({
      top: 0,
      left: itemRef.offsetLeft,
      behavior: "smooth",
    });
  }
};

const scrollLeftToStep = (
  scrollStep: number,
  itemRefs: HTMLElement[],
  containerRef?: any,
  isRtl = false,
) => {
  const actualScrollForIndex = calculateActualScrollForIndex(
    itemRefs,
    scrollStep,
    true,
    isRtl,
  );
  scrollToIndex(itemRefs[actualScrollForIndex], containerRef);
};

const scrollRightToStep = (
  scrollStep: number,
  itemRefs: HTMLElement[],
  containerRef?: any,
  isRtl = false,
) => {
  const actualScrollForIndex = calculateActualScrollForIndex(
    itemRefs,
    scrollStep,
    false,
    isRtl,
  );
  scrollToIndex(itemRefs[actualScrollForIndex], containerRef);
};

const calculateActualScrollForIndex = (
  itemRefs: HTMLElement[],
  scrollStep: number,
  toLeft: boolean,
  isRtl = false,
) => {
  if (toLeft) {
    return calculateActualScrollForIndexLeft(itemRefs, scrollStep, isRtl);
  }

  return calculateActualScrollForIndexRight(itemRefs, scrollStep, isRtl);
};

const calculateActualScrollForIndexLeft = (
  itemRefs: HTMLElement[],
  scrollStep: number,
  isRtl: boolean,
) => {
  if (isRtl) {
    return calculateActualScrollForIndexAsc(itemRefs, scrollStep);
  }
  return calculateActualScrollForIndexDesc(itemRefs, scrollStep);
};

const calculateActualScrollForIndexRight = (
  itemRefs: HTMLElement[],
  scrollStep: number,
  isRtl: boolean,
) => {
  if (isRtl) {
    return calculateActualScrollForIndexDesc(itemRefs, scrollStep);
  }
  return calculateActualScrollForIndexAsc(itemRefs, scrollStep);
};

const calculateActualScrollForIndexAsc = (
  itemRefs: HTMLElement[],
  scrollStep: number,
) => {
  const lastVisibleIndex = findLastVisibleIndex(itemRefs);
  const lastIndex = itemRefs.length - 1;
  const actualScrollForIndex =
    lastIndex - lastVisibleIndex < scrollStep
      ? lastIndex
      : lastVisibleIndex + scrollStep;

  return actualScrollForIndex;
};

const calculateActualScrollForIndexDesc = (
  itemRefs: HTMLElement[],
  scrollStep: number,
) => {
  const firstVisibleIndex = findFirstVisibleIndex(itemRefs);
  const actualScrollForIndex =
    firstVisibleIndex < scrollStep ? 0 : firstVisibleIndex - scrollStep;

  return actualScrollForIndex;
};

const showHideIndicator = (
  itemRefs: HTMLElement[],
  setLeftIndicator: (isShow: boolean) => void,
  setRightIndicator: (isShow: boolean) => void,
  setFirstVisibleIndex: (index: number) => void,
  setLastVisibleIndex: (index: number) => void,
  isRtl = false,
) => {
  const firstVisibleIndex = findFirstVisibleIndex(itemRefs);
  const lastVisibleIndex = findLastVisibleIndex(itemRefs);
  setFirstVisibleIndex(firstVisibleIndex);
  setLastVisibleIndex(lastVisibleIndex);

  const visibleItemsLength = lastVisibleIndex - firstVisibleIndex + 1;

  if (visibleItemsLength === itemRefs.length) {
    setLeftIndicator(false);
    setRightIndicator(false);
    return;
  }

  showHideIndicatorRtlLtr(
    itemRefs,
    firstVisibleIndex,
    lastVisibleIndex,
    setLeftIndicator,
    setRightIndicator,
    isRtl,
  );
};

const showHideIndicatorRtlLtr = (
  itemRefs: HTMLElement[],
  firstVisibleIndex: number,
  lastVisibleIndex: number,
  setLeftIndicator: (isShow: boolean) => void,
  setRightIndicator: (isShow: boolean) => void,
  isRtl = false,
) => {
  const lastIndex = itemRefs.length - 1;
  const isLastIndexShown = lastIndex === lastVisibleIndex;

  if (isRtl) {
    setLeftIndicator(!isLastIndexShown);
    setRightIndicator(firstVisibleIndex > 0);
    return;
  }

  setLeftIndicator(firstVisibleIndex > 0);
  setRightIndicator(!isLastIndexShown);
};

export const withHorizontalScroll = (options: Options): any => {
  const [leftIndicator, setLeftIndicator] = React.useState(false);
  const [rightIndicator, setRightIndicator] = React.useState(false);
  const [firstVisibleIndex, setFirstVisibleIndex] = React.useState(-1);
  const [lastVisibleIndex, setLastVisibleIndex] = React.useState(-1);
  const [itemsCount, setItemsCount] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef(null);

  const { scrollStep, scrollTo, isRtl: isRtlProp } = options;

  const itemRefs: HTMLElement[] = [];
  let isRtl = isRtlProp ?? false;

  if (typeof document !== "undefined" && containerRef.current !== null) {
    const computedDirection = getComputedStyle(containerRef.current).direction;
    isRtl = isRtlProp ?? computedDirection === "rtl";
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: any) => {
        entries.forEach((entry: any) => {
          entry.intersectionRatio >= THRESHOLD
            ? entry.target.setAttribute("visible", "true")
            : entry.target.removeAttribute("visible");
          showHideIndicator(
            itemRefs,
            setLeftIndicator,
            setRightIndicator,
            setFirstVisibleIndex,
            setLastVisibleIndex,
            isRtl,
          );
        });
      },
      {
        root: containerRef.current,
        threshold: THRESHOLD,
      },
    );

    itemRefs.forEach((item) => {
      observer.observe(item);
    });

    return () =>
      itemRefs.forEach((item) => {
        observer.unobserve(item);
      });
  }, []);

  const itemRef = (element: HTMLElement) => {
    if (!element) {
      return;
    }
    itemRefs.push(element);
    setItemsCount(itemRefs.length);
  };

  //If RTL is enabled, scroll to the last element of the items array
  React.useEffect(() => {
    if (!itemRefs.length) return;
    setItemsCount(itemRefs.length);
  }, []);

  React.useEffect(() => {
    if (!scrollTo || !itemRefs.length) {
      return;
    }
    const currentScrollTo = scrollTo - 1;

    // We scroll for another extra item because we defined our THRESHOLD = 0.75;
    // It means that item will be visible for 75%.
    // We scroll one more to guarantee 100% visibility.
    // "items.length - 1" because indices start from 0.
    if (currentScrollTo && currentScrollTo < itemRefs.length - 1) {
      scrollToIndex(itemRefs[currentScrollTo], containerRef.current);
    }
    // No point for scroll another extra item because that's the last one
    if (currentScrollTo && currentScrollTo === itemRefs.length - 1) {
      scrollToIndex(itemRefs[currentScrollTo], containerRef.current);
    }
  }, []);

  const handleMouseDown = () => {
    setIsDragging((prevState) => !prevState);
  };

  const handleMouseUp = () => {
    setIsDragging((prevState) => !prevState);
  };

  const debounce = (fallback: (...args: any) => void, delay: number) => {
    let timer: number;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fallback(...args);
      }, delay);
    };
  };

  const debounceMouseDown = useCallback(() => {
    return debounce(handleMouseDown, 500);
  }, []);

  const debounceMouseUp = useCallback(() => {
    return debounce(handleMouseUp, 3000);
  }, []);

  return {
    itemRef,
    containerRef,
    firstVisibleIndex,
    lastVisibleIndex,
    scrollLeftToStep: () =>
      scrollLeftToStep(scrollStep || 0, itemRefs, containerRef.current, isRtl),
    scrollRightToStep: () =>
      scrollRightToStep(scrollStep || 0, itemRefs, containerRef.current, isRtl),
    scrollToIndex: (index: number) =>
      scrollToIndex(itemRefs[index], containerRef.current),
    canScrollLeft: leftIndicator,
    canScrollRight: rightIndicator,
    itemsCount,
    isDragging,
    setIsDragging,
    handleMouseDown,
    handleMouseUp,
    debounceMouseDown,
    debounceMouseUp,
    isRtl,
  };
};

export default withHorizontalScroll;
