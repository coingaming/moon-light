import type ButtonSettingsProps from "../../types/ButtonSettingsProps";

const getXsPadding = ({
  icon,
  iconLeft,
  iconRight,
  iconOnly,
  fullWidth,
}: ButtonSettingsProps): string => {
  if (fullWidth) {
    return "px-space-8";
  }
  if (icon === "left" || iconLeft) {
    return "ps-space-4 pe-space-8";
  }
  if (icon === "right" || iconRight) {
    return "ps-space-8 pe-space-4";
  }
  if (icon === "only" || iconOnly) {
    return "px-space-4";
  }
  return "px-space-8";
};

export default getXsPadding;
