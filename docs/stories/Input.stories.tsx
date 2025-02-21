import type { Meta, StoryObj } from "@storybook/react";
import { Input as InputComponent } from "@heathmont/moon-core-tw";
import { DOCS_HIERARCHY } from "./constants";

type InputComponentType = typeof InputComponent;

const title = `${DOCS_HIERARCHY.FORMS_SELECTION_CONTROLS}/Input`;

const meta: Meta<InputComponentType> = {
  title,
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Size of the Input",
      table: {
        type: {},
        defaultValue: { summary: "md" },
      },
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    type: {
      description: "Type of the Input",
      table: {
        type: {},
        defaultValue: { summary: "text" },
      },
      control: { type: "select" },
      options: [
        "date",
        "datetime-local",
        "email",
        "number",
        "password",
        "search",
        "tel",
        "text",
        "time",
        "url",
      ],
    },
    placeholder: {
      description: "Custom placeholder for the input.",
      type: "string",
    },
    error: {
      description: "Sets error state for input",
      table: {
        type: {},
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    disabled: {
      description: "Set disabled/non-disabled",
      table: {
        type: {},
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    readOnly: {
      description: "Sets readonly state for input",
      table: {
        type: {},
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    className: {
      description: "Additional CSS class for the input.",
      type: "string",
    },
  },
  render: ({ size, placeholder, type, ...args }) => (
    <InputComponent
      size={size}
      placeholder={placeholder}
      type={type}
      {...args}
    />
  ),
};

export default meta;

type Story = StoryObj<InputComponentType>;

export const Input: Story = {
  args: {
    placeholder: "this is a test",
    error: false,
    disabled: false,
    readOnly: false,
    className: "",
    type: "text",
  },
};
