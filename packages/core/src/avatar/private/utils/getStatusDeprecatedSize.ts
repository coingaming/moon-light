import type SizeProps from "../types/SizeProps";

const getStatusDeprecatedSize = (size?: SizeProps) => {
  if (size === "xs") {
    return "size-space-8 border";
  }
  if (size === "sm" || size === "md") {
    return "size-space-12 border-2";
  }
  return "size-space-16 border-2";
};

export default getStatusDeprecatedSize;
