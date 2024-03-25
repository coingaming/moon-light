"use client";

import { IconButton } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

const ButtonAsALinkHTML = () => (
  <IconButton as="a" href="#click" icon={<OtherFrame />} data-testid="button" />
);

export default ButtonAsALinkHTML;
