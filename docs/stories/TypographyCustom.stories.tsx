import { Meta, StoryObj } from "@storybook/react";
import { COLORS, FONT_WEIGHTS, TEXT_DECORATIONS } from "./constants";

const colorsValues = COLORS.map((color) => `text-${color}`);
type Color = (typeof colorsValues)[number];
type FontWeightType = (typeof FONT_WEIGHTS)[number];
type TextDecorationType = (typeof TEXT_DECORATIONS)[number];

type CustomType = {
  weight: FontWeightType;
  color: Color;
  textDecoration: TextDecorationType;
};

const meta: Meta<CustomType> = {
  title: "Typography/Custom",
  tags: ["autodocs"],
  argTypes: {
    color: {
      description: "Class name to set color",
      control: {
        type: "select",
      },
      options: colorsValues,
      table: {
        type: {
          summary: colorsValues.join(" | "),
        },
      },
    },
    weight: {
      description: "Class name to set font-weight",
      control: {
        type: "select",
      },
      options: FONT_WEIGHTS,
      table: {
        type: {
          summary: FONT_WEIGHTS.join(" | "),
        },
      },
    },
    textDecoration: {
      description: "Class name to set text-decoration",
      control: {
        type: "select",
      },
      options: TEXT_DECORATIONS,
      table: {
        type: {
          summary: TEXT_DECORATIONS.join(" | "),
        },
      },
    },
  },
  render: ({ color, textDecoration, weight }: CustomType) => {
    return (
      <div className="grid grid-flow-col">
        <p className={color}>Color: {color}</p>
        <p className={weight}>Font-weight: {weight}</p>
        <p className={textDecoration}>Text-transform: {textDecoration}</p>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<CustomType>;

export const Custom: Story = {
  args: {
    color: "text-piccolo",
    weight: "font-medium",
    textDecoration: "underline",
  },
};
