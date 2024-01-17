"use client";

import { IconButton } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

const Example = () => (
  <>
    <IconButton
      icon={<OtherFrame />}
      data-testid="button"
      onClick={() => alert("click")}
    />
    <IconButton
      variant="outline"
      icon={<OtherFrame />}
      data-testid="button-outline"
      onClick={() => alert("click")}
    />
    <IconButton
      variant="ghost"
      icon={<OtherFrame />}
      data-testid="button-ghost"
      onClick={() => alert("click")}
    />
  </>
);

export default Example;
