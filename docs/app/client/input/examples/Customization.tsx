"use client";

import { Input, Label, Hint } from "@heathmont/moon-core-tw";

const Customization = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div className="w-full">
      <Label htmlFor="custom-style" className="text-piccolo">
        Customized label
      </Label>
      <Input
        type="text"
        placeholder="Placeholder"
        id="custom-style"
        className="bg-beerus text-piccolo"
      />
      <Hint className="text-piccolo">Customized helper text</Hint>
    </div>
  </div>
);

export default Customization;
