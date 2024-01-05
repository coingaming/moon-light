import type { PropsTableProp } from "@/types";

export const dropdownProps: PropsTableProp[] = [
  {
    name: "value",
    type: ["T"],
    required: true,
    description: "The selected value.",
  },
  {
    name: "onChange",
    type: ["(value: T) => void"],
    required: true,
    description: "The function to call when a new option is selected.",
  },
  {
    name: "isError",
    type: ["boolean"],
    required: false,
    description: "Set valid/non-valid",
  },
  {
    name: "disabled",
    type: ["boolean"],
    required: false,
    description: "Set disabled/non-disabled",
  },
  {
    name: "size",
    type: ["sm", "md", "lg", "xl", "string"],
    required: false,
    defaultState: "md",
    description: "Size",
  },
  {
    name: "className",
    type: ["string"],
    required: false,
    description: "Tailwind classes for custom styles.",
  },
  {
    name: "position",
    type: [
      "top-start",
      "top-end",
      "bottom-start",
      "bottom-end",
      "right-start",
      "right-end",
      "left-start",
      "left-end",
      "top",
      "bottom",
      "right",
      "left",
    ],
    required: false,
    defaultState: "bottom",
    description: "Set placement for dropdown",
  },
  {
    name: "open",
    type: ["boolean"],
    required: false,
    description: "Whether or not the Listbox is open.",
  },
  {
    name: "multiple",
    type: ["boolean"],
    required: false,
    description: "Whether multiple options can be selected or not.",
  },
];

export const optionsProps: PropsTableProp[] = [
  {
    name: "menuWidth",
    type: ["string"],
    required: false,
    description: "Tailwind class for custom options container width.",
  },
  {
    name: "className",
    type: ["string"],
    required: false,
    description: "Tailwind classes for custom styles.",
  },
];

export const optionProps: PropsTableProp[] = [
  {
    name: "value",
    type: ["T"],
    required: false,
    description: "The option value.",
  },
  {
    name: "active",
    type: ["boolean"],
    required: false,
    description: "Whether or not the option is the active/focused option.",
  },
  {
    name: "selected",
    type: ["boolean"],
    required: false,
    description: "Whether or not the option is the selected option.",
  },
];

export const selectProps: PropsTableProp[] = [
  {
    name: "label",
    type: ["JSX.Element | string"],
    required: false,
    description: "Label title",
  },
  {
    name: "placeholder",
    type: ["JSX.Element | string"],
    required: false,
    description: "Placeholder",
  },
  {
    name: "className",
    type: ["string"],
    required: false,
    description: "Tailwind classes for custom styles (only for button).",
  },
];

export const multiSelectProps: PropsTableProp[] = [
  {
    name: "label",
    type: ["JSX.Element | string"],
    required: false,
    description: "Label title",
  },
  {
    name: "placeholder",
    type: ["JSX.Element | string"],
    required: false,
    description: "Placeholder",
  },
  {
    name: "className",
    type: ["string"],
    required: false,
    description: "Tailwind classes for custom styles (only for button).",
  },
  {
    name: "counter",
    type: ["Number"],
    required: false,
    defaultState: "0",
    description: "Number of selected options",
  },
];

export const hiddenInputProps: PropsTableProp[] = [
  {
    name: "name",
    type: ["string"],
    required: false,
    description: "Label title",
  },
  {
    name: "className",
    type: ["string"],
    required: false,
    description: "Tailwind classes for custom styles.",
  },
  {
    name: "value",
    type: ["string", "number", "readonly string[]", "undefined"],
    required: false,
    description: "Input value",
  },
];
