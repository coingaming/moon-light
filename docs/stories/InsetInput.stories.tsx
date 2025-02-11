import type { Meta, StoryObj } from "@storybook/react";
import { InsetInput as InsetInputComponent } from "@heathmont/moon-core-tw";

type InsetInputComponentType = typeof InsetInputComponent;

const meta: Meta<InsetInputComponentType> = {
  title: "Moon DS/InsetInput",
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Size of the InsetInput",
      table: {
        type: {},
        defaultValue: { summary: "md" },
      },
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    type: {
      description: "Type of the InsetInput",
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
      description: "Custom placeholder for the Insetinput.",
      type: "string",
    },
    error: {
      description: "Sets error state for Insetinput",
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
      description: "Sets readonly state for Insetinput",
      table: {
        type: {},
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    className: {
      description: "Additional CSS class for the Insetinput.",
      type: "string",
    },
  },
  render: ({ size, placeholder, type, ...args }) => (
    <InsetInputComponent
      size={size}
      placeholder={placeholder}
      type={type}
      {...args}
    >
      <InsetInputComponent.Label>Label</InsetInputComponent.Label>
    </InsetInputComponent>
  ),
};

export default meta;

type Story = StoryObj<InsetInputComponentType>;

export const InsetInput: Story = {
  args: {
    placeholder: "placeholder",
    error: false,
    disabled: false,
    readOnly: false,
    className: "",
    type: "text",
  },
};
