import { Loader as LoaderComponent } from "@heathmont/moon-core-tw";
import { Meta } from "@storybook/react";
import React from "react";
import getDefaultValues from "./utils/getDefaultValues";

const defaultProps = {
  color: "border-hit",
  size: "md",
  ariaLabel: "Loading",
};

const meta: Meta<typeof LoaderComponent> = {
  title: "Components/Loader",
  component: LoaderComponent,
  tags: ["autodocs"],
  argTypes: {
    color: {
      type: "string",
      defaultValue: "border-hit",
      description: "Set the border color of the loader",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      table: {
        type: {
          summary: "sm | md | lg",
        },
      },
      type: "string",
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Set the loader size",
    },
    ariaLabel: {
      control: "text",
      defaultValue: "Loading",
      description: "Accessibility label for the loader",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
  render: ({ color, size, ariaLabel }) => {
    const rootProps = getDefaultValues(
      { color, size, ariaLabel },
      defaultProps,
    );
    return <LoaderComponent {...rootProps} />;
  },
};

export default meta;

export const Loader = {
  args: defaultProps,
};
