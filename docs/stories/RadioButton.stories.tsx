import { Radio as RadioButtonComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DOCS_HIERARCHY } from "./constants";

const title = `${DOCS_HIERARCHY.FORMS_SELECTION_CONTROLS}/Radio`;

const meta: Meta<typeof RadioButtonComponent> = {
  component: RadioButtonComponent,
  title,
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Customizes the radio button styles.",
      type: "string",
    },
    value: {
      description: "Sets the value of the radio button.",
      table: {
        type: {
          summary: "string | number | undefined",
        },
      },
    },
    defaultValue: {
      description: "Sets the default value of the radio button.",
      table: {
        type: {
          summary: "string | number | undefined",
        },
      },
    },
    onChange: {
      description: "Called when the value of the radio button changes.",
      table: {
        type: {
          summary: "((value: string | number) => void) | undefined",
        },
      },
    },
    name: {
      description: "Sets the name of the radio button.",
      table: {
        type: {
          summary: "string | undefined",
        },
      },
    },
    disabled: {
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
      description: "Sets the disabled state of the radio button.",
    },
  },
  render: ({ className, disabled, name, value: initValue, defaultValue }) => {
    const [value, setValue] = useState(initValue);

    return (
      <RadioButtonComponent
        value={value}
        onChange={setValue}
        className={className}
        disabled={disabled}
        name={name}
        defaultValue={defaultValue}
      >
        <RadioButtonComponent.Option value="option1">
          <RadioButtonComponent.Indicator />
          Option 1
        </RadioButtonComponent.Option>
        <RadioButtonComponent.Option value="option2">
          <RadioButtonComponent.Indicator />
          Option 2
        </RadioButtonComponent.Option>
      </RadioButtonComponent>
    );
  },
};

export default meta;

type Story = StoryObj<typeof RadioButtonComponent>;

export const Radio: Story = {
  args: {
    className: "",
    disabled: false,
    name: "",
    value: "option1",
    onChange: () => {},
    defaultValue: "option2",
  },
};
