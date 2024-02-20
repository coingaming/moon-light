type Coordinates = {
  x: number;
  y: number;
};

const targetElement = new Map();
const coord: Coordinates = { x: 0, y: 0 };
let isSwipe = false;
let target: HTMLDivElement | undefined | null = null;
let xOnlyMove = false;
let verticalMotion = false;
let endOfY = false;

const doSwipe = (dX: number, dY: number) => {
  if (verticalMotion) {
    dX = 0;
  } else {
    dY = 0;
  }
  target?.scrollBy(dX, dY);
}

export const endOfYScroll = (tgt: HTMLDivElement, shift: number) => {
  return tgt.scrollHeight > tgt.offsetHeight
    ? (tgt.scrollTop === 0 && shift < 0) ||
        (tgt.scrollHeight - tgt.scrollTop <= tgt.offsetHeight &&
          shift > 0)
    : true;
};

const detectAction = (event: TouchEvent) => {
  const dx = coord.x - event.changedTouches[0].pageX;
  const dy = coord.y - event.changedTouches[0].pageY;
  verticalMotion = (Math.abs(dx) <= Math.abs(dy));
  const enableVerticalMotion = !xOnlyMove && verticalMotion && !endOfY;
  const enableSwipping = enableVerticalMotion || !verticalMotion;
  if (enableSwipping) {
    if (Math.abs(dx) > 0 || Math.abs(dy) > 0) {
      event.stopPropagation();
      event.preventDefault();
    }
    doSwipe(dx, dy);
  }
  endOfY = endOfYScroll(target as HTMLDivElement, dy);
}

const storeXY = (event: TouchEvent) => {
  coord.x = event.changedTouches[0].pageX;
  coord.y = event.changedTouches[0].pageY;
}

const detectTablePart = (tableTarget: HTMLTableElement) => {
  xOnlyMove = tableTarget.closest('tbody') === null;
}

const touchStart = (event: TouchEvent) => {
  if (!targetElement) return;
  const tableTarget = event.target as HTMLTableElement;
  const divElement = tableTarget.closest('table')?.closest('div');
  isSwipe = targetElement.has(divElement);
  if (!isSwipe) return;
  target = divElement;
  detectTablePart(tableTarget);
  storeXY(event);
}

const touchMove = (event: TouchEvent) => {
  if (!isSwipe) return;
  detectAction(event);
  storeXY(event);
}

const touchEnd = (event: TouchEvent) => {
  if (!isSwipe) return;
  detectAction(event);
  isSwipe = false;
}

export const hangTouchHandler = (element: HTMLDivElement) => {
  targetElement.set(element, true);
  window.addEventListener("touchstart", touchStart);
  window.addEventListener("touchmove", touchMove, { passive: false });
  window.addEventListener("touchend", touchEnd);
}

export const dropTouchHandler = () => {
  window.removeEventListener("touchstart", touchStart);
  window.removeEventListener("touchmove", touchMove);
  window.removeEventListener("touchend", touchEnd);
  targetElement.clear();
};
