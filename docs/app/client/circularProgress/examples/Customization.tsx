"use client";

import { CircularProgress } from "@heathmont/moon-core-tw";

const Customization = () => (
  <CircularProgress
    value={75}
    className="[&_.background]:stroke-info [&_.progress]:stroke-negative"
  />
);

export default Customization;
