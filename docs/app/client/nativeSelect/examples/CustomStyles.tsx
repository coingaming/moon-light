"use client";

import { NativeSelect, Label, Hint } from "@heathmont/moon-core-tw";

const CustomStyles = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-space-8">
    <div className="w-full">
      <Label htmlFor="c-1" className="text-piccolo">
        Medium (Default: md)
      </Label>
      <NativeSelect
        placeholder="Placeholder"
        id="c-1"
        className="[&_select]:bg-primary [&_select]:text-brand [&_svg]:icon-brand"
        data-testid="select"
      >
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </NativeSelect>
      <Hint className="text-brand">Informative message holder</Hint>
    </div>
  </div>
);

export default CustomStyles;
