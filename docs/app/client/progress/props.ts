import type { PropsTableProp } from "@/types";

export const props: PropsTableProp[] = [
  {
    name: "className",
    type: ["string"],
    description: "Tailwind classes for customization",
  },
  {
    name: "size",
    type: ["6xs | 5xs | 4xs | 3xs | 2xs"],
    defaultState: "2xs",
    description: "Size of Progress",
  },
  {
    name: "value",
    type: ["number"],
    defaultState: "0",
    description: "Value of Progress in percent",
  },
];

export const pinProps: PropsTableProp[] = [
  {
    name: "className",
    type: ["string"],
    description: "Tailwind classes for customization",
  },
];