import React from "react";
import type { Decorator, Preview } from "@storybook/react";
import "../app/globals.css";
import { useEffect } from "react";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Choose between Light and Dark themes",
    defaultValue: "light",
    toolbar: {
      icon: "contrast",
      items: [
        { value: "light", title: "🌞 Light Theme" },
        { value: "dark", title: "🌙 Dark Theme" },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

const withThemeWrapper: Decorator = (Story, context) => {
  const isDarkTheme = context.globals.theme === "dark";
  const themeClass = isDarkTheme ? "theme-moon-dark" : "theme-moon-light";
  const backgroundColor = isDarkTheme ? "#0b0b0b" : "#e5e7eb";

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    const docsStory = document.querySelector(".docs-story") as HTMLElement;

    if (docsStory) {
      docsStory.style.backgroundColor = backgroundColor;
    }
  }, [isDarkTheme]);

  return (
    <div className={themeClass} style={{ minHeight: "100vh", padding: "1rem" }}>
      <Story />
    </div>
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
