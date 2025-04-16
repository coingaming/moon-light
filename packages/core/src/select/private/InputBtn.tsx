import React from "react";
import { Listbox } from "@headlessui/react";
import mergeClassnames from "../../mergeClassnames/mergeClassnames";
import ControlsChevronDownSmall from "../../private/icons/ControlsChevronDownSmall";
import type { SelectSize } from "../Select";

type InputBtnProps = {
  size: SelectSize;
  isError?: boolean;
  open?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
};

const getSelectSize = (size?: SelectSize) => {
  switch (size) {
    case "xl":
      return "h-space-56 py-space-8 px-space-16 rounded-8";
    case "lg":
      return "h-space-48 py-space-12 px-space-16 rounded-8";
    case "sm":
      return "h-space-32 py-space-4 p-space-12 rounded-4";
    default:
      return "h-space-40 py-space-8 px-space-12 rounded-8";
  }
};
const InputBtn = ({
  size,
  isError,
  disabled,
  open,
  children,
  ...rest
}: InputBtnProps) => (
  <Listbox.Button
    {...rest}
    className={mergeClassnames(
      "flex items-center justify-between w-full bg-primary ring-1 ring-inset ring-primary duration-200",
      "transition-shadow hover:ring-2 focus:ring-2 focus:ring-active focus:outline-none",
      getSelectSize(size),
      isError &&
        "ring-2 ring-negative hover:ring-2 hover:ring-negative focus:ring-2 focus:ring-negative",
      disabled && "cursor-not-allowed",
    )}
  >
    {children}
    <ControlsChevronDownSmall
      className={mergeClassnames(
        "flex-shrink-0 transition-transform",
        size === "sm" ? "text-body-400" : "text-heading-200",
        open && "rotate-[-180deg]",
      )}
    />
  </Listbox.Button>
);

export default InputBtn;
