"use client";

import { Tooltip, Chip } from "@heathmont/moon-core-tw";

const Customization = () => (
  <>
    <Tooltip>
      <Tooltip.Trigger>
        <Chip className="border border-beerus">Custom background color</Chip>
      </Tooltip.Trigger>
      <Tooltip.Content className="bg-chichi text-goku">
        Custom background color
        <Tooltip.Arrow className="bg-chichi text-goku" />
      </Tooltip.Content>
    </Tooltip>
    <Tooltip>
      <Tooltip.Trigger>
        <Chip className="border border-beerus">Custom fonts</Chip>
      </Tooltip.Trigger>
      <Tooltip.Content className="text-moon-18 text-krillin font-medium">
        Custom fonts
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
    <Tooltip>
      <Tooltip.Trigger>
        <Chip className="border border-beerus">Without arrow</Chip>
      </Tooltip.Trigger>
      <Tooltip.Content>Without arrow</Tooltip.Content>
    </Tooltip>
    <Tooltip>
      <Tooltip.Trigger>
        <Chip className="border border-beerus">Without shadow</Chip>
      </Tooltip.Trigger>
      <Tooltip.Content className="shadow-none drop-shadow-none">
        Without shadow
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  </>
);

export default Customization;
