"use client";

import React from "react";
import { Checkbox } from "@heathmont/moon-core-tw";

export const ReadOnly = () => {
  return (
    <>
      <Checkbox readOnly label="ReadOnly" id="readOnly1" />
      <Checkbox readOnly checked label="ReadOnly Checked" id="readOnly2" />
    </>
  );
};

export default ReadOnly;
