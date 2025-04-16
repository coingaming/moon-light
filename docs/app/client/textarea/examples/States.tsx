"use client";

import { Hint, Textarea } from "@heathmont/moon-core-tw";
import { GenericInfo } from "@heathmont/moon-icons-tw";

const States = () => (
  <div className="flex flex-wrap xl:flex-nowrap items-center justify-around gap-space-8 w-full">
    <div className="w-full">
      <Textarea disabled placeholder="Disabled" />
      <Hint disabled>Informative message holder</Hint>
    </div>
    <div className="w-full">
      <Textarea error placeholder="Error" />
      <Hint error>
        <GenericInfo />
        Informative message holder
      </Hint>
    </div>
    <div className="w-full">
      <Textarea readOnly placeholder="Read only" />
      <Hint>Informative message holder</Hint>
    </div>
  </div>
);

export default States;
