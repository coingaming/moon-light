"use client";

import { Chip } from "@heathmont/moon-core-tw";

const WithOnClick = () => (
  <Chip className="border border-primary" onClick={() => alert("Chip clicked")}>
    Click me
  </Chip>
);
export default WithOnClick;
