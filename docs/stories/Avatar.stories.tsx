import { Avatar as AvatarComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AvatarComponent> = {
  component: AvatarComponent,
};

export default meta;
type Story = StoryObj<typeof AvatarComponent>;

export const Avatar: Story = {
  args: {
    size: "sm",
    // children: <span>Alexander</span>,
  },
};
