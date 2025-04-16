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
          !disabled && "hover-supported:hover:bg-negative/10",
        )
      : mergeClassnames(
          "text-primary bg-transparent ring-inset ring-1 ring-primary",
          !disabled &&
            "hover-supported:hover:ring-primary hover-supported:[&>.hover]:hover:bg-hover",
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
          !disabled && "hover-supported:hover:bg-negative/10",
        )
      : mergeClassnames(
          "text-secondary bg-transparent",
          !disabled &&
            "hover-supported:hover:text-primary hover-supported:[&>.hover]:hover:bg-hover",
        );
  }
  return animation === "error"
    ? "text-force-light bg-negative"
    : "text-force-light bg-brand hover-supported:[&>.hover]:hover:bg-hover";
};

export default getButtonVariants;
