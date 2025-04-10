import getLgPadding from "./getLgPadding";
import getMdPadding from "./getMdPadding";
import getSmPadding from "./getSmPadding";
import getXlPadding from "./getXlPadding";
import getXsPadding from "./getXsPadding";
import mergeClassnames from "../../../../mergeClassnames/mergeClassnames";
import type ButtonSettingsProps from "../../types/ButtonSettingsProps";

const getButtonSize = ({
  size,
  icon,
  iconLeft,
  iconRight,
  iconOnly,
  fullWidth,
}: ButtonSettingsProps): string => {
  if (size === "xs") {
    return mergeClassnames(
      getXsPadding({
        icon,
        iconLeft,
        iconRight,
        iconOnly,
        fullWidth,
      }),
      "h-space-24 py-space-4 gap-space-4 text-body-200 rounded-4",
    );
  }
  if (size === "sm") {
    return mergeClassnames(
      getSmPadding({
        icon,
        iconLeft,
        iconRight,
        iconOnly,
        fullWidth,
      }),
      "h-space-32 py-space-4 gap-space-4 text-body-300 rounded-8",
    );
  }
  if (size === "lg") {
    return mergeClassnames(
      getLgPadding({
        icon,
        iconLeft,
        iconRight,
        iconOnly,
        fullWidth,
      }),
      "h-space-48 py-space-12 gap-space-8 text-body-400 rounded-8",
    );
  }
  if (size === "xl") {
    return mergeClassnames(
      getXlPadding({
        icon,
        iconLeft,
        iconRight,
        iconOnly,
        fullWidth,
      }),
      "h-space-56 py-space-16 gap-space-8 text-body-400 rounded-12",
    );
  }
  return mergeClassnames(
    getMdPadding({ icon, iconLeft, iconRight, iconOnly, fullWidth }),
    "h-space-40 py-space-8 gap-space-8 text-body-300 rounded-8",
  );
};

export default getButtonSize;
