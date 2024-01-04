"use client";

import { Group } from "@heathmont/moon-core-tw";

const Example = () => (
  <div className="flex flex-col 2xl:flex-row gap-6 justify-center items-center">
    <Group>
      <Group.FirstInput placeholder="First input" />
      <Group.LastInput placeholder="Last input" />
    </Group>
    <Group>
      <Group.FirstInput placeholder="First input" />
      <Group.LastInput placeholder="Last input" />
    </Group>
    <Group>
      <Group.FirstInput placeholder="First input" />
      <Group.LastInput placeholder="Last input" />
    </Group>
  </div>
);

export default Example;
