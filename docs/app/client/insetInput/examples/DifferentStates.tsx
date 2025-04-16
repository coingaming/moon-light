"use client";

import { InsetInput, Hint } from "@heathmont/moon-core-tw";
import { GenericInfo } from "@heathmont/moon-icons-tw";

const DifferentStates = () => (
  <div className="flex flex-col lg:flex-row justify-around items-start w-full gap-space-8">
    <div className="w-full">
      <InsetInput placeholder="Placeholder" disabled>
        <InsetInput.Label>Label</InsetInput.Label>
      </InsetInput>
      <Hint disabled>Informative message holder</Hint>
    </div>
    <div className="w-full">
      <InsetInput placeholder="Placeholder" error>
        <InsetInput.Label>Label</InsetInput.Label>
      </InsetInput>
      <Hint error>
        <GenericInfo />
        Informative message holder
      </Hint>
    </div>
    <div className="w-full">
      <InsetInput placeholder="Placeholder" readOnly value="Read only text">
        <InsetInput.Label>Label</InsetInput.Label>
      </InsetInput>
      <Hint>Informative message holder</Hint>
    </div>
  </div>
);

export default DifferentStates;
