import { PropsTableProp } from "@/types";

export const avatarProps: PropsTableProp[] = [
  {
    name: "className",
    description: "Tailwind classes for customization",
    type: ["string"],
  },
  {
    name: "imageUrl",
    description: "Path to the image",
    type: ["string"],
  },
  {
    name: "size",
    description: "Size of avatar",
    type: ["xs", "sm", "md", "lg", "xl", "2xl"],
    defaultState: "md",
  },
];
export const avatarStatusProps: PropsTableProp[] = [
  {
    name: "className",
    description: "Tailwind classes for customization",
    type: ["string"],
  },
  {
    name: "position",
    description: "Position for status indicator",
    type: ["{ vertical: 'top' | 'bottom', horizontal: 'left' | 'right' }"],
  },
];
