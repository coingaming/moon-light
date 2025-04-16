import type Sizes from "../types/Sizes";

const getSize = (size?: Sizes) => {
  switch (size) {
    case "2xs":
      return "size-space-16";
    case "xs":
      return "size-space-24";
    case "sm":
      return "size-space-32";
    case "lg":
      return "size-space-48";
    case "md":
    default:
      return "size-space-40";
  }
};

export default getSize;
