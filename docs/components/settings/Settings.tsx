"use client";

import Switch from "@heathmont/moon-core-tw/lib/es/switch/Switch";
import IconButton from "@heathmont/moon-core-tw/lib/es/iconButton/IconButton";
import Popover from "@heathmont/moon-core-tw/lib/es/popover/Popover";
import MenuItem from "@heathmont/moon-core-tw/lib/es/menuItem/MenuItem";

import {
  MediaTuner,
  OtherMoon,
  OtherSun,
  TextLeftAlign,
  TextRightAlign,
} from "@heathmont/moon-icons-tw";
import BrandSwitcher from "./BrandSwitcher";
import { useRtl } from "@/components/settings/utils/RTLProvider";
import useTheme from "@/components/settings/utils/useThemes";
import { isLocalhost } from "./utils/isLocalhost";
import { useLayoutEffect } from "react";

const Settings = () => {
  const { apply, toggleDarkLightMode, isDarkThemeEnabled } = useTheme();
  const { isRTLEnabled, toggleRTL } = useRtl();

  // Apply the current theme from localStorage when loaded
  useLayoutEffect(() => {
    apply();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Popover
      className="fixed z-50 bottom-4 lg:bottom-20 end-4"
      position={isRTLEnabled ? "top-end" : "top-start"}
    >
      <Popover.Trigger>
        <IconButton
          icon={<MediaTuner />}
          className="shadow-moon-md rounded-full"
          aria-label="Toggle site settings"
        />
      </Popover.Trigger>
      <Popover.Panel className="flex flex-col gap-1 p-3">
        {isLocalhost() && <BrandSwitcher />}
        <MenuItem as="div" className="cursor-default">
          {isDarkThemeEnabled ? "Dark mode" : "Light mode"}
          <Switch
            checked={isDarkThemeEnabled}
            onChange={toggleDarkLightMode}
            size="xs"
            onIcon={<OtherMoon />}
            offIcon={<OtherSun />}
            aria-label="Toggle light/dark themes"
          />
        </MenuItem>
        <MenuItem as="div" className="cursor-default">
          {isRTLEnabled ? "RTL mode" : "LTR mode"}
          <Switch
            checked={isRTLEnabled}
            onChange={toggleRTL}
            size="xs"
            onIcon={<TextRightAlign />}
            offIcon={<TextLeftAlign />}
            aria-label="Toggle LTR/RTL"
          />
        </MenuItem>
      </Popover.Panel>
    </Popover>
  );
};

export default Settings;
