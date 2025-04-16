import Size from "../types/Size";

const getTextSize = (size: Size) =>
  ({
    sm: "text-body-300",
    md: "text-body-400",
    lg: "text-body-400",
  })[size] || "text-body-400";

export default getTextSize;
