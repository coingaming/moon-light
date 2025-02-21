import { Meta, StoryObj } from "@storybook/react";
import { textSizes } from "./constants";

type SizeType = {
  size: string;
};

const meta: Meta<SizeType> = {
  title: "Content Display/Typography/Size",
  tags: ["autodocs"],
  argTypes: {
    size: {
      description:
        "To change font size, use one of the predefined class names such as text-moon-XX. Those class names include a combination of font-size, line-height, and letter-spacing properties where applicable.",
      control: {
        type: "select",
      },
      table: {
        type: {
          summary: textSizes.join(" | "),
        },
      },
      options: textSizes,
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
