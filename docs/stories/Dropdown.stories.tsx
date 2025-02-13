import {
  Dropdown as DropdownComponent,
  MenuItem,
} from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";
import { useState } from "react";
import { people } from "./mockData/people";
import { positions } from "./constants";

type People = {
  label?: string;
};

type DropdownComponentProps = typeof DropdownComponent;

const options = ["sm", "md", "lg", "xl"] as const;
type OptionsType = (typeof options)[number];

type Placement = (typeof positions)[number];

const defaultValues = {
  className: "",
  size: "md" as OptionsType,
  position: "bottom" as Placement,
  isError: false,
  disabled: false,
  multiple: false,
};

const meta: Meta<DropdownComponentProps> = {
  component: DropdownComponent,
  title: "Components/Dropdown",
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Additional CSS class for the Dropdown.",
      type: "string",
    },
    size: {
      description: "Size of Dropdown",
      options,
      control: { type: "select" },
      table: {
        type: { summary: options.join(" | ") },
        defaultValue: { summary: "md" },
      },
    },
    value: {
      description: "The selected value",
      control: { type: "object" },
      table: {
        type: { summary: "unknown" },
      },
    },
    onChange: {
      description: "The function to call when a new option is selected.",
      table: {
        type: { summary: "(value: unknown) => void" },
      },
    },
    isError: {
      description: "Set valid/non-valid",
      table: {
        type: { summary: "boolean" },
      },
    },
    disabled: {
      description: "Set disabled/non-disabled",
      table: {
        type: { summary: "boolean" },
      },
    },
    position: {
      description: "Set placement for Dropdown",
      options: positions,
      control: { type: "select" },
      table: {
        type: { summary: positions.join(" | ") },
        defaultValue: { summary: "bottom" },
      },
    },
    multiple: {
      description: "Whether multiple options can be selected or not",
      table: {
        type: { summary: "boolean" },
      },
    },
  },
  render: ({
    className,
    size,
    position,
    isError,
    disabled,
    multiple,
    value,
  }) => {
    const rootProps = getDefaultValues(
      { className, size, position, isError, disabled, multiple },
      defaultValues,
    );
    const [option, setOption] = useState<People>({ label: "Choose a name..." });

    return (
      <div className="w-56">
        <DropdownComponent value={option} onChange={setOption}>
          <DropdownComponent.Trigger className="p-2 cursor-pointer text-bulma hover:text-piccolo border border-beerus rounded-moon-i-sm w-full">
            {option?.label}
          </DropdownComponent.Trigger>

          <DropdownComponent.Options>
            {people.map((person, index) => (
              <DropdownComponent.Option value={person} key={index}>
                {({ selected, active }) => (
                  <MenuItem isActive={active} isSelected={selected}>
                    {person.label}
                  </MenuItem>
                )}
              </DropdownComponent.Option>
            ))}
          </DropdownComponent.Options>
        </DropdownComponent>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<DropdownComponentProps>;

export const Dropdown: Story = {
  args: {
    ...defaultValues,
    onChange: undefined,
    value: undefined,
  },
};
