import { Checkbox as CheckboxComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CheckboxComponent> = {
  component: CheckboxComponent,
  title: "Moon DS/Checkbox",
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "Custom label for the checkbox.",
      type: "string",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CheckboxComponent>;

export const Checkbox: Story = {
  args: {
    label: "this is a test",
  },
};
