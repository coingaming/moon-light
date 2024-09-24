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

    console.log("in here oe test", { isDragging, intervalId, delay });

    if (isDragging && intervalId) {
      // clearInterval(intervalId);
      return () => {
        clearInterval(intervalId);
      };
    }

    if (delay !== null) {
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
