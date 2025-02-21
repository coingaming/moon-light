import { Avatar as AvatarComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";

const defaultValues = {
  size: "md",
  className: "",
  imageUrl: "",
};

type AvatarProps = {
  imageUrl?: string;
  children?: React.ReactNode;
  className?: string;
};

const Avatar = ({ children, ...props }: AvatarProps) => (
  <AvatarComponent {...props}>{children}</AvatarComponent>
);

const meta: Meta<typeof AvatarComponent> = {
  component: AvatarComponent,
  title: "Content Display/Avatar",
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      control: { type: "select" },
      description: "Determines the size of the avatar.",
    },
    imageUrl: {
      type: "string",
      control: "text",
      description: "Define the image url to display",
    },
  },
  render: ({ size, className, imageUrl, ...args }) => {
    const rootProps = getDefaultValues(
      { size, className, imageUrl },
      defaultValues,
    );
    return <Avatar {...rootProps} {...args} />;
  },
};

export default meta;

type Story = StoryObj<typeof AvatarComponent>;

export const Playground: Story = {
  args: {
    size: "md",
    imageUrl: "",
  },
};
