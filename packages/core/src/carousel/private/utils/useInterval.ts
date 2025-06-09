import { useEffect, useRef, useState } from "react";

const useInterval = (
  callback: () => void,
  delay: number,
  isDragging?: boolean,
) => {
  const savedCallback = useRef<() => void>();
  const intervalId = useRef<number | undefined>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }

    if (isDragging && intervalId) {
      clearInterval(intervalId.current);
      intervalId.current = undefined;
      return () => {
        clearInterval(intervalId.current);
      };
    }

    if (!isDragging && delay !== null) {
      intervalId.current = setInterval(tick, delay);
      return () => {
        clearInterval(intervalId.current);
        intervalId.current = undefined;
      };
    }
  }, [delay, isDragging]);
};

export default useInterval;
