import type Sizes from "../types/Sizes";

const getSize = (size?: Sizes) => {
  switch (size) {
    case "6xs":
      return "h-space-2";
    case "5xs":
      return "h-space-4";
    case "4xs":
      return "h-space-8";
    case "3xs":
      return "h-space-12";
    case "2xs":
    default:
      return "h-space-16";
  }
};

export default getSize;
