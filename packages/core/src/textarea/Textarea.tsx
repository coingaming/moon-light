import React, { forwardRef } from "react";
import type TextareaProps from "./private/types/TextareaProps";
import useFormItemContext from "../form/private/utils/useFormItemContext";
import mergeClassnames from "../mergeClassnames/mergeClassnames";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error: textareaError, ...rest }, ref) => {
    const { disabled: formItemDisabled, error: formItemError } =
      useFormItemContext("Textarea");
    const error = textareaError || formItemError;
    const ariaLabelValue = rest.placeholder
      ? undefined
      : rest["aria-label"]
        ? rest["aria-label"]
        : rest.name
          ? rest.name
          : "Textarea";
    return (
      <textarea
        ref={ref}
        disabled={rest.disabled || formItemDisabled}
        className={mergeClassnames(
          "block appearance-none resize-none w-full p-space-16 text-body-400 text-primary bg-primary",
          "rounded-8 placeholder:text-secondary transition-shadow ring-1 ring-inset ring-primary",
          "hover:ring-2 focus:ring-2 focus:ring-active focus:outline-none",
          "read-only:outline-0 read-only:border-none read-only:cursor-not-allowed",
          "read-only:hover:ring-1 read-only:focus:ring-1 read-only:focus:ring-primary",
          error &&
            "ring-2 ring-negative hover:ring-2 hover:ring-negative focus:ring-2 focus:ring-negative",
          rest.disabled && "opacity-disabled cursor-not-allowed",
          className,
        )}
        aria-label={ariaLabelValue}
        {...rest}
      />
    );
  },
);

export default Textarea;
