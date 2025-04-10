"use client";

import { Group } from "@heathmont/moon-core-tw";

const Direction = () => (
  <div className="flex flex-col xl:flex-row gap-space-24 justify-center items-center">
    <Group>
      <Group.FirstInput placeholder="First input" />
      <Group.LastInput placeholder="Last input" />
    </Group>
    <Group orientation="horizontal">
      <Group.FirstInput placeholder="First input" />
      <Group.LastInput placeholder="Last input" />
    </Group>
  </div>
);

export default Direction;
