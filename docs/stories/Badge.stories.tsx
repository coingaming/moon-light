import { Badge as BadgeComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BadgeComponent> = {
  component: BadgeComponent,
  title: "Indicators & status/Badge",
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Sets the content displayed inside the badge.",
      control: "text",
      defaultValue: "Click me",
    },
    className: {
      description: "Customizes the badge styles.",
      type: "string",
      defaultValue: "",
    },
  },
};

export default meta;

type Story = StoryObj<typeof BadgeComponent>;

export const Badge: Story = {
  args: {
    children: "",
    className: "",
  },
};
