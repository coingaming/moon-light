export const MAIN_COLORS = [
  "piccolo",
  "hit",
  "beerus",
  "goku",
  "gohan",
  "bulma",
  "trunks",
  "goten",
  "popo",
  "jiren",
  "heles",
  "zeno",
];

export const SUPPORTIVE_COLORS = [
  "krillin",
  "krillin-60",
  "krillin-10",
  "chichi",
  "chichi-60",
  "chichi-10",
  "roshi",
  "roshi-60",
  "roshi-10",
  "dodoria",
  "dodoria-60",
  "dodoria-10",
  "cell",
  "cell-60",
  "cell-10",
  "raditz",
  "raditz-60",
  "raditz-10",
  "whis",
  "whis-60",
  "whis-10",
  "frieza",
  "frieza-60",
  "frieza-10",
  "nappa",
  "nappa-60",
  "nappa-10",
];

export const COLORS = [...MAIN_COLORS, ...SUPPORTIVE_COLORS];
export const FONT_WEIGHTS = ["font-normal", "font-medium", "font-semibold"];
export const TEXT_DECORATIONS = ["underline", "overline", "line-through"];
export const SEARCH_CDMK_ITEMS = [
  { label: "Aurum" },
  { label: "Argentum" },
  { label: "Zinc" },
  { label: "Plumbum" },
];

export const snackbarPositions = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
] as const;

export const positions = [
  "top-start",
  "top-end",
  "bottom-start",
  "bottom-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top",
  "bottom",
  "right",
  "left",
] as const;

export const SEARCH_ITEMS = [
  {
    heading: "Results",
    id: "results",
    items: [
      {
        id: "home",
        children: "Home",
        href: "#home",
      },
      {
        id: "settings",
        children: "Settings",
        href: "#settings",
      },
      {
        id: "projects",
        children: "Projects",
        closeOnSelect: false,
        onClick: () => {
          alert("projects");
        },
      },
    ],
  },
  {
    heading: "Other",
    id: "other",
    items: [
      {
        id: "developer-settings",
        children: "Developer settings",
        href: "#developer-settings",
      },
      {
        id: "privacy-policy",
        children: "Privacy policy",
        href: "#privacy-policy",
      },
      {
        id: "log-out",
        children: "Log out",
        onClick: () => {
          alert("Logging out...");
        },
      },
    ],
  },
];

export const inputTypes = [
  "date",
  "datetime-local",
  "email",
  "number",
  "password",
  "search",
  "tel",
  "text",
  "time",
  "url",
];
export type InputType = (typeof inputTypes)[number];

export const iconButtonSizes = ["xs", "sm", "md", "lg", "xl"] as const;
export const textSizes = [
  "text-moon-9",
  "text-moon-10",
  "text-moon-12",
  "text-moon-14",
  "text-moon-16",
  "text-moon-18",
  "text-moon-20",
  "text-moon-24",
  "text-moon-32",
  "text-moon-40",
  "text-moon-48",
  "text-moon-56",
  "text-moon-64",
  "text-moon-72",
] as const;

export const captionsSizes = [
  "text-moon-9-caption",
  "text-moon-10-caption",
] as const;

export type IconButtonSize = (typeof iconButtonSizes)[number] | undefined;

export const iconButtonAnimations = [
  "progress",
  "success",
  "error",
  "pulse",
] as const;
export type IconButtonAnimation = (typeof iconButtonAnimations)[number];

export const iconButtonAsOptions = ["a", "button"] as const;
export type IconButtonAsOption = (typeof iconButtonAsOptions)[number];

export const iconButtonVariants = ["fill", "outline", "ghost"] as const;
export type IconButtonVariant = (typeof iconButtonVariants)[number];

export const dir = ["ltr", "rtl", "auto"] as const;
export type DirType = (typeof dir)[number] | undefined;

export const inputSizes = ["sm", "md", "lg"] as const;
export type InputSize = (typeof inputSizes)[number];
