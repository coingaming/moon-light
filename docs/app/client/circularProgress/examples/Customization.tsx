"use client";

import { CircularProgress } from "@heathmont/moon-core-tw";

const Example = () => (
  <CircularProgress
    value={75}
    className="[&_.background]:stroke-whis [&_.progress]:stroke-dodoria"
  />
);

export default Example;
