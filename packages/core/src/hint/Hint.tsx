import React from "react";
import type HintProps from "./private/types/HintProps";
import useFormItemContext from "../form/private/utils/useFormItemContext";
import mergeClassnames from "../mergeClassnames/mergeClassnames";

const Hint = ({
  children,
  error: hintError,
  disabled,
  className,
}: HintProps) => {
  const { error: formItemError } = useFormItemContext("Hint");
  const error = hintError || formItemError;
  return (
    <p
      role="alert"
      className={mergeClassnames(
        "flex gap-space-4 items-center mt-space-8 text-body-200 [&_svg]:text-body-400",
        error ? "text-negative" : "text-secondary",
        disabled && "opacity-disabled cursor-not-allowed",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Hint;
