"use client";

import { useState, useCallback } from "react";
import { MenuItem } from "@heathmont/moon-core-tw";

const Radio = () => {
  const [activeOpt1, setActiveOpt1] = useState(false);
  const [activeOpt2, setActiveOpt2] = useState(false);
  return (
    <>
      <MenuItem
        isSelected={activeOpt1}
        onClick={useCallback(() => setActiveOpt1(!activeOpt1), [activeOpt1])}
        className="w-56"
      >
        <MenuItem.Radio />
        <MenuItem.Title>Your value</MenuItem.Title>
      </MenuItem>
      <MenuItem
        isSelected={activeOpt2}
        onClick={useCallback(() => setActiveOpt2(!activeOpt2), [activeOpt2])}
        className="w-56"
      >
        <MenuItem.Title>Your value</MenuItem.Title>
        <MenuItem.Radio className="moon-checked:shadow-hit after:bg-hit" />
      </MenuItem>
    </>
  );
};

export default Radio;
