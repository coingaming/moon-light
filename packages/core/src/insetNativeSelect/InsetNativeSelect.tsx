import React, { forwardRef } from "react";
import type InsetNativeSelectProps from "./private/types/InsetNativeSelectProps";
import type WithChildren from "./private/types/WithChildren";
import useFormContext from "../form/private/utils/useFormContext";
import useFormItemContext from "../form/private/utils/useFormItemContext";
import mergeClassnames from "../mergeClassnames/mergeClassnames";
import ControlsChevronDownSmall from "../private/icons/ControlsChevronDownSmall";

const InsetNativeSelect = forwardRef<
  HTMLSelectElement,
  WithChildren<InsetNativeSelectProps>
>(
  (
    {
      children,
      className,
      label,
      size: selectSize,
      error: selectError,
      disabled: selectDisabled,
      readOnly,
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
    const size = selectSize || formItemSize || formSize;
    const disabled = selectDisabled || formItemDisabled;
    const error = selectError || formItemError;
    return (
      <span
        className={mergeClassnames(
          "block relative w-full max-w-full rounded-8",
          disabled && "opacity-disabled cursor-not-allowed",
          readOnly && "cursor-not-allowed",
          className && className,
        )}
      >
        <select
          ref={ref}
          disabled={disabled || readOnly}
          className={mergeClassnames(
            "block w-full max-w-full py-0 px-space-16 m-0 appearance-none text-body-400 text-primary",
            "transition-shadow box-border relative bg-primary ring-1 ring-inset ring-primary",
            "hover:ring-2 focus:ring-2 focus:ring-active focus:outline-none",
            error &&
              "ring-2 ring-negative hover:ring-2 hover:ring-negative focus:ring-2 focus:ring-negative",
            "h-space-56 rounded-8 rtl:[&:not([disabled])]:hover:rounded-8",
            "rtl:[&:not([disabled])]:focus:rounded-8 rtl:invalid:rounded-8",
            "ltr:[&:not([disabled])]:hover:rounded-8",
            "ltr:[&:not([disabled])]:focus:rounded-8 ltr:invalid:rounded-8",
            "before:box-border after:box-border placeholder:text-secondary placeholder:opacity-100",
            "placeholder:transition-opacity placeholder:delay-75 invalid:ring-2 invalid:ring-negative",
            "invalid:hover:ring-2 invalid:hover:ring-negative invalid:focus:ring-2 invalid:focus:ring-negative pt-space-18",
            (disabled || readOnly) &&
              "cursor-not-allowed hover:ring-1 hover:ring-primary",
          )}
          {...rest}
        >
          {children}
        </select>
        <label
          className={mergeClassnames(
            "absolute text-secondary transition-all ease-in-out duration-200 start-space-16",
            "text-body-200 top-space-12 pointer-events-none",
          )}
        >
          {label}
        </label>
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

export default InsetNativeSelect;
