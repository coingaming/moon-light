import { Meta, StoryObj } from "@storybook/react";
import { captionsSizes } from "./constants";

type Size = { size: string };

const meta: Meta<Size> = {
  title: "Typography/Caption",
  tags: ["autodocs"],
  argTypes: {
    size: {
      table: {
        type: {
          summary: captionsSizes.join(" | "),
        },
      },
      description:
        "By default, there are just two caption sizes with different letter-spacing, and are defined with text-moon-XX-caption class names. You also need to make them uppercase.",
      control: {
        type: "select",
      },
      options: captionsSizes,
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
