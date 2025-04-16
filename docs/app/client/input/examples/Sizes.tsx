"use client";

import { Input, Label } from "@heathmont/moon-core-tw";

const Sizes = () => (
  <div className="flex flex-col lg:flex-row justify-around items-start w-full gap-space-8">
    <div className="w-full">
      <Label htmlFor="size-sm" size="sm">
        Small
      </Label>
      <Input type="text" size="sm" placeholder="Placeholder" id="size-sm" />
    </div>
    <div className="w-full">
      <Label htmlFor="size-md">Medium (default)</Label>
      <Input type="text" placeholder="Placeholder" id="size-md" />
    </div>
    <div className="w-full">
      <Label htmlFor="size-lg">Large</Label>
      <Input type="text" size="lg" placeholder="Placeholder" id="size-lg" />
    </div>
  </div>
);

export default Sizes;
