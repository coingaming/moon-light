import type ButtonSettingsProps from "../../types/ButtonSettingsProps";

const getXlPadding = ({
  icon,
  iconLeft,
  iconRight,
  iconOnly,
  fullWidth,
}: ButtonSettingsProps): string => {
  if (fullWidth) {
    return "px-space-24";
  }
  if (icon === "left" || iconLeft) {
    return "ps-space-16 pe-space-24";
  }
  if (icon === "right" || iconRight) {
    return "ps-space-24 pe-space-16";
  }
  if (icon === "only" || iconOnly) {
    return "px-space-16";
  }
  return "px-space-24";
};

export default getXlPadding;
