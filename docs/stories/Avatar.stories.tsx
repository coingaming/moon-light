import { Avatar as AvatarComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { DOCS_HIERARCHY } from "./constants";

const title = `${DOCS_HIERARCHY.CONTENT_DISPLAY}/Avatar`;

const meta: Meta<typeof AvatarComponent> = {
  component: AvatarComponent,
  title,
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
