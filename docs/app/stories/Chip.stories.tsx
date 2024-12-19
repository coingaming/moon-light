import { Chip as ChipComponent } from "@heathmont/moon-core-tw";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChipComponent> = {
  component: ChipComponent,
};

export default meta;
type Story = StoryObj<typeof ChipComponent>;

const args = {
  isActive: true,
  size: "md",
  isStroke: true,
  children: <span>To the moon</span>,
};

export const Chip: Story = {
  args,
};
