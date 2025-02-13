import { Avatar as AvatarComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AvatarComponent> = {
  component: AvatarComponent,
  title: "Components/Avatar",
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      control: { type: "select" },
      description: "Determines the size of the avatar.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof AvatarComponent>;

export const Avatar: Story = {
  args: {
    size: "sm",
  },
};
