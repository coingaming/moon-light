import type { PropsTableProp } from "@/types";

export const props: PropsTableProp[] = [
  {
    name: "orientation",
    description: "Two ways you can stack your input groups",
    type: ["vertical | horizontal"],
    defaultState: "vertical",
  },
  {
    name: "size",
    type: ["sm | md | lg"],
    defaultState: "md",
    description: "Group size",
  },
  {
    name: "error",
    description: "Sets error state for both input/select",
    type: ["boolean"],
    defaultState: "false",
  },
  {
    name: "className",
    description: "Tailwind classes for customization",
    type: ["string"],
  },
];

export default props;
