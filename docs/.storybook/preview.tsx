import React from "react";
import type { Decorator, Preview } from "@storybook/react";
import "../app/globals.css";
import { useEffect } from "react";
import { useState } from "react";
import {
  DARK_THEME,
  LIGHT_THEME,
  LTR,
  RTL,
  TextDirectionType,
  ThemeType,
} from "../stories/constants";
import { Switch } from "../../packages/core/src";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Choose between Light and Dark themes",
    defaultValue: "light",
  },
};

const SwitchWrapper = ({
  isDarkTheme,
  onChange,
  labelLeft,
  labelRight,
  className = "",
}) => {
  const textClass = `${isDarkTheme ? "text-goten" : ""}`;

  return (
    <p className={`flex ${className} gap-1`}>
      <p className={`${isDarkTheme ? "text-goten" : ""}`}>{labelLeft}</p>
      <Switch size="xs" onChange={onChange} />
      <p className={textClass}>{labelRight}</p>
    </p>
  );
};

const ThemeWrapper = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(LIGHT_THEME);
  const [textDirection, setTextDirection] = useState<TextDirectionType>(LTR);
  const isDarkTheme = theme === DARK_THEME;
  const isLTR = textDirection === LTR;
  const themeClass = isDarkTheme ? "theme-moon-dark" : "theme-moon-light";
  const backgroundColor = isDarkTheme ? "#0b0b0b" : "#e5e7eb";

  useEffect(() => {
    const docsStory = document.querySelector(".docs-story") as HTMLElement;
    if (docsStory) {
      docsStory.style.backgroundColor = backgroundColor;
    }
  }, [theme]);

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("dir", textDirection);
    }
  }, [textDirection]);

  return (
    <div className={themeClass} style={{ minHeight: "100vh", padding: "1rem" }}>
      <div>
        <SwitchWrapper
          className="mb-4"
          labelLeft="LIGHT"
          isDarkTheme={isDarkTheme}
          onChange={() => setTheme(isDarkTheme ? LIGHT_THEME : DARK_THEME)}
          labelRight="DARK"
        />
        <SwitchWrapper
          className="mb-6"
          labelLeft="LTR"
          isDarkTheme={isDarkTheme}
          onChange={() => setTextDirection(isLTR ? RTL : LTR)}
          labelRight="RTL"
        />
      </div>
      {children}
    </div>
  );
};

const withThemeWrapper: Decorator = (Story, context) => {
  return (
    <ThemeWrapper>
      <Story />
    </ThemeWrapper>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
    viewport: { disable: true },
    measure: { disable: true },
    outline: { disable: true },
  },
  decorators: [withThemeWrapper],
};
export default preview;
