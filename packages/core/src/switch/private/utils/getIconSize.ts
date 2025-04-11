import type Size from "../types/Size";

const getIconSize = (size?: Size) => {
  switch (size) {
    case "2xs":
      return "text-body-200";
    case "xs":
      return "text-body-400";
    case "sm":
    default:
      return "text-heading-200";
  }
};

export default getIconSize;
