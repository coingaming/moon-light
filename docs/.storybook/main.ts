import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  managerHead: (head) => `
    ${head}
    <style>.sidebar-header img {height: 40px;width: 40px;}</style>
    <link rel="shortcut icon" href="https://s3.us-east-1.amazonaws.com/cdn.coingaming.io/moon/products/moondesignsystem.png" 
    type="image/png">
  `,
};
export default config;
