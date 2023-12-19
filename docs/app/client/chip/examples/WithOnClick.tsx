"use client";

import { useCallback, useState } from "react";
import { Chip } from "@heathmont/moon-core-tw";

const WithOnClick = () => {
  const [counter, setCounter] = useState<number>(0);

  const callback = useCallback(() => {
    setCounter(counter + 1);
  }, [counter, setCounter]);

  return (
    <div className="flex flex-col space-y-2">
      <p>
        <strong>Click counter:</strong> {counter}
      </p>
      <Chip className="border border-beerus" onClick={() => callback()}>
        Click me
      </Chip>
    </div>
  );
};

export default WithOnClick;
