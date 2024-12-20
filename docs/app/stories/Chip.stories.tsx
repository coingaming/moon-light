import { Chip as ChipComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChipComponent> = {
  component: ChipComponent,
  title: "Moon DS/Chip",
  tags: ["autodocs"],
  argTypes: {
    isActive: {
      control: { type: "boolean" },
      description: "Determines whether the chip is active.",
    },
    size: {
      options: ["sm", "md"],
      control: { type: "select" },
      description: "Sets the size of the chip.",
    },
    isStroke: {
      control: { type: "boolean" },
      description: "Adds a border stroke to the chip when set to true.",
    },
    children: {
      control: "text",
      description: "Content to display inside the chip.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ChipComponent>;

export const Chip: Story = {
  args: {
    isActive: true,
    size: "md",
    isStroke: true,
    children: "To the moon",
  },
};
