"use client";

import { Tooltip, Chip } from "@heathmont/moon-core-tw";

const Customization = () => (
  <>
    <Tooltip>
      <Tooltip.Trigger>
        <Chip className="border border-primary">Custom background color</Chip>
      </Tooltip.Trigger>
      <Tooltip.Content className="bg-negative text-force-light">
        Custom background color
        <Tooltip.Arrow className="bg-negative text-force-light" />
      </Tooltip.Content>
    </Tooltip>
    <Tooltip>
      <Tooltip.Trigger>
        <Chip className="border border-primary">Custom fonts</Chip>
      </Tooltip.Trigger>
      <Tooltip.Content className="text-heading-100 text-caution">
        Custom fonts
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
    <Tooltip>
      <Tooltip.Trigger>
        <Chip className="border border-primary">Without arrow</Chip>
      </Tooltip.Trigger>
      <Tooltip.Content>Without arrow</Tooltip.Content>
    </Tooltip>
    <Tooltip>
      <Tooltip.Trigger>
        <Chip className="border border-primary">Without shadow</Chip>
      </Tooltip.Trigger>
      <Tooltip.Content className="shadow-none drop-shadow-none">
        Without shadow
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  </>
);

export default Customization;
