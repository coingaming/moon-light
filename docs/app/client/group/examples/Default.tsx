"use client";

import { Group } from "@heathmont/moon-core-tw";

const Example = () => (
  <Group>
    <Group.FirstInput placeholder="First input" />
    <Group.LastSelect>
      <option value="">Last Select</option>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Group.LastSelect>
  </Group>
);

export default Example;
