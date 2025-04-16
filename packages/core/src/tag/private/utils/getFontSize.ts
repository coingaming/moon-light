import type TagProps from "../types/TagProps";

const getFontSize = ({ size, isUppercase }: TagProps) => {
  if (isUppercase) {
    return size === "2xs"
      ? "text-body-100 uppercase font-medium"
      : "text-body-100 uppercase font-medium";
  }
  return size === "2xs" ? "text-body-100" : "text-body-100";
};

export default getFontSize;
