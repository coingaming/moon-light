"use client";

import { Popover, Chip } from "@heathmont/moon-core-tw";

const TooltipViewExample = () => {
  return (
    <Popover position="top">
      <Popover.Trigger data-testid="popover-trigger">
        <Chip>Trigger</Chip>
      </Popover.Trigger>
      <Popover.Panel className="w-auto min-w-[12rem] overflow-y-visible p-space-12 rounded-4 text-body-200 text-primary bg-primary">
        This is the popover with arrow (tooltip)
        <Popover.Arrow />
      </Popover.Panel>
    </Popover>
  );
};

export default TooltipViewExample;
