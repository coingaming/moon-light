"use client";

import { OtherMoon, OtherSun } from "@heathmont/moon-icons-tw";
import useTheme from "@/components/settings/utils/useThemes";
import { useLayoutEffect } from "react";
import { Chip } from "@heathmont/moon-core-tw";

const ThemeSwitcher = () => {
  const { apply, toggleDarkLightMode, isDarkThemeEnabled } = useTheme();

  // Apply the current theme from localStorage when loaded
  useLayoutEffect(() => {
    apply();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Chip
      className="rounded-full hover:bg-heles hover:text-bulma border border-beerus overflow-visible w-10"
      iconOnly={
        isDarkThemeEnabled ? (
          <OtherMoon className="text-moon-24" />
        ) : (
          <OtherSun className="text-moon-24" />
        )
      }
      aria-label="Theme switcher"
      onClick={toggleDarkLightMode}
    />
  );
};

export default ThemeSwitcher;
