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
        "lg:block rounded-full h-space-32 w-space-32 p-space-4 lg:h-space-40 lg:w-space-40 lg:p-space-8 ring-primary",
        className,
      )}
      icon={isRtl ? <TextRightAlign /> : <TextLeftAlign />}
      aria-label="RTL switcher"
      onClick={toggleRtl}
    />
  );
};

export default RtlSwitcher;
