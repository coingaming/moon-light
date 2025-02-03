import { Loader as LoaderComponent } from "@heathmont/moon-core-tw";
import React from "react";

type LoaderProps = {
  color?: string;
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
};

export default {
  title: "Moon DS/Loader",
  component: LoaderComponent,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "text",
      type: "string",
      defaultValue: "border-hit",
      description: "Set the border color of the loader",
    },
    size: {
      type: "string",
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Set the loader size",
    },
    ariaLabel: {
      type: "string",
      control: "text",
      defaultValue: "Loading",
      description: "Accessibility label for the loader",
    },
  },
};

export const Loader = (props: LoaderProps) => <LoaderComponent {...props} />;
