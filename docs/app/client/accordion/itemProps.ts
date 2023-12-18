import { PropsTableProp } from "@/types";

const Props: PropsTableProp[] = [
  {
    name: "value",
    type: ["string"],
    required: true,
    description: "The accordeon item value",
  },
  {
    name: "disabled",
    type: ["boolean"],
    required: false,
    defaultState: "false",
    description: "Set disabled/non-disabled",
  },
];

export default Props;
