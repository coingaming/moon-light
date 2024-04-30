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
    name: "Releases",
    href: "/releases",
  },
  {
    name: "Figma",
    href: "/figma",
  },
];

export default navigation;
