import { Meta, StoryObj } from "@storybook/react";

type Size = { size: string };

const sizes = ["text-moon-9-caption", "text-moon-10-caption"] as const;

const meta: Meta<Size> = {
  title: "Typography/Caption",
  tags: ["autodocs"],
  argTypes: {
    size: {
      type: "string",
      description:
        "By default, there are just two caption sizes with different letter-spacing, and are defined with text-moon-XX-caption class names. You also need to make them uppercase.",
      control: {
        type: "select",
      },
      options: sizes,
    },
  },
  render: ({ size }: Size) => {
    const match = size.match(/-(\d+)-/);
    const sizeValue = match ? Number(match[1]) : null;
    return (
      <span className={`text-moon-${sizeValue}-caption uppercase`}>
        Size {sizeValue}
      </span>
    );
  },
};

export default meta;

type Story = StoryObj<Size>;

export const Caption: Story = {
  args: {
    size: "text-moon-9-caption",
  },
};
