import React, { forwardRef } from "react";
import type InputProps from "./private/types/InputProps";
import getMaxDate from "./private/utils/getMaxDate";
import getSizeStyles from "./private/utils/getSizeStyles";
import getTypeStyles from "./private/utils/getTypeStyles";
import useFormContext from "../form/private/utils/useFormContext";
import useFormItemContext from "../form/private/utils/useFormItemContext";
import mergeClassnames from "../mergeClassnames/mergeClassnames";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      size: inputSize,
      error: inputError,
      disabled: inputDisabled,
      id,
      ...rest
    },
    ref,
  ) => {
    const { size: formSize } = useFormContext("Input");
    const {
      size: formItemSize,
      disabled: formItemDisabled,
      error: formItemError,
    } = useFormItemContext("Input");
    const size = inputSize || formItemSize || formSize;
    const disabled = inputDisabled || formItemDisabled;
    const error = inputError || formItemError;
    return (
      <input
        ref={ref}
        type={type}
        id={id}
        disabled={disabled}
        max={getMaxDate(type)}
        className={mergeClassnames(
          "block w-full max-w-full py-0 px-space-16 m-0 appearance-none text-body-400 text-primary",
          "transition-shadow box-border relative z-[2] bg-primary ring-1 ring-inset ring-primary hover:ring-2",
          "focus:ring-2 focus:ring-active focus:outline-none",
          "before:box-border after:box-border placeholder:delay-75",
          "placeholder:text-secondary placeholder:opacity-100 placeholder:transition-opacity",
          "read-only:outline-0 read-only:border-none read-only:cursor-not-allowed",
          "read-only:hover:ring-1 read-only:focus:ring-1",
          "invalid:ring-2 invalid:ring-negative invalid:hover:ring-2 invalid:hover:ring-negative invalid:focus:ring-2 invalid:focus:ring-negative",
          getSizeStyles(size),
          getTypeStyles(type),
          error &&
            "ring-2 ring-negative hover:ring-2 hover:ring-negative focus:ring-2 focus:ring-negative",
          disabled && "opacity-disabled cursor-not-allowed",
          className && className,
        )}
        {...rest}
      />
    );
  },
);

export default Input;
