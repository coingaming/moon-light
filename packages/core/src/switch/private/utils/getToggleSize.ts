import type Size from "../types/Size";

const getToggleSize = (size?: Size) => {
  switch (size) {
    case "2xs":
      return "size-space-12";
    case "xs":
      return "size-space-16";
    case "sm":
    default:
      return "size-space-24";
  }
};

export default getToggleSize;
