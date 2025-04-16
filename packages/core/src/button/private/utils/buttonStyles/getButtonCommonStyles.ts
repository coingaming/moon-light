import mergeClassnames from "../../../../mergeClassnames/mergeClassnames";
import type ButtonSettingsProps from "../../types/ButtonSettingsProps";

const getButtonCommonStyles = ({
  disabled,
}: Pick<ButtonSettingsProps, "disabled">): string =>
  mergeClassnames(
    "relative z-0 flex justify-center items-center no-underline overflow-hidden",
    "whitespace-nowrap select-none transition duration-200",
    disabled ? "opacity-disabled cursor-not-allowed" : "active:scale-90",
  );

export default getButtonCommonStyles;
