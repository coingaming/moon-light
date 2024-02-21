"use client";

import { OtherMoon, OtherSun } from "@heathmont/moon-icons-tw";
import useTheme from "@/components/settings/utils/useThemes";
import { useLayoutEffect } from "react";
import { IconButton } from "@heathmont/moon-core-tw";

const ThemeSwitcher = () => {
  const { apply, toggleDarkLightMode, isDarkThemeEnabled } = useTheme();

  // Apply the current theme from localStorage when loaded
  useLayoutEffect(() => {
    apply();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IconButton
      variant="outline"
      className="rounded-full text-moon-24"
      icon={isDarkThemeEnabled ? <OtherMoon /> : <OtherSun />}
      aria-label="Theme switcher"
      onClick={toggleDarkLightMode}
    />
  );
};

export default ThemeSwitcher;
