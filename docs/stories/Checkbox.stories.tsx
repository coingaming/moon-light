import { Checkbox as CheckboxComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";

type CheckboxComponentProps = typeof CheckboxComponent;

const meta: Meta<CheckboxComponentProps> = {
  component: CheckboxComponent,
  title: "Components/Checkbox",
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "Custom label for the checkbox.",
      type: "string",
    },
    checked: {
      description: "Checkbox value",
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    indeterminate: {
      description:
        "Checkbox value when used in checkbox groups. It renders to one state of 'checked', 'unchecked' or 'mixed'.",
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    readOnly: {
      description: "Checkbox read only",
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      description: "Checkbox disabled",
      type: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    className: {
      description: "Additional CSS class for the checkbox.",
      type: "string",
    },
  },
  render: ({ label, checked, indeterminate, ...args }) => (
    <CheckboxComponent
      {...args}
      label={label}
      checked={checked}
      indeterminate={indeterminate}
    />
  ),
};

export default meta;

type Story = StoryObj<CheckboxComponentProps>;

export const Checkbox: Story = {
  args: {
    label: "",
    indeterminate: false,
    checked: false,
    className: "",
    disabled: false,
    readOnly: false,
  },
};
