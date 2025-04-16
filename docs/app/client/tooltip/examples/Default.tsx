"use client";

import { Tooltip, Chip } from "@heathmont/moon-core-tw";

const Default = () => (
  <Tooltip>
    <Tooltip.Trigger data-testid="tooltip-trigger">
      <Chip className="border border-primary">Trigger</Chip>
    </Tooltip.Trigger>
    <Tooltip.Content>
      This is the default tooltip
      <Tooltip.Arrow />
    </Tooltip.Content>
  </Tooltip>
);

export default Default;
