import React, { ReactNode, forwardRef } from "react";
import getSizeStyles from "./private/utils/getSizeStyles";
import useFormContext from "../form/private/utils/useFormContext";
import useFormItemContext from "../form/private/utils/useFormItemContext";
import mergeClassnames from "../mergeClassnames/mergeClassnames";
import ControlsChevronDownSmall from "../private/icons/ControlsChevronDownSmall";

type WithChildren<T = {}> = T & { children?: ReactNode };

export interface NativeSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  className?: string;
  size?: "sm" | "md" | "lg";
  error?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}
const NativeSelect = forwardRef<
  HTMLSelectElement,
  WithChildren<NativeSelectProps>
>(
  (
    {
      children,
      className,
      size: selectSize,
      error: selectError,
      disabled: selectDisabled,
      readOnly,
      ...rest
    },
    ref,
  ) => {
    const { size: formSize } = useFormContext("Select");
    const {
      size: formItemSize,
      disabled: formItemDisabled,
      error: formItemError,
    } = useFormItemContext("Select");
    const size = selectSize || formItemSize || formSize;
    const disabled = selectDisabled || formItemDisabled;
    const error = selectError || formItemError;

    return (
      <span
        className={mergeClassnames(
          "block relative w-full",
          disabled && "opacity-disabled cursor-not-allowed",
          readOnly && "cursor-not-allowed",
          className && className,
        )}
      >
        <select
          ref={ref}
          disabled={disabled || readOnly}
          className={mergeClassnames(
            "block w-full max-w-full py-0 px-space-16 m-0 appearance-none text-body-400 text-primary transition-shadow box-border relative z-[2] cursor-pointer",
            "bg-primary ring-1 ring-inset ring-primary hover:ring-2",
            "focus:ring-2 focus:ring-active focus:outline-none",
            error &&
              "ring-2 ring-negative hover:ring-2 hover:ring-negative focus:ring-2 focus:ring-negative",
            "invalid:ring-2 invalid:ring-negative invalid:hover:ring-2  invalid:hover:ring-negative invalid:focus:ring-2 invalid:focus:ring-negative",
            getSizeStyles(size as string),
            "before:box-border after:box-border",
            "placeholder:text-secondary placeholder:opacity-100 placeholder:transition-opacity placeholder:delay-75",
            (disabled || readOnly) &&
              "cursor-not-allowed hover:ring-1 hover:ring-primary",
          )}
          {...rest}
        >
          {children}
        </select>
        <ControlsChevronDownSmall
          className={mergeClassnames(
            "absolute top-1/2 end-space-12 -translate-y-1/2 z-[5] pointer-events-none",
            "icon-secondary flex-shrink-0 transition-transform",
            size === "sm" ? "text-body-400" : "text-heading-200",
          )}
        />
      </span>
    );
  },
);

export default NativeSelect;
