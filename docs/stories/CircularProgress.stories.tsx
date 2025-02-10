import { CircularProgress as CircularProgressComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";

type CircularProgressComponentProps = typeof CircularProgressComponent;

const options = ["2xs", "xs", "sm", "md", "lg"] as const;
type OptionsType = (typeof options)[number];
const defaultValues = {
  className: "",
  size: "md" as OptionsType,
  value: 0,
};

const meta: Meta<CircularProgressComponentProps> = {
  component: CircularProgressComponent,
  title: "Moon DS/CircularProgress",
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Additional CSS class for the CircularProgress.",
      type: "string",
    },
    size: {
      description: "Size of CircularProgress",
      options,
      control: { type: "select" },
      table: {
        type: { summary: options.join(" | ") },
        defaultValue: { summary: "md" },
      },
    },
    value: {
      description: "Value of CircularProgress in percent (%)",
      table: {
        type: { summary: "number" },
      },
      defaultValue: 0,
    },
  },
  render: ({ className, size, value }) => {
    const rootProps = getDefaultValues(
      { className, size, value },
      defaultValues,
    );
    return <CircularProgressComponent {...rootProps} />;
  },
};

export default meta;

type Story = StoryObj<CircularProgressComponentProps>;

export const CircularProgress: Story = {
  args: defaultValues,
};
