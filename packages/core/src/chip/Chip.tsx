import React, { forwardRef } from "react";
import type ChipPolymorphicProps from "./private/types/ChipPolymorphicProps";
import getActive from "./private/utils/getActive";
import getDisabled from "./private/utils/getDisabled";
import getPadding from "./private/utils/getPadding";
import mergeClassnames from "../mergeClassnames/mergeClassnames";

const Chip = forwardRef(
  <C extends React.ElementType = "button">(
    {
      children,
      isActive,
      size = "md",
      iconLeft,
      iconRight,
      iconOnly,
      isStroke,
      variant = "default",
      className,
      disabled,
      as,
      ...rest
    }: ChipPolymorphicProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || "button";
    return (
      <Component
        ref={ref}
        {...rest}
        className={mergeClassnames(
          "z-0 overflow-hidden flex flex-row items-center justify-center text-moon-14 relative",
          "rounded-moon-i-sm cursor-pointer transition duration-200 user-select-none space-between",
          size === "sm" ? "h-8 gap-1" : "h-10 gap-2",
          variant === "default" && "bg-goku",
          getPadding({ size, iconLeft, iconRight, iconOnly }),
          getActive({ isActive, isStroke }),
          getDisabled({ disabled, isStroke }),
          className,
        )}
        {...((!as || as === "button") && { type: "button" })}
      >
        {iconLeft}
        {children}
        {iconOnly}
        {iconRight}
      </Component>
    );
  },
);

export default Chip;
