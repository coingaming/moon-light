import { RefObject } from "react";

type CarouselState = {
  itemRef?: (element: HTMLLIElement) => void;
  scrollLeftToStep?: () => void;
  scrollRightToStep?: () => void;
  canScrollLeft?: boolean;
  canScrollRight?: boolean;
  containerRef?: RefObject<HTMLUListElement>;
  selectedIndex?: number;
  itemsCount?: number;
  firstVisibleIndex?: number;
  lastVisibleIndex?: number;
  autoSlideDelay?: number;
  isSwipeDragDisabled?: boolean;
  isRtl?: boolean;
  isDragging?: boolean;
  setIsDragging?: () => void;
  handleMouseDown?: () => void;
  handleMouseUp?: () => void;
  debounceMouseDown?: () => () => void;
  debounceMouseUp?: () => () => void;
};

export default CarouselState;
