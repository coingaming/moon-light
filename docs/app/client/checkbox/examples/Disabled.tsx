"use client";

import { Checkbox } from "@heathmont/moon-core-tw";

export const Disabled = () => (
  <>
    <Checkbox disabled label="Disabled" id="disabled1" />
    <Checkbox disabled checked label="Disabled Checked" id="disabled2" />
  </>
);

export default Disabled;
