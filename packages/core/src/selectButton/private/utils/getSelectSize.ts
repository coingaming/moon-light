const getSelectSize = (size?: "sm" | "md" | "lg" | string) => {
  switch (size) {
    case "lg":
      return "h-space-48 p-space-12 rounded-8";
    case "sm":
      return "h-space-32 py-space-4 px-space-8 rounded-4";
    case "md":
    default:
      return "h-space-40 py-space-8 px-space-12 rounded-8";
  }
};

export default getSelectSize;
