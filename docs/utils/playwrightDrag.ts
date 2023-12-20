interface Pos {
  x: number;
  y: number;
}

export const createTouchEvent = () => {
  // @ts-ignore
  window.createTouchEvent = (x: number, y: number, offset = -281) => {
    return new Touch({
      clientX: x,
      clientY: y,
      screenX: x,
      screenY: offset + y,
      target: window,
      identifier: 0,
    });
  };
};
export const PlayWrightStartTouch = () => {
  // @ts-ignore
  window.PlayWrightStartTouch = (selector: string, position: Pos) => {
    const element = document.querySelector(selector);
    if (!element) {
      throw Error("Selector not found");
    }
    // @ts-ignore
    const t = window.createTouchEvent(0, 0);
    const ev = new TouchEvent("touchstart", {
      touches: [t],
      changedTouches: [t],
      cancelable: true,
      bubbles: true,
    });
    element.dispatchEvent(ev);
  };
};

export const PlayWrightMoveTouch = () => {
  // @ts-ignore
  window.PlayWrightMoveTouch = (selector: string, y: number, steps: number) => {
    const element = document.querySelector(selector);
    if (!element) {
      throw Error("Selector not found");
    }

    const minorStep = y / steps;
    // Create the steps
    const touches = Array(steps)
      .fill(0)
      .map((t: any, index: number) => {
        // @ts-ignore
        return window.createTouchEvent(0, minorStep * index);
      });
    touches.forEach((t) => {
      const ev = new TouchEvent("touchmove", {
        touches: [t],
        changedTouches: [t],
        cancelable: true,
        bubbles: true,
      });
      element.dispatchEvent(ev);
    });
  };
};

export const PlayWrightEndTouch = () => {
  // @ts-ignore
  window.PlayWrightEndTouch = (selector: string) => {
    const element = document.querySelector(selector);
    if (!element) {
      throw Error("Selector not found");
    }
    // @ts-ignore
    const t = window.createTouchEvent(0, 0);
    const ev = new TouchEvent("touchend", {
      touches: [t],
      changedTouches: [t],
      cancelable: true,
      bubbles: true,
    });
    element.dispatchEvent(ev);
  };
};
