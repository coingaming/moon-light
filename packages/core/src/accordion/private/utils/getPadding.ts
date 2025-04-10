import type AccordionSizes from "../types/AccordionSizes";

const getPadding = (isContentInside?: boolean, size?: AccordionSizes) => {
  if (isContentInside) {
    switch (size) {
      case "xl":
        return "p-space-16";
      case "lg":
        return "p-space-12";
      case "sm":
        return "p-space-8";
      default:
        return "py-space-8 ps-space-12 pe-space-8";
    }
  }
  return "";
};

export default getPadding;
