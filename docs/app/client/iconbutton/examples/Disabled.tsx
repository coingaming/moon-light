"use client";

import { IconButton } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

const Disabled = () => (
  <IconButton
    disabled
    icon={<OtherFrame />}
    data-testid="button"
    onClick={() => {
      alert("No one will see me");
    }}
  />
);

export default Disabled;
