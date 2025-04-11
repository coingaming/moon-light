"use client";

import { Popover, Button, Chip, MenuItem } from "@heathmont/moon-core-tw";
import { ControlsChevronDown } from "@heathmont/moon-icons-tw";

const TriggerElements = () => {
  return (
    <div className="flex align-middle justify-around items-center w-full gap-space-8">
      <Popover>
        <Popover.Trigger data-testid="popover-trigger">
          <Button>Button</Button>
        </Popover.Trigger>
        <Popover.Panel className="p-space-8 flex flex-col gap-space-4">
          <Content />
        </Popover.Panel>
      </Popover>

      <Popover position="bottom-end">
        <Popover.Trigger data-testid="popover-trigger-arrow">
          <Chip
            iconOnly={<ControlsChevronDown className="text-heading-200" />}
            aria-label="Trigger"
            data-testid="popover-trigger-arrow-inner"
          />
        </Popover.Trigger>
        <Popover.Panel className="p-space-8 flex flex-col gap-space-4">
          <Content />
        </Popover.Panel>
      </Popover>

      <Popover position="bottom-start">
        <Popover.Trigger data-testid="popover-trigger-text">
          <span
            className="text-body-300 text-secondary cursor-pointer hover:text-brand"
            data-testid="popover-trigger-text-inner"
          >
            Open popover
          </span>
        </Popover.Trigger>
        <Popover.Panel className="p-space-8 flex flex-col gap-space-4">
          <Content />
        </Popover.Panel>
      </Popover>
    </div>
  );
};

const Content: React.FC = () => (
  <div data-testid="popover-content">
    <MenuItem>Tournaments</MenuItem>
    <MenuItem>Promotions</MenuItem>
    <MenuItem>Providers</MenuItem>
  </div>
);
export default TriggerElements;
