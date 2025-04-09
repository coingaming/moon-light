import React, { forwardRef, useEffect, useState } from "react";
import type CheckboxProps from "./private/types/CheckboxProps";
import mergeClassnames from "../mergeClassnames/mergeClassnames";
import ControlsMinus from "../private/icons/ControlsMinus";
import GenericCheckAlternative from "../private/icons/GenericCheckAlternative";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      ariaLabel,
      label,
      bgColor = "bg-brand",
      className,
      indeterminate,
      ...rest
    },
    ref,
  ) => {
    const [isChecked, setIsChecked] = useState(rest.checked || false);
    useEffect(() => {
      if (typeof rest.checked !== undefined && rest.checked !== isChecked)
        setIsChecked(!!rest.checked);
    }, [rest.checked]);
    const ariaLabelValue = label
      ? undefined
      : ariaLabel
        ? ariaLabel
        : rest["aria-label"]
          ? rest["aria-label"]
          : rest.name
            ? rest.name
            : "Checkbox";
    return (
      <label
        htmlFor={rest.id}
        className={mergeClassnames(
          "relative flex items-center gap-space-8 text-body-300 text-primary cursor-pointer",
          rest.disabled && "opacity-disabled cursor-not-allowed select-none",
          rest.readOnly && "cursor-not-allowed select-none",
        )}
      >
        <input
          id={rest.id}
          disabled={rest.disabled}
          readOnly={rest.readOnly}
          aria-label={ariaLabelValue}
          ref={ref}
          className="peer appearance-none size-space-24 outline-none align-top select-none"
          type="checkbox"
          aria-checked={indeterminate ? "mixed" : isChecked}
          checked={isChecked}
          onClick={(e) => {
            if (rest.disabled || rest.readOnly) {
              e.preventDefault();
              e.stopPropagation();
              return;
            }
            if (rest.onClick) rest.onClick(e);
            setIsChecked(e?.currentTarget?.checked);
          }}
          onChange={rest.onChange ? rest.onChange : (e) => {}}
          {...rest}
        />
        <span
          className={mergeClassnames(
            "absolute top-space-4 start-space-4 flex size-space-16 items-center justify-center ring-1 ring-inset ring-primary transition-colors text-body-400 rounded-4 peer-checked:ring-none text-force-light",
            (isChecked || indeterminate) && bgColor,
            indeterminate && "ring-none",
            className && className,
          )}
          aria-hidden="true"
        >
          {indeterminate ? (
            <ControlsMinus
              className={mergeClassnames("transition-opacity opacity-100")}
            />
          ) : (
            <GenericCheckAlternative
              className={mergeClassnames(
                "transition-opacity",
                isChecked ? "opacity-100" : "opacity-0",
              )}
            />
          )}
        </span>
        {label}
      </label>
    );
  },
);

export default Checkbox;
