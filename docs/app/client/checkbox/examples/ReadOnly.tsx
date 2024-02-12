"use client";

import { Checkbox } from "@heathmont/moon-core-tw";

export const ReadOnly = () => (
  <>
    <Checkbox readOnly label="ReadOnly" id="readOnly1" />
    <Checkbox readOnly checked label="ReadOnly Checked" id="readOnly2" />
  </>
);

export default ReadOnly;
