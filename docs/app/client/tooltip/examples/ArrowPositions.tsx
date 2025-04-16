"use client";

import { Tooltip, Chip } from "@heathmont/moon-core-tw";

const ArrowPositions = () => (
  <>
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-space-8 w-full">
      <Tooltip>
        <Tooltip.Trigger>
          <Chip className="border border-primary">top-start</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="top-start">
          Top-start position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip className="border border-primary">top-center (default)</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content>
          Top-center is default position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip className="border border-primary">top-end</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="top-end">
          Top-end position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip className="border border-primary">right</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="right">
          Right side position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip className="border border-primary">bottom-start</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="bottom-start">
          Bottom-start position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip className="border border-primary">bottom-center</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="bottom-center">
          Bottom-center position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip className="border border-primary">bottom-end</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="bottom-end">
          Bottom-end position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip className="border border-primary">left</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="left">
          Left side position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
    </div>
  </>
);

export default ArrowPositions;
