"use client";

import { Button } from "@heathmont/moon-core-tw";

const MultiLine = () => (
  <Button size="xl" className="py-space-12">
    <span className="flex flex-col gap-space-4">
      <span className="leading-none">Button text</span>
      <span className="text-body-100 font-normal">Placeholder text</span>
    </span>
  </Button>
);

export default MultiLine;
