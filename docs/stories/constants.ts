export const COLORS = [
  "piccolo",
  "goten",
  "bulma",
  "hit",
  "beerus",
  "gohan",
  "goku",
  "trunks",
  "popo",
  "jiren",
  "heles",
  "zeno",
  "krillin",
  "chichi",
  "roshi",
  "dodoria",
  "cell",
  "raditz",
  "whis",
  "frieza",
  "nappa",
  "nappa",
];
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
