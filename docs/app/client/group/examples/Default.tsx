"use client";

import { Group } from "@heathmont/moon-core-tw";

const Example = () => (
  <Group>
    <Group.FirstInput placeholder="First input" />
    <Group.LastSelect>
      <option value="">Last Select</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </Group.LastSelect>
  </Group>
);

export default Example;
