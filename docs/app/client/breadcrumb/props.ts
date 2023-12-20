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
  {
    name: "collapseAfter",
    type: ["number"],
    required: false,
    defaultState: 4,
    description:
      "Number of visible crumbs. Additional ones collapse for a streamlined view",
  },
];

export default Props;
