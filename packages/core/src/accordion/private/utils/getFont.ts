import type AccordionSizes from "../types/AccordionSizes";

const getFont = (size?: AccordionSizes) => {
  switch (size) {
    case "xl":
      return `text-body-400`;
    case "sm":
      return `text-body-200`;
    default:
      return `text-body-300`;
  }
};

export default getFont;
