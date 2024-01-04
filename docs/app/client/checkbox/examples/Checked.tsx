"use client";

import React from "react";
import { Checkbox } from "@heathmont/moon-core-tw";
import { useState } from "react";

export const Checked = () => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <Checkbox
      checked={isChecked}
      onClick={() => setIsChecked(!isChecked)}
      onChange={() => {
        console.log("isChecked:", isChecked);
      }}
      label="Checked"
      id="checked"
    />
  );
};

export default Checked;
