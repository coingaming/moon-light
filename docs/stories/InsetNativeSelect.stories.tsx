import { InsetNativeSelect as InsetNativeSelectComponent } from "@heathmont/moon-core-tw";
import React, { useState } from "react";
import getDefaultValues from "./utils/getDefaultValues";
import { Meta, StoryObj } from "@storybook/react";

type Size = "sm" | "md" | "lg";

const defaultValues = {
  label: "",
  size: "lg" as Size,
  disabled: false,
  error: false,
  readOnly: false,
};

const meta: Meta<typeof InsetNativeSelectComponent> = {
  title: "Moon DS/InsetNativeSelect",
  component: InsetNativeSelectComponent,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      type: "string",
      defaultValue: "Select an option",
      description: "The placeholder for the input",
    },
    size: {
      type: "string",
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Set the input size",
    },
    disabled: {
      control: "boolean",
      type: "boolean",
      description: "Set whether the input is disabled or not",
    },
    error: {
      control: "boolean",
      type: "boolean",
      description: "Set whether the input has an error or not",
    },
    readOnly: {
      type: "boolean",
      control: "boolean",
      description: "Set whether the input is for reading only or not",
    },
  },
  render: ({ label, className, size, disabled, error, readOnly }) => {
    const [value, setValue] = useState("");
    const rootProps = {
      label,
      ...getDefaultValues(
        {
          children: (<></>) as React.ReactNode,
          label,
          className,
          size,
          disabled,
          error,
          readOnly,
        },
        defaultValues,
      ),
    };
    return (
      <InsetNativeSelectComponent
        {...rootProps}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="">Please select</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </InsetNativeSelectComponent>
    );
  },
};

export default meta;

type Story = StoryObj<typeof InsetNativeSelectComponent>;

export const InsetNativeSelect: Story = {
  args: defaultValues,
};
