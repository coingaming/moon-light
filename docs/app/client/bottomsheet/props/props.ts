import { PropsTableProp } from "@/types";

const Props: PropsTableProp[] = [
  {
    name: "onClose",
    type: ["() => void"],
    required: true,
    description: "Called when the BottomSheet is dismissed",
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

export default Props;
