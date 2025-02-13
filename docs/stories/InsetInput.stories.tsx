import type { Meta, StoryObj } from "@storybook/react";
import { InsetInput as InsetInputComponent } from "@heathmont/moon-core-tw";
import { inputTypes } from "./constants";
import getDefaultValues from "./utils/getDefaultValues";

type InsetInputComponentType = typeof InsetInputComponent;

const defaultValues = {
  placeholder: "",
  error: false,
  disabled: false,
  readOnly: false,
  className: "",
  type: "text",
};

const meta: Meta<InsetInputComponentType> = {
  title: "Components/InsetInput",
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "Type of the InsetInput",
      table: {
        type: { summary: inputTypes.join(" | ") },
        defaultValue: { summary: "text" },
      },
      control: { type: "select" },
      options: inputTypes,
    },
    placeholder: {
      description: "Custom placeholder for the Insetinput.",
      type: "string",
    },
    error: {
      description: "Sets error state for Insetinput",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    disabled: {
      description: "Set disabled/non-disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    readOnly: {
      description: "Sets readonly state for Insetinput",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    className: {
      description: "Additional CSS class for the Insetinput.",
      type: "string",
    },
  },
  render: ({
    placeholder,
    error,
    type,
    disabled,
    readOnly,
    className,
    ...args
  }) => {
    const rootProps = getDefaultValues(
      { placeholder, error, type, disabled, readOnly, className },
      defaultValues,
    );
    return (
      <InsetInputComponent {...rootProps} {...args}>
        <InsetInputComponent.Label>Label</InsetInputComponent.Label>
      </InsetInputComponent>
    );
  },
};

export default meta;

type Story = StoryObj<InsetInputComponentType>;

export const InsetInput: Story = {
  args: defaultValues,
};
