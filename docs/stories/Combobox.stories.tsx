import {
  Combobox as ComboboxComponent,
  MenuItem,
} from "@heathmont/moon-core-tw";
import { ControlsChevronDownSmall } from "@heathmont/moon-icons-tw";
import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";
import { useState } from "react";
import { people } from "./mockData/people";
import { positions } from "./constants";

type ComboboxComponentProps = typeof ComboboxComponent;

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
  nullable: false,
};

const filter = (
  query: string,
  people: { id: number; label: string; value: string }[],
) => {
  return query === ""
    ? people
    : people.filter(({ value }) =>
        value
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, "")),
      );
};

const meta: Meta<ComboboxComponentProps> = {
  component: ComboboxComponent,
  title: "Forms & selection controls/Combobox",
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Additional CSS class for the Combobox.",
      type: "string",
    },
    size: {
      description: "Size of Combobox",
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
      description: "The function to call when a new option is selected",
      table: {
        type: { summary: "(value: unknown) => void" },
      },
    },
    onQueryChange: {
      description: "The function to call when the filter query is changing",
      table: {
        type: { summary: "(value: unknown) => void" },
      },
    },
    onClear: {
      description:
        "The function to call when the selected options at MultiSelect Combobox type are being cleared",
      table: {
        type: { summary: "(index?: number | string) => void" },
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
      description: "Set placement for combobox",
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
    nullable: {
      description: "Whether the selected value can be cleared or not",
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
    nullable,
    value,
  }) => {
    const rootProps = getDefaultValues(
      { className, size, position, isError, disabled, multiple, nullable },
      defaultValues,
    );

    const [selected, setSelected] = useState(value);
    const [query, setQuery] = useState<string>("");
    const filteredPeople0 = filter(query, people);

    return (
      <ComboboxComponent
        value={selected}
        onChange={setSelected}
        onQueryChange={setQuery}
        {...rootProps}
      >
        {({ open }) => (
          <>
            <ComboboxComponent.Trigger open={open} onClose={console.log}>
              <ComboboxComponent.Input
                open={open}
                placeholder={"Choose a name..."}
                displayValue={({ label }) => label}
              />
              <ComboboxComponent.Button open={open}>
                <ControlsChevronDownSmall />
              </ComboboxComponent.Button>
            </ComboboxComponent.Trigger>
            <ComboboxComponent.Transition>
              <ComboboxComponent.Options>
                {filteredPeople0.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-trunks">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople0.map((person, index) => (
                    <ComboboxComponent.Option value={person} key={index}>
                      {({ selected, active }) => (
                        <div>
                          <MenuItem isActive={active} isSelected={selected}>
                            {person.label}
                          </MenuItem>
                        </div>
                      )}
                    </ComboboxComponent.Option>
                  ))
                )}
              </ComboboxComponent.Options>
            </ComboboxComponent.Transition>
            <ComboboxComponent.Hint>
              Informative message holder (default)
            </ComboboxComponent.Hint>
          </>
        )}
      </ComboboxComponent>
    );
  },
};

export default meta;

type Story = StoryObj<ComboboxComponentProps>;

export const Combobox: Story = {
  args: {
    ...defaultValues,
    onQueryChange: undefined,
    onChange: undefined,
    onClear: undefined,
    value: undefined,
  },
};
