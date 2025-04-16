import type Size from "../types/Size";

const getTabSize = (size?: Size) =>
  size === "sm"
    ? "px-space-12 py-space-4 gap-space-4"
    : "px-space-16 py-space-8 gap-space-8";

export default getTabSize;
