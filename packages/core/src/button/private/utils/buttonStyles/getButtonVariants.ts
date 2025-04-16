import mergeClassnames from "../../../../mergeClassnames/mergeClassnames";
import type ButtonSettingsProps from "../../types/ButtonSettingsProps";

const getButtonVariants = ({
  variant,
  disabled,
  animation,
}: Pick<ButtonSettingsProps, "variant" | "disabled" | "animation">): string => {
  if (variant === "secondary" || variant === "outline") {
    return animation === "error"
      ? mergeClassnames(
          "text-negative bg-transparent ring-inset ring-1 ring-negative",
          !disabled && "hover:bg-negative-subtle",
        )
      : mergeClassnames(
          "text-primary bg-transparent ring-inset ring-1 ring-primary",
          !disabled && "hover:ring-primary [&>.hover]:hover:bg-hover",
        );
  }
  if (variant === "tertiary") {
    return animation === "error"
      ? "text-force-light bg-negative"
      : "text-force-light bg-discovery";
  }
  if (variant === "ghost") {
    return animation === "error"
      ? mergeClassnames(
          "text-negative bg-transparent",
          !disabled && "hover:bg-negative-subtle",
        )
      : mergeClassnames(
          "text-secondary bg-transparent",
          !disabled && "hover:text-primary [&>.hover]:hover:bg-hover",
        );
  }
  return animation === "error"
    ? "text-force-light bg-negative"
    : "text-force-light bg-brand [&>.hover]:hover:bg-hover";
};

export default getButtonVariants;
