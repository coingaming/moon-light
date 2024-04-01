"use client";

import { OtherMoon, OtherSun } from "@heathmont/moon-icons-tw";
import useTheme from "@/components/settings/utils/useTheme";
import { useLayoutEffect } from "react";
import { IconButton, mergeClassnames } from "@heathmont/moon-core-tw";

const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { apply, toggleDarkLightMode, isDarkThemeEnabled } = useTheme();

  // Apply the current theme from localStorage when loaded
  useLayoutEffect(() => {
    apply();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IconButton
      variant="outline"
      className={mergeClassnames(
        "rounded-full h-8 w-8 p-1 lg:h-10 lg:w-10 lg:p-2 ring-beerus",
        className,
      )}
      icon={isDarkThemeEnabled ? <OtherMoon /> : <OtherSun />}
      aria-label="Theme switcher"
      onClick={toggleDarkLightMode}
    />
  );
};

export default ThemeSwitcher;
