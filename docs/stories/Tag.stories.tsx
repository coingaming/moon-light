import { Tag as TagComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";

const DEFAULT_SIZE_VALUE = "2xs";
const sizes = [DEFAULT_SIZE_VALUE, "xs"] as const;
type Size = (typeof sizes)[number];

const defaultValues = {
  size: "xs" as Size,
  isUppercase: true,
  className: "",
};

const meta: Meta<typeof TagComponent> = {
  title: "Moon DS/Tag",
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Elements to be rendered as children",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
      control: "object",
    },
    className: {
      description: "Add extra css class for custom styling",
      type: "string",
      control: "text",
    },
    iconLeft: {
      description: "Add an icon to be placed at the left side",
      table: {
        type: {
          summary: "ReactElement",
        },
      },
      control: "object",
    },
    iconRight: {
      description: "Add an icon to be placed at the right side",
      table: {
        type: {
          summary: "ReactElement",
        },
      },
      control: "object",
    },
    isUppercase: {
      description: "Whether the text is uppercase or not",
      type: "boolean",
      control: "boolean",
      defaultValue: {
        summary: true,
      },
    },
    size: {
      description: "Set the sizing of the element",
      table: {
        type: {
          summary: sizes.join(" | "),
        },
      },
      control: "select",
      options: sizes,
      defaultValue: {
        summary: DEFAULT_SIZE_VALUE,
      },
    },
  },
  render: ({ size, isUppercase, className, ...args }) => {
    const rootProps = getDefaultValues(
      { size, isUppercase, className },
      defaultValues,
    );
    return (
      <TagComponent {...rootProps} {...args}>
        Default
      </TagComponent>
    );
  },
};

export default meta;

type Story = StoryObj<typeof TagComponent>;

export const Tag: Story = {
  args: defaultValues,
};
