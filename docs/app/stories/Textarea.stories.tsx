import { Textarea as TextareaComponent } from "@heathmont/moon-core-tw";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextareaComponent> = {
  component: TextareaComponent,
};

export default meta;
type Story = StoryObj<typeof TextareaComponent>;

export const Textarea: Story = {
  args: {
    error: false,
  },
};
