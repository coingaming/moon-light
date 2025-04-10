import type ButtonSizes from "../../types/ButtonSizes";

const getIconSize = (size?: ButtonSizes): string => {
  if (size === "xs") {
    return "text-body-400";
  }
  return "text-heading-200";
};

export default getIconSize;
