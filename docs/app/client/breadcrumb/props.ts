import { PropsTableProp } from "@/types";

const Props: PropsTableProp[] = [
  {
    name: "breadcrumbs",
    type: ["React.ReactNode[]"],
    required: true,
    description: "Contents of breadcrumb",
  },
  {
    name: "divider",
    type: ["React.ReactNode"],
    required: false,
    description: "Custom divider element",
  },
];

export default Props;
