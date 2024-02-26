"use client";

import { Tooltip, Chip } from "@heathmont/moon-core-tw";

const ArrowPositions = () => (
  <>
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 w-full">
      <Tooltip>
        <Tooltip.Trigger>
          <Chip className="border border-beerus">top-start</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="top-start">
          Top-start position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip className="border border-beerus">top-center (default)</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content>
          Top-center is default position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip className="border border-beerus">top-end</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="top-end">
          Top-end position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip className="border border-beerus">right</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="right">
          Right side position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip className="border border-beerus">bottom-start</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="bottom-start">
          Bottom-start position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip className="border border-beerus">bottom-center</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="bottom-center">
          Bottom-center position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip className="border border-beerus">bottom-end</Chip>
        </Tooltip.Trigger>
        <Tooltip.Content position="bottom-end">
          Bottom-end position
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Chip className="border border-beerus">left</Chip>
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
