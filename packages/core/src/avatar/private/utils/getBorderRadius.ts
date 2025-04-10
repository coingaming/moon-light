import type SizeProps from "../types/SizeProps";

const getWrapperSize = (size?: SizeProps, isRounded?: boolean) => {
  if (isRounded) {
    return "rounded-full";
  }
  if (size === "xs") {
    return "rounded-4";
  }
  if (size === "2xl") {
    return "rounded-12";
  }
  return "rounded-8";
};

export default getWrapperSize;
