import React from "react";
import type { Decorator, Preview } from "@storybook/react";
import "../app/globals.css";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Choose between light and dark theme",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
      showName: true,
    },
  },
};

const withThemeWrapper: Decorator = (Story, context) => {
  const themeClass =
    context.globals.theme === "dark" ? "theme-moon-dark" : "theme-moon-light";

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
  },
  decorators: [withThemeWrapper],
};
export default preview;
