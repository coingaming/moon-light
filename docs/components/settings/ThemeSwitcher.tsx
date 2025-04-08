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
        "rounded-full h-space-32 w-space-32 p-space-4 lg:h-space-40 lg:w-space-40 lg:p-space-8 ring-primary",
        className,
      )}
      icon={isDarkThemeEnabled ? <OtherMoon /> : <OtherSun />}
      aria-label="Theme switcher"
      onClick={toggleDarkLightMode}
    />
  );
};

export default ThemeSwitcher;
