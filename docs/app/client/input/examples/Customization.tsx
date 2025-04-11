"use client";

import { Input, Label, Hint } from "@heathmont/moon-core-tw";

const Customization = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-space-8">
    <div className="w-full">
      <Label htmlFor="custom-style" className="text-brand">
        Customized label
      </Label>
      <Input
        type="text"
        placeholder="Placeholder"
        id="custom-style"
        className="bg-primary text-brand"
      />
      <Hint className="text-brand">Customized helper text</Hint>
    </div>
  </div>
);

export default Customization;
