type NavigationProps = {
  name: string;
  href: string;
  icon?: JSX.Element;
};

const navigation: NavigationProps[] = [
  {
    name: "Installation",
    href: "/installation",
  },
  {
    name: "Contribution",
    href: "/contribution",
  },
  {
    name: "Releases",
    href: "/releases",
  },
  {
    name: "Themes",
    href: "/themes",
  },
  {
    name: "Typography",
    href: "/typography",
  },
  {
    name: "Figma",
    href: "/figma",
  },
];

export default navigation;
