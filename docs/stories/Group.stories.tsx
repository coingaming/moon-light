import { Group as GroupComponent, Hint } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";
import { GenericInfo } from "@heathmont/moon-icons-tw";
import { basicOptions } from "./mockData/basicOptions";

type GroupComponentProps = typeof GroupComponent;

const options = ["sm", "md", "lg"] as const;
type OptionsType = (typeof options)[number];
const orientation = ["vertical", "horizontal"] as const;
type OrientationType = (typeof orientation)[number];

const defaultValues = {
  className: "",
  size: "md" as OptionsType,
  orientation: "vertical" as OrientationType,
  error: false,
};

const meta: Meta<GroupComponentProps> = {
  component: GroupComponent,
  title: "Components/Group",
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Additional CSS class for the Group.",
      type: "string",
    },
    size: {
      description: "Size of Group",
      options,
      control: { type: "select" },
      table: {
        type: { summary: options.join(" | ") },
        defaultValue: { summary: "md" },
      },
    },
    error: {
      description: "Set valid/non-valid",
      table: {
        type: { summary: "boolean" },
      },
    },
    orientation: {
      description: "Two ways you can stack your input groups.",
      options: orientation,
      control: { type: "select" },
      table: {
        type: { summary: orientation.join(" | ") },
        defaultValue: { summary: "vertical" },
      },
    },
  },
  render: ({ className, orientation, size, error }) => {
    const rootProps = getDefaultValues(
      { className, orientation, size },
      defaultValues,
    );

    const selectOptions = basicOptions.map((opt) => (
      <option key={opt.name} value={opt.name}>
        Option {opt.name}
      </option>
    ));

    return (
      <>
        <GroupComponent {...rootProps} error={error}>
          <GroupComponent.FirstInput placeholder="First input" />
          <GroupComponent.LastInput placeholder="Last input" />
        </GroupComponent>
        {error && (
          <Hint error>
            <GenericInfo />
            Informative message
          </Hint>
        )}
        <GroupComponent {...rootProps}>
          <GroupComponent.FirstSelect>
            <option value="">First select</option>
            {selectOptions}
          </GroupComponent.FirstSelect>
        </GroupComponent>
        <GroupComponent {...rootProps}>
          <GroupComponent.FirstInsetInput placeholder="First inset input" />
          <GroupComponent.LastInsetInput placeholder="Last inset input" />
          <GroupComponent.LastSelect>
            <option value="">Last select</option>
            {selectOptions}
          </GroupComponent.LastSelect>
        </GroupComponent>

        <GroupComponent {...rootProps}>
          <GroupComponent.FirstInsetSelect label="First inset select">
            {selectOptions}
          </GroupComponent.FirstInsetSelect>
          <GroupComponent.LastInsetSelect label="Last inset select">
            {selectOptions}
          </GroupComponent.LastInsetSelect>
        </GroupComponent>
      </>
    );
  },
};

export default meta;

type Story = StoryObj<GroupComponentProps>;

export const Group: Story = {
  args: defaultValues,
};
