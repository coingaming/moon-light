import type ButtonSettingsProps from "../../types/ButtonSettingsProps";

const getSmPadding = ({
  icon,
  iconLeft,
  iconRight,
  iconOnly,
  fullWidth,
}: ButtonSettingsProps): string => {
  if (fullWidth) {
    return "px-space-12";
  }
  if (icon === "left" || iconLeft) {
    return "ps-space-4 pe-space-12";
  }
  if (icon === "right" || iconRight) {
    return "ps-space-12 pe-space-1";
  }
  if (icon === "only" || iconOnly) {
    return "px-space-1";
  }
  return "px-space-12";
};

export default getSmPadding;
