import React from "react";
import mergeClassnames from "../mergeClassnames/mergeClassnames";
import { PlaceholderProps, Shape } from "./private/types/PlaceholderProps";

const Placeholder: React.FC<PlaceholderProps> = ({ shape, className = "" }) => {
  const rounded = shape === Shape.SQUARE ? "rounded-4" : "rounded-full";

  return (
    <div
      data-testid="placeholder"
      className={mergeClassnames("w-16 h-16 bg-bulma", rounded, className)}
    />
  );
};

export default Placeholder;
