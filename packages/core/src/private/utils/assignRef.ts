import React from "react";

export function assignRef<T>(ref: React.ForwardedRef<T>, value: T) {
  if (typeof ref === "function") {
    ref(value);
    return;
  }

  if (ref?.current) {
    ref.current = value;
  }
}
