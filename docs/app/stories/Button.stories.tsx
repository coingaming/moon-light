import { Button as ButtonComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: "Moon DS/Button",
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Sets the content displayed inside the button.",
      control: "text",
      defaultValue: "Click me",
    },
    size: {
      description: "Defines the button size.",
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
      defaultValue: "md",
    },
    disabled: {
      description: "Disables the button when set to true.",
      options: [true, false],
      control: { type: "boolean" },
      defaultValue: false,
    },
    fullWidth: {
      description: "Expands the button to fill the container width.",
      options: [true, false],
      control: { type: "boolean" },
      defaultValue: false,
    },
    animation: {
      description: "Applies an animation effect to the button.",
      options: ["pulse", "progress", "success"],
      control: { type: "select" },
      defaultValue: "pulse",
    },
    variant: {
      description: "Sets the button style variant.",
      options: ["fill", "outline", "ghost", "primary", "secondary", "tertiary"],
      control: { type: "select" },
      defaultValue: "primary",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
  args: {
    children: "Click me",
    variant: "primary",
    size: "md",
    disabled: false,
    fullWidth: false,
    animation: "pulse",
  },
};
