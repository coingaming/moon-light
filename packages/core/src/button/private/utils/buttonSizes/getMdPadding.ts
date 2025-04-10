import type ButtonSettingsProps from "../../types/ButtonSettingsProps";

const getMdPadding = ({
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
    return "ps-space-8 pe-space-16";
  }
  if (icon === "right" || iconRight) {
    return "ps-space-16 pe-space-8";
  }
  if (icon === "only" || iconOnly) {
    return "px-space-8";
  }
  return "px-space-16";
};

export default getMdPadding;
