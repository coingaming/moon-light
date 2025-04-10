import React, { forwardRef, useEffect } from "react";
import type InsetInputProps from "./private/types/InsetInputProps";
import type LabelProps from "./private/types/LabelProps";
import InsetInputContext from "./private/utils/InsetInputContext";
import useInsetInputContext from "./private/utils/useInsetInputContext";
import useFormItemContext from "../form/private/utils/useFormItemContext";
import getMaxDate from "../input/private/utils/getMaxDate";
import getTypeStyles from "../input/private/utils/getTypeStyles";
import mergeClassnames from "../mergeClassnames/mergeClassnames";
import useRegisterChild from "../private/utils/useRegisterChild";

const InsetInputRoot = forwardRef<HTMLInputElement, InsetInputProps>(
  ({ className, error: inputError, children, ...rest }, ref) => {
    const { disabled: formItemDisabled, error: formItemError } =
      useFormItemContext("Input");
    const disabled = rest.disabled || formItemDisabled;
    const error = inputError || formItemError;
    const { state, registerChild } = useRegisterChild();
    const isLabel = state.childArray?.some((name) => name === "Label");
    return (
      <InsetInputContext.Provider value={{ ...state, registerChild }}>
        <div
          className={mergeClassnames(
            "w-full relative rounded-8 bg-primary",
            disabled && "opacity-disabled cursor-not-allowed",
            className && className,
          )}
        >
          <input
            ref={ref}
            type={rest.type}
            id={rest.id}
            disabled={disabled}
            max={getMaxDate(rest.type)}
            className={mergeClassnames(
              "block w-full py-0 px-space-16 m-0 appearance-none text-body-400 text-primary",
              "transition-shadow box-border relative z-[2] bg-transparent ring-1 ring-inset ring-primary",
              "hover:ring-2 focus:ring-2 focus:ring-active focus:outline-none",
              "h-space-56 leading-space-56",
              "rounded-8 placeholder:text-secondary placeholder:opacity-100",
              "placeholder:transition-opacity placeholder:delay-75 read-only:outline-0",
              "read-only:border-none read-only:cursor-not-allowed read-only:hover:ring-1",
              "read-only:focus:ring-1 read-only:focus:ring-primary",
              "invalid:ring-2 invalid:ring-negative invalid:hover:ring-2 invalid:hover:ring-negative",
              "invalid:focus:ring-2 invalid:focus:ring-negative",
              error &&
                "ring-2 ring-negative hover:ring-2 hover:ring-negative focus:ring-2 focus:ring-negative",
              getTypeStyles(rest.type),
              isLabel && "pt-space-18",
            )}
            {...rest}
          />
          {children}
        </div>
      </InsetInputContext.Provider>
    );
  },
);

const Label = ({ children, className }: LabelProps) => {
  const { registerChild } = useInsetInputContext("Label");
  useEffect(() => {
    registerChild && registerChild("Label");
  }, []);
  return (
    <label
      className={mergeClassnames(
        "absolute text-body-200 text-secondary top-space-12 start-space-16 z-[1] transition-all",
        className,
      )}
    >
      {children}
    </label>
  );
};

const InsetInput = Object.assign(InsetInputRoot, { Label });

export default InsetInput;
