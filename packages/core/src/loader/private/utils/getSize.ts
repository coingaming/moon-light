import type LoaderSize from "../types/LoaderSize";

const getSize = (size?: LoaderSize) => {
  switch (size) {
    case "2xs":
      return "size-space-16";
    case "xs":
      return "size-space-24";
    case "sm":
      return "size-space-32";
    case "lg":
      return "size-space-48";
    default:
      return "size-space-40";
  }
};

export default getSize;
