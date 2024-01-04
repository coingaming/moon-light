import type { PropsTableProp } from "@/types";

export const props: PropsTableProp[] = [
  {
    name: "className",
    type: ["string"],
    description: "Tailwind classes for customization",
  },
];

export const titleProps: PropsTableProp[] = [
  {
    name: "children",
    description: "Children content",
    type: ["React.ReactNode"],
  },
  {
    name: "className",
    type: ["string"],
    description: "Tailwind classes for customization",
  },
];

export const messageProps: PropsTableProp[] = [
  {
    name: "children",
    description: "Children content",
    type: ["React.ReactNode"],
  },
  {
    name: "className",
    type: ["string"],
    description: "Tailwind classes for customization",
  },
];
