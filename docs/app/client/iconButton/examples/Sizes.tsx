"use client";

import { IconButton } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

const Sizes = () => (
  <>
    <IconButton
      data-testid="button-xs"
      size="xs"
      icon={<OtherFrame />}
      onClick={() => alert("click")}
    />
    <IconButton
      data-testid="button-sm"
      size="sm"
      icon={<OtherFrame />}
      onClick={() => alert("click")}
    />
    <IconButton
      data-testid="button-md"
      icon={<OtherFrame />}
      onClick={() => alert("click")}
    />
    <IconButton
      data-testid="button-lg"
      size="lg"
      icon={<OtherFrame />}
      onClick={() => alert("click")}
    />
    <IconButton
      data-testid="button-xl"
      size="xl"
      icon={<OtherFrame />}
      onClick={() => alert("click")}
    />
  </>
);

export default Sizes;
