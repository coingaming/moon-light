"use client";

import { TextLeftAlign, TextRightAlign } from "@heathmont/moon-icons-tw";
import { IconButton } from "@heathmont/moon-core-tw";
import useRtl from "./utils/useRtl";

const RtlSwitcher = () => {
  const { isRtl, toggleRtl } = useRtl();
  return (
    <IconButton
      variant="outline"
      className="rounded-full h-8 w-8 p-1 lg:h-10 lg:w-10 lg:p-2 ring-beerus"
      icon={isRtl ? <TextRightAlign /> : <TextLeftAlign />}
      aria-label="RTL switcher"
      onClick={toggleRtl}
    />
  );
};

export default RtlSwitcher;
