import { PropsTableProp } from "@/types";

export const LoaderProps: PropsTableProp[] = [
  {
    name: "color",
    defaultState: "	border-hit",
    description: "Color of the loader",
    type: ["string"],
  },
  {
    name: "size",
    defaultState: "	md",
    description: "Size of the loader",
    type: ["2xl", "xs", "sm", "md", "lg"],
  },
];
