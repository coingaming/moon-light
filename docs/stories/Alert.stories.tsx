import { Alert as AlertComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";

const meta: Meta<typeof AlertComponent> = {
  title: "Moon DS/Alert",
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Additional CSS class for the alert.",
      type: "string",
    },
  },
  render: ({ className, children, ...arg }) => {
    const rootProps = getDefaultValues({ className }, { className: "" });
    return <AlertComponent {...rootProps}>{children}</AlertComponent>;
  },
};

export default meta;

type Story = StoryObj<typeof AlertComponent>;

export const Alert: Story = {
  args: {
    className: "",
    children: "Default Alert",
  },
};
