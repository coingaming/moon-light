"use client";

import { useState } from "react";
import { Switch } from "@heathmont/moon-core-tw";

const Example = () => {
  const [state, setState] = useState(true);
  return (
    <>
      <Switch
        checked={state}
        onChange={setState}
        className="bg-discovery moon-checked:bg-positive"
        aria-label="Switch with custom styles"
      />
      <Switch
        checked={state}
        onChange={setState}
        className="bg-caution moon-checked:bg-negative"
        aria-label="Switch with custom styles"
      />
    </>
  );
};

export default Example;
