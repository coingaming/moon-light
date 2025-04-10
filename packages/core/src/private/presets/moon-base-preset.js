const plugin = require("tailwindcss/plugin");
const components = require("./moon-components.js");

const commonBorderWidths = {
  0: "var(--dimension-border-0)",
  1: "var(--dimension-border-1)",
  2: "var(--dimension-border-2)",
  4: "var(--dimension-border-4)",
  default: "var(--dimension-border-default)",
  interactive: "var(--dimension-border-interactive)",
  none: "var(--dimension-border-none)",
};

const commonBorderColors = {
  active: "var(--semantic-border-active)",
  brand: "var(--semantic-border-brand)",
  caution: "var(--semantic-border-caution)",
  discovery: "var(--semantic-border-discovery)",
  "force-dark": "var(--semantic-border-force-dark)",
  "force-light": "var(--semantic-border-force-light)",
  info: "var(--semantic-border-info)",
  inverse: "var(--semantic-border-inverse)",
  negative: "var(--semantic-border-negative)",
  neutral: "var(--semantic-border-neutral)",
  positive: "var(--semantic-border-positive)",
  primary: "var(--semantic-border-primary)",
  secondary: "var(--semantic-border-secondary)",
};

const iconClasses = [
  "active",
  "active-subtle",
  "brand",
  "brand-subtle",
  "caution",
  "caution-subtle",
  "discovery",
  "discovery-subtle",
  "force-dark",
  "force-light",
  "info",
  "info-subtle",
  "inverse",
  "negative",
  "negative-subtle",
  "neutral",
  "neutral-subtle",
  "positive",
  "positive-subtle",
  "primary",
  "secondary",
];

const textBodyPrefixes = ["100", "200", "300", "400", "500"];

const textHeadingPrefixes = ["100", "200", "300", "400", "500"];

const spacing = {
  "space-0": "var(--dimension-space-0)",
  "space-1": "var(--dimension-space-1)",
  "space-10": "var(--dimension-space-10)",
  "space-104": "var(--dimension-space-104)",
  "space-112": "var(--dimension-space-112)",
  "space-12": "var(--dimension-space-12)",
  "space-120": "var(--dimension-space-120)",
  "space-128": "var(--dimension-space-128)",
  "space-136": "var(--dimension-space-136)",
  "space-14": "var(--dimension-space-14)",
  "space-144": "var(--dimension-space-144)",
  "space-152": "var(--dimension-space-152)",
  "space-16": "var(--dimension-space-16)",
  "space-160": "var(--dimension-space-160)",
  "space-18": "var(--dimension-space-18)",
  "space-2": "var(--dimension-space-2)",
  "space-20": "var(--dimension-space-20)",
  "space-24": "var(--dimension-space-24)",
  "space-28": "var(--dimension-space-28)",
  "space-32": "var(--dimension-space-32)",
  "space-36": "var(--dimension-space-36)",
  "space-4": "var(--dimension-space-4)",
  "space-40": "var(--dimension-space-40)",
  "space-48": "var(--dimension-space-48)",
  "space-56": "var(--dimension-space-56)",
  "space-6": "var(--dimension-space-6)",
  "space-64": "var(--dimension-space-64)",
  "space-72": "var(--dimension-space-72)",
  "space-8": "var(--dimension-space-8)",
  "space-80": "var(--dimension-space-80)",
  "space-88": "var(--dimension-space-88)",
  "space-96": "var(--dimension-space-96)",
  "space-neg12": "var(--dimension-space-neg12)",
  "space-neg2": "var(--dimension-space-neg2)",
  "space-neg4": "var(--dimension-space-neg4)",
};

const borderRadius = {
  0: "var(--dimension-rounded-0)",
  2: "var(--dimension-rounded-2)",
  4: "var(--dimension-rounded-4)",
  6: "var(--dimension-rounded-6)",
  8: "var(--dimension-rounded-8)",
  12: "var(--dimension-rounded-12)",
  16: "var(--dimension-rounded-16)",
  20: "var(--dimension-rounded-20)",
  24: "var(--dimension-rounded-24)",
  32: "var(--dimension-rounded-32)",
  full: "var(--dimension-rounded-full)",
};

const boxShadow = {
  100: "var(--effect-shadow-100-layer-1-x) var(--effect-shadow-100-layer-1-y) var(--effect-shadow-100-layer-1-blur) var(--effect-shadow-100-layer-1-spread) var(--effect-shadow-100-layer-1-color), var(--effect-shadow-100-layer-2-x) var(--effect-shadow-100-layer-2-y) var(--effect-shadow-100-layer-2-blur) var(--effect-shadow-100-layer-2-spread) var(--effect-shadow-100-layer-2-color)",
  200: "var(--effect-shadow-200-layer-1-x) var(--effect-shadow-200-layer-1-y) var(--effect-shadow-200-layer-1-blur) var(--effect-shadow-200-layer-1-spread) var(--effect-shadow-200-layer-1-color), var(--effect-shadow-200-layer-2-x) var(--effect-shadow-200-layer-2-y) var(--effect-shadow-200-layer-2-blur) var(--effect-shadow-200-layer-2-spread) var(--effect-shadow-200-layer-2-color)",
  300: "var(--effect-shadow-300-layer-1-x) var(--effect-shadow-300-layer-1-y) var(--effect-shadow-300-layer-1-blur) var(--effect-shadow-300-layer-1-spread) var(--effect-shadow-300-layer-1-color), var(--effect-shadow-300-layer-2-x) var(--effect-shadow-300-layer-2-y) var(--effect-shadow-300-layer-2-blur) var(--effect-shadow-300-layer-2-spread) var(--effect-shadow-300-layer-2-color)",
  400: "var(--effect-shadow-400-layer-1-x) var(--effect-shadow-400-layer-1-y) var(--effect-shadow-400-layer-1-blur) var(--effect-shadow-400-layer-1-spread) var(--effect-shadow-400-layer-1-color), var(--effect-shadow-400-layer-2-x) var(--effect-shadow-400-layer-2-y) var(--effect-shadow-400-layer-2-blur) var(--effect-shadow-400-layer-2-spread) var(--effect-shadow-400-layer-2-color)",
  500: "var(--effect-shadow-500-layer-1-x) var(--effect-shadow-500-layer-1-y) var(--effect-shadow-500-layer-1-blur) var(--effect-shadow-500-layer-1-spread) var(--effect-shadow-500-layer-1-color), var(--effect-shadow-500-layer-2-x) var(--effect-shadow-500-layer-2-y) var(--effect-shadow-500-layer-2-blur) var(--effect-shadow-500-layer-2-spread) var(--effect-shadow-500-layer-2-color)",
  600: "var(--effect-shadow-600-layer-1-x) var(--effect-shadow-600-layer-1-y) var(--effect-shadow-600-layer-1-blur) var(--effect-shadow-600-layer-1-spread) var(--effect-shadow-600-layer-1-color), var(--effect-shadow-600-layer-2-x) var(--effect-shadow-600-layer-2-y) var(--effect-shadow-600-layer-2-blur) var(--effect-shadow-600-layer-2-spread) var(--effect-shadow-600-layer-2-color)",
};

const backgroundColor = {
  active: "var(--semantic-background-active)",
  "active-subtle": "var(--semantic-background-active-subtle)",
  backdrop: "var(--semantic-background-backdrop)",
  brand: "var(--semantic-background-brand)",
  "brand-subtle": "var(--semantic-background-brand-subtle)",
  caution: "var(--semantic-background-caution)",
  "caution-subtle": "var(--semantic-background-caution-subtle)",
  discovery: "var(--semantic-background-discovery)",
  "discovery-subtle": "var(--semantic-background-discovery-subtle)",
  "force-dark": "var(--semantic-background-force-dark)",
  "force-light": "var(--semantic-background-force-light)",
  hover: "var(--semantic-background-hover)",
  info: "var(--semantic-background-info)",
  "info-subtle": "var(--semantic-background-info-subtle)",
  inverse: "var(--semantic-background-inverse)",
  negative: "var(--semantic-background-negative)",
  "negative-subtle": "var(--semantic-background-negative-subtle)",
  neutral: "var(--semantic-background-neutral)",
  "neutral-subtle": "var(--semantic-background-neutral-subtle)",
  positive: "var(--semantic-background-positive)",
  "positive-subtle": "var(--semantic-background-positive-subtle)",
  primary: "var(--semantic-background-primary)",
  secondary: "var(--semantic-background-secondary)",
  tertiary: "var(--semantic-background-tertiary)",
  transparent: "var(--semantic-background-transparent)",
};

const textColor = {
  active: "var(--semantic-text-active)",
  "active-subtle": "var(--semantic-text-active-subtle)",
  brand: "var(--semantic-text-brand)",
  "brand-subtle": "var(--semantic-text-brand-subtle)",
  caution: "var(--semantic-text-caution)",
  "caution-subtle": "var(--semantic-text-caution-subtle)",
  discovery: "var(--semantic-text-discovery)",
  "discovery-subtle": "var(--semantic-text-discovery-subtle)",
  "force-dark": "var(--semantic-text-force-dark)",
  "force-light": "var(--semantic-text-force-light)",
  info: "var(--semantic-text-info)",
  "info-subtle": "var(--semantic-text-info-subtle)",
  inverse: "var(--semantic-text-inverse)",
  link: "var(--semantic-text-link)",
  negative: "var(--semantic-text-negative)",
  "negative-subtle": "var(--semantic-text-negative-subtle)",
  neutral: "var(--semantic-text-neutral)",
  "neutral-subtle": "var(--semantic-text-neutral-subtle)",
  positive: "var(--semantic-text-positive)",
  "positive-subtle": "var(--semantic-text-positive-subtle)",
  primary: "var(--semantic-text-primary)",
  secondary: "var(--semantic-text-secondary)",
};

const fontFamily = {
  primary: "var(--text-font-family-primary)",
  secondary: "var(--text-font-family-secondary)",
  tertiary: "var(--text-font-family-tertiary)",
};

const opacity = {
  0: "var(--effect-opacity-0)",
  20: "var(--effect-opacity-20)",
  40: "var(--effect-opacity-40)",
  60: "var(--effect-opacity-60)",
  80: "var(--effect-opacity-80)",
  100: "var(--effect-opacity-100)",
  disabled: "var(--effect-opacity-disabled)",
  transparent: "var(--effect-opacity-transparent)",
};

const generateTextUtilities = (prefix, levels) => {
  return levels.reduce((acc, level) => {
    acc[`.${prefix}-${level}`] = {
      fontWeight: `var(--${prefix}-${level}-font-weight)`,
      fontSize: `var(--${prefix}-${level}-font-size)`,
      lineHeight: `var(--${prefix}-${level}-line-height)`,
      fontFamily: `var(--${prefix}-${level}-font-family)`,
    };
    return acc;
  }, {});
};

const generateIconUtilities = (iconClasses) => {
  return iconClasses.reduce((acc, iconClass) => {
    acc[`.icon-${iconClass}`] = {
      color: `var(--semantic-icon-${iconClass})`,
    };
    return acc;
  }, {});
};

module.exports = {
  plugins: [
    plugin(function ({ addComponents }) {
      const textBodyUtilities = generateTextUtilities(
        "text-body",
        textBodyPrefixes,
      );
      const textHeadingUtilities = generateTextUtilities(
        "text-heading",
        textHeadingPrefixes,
      );
      addComponents(components);
      addComponents({ ...textBodyUtilities, ...textHeadingUtilities });
    }),
    plugin(function ({ addUtilities }) {
      const iconUtilities = generateIconUtilities(iconClasses);
      const strokeUtilities = Object.entries(commonBorderColors).reduce(
        (acc, [key, value]) => {
          acc[`.stroke-${key}`] = { stroke: value };
          return acc;
        },
        {},
      );
      addUtilities({ ...iconUtilities, ...strokeUtilities });
    }),
  ],
  theme: {
    extend: {
      spacing: spacing,
      borderRadius: borderRadius,
      borderWidth: commonBorderWidths,
      divideWidth: commonBorderWidths,
      ringWidth: commonBorderWidths,
      outlineWidth: commonBorderWidths,
      boxShadow: boxShadow,
      backgroundColor: backgroundColor,
      textColor: textColor,
      borderColor: commonBorderColors,
      divideColor: commonBorderColors,
      ringColor: commonBorderColors,
      outlineColor: commonBorderColors,
      stroke: commonBorderColors,
      fontFamily: fontFamily,
      opacity: opacity,
    },
  },
};
