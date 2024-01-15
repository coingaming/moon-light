"use client";

import { Input } from "@heathmont/moon-core-tw";
import { useState } from "react";

const ControllingAnInput = () => {
  const [color, setColor] = useState("FFFFFF");
  return (
    <div className="w-full">
      <Input
        aria-label="controlled"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <p className="text-moon-18 pt-2">
        <b>Result:</b> {color}
      </p>
    </div>
  );
};

export default ControllingAnInput;
