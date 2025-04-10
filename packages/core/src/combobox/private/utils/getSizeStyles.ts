import mergeClassnames from "../../../mergeClassnames/mergeClassnames";
import type Size from "../types/Size";

const getSizeStyles = (size?: string, innerLabel?: boolean) => {
  const isLabel = innerLabel !== undefined && innerLabel;

  return mergeClassnames(
    size === "sm" && "py-space-6 px-space-8 rounded-4",
    (size === "sm" || isLabel) &&
      "py-space-8 px-space-12 rounded-4 gap-x-space-12",
    size === "lg" && "py-space-12 px-space-12 rounded-8",
    (size === "xl" || isLabel) &&
      "py-space-12 px-space-16 rounded-8 gap-x-space-16",
  );
};

const getTextSizes = (size: Size = "md") => {
  return (
    {
      sm: "text-body-300",
      md: "text-body-400",
      lg: "text-body-400",
      xl: "text-body-400",
    }[size] || "text-body-400"
  );
};

export { getSizeStyles, getTextSizes };
