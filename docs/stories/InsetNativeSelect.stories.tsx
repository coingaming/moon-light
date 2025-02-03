import { InsetNativeSelect as InsetNativeSelectComponent } from "@heathmont/moon-core-tw";
import React, { useState } from "react";

export default {
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
      type: {},
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
};

export const InsetNativeSelect = (props: any) => {
  const [value, setValue] = useState("");
  return (
    <InsetNativeSelectComponent
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value="">Please select</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </InsetNativeSelectComponent>
  );
};
