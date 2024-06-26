"use client";

import { NativeSelect, Label } from "@heathmont/moon-core-tw";

const Sizes = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div className="w-full">
      <Label htmlFor="test-1" size="sm">
        Small (sm)
      </Label>
      <NativeSelect id="test-1" size="sm" data-testid="select-sm">
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </NativeSelect>
    </div>
    <div className="w-full">
      <Label htmlFor="test-2">Medium (Default: md)</Label>
      <NativeSelect id="test-2" data-testid="select-md">
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </NativeSelect>
    </div>
    <div className="w-full">
      <Label htmlFor="test-3" size="lg">
        Large (lg)
      </Label>
      <NativeSelect id="test-3" size="lg" data-testid="select-lg">
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </NativeSelect>
    </div>
  </div>
);

export default Sizes;
