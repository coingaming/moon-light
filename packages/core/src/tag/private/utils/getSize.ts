import type TagProps from "../types/TagProps";

const getSize = ({ size, iconRight, iconLeft }: TagProps) => {
  if (size === "2xs") {
    if (iconLeft && !iconRight) {
      return "py-space-0 ps-space-2 pe-space-8 h-space-16";
    }
    if (!iconLeft && iconRight) {
      return "py-space-0 ps-space-8 pe-space-2 h-space-16";
    }
    if (iconLeft && iconRight) {
      return "py-space-0 px-space-2 h-space-16";
    }
    return "py-space-0 px-space-8 h-space-16";
  }
  if (iconLeft && !iconRight) {
    return "py-space-4 ps-space-4 pe-space-8 h-space-24";
  }
  if (!iconLeft && iconRight) {
    return "py-space-4 ps-space-8 pe-space-4 h-space-24";
  }
  if (iconLeft && iconRight) {
    return "p-space-4 h-space-24";
  }
  return "py-space-4 px-space-8 h-space-24";
};

export default getSize;
