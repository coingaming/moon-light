import type ButtonVariants from "../../types/ButtonVariants";

const getLoaderColor = (variant?: ButtonVariants): string => {
  switch (variant) {
    case "secondary":
    case "outline":
      return "border-primary";
    case "ghost":
      return "border-primary";
    default:
      return "border-force-light";
  }
};

export default getLoaderColor;
