"use client";

import { Group } from "@heathmont/moon-core-tw";

const Options = () => (
  <div className="flex flex-col xl:flex-row gap-space-24 justify-center items-center">
    <div className="flex flex-col gap-space-24 justify-center items-justify">
      <Group orientation="horizontal">
        <Group.FirstInput placeholder="First input" />
        <Group.LastInput placeholder="Last input" />
      </Group>
      <Group orientation="horizontal">
        <Group.FirstInput placeholder="First input" />
        <Group.LastSelect>
          <option value="">Last select</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Group.LastSelect>
      </Group>
      <Group orientation="horizontal">
        <Group.FirstSelect>
          <option value="">First select</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Group.FirstSelect>
        <Group.LastInput placeholder="Last input" />
      </Group>
      <Group orientation="horizontal">
        <Group.FirstSelect>
          <option value="">First select</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Group.FirstSelect>
        <Group.LastSelect>
          <option value="">Last select</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Group.LastSelect>
      </Group>
    </div>
    <div className="flex flex-col gap-space-24 justify-center items-justify">
      <Group orientation="horizontal">
        <Group.FirstInsetInput placeholder="First inset input" />
        <Group.LastInsetInput placeholder="Last inset input" />
      </Group>
      <Group orientation="horizontal">
        <Group.FirstInsetInput placeholder="First inset input" />
        <Group.LastInsetSelect label="Last inset select">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Group.LastInsetSelect>
      </Group>
      <Group orientation="horizontal">
        <Group.FirstInsetSelect label="First inset select">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Group.FirstInsetSelect>
        <Group.LastInsetInput placeholder="Last inset input" />
      </Group>
      <Group orientation="horizontal">
        <Group.FirstInsetSelect label="First inset select">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Group.FirstInsetSelect>
        <Group.LastInsetSelect label="Last inset select">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Group.LastInsetSelect>
      </Group>
    </div>
  </div>
);

export default Options;
