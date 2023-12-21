import { PropsTableProp } from "@/types";

export const bottomSheetProps: PropsTableProp[] = [
  {
    name: "onClose",
    type: ["() => void"],
    required: true,
    description:
      "Callback function triggered upon the closing of the BottomSheet",
  },
  {
    name: "open",
    type: ["boolean"],
    required: true,
    description: "Whether the BottomSheet is open or not",
  },
  {
    name: "rootId",
    type: ["string"],
    required: false,
    description: "Root element id with inert attribute",
  },
  {
    name: "className",
    type: ["string"],
    required: false,
    description: "Tailwind classes for customization",
  },
];
export const panelProps: PropsTableProp[] = [
  {
    name: "className",
    type: ["string"],
    required: false,
    description: "Tailwind classes for customization",
  },
  {
    name: "onClose",
    type: ["() => void"],
    required: false,
    description:
      "Callback function triggered upon the closing of the BottomSheet",
  },
];
export const titleProps: PropsTableProp[] = [
  {
    name: "className",
    type: ["string"],
    required: false,
    description: "Tailwind classes for customization",
  },
];
export const draghandleProps: PropsTableProp[] = [
  {
    name: "className",
    type: ["string"],
    required: false,
    description: "Tailwind classes for customization",
  },
];
export const backdropProps: PropsTableProp[] = [
  {
    name: "className",
    type: ["string"],
    required: false,
    description: "Tailwind classes for customization",
  },
];
