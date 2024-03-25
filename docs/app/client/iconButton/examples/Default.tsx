"use client";

import { IconButton } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

const Default = () => (
  <IconButton
    onClick={() => alert("click")}
    icon={<OtherFrame />}
    data-testid="button"
  />
);

export default Default;
