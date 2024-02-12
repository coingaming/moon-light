"use client";

import { Popover, Button, MenuItem } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

const Default = () => {
  return (
    <Popover data-testid="popover">
      <div className="flex">
        <Popover.Trigger data-testid="popover-trigger">
          <Button>Toggle Popover</Button>
        </Popover.Trigger>
      </div>
      <Popover.Panel
        className="p-2 flex flex-col gap-1"
        data-testid="popover-panel"
      >
        <Content />
      </Popover.Panel>
    </Popover>
  );
};

const Content: React.FC = () => (
  <>
    <MenuItem data-testid="first-item">
      <span className="flex w-11 h-11 bg-gohan items-center justify-center rounded-lg">
        <OtherFrame className="text-bulma text-moon-24" />
      </span>
      <MenuItem.MultiTitle
        title="Tournaments"
        text={<span>Best tournaments with streamers</span>}
      />
    </MenuItem>
    <MenuItem data-testid="second-item">
      <span className="flex w-11 h-11 bg-gohan items-center justify-center">
        <OtherFrame className="text-bulma text-moon-24" />
      </span>
      <MenuItem.MultiTitle
        title="Promotions"
        text={<span> Your favorite games</span>}
      />
    </MenuItem>
    <MenuItem data-testid="third-item">
      <span className="flex w-11 h-11 bg-gohan items-center justify-center">
        <OtherFrame className="text-bulma text-moon-24" />
      </span>
      <MenuItem.MultiTitle
        title="Providers"
        text={<span> Your favorite games</span>}
      />
    </MenuItem>
  </>
);

export default Default;
