import React from "react";
import getDefaultValues from "./utils/getDefaultValues";
import { Meta, StoryObj } from "@storybook/react";
import { MenuItem as MenuItemComponent } from "@heathmont/moon-core-tw";

const defaultValues = {
  isSelected: false,
  isActive: false,
  className: "",
};

const meta: Meta<typeof MenuItemComponent> = {
  title: "Moon DS/MenuItem",
  component: MenuItemComponent,
  tags: ["autodocs"],
  argTypes: {
    isSelected: {
      control: "boolean",
      type: "boolean",
      description: "Define whether the element is selected",
    },
    isActive: {
      control: "boolean",
      type: "boolean",
      description: "Define whether the element is currently active",
    },
    className: {
      control: "text",
      type: "string",
      description: "Define custom class",
    },
  },
  render: ({ width, isSelected, isActive, className }) => {
    const rootProps = getDefaultValues(
      {
        width,
        isSelected,
        isActive,
        className,
      },
      defaultValues,
    );
    return <MenuItemComponent {...rootProps}>Menu Item</MenuItemComponent>;
  },
};

export default meta;

type Story = StoryObj<typeof MenuItemComponent>;

export const MenuItem: Story = {
  args: defaultValues,
};
