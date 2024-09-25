import { useEffect, useRef, useState } from "react";

const useInterval = (
  callback: () => void,
  delay: number,
  isDragging?: boolean,
) => {
  const savedCallback = useRef<() => void>();
  const [intervalId, setIntervalId] = useState<number | undefined>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }

    if (isDragging && intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
      return () => {
        clearInterval(intervalId);
      };
    }

    if (!isDragging && delay !== null) {
      let id = setInterval(tick, delay);
      setIntervalId(id);
      return () => {
        clearInterval(id);
        setIntervalId(undefined);
      };
    }
  }, [delay, isDragging]);
};

export default useInterval;
