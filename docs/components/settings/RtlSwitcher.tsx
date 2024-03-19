"use client";

import { TextLeftAlign, TextRightAlign } from "@heathmont/moon-icons-tw";
import { IconButton, mergeClassnames } from "@heathmont/moon-core-tw";
import useRtl from "./utils/useRtl";

const RtlSwitcher = ({ className }: { className?: string }) => {
  const { isRtl, toggleRtl } = useRtl();
  return (
    <IconButton
      variant="outline"
      className={mergeClassnames(
        "lg:block rounded-full h-8 w-8 p-1 lg:h-10 lg:w-10 lg:p-2 ring-beerus",
        className,
      )}
      icon={isRtl ? <TextRightAlign /> : <TextLeftAlign />}
      aria-label="RTL switcher"
      onClick={toggleRtl}
    />
  );
};

export default RtlSwitcher;
