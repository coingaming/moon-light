import type SizeProps from "../types/SizeProps";

const getStatusSize = (size?: SizeProps) => {
  if (size === "xs") {
    return "[&_.status]:size-space-8 [&_.status]:border";
  }
  if (size === "sm" || size === "md") {
    return "[&_.status]:size-space-12 [&_.status]:border-2";
  }
  return "[&_.status]:size-space-16 [&_.status]:border-2";
};

export default getStatusSize;
