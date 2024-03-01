"use client";

import { TextLeftAlign, TextRightAlign } from "@heathmont/moon-icons-tw";
import { useRtl } from "@/components/settings/utils/RTLProvider";
import { IconButton } from "@heathmont/moon-core-tw";

const RTLSwitcher = () => {
  const { isRTLEnabled, toggleRTL } = useRtl();
  console.log({ isRTLEnabled });
  return (
    <IconButton
      variant="outline"
      className="rounded-full h-8 w-8 p-1 lg:h-10 lg:w-10 lg:p-2"
      icon={isRTLEnabled ? <TextRightAlign /> : <TextLeftAlign />}
      aria-label="RTL switcher"
      onClick={toggleRTL}
    />
  );
};

export default RTLSwitcher;
