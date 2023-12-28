declare global {
  interface Window {
    createTouchEvent: (x: number, y: number, offset?: number) => Touch;
    PlayWrightStartTouch: (
      selector: string,
      position: {
        x: number;
        y: number;
      },
    ) => void;
    PlayWrightMoveTouch: (selector: string, y: number, steps: number) => void;
    PlayWrightEndTouch: (selector: string) => void;
  }
}

export const createTouchEvent = () => {
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
  window.PlayWrightStartTouch = (
    selector: string,
    position: {
      x: number;
      y: number;
    },
  ) => {
    const element = document.querySelector(selector);
    if (!element) {
      throw Error("Selector not found");
    }
    const t = window.createTouchEvent(0, 0);
    const event = new TouchEvent("touchstart", {
      touches: [t],
      changedTouches: [t],
      cancelable: true,
      bubbles: true,
    });
    element.dispatchEvent(event);
  };
};

export const PlayWrightMoveTouch = () => {
  window.PlayWrightMoveTouch = (selector: string, y: number, steps: number) => {
    const element = document.querySelector(selector);
    if (!element) {
      throw Error("Selector not found");
    }

    const minorStep = y / steps;
    // Create the steps
    const touches = Array(steps)
      .fill(0)
      .map((_: number, index: number) => {
        return window.createTouchEvent(0, minorStep * index);
      });
    touches.forEach((t) => {
      const event = new TouchEvent("touchmove", {
        touches: [t],
        changedTouches: [t],
        cancelable: true,
        bubbles: true,
      });
      element.dispatchEvent(event);
    });
  };
};

export const PlayWrightEndTouch = () => {
  window.PlayWrightEndTouch = (selector: string) => {
    const element = document.querySelector(selector);
    if (!element) {
      throw Error("Selector not found");
    }
    const t = window.createTouchEvent(0, 0);
    const event = new TouchEvent("touchend", {
      touches: [t],
      changedTouches: [t],
      cancelable: true,
      bubbles: true,
    });
    element.dispatchEvent(event);
  };
};
