const getBorderRadius = (size?: string) => {
  switch (size) {
    case "xl":
    case "lg":
      return "rounded-8";
    default:
      return "rounded-4";
  }
};

export default getBorderRadius;
