import React, { Ref, forwardRef, useCallback } from "react";
import { Listbox } from "@headlessui/react";
import type ChipProps from "./private/types/ChipProps";
import type InputProps from "./private/types/InputProps";
import type LabelProps from "./private/types/LabelProps";
import type SelectButtonProps from "./private/types/SelectButtonProps";
import getSelectSize from "./private/utils/getSelectSize";
import SelectButtonContext from "./private/utils/SelectButtonContext";
import useSelectButtonContext from "./private/utils/useSelectButtonContext";
import mergeClassnames from "../mergeClassnames/mergeClassnames";
import ControlsChevronDownSmall from "../private/icons/ControlsChevronDownSmall";
import ControlsCloseSmall from "../private/icons/ControlsCloseSmall";
import Tag from "../tag/Tag";

const SelectButtonRoot = forwardRef(
  (
    {
      label,
      placeholder,
      size = "md",
      isError,
      idDisabled,
      open,
      children,
      isUppercase,
      ...rest
    }: SelectButtonProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const states = {
      open: open,
      size: size,
      isError: isError,
      idDisabled: idDisabled,
      ...rest,
    };
    return (
      <div className="relative" ref={ref}>
        <SelectButtonContext.Provider value={states}>
          {children}
        </SelectButtonContext.Provider>
      </div>
    );
  },
);

const Input = ({ children, className }: InputProps) => {
  const { size, isError, idDisabled, ...rest } =
    useSelectButtonContext("SelectButton.Input");
  return (
    <button
      {...rest}
      className={mergeClassnames(
        "flex items-center justify-between gap-space-8",
        "w-full bg-primary border-primary",
        "ring-1 ring-inset ring-primary hover:ring-2 transition-shadow duration-200",
        "focus:ring-2 focus:ring-active focus:outline-none",
        getSelectSize(size),
        isError &&
          "ring-2 ring-negative hover:ring-2 hover:ring-negative focus:ring-2 focus:ring-negative",
        idDisabled &&
          "opacity-disabled cursor-not-allowed hover:ring-1 hover:ring-primary",
        className && className,
      )}
    >
      <span className="flex w-full flex-col items-start text-start overflow-hidden">
        {children}
      </span>
      <Control />
    </button>
  );
};

const InsetInput = ({ children, className }: InputProps) => {
  const { isError, idDisabled, ...rest } =
    useSelectButtonContext("SelectButton.Input");
  return (
    <button
      {...rest}
      className={mergeClassnames(
        "flex items-center justify-between",
        "w-full bg-primary border-primary",
        "ring-1 ring-inset ring-primary hover:ring-2 transition-shadow duration-200",
        "focus:ring-2 focus:ring-active focus:outline-none",
        "h-space-56 py-space-8 px-space-16 rounded-12",
        isError &&
          "ring-2 ring-negative hover:ring-2 hover:ring-negative focus:ring-2 focus:ring-negative",
        idDisabled &&
          "opacity-disabled cursor-not-allowed hover:ring-1 hover:ring-primary",
        className && className,
      )}
    >
      <span className="flex gap-space-8 items-center overflow-hidden">
        {children}
      </span>
      <Control />
    </button>
  );
};

const Value = ({ children }: { children?: React.ReactNode }) => {
  const { size } = useSelectButtonContext("SelectButton.Value");
  return (
    <span
      className={mergeClassnames(
        size === "sm" ? "text-body-300" : "text-body-400",
        "w-full text-primary truncate",
      )}
    >
      {children}
    </span>
  );
};

const Label = ({
  children,
  labelSize,
  idDisabled,
  htmlFor = "",
}: LabelProps) => {
  const { size } = useSelectButtonContext("SelectButton.Label");
  const currentSize = labelSize || size;
  return (
    <Listbox.Label
      className={mergeClassnames(
        "block text-primary pb-space-8",
        currentSize === "sm" ? "text-body-300" : "text-body-400",
        idDisabled && "opacity-disabled cursor-not-allowed",
      )}
      htmlFor={htmlFor}
    >
      {children}
    </Listbox.Label>
  );
};

const FloatingLabel = ({ children }: { children?: React.ReactNode }) => (
  <Listbox.Label className="w-full text-body-200 text-secondary text-start truncate">
    {children}
  </Listbox.Label>
);

const Placeholder = ({ children }: { children?: React.ReactNode }) => {
  const { size } = useSelectButtonContext("SelectButton.Placeholder");
  return (
    <span
      className={mergeClassnames(
        size === "sm" ? "text-body-300" : "text-body-400",
        "w-full text-secondary text-start truncate",
      )}
    >
      {children}
    </span>
  );
};

const Control = () => {
  const { open, size } = useSelectButtonContext("SelectButton.Control");
  return (
    <ControlsChevronDownSmall
      className={mergeClassnames(
        "text-secondary flex-shrink-0 transition-transform",
        size === "sm" ? "text-body-400" : "text-heading-200",
        open && "rotate-[-180deg]",
      )}
    />
  );
};

const Chip = ({
  children,
  onClear,
  isUppercase,
  onClick,
  ...rest
}: ChipProps) => {
  const { size } = useSelectButtonContext("SelectButton.Control");
  const onCloseHandler = useCallback(
    (e: any) => {
      e.preventDefault();
      onClear && onClear();
    },
    [onClear],
  );
  return (
    <Tag
      size={size === "sm" ? "2xs" : "xs"}
      onClick={onClick}
      iconRight={
        <ControlsCloseSmall
          onClick={onCloseHandler}
          className="cursor-pointer"
        />
      }
      isUppercase={isUppercase}
      {...rest}
    >
      {children}
    </Tag>
  );
};

const SelectButton = Object.assign(SelectButtonRoot, {
  Label,
  FloatingLabel,
  Placeholder,
  Control,
  Input,
  Value,
  Chip,
  InsetInput,
});

export default SelectButton;
