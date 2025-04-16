import React, { forwardRef } from "react";
import { RadioGroup } from "@headlessui/react";
import type OptionProps from "./private/types/OptionProps";
import type RadioProps from "./private/types/RadioProps";
import mergeClassnames from "../mergeClassnames/mergeClassnames";

const RadioRoot = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      defaultValue,
      value,
      onChange,
      children,
      className,
      disabled,
      name,
      ...rest
    },
    ref,
  ) => (
    <RadioGroup
      ref={ref}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      className={className}
      disabled={disabled}
      name={name}
      {...rest}
    >
      {children}
    </RadioGroup>
  ),
);

const Option = ({ value, children, className, disabled }: OptionProps) => {
  const ariaLabelValue = value ? value.toString() : "Radio option";
  return (
    <RadioGroup.Option
      value={value}
      disabled={disabled}
      className={mergeClassnames(
        "flex gap-space-8 cursor-pointer text-body-300 text-primary moon-disabled:opacity-disabled",
        "moon-disabled:cursor-default",
        className,
      )}
      aria-label={ariaLabelValue}
    >
      {children}
    </RadioGroup.Option>
  );
};

const Indicator = ({ className }: { className?: string }) => (
  <div
    className={mergeClassnames(
      "relative flex items-center justify-center size-space-16 aspect-square m-space-4 rounded-full border",
      "transition-colors after:absolute after:size-0 after:rounded-full after:top-1/2",
      "after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all",
      "moon-checked:after:size-space-8 border-primary moon-checked:border-brand",
      "after:bg-brand",
      className,
    )}
  />
);

const Radio = Object.assign(RadioRoot, { Option, Indicator });

export default Radio;
