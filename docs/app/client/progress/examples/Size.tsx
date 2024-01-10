"use client";

import { Progress } from "@heathmont/moon-core-tw";

const Size = () => (
  <>
    <Progress size="6xs" value={75} />
    <Progress size="5xs" value={75} />
    <Progress size="4xs" value={75} />
    <Progress size="3xs" value={75} />
    <Progress value={75} />
  </>
);

export default Size;
