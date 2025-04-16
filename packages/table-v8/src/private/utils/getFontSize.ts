import type RowSizes from "../types/RowSizes";

const getFontSize = (rowSize?: RowSizes) => {
  switch (rowSize) {
    case "xs":
      return "text-body-200";
    default:
      return "text-body-300";
  }
};

export default getFontSize;
