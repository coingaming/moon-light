import type { Meta, StoryObj } from "@storybook/react";
import { FileInput as FileInputComponent } from "@heathmont/moon-core-tw";
import getDefaultValues, { DefaultValue } from "./utils/getDefaultValues";

type FileInputComponentType = typeof FileInputComponent;

const defaultValues: DefaultValue = {
  placeholder: "",
  size: "md",
  error: false,
  disabled: false,
  readOnly: false,
  className: "",
};

const meta: Meta<FileInputComponentType> = {
  title: "Moon DS/FileInput",
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Size of the FileInput",
      table: {
        type: {},
        defaultValue: { summary: "md" },
      },
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    placeholder: {
      description: "Custom placeholder for the Fileinput.",
      type: "string",
    },
    error: {
      description: "Sets error state for Fileinput",
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
      description: "Sets readonly state for Fileinput",
      table: {
        type: {},
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    className: {
      description: "Additional CSS class for the Fileinput.",
      type: "string",
    },
  },
  render: ({ size, placeholder, className, ...args }) => {
    const rootProps = getDefaultValues(
      { size, placeholder, className },
      defaultValues,
    );
    return <FileInputComponent {...rootProps} {...args} />;
  },
};

export default meta;

type Story = StoryObj<FileInputComponentType>;

export const FileInput: Story = {
  args: defaultValues,
};
