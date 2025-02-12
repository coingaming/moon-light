import { IconButton as IconButtonComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import {
  iconButtonAnimations,
  IconButtonAsOption,
  iconButtonAsOptions,
  IconButtonSize,
  iconButtonSizes,
  IconButtonVariant,
  iconButtonVariants,
} from "./constants";
import { OtherFrame } from "@heathmont/moon-icons-tw";
import getDefaultValues, { DefaultValue } from "./utils/getDefaultValues";

const defaultValues: DefaultValue = {
  animation: undefined,
  as: "button",
  className: "",
  disabled: false,
  icon: <></>,
  size: "md" as IconButtonSize,
  variant: "fill" as IconButtonVariant,
};

const meta: Meta<typeof IconButtonComponent> = {
  title: "Moon DS/IconButton",
  tags: ["autodocs"],
  argTypes: {
    animation: {
      description: "Applies an animation effect to the Iconbutton.",
      options: iconButtonAnimations,
      control: { type: "select" },
      table: {
        type: {
          summary: [...iconButtonAnimations, "undefined"].join(" | "),
        },
      },
    },
    as: {
      description: "Rendered HTML element",
      options: iconButtonAsOptions,
      control: { type: "select" },
      table: {
        type: {
          summary: "React.ElementType",
        },
        defaultValue: { summary: "button" },
      },
    },
    className: {
      description: "Additional CSS class for the Form.",
      type: "string",
    },
    disabled: {
      description: "Disables the Iconbutton when set to true.",
      type: "boolean",
      defaultValue: false,
    },
    icon: {
      description: "Button Icon as JSX.Element",
      table: {
        type: { summary: "JSX.Element" },
      },
    },
    size: {
      description: "Defines the Iconbutton size.",
      options: iconButtonSizes,
      control: { type: "select" },
      table: {
        type: { summary: iconButtonSizes.join(" | ") },
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      description: "Sets the Iconbutton style variant.",
      options: iconButtonVariants,
      control: { type: "select" },
      table: {
        type: {
          summary: iconButtonVariants.join(" | "),
        },
        defaultValue: { summary: "fill" },
      },
    },
  },
  render: ({ animation, as: asValue, className, disabled, size, variant }) => {
    const rootProps = getDefaultValues(
      {
        animation,
        as: asValue as IconButtonAsOption,
        className,
        disabled,
        size,
        variant,
      },
      defaultValues,
    );
    return (
      <IconButtonComponent
        onClick={() => alert("click")}
        icon={<OtherFrame />}
        {...rootProps}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof IconButtonComponent>;

export const IconButton: Story = {
  args: defaultValues,
};
