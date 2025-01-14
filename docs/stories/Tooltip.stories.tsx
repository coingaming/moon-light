import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip as TooltipComponent } from "@heathmont/moon-core-tw";

import { COLORS } from "./constants";

type TooltipType = typeof TooltipComponent;

const meta: Meta<TooltipType> = {
  title: "Moon DS/Tooltip",
  tags: ["autodocs"],
  component: TooltipComponent,
  argTypes: {},
  render: () => {
    return (
      <div className="flex">
        <TooltipComponent>
          <TooltipComponent.Trigger data-testid="tooltip-trigger">
            <div className="border border-beerus">Trigger</div>
          </TooltipComponent.Trigger>
          <TooltipComponent.Content>
            This is the default tooltip
            <TooltipComponent.Arrow />
          </TooltipComponent.Content>
        </TooltipComponent>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<TooltipType>;

export const Tooltip: Story = {
  args: {},
};
