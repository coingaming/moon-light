import type { Meta, StoryObj } from "@storybook/react";
import { Input as InputComponent, Label } from "@heathmont/moon-core-tw";

type InputComponentType = typeof InputComponent;

const meta: Meta<InputComponentType> = {
  title: "Moon DS/Input",
  tags: ["autodocs"],
  component: InputComponent,
  render: ({ placeholder }) => (
    <>
      <InputComponent placeholder={placeholder} />
    </>
  ),
  argTypes: {
    placeholder: {
      description: "Custom label for the checkbox.",
      type: "string",
    },
  },
};

export default meta;

type Story = StoryObj<InputComponentType>;

export const Input: Story = {
  args: {
    placeholder: "this is a test",
  },
};
