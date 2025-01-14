import type { Meta, StoryObj } from "@storybook/react";
import { NativeSelect as NativeSelectComponent } from "@heathmont/moon-core-tw";

type NativeSelectType = typeof NativeSelectComponent;

const meta: Meta<NativeSelectType> = {
  title: "Moon DS/Select",
  tags: ["autodocs"],
  component: NativeSelectComponent,
  argTypes: {
    size: {
      type: "string",
    },
  },
  render: () => {
    return (
      <>
        <NativeSelectComponent>
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
          <option value="China">China</option>
          <option value="Germany">Germany</option>
        </NativeSelectComponent>
      </>
    );
  },
};

export default meta;

type Story = StoryObj<NativeSelectType>;

export const Select: Story = {
  args: {
    size: "md",
  },
};
