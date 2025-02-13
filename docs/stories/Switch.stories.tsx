import { Switch as SwitchComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";
import { useArgs } from "@storybook/preview-api";

const sizes = ["2xs", "xs", "sm"] as const;
type Size = (typeof sizes)[number];

const defaultValues = {
  size: "sm" as Size,
  className: "",
  checked: false,
  name: "",
  value: undefined,
};

const meta: Meta<typeof SwitchComponent> = {
  title: "Components/Switch",
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Set component sizing",
      table: {
        type: {
          summary: sizes.join(" | "),
        },
      },
      control: {
        type: "select",
      },
      options: sizes,
      defaultValue: {
        summary: "sm",
      },
    },
    checked: {
      description: "Whether the switch element is checked or not",
      type: "boolean",
      control: "boolean",
      defaultValue: {
        summary: false,
      },
    },
    disabled: {
      description: "Whether the switch element is disabled or not",
      type: "boolean",
      control: "boolean",
    },
    name: {
      description: "The name used when using this component inside a form",
      type: "string",
      control: "text",
    },
    className: {
      description: "Add extra class for custom styling",
      type: "string",
      control: "text",
    },
    offIcon: {
      description: "Set icon for unchecked state",
      table: { type: { summary: "JSX.Element | string" } },
      control: "object",
    },
    value: {
      description:
        "The value used when using this component inside a form, if it is checked",
      type: "string",
      control: "text",
    },
    onIcon: {
      description: "Set icon for checked state",
      table: {
        type: {
          summary: "JSX.Element | string",
        },
      },
      control: "object",
    },
    onChange: {
      description: "The function to call when the switch is toggled",
      type: "function",
      control: "object",
    },
  },
  render: ({ size, className, name, disabled, value }) => {
    const [{ checked }, updateArgs] = useArgs();
    const rootProps = getDefaultValues(
      { size, className, checked, name },
      defaultValues,
    );
    return (
      <SwitchComponent
        checked={checked}
        onChange={(value) => {
          updateArgs({ checked: value });
        }}
        data-tests="test-id"
        aria-label="Default Switch"
        disabled={disabled}
        value={value}
        {...rootProps}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof SwitchComponent>;

export const Accordion: Story = {
  args: {
    ...defaultValues,
    disabled: false,
    name: "",
    offIcon: undefined,
    value: "",
    onIcon: undefined,
    onChange: () => null,
  },
};
