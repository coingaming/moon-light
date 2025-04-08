import type ButtonSettingsProps from "../../types/ButtonSettingsProps";

type Props = { iconElement?: JSX.Element } & ButtonSettingsProps;

const getIconHorizontalPosition = ({
  iconRight,
  iconLeft,
  size,
}: Pick<Props, "iconRight" | "iconLeft" | "size">): string => {
  if (iconRight) {
    switch (size) {
      case "xs":
      case "sm":
        return "end-space-4";
      case "lg":
        return "end-space-12";
      case "xl":
        return "end-space-16";
      default:
        return "end-space-8";
    }
  }
  if (iconLeft) {
    switch (size) {
      case "xs":
      case "sm":
        return "start-space-4";
      case "lg":
        return "start-space-12";
      case "xl":
        return "start-space-16";
      default:
        return "start-space-8";
    }
  }
  return "";
};

export default getIconHorizontalPosition;
