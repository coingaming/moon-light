import type SizeProps from "../types/SizeProps";

const getWrapperSize = (size?: SizeProps) => {
  if (size === "xs") {
    return "size-space-24 text-body-100";
  }
  if (size === "sm") {
    return "size-space-32 text-body-200";
  }
  if (size === "md") {
    return "size-space-40 text-body-300";
  }
  if (size === "lg") {
    return "size-space-48 text-body-400";
  }
  if (size === "xl") {
    return "size-space-56 text-body-400";
  }
  return "size-space-64 text-heading-100";
};

export default getWrapperSize;
