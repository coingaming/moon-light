"use client";

import { CircularProgress } from "@heathmont/moon-core-tw";

const Value = () => (
  <>
    <CircularProgress value={33} />
    <CircularProgress value={66} />
    <CircularProgress value={100} />
  </>
);

export default Value;
