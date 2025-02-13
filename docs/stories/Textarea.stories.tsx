import { Textarea as TextareaComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextareaComponent> = {
  component: TextareaComponent,
  title: "Components/Textarea",
  tags: ["autodocs"],
  argTypes: {
    error: {
      control: { type: "boolean" },
      description: "Indicates whether the textarea has an error state.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the textarea when set to true.",
    },
    placeholder: {
      control: "text",
      description: "Displays placeholder text inside the textarea.",
    },
    value: {
      control: "text",
      description: "Sets the value of the textarea.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextareaComponent>;

export const Textarea: Story = {
  args: {
    error: false,
    disabled: false,
    placeholder: "Enter your text here...",
    value: "",
  },
};
