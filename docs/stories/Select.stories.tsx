import type { Meta, StoryObj } from "@storybook/react";
import { NativeSelect as NativeSelectComponent } from "@heathmont/moon-core-tw";

type NativeSelectType = typeof NativeSelectComponent;

const meta: Meta<NativeSelectType> = {
  title: "Forms & selection controls/Select",
  tags: ["autodocs"],
  component: NativeSelectComponent,
  argTypes: {
    size: {
      description: "Size of the Select",
      table: {
        type: {},
        defaultValue: { summary: "md" },
      },
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      description: "Select disabled",
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    readOnly: {
      description: "Select read only",
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    error: {
      description: "Select error",
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    className: {
      description: "Additional CSS class for the select.",
      type: "string",
    },
  },
  render: ({ size, ...args }) => {
    return (
      <NativeSelectComponent size={size} {...args}>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </NativeSelectComponent>
    );
  },
};

export default meta;

type Story = StoryObj<NativeSelectType>;

export const Select: Story = {
  args: {
    size: "md",
    disabled: false,
    error: false,
    className: "",
    readOnly: false,
  },
};
