import React from "react";
import { Listbox } from "@headlessui/react";
import mergeClassnames from "../../mergeClassnames/mergeClassnames";

export type BaseOptionType = {
  id?: number;
  label: string;
  value: string | number;
};

type OptionsProps = {
  options: BaseOptionType[];
  formatOptionLabel?: (data: BaseOptionType) => JSX.Element | string;
  menuWidth?: string;
};

const Options = ({ options, formatOptionLabel, menuWidth }: OptionsProps) => (
  <Listbox.Options
    className={mergeClassnames(
      menuWidth ? menuWidth : "w-full min-w-[18.75rem]",
      "max-h-[18.75rem] z-space-4 py-space-8 px-space-4 my-space-8 rounded-12 box-border bg-primary shadow-400 overflow-y-auto",
      "focus:outline-none",
    )}
  >
    {options.map((option, optionId) => (
      <Listbox.Option
        key={`${option.id}${optionId}`}
        value={option}
        className={({ active }) =>
          `p-space-8 mb-space-4 last:mb-0 cursor-pointer text-body-300 text-primary rounded-8 hover:bg-hover ${
            active && "bg-hover"
          }`
        }
      >
        {(formatOptionLabel && formatOptionLabel(option)) || option.label}
      </Listbox.Option>
    ))}
  </Listbox.Options>
);
export default Options;
