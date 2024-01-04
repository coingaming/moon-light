import type { PropsTableProp } from "@/types";

export const drawerProps: PropsTableProp[] = [
  {
    name: "className",
    type: ["string"],
    required: false,
    description: "Tailwind classes for custom styles",
  },
  {
    name: "open",
    type: ["boolean"],
    required: true,
    defaultState: "false",
    description: "Whether or not the Drawer is opened",
  },
  {
    name: "setOpen",
    type: ["(value: boolean) => void"],
    required: true,
    description: "Sets open state of the Drawer",
  },
];

export const panelProps: PropsTableProp[] = [
  {
    name: "className",
    type: ["string"],
    required: false,
    description: "Tailwind classes for custom styles",
  },
  {
    name: "position",
    type: ["top", "bottom", "start", "end"],
    required: false,
    defaultState: "end",
    description: "The Drawer positions on screen",
  },
];
