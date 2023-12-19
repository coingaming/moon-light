import { PropsTableProp } from "@/types";

const Props: PropsTableProp[] = [
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
    description: "Called when the BottomSheet is dismissed",
  },
];

export default Props;
