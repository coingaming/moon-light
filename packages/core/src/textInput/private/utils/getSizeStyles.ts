const getSizeStyles = (size?: string) => {
  switch (size) {
    case "xl":
      return "h-space-56 leading-space-56 rounded-8 hover:rounded-8 focus:rounded-8 invalid:rounded-8";
    case "lg":
      return "h-space-48 leading-space-48 rounded-8 hover:rounded-8 focus:rounded-8 invalid:rounded-8";
    case "sm":
      return "h-space-32 leading-space-32 rounded-4 hover:rounded-4 focus:rounded-4 invalid:rounded-4";
    default:
      return "h-space-40 leading-space-40 rounded-4 hover:rounded-4 focus:rounded-4 invalid:rounded-4";
  }
};

export default getSizeStyles;
