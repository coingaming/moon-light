import type { Preview } from "@storybook/react";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Typography", "Components"],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
