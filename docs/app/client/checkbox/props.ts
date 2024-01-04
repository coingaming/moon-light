import { PropsTableProp } from "@/types";

const Props: PropsTableProp[] = [
  {
    name: "bgColor",
    type: ["string"],
    required: false,
    defaultState: "bg-piccolo",
    description: "Checked state of checkbox",
  },
  {
    name: "label",
    type: ["JSX.Element | string"],
    required: false,
    description: "Describes checkbox's purpose",
  },
  {
    name: "indeterminate",
    type: ["boolean"],
    required: false,
    description: `Set checkbox as indeterminate and does not modify the checked state`,
  },
];

export default Props;
