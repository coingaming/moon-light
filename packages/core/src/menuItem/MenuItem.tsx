import React, { useEffect, ReactNode } from "react";
import type CheckboxRadioProps from "./private/types/CheckboxRadioProps";
import type MenuItemPolymorphicProps from "./private/types/MenuItemPolymorphicProps";
import type MultiTitleProps from "./private/types/MultiTitleProps";
import MenuItemContext from "./private/utils/MenuItemContext";
import useMenuItemContext from "./private/utils/useMenuItemContext";
import mergeClassnames from "../mergeClassnames/mergeClassnames";
import GenericCheckAlternative from "../private/icons/GenericCheckAlternative";
import useRegisterChild from "../private/utils/useRegisterChild";

const MenuItemRoot = React.forwardRef(
  <C extends React.ElementType = "button">(
    {
      as,
      children,
      width,
      isSelected,
      isActive,
      className,
      ...rest
    }: MenuItemPolymorphicProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || "button";
    const states = {
      selected: isSelected,
      active: isActive,
    };
    const { state, registerChild } = useRegisterChild();
    const isNoBg = state.childArray?.find(
      (name) => name === "Radio" || name === "Checkbox",
    );
    const innerSelected = isNoBg ? false : isSelected;
    return (
      <MenuItemContext.Provider value={{ ...states, ...state, registerChild }}>
        <Component
          ref={ref}
          className={mergeClassnames(
            "flex gap-space-8 justify-between items-center p-space-8 bg-transparent rounded-8",
            "text-body-300 text-primary focus:outline-none focus:ring-2 focus:ring-active cursor-pointer",
            "hover:bg-hover transition",
            width ? width : "w-full",
            (innerSelected || isActive) && "bg-hover",
            className && className,
          )}
          {...((!as || as === "button") && { type: "button" })}
          {...rest}
        >
          {children}
        </Component>
      </MenuItemContext.Provider>
    );
  },
);

const Title = ({ children }: { children?: ReactNode }) => {
  const { registerChild } = useMenuItemContext("MenuItem.Title");
  useEffect(() => {
    registerChild && registerChild("Title");
  }, []);
  return (
    <span className="block grow text-start text-primary overflow-hidden">
      {children}
    </span>
  );
};

const MultiTitle = ({ title, text }: MultiTitleProps) => {
  const { registerChild } = useMenuItemContext("MenuItem.MultiTitle");
  useEffect(() => {
    registerChild && registerChild("MultiTitle");
  }, []);
  return (
    <span className="block grow text-start text-primary overflow-hidden">
      <span className="block text-primary text-body-300">{title}</span>
      <span className="flex text-secondary text-body-200">
        <span className="flex-1 truncate">{text}</span>
      </span>
    </span>
  );
};

const Radio = ({
  isSelected,
  className,
  ["aria-label"]: ariaLabel,
}: CheckboxRadioProps) => {
  const { selected = isSelected, registerChild } =
    useMenuItemContext("MenuItem.Items");
  useEffect(() => {
    registerChild && registerChild("Radio");
  }, []);
  const ariaLabelValue = ariaLabel ? ariaLabel : "Radio option";
  return (
    <span className="flex size-space-24 justify-center items-center">
      <span
        role="radio"
        aria-checked={selected}
        aria-label={ariaLabelValue}
        className={mergeClassnames(
          "block relative size-space-16 rounded-full shadow-[0_0_0_1px_inset] shadow-primary",
          "moon-checked:shadow-brand after:size-space-8 after:rounded-full after:absolute",
          "after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2",
          "after:bg-brand after:transition-transform after:scale-0",
          "moon-checked:after:scale-100",
          className,
        )}
      />
    </span>
  );
};

const Checkbox = ({
  isSelected,
  className,
  ["aria-label"]: ariaLabel,
}: CheckboxRadioProps) => {
  const { selected = isSelected, registerChild } =
    useMenuItemContext("MenuItem.Checkbox");
  useEffect(() => {
    registerChild && registerChild("Checkbox");
  }, []);
  const ariaLabelValue = ariaLabel ? ariaLabel : "Checkbox";
  return (
    <span className="flex size-space-24 justify-center items-center relative">
      <span
        role="checkbox"
        aria-checked={selected}
        aria-label={ariaLabelValue}
        className={mergeClassnames(
          "absolute top-space-4 start-space-4 flex size-space-16 items-center justify-center",
          "shadow-[0_0_0_1px_inset] transition-colors text-body-400 rounded-4 shadow-primary",
          "text-force-light moon-checked:shadow-none moon-checked:bg-brand",
          className,
        )}
      >
        <GenericCheckAlternative
          className={mergeClassnames(
            "transition-opacity",
            selected ? "opacity-100" : "opacity-0",
          )}
        />
      </span>
    </span>
  );
};

const MenuItem = Object.assign(MenuItemRoot, {
  Title,
  MultiTitle,
  Checkbox,
  Radio,
});

export default MenuItem;
