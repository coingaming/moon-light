import { extendTailwindMerge } from "tailwind-merge";

const mergeClassnames = extendTailwindMerge({
  cacheSize: 0,
  classGroups: {
    borderRadius: [
      {
        rounded: [
          "none",
          "full",
          {
            moon: ["i-xs", "i-sm", "i-md", "s-xs", "s-sm", "s-md", "s-lg"],
          },
        ],
      },
    ],
    fontSize: [
      {
        text: [
          {
            moon: [
              "9",
              "9-caption",
              "10",
              "10-caption",
              "12",
              "14",
              "16",
              "18",
              "20",
              "24",
              "32",
              "40",
              "48",
              "56",
              "64",
              "72",
            ],
          },
          {
            body: ["100", "200", "300", "400", "500"],
          },
          {
            heading: ["100", "200", "300", "400", "500"],
          },
        ],
      },
    ],
    color: [
      {
        text: [
          {
            moon: [
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
              { krillin: ["100", "60", "10"] },
              { chichi: ["100", "60", "10"] },
              { roshi: ["100", "60", "10"] },
              { dodoria: ["100", "60", "10"] },
              { cell: ["100", "60", "10"] },
              { raditz: ["100", "60", "10"] },
              { whis: ["100", "60", "10"] },
              { frieza: ["100", "60", "10"] },
              { nappa: ["100", "60", "10"] },
            ],
          },
          "primary",
          "secondary",
          "brand",
          "inverse",
          "positive",
          "caution",
          "negative",
          "info",
          "discovery",
          "active",
          "link",
          "force-light",
          "force-dark",
        ],
      },
    ],
    boxShadow: [
      {
        shadow: [
          {
            moon: ["xs", "sm", "md", "lg", "xl"],
          },
        ],
      },
    ],
  },
});

export default mergeClassnames;
