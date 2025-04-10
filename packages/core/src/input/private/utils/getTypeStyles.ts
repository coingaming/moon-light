import type InputProps from "../types/InputProps";

const getTypeStyles = (type?: InputProps["type"]): string | undefined => {
  switch (type) {
    case "number":
      return "";
    case "date":
      return "";
    case "time":
      return "";
    case "datetime-local":
      return "";
    default:
      return;
  }
};

export default getTypeStyles;
