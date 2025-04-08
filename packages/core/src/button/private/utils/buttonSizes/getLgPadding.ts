import type ButtonSettingsProps from "../../types/ButtonSettingsProps";

const getLgPadding = ({
  icon,
  iconLeft,
  iconRight,
  iconOnly,
  fullWidth,
}: ButtonSettingsProps): string => {
  if (fullWidth) {
    return "px-space-16";
  }
  if (icon === "left" || iconLeft) {
    return "ps-space-12 pe-space-16";
  }
  if (icon === "right" || iconRight) {
    return "ps-space-16 pe-space-12";
  }
  if (icon === "only" || iconOnly) {
    return "px-space-12";
  }
  return "px-space-16";
};

export default getLgPadding;
