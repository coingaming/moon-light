import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";
import { Progress as ProgressComponent } from "@heathmont/moon-core-tw";

const sizes = ["6xs", "5xs", "4xs", "3xs", "2xs"] as const;
type SizesOptionsType = (typeof sizes)[number];

const defaultValues = {
  size: "2xs" as SizesOptionsType,
  value: 0,
  className: "",
};

const meta: Meta<typeof ProgressComponent> = {
  title: "Components/Progress",
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Set the size value",
      control: {
        type: "select",
      },
      options: sizes,
      table: {
        type: {
          summary: sizes.join(" | "),
        },
      },
      defaultValue: {
        summary: "2xs",
      },
    },
    value: {
      description: "Set the progress value",
      type: "number",
      control: "number",
      defaultValue: {
        summary: 0,
      },
    },
    className: {
      description: "Add an extra class for styling",
      type: "string",
    },
  },
  render: ({ size, value, className }) => {
    const rootProps = getDefaultValues(
      { size, value, className },
      defaultValues,
    );
    return <ProgressComponent {...rootProps} />;
  },
};

export default meta;

type Story = StoryObj<typeof ProgressComponent>;

export const Progress: Story = {
  args: defaultValues,
};
