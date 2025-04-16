import type RowSizes from "../types/RowSizes";

const getPadding = (rowSize?: RowSizes) => {
  switch (rowSize) {
    case "xs":
      return "px-space-8 pyspace-4";
    case "sm":
      return "px-space-12 pyspace-4";
    case "lg":
      return "px-space-12 py-space-12";
    case "xl":
      return "px-space-12 py-space-16";
    case "2xl":
      return "px-space-12 py-space-20";
    case "md":
    default:
      return "px-space-12 py-space-8";
  }
};

export default getPadding;
