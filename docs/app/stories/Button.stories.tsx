import { Button as ButtonComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
  args: {
    children: <span>Click me</span>,
    variant: "primary",
    size: "xl",
    disabled: false,
    fullWidth: false,
    animation: "pulse",
  },
};
