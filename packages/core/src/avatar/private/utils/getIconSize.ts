import type SizeProps from "../types/SizeProps";

const getIconSize = (size?: SizeProps) => {
  if (size === "xs") {
    return "text-body-400";
  }
  if (size === "2xl") {
    return "text-heading-300";
  }
  return "text-heading-200";
};

export default getIconSize;
