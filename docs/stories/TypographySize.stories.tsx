import { Meta, StoryObj } from "@storybook/react";

type SizeType = {
  size: string;
};

const sizes = [
  "text-moon-9",
  "text-moon-10",
  "text-moon-12",
  "text-moon-14",
  "text-moon-16",
  "text-moon-18",
  "text-moon-20",
  "text-moon-24",
  "text-moon-32",
  "text-moon-40",
  "text-moon-48",
  "text-moon-56",
  "text-moon-64",
  "text-moon-72",
] as const;

const meta: Meta<SizeType> = {
  title: "Typography/Size",
  tags: ["autodocs"],
  argTypes: {
    size: {
      type: "string",
      description:
        "To change font size, use one of the predefined class names such as text-moon-XX. Those class names include a combination of font-size, line-height, and letter-spacing properties where applicable.",
      control: {
        type: "select",
      },
      options: sizes,
    },
  },
  render: ({ size }: { size: string }) => {
    const match = size.match(/-(\d+)$/);
    const sizeValue = match ? Number(match[1]) : null;

    return <p className={size}>Size {sizeValue}</p>;
  },
};

export default meta;

type Story = StoryObj<SizeType>;

export const Size: Story = {
  args: {
    size: "text-moon-20",
  },
};
