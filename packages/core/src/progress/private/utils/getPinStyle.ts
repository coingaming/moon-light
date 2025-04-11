import type Sizes from "../types/Sizes";

const getPinStyle = (size?: Sizes) => {
  switch (size) {
    case "6xs":
      return "bottom-space-18 -end-space-12 before:size-space-12 before:-bottom-[25px]";
    case "5xs":
      return "bottom-space-20 -end-space-12 before:size-space-12 before:-bottom-[26px]";
    case "4xs":
      return "bottom-space-24 -end-space-12 before:size-space-12 before:-bottom-space-28";
    case "3xs":
      return "bottom-space-28 -end-space-12 before:size-space-12 before:-bottom-[30px]";
    case "2xs":
    default:
      return "bottom-space-32 -end-space-10 before:size-space-16 before:-bottom-[34px]";
  }
};

export default getPinStyle;
