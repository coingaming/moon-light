"use client";

import { InsetInput, Hint } from "@heathmont/moon-core-tw";

const Customization = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-space-8">
    <div className="w-full">
      <InsetInput
        placeholder="Placeholder"
        className="bg-primary [&_input]:text-brand"
      >
        <InsetInput.Label className="text-brand">Label</InsetInput.Label>
      </InsetInput>
      <Hint className="text-brand">Informative message holder</Hint>
    </div>
  </div>
);

export default Customization;
