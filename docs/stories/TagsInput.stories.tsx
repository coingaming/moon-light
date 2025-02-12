import { TagsInput as TagsInputComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";
import { useCallback } from "react";
import { useArgs } from "@storybook/preview-api";
import { inputSizes, inputTypes } from "./constants";

const DEFAULT_SIZE = "md";

type SizeType = (typeof inputSizes)[number];

const defaultValues = {
  selected: [],
  type: "text",
  size: DEFAULT_SIZE as SizeType,
};

const meta: Meta<typeof TagsInputComponent> = {
  title: "Moon DS/TagsInput",
  tags: ["autodocs"],
  argTypes: {
    selected: {
      description: "The selected dataset",
      control: "object",
      table: {
        type: {
          summary: "string[]",
        },
      },
      defaultValue: {
        summary: "[]",
      },
    },
    label: {
      description: "Add label title",
      control: "text",
      type: "string",
    },
    size: {
      description: "Set input sizing",
      control: "select",
      options: inputSizes,
      defaultValue: {
        summary: DEFAULT_SIZE,
      },
    },
    type: {
      description: "Set input type",
      control: "select",
      options: inputTypes,
      table: {
        type: {
          summary: inputTypes.join(" | "),
        },
      },
      defaultValue: {
        summary: "text",
      },
    },
    placeholder: {
      description: "Set placeholder for input",
      type: "string",
      control: "text",
    },
    isError: {
      type: "boolean",
      control: "boolean",
      description: "Sets error state for input",
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "Set disabled/non-disabled",
    },
    className: {
      description: "Add CSS classes for customization",
      type: "string",
      control: "text",
    },
    onEnter: {
      description:
        "The function to select the text and append it to the tag set",
      type: "string",
      control: "object",
    },
    onClear: {
      description: "The function to remove the selected tag",
      type: "function",
      control: "object",
    },
  },
  render: ({ size, type, isError, disabled, className }) => {
    const [{ selected = [] }, updateArgs] = useArgs();

    const onEnter = useCallback(
      (value: string) => {
        updateArgs({ selected: [...selected, value] });
      },
      [selected],
    );

    const onClear = useCallback(
      (index: number) => {
        updateArgs({
          selected: selected.filter((item: string, id: number) => id !== index),
        });
      },
      [selected],
    );

    const rootProps = getDefaultValues(
      { size, isError, disabled, className, type },
      defaultValues,
    );

    return (
      <div className="w-full max-w-sm">
        <TagsInputComponent
          selected={selected}
          onEnter={onEnter}
          onClear={onClear}
          isError={isError}
          disabled={disabled}
          {...rootProps}
        >
          {selected.map((text: string, index: number) => (
            <TagsInputComponent.SelectedItem
              key={index}
              index={index}
              label={text}
            />
          ))}
        </TagsInputComponent>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof TagsInputComponent>;

export const TagsInput: Story = {
  args: {
    ...defaultValues,
    placeholder: "",
    label: "",
    isError: false,
    disabled: false,
    className: "",
  },
};
