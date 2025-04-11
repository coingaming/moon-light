const getLabelSize = (size?: string) => {
  switch (size) {
    case "sm":
      return "text-body-300";
    default:
      return "text-body-400";
  }
};

export default getLabelSize;
