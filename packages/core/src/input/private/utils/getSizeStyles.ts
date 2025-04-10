import type InputProps from "../types/InputProps";

const getSizeStyles = (size?: InputProps["size"]): string => {
  switch (size) {
    case "lg":
      return "h-space-48 leading-space-48 rounded-8";
    case "sm":
      return "h-space-32 leading-space-32 rounded-4";
    default:
      return "h-space-40 leading-space-40 rounded-8";
  }
};

export default getSizeStyles;
