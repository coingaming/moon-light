import type ChipProps from "../types/ChipProps";

const getPadding = ({
  size,
  iconLeft,
  iconRight,
  iconOnly,
}: ChipProps): string => {
  if (size === "sm") {
    if (iconLeft && !iconRight) {
      return "py-space-4 ps-space-4 pe-space-8";
    }
    if (iconRight && !iconLeft) {
      return "py-space-4 ps-space-8 pe-space-4";
    }
    if (!iconRight && !iconLeft && !iconOnly) {
      return "py-space-4 px-space-8";
    }
    return "p-space-4";
  }
  if (iconLeft && !iconRight) {
    return "py-space-8 ps-space-8 pe-space-12";
  }
  if (iconRight && !iconLeft) {
    return "py-space-8 ps-space-12 pe-space-8";
  }
  if (!iconRight && !iconLeft && !iconOnly) {
    return "py-space-8 px-space-12";
  }
  return "p-space-8";
};

export default getPadding;
