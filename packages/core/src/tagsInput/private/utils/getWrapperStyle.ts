import type Size from "../types/Size";

const getWrapperStyle = (size: Size) =>
  ({
    sm: "rounded-4 px-space-8 py-space-4",
    md: "rounded-8 px-space-12 py-space-8",
    lg: "rounded-8 px-space-12 py-space-12",
  })[size] || "rounded-8 px-space-12 py-space-8";

export default getWrapperStyle;
