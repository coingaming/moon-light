import type ButtonSizes from "../../../button/private/types/ButtonSizes";

const getButtonSize = (size?: ButtonSizes): string => {
  if (size === "xs") {
    return "h-space-24 p-space-4 gap-space-4 text-body-200 rounded-4";
  }
  if (size === "sm") {
    return "h-space-32 p-space-4 gap-space-4 text-body-300 rounded-8";
  }
  if (size === "lg") {
    return "h-space-48 p-space-12 gap-space-8 text-body-400 rounded-8";
  }
  if (size === "xl") {
    return "h-space-56 p-space-16 gap-space-8 text-body-400 rounded-12";
  }
  return "h-space-40 p-space-8 gap-space-8 text-body-300 rounded-8";
};

export default getButtonSize;
