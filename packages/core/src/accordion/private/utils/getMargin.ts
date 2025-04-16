import type AccordionSizes from "../types/AccordionSizes";

const getMargin = (size?: AccordionSizes) => {
  switch (size) {
    case "xl":
      return "mt-space-16";
    case "lg":
      return "mt-space-12";
    default:
      return "mt-space-8";
  }
};

export default getMargin;
