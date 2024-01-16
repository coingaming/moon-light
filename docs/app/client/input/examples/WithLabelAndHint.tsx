"use client";

import { Input, Label, Hint } from "@heathmont/moon-core-tw";
import { GenericInfo } from "@heathmont/moon-icons-tw";

const WithHintAndLabel = () => (
  <div className="w-full">
    <Label htmlFor="with-additions">Label</Label>
    <Input type="text" placeholder="With label and hint" id="with-additions" />
    <Hint>
      <GenericInfo />
      Informative message holder
    </Hint>
  </div>
);

export default WithHintAndLabel;
