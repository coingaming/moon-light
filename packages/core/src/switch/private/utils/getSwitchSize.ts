import type Size from "../types/Size";

const getSwitchSize = (size?: Size) => {
  switch (size) {
    case "2xs":
      return "w-space-28 h-space-16 p-space-2";
    case "xs":
      return "w-[2.75rem] h-space-24 p-space-4";
    case "sm":
    default:
      return "w-[3.75rem] h-space-32 p-space-4";
  }
};

export default getSwitchSize;
