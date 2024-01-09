import { PropsTableProp } from "@/types";

export const TabsProps: PropsTableProp[] = [
  {
    name: "onChange",
    type: ["(index: number) => void"],
    description: "A function called whenever the active tab changes.",
  },
  {
    name: "selectedIndex",
    type: ["number"],
    description:
      "The selected index if you want to use the Tabs component as a controlled component.",
  },
];

export const TabsListProps: PropsTableProp[] = [
  {
    name: "className",
    type: ["string"],
    description: "Tailwind classes for styling",
  },
  {
    name: "size",
    type: ["sm", "md"],
    defaultState: "md",
    description: "Size of tabs",
  },
];

export const TabsSegmentProps: PropsTableProp[] = [
  {
    name: "className",
    type: ["string"],
    description: "Tailwind classes for styling",
  },
  {
    name: "size",
    type: ["sm", "md"],
    defaultState: "md",
    description: "Size of tabs",
  },
];

export const TabsTabProps: PropsTableProp[] = [
  {
    name: "className",
    type: ["string"],
    description: "Tailwind classes for styling",
  },
  {
    name: "disabled",
    type: ["boolean"],
    defaultState: "false",
    description: "Whether or not the Tab is currently disabled",
  },
];

export const TabsPillProps: PropsTableProp[] = [
  {
    name: "className",
    type: ["string"],
    description: "Tailwind classes for styling",
  },
  {
    name: "disabled",
    type: ["boolean"],
    defaultState: "false",
    description: "Whether or not the Tab is currently disabled",
  },
];

export const TabsPanelsProps: PropsTableProp[] = [
  {
    name: "className",
    type: ["string"],
    description: "Tailwind classes for styling",
  },
];

export const TabsPanelProps: PropsTableProp[] = [
  {
    name: "className",
    type: ["string"],
    description: "Tailwind classes for styling",
  },
];

export default TabsProps;
