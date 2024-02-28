"use client";

import { Group } from "@heathmont/moon-core-tw";

const Size = () => (
  <div className="flex flex-col xl:flex-row gap-6 justify-center items-center">
    <Group size="sm">
      <Group.FirstInput placeholder="First input" />
      <Group.LastInput placeholder="Last input" />
    </Group>
    <Group>
      <Group.FirstInput placeholder="First input" />
      <Group.LastInput placeholder="Last input" />
    </Group>
    <Group size="lg">
      <Group.FirstInput placeholder="First input" />
      <Group.LastInput placeholder="Last input" />
    </Group>
    <Group>
      <Group.FirstInsetInput placeholder="First inset input" />
      <Group.LastInsetInput placeholder="Last inset input" />
    </Group>
  </div>
);

export default Size;
