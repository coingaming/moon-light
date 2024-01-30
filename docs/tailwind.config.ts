import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heathmont/moon-base-tw/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heathmont/moon-cmdk-tw/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heathmont/moon-table-tw/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  presets: [
    require("@heathmont/moon-core-tw/lib/es/private/presets/ds-moon-preset"),
  ],
};
export default config;
