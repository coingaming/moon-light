"use client";

import { Group, Hint } from "@heathmont/moon-core-tw";
import { GenericInfo } from "@heathmont/moon-icons-tw";

const States = () => (
  <div className="flex flex-col lg:flex-row justify-around items-start w-full gap-2">
    <div>
      <Group error>
        <Group.FirstInput placeholder="First input" />
        <Group.LastInput placeholder="Last input" />
      </Group>
      <Hint error>
        <GenericInfo />
        Informative message
      </Hint>
      <Hint error>
        <GenericInfo />
        Informative message
      </Hint>
    </div>
    <div>
      <Group>
        <Group.FirstInput placeholder="First input" />
        <Group.LastInput placeholder="Last input" />
      </Group>
      <Hint error>
        <GenericInfo />
        Informative message
      </Hint>
    </div>
    <div>
      <Group disabled>
        <Group.FirstInput placeholder="First input" />
        <Group.LastInput placeholder="Last input" />
      </Group>
      <Hint disabled>Informative message</Hint>
    </div>
    <div>
      <Group readOnly>
        <Group.FirstInput placeholder="First input" />
        <Group.LastInput placeholder="Last input" />
      </Group>
      <Hint>Informative message</Hint>
    </div>
  </div>
);

export default States;
