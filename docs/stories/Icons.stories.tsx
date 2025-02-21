import type { Meta, StoryObj } from "@storybook/react";
import {
  OtherFrame,
  ArrowsBoost,
  ChatChat,
  MailEnvelope,
} from "@heathmont/moon-icons-tw";
import getDefaultValues from "./utils/getDefaultValues";

type IconProps = {
  className?: string;
};

const defaultValues = { className: "" };

const meta: Meta<IconProps> = {
  title: "Content Display/Icons",
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Additional CSS class for the Icon.",
      type: "string",
    },
  },
  render: ({ className }) => {
    const rootProps = getDefaultValues({ className }, defaultValues);
    return (
      <div className="inline-flex">
        <OtherFrame {...rootProps} />
        <ArrowsBoost {...rootProps} />
        <ChatChat {...rootProps} />
        <MailEnvelope {...rootProps} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<IconProps>;

export const Avatar: Story = {
  args: defaultValues,
};
